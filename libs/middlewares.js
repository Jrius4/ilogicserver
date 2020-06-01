module.exports = app =>{
    var PORT = process.env.PORT || 5000;
    app.set("port",PORT);
    app.set("json spaces",4);
}