const express = require('express');

const app = express();

app.get('/api/users',(req,res) => {
    const users = [
        {id :   1 , name : 'John Doe'},
        {id :   2, name : "Smith"}
    ]
    res.json(users);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post('/api/users', (req,res) => {
    const { name ,email} = req.body;
    console.log(" name and body is ",name,email);
    res.json({ message : "User created successfully"});
})

const port = 3000;
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})