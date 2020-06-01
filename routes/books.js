module.exports = app =>{
    app.get('/api/books',(req,res)=>{
        res.json({
            books:[
                {title:"Advanced Physics"},
                {title:"Principled Maths"},
            ]
        });
    });
}