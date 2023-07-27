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
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// const AdminDash = require('../admindash/AdminDash')

export default function Cart() {

    const [items, setItems] = useState([]);
    const [qty, setQty] = useState(1)

    const [itemCode, setItemCode] = useState()
    const [itemName, setItemName] = useState()
    const [itemPrice, setItemPrice] = useState()
    const [qtyOnHand, setQtyOnHand] = useState()
    
    const handleClick = () => {
      // if (!localStorage.getItem("token")) {
      //   // navigate("/login")
      // }
    }
    const handleQty = (e) => {
      setQty(e.target.value);
    }

    const handleAddToCart = (itemCode,itemName,itemPrice,qtyOnHand) => {
    
      var array = new Array();
      // localStorage.clear();
      array.push({
          itemCode,
          itemName,
          itemPrice,
          qty,
          amount:qty*itemPrice
      });
      alert("Add to cart success");

      localStorage.setItem("myValue", JSON.stringify(array));
    }

      useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://localhost:3500/api/v1/getItem')
          .then(response => {
            setItems(response.data);
           
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

  return (
    <>
    <Link to={"/ordersCart"}>
     <Button  variant="outlined" color="secondary" style={{marginTop:10}}>My-Orders</Button>
     </Link>

    <Card sx={{display:'flex', flexDirection:'row', gap:5, padding:8, flexWrap:'wrap',marginLeft:'20'}}>

        {items.map(item => (
      <CardActionArea key={item._id} sx={{ maxWidth: '20%', flexBasis: '20%', flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://i.postimg.cc/3xMYr8Mm/3524.jpg"
          alt="green iguana"
        />
        <CardContent style={{ border:1}}>
          <Typography gutterBottom variant="h5" component="div"  value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}>
          {item.itemCode}
          </Typography>
          <Typography gutterBottom variant="h5" component="div"  value={itemName}
          onChange={(e) => setItemName(e.target.value)}>
          {item.itemName}
          </Typography>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
            
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
         
          <Typography gutterBottom variant="h5" component="div"  value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}>
          Price: {item.itemPrice}/-
          </Typography>
          <Typography gutterBottom variant="h5" component="div"  value={qtyOnHand}
          onChange={(e) => setQtyOnHand(e.target.value)}>
          Quantity: {item.qtyOnHand}
          </Typography>
          <hr></hr>
          
          <Button type="submit" variant="contained" 
          onClick={()=>{
            let itemCode=item.itemCode;
            let itemName=item.itemName;
            let itemPrice=item.itemPrice;
            let qtyOnHand=item.qtyOnHand;
           
            setItemCode(itemCode);
            setItemName(itemName);
            setItemPrice(itemPrice);
            setQtyOnHand(qtyOnHand);
            
            handleAddToCart(itemCode,itemName,itemPrice,qtyOnHand)
          }}
          >
            Add to cart</Button>
     
        </CardContent>
      </CardActionArea>
      ))}
    
    </Card>
    </>
  );
};