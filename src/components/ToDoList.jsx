import  {Container,Button, Grid, Paper, Box,
         Typography,Table,TableHead, TableBody, TableContainer, TableCell, TableRow} from '@mui/material';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AddIcon from '@mui/icons-material/Add';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {CrudContext} from './ContextApi.jsx';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export default function ToDoList(){
  const navigate = useNavigate();
  const {state,dispatch,rowId, setRowId} = useContext(CrudContext);

  
    return(<>
        <Container
        maxWidth="100%"
        sx={{
        border: "2px solid #222426",
        backgroundColor: "#b2b3b1",
        color: "	#222426",
        padding:"0.5rem",
        borderRadius: "8px",
        
        }}
        >
          <Grid container  direction="column" spacing={1} sx={{ maxWidth:"100%"}}>

            <Grid item  sx={{ maxWidth:"100%",display: "flex",justifyContent:"space-between" }}>       
              <Box display="flex" alignItems="center" gap={1}>
                <AssignmentRoundedIcon />
                <Typography variant="h5" sx={{fontFamily:"fantasy",fontWeight:"bold"}}>To-Do-List</Typography>
              </Box>
              <Button variant="contained" color="inherit" sx={{fontWeight:"bold",backgroundColor:"#e3dac0"}} onClick={()=>navigate("/addtask")}><AddIcon/>Add Task</Button>
            </Grid>

            <Grid item sx={{ maxWidth:"100%"}}>
            <TableContainer component={Paper} sx={{ maxWidth:"100%",maxHeight:"600px", overflowY:"scroll" }}>
            <Table>            
              <TableHead >
                <TableRow sx={{ position: "sticky", top: 0, zIndex: 1, fontSize:"medium", backgroundColor: "#c5d4c9" }}>
                  <TableCell ><strong>TASK</strong></TableCell>
                  <TableCell></TableCell>
                  <TableCell ><strong>PRIORITY</strong></TableCell>
                  <TableCell ><strong>STATUS</strong></TableCell>
                  <TableCell ><strong>DUE DATE</strong></TableCell>
                </TableRow>
              </TableHead>

              <TableBody sx={{backgroundColor:"#e3d1c2"}}>
                {state.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.taskName}</TableCell>
                    <TableCell>
                      <Button onClick={()=>{ setRowId(row.id); navigate("/edittask")}}>edit</Button>
                      <Button onClick={()=>dispatch({type:"DeleteTask", payload:row.id})}>delete</Button>
                      <Button onClick={()=>{ setRowId(row.id); navigate("/viewtask")}}>view</Button>
                    </TableCell>
                    <TableCell>{row.priority}</TableCell>
                    <TableCell>{row.status? "Completed":"Pending"}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
            </TableContainer>
            </Grid>
          </Grid>
   
    </Container>
        
    </>)
}