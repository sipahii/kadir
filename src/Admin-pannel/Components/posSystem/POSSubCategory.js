import React from 'react'
import { useGetPOSSubCategoryIdQuery } from '../all-products/allproductsApi/allProductsApi'

function POSSubCategory({ sendPoscategoryId, showSubCategoryBox, setShowSubCategoryBox }) {

    const { data } = useGetPOSSubCategoryIdQuery(sendPoscategoryId);
    // console.log('subCatttttD-----', data)

    return (
        <>
            <div className={showSubCategoryBox ? 'categories-box active' : 'categories-box'}>
                <div className='rel-box'>
                    <ul className='categ_prod_wrapper'>
                        {data && data.map((item, i) => {
                            return <li>
                                <figure>
                                    <img src={item.icon?.url}></img>
                                </figure>
                                <figcaption>
                                    <p>{item.name}</p>
                                </figcaption>
                            </li>
                        })}

                    </ul>
                    <button type='button' onClick={() => setShowSubCategoryBox(false)} className='cross'>X</button>
                </div>
            </div>
        </>
    )
}

export default POSSubCategory