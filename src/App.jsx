import Saludo from './components/Saludo';

function App() {



  return (
    <div>
      <h1 className="container mt-5">Proyecto desde cero</h1>
      <Saludo persona='Bea' />
      <Saludo persona='Lola' />
      <Saludo persona='Erika' />

    </div>
  );
}

export default App;
