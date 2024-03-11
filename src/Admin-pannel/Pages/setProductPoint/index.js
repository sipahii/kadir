import React from 'react'
import SetAllPointsTable from '../../Components/clubPoints/setAllPointsTable/SetAllPointsTable'
import SetPointWithinRange from '../../Components/clubPoints/setPointWithinRange/SetPointWithinRange'
import SetPointForAllProduct from '../../Components/clubPoints/setPointForAllProduct/SetPointForAllProduct'

function SetProductPointPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <SetAllPointsTable />
                        <div className="col-lg-4">
                            <SetPointWithinRange />
                            <SetPointForAllProduct />
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default SetProductPointPage