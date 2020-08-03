import React, { Component } from 'react';
import Hero from '../components/Hero';
import img from '../images/home/camera.png';
import Navbartmp from '../components/Navbartmp';
class CameraView extends Component {

    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {


        return (
            <>
            <Navbartmp/>
            <Hero>

                <div className="img-wrapper">
                    <div className="img-area">
                        <a href="/modal">
                            <div className="single-img img1-bgcolor"><img src={img} /><div className="camera-label">Camera 1</div></div>
                            <div></div>
                        </a>
                        <a href="/modal">
                            <div className="single-img img2-bgcolor"><img src={img} /><div className="camera-label">Camera 2</div>   </div>
                        </a>
                        <a href="/modal">
                            <div className="single-img img3-bgcolor"><img src={img} /><div className="camera-label">Camera 3</div>    </div>
                        </a>
                        <a href="/modal">
                            <div className="single-img img4-bgcolor"><img src={img} /><div className="camera-label">Camera 4</div>  </div>
                        </a>
                        <a href="/modal">
                            <div className="single-img img5-bgcolor"><img src={img} /> <div className="camera-label">Camera 5</div> </div>
                        </a>
                        <a href="/modal">
                            <div className="single-img img6-bgcolor"><img src={img} /><div className="camera-label">Camera 6</div>   </div>
                        </a>
                    </div>
                    <div class="camera-note">
                        <div className="camera-legends"><strong>Note : </strong> </div>
                        <div className="camera-legends">	<p>Eid id no:#001 - #020  = camera no :1 </p>
                            <p>Eid id no:#021 - #040  = camera no :2 </p>
                            <p>Eid id no:#041 - #060  = camera no :3 </p>
                            <p>Eid id no:#061 - #80  = camera no :4 </p>
                            <p>Eid id no:#081 - #100 =  camera no :5</p>
                            <p className="camera6-alert">Camera no:6 (Hospitality and breeding area)</p>
                            <p className="camera6-alert">#0049,#007,#003</p></div>
                    </div>
                </div>




            </Hero>
</>

        )

    }
}

export default CameraView;