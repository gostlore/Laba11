const express = require('express');
var mParser = require('body-parser');
const app = express();
app.listen(3000);

app.use(express.static('public'));
var urlencodedParser = mParser.urlencoded({extended: false})

app.get('/user', urlencodedParser, (request, reply) => {
    console.log(request.body.data + " **Get");
    reply.status(200).send("user get is delivered");
});

app.post('/user', urlencodedParser,(request, reply)=>{
    if(request.header["user-agent"] != "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4404.98 Safari/537.36"){
        console.log(request.body.data + "  **post");
        console. log(request.headers.origin); 
        reply.status(200). send("user past is delivered");
        console. log("not a chrome")  
    }else{
        console. log("chrome want to accesst access is denied")
    }
});