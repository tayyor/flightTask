const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3030;


const flights = [{id:1,title: "flight to canada",
time: '1 pm',
price: 26000,
date:'26-06-2022'},

{id:2,title: "flight to newyork",
time: '4 pm',
price: 29000,
date:'29-06-2022'},

{id:3,title: "flight to Lagos",
time: '12 pm',
price: 30000,
date:'31-06-2022'}]


//testing the root url
app.get('/',(rer,res)=>{
  res.send('holla!!!')
})


//to get all flights
app.get('/flights',(req,res) =>{
  res.send(flights);
})

//to get a single flight
// app.get('/flights/:id',(req,res) =>{
//   const flight = flights.find(c => c.id === parseInt(req.params.id));
//   if (!flight) {
//       return res.status(404).send('The destination with the given ID was not found.')
//   }res.send(flight);
// });

// another angu
app.get('/flight/:title',(req,res)=>{
  const flight=flights.find(f=>f.title === (req.body.title));
  if(!flight){
    return res.status(404).send('The title with the destination was not found.')
  }res.send(flight);
})

//listener handler
app.listen(port,()=>console.log(`Listening to port on ${port}...`))