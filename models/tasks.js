
module.exports = (sequelize,Datatype) =>{
    const Tasks = sequelize.define("Tasks",{
        id:{
            type:Datatype.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:Datatype.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        done:{
            type:Datatype.BOOLEAN,
            allowNull:false,
            defaultValue:false,
        }
        // ,
        // user_id:{
        //     type:Datatype.INTEGER,
        //     allowNull:false}
    },{}
    );

    Tasks.associate = (models)=>{
        Tasks.belongsTo(models.Users,{
            foreignKey:'user_id',as:'user'
        });
    };



    return Tasks;
    
}