const { Router } = require('express');
const router = Router();

// GET home page
router.get("/", (req, res, next) => 
    res.render("index", { title: "Messageboard", messages: messages })
);

router.get("/new", (req, res) => 
    res.render("form", { title: "Input Form" })
);

// POST a new message
router.post("/new", (req, res) => {
    let author = req.body.author;
    let msg = req.body.msg;
    messages.push({user: author, message: msg, time: new Date()});
    res.redirect("/");
});

module.exports = router;