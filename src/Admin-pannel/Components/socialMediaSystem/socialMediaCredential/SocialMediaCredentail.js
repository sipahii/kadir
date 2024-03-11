import React from 'react'
import FacebookCredential from './FaceBookCredential'
import TwitterCredentail from './TwitterCredentail'
import LinkdInCredential from './LinkdInCredential'
import InstaGramCredentail from './InstaGramCredentail'
import GoogleCredentail from './GoogleCredentail'

function SocialMediaCredentail() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <FacebookCredential />
                        <TwitterCredentail />
                        <LinkdInCredential />
                        <InstaGramCredentail />
                        <GoogleCredentail />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}

export default SocialMediaCredentail