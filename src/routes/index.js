const { Router }    = require('express');
const fetch         = require('node-fetch')
const router        = Router();

router.get('/', async(req, res) => {
    console.log(req)
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4');
    const users = await response.json();
    res.json(users);
})

module.exports = router;
