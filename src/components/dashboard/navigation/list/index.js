import { lazy, memo } from "react";
import { NavLink } from "react-router-dom";
import { AdvisorsIcon, ArrowRight, DashboardIcon, DocumentsIcon, NewsFeedIcon, PhoneIcon } from "../../../icons";

const NavItem  = lazy(() => import('./item'));
const NavList = () => {
    return (
        <ul>
            <NavLink activealassname="active" exact="true" to="/dashboard/">
                <NavItem icon={<DashboardIcon />} title="Dashboard" additionalIcon={<ArrowRight />}/>
            </NavLink>
            <NavItem icon={<AdvisorsIcon />} title="Advisors" />
            <NavItem icon={<DocumentsIcon />} title="My Documents" />
            <NavLink activealassname="active" exact="true" to="/dashboard/industry-news/">
                <NavItem icon={<NewsFeedIcon />} title="News feed" />
            </NavLink>
            <NavItem icon={<PhoneIcon />} title="Support" />
        </ul>
    );
}

export default memo(NavList);
