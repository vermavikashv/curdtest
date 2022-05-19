import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Grid,Button,Avatar} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import {getData} from '../FeatchNodeServices'




export default function EditData(props){
  var location= useLocation()
  var value=location.state
    const[fname,setFname]=useState(value.first_name)
    const[lname,setLname]=useState(value.last_name)
    const[email,setEmail]=useState(value.email)
    const[states,setStates]=useState(value.states)
    const[city,setCity]=useState(value.city)
    const[data,setData]=useState([])
    const[pincode,setPincode]=useState(value.pincode)
    var navigate=useNavigate()
  
  

// alert(value.first_name)


useEffect(
  function(){
fetch("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch")
.then((response)=>response.json())
.then((info)=>setData(info))
.catch((err)=>{
console.log(err)
})

},[]
)

const handleSubmit=async()=>{
  // var formData = new FormData()
  // formData.append('categoryname',categoryName)//****categoryname=req.body.categoryname in node***
  // formData.append('categoryid',categoryId)
  // // var result = await postImageData("categories/editcategorydata",formData)
  //  alert(result.result)
  var body= `param1=${email}&param2=${fname}&param3=${lname}&param4=${pincode}&param5=${city}&param6=${states}`
var result = await getData(`https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?${body}`)
alert(JSON.stringify(result.Message))
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
 <TextField id="outlined-basic" variant="outlined" onChange={(e)=>setFname(e.target.value) }
 value={fname}
  />
</Grid>


<Grid item xs={4}>
 <h3>Last Name</h3>
 <TextField value={lname} id="outlined-basic" onChange={(e)=>setLname(e.target.value) } variant="outlined" />
 </Grid>

 <Grid item xs={4}>
 <h3>Email</h3>
 <TextField value={email} id="outlined-basic" InputLabelProps={{readOnly:true}}  variant="outlined" type="email"/>
 </Grid>


 <Grid item xs={4}>
 <h3>State</h3>
 <FormControl>
 <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          displayEmpty
          value={states}
          onChange={(e)=>setStates(e.target.value)}
          label="State"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         
          <MenuItem  value={states}> {states}</MenuItem>
          <MenuItem value="DELHI">DELHI</MenuItem>
          <MenuItem value="GOA">GOA</MenuItem>
          <MenuItem value="Gujart">Gujart</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
        </Select>
        </FormControl>
        </Grid>

        <Grid item xs={4}>
 <h3>City</h3>
 <TextField value={city} id="outlined-basic" onChange={(e)=>setCity(e.target.value) } variant="outlined" />
 </Grid>

 <Grid item xs={4}>
 <h3>Pincode</h3>
 <TextField 
 value={pincode}
  id="outlined-basic" 
  onChange={(e)=>setPincode(e.target.value) } 
 variant="outlined" type="number" onInput = {(e) =>{
  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
}} />

 </Grid>
 </Grid>
<div style={{position:"center",display:"flex",justifyContent:"center",marginTop:50}}>
 <span style={{marginRight:10}}>
 <Button style={{background:'green',color:'#FFF',fontWeight:'bold'}} variant="contained" component="span" onClick={()=>handleSubmit()}>
    Update
  </Button>
 </span>
 <span>
 <Button style={{background:'red',color:'#FFF',fontWeight:'bold'}} variant="contained" component="span" onClick={()=>navigate("/display")}>
    CANCEL
  </Button>
 </span>
 </div>
 </div>
    </>
)

}