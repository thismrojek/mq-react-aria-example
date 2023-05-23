import { CustomTabs } from "./tabs/Tabs";

export const ReachUIExample = () => {
  const tabs = [
    {
      trigger: 'O firmie',
      content: 'Nasza firma stale poszukuje nowych wyzwań i możliwości rozwoju. Jestemy otwarci na innowacje i nowe technologie, które mogą przyczynić się do naszego sukcesu. Jesteśmy zmotywowani do ciągłego doskonalenia i doskonałości, aby dostarczać naszym klientom najlepsze produkty/usługi.'
    },
    {
      trigger: 'O zespole',
      content: 'Agile zespół to grupa ludzi, która pracuje razem w duchu elastyczności, adaptacji i współpracy. Taki zespół opiera swoje działania na wartościach i zasadach Agile, które kładą nacisk na ciągłą dostawę wartościowych rezultatów, interakcję i współpracę z klientem oraz adaptację do zmieniających się wymagań.'
    },
    {
      trigger: 'O owocach',
      content: 'Owocowe czwartki to tradycja, która często jest praktykowana przez dynamiczne zespoły. W tym dniu, zespół spotyka się, aby dzielić się swoimi osiągnięciami, celebrować sukcesy i doceniać wkład każdego członka. W takiej atmosferze, często przygotowuje się owoce lub zdrowe przekąski, aby podkreślić troskę o dobre samopoczucie i zdrowie.'
    },
  ]

  return (
    <div>
      <h2>Reach UI</h2>

      <h3>Tabs</h3>
      <CustomTabs tabs={tabs} />
    </div>
  );
};
