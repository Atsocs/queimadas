export default function FireBoard({ country, state, city }) {
  return (
    <div>
      <h3>Focos de Queima nas últimas 24h</h3>
      {country && (
        <div>
          {country.name}: {country.count}
        </div>
      )}
      {state && (
        <div>
          {state.name}: {state.count}
        </div>
      )}
      {city && (
        <div>
          {city.name}: {city.count}
        </div>
      )}
    </div>
  );
}
