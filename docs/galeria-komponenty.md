# Galeria – podział na komponenty

Plan osobnej strony galerii (`/galeria.html`) na podstawie makiety:
https://claude.ai/artifact/8D46hRSFcCtQPysVbNLM5D

Zasada: strona galerii tylko składa klocki, a stan trzymamy w jednym miejscu.

## Struktura plików

```
src/
├─ galeria.html                 ← drugie wejście, build.ts sam je złapie (glob src/**/*.html)
├─ galeria.tsx                  ← createRoot + <PageLayout><GalleryPage/></PageLayout>
├─ data/
│  └─ gallery.ts                ← tablice zdjęć (pary + auta), wspólne dla obu stron
├─ pages/
│  ├─ Main.tsx
│  └─ GalleryPage.tsx           ← stan filtra i lightboxa, układ sekcji
├─ components/
│  ├─ PageLayout.tsx            ← Header + children + Footer (to, co teraz robi App.tsx)
│  ├─ ContactCta.tsx            ← pasek „Chcesz taki efekt u siebie?”
│  └─ gallery/
│     ├─ FilterChips.tsx
│     ├─ PairCard.tsx
│     ├─ PhotoTile.tsx
│     ├─ BeforeAfterSlider.tsx
│     ├─ BeforeAfterBadge.tsx
│     └─ Lightbox.tsx
```

Nie trzeba `react-router`: każdy plik `.html` w `src/` to osobna strona po buildzie.

## Osobne komponenty i dlaczego

| Komponent | Powód | Props |
|---|---|---|
| `BeforeAfterSlider` | Użyty w lightboxie i na stronie głównej. Ma własny stan (pozycja suwaka). | `before, after, alt` |
| `Lightbox` | Najwięcej logiki: obsługa Esc i strzałek z klawiatury, blokada przewijania, focus. Owinąć w `react-modal` (już jest w projekcie), który robi focus trap i scroll lock. | `items, index, onClose, onChange(index)` |
| `PairCard` | Powtarza się 6 razy i trafi też na stronę główną jako podgląd. | `pair, onOpen` |
| `PhotoTile` | Powtarza się, a wariant „wyróżniony” to jeden prop. | `photo, featured?, onOpen` |
| `FilterChips` | Prosty i bez własnego stanu, przyda się też np. w cenniku. | `options, value, onChange` |
| `BeforeAfterBadge` | Etykiety „Przed” i „Po” są w 3 miejscach: karta, lightbox, slider. | `variant: "before" \| "after"` |
| `ContactCta` | Pasuje też na koniec strony głównej. | brak, albo `title` |
| `PageLayout` | Header i Footer muszą być identyczne na obu stronach. | `children` |

## Co zostaje w `GalleryPage`, bez wydzielania

- **Intro:** breadcrumb, h1 i opis. Użyte raz, czysty markup.
- **Wrappery sekcji i siatki:** `grid` z `.map()` po `PairCard` i `PhotoTile`.
- **Stan:** `filter` i `openIndex`. Musi być tutaj, bo obie siatki otwierają ten sam lightbox, a lista w lightboxie zależy od filtra. Listę widocznych zdjęć liczyć w `useMemo` z `filter`.

**Reguła:** wydzielam, gdy coś się powtarza, ma własny stan albo ma więcej niż ok. 80 linii. Markup użyty raz zostaje na miejscu.

## Dane i typy (`data/gallery.ts`)

```ts
export interface BeforeAfterPair { id: string; title: string; before: string; after: string }
export interface CarPhoto { id: string; title: string; src: string }

export type LightboxItem =
  | ({ kind: "pair" } & BeforeAfterPair)
  | ({ kind: "photo" } & CarPhoto);
```

Union z polem `kind` pozwala w `Lightbox` zrobić
`item.kind === "pair" ? <BeforeAfterSlider/> : <img/>`, a TypeScript sam zawęzi typ.
Dzięki `id` nie trzeba już używać `imageName` jako `key`.

## Zmiany w istniejącym kodzie

- **`Header`:**
  - Linki do sekcji zmienić na `/#o-nas` zamiast `#o-nas`, bo z `/galeria.html` sam `#o-nas` nie zadziała.
  - Dodać link „Galeria” i prop `current?: "home" | "gallery"`, który podświetli aktywny link i ustawi `aria-current="page"`.
- **`Gallery.tsx` na stronie głównej:** zamienić na podgląd, czyli 2–4 `PairCard` z `data/gallery.ts` i przycisk „Zobacz całą galerię” prowadzący do `/galeria.html`. Efekt z wczytywaniem zdjęć i liczeniem proporcji (`ratio`) można wtedy usunąć.
- **`TitleBar`:** użyć jako nagłówka sekcji w galerii, żeby wygląd był spójny.
