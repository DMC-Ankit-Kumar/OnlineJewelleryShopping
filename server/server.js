const express = require("express")
const cors = require("cors")
const app = express()
const userRouter = require("./router/user")
const adminRouter = require("./router/admin")
const customerRouter = require("./router/customer")

// const movieRouter = require("./router/movie")
// const shareRouter = require("./router/share")

app.use(cors("*"))
app.use(express.json())
app.use(express.static("uploads"))

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/customer", customerRouter)
// app.use("/movie", movieRouter)
// app.use("/share", shareRouter)

app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on port 5000")
})
