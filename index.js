const express = require('express');
const routeMiddleware = require("./routes/modules");
const cors = require('cors');


class GreetingService{
    constructor(greeting='Hello'){
        this.greeting = greeting;
    }

    createGreeting(name){
        return `${this.greeting}, ${name}!`;
    }
}
var PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.set("json spaces",4);
app.use('/api/v1/service1',routeMiddleware({service:new GreetingService('Hello'),}));
app.use('/api/v1/service2',routeMiddleware({service:new GreetingService('Hi'),}));
app.listen(PORT,()=>console.log(`NTask API - Port ${PORT}`));