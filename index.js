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
app.get('/flights/:id',(req,res) =>{
  const flight = flights.find(c => c.id === parseInt(req.params.id));
  if (!flight) {
      return res.status(404).send('The destination with the given ID was not found.')
      }res.send(flight);
});

// Add or book a flight
app.post('/flights',(req,res)=>{
      const flight= {
        id: flights.length+1,
        title:req.body.title,
        time: req.body.time,
        price: 12000,
        date: req.body.date
      };
      flights.push(flight);
      res.send(flight);
})

//update and edit a flight
app.put('/flights/:id',(req,res)=>{
  // check if flight id exists
  const flight = flights.find(c => c.id === parseInt(req.params.id));
    if (!flight) {
    return res.status(404).send('The destination with the given ID was not found.')
    }else{
      flights.title =req.body.title;
    }

})



//listener handler
app.listen(port,()=>console.log(`Listening to port on ${port}...`))