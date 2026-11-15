// Kolory bazowe (używane też w gradientach poniżej)
const navy = {
  DEFAULT: "#122130",
  dark: "#0a1016",
};

const primary = {
  300: "oklch(86.5% 0.127 207.078)",
  400: "oklch(78.9% 0.154 211.53)",
  500: "oklch(71.5% 0.143 215.221)",
  600: "oklch(60.9% 0.126 221.723)",
  700: "oklch(52% 0.105 223.128)",
  900: "oklch(39.8% 0.07 227.392)",
  950: "oklch(30.2% 0.056 229.695)",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Granatowe tło strony / header / footer / modal
        navy,

        // Główny kolor akcentu (odpowiednik cyan-* z Tailwinda)
        primary,

        // Teksty pomocnicze (odpowiedniki gray-300, gray-400, neutral-800)
        muted: {
          light: "oklch(87.2% 0.01 258.338)",
          DEFAULT: "oklch(70.7% 0.022 261.325)",
          dark: "oklch(26.9% 0 0)",
        },

        // Linki (odpowiednik blue-600)
        link: "oklch(54.6% 0.245 262.881)",

        // Półprzezroczyste nakładki / cienie
        overlay: {
          DEFAULT: "rgba(0, 0, 0, 0.8)",
          light: "rgba(0, 0, 0, 0.6)",
        },
      },

      backgroundImage: {
        // Ramki / paski: jasny niebieski -> ciemny (w prawo)
        "gradient-primary": `linear-gradient(to right, ${primary[600]}, ${primary[950]})`,
        // To samo w odwrotnym kierunku (ciemny -> jasny)
        "gradient-primary-reverse": `linear-gradient(to right, ${primary[950]}, ${primary[600]})`,
        // Pionowo (z góry na dół)
        "gradient-primary-vertical": `linear-gradient(to bottom, ${primary[600]}, ${primary[950]})`,
        // Ciemny niebieski, delikatny – np. tło kart / sekcji
        "gradient-primary-dark": `linear-gradient(to bottom right, ${primary[900]}, ${primary[950]})`,
        // Separator zanikający na lewej krawędzi (lewa kreska TitleBar)
        "gradient-fade-left": `linear-gradient(to right, transparent, ${primary[600]} 40%, ${primary[950]})`,
        // Separator zanikający na prawej krawędzi (prawa kreska TitleBar)
        "gradient-fade-right": `linear-gradient(to right, ${primary[950]}, ${primary[600]} 60%, transparent)`,
        // Linia przy nagłówku sekcji: niebieski -> zanika w prawo
        "gradient-line": `linear-gradient(to right, ${primary[600]}, transparent)`,
        // Napis na zdjęciu: przezroczysty u góry -> ciemny na dole
        "gradient-caption": `linear-gradient(to bottom, transparent, rgba(10, 16, 22, 0.92))`,
        // Granatowe tło sekcji
        "gradient-navy": `linear-gradient(to bottom, ${navy.DEFAULT}, ${navy.dark})`,
        // Tło całej strony (to samo co na <body> w index.css)
        "gradient-page": `linear-gradient(175deg, ${navy.DEFAULT}, ${navy.dark}, #000000)`,
      },
    },
  },
};
