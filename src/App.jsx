import { useState } from "react";

function App() {

  const [task, setTask] = useState(''); // estado para la tarea que se escribe en el input
  const [itemList, setItemList] = useState([]); // estado para la lista de tareas
  const [editionMode, setEditionMode] = useState(false); // estado para ver si tengo que poner el form en modo edicion o no
  const [taskId, setTaskId] = useState('');
  
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

  // Método que se llama cuando presionamos el boton "editar" del formulario
  function updateTask(e) {
    e.preventDefault() //para que en nuestro formulario no se procese el get
    if(!task.trim()){ 
      console.log('no has escrito nada');
      return
    } 

    const updatedItemList = itemList.map(item => item.id === taskId ? { id: taskId, task} : item);
    setItemList(updatedItemList);
    setEditionMode(false);
    setTask('');
    setTaskId('');
  }

  function drawItemList(task) {
    setItemList([...itemList, {id:itemList.length, task}]);

  }

  function deleteItem(itemId) {
    console.log('itemId', itemId);
    // const position = itemList.findIndex(element => element.id !== itemId);
    // console.log(position);
    // const updatedItemList = itemList.splice(position,1);
    // setItemList(updatedItemList);
    // console.log(updatedItemList);

    const updatedItemList = itemList.filter(item => item.id !== itemId);
    setItemList(updatedItemList);
    console.log(updatedItemList);
  }


  function updateItem(item) {
    setEditionMode(true);
    setTask(item.task);
    setTaskId(item.id);
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
                                      <button 
                                        className="btn btn-danger btn-sm float-right mx-2"
                                        onClick= {() => deleteItem(item.id)}
                                      >
                                          Eliminar
                                      </button>
                                      <button 
                                        className="btn btn-warning btn-sm float-right"
                                        onClick= {() => updateItem(item)}
                                      >
                                          Editar
                                      </button>
                                    </li>
                          )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              editionMode ? 'Editar tarea' : 'Añadir tarea'
            }
          </h4>
          <form onSubmit={ editionMode ? (e) => updateTask(e) : (e) => addTask(e) }>
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Añade una tarea"
              onChange= { e => setTask(e.target.value)} // estoy añadiendo al estado lo que hay en el input
              value= {task}
            />
            {
              editionMode ? (
                <button className="btn btn-warning btn-block" type="submit"> Editar</button>
              ): (
                <button className="btn btn-dark btn-block" type="submit"> Añadir</button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
