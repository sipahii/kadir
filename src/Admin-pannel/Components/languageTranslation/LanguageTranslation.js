function LanguageTranslation() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col text-center text-md-left">
                                <h5 className="mb-md-0 h6">English</h5>
                            </div>
                            <div className="col-md-4">
                                <form className id="sort_keys" action method="GET">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type key & Enter" fdprocessedid="2mu5ha" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <form className="form-horizontal" action="https://mmslfashions.in/admin/languages/key_value_store" method="POST">
                            <input type="hidden" name="_token" defaultValue="OlhMycqXuIcjZ16H1v7gFG49f12SloCusJTFh8sM" />            <input type="hidden" name="id" defaultValue={1} />
                            <div className="card-body">
                                <table className="table table-striped table-bordered demo-dt-basic" id="tranlation-table" cellSpacing={0} width="100%">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th width="45%">Key</th>
                                            <th width="45%">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className="key">All Category</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[all_category]" defaultValue="All Category" fdprocessedid="zexm28" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className="key">All</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[all]" defaultValue="All" fdprocessedid="2wmzd" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className="key">Flash Sale</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[flash_sale]" defaultValue="Flash Sale" fdprocessedid="ssqcskb" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="key">View More</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[view_more]" defaultValue="View More" fdprocessedid="qap7" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="key">Add to wishlist</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[add_to_wishlist]" defaultValue="Add to wishlist" fdprocessedid="loamxk" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="key">Add to compare</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[add_to_compare]" defaultValue="Add to compare" fdprocessedid="psiaj" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="key">Add to cart</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[add_to_cart]" defaultValue="Add to cart" fdprocessedid="zozg7f" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className="key">Club Point</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[club_point]" defaultValue="Club Point" fdprocessedid="0otxsz" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className="key">Classified Ads</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[classified_ads]" defaultValue="Classified Ads" fdprocessedid={239719} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="key">Used</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[used]" defaultValue="Used" fdprocessedid="27mbbq" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td className="key">Top 10 Categories</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[top_10_categories]" defaultValue="Top 10 Categories" fdprocessedid="7zkjan" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td className="key">View All Categories</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[view_all_categories]" defaultValue="View All Categories" fdprocessedid="uv36f8" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td className="key">Top 10 Brands</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[top_10_brands]" defaultValue="Top 10 Brands" fdprocessedid="0zmvjw" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td className="key">View All Brands</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[view_all_brands]" defaultValue="View All Brands" fdprocessedid="h1xcmzi" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td className="key">Terms &amp; conditions</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[terms__conditions]" defaultValue="Terms & conditions" fdprocessedid="7rlhpn" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td className="key">Best Selling</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[best_selling]" defaultValue="Best Selling" fdprocessedid="4i1fq9" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td className="key">Top 20</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[top_20]" defaultValue="Top 20" fdprocessedid="60icn" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td className="key">Featured Products</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[featured_products]" defaultValue="Featured Products" fdprocessedid="346nuf" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>19</td>
                                            <td className="key">Best Sellers</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[best_sellers]" defaultValue="Best Sellers" fdprocessedid="47w3zn" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td className="key">Visit Store</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[visit_store]" defaultValue="Visit Store" fdprocessedid="0tiuu3" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>21</td>
                                            <td className="key">Popular Suggestions</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[popular_suggestions]" defaultValue="Popular Suggestions" fdprocessedid="x6m8jh" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td className="key">Category Suggestions</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[category_suggestions]" defaultValue="Category Suggestions" fdprocessedid="kbjqxd" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td className="key">Automobile &amp; Motorcycle</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[automobile__motorcycle]" defaultValue="Automobile & Motorcycle" fdprocessedid="3kubz" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>24</td>
                                            <td className="key">Price range</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[price_range]" defaultValue="Price range" fdprocessedid="4g3pd8" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td className="key">Filter by color</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[filter_by_color]" defaultValue="Filter by color" fdprocessedid="4ak74c" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>26</td>
                                            <td className="key">Home</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[home]" defaultValue="Home" fdprocessedid="2t0ome" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td className="key">Newest</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[newest]" defaultValue="Newest" fdprocessedid="luc16s" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28</td>
                                            <td className="key">Oldest</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[oldest]" defaultValue="Oldest" fdprocessedid="zm02ta" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>29</td>
                                            <td className="key">Price low to high</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[price_low_to_high]" defaultValue="Price low to high" fdprocessedid="u5zswq" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td className="key">Price high to low</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[price_high_to_low]" defaultValue="Price high to low" fdprocessedid="08frx" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>31</td>
                                            <td className="key">Brands</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[brands]" defaultValue="Brands" fdprocessedid="xaef8p" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>32</td>
                                            <td className="key">All Brands</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[all_brands]" defaultValue="All Brands" fdprocessedid="g7ii3" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>33</td>
                                            <td className="key">All Sellers</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[all_sellers]" defaultValue="All Sellers" fdprocessedid="pyuiv8" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>34</td>
                                            <td className="key">Inhouse product</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[inhouse_product]" defaultValue="Inhouse product" fdprocessedid="jpumz7" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>35</td>
                                            <td className="key">Message Seller</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[message_seller]" defaultValue="Message Seller" fdprocessedid="n8gg3m" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>36</td>
                                            <td className="key">Price</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[price]" defaultValue="Price" fdprocessedid="4yr7mm" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>37</td>
                                            <td className="key">Discount Price</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[discount_price]" defaultValue="Discount Price" fdprocessedid="y1ye7" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>38</td>
                                            <td className="key">Color</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[color]" defaultValue="Color" fdprocessedid="oi8bz9" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>39</td>
                                            <td className="key">Quantity</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[quantity]" defaultValue="Quantity" fdprocessedid="sthgpq" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>40</td>
                                            <td className="key">available</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[available]" defaultValue="available" fdprocessedid="1t8o6" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>41</td>
                                            <td className="key">Total Price</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[total_price]" defaultValue="Total Price" fdprocessedid="4r93s" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>42</td>
                                            <td className="key">Out of Stock</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[out_of_stock]" defaultValue="Out of Stock" fdprocessedid="05mbti" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>43</td>
                                            <td className="key">Refund</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[refund]" defaultValue="Refund" fdprocessedid="uprlr" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>44</td>
                                            <td className="key">Share</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[share]" defaultValue="Share" fdprocessedid="dclky8" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>45</td>
                                            <td className="key">Sold By</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[sold_by]" defaultValue="Sold by" fdprocessedid="zgdug" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>46</td>
                                            <td className="key">customer reviews</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[customer_reviews]" defaultValue="customer reviews" fdprocessedid="62s2be" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>47</td>
                                            <td className="key">Top Selling Products</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[top_selling_products]" defaultValue="Top Selling Products" fdprocessedid="1o86ak" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>48</td>
                                            <td className="key">Description</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[description]" defaultValue="Description" fdprocessedid="2yzaca" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>49</td>
                                            <td className="key">Video</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[video]" defaultValue="Video" fdprocessedid="4js2h" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>50</td>
                                            <td className="key">Reviews</td>
                                            <td>
                                                <input type="text" className="form-control value" style={{ width: '100%' }} name="values[reviews]" defaultValue="reviews" fdprocessedid="fmut4" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="aiz-pagination">
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                                <span className="page-link" aria-hidden="true">‹</span>
                                            </li>
                                            <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=2">2</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=3">3</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=4">4</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=5">5</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=6">6</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=7">7</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=8">8</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=9">9</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=10">10</a></li>
                                            <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=49">49</a></li>
                                            <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=50">50</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="https://mmslfashions.in/admin/languages/1?page=2" rel="next" aria-label="Next »">›</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="form-group mb-0 text-right">
                                    <button type="button" className="btn btn-primary" onclick="copyTranslation()" fdprocessedid="sdtsd">Copy Translations</button>
                                    <button type="submit" className="btn btn-primary" fdprocessedid="b02tpg">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default LanguageTranslation