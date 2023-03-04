const express = require("express");
const app = express();
port = 3000;

app.use(express.json());

 Data = [
    {  
          id:1,
    
           name: "t-shirt",
    
           total_quantity:12,
    
           type_of_product: "shirt",
    
          price: 300
    
    },
    {
          id:2,
    
           name: "pant",
    
           total_quantity:12,
    
           type_of_product: "jeans",
    
          price: 3000
    }
]  

app.get("/shop",(req,res)=>
{
    res.send(Data);
})


// app.get("/shopid/:id", function (req, res) {
//     res.send(req.params.id);
//   });

app.get("/shopname/:name", function (req, res) {
    
    for(let i = 0; i < Data.length; i++){
        if(Data[i].name == req.params.name)
        {
          res.send(Data[i]);
          break;
    }};
})

app.get("/shopid/:id", function (req, res) {
    
    for(let i = 0; i < Data.length; i++){
        if(Data[i].id == req.params.id)
        {
          res.send(Data[i]);
          break;
    }};
})

app.post("/shop/addproduct", (req, res) => {
    // console.log(req.body);
     Data.id = req.body.id;
     Data.name = req.body.name;
     Data.total_quantity  = req.body.total_quantity;
     Data.type_of_product = req.body.type_of_product;
     Data.price = req.body.price;
     Data.push(Data.id,Data.name,Data.total_quantity,Data.type_of_product,Data.price)
    console.log("Product added succesully");

    res.json({
        message: "Data received sucsessfully"
    })
})





//   function findName(name){
//     for(let i = 0; i < shop.length; i++){
//       if(shop[i],name == req.params.name){
//         res.send(shop[i]);
//         break;
//       }
//      }
//     }

app.listen(3000, () => {
    console.log("Server is running on 3000");
  });