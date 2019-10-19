const express = require('express'),
router= express.Router();

router.get("/",(req,res,next) =>{
    res.status(200)
    .render('template',{
        locals:{
            title: "This person database"
        },
        partials: {
            partial: "partial-index"
        }
    })
    

});
// This middle ware
module.exports = router;
