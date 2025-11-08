import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetLeadDetailsByIdQuery, useLazyGetAllLeadsQuery, useLazyGetLeadDetailsByIdQuery, useUpdateLeadMutation } from "../../services/leadsApi";
import { useFormik } from "formik";


function EditLead(){
    var {id}=useParams();
    var { isLoading,data}=useGetLeadDetailsByIdQuery(id);
    var [updateLeadFn]=useUpdateLeadMutation();
    var [getAllLeadsFn]=useLazyGetAllLeadsQuery();
    var [getLeadDetailsFn]=useLazyGetLeadDetailsByIdQuery(id);
    var leadForm=useFormik({
            initialValues:{
               _id:"",
              "name":"",
              "email":"",
              "phone":"",
              "courseInterested":"",
              "status":"New"
            },
            onSubmit:(values)=>{
                updateLeadFn(values).then(()=>{
                    alert("Lead Updated")
                    getAllLeadsFn();
                    getLeadDetailsFn();
                })
            },
        });
        useEffect(()=>{
            getLeadDetailsFn(id).then(()=>{
                leadForm.setValues({...data})
            })
        },[data]);
      return (
        <div className="border border-3 p-3 m-3 border-dark">
            <h1>EditLead</h1>
            {isLoading && <b>Loading....</b>}
            {!isLoading && JSON.stringify(data)}
            <form onSubmit={leadForm.handleSubmit}>
            <input type="text" {...leadForm.getFieldProps("name")}/><br/>
            <input type="text" {...leadForm.getFieldProps("email")}/><br/>
            <input type="text" {...leadForm.getFieldProps("phone")}/><br/>
            <input type="text" {...leadForm.getFieldProps("courseInterested")}/><br/>
            <button className="btn btn-success" >EditLead</button>
          </form>
        </div>
    );
}
export default EditLead