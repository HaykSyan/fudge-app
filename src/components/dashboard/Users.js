import { memo, useEffect } from "react";
import { connect } from "react-redux";
import UserImage from "../../assets/images/user.png";
import { getUsers } from "../../store/actions/user";

const Users = ({users, getUsers}) => {

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="_users">
            {users?.map((user, index) => (
                <div className="d-flex mb-4" key={index}>
                    <div className="me-3">
                        <img src={UserImage} alt="" />
                    </div>
                    <div>
                        <p><strong className="name">{user?.name}</strong></p>
                        <span className="status"> Online</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUsers: (data = {}) => dispatch(getUsers(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Users));
