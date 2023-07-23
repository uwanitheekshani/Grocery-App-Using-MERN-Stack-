import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css'
// const AdminDash = require('../admindash/AdminDash')

export default function Cart() {

    const [items, setItems] = useState([]);

    

      useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://localhost:3500/api/v1/getItem')
          .then(response => {
            setItems(response.data);
           
            // window.location.reload()
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

  return (
    
    <Card sx={{display:'flex', flexDirection:'row', gap:5, padding:5}}>
        {items.map(item => (
      <CardActionArea key={item._id}>
        <CardMedia
          component="img"
          height="140"
          image="https://i.postimg.cc/3xMYr8Mm/3524.jpg"
          alt="green iguana"
        />
        <CardContent style={{ border:1}}>
          <Typography gutterBottom variant="h5" component="div">
          {item.itemCode}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {item.itemName}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Typography gutterBottom variant="h5" component="div">
          Price: {item.itemPrice}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Quantity: {item.qtyOnHand}
          </Typography>
        </CardContent>
      </CardActionArea>
      ))}
    </Card>
  );
};