const express= require("express")
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = express.Router();
dotenv.config();    

const app=express();

app.use(bodyParser.json()); 
app.use(cors());


async function main() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to database");
}
main().catch(err => console.log(err));

 app.use("/auth", require("./Routers/Auth"));
 app.use("/protected", require("./Routers/protectedRouter"));

 const port = process.env.PORT ;
app.get('/', (req, res) => {
  res.send(`Server is running on port ${port}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});