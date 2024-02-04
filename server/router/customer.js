const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

router.get("/", (request, response) => {
    const sql = "select * from products";
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})




module.exports = router