import { memo } from "react";
import { ArrowDropDown } from "../../icons";

const ActionsSection = () => (
    <div className="_actions d-flex align-items-end">
        <ul>
            <li>Currency: GBP <ArrowDropDown /></li>
            <li>My Account <ArrowDropDown /></li>
        </ul>
    </div>
);

export default memo(ActionsSection);
