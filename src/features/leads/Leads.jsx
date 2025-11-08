import React from "react";
import { useDeleteLeadMutation, useGetAllLeadsQuery, useLazyGetAllLeadsQuery } from "../../services/leadsApi"
import { Link } from "react-router-dom";

function Leads(){
    var {isLoading,data}=useGetAllLeadsQuery();
    var [deleteLeadFn] =useDeleteLeadMutation();
    var [getAllLeadsFn]=useLazyGetAllLeadsQuery();
    console.log(data);
    
    function deleteLead(id){
        deleteLeadFn(id).then((res)=>{
            console.log(res);
            getAllLeadsFn();
            alert('Successfully Deleted')
        })
        .catch((err)=>{
            alert("Something went wrong"+JSON.stringify(err))
        })
    }
    return (
        <div className="border border-3 p-3 m-3 border-dark">
            {isLoading && <b>Loading...</b>}
            <div className="d-flex justify-content-between align-items-center">
                <h1>Leads</h1>
                <Link className="btn btn-success"
                to="/addLead"> 
                <i class="bi bi-plus-circle"></i>
                Add Lead</Link>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Course</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && data?.map((lead)=>{
                       return (
                        <tr>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.courseInterested}</td>
                            <td>
                                {lead.status}
                                <Link className="btn btn-warning ms-2" 
                                to={`/addRemarks/${lead['_id']}`}
                                >AddRemarks</Link>
                            </td>
                            <td>{lead.createdAt}</td>
                            <td>
                                <Link className="btn btn-primary me-2" 
                                to={`/editLead/${lead['_id']}`}
                                >Edit</Link>
                                <button className="btn btn-danger" 
                                onClick={()=>{
                                    deleteLead(lead["_id"]);
                                }}
                                >Delete</button>
                            </td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}
export default Leads