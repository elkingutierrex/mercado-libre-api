const { Router }    = require('express');
const fetch         = require('node-fetch')
const router        = Router();
const urlBase       = 'https://api.mercadolibre.com/';

function getQueryString( query ){
    if( !query ){
        return false 
    }
    let queryString = (JSON.stringify(query)); 
    queryString = queryString.replace(/"/g, '');
    queryString = queryString.replace(/{/g, '');
    queryString = queryString.replace(/}/g, '');
    queryString = queryString.replace(/,/g,'&');
    queryString = queryString.replace(/:/g,'=');
    return queryString;
}

router.get('/getItemsByQuery', async(req, res) => {
    const queryString = getQueryString( req.query ); 

    if ( !queryString){
        return false;
    }
    const response = await fetch(`${urlBase}sites/MLA/search?${queryString}`);
    const users = await response.json();
    res.json(users);
})

router.get('/getItemById', async(req, res) => {
    const id = req.query.id
    if ( !id ){
        return false;
    }
    const response = await fetch(`${urlBase}items/${id}`); //MLA1109059186
    const users = await response.json();
    console.log(users);
    res.json(users);
})

// https://api.mercadolibre.com/items/MLA1109059186

module.exports = router;
