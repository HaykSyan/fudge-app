import { memo, useMemo } from "react"
import { routes } from "../../../routes";
import { useLocation } from "react-router";

const handleName = (location) => {
    const [dashboard, ...path] = [ ...new Set(location?.pathname?.split('/').filter(p => p))];
    return routes.find(r => r.path === `/${path?.join('/')}`);
}
handleName();
const HeaderTitle = () => {
    const location = useLocation();
    const title = useMemo(() => handleName(location), [location]);
    return (
        <div className="__header_title d-flex align-items-center w-100">
            <h3>{title?.name}</h3>
            <hr className="w-100"/>
        </div>
    );
}

export default memo(HeaderTitle);
