import { memo, useEffect, useRef } from "react";


const CommentsBody = ({children}) => {
    const scrollEndRef = useRef(null)

    const scrollToBottom = () => {
        scrollEndRef.current.scrollTop = scrollEndRef.current.scrollHeight;
    }
  
    useEffect(scrollToBottom, [children])
    return (
        <div className="_body" ref={scrollEndRef}>
            {children}
        </div>
    );
}

export default memo(CommentsBody);