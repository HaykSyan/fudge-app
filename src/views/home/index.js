import React, { lazy } from "react";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as ArrowDown} from "../../assets/images/icons/arrow-down.svg";
import { animateBodyBg } from "../../utils";

const AdditionalInfoSection = lazy(() => import('../../components/home/AdditionalInfoSection'));
const Home = (props) => {
    return (
       <div className="_home">
           <div  className="logo">
                <div className="d-flex flex-column justify-content-cemter align-items-center">
                    <Logo />
                    <AdditionalInfoSection />
                </div>
           </div>
            <div>
                <ArrowDown onClick={animateBodyBg} className="arrow_icon" />
            </div>
       </div>
    );
}

export default Home;