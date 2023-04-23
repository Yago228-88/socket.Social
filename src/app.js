import express from "express";
import path from "path";

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'public')));

export default app;