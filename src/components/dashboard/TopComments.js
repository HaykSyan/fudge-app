import moment from "moment";
import { memo, useEffect } from "react";
import { connect } from "react-redux";
import UserImage from "../../assets/images/user-1.png";
import { getComments } from "../../store/actions/comment";

const TopComments = ({comments, getComments}) => {

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="_top_comments">
            {comments?.map((comment, index) => (
                <div className="d-flex" key={index}>
                    <div className="me-2">
                        <img src={UserImage} alt="" />
                    </div>
                    <div>
                        <p><strong className="name">{comment?.from?.name}</strong></p>
                        <span className="date_created">{moment(comment?.created_at).fromNow()}</span>
                        <p>
                            {comment?.comment}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        comments: state.comment.comments,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getComments: (data = {}) => dispatch(getComments(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(TopComments));
