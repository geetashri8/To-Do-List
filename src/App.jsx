


import ToDoList from './components/ToDoList.jsx';
import CrudProvider from './components/ContextApi.jsx'
import ToDoRouter from './components/ToDoRouter.jsx';

import './App.css';

function App() {
  

  return (
    <>
      <CrudProvider>
         <ToDoRouter/>
      </CrudProvider>
     
    </>
  )
}

export default App
