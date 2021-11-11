import moment from "moment";
import { lazy, memo, useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router";
import { getPost } from "../../store/actions/post"

const Comments = lazy(() => import('../../components/comment'));
const ShadowBox = lazy(() => import('../../components/ShadowBox'));

const Article = ({post, getPost}) => {
    const router = useParams();
    useEffect(() => {
        getPost(router.id);
    }, [router.id]);

    return (
        <div className="_industry_news">
            <h1>{post?.title}</h1>
            <span className="date_created">{moment(post?.created_at).fromNow()}</span>
            <p>{post?.description}</p>

            <ShadowBox className="p-4">
                <Comments comments={post?.comments} post={router.id}/>
            </ShadowBox>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        post: state.post.post,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPost: (data) => dispatch(getPost(data))
})
export default memo(connect(mapStateToProps, mapDispatchToProps)(Article))
