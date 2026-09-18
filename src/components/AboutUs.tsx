export const AboutUs = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-3xl p-5 sm:p-8 md:p-10 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
          Profesjonalny autodetailing – zadbamy o Twój samochód od środka i na
          zewnątrz
        </h2>

        <p className="text-base sm:text-lg mb-4">
          Zajmujemy się kompleksowym autodetailingiem, czyli{" "}
          <span className="underline font-bold">profesjonalną pielęgnacją</span>
          , <span className="underline font-bold">czyszczeniem</span> i{" "}
          <span className="underline font-bold">
            zabezpieczaniem samochodów
          </span>
          .
        </p>

        <p className="text-base sm:text-lg mb-4">
          Dbamy o każdy detal, wykorzystując odpowiednie metody oraz wysokiej
          jakości produkty, aby przywrócić pojazdom świeżość, estetykę i
          wyjątkowy wygląd. Detailing wnętrza obejmuje dokładne czyszczenie
          wszystkich elementów kabiny, dzięki czemu wnętrze odzyskuje świeżość i
          zadbany wygląd. Oferujemy również czyszczenie oraz impregnację skór,
          które pomagają utrzymać skórzaną tapicerkę w dobrej kondycji i chronić
          ją przed codziennym użytkowaniem. W przypadku tapicerki materiałowej
          wykonujemy profesjonalne pranie, usuwając zabrudzenia i odświeżając
          wnętrze samochodu.
        </p>

        <p className="text-base sm:text-lg mb-6">
          Zajmujemy się również detailingiem zewnętrznym, obejmującym
          kompleksową pielęgnację karoserii. Wykonujemy korekty lakieru, które
          pozwalają poprawić jego wygląd, zredukować widoczne zarysowania i
          przywrócić lakierowi połysk. Dla dodatkowej ochrony i efektu
          wizualnego oferujemy woskowanie oraz aplikację powłok ceramicznych.
          Wykonujemy także polerowanie lamp, poprawiając ich wygląd i
          przywracając im przejrzystość.
        </p>

        <div className="mb-6">
          <p className="text-base sm:text-lg font-semibold mb-2">
            Nasze usługi:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
            <li>🚘 Detailing wnętrz</li>
            <li>🧴 Czyszczenie i impregnacja skór</li>
            <li>🧼 Pranie tapicerki materiałowej</li>
            <li>✨ Detailing zewnętrzny</li>
            <li>🔧 Korekty lakieru</li>
            <li>🛡️ Woskowanie</li>
            <li>💎 Powłoki ceramiczne</li>
            <li>💡 Polerowanie lamp</li>
          </ul>
        </div>

        <p className="text-base sm:text-lg">
          Do każdego samochodu{" "}
          <span className="underline font-bold">podchodzimy indywidualnie</span>
          , zwracając uwagę na stan pojazdu, rodzaj materiałów oraz oczekiwany
          efekt. Naszym celem jest nie tylko czysty samochód, ale przede
          wszystkim perfekcyjnie zadbany i zabezpieczony pojazd.
        </p>
      </div>
    </section>
  );
};
