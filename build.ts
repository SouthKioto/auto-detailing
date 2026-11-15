import tailwind from "bun-plugin-tailwind";
import { copyFile, mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  // Absolutne ścieżki do plików, żeby działały też zagnieżdżone adresy (np. /gallery/x)
  publicPath: "/",
  // Bez map źródeł na produkcji – nie publikujemy kodu źródłowego
  sourcemap: "none",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

for (const output of result.outputs) {
  console.log(
    ` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`,
  );
}

// Czcionki: kopiujemy tylko pliki użyte w @font-face w src/index.html
const fontsSrc = path.join(process.cwd(), "node_modules/@fontsource/libre-franklin/files");
const fontsOut = path.join(outdir, "fonts");
await mkdir(fontsOut, { recursive: true });
const fontsCss = await readFile(path.join(process.cwd(), "src/index.html"), "utf8");
for (const [, file] of fontsCss.matchAll(/url\("\/fonts\/([^"]+)"\)/g)) {
  await copyFile(path.join(fontsSrc, file!), path.join(fontsOut, file!));
}

// SPA fallback for Netlify: serve index.html for all routes (e.g. /gallery)
await Bun.write(path.join(outdir, "_redirects"), "/*    /index.html   200\n");

// Nagłówki bezpieczeństwa dla Netlify.
// Jeśli dodasz zewnętrzny skrypt/usługę (np. formularz, analitykę), dopisz jej domenę do CSP.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  // Leaflet i React ustawiają style inline
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://tile.openstreetmap.org",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const headers = `/*
  Content-Security-Policy: ${csp}
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()

# Pliki z hashem w nazwie (js, css, obrazki) można cache'ować na zawsze
/*.js
  Cache-Control: public, max-age=31536000, immutable
/*.css
  Cache-Control: public, max-age=31536000, immutable
/*.webp
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable
/*.woff2
  Cache-Control: public, max-age=31536000, immutable
`;
await Bun.write(path.join(outdir, "_headers"), headers);
