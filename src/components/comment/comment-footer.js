import { memo } from "react";

const CommentFooter = ({children}) => (
    <div>
        {children}
    </div>
);

export default memo(CommentFooter);
