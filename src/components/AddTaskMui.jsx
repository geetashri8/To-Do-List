
import {Container, Typography,Box,Stack} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
/////////////////////////////////////////////////////////////////////////////////////////////////////

import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {CrudContext} from './ContextApi.jsx';
//////////////////////////////////////////////////////////////////////////////////////////////////////

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth() +1 < 10 ? "0"+`${dateObj.getMonth() +1}` :dateObj.getMonth() +1;
const date = dateObj.getDate() < 10 ? "0"+`${dateObj.getDate()}` : dateObj.getDate();
const dateStr = `${year}-${month}-${date}`;
console.log(Date.now())
const taskObj = {id:"", taskName:"",description:"", startDate:"", endDate:"", priority:"",status:false};


const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #c5d4c9 inset",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
  },
});



export default function AddTaskMui(){

   const [task, setTask] = useState(taskObj);
   const{state,dispatch} = useContext(CrudContext);
   const navigate = useNavigate();
   //console.log(state,dispatch)

   function handleChange(e){
    setTask({...task,[e.target.name]:e.target.value})
   }

   function handleSubmit(e){
    e.preventDefault();
    const newTask = {...task,id:`${Date.now().toString() + Math.floor(Math.random() * 1000).toString()}`};
   
    console.log(task);
    console.log(state);
    dispatch({type:"AddTask",payload:newTask});
    setTask(taskObj);
    setTimeout(1000,navigate("/"));
   }

    return(<>
    <ThemeProvider theme={theme} >
      <Container maxWidth="100%"
        sx={{
        border: "2px solid #222426",
        backgroundColor: "#c5d4c9",
        color: "	#222426",
        padding:"0.5rem",
        borderRadius: "8px",
        
        }}>
      <Stack  component="form" onSubmit={(e)=>handleSubmit(e)} sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: "1rem",width:{xs:"300px", sm:"400px",} }}>
        <TextField label="Task" placeholder="Enter the task..." name="taskName" value={task.taskName} onChange={(e)=>handleChange(e)} variant="standard" fullWidth  required />
      
        <TextField label="Description"  name="description" value={task.description} onChange={(e)=>handleChange(e)} variant="standard" multiline fullWidth required />
        
        <FormControl fullWidth variant="outlined">
          <InputLabel id="select-label">Priority</InputLabel>
          <Select labelId="select-label" label="Priority" name="priority" value={task.priority }  onChange={(e)=>handleChange(e)} variant="outlined">
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Start-Date" format="DD-MM-YYYY" minDate={dayjs(dateStr, "YYYY-MM-DD", true)} onChange={(newValue)=>setTask({...task, startDate:newValue.format("YYYY-MM-DD")})} sx={{width:"48%"}} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="End-Date" minDate={dayjs(task.startDate, "YYYY-MM-DD", true)}  onChange={(newValue)=>setTask({...task, endDate:newValue.format("YYYY-MM-DD")})} format="DD-MM-YYYY" sx={{width:"48%"}}/>
          </LocalizationProvider>
        </Box>
        <Box sx={{display:"flex",justifyContent:"flex-start"}} >
        <Typography>Status:{task.status ?"Completed":"Pending"}</Typography>
        </Box>    

        <Button type="submit" variant="contained" color="primary" sx={{width:"3rem"}}>Save</Button>
      </Stack>
      </Container>
    </ThemeProvider>

    </>)
}


/* 
        <TextField  label="Start-Date"  type="date"  InputLabelProps={{ shrink: true }}  inputProps={{ min: "2024-04-01" }} fullWidth/>
        <TextField  label="End-Date"  type="date"  InputLabelProps={{ shrink: true }}  inputProps={{ min: "2024-04-01" }} fullWidth/>
         */