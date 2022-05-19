

// var axios = require('axios')
// var ServerURL = "https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1"

const getData=async(url)=>{
    alert(url)
    try{
        var response= await fetch(url)// its your choice you want to use or not method ,mode ,headers in getData
        var result= await response.json()
        return result
     }
     catch(e){
        alert(e) 
        return e

     }

}

// 
export {getData}

//**********note***********//
// if we used axios.post then we also used formdata 
// we are use both fetch and axios.post and axios.get