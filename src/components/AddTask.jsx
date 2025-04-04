import  '../styles/AddTask.css'
import {useState, useReducer} from 'react'

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth() +1 < 10 ? "0"+`${dateObj.getMonth() +1}` :dateObj.getMonth() +1;
const date = dateObj.getDate() < 10 ? "0"+`${dateObj.getDate()}` : dateObj.getDate();
const dateStr = `${year}-${month}-${date}`;
//console.log(new Date())
const taskObj = {taskName:"",description:"", startDate:"", endDate:"", priorities:"",statusT:false};
const reducer = (state,action)=>{
    switch(action.type){
        case "AddTask":return [...state,action.payload];
        

        
    }
    
}

export default function AddTask(){

    const [task, setTask] = useState(taskObj);
    const [dateMin, setDateMin] = useState(dateStr);
    const initialState = [];
    const [state, dispatch] = useReducer(reducer, initialState )
    //console.log(dateMin)
    
    return(<>
           <form className="add-task-form">
            <div className="add-task-child"><input type="text" name="taskName" value={task.taskName} placeholder="Add task..." onChange={(e)=>setTask({...task,taskName:e.target.value})}/></div>
            <div className="add-task-child"><textarea name="description" placeholder="Add description..." value={task.description} onChange={(e)=>setTask({...task,description:e.target.value})}/></div>
            <div className="add-task-child">
                <div className="start-date-class"><label htmlFor="startDate">Start date : </label><input type="date" value={task.startDate} name="startDate" min={dateMin} onChange={(e)=>setTask({...task,startDate:e.target.value})}/></div>
                <div className="end-date-class"><label htmlFor="endDate">End date : </label><input type="date" value={task.endDate} name="endDate" onChange={(e)=>setTask({...task,endDate:e.target.value})}/></div>
                
            </div>
            <div className="add-task-child">
                <label htmlFor="priorities">Set Priority :</label>
                 <select id="priorities" name="priorities" value={task.priorities} onChange={(e)=>setTask({...task,priorities:e.target.value})}>
                    <option value="">select</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                 </select>
                 <div></div>
            </div>

            <div className="add-task-child">
                <div id="status-id"><label>Status :</label></div>
                <div id="status-button" name="statusT">{task.statusT ?"Completed":"Incomplete"}</div>
                <div id="status-div"></div>
            </div>
            <div className="add-task-child"><button type="submit" id="save-button" onClick={(e)=>{e.preventDefault();dispatch({type:"AddTask",payload:task}); console.log(state);}}>Save</button></div>
            
           </form>
        </>)
}