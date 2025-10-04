import './App.css'

function Cientifico({ nombre, profesion, premios, descubrimiento }) {
  return (
    <div className="cientifico-card">
      <h2>{nombre}</h2>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Premios:</strong> {premios}</p>
      <p><strong>Descubrió:</strong> {descubrimiento}</p>
    </div>
  );
}

function App() {
  const cientificos = [
    {
      nombre: "Maria Skłodowska-Curie",
      profesion: "fisica y quimica",
      premios: "4 (Premio Nobel de Fisica, Premio Nobel de Quimica, Medalla Davy, Medalla Matteucci)",
      descubrimiento: "polonio (elemento quimico)"
    },
    {
      nombre: "Katsuko Saruhashi",
      profesion: "geoquimica",
      premios: "2 (Premio Miyake de geoquimica, Premio Tanaka)",
      descubrimiento: "un metodo para medir el dioxido de carbono en el agua de mar"
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Científicos Notables</h1>
      </header>

      <div className="cientificos-container">
        {cientificos.map((cientifico, index) => (
          <Cientifico
            key={index}
            nombre={cientifico.nombre}
            profesion={cientifico.profesion}
            premios={cientifico.premios}
            descubrimiento={cientifico.descubrimiento}
          />
        ))}
      </div>
    </div>
  );
}

export default App