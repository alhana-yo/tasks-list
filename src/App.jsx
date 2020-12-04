import Comentario from './components/Comentario';
import Saludo from './components/Saludo';
function App() {



  return (
    <div>
      <h1 className="container mt-5">Proyecto desde cero</h1>
      <Saludo persona='Bea' />
      <Saludo persona='Lola' />
      <Saludo persona='Erika' />

      <h3>Cajita de comentarios</h3>
      <Comentario imgUrl="http://lorempixel.com/64/64/cats" name="Bea" comment="lorem ipsum lloorab  jafbsfgga"/>
      <Comentario imgUrl="http://lorempixel.com/64/64/food" name="Lola" comment="uuuu que genial todo!"/>
      <Comentario imgUrl="http://lorempixel.com/64/64/sports" name="Erika" comment="uuaalll que fuerte jafbsfgga"/>
    </div>
  );
}

export default App;
