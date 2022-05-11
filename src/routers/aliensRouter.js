const express = require('express');
const aliensRouter = express.Router();
const Alien = require('../../models/alien');


aliensRouter.get('/', async (req,res)=> {
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send(err)
    }
})

aliensRouter.post('/', async (req,res)=>{
    console.log(req.body)
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const a1 = await alien.save()
        res.json(al);
    } catch (error) {
        res.send('error');
    }
});

module.exports = aliensRouter;