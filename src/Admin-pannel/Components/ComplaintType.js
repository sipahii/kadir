import React from 'react'
import CompliantTypeList from './CompliantTypeList'
import AddComplaintType from './AddComplaintType'

function ComplaintType() {
    return (
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="aiz-titlebar text-left mt-2 mb-3">
                    <div className="align-items-center">
                        <h1 className="h3">Complaint Type</h1>
                    </div>
                </div>
                <div className="row">
                    <CompliantTypeList />
                    <AddComplaintType />
                </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
            </div>
        </div>
    )
}

export default ComplaintType