import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AdminDash.css'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];




export default function AdminDash() {

  return (
    <>
    
   {/* <h4>Admin</h4> */}
   
   <Typography variant="h4" gutterBottom>
        Admin
      </Typography>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ItemCode" variant="outlined" />
      <TextField id="outlined-basic" label="ItemName" variant="outlined" />
      <TextField id="outlined-basic" label="ItemPrice" variant="outlined" />
      <TextField id="outlined-basic" label="QTYOnHand" variant="outlined" />
    </Box>

   
    <Stack direction="row" spacing={2} className='buttons-stack'>
      <Button color="secondary">Update</Button>
      <Button variant="contained" color="success">
        Save
      </Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </Stack>


    <TableContainer component={Paper} className='item-table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='item-tableH'>ItemCode</TableCell>
            <TableCell className='item-tableH' align="right">ItemName</TableCell>
            <TableCell className='item-tableH' align="right">ItemPrice</TableCell>
            <TableCell className='item-tableH' align="right">QTYOnHand</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </>


  );
}

