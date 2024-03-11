import React from 'react'
import ComplaintNatureList from './ComplaintNatureList'
import AddComplaintNatureList from './AddComplaintNatureList'

function ComplaintNature() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">Complaint Nature</h1>
                        </div>
                    </div>
                    <div className="row">
                        <ComplaintNatureList />
                        <AddComplaintNatureList />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}

export default ComplaintNature