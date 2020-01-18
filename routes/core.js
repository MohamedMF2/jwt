const coreRouter = require("express").Router();
const verify =require("./verifyToken")
coreRouter.get('/',(request,response)=>{
    response.json({
        page:{
            title:"home "
            
        }
    })
})

coreRouter.get('/about',(request,response)=>{
    response.json({
        page:{
            title:"about "
            
        }
    })
})
coreRouter.get('/contact',(request,response)=>{
    response.json({
        page:{
            title:"contact "
            
        }
    })
})

coreRouter.get('/profile',verify,(request,response)=>{
    response.json({
        page:{
            title:"profile ",
            data : "private user data "
            
        }
    })
})
module.exports = coreRouter