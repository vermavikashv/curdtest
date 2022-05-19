import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Grid,Button,Avatar} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import {getData} from "../FeatchNodeServices"





export default function Addmember(){
    const[fname,setFname]=useState()
    const[lname,setLname]=useState()
    const[email,setEmail]=useState()
    const[states,setStates]=useState()
    const[city,setCity]=useState()
    const[pincode,setPincode]=useState()
    var navigate= useNavigate()


    const handleSubmit=async()=>{
      // var formData = new FormData()
      // formData.append('categoryname',categoryName)//****categoryname=req.body.categoryname in node***
      // formData.append('categoryid',categoryId)
      // // var result = await postImageData("categories/editcategorydata",formData)
      //  alert(result.result)
      //var body = {"param1":"ss@gmail.com", "param2":"xx", "param3":"xxx" ,"param4":55555 ,"param5":"cccc" ,"param6":"zzz"}
      var body= `param1=${email}&param2=${fname}&param3=${lname}&param4=${pincode}&param5=${city}&param6=${states}`
    var result = await getData(`https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?${body}`)
    alert(JSON.stringify(result.Message))
    }

const handleReset=()=>{

  setFname("")
    setLname("")
    setEmail("")
    setStates("")
    setCity("")
    setPincode("")
  
}

return(
    <>
    <div style={{margin:50,border:"1px solid black",padding:10}}>
    <div>
        <Button variant="contained" onClick={()=>navigate("/display")}>HOME</Button>
    </div>
        <Grid container spacing={2}>
    <Grid item xs={4}>
    <h3>First Name</h3>
 <TextField id="outlined-basic" onChange={(e)=>setFname(e.target.value) }variant="outlined" />
</Grid>


<Grid item xs={4}>
 <h3>Last Name</h3>
 <TextField id="outlined-basic" onChange={(e)=>setLname(e.target.value)} variant="outlined" />
 </Grid>

 <Grid item xs={4}>
 <h3>Email</h3>
 <TextField id="outlined-basic" onChange={(e)=>setEmail(e.target.value)} variant="outlined" type="email"/>
 </Grid>

 <Grid item xs={4}>
 <h3>State</h3>
 <FormControl>
 <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={states}
          onChange={(e)=>setStates(e.target.value)}
          label="State"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="DELHI">DELHI</MenuItem>
          <MenuItem value="GOA">GOA</MenuItem>
          <MenuItem value="Gujart">Gujart</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={4}>
 <h3>City</h3>
 <TextField id="outlined-basic" onChange={(e)=>setCity(e.target.value)} variant="outlined" />
 </Grid>

 <Grid item xs={4}>
 <h3>Pincode</h3>
 <TextField id="outlined-basic" onChange={(e)=>setPincode(e.target.value)} variant="outlined" type="number" 
  onInput = {(e) =>{
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
  }}/>

 </Grid>
 </Grid>
<div style={{position:"center",display:"flex",justifyContent:"center",marginTop:50}}>
 <span style={{marginRight:10}}>
 <Button style={{background:'green',color:'#FFF',fontWeight:'bold'}} onClick={()=>handleSubmit()} variant="contained" component="span">
    ADD
  </Button>
 </span>
 <span>
 <Button style={{background:'red',color:'#FFF',fontWeight:'bold'}} variant="contained" component="span" onClick={()=>handleReset()}>
    CANCEL
  </Button>
 </span>
 </div>
 </div>
    </>
)

}