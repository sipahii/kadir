import React from 'react'
import { Link } from 'react-router-dom'

function ComplaintDetail() {
    return (
        <div>
            <h2>ComplaintDetail</h2>

            <Link to={"/admin/employees-complaints-dashboard"}>Back</Link>
        </div>
    )
}

export default ComplaintDetail
