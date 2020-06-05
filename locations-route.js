const fs = require('fs'),
    express = require('express'),
    router = express.Router(),
    fetch = require('isomorphic-fetch')
    ;

router.get('/api/v2/locations', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    fetch('http://intranet/svc_mail/rs/lookup/uaelocations')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (Array.isArray(json)) {
                let _999 = json.filter((d) => {
                    return (d.code === '999');
                });
                _999.forEach((d) => {
                    d.emirate_code = 'dxb';
                });
            }
            res.send(json);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        })
        ;
});

module.exports = router;