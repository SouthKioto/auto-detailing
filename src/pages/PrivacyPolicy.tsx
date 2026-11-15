import { useEffect } from "react";
import { TitleBar } from "@/components/TitleBar";

const EMAIL = "autodetailing.norbertjarosz@gmail.com";
const UPDATED = "15 listopada 2026";

const ext = "font-semibold text-primary-300 underline hover:text-white";

export const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Polityka prywatności – Auto Detailing Jarosz";
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-8">
      <TitleBar title="Polityka prywatności" marginTop="mt-14" />

      <article className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-light sm:text-[17px]">
        <p className="text-sm text-muted">Ostatnia aktualizacja: {UPDATED}</p>

        <p>
          Administratorem danych jest Norbert Jarosz, Stryszów 142, 34-146
          Stryszów, kontakt:{" "}
          <a href={`mailto:${EMAIL}`} className={`${ext} break-all`}>
            {EMAIL}
          </a>
          .
        </p>

        <p>
          <strong className="text-white">
            Strona nie używa plików cookies
          </strong>
          , nie ma formularzy ani narzędzi analitycznych. Jeśli zadzwonisz lub
          napiszesz, użyjemy Twojego numeru, maila i podanych informacji tylko
          po to, żeby odpowiedzieć i umówić wizytę (art. 6 ust. 1 lit. b RODO),
          i nie przekażemy ich nikomu.
        </p>

        <p>
          Stronę hostuje Netlify (USA). Zapisuje on techniczne logi, np. adres
          IP. Mapa dojazdu pobiera fragmenty mapy z OpenStreetMap, co również
          przekazuje im Twój adres IP. Link „Wyznacz trasę” prowadzi do Google
          Maps i dopiero po kliknięciu obowiązuje tam polityka Google.
        </p>

        <p>
          Możesz poprosić o dostęp do swoich danych, ich poprawienie lub
          usunięcie.
        </p>
      </article>
    </main>
  );
};
