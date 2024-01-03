import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function HeaderComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <h1 className="h3">Website Header</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="mb-0">Header Setting</h6>
                                </div>
                                <div className="card-body">
                                    <form >
                                        <input type="hidden" name="_token" defaultValue="bZlht2QD73bDkPhHtuYc3AVcfnrS42HFjF5kM5xe" />

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Header Logo</label>
                                            <div className="col-md-8">
                                                <div className=" input-group " data-toggle="aizuploader" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        {/* <input type="hidden" name="types[]" defaultValue="header_logo" /> */}
                                                        <input type="file" name="header_logo" className="selected-files" />
                                                    </div>
                                                </div>
                                                <div className="file-preview" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Show Language Switcher?</label>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    {/* <input type="hidden" name="types[]" defaultValue="show_language_switcher" /> */}
                                                    <input type="checkbox" name="show_language_switcher" />
                                                    <span />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Show Currency Switcher?</label>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input type="hidden" name="types[]" defaultValue="show_currency_switcher" />
                                                    <input type="checkbox" name="show_currency_switcher" />
                                                    <span />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-from-label">Enable stikcy header?</label>
                                            <div className="col-md-8">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input type="hidden" name="types[]" defaultValue="header_stikcy" />
                                                    <input type="checkbox" name="header_stikcy" />
                                                    <span />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="border-top pt-3">

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Topbar Banner</label>
                                                <div className="col-md-8">
                                                    <div className=" input-group " data-toggle="aizuploader" data-type="image" onClick={handleShow}>
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            {/* <input type="hidden" name="types[]" defaultValue="topbar_banner" /> */}
                                                            <input type="file" name="topbar_banner" className="selected-files" />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Topbar Banner Link</label>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <input type="hidden" name="types[]" defaultValue="topbar_banner_link" />
                                                        <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="topbar_banner_link" defaultValue fdprocessedid="e4yw0l" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-top pt-3">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Help line number</label>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <input type="hidden" name="types[]" defaultValue="helpline_number" />
                                                        <input type="text" className="form-control" placeholder="Help line number" name="helpline_number" defaultValue={+918920073535} fdprocessedid="ed4g0np" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="border-top pt-3">
                                            <label >Header Nav Menu</label>
                                            <div className="header-nav-menu">
                                                <input type="hidden" name="types[]" defaultValue="header_menu_labels" />
                                                <input type="hidden" name="types[]" defaultValue="header_menu_links" />
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Home" fdprocessedid="otg57a" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/" fdprocessedid="ijr7q" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="m1tsnb">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Brands" fdprocessedid="ccnzp" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/brands" fdprocessedid="0575sb" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="5tmkdq7">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Seeds" fdprocessedid="2t67tm" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="bv2de" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="2e4shf">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Corp Protection" fdprocessedid="derua4" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="itgtn" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="dsdzzc">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Crop Nutrition" fdprocessedid="jznorv" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="41fpxp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="6wr2lj">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Machinary" fdprocessedid="k7iuk" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="aq4i35" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="53hq8y">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Segments" fdprocessedid="z7xvc" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="5dzgm" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="1ggu4l">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Services" fdprocessedid="zjhls7" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="0hz21c" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="4gdrqj">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row gutters-5">
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Label" name="header_menu_labels[]" defaultValue="Knowledge" fdprocessedid="fz589n" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Link with http:// Or https://" name="header_menu_links[]" defaultValue="https://mmslfashions.in/category/fertilizer" fdprocessedid="rj8ifb" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="button" className="mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger" data-toggle="remove-parent" data-parent=".row" fdprocessedid="vezmt">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-soft-secondary btn-sm" data-toggle="add-more" data-content="<div class=&quot;row gutters-5&quot;>
								<div class=&quot;col-4&quot;>
									<div class=&quot;form-group&quot;>
										<input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Label&quot; name=&quot;header_menu_labels[]&quot;>
									</div>
								</div>
								<div class=&quot;col&quot;>
									<div class=&quot;form-group&quot;>
										<input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Link with http:// Or https://&quot; name=&quot;header_menu_links[]&quot;>
									</div>
								</div>
								<div class=&quot;col-auto&quot;>
									<button type=&quot;button&quot; class=&quot;mt-1 btn btn-icon btn-circle btn-sm btn-soft-danger&quot; data-toggle=&quot;remove-parent&quot; data-parent=&quot;.row&quot;>
										<i class=&quot;las la-times&quot;></i>
									</button>
								</div>
							</div>" data-target=".header-nav-menu" fdprocessedid="mxskib">
                                                Add New
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary" fdprocessedid="w8muh">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
export default HeaderComp;