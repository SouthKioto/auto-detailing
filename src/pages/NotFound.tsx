import { useEffect } from "react";
import { TitleBar } from "@/components/TitleBar";

export const NotFound = () => {
  useEffect(() => {
    document.title = "Nie znaleziono strony – Auto Detailing Jarosz";
    // Wyszukiwarki nie powinny indeksować tej podstrony
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <main className="flex flex-col items-center px-6 text-center">
      <TitleBar title="404" marginTop="mt-16" />
      <p className="mt-6 max-w-md text-lg text-muted-light">
        Nie znaleźliśmy tej strony. Może adres się zmienił albo jest w nim
        literówka.
      </p>
      <div className="mt-8 -skew-x-12 rounded-md bg-gradient-primary p-0.5">
        <a
          href="/"
          className="flex min-h-11 items-center justify-center rounded-[5px] bg-navy px-5.5 font-semibold text-primary-500 no-underline transition-colors hover:bg-[#16293B] hover:text-primary-300"
        >
          <span className="skew-x-12">Wróć na stronę główną</span>
        </a>
      </div>
    </main>
  );
};
