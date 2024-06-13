const db = require("../modules/db.js")


const dashboard =  (req, res) => {
    const user_firstname = req.cookies.user_firstname;
    res.json({ user_firstname });
}

const main =  (req, res) => {
    res.send("main page")
}

const getInfo =  (req, res) => {
    db.query(`SELECT * FROM user_details WHERE user_firstname = '${req.cookies.user_firstname}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}

const logOut = (req, res) => {
    res.clearCookie("user_firstname")
    res.redirect("/")
}


module.exports ={
    dashboard,
    main,
    getInfo,
    logOut
}