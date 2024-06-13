const db = require("../modules/db.js")

const signup = (req, res) =>{
    const { firstname, lastname } = req.body;
    db.query("SELECT * FROM user WHERE firstname = ?", [firstname], (err, info) => {
        db.query("INSERT INTO users (firstname, lastname) VALUES (?, ?)", [firstname, lastname], (err, result) => {
            if (err) {
                console.error("Error executing query:", err);
                return res.status(500).send(err.sqlMessage);
            }
            res.cookie("user_firstname", firstname);
            res.redirect("/dashboard");
        });
    });
}

const addContacts =  (req, res) => {
    const { firstname, lastname, number, email, description } = req.body
    const { user_firstname } = req.cookies
    db.query("INSERT INTO user_details (firstname , lastname , number , email , description , user_firstname) VALUES ( ?, ?, ?, ?, ?, ?)", [firstname, lastname, number, email, description, user_firstname], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
            res.send(result)
        }
    })
}

const deleteContact =  (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM user_details WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error deleting user");
        } else {
            console.log(result);
            res.send("User deleted successfully");
        }
    });
}

const addAttechment = (req, res) => {
    const { username } = req.cookies;
    const filePath = req.file.filename;
    console.log(filePath);
    db.query("INSERT INTO attachments ( file_name , user_firstname) VALUES (?, ?)", [ filePath,username], (err, data) => {
        console.log('File uploaded successfully:', req.file);
    })
}


module.exports ={
    signup,
    addContacts,
    deleteContact,
    addAttechment
}