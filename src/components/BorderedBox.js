import { memo } from "react"

const BorderedBox = ({children}) => (
    <div className="__box __box_bordered">
        {children}
    </div>
);

export default memo(BorderedBox);
