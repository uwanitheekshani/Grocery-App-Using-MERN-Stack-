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
import axios from 'axios';
import './AdminDash.css'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];




export default function AdminDash() {

  const [itemCode, setItemCode] = useState()
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [qtyOnHand, setQtyOnHand] = useState()

  // const navigate = useNavigate()


  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3500/api/v1/getItem")
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleItemSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3500/api/v1/item", { itemCode, itemName, itemPrice, qtyOnHand })
      .then(result => {
        console.log(result)
        alert("Saved");
        // navigate('/')

      })
      .catch(err => {
        console.log(err)
        alert("Failed");
      })
  }

  // const handleItemSubmit = async (event) => {
  //   event.preventDefault();

  //   const idata = new FormData(event.currentTarget);

  //   const item = {
  //     itemCode: idata.get('itemCode'),
  //     itemName: idata.get('itemName'),
  //     itemPrice: idata.get('itemPrice'),
  //     qtyOnHand: idata.get('qtyOnHand')
  //   }

  //   try {

  //     await axios
  //       .post("http://localhost:3500/api/v1/item", {
  //         item,
  //       })
  //       .then((res) => {
  //         // alert(res.data.message)
  //         console.log(res);
  //         // navigate("/Login");
  //         if (res.data.message === "saved") {
  //           console.log(res.data);
  //           localStorage.setItem('item', JSON.stringify(item))
  //           alert("Saved");

  //           // navigate("/Login");
  //           //  return <Navigate to="/Hero"/>
  //         }
  //       });
  //   } 
  //   catch (err) {
  //     alert("Failed");
  //     console.log(err.message);
  //   }

  // };

  return (
    <>

      {/* <h4>Admin</h4> */}

      <Typography variant="h4" gutterBottom>
        Admin
      </Typography>

      <Box
        component="form" onSubmit={handleItemSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="itemCode" label="ItemCode" variant="outlined" onChange={(e) => setItemCode(e.target.value)}
        />
        <TextField
          name="itemName" label="ItemName" variant="outlined" onChange={(e) => setItemName(e.target.value)}
        />
        <TextField
          name="itemPrice" label="ItemPrice" variant="outlined" onChange={(e) => setItemPrice(e.target.value)}
        />
        <TextField
          name="qtyOnHand" label="QTYOnHand" variant="outlined" onChange={(e) => setQtyOnHand(e.target.value)}
        />


        <Stack direction="row" spacing={2} className='buttons-stack'>
          <Button color="secondary">Update</Button>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
          <Button variant="outlined" color="error">
            Delete
          </Button>
        </Stack>


      </Box>


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
            {items.map((item) => {
              return <TableRow
                key={item}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.itemCode}
                </TableCell>
                <TableCell align="right">{item.itemName}</TableCell>
                <TableCell align="right">{item.itemPrice}</TableCell>
                <TableCell align="right">{item.qtyOnHand}</TableCell>
              </TableRow>
})}
          </TableBody>
  

        </Table>
      </TableContainer>


    </>


  );
}

