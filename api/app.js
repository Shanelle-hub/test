 
 import express from "express";
 import postRoute from "./routes/post.route";


  const app =express()
 
  app.use("/api/posts",postRoute)
  app.listen(8800,()=>{
    console.log("server is running")
  })