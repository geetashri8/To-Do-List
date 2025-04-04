
import {createContext,useState, useReducer} from 'react';


export const CrudContext = createContext();

const reducer = (state,action)=>{
    let newState=[];
    switch(action.type){
        case "AddTask": newState=[...state,action.payload]; localStorage.setItem("tasklist", JSON.stringify(newState)); return newState;

        case "DeleteTask":  newState = state.filter((ele)=> ele.id !== action.payload); localStorage.setItem("tasklist", JSON.stringify(newState)); return newState;

        case "EditTask": let index = state.filter((ele,ind)=> {if(ele.id === action.payload.id){return ind}});
                         state.splice(index[0],1,action.payload);
                         localStorage.setItem("tasklist", JSON.stringify(state)); 
                         return state;

        default:
            return state;

        
    }
    
}

let taskList = localStorage.getItem('tasklist') === null? [] :JSON.parse(localStorage.getItem('tasklist'));
console.log(taskList);

const CrudProvider = ({children})=>{
    const[rowId, setRowId] = useState("");
    const[state,dispatch] = useReducer(reducer, taskList);
    console.log("Context value:", [ state, dispatch ]);

    return(<>
    <CrudContext.Provider value={{state,dispatch,rowId,setRowId}}>
        {children}
    </CrudContext.Provider>
    </>)
}
export default CrudProvider;