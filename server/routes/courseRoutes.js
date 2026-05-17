const router = require("express").Router();

router.post("/create",(req,res)=>{

res.json({
message:"Course created"
});

});

module.exports = router;
