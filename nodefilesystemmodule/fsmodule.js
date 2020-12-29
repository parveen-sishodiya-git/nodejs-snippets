console.log("**Node file system module**");

let fsmodule = require("fs");
fsmodule.writeFile("../file3007","Hey, i am written by the write file method",()=>{
    console.log("Written Successfully");
})


fsmodule.readFile("../file3007","utf8",(err,data)=>{

    console.log("Error is "+err)
    console.log("Data is "+data)

})