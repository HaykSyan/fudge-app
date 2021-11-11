import { memo } from "react";
import UserImage from "../../../assets/images/user.png";

const UserSection = ({user}) => (
    <div className="_user_info d-flex align-items-center">
        <img src={UserImage} alt="Welcome, Alex Martin." />
        <div>Welcome, <strong>{user?.name}</strong>. Here’s your personalized financial dashboard</div>
    </div>
);

export default memo(UserSection);
