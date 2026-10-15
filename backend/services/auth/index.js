import  express from "express";
import  dotenv from "dotenv";
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);


dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/auth",authRouter);
app.get("/", (req, res)=>{
    res.json({message: "hello from AUTH"});
})

app.listen(port, async ()=>{
    console.log(`AUTH started at ${port}`);
    await connectDb();
})