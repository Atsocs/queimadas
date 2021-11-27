export default function Fireboard({ country, state, city }) {
  return (
    <div>
      {country && (
        <div>
          Focos de Queima no {country.name}: {country.count}
        </div>
      )}
      {state && (
        <div>
          Focos de Queima em {state.name}: {state.count}
        </div>
      )}
      {city && (
        <div>
          Focos de Queima em {city.name}: {city.count}
        </div>
      )}
    </div>
  );
}
