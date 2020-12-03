import { useState } from "react";

function App() {

  const [task, setTask] = useState('');
  const [itemList, setItemList] = useState([]);
  
  
  function addTask(e) {
    e.preventDefault() //para que en nuestro formulario no se procese el get
    if(!task.trim()){
      console.log('no has escrito nada');
      return
    } 
    console.log(task);
    drawItemList(task);
    setTask(''); 

  }

  function drawItemList(task) {
    setItemList([...itemList, {id:itemList.length, task}]);

  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD SIMPLE</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {/* <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-right">Editar</button>
            </li> */}
            {
              itemList.map( item =>  <li className="list-group-item" key={item.id}>
                                      <span className="lead">{ item.task }</span>
                                      <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                                      <button className="btn btn-warning btn-sm float-right">Editar</button>
                                    </li>
                          )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={ e=>addTask(e) }>
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Añade una tarea"
              onChange= { e => setTask(e.target.value)} // estoy añadiendo al estado lo que hay en el input
              value= {task}
            />
            <button className="btn btn-dark btn-block" type="submit"> Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
