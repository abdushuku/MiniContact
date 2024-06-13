const mysql = require("mysql2");

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

module.exports = db