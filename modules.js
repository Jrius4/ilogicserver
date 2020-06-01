const express = require('express');
module.exports = (options= {})=>{
    const router = express.Router();

    const {service} = options;
    router.get('/api/v1',(req,res,next)=>{
        res.end(
            service.createGreeting(req.query.name || "Kazibwe")
        );
    });
    

    return router;
};