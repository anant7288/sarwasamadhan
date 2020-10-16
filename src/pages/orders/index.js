import React from "react";
import { Link } from 'react-router-dom'

const Orders = ()=>{
    return(
        <div>
            <h1>This is Orders Page</h1>
            <Link to="/reports">Reports</Link>
        </div>
    )
}
export default Orders;