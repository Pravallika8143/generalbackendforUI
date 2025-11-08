import { useFormik } from "formik"
import React from "react"
import { useAddNewLeadMutation } from "../../services/leadsApi";


function AddLeads(){
    var [addLeadFn] =useAddNewLeadMutation();
    var leadForm=useFormik({
        initialValues:{
          "name":"",
          "email":"",
          "phone":"",
          "courseInterested":"",
          "status":"New"
        },
        onSubmit:(values)=>{
            addLeadFn(values)
            .then((res)=>{
              console.log(res)
            })
            .catch(err=>console.log(err))
        },
    })
    return (
        <div className="border border-3 p-3 m-3 border-dark">
          <h1>AddLeads</h1>
          <form onSubmit={leadForm.handleSubmit}>
            <input type="text" {...leadForm.getFieldProps("name")} placeholder="Name"/><br/><br/>
            <input type="text" {...leadForm.getFieldProps("email")} placeholder="Email"/><br/><br/>
            <input type="text" {...leadForm.getFieldProps("phone")} placeholder="Mobile Number"/><br/><br/>
            <input type="text" {...leadForm.getFieldProps("courseInterested")} placeholder="Course Interested"/><br/><br/>
            <button className="btn btn-success">AddLead</button>
          </form>
        </div>
    )
}
export default AddLeads;