import { serve } from "bun";
import path from "node:path";
import index from "./index.html";

const fontsDir = path.join(import.meta.dir, "../node_modules/@fontsource/libre-franklin/files");

const server = serve({
  routes: {
    // Czcionki (na produkcji kopiuje je build.ts do dist/fonts)
    "/fonts/:file": async (req) => {
      // basename: tylko pliki z tego katalogu, bez "../"
      const file = Bun.file(path.join(fontsDir, path.basename(req.params.file)));
      return (await file.exists())
        ? new Response(file)
        : new Response("Not found", { status: 404 });
    },
    "/*": index,
  },
  development: true,
});

console.log(`Listening on ${server.url}`);
