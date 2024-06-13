const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const mysql = require("mysql2");
const userRouter = require("./routers/postRouter.js")
const getRouters = require("./routers/getRouters.js")
const session = require("express-session")
const path = require("path")

const app = express()

app.use(cors({
    origin: [
      'http://localhost:8080',
      'https://localhost:8080'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));
app.use(session({
    secret: 'wow very secret',
    cookie: {
        maxAge: 600000,
        secure: true
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}));
app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'public')))



app.use("/", getRouters)
app.use("/register", userRouter)

const db = mysql.createConnection({
    host: "biqnrxh4dpjbpivvnkqe-mysql.services.clever-cloud.com",
    user: "uzzr85juaw4gbrtf",
    password: "UU3pvOOIrmssQndylZgW",
    database: "biqnrxh4dpjbpivvnkqe",
})


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("database connected");
    }
})

app.listen(2000, () => {
    console.log("http://localhost:2000");
})