module.exports = app =>{
    const Tasks = app.db.models.Tasks;
    app.route('/api/tasks')
    .all((req,res)=>{
        //Middleware for all

    })
    .get((req,res)=>{
        Tasks.findAll({}).then((tasks)=>{
            res.json({tasks:tasks});
        });
    })
    .post((req,res)=>{

    });

    app.route('/api/tasks/:id')
    .all((req,res)=>{

    })
    .get((req,res)=>{

    })
    .put((req,res)=>{

    })
    .delete((req,res)=>{

    })
}