import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import errorHandler from "./middlewares/ErrorHandler.js";



const app = express()


//important middlewares
app.use(
    cors({
      origin: "*",
    })
  );

//set up middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//check server
app.get("/", (req, res) => {
    res.json({message:"server is successfully running..."});
  });
  
  //health check
  app.get("/health", (req, res) => {
    res.json({ message: "Server is healthy..😃" });
  });


  //define route
  app.use('/api/v1/user', userRouter)




  //define error handeler middleware
  //error handler
app.use(errorHandler);


  export default app;