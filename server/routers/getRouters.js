const express = require("express");
const router = express.Router();
const db = require("../modules/db.js")
const getController = require("../controller/getController.js")

router.get("/dashboard", getController.dashboard)
router.get("/", getController.main)
router.get("/getInfos", getController.getInfo)
router.get("/logout", getController.logOut)

module.exports = router;