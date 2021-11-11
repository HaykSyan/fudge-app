import { memo } from "react"

const ShadowBox = ({children, className, ...rest}) => (
    <div className={`__box __box_shadow ${className? className: ''}`} >
        {children}
    </div>
);

export default memo(ShadowBox);
