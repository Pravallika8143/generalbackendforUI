import React, { useEffect }from "react";
import { useParams } from "react-router-dom"
import { 
          useGetLeadDetailsByIdQuery, 
          useLazyGetAllLeadsQuery, 
          useLazyGetLeadDetailsByIdQuery, 
          useUpdateLeadMutation
       } from "../../services/leadsApi";
import { useFormik } from "formik";

function AddRemarks(){
    var {id}=useParams();
        var { isLoading,data}=useGetLeadDetailsByIdQuery(id);
        var [updateLeadFn]=useUpdateLeadMutation();
        var [getAllLeadsFn]=useLazyGetAllLeadsQuery();
        var [getLeadDetailsFn]=useLazyGetLeadDetailsByIdQuery(id);
        var leadForm=useFormik({
                initialValues:{
                   _id:"",
                   name:"",
                   email:"",
                   phone:"",
                   courseInterested:"",
                   status:"New",
                   remarks:""
                },
                onSubmit:(values)=>{
                    updateLeadFn(values).then(()=>{
                        alert("Lead Updated")
                        getAllLeadsFn();
                        // getLeadDetailsFn();
                    })
                },
            });
            useEffect(()=>{
                getLeadDetailsFn(id).then(()=>{
                    leadForm.setValues({...data})
                })
            });
          return (
            <div className="border border-3 p-3 m-3 border-dark">
                <h1>Add Remarks</h1>
                {isLoading && <b>Loading....</b>}
                {!isLoading && JSON.stringify(data)}
                <form onSubmit={leadForm.handleSubmit}>
                <select {...leadForm.getFieldProps("status")}>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <br/>
                <textarea {...leadForm.getFieldProps("Remarks")}></textarea>
                <br/>
                <button className="btn btn-success" >AddRemark</button>
              </form>
              </div>
          );
}
export default AddRemarks