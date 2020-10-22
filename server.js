const express = require('express')

const app = express()
const referer_enabled_app = express()
var cors = require('cors')

app.use(cors())
referer_enabled_app.use(cors())

const port = 9000
const cross_origin_port = 9001

const options = {
    setHeaders: function (res, path, stat) {
        //res.set('Referrer-Policy', "strict-origin-when-cross-origin")
    }
}

app.use(express.static('public'));
referer_enabled_app.use(express.static('public', options));

app.listen(port, () => console.log(`Running on port ${port}!`))
referer_enabled_app.listen(cross_origin_port, () => console.log(`Running on cross origing port ${cross_origin_port}!`))