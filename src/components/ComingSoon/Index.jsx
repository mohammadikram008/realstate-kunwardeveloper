import React, { Fragment } from 'react'
import circle from '../other/circle.png'
import './Index.scss'
const Index = () => {
    return (
        <Fragment>
            <div className='coming-soon-main'>

           
            <div data-v-9e68f8c8="" className="row coming-soon">
                <div data-v-9e68f8c8="" className="tex-area">
                    <span data-v-9e68f8c8="" className="title">NEW PROJECTS</span>
                    <h2  >Coming Soon...</h2>
                    <div data-v-9e68f8c8="" className="text-row">
                        <div data-v-9e68f8c8="" className="coming-txt">
                            <span data-v-9e68f8c8="" className="country">1) Zarkon Heights, Located on Main GT Road, G 15 Islamabad </span>
                            <span data-v-9e68f8c8="" className="country">2)Oriental Tower, Kunwar Block, Top City 1, Islamabad</span>
                           
                        </div>
                        {/* <div data-v-9e68f8c8="" className="col-sm-4">
                            <span data-v-9e68f8c8="" className="country">ISLAMABAD </span>
                            <br data-v-9e68f8c8="" />
                            <div data-v-9e68f8c8="" className="projects">
                                <span data-v-9e68f8c8="" className="new-projects">Yi Riviera  Silversands Legacy</span>
                                <br data-v-9e68f8c8="" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div data-v-9e68f8c8="" className="col-sm-4 float-right soon-img">
                    <img data-v-9e68f8c8="" src={circle} className="img-fluid " />
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Index