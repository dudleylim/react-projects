import {useState, useEffect, useReducer} from 'react';
import data from './components/data';
// import List from './components/List';

const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  EDIT_TASK: 'EDIT_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  REMOVE_TASK_ALL: 'REMOVE_TASK_ALL'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      // assuming action content is a task object
      return ({
        ...state,
        tasks: [...state.tasks, action.content]
      });

    case ACTIONS.EDIT_TASK:
      // assuming action content is index of task object
      // const newTasks = state.tasks.filter((task) => {return task.id === action.content});
      // console.log(newTasks);
      
      state.tasks.forEach(task => {
        if (task.id === action.content) {
          (task.isEditing) ? task.isEditing = false : task.isEditing = true;
        }
      });

      return ({
        ...state
      });

    case ACTIONS.REMOVE_TASK:
      // assuming action content is index of task object
      return ({
        ...state,
        tasks: state.tasks.filter((task) => {return task.id !== action.content})
      });

    case ACTIONS.REMOVE_TASK_ALL:
      return ({
        ...state,
        tasks: []
      });
  
    default:
      return ({

      });
  }
};

const defaultState = {
  tasks: data,
};

function App() {
  // constants
  const [taskName, setTaskName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {id: Date.now().toString(), name: taskName, isEditing: false};
    dispatch({type: ACTIONS.ADD_TASK, content: newTask});
    setTaskName('');
  };

  const editTask = (index) => {
    dispatch({type: ACTIONS.EDIT_TASK, content: index});
  };

  const removeTask = (index) => {
    dispatch({type: ACTIONS.REMOVE_TASK, content: index});
  };

  const removeTaskAll = () => {
    dispatch({type: ACTIONS.REMOVE_TASK_ALL});
  };

  // return
  return (
    <main>
      <section className="main-section">
        {/* start */}
        <h1>To Do List</h1>
        
        {/* Form */}
        <form className="main-form" onSubmit={handleSubmit}>
          <input type="text" value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
          <button type="submit">Submit</button>
        </form>

        {/* List and Items */}
        <ul className="main-list">
            {state.tasks.map(({id, name, isEditing}) => {
              return <li key={id}>
                  <p className='list-par'>{name}</p>
                  {isEditing && (
                    <form>
                      <input type="text" name="" id="" />
                    </form>
                  )}
                  <button onClick={() => {editTask(id)}}>Edit</button>
                  <button onClick={() => {removeTask(id)}}>Remove</button>
                </li>;
            })}
        </ul>

        {/* Remove all button */}
        <button onClick={() => {removeTaskAll()}}>Clear Items</button>
        {/* end */}
      </section>
    </main>
  );
}

export default App;
