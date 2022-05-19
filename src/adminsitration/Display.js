import React, { useState, useEffect } from 'react'
import MaterialTable from "@material-table/core"
import { useLocation, useNavigate } from 'react-router-dom'
import {getData} from "../FeatchNodeServices"
import { Button } from '@mui/material'
import Swal from 'sweetalert2'



export default function Display(rowData){
  const[fname,setFname]=useState()
  const[lname,setLname]=useState()
  const[email,setEmail]=useState()
  const[states,setState]=useState()
  const[city,setCity]=useState()
  const[pincode,setPincode]=useState()
  const[data,setData]=useState([])
   var navigate= useNavigate()
  //  var location=useLocation();


  const Addrecord=()=>{
    navigate("/addmember")
  }

  const handleOpen=(rowData)=>{
    setFname(rowData.first_name)
    setLname(rowData.last_name)
    setEmail(rowData.email)
    setState(rowData.state)
    setCity(rowData.city)
    setPincode(rowData.pincode)
    navigate("/editdata",{state:{first_name:rowData.first_name,last_name:rowData.last_name,email:rowData.email,city:rowData.city,states:rowData.states,pincode:rowData.pincode}})
// alert(JSON.stringify(data))
// alert(JSON.stringify(rowData))
  }

 


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

  const handleDelete=async(rowData)=>{
    
  // alert(JSON.stringify(result.Message))
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
      var body= `param1=${rowData.email}`
      var dresult = await getData(`https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?${body}`)
if(dresult.result)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
  }




    function Displaytable() {
        return (
          <MaterialTable
            title="Task "
            columns={[
              { title: 'First name', field: 'first_name' },
              { title: 'Last name', field:'last_name' },
              { title: 'Email', field: 'email' },
              { title: 'City', field: 'city' },
              { title: 'State', field: 'states' },
              { title: 'Pincode', field: 'pincode' },
             
            ]}
            data={data.data}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Save User',
                onClick: (event, rowData) => handleOpen(rowData)
                //alert("You saved " + rowData.name)
              },
              {
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) =>handleDelete(rowData)
              }
            ]}
          />
        )
      }


      return(
          <>
          
          <div style={{margin:50}}>
            <Button variant="contained" onClick={Addrecord}>+ Add Record</Button>
          {Displaytable()}
          </div>
          </>
      )


}