'use strict';

const Restify = require("restify");

const server = Restify.createServer({
    name: CafeBot2
});

const port_num = 8080; // to be decided

server.post('/practise',(req, res, next) => {
    let {
        status,
        result
    }=req.body;

    if (status === 200) {
        console.log("Recieved Status 200");
    }

    return next;
});

server.listen((process.env.PORT || port_num, function() {
    console.log("Server up and running");
}));
