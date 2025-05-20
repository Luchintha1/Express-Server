import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</>");
});

app.get("/Contact", (req, res)=>{
    res.send("<h1>Call Me: 0765994798</>");
});

app.get("/About", (req, res)=>{
    res.send("<h1>About: I'm Luchintha</>");
});

app.post("/register", (req, res)=>{
    res.sendStatus(201);
});

app.put("/user/luchintha", (req, res)=>{
    res.sendStatus(200);
});

app.patch("/user/luchintha", (req, res)=>{
    res.sendStatus(200);
});

app.delete("/user/luchintha", (req, res)=>{
    res.sendStatus(200);
});



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
