const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
    const database = client.db("todo");
    const tasksCollection = database.collection('tasks')

    app.post('/api/tasks', async(req,res)=>{
        const task = req.body;
        const result = await tasksCollection.insertOne(task);
        res.send(result)
    })
   
    
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});