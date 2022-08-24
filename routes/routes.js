const express = require('express');
const router = express.Router();
const sessions = require('express-session');

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


router.get("/logon",(req, res) => {
    res.render('logon', {
        pagename: "Logon",
    });
});

let login = true;
router.post('/login', (req, res) => {
    if(login){
        sessions = req.session;
        sessions.userid = "Mike";
        res.render('index', {pagename: "Home", sess: sessions})
    }
    else {
        res.render("login", {pagename: 'Login', error: "Invalid username"});
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(null)
    res.render('index', {pagename:"Home"})
});




module.exports = router;