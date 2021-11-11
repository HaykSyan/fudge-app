import { lazy, memo } from "react"
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/images/logo-nav.svg";
import { removeAnimateBodyBg } from "../../../utils";

const NavList = lazy(() => import('./list'));

const Navigation = () => {
    return (
        <div className="__navigation_section d-flex flex-column align-items-center">
            <Link onClick={removeAnimateBodyBg} to="/" ><Logo /></Link>
            <NavList />
        </div>
    );
}

export default memo(Navigation);
