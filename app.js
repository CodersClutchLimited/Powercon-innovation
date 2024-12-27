const express = require('express')
const path = require('path')
const ejs = require('ejs')
const ejsMate = require('ejs-mate')
const app = express()





app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/board', (req, res) => {
    res.render('pages/board')
})

app.get('/mission', (req, res) => {
    res.render('pages/mission')
})
app.get('/corporate', (req, res) => {
    res.render('pages/corporate')
})

app.get('/message', (req, res) => {
    res.render('pages/message')
})

app.get('/workforce', (req, res) => {
    res.render('pages/workforce')
})


app.get('/services/water-resources', (req, res) => {
    res.render('pages/water')
})

app.get('/ethos', (req, res) => {
    res.render('pages/quality')
})
app.get('/services/transportation', (req, res) => {
    res.render('pages/transport')
})

app.get('/services/power-eng', (req, res) => {
    res.render('pages/power')
})

app.get('/services/residential-const', (req, res) => {
    res.render('pages/resident')
})

app.get('/services/industrial-const', (req, res) => {
    res.render('pages/industry')
})
app.get('/services/specialized', (req, res) => {
    res.render('pages/specialize')
})







// transportation inner
app.get('/services/transport/inspect', (req, res) => {
    res.render('inner/transport')
})

app.get('/services/transport/bridge', (req, res) => {
    res.render('inner/bridge')
})
app.get('/services/transport/smart', (req, res) => {
    res.render('inner/smart')
})

app.get('/services/transport/asphalt', (req, res) => {
    res.render('inner/asphalt')
})

app.get('/services/transport/urban-rural', (req, res) => {
    res.render('inner/urbanInner')
})
// rural and urban street inner
app.get('/services/transport/urban', (req, res) => {
    res.render('inner/urb')
})

app.get('/services/transport/rural', (req, res) => {
    res.render('inner/rur')
})




// railway and runway

app.get('/services/transport/railway', (req, res) => {
    res.render('inner/rail')
})

app.get('/services/transport/flight', (req, res) => {
    res.render('inner/flight')
})



app.get('/services/transport/rural', (req, res) => {
    res.render('inner/rur')
})



app.get('/services/transport/pedesterian', (req, res) => {
    res.render('inner/pedesterian')
})

app.get('/services/transport/round', (req, res) => {
    res.render('inner/round')
})

app.get('/services/transport/signalization', (req, res) => {
    res.render('inner/signalization')
})



// water inner

app.get('/services/water/wastewater', (req, res) => {
    res.render('inner/water')
})

app.get('/services/water/irrigation', (req, res) => {
    res.render('inner/irrigation')
})


// POWER INNER
app.get('/services/power/solar', (req, res) => {
    res.render('inner/solar')
})

app.get('/services/power/bio-energy', (req, res) => {
    res.render('inner/bio-energy')
})

app.get('/services/power/gas-energy', (req, res) => {
    res.render('inner/gas-energy')
})

app.get('/services/power/renewable-energy', (req, res) => {
    res.render('inner/renewable-energy')
})

// RESIDENTIAL INNER
app.get('/services/water/consultancy', (req, res) => {
    res.render('inner/consultancy')
})

app.get('/services/water/design-build', (req, res) => {
    res.render('inner/design-build')
})

app.get('/services/water/renovation', (req, res) => {
    res.render('inner/renovation')
})

app.get('/services/water/green-house', (req, res) => {
    res.render('inner/green-house')
})

app.get('/services/water/container-housing', (req, res) => {
    res.render('inner/container-housing')
})

// INDUSTRIAL INNER

app.get('/services/industry/warehouse', (req, res) => {
    res.render('inner/warehouse')
})

app.get('/services/industry/schools', (req, res) => {
    res.render('inner/schools')
})

app.get('/services/industry/health-centers', (req, res) => {
    res.render('inner/health-centers')
})

app.get('/services/industry/shopping-centers', (req, res) => {
    res.render('inner/shopping-centers')
})

app.get('/services/industry/recreational-centers', (req, res) => {
    res.render('inner/recreational-centers')
})


app.get('/services/industry/fuel-gas-stations', (req, res) => {
    res.render('inner/fuel-gas-stations')
})

app.get('/services/industry/data-center', (req, res) => {
    res.render('inner/data')
})
app.get('/services/industry/banking-hall', (req, res) => {
    res.render('inner/banking')
})
app.get('/services/industry/airports', (req, res) => {
    res.render('inner/airports')
})




// SPECIALIZED SERVICE INNER PAGE

app.get('/services/specialized/mining-services', (req, res) => {
    res.render('pages/mining')
})

app.get('/services/specialized/industrial-eng', (req, res) => {
    res.render('inner/industrial-eng')
})

app.get('/services/specialized/residential-electrical', (req, res) => {
    res.render('inner/residential-electrical')
})

app.get('/services/specialized/procurement', (req, res) => {
    res.render('inner/procurement')
})


// MINING INNER
app.get('/services/mining/mining-consult..', (req, res) => {
    res.render('mining/mining-consult')
})

app.get('/services/mining/closure-rehab..', (req, res) => {
    res.render('mining/closure-rehabilitation')
})

app.get('/services/mining/supply', (req, res) => {
    res.render('mining/eq-supply')
})

app.get('/services/mining/mine-dev', (req, res) => {
    res.render('mining/mine-dev')
})

app.get('/services/mining/min-process', (req, res) => {
    res.render('mining/mineral-process')
})

app.get('/services/mining/mining-operations', (req, res) => {
    res.render('mining/mining-ops')
})


app.get('/services/mining/logistic-transportation', (req, res) => {
    res.render('mining/logistic-transport')
})


// MINING CONSULT INNER
app.get('/services/consultancy/exploration', (req, res) => {
    res.render('mining/explore')
})

app.get('/services/consultancy/safety-and-env', (req, res) => {
    res.render('mining/safety-and-env')
})





app.listen(1000, () => {
    console.log("LISTENING ON PORT 1000");
})