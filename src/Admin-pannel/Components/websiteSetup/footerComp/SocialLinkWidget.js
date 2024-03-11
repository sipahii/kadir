function SocialLinkWidget() {
    return (
        <>
            <div className="card shadow-none bg-light">
                <div className="card-header">
                    <h6 className="mb-0">Social Link Widget</h6>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-2 col-from-label">Show Social Links?</label>
                        <div className="col-md-9">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="hidden" name="types[]" defaultValue="show_social_links" />
                                <input type="checkbox" name="show_social_links" defaultChecked />
                                <span />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Social Links</label>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="lab la-facebook-f" /></span>
                            </div>
                            <input type="hidden" name="types[]" defaultValue="facebook_link" />
                            <input type="text" className="form-control" placeholder="http://" name="facebook_link" defaultValue fdprocessedid="ati2n" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="lab la-twitter" /></span>
                            </div>
                            <input type="hidden" name="types[]" defaultValue="twitter_link" />
                            <input type="text" className="form-control" placeholder="http://" name="twitter_link" defaultValue fdprocessedid="4vfy6j" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="lab la-instagram" /></span>
                            </div>
                            <input type="hidden" name="types[]" defaultValue="instagram_link" />
                            <input type="text" className="form-control" placeholder="http://" name="instagram_link" defaultValue fdprocessedid="qo67cl" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="lab la-youtube" /></span>
                            </div>
                            <input type="hidden" name="types[]" defaultValue="youtube_link" />
                            <input type="text" className="form-control" placeholder="http://" name="youtube_link" defaultValue fdprocessedid="mhdzam" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="lab la-linkedin-in" /></span>
                            </div>
                            <input type="hidden" name="types[]" defaultValue="linkedin_link" />
                            <input type="text" className="form-control" placeholder="http://" name="linkedin_link" defaultValue fdprocessedid="eojzw" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SocialLinkWidget;