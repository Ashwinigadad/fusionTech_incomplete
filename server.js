const express = require("express");
const app = express();
const cors=require("cors");
const mongoose=require("./mongoose");
const port = 6000;

const route=require("./routes/routescontrol");

// Serve static files from the "public" folder
app.use(express.json());

app.use(cors({
    origin:"http://127.0.0.1:5501"
}))
app.use("/server",require("./mongoose"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
