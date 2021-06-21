const {
    createSecretKey
} = require("crypto");
const express = require("express");
const router = express.Router();
const path = require("path");

const objManifest = {
    name: "Payment App",
    short_name: "Payment App",
    icons: [{
            src: "https://imgstatic.phonepe.com/images/merchants/128/128/PHONEPE.png",
            sizes: "128x128",
            type: "image/png"
        },
        {
            src: "https://imgstatic.phonepe.com/images/merchants/144/144/PHONEPE.png",
            sizes: "144x144",
            type: "image/png"
        },
        {
            src: "https://imgstatic.phonepe.com/images/merchants/152/152/PHONEPE.png",
            sizes: "152x152",
            type: "image/png"
        },
        {
            src: "https://imgstatic.phonepe.com/images/merchants/192/192/PHONEPE.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "https://imgstatic.phonepe.com/images/merchants/256/256/PHONEPE.png",
            sizes: "256x256",
            type: "image/png"
        },
        {
            src: "https://imgstatic.phonepe.com/images/merchants/512/512/PHONEPE.png",
            sizes: "512x512",
            type: "image/png"
        }
    ],
    lang: "en-US",
    start_url: "/",
    display: "standalone",
    background_color: "white",
    theme_color: "white",
    orientation: "portrait",
    serviceworker: {
        "src": "sw.js",
        "scope": "/pay/",
        "use_cache": "false"
    }
}

const objPaymentMethodManifest = {
    default_applications: ["http://web-otp-demo.herokuapp.com//pay/manifest.json"],
    supported_origins: [],
};


router.get("/pay/payment-manifest.json", (req, res) => {
    console.log("herre");
    res.type("application/json").send(JSON.stringify(objPaymentMethodManifest));
})


router.get("/pay/manifest.json", (req, res) => {
    res.type("application/json").send(JSON.stringify(objManifest));
});

router.get("/pay/otp-demo", (req, res) => {
    res.render("home.ejs")
})

router.get("/pay/sw.js", (req, res) => {
    const options = {
        root: path.join(__dirname, "/"),
    };
    res.sendFile("sw.js", options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully sended file to user agent");
        }
    });
})

router.post("/pay/otp", (req, res) => {
    console.log("here");
    res.render("success.ejs");
    console.log(req.body);
})

module.exports = router;