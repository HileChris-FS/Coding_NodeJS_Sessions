const express = require('express');
const router = express.Router();

router.get("/",(req, res) => {
    res.render('index', {
        pagename: "Home",
    });
});

router.get("/about",(req, res) => {
    res.render('about', {
        pagename: "About",
    });
});

router.get("/contact",(req, res) => {
    res.render('contact', {
        pagename: "Contact",
    });
});

router.get("/projects",(req, res) => {
    res.render('projects', {
        pagename: "Projects",
    });
});

router.get("/registration",(req, res) => {
    res.render('registration', {
        pagename: "Registration",
    });
});



module.exports = router;