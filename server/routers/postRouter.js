const express = require("express");
const router = express.Router();
const multer = require('multer')

const postController = require("../controller/postController.js")

const storage = multer.diskStorage({
    destination: (req, file , cb) => {
      cb(null, "public/image")
    },
    filename:(req, file , cb) =>{
      console.log(file);
      cb(null , Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage : storage});

router.post("/signup", postController.signup);
router.post("/addContacts",postController.addContacts)
router.post("/attachment", upload.single("image") , postController.addAttechment)
router.delete("/delete/:id",postController.deleteContact);


module.exports = router;