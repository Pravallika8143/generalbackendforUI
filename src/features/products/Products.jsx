import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";


function Products(){
    var {isLoading,data}=useGetAllProductsQuery();
 return (
        <div className="border border-3 m-3 p-3 border-dark">
            <h1>Products</h1>
            {isLoading && <h5>Loading...</h5>}
            {!isLoading && (
                <ul className="d-flex flex-wrap list-unstyled justify-content-between">
                    {
                       data?.products.map((prod)=>{
                        return (
                            <li className="p-3">
                                <h4>{prod.title.slice(0,20)}</h4>
                                <img src={prod.thumbnail} width="200px"  alt=""/>
                            </li>
                        )
                       }) 
                    }
                </ul>
            )}
        </div>
    );
}

export default Products;