import moment from "moment";
import { lazy, memo } from "react";

const CommentsBody = lazy(() => import('./comments-body'));
const CommentsFooter = lazy(() => import('./comment-footer'));
const CommentForm = lazy(() => import('../dashboard/form/comment'));

const Comments = ({comments, post}) => {
    return (
        <div className="__comments_section">
            <CommentsBody>
                {comments?.map((comment, index) => (
                    <div className="border-bottom" key={index}>
                        <p><strong className="text-success">{comment?.from?.name}</strong> <span className="date_created">{moment(comment?.created_at).fromNow()}</span></p>
                        <p>{comment?.comment}</p>
                    </div>
                ))}
            </CommentsBody>
            <CommentsFooter>
                <CommentForm post={post} />
            </CommentsFooter>
        </div>
    );
}

export default memo(Comments);
