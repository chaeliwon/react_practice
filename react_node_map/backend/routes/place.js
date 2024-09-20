const express = require('express')
const router = express.Router()

router.get('/position', (req, res) => {
    const positions = [
        {
            title: "국립아시아문화전당",
            latlng: { lat: 35.1467193, lng: 126.9202542 },
        },
        {
            title: "멜크",
            latlng: { lat: 35.15029443641385, lng: 126.92644072259247 },
        },
        {
            title: "파더스베이글",
            latlng: { lat: 35.1496564, lng: 126.9209022 },
        },
        {
            title: "후토루",
            latlng: { lat: 35.1473588, lng: 126.9235523 },
        },
        {
            title: "삼미관",
            latlng: { lat: 35.1457982, lng: 126.9243446 },
        },
    ]

    res.json({position:positions})
})

module.exports = router