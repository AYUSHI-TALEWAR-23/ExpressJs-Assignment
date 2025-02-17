const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // MIddleware to parse json 

app.listen(port , () => {
    console.log("Server running on port 3000")
})
app.get('/api/data/:id', (req,res) => {
    const id = req.params.id;   //Path
    const name = req.query.name;  //query 

    res.json({
        id : id,
        name: name,
        message : `Recived id ${id} , Name: ${name}`
    });
});

app.post('/api/process', (req,res) => {
    const inputData = req.body;

    if(!inputData || !Array.isArray(inputData)){
        return res.status(400).json({ error : "Invalid input , expected array"});
    }

    const processedData = inputData.map((item , index) => ({
        id: index + 1,
        original : item,
        processed : item.toUpperCase()

    }));
    res.json(processedData)
})