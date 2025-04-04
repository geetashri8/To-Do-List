import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import AddTaskMui from './AddTaskMui.jsx';
import ToDoList from './ToDoList.jsx';
import EditTask from './EditTask.jsx';
import ViewTask from './ViewTask.jsx'


export default function ToDoRouter(){
    return(<>
        <Router>
            <Routes>
                <Route path="/" element={<ToDoList/>} />
                <Route path="/addtask" element={<AddTaskMui />} />
                <Route path="/edittask" element={<EditTask />} />
                <Route path="/viewtask" element={<ViewTask />} />
            </Routes>
        </Router>
    </>)
}