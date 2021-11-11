import { memo } from "react";

const NavItem = ({icon, title, additionalIcon, ...rest}) => (
    <li {...rest}>
        <span><i>{icon}</i> {title}</span>
        <span>{additionalIcon}</span>
    </li>
);

export default memo(NavItem);
