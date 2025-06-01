const { Router } = require("express");
const router = Router();

// GET user listing
router.get("/", (req, res, next) => 
    res.send('respond with a resource')
);
module.exports = router;