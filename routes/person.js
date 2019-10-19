const express = require('express'),
router= express.Router();
const PersonModel = require("../models/personModel")

router.get("/",  async function(req,res, next) {
    const personData = await PersonModel.getAll();
    console.log("person data", personData);
    res.status(200)
    .render('template',{
        locals:{
            title: "The is the person data",
            data: personData
        },
        partials: {
            partial: "partial-person"
        }
    })
    

});
// This middle ware
module.exports = router;