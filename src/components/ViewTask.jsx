




import { Card, CardContent, CardMedia, CardActions,Container, Typography, Button } from "@mui/material";

/////////////////////////////////////////////////////////////////////////////////////////////////////

import {useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {CrudContext} from './ContextApi.jsx';
//////////////////////////////////////////////////////////////////////////////////////////////////////







export default function ViewTask(){
    
const{state,dispatch,rowId,setRowId} = useContext(CrudContext);

const taskObj = state.find((ele)=>ele.id === rowId)
console.log(taskObj)

const navigate = useNavigate();
   




    return(<>
 
      <Container maxWidth="100%"
        sx={{
        border: "2px solid #222426",
        backgroundColor: "#c5d4c9",
        color: "	#222426",
        padding:"0.5rem",
        borderRadius: "8px",

        
        }}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: "0.5rem",width:{xs:"300px", sm:"400px",backgroundColor: "#c5d4c9"} }} style={{boxShadow:"none"}}>
            <Typography variant="h5">{taskObj.taskName}</Typography>
            <Typography variant="h6">{taskObj.description}</Typography>
            <Typography variant="h6">{taskObj.priority}</Typography>
            <Typography variant="h6">{taskObj.startDate} {taskObj.endDate}</Typography>
            <Typography variant="h6">Status: {taskObj.status?"Completed":"Pending"}</Typography>

            </Card>
                  

        <Button  variant="contained" color="primary" sx={{width:"3rem", backgroundColor:"none"}} onClick={()=>navigate("/")}>Close</Button>
    
      </Container>
 

    </>)
}


