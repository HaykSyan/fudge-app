import moment from "moment";
import { lazy, memo, useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { getPosts } from "../../store/actions/post";

const PaginationComponent = lazy(() => import('../../components/PaginationComponent'));

const IndustryNews = ({posts, getPosts}) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPosts({page});
    }, [page]);

    return (
        <div className="_industry_news">
            <div className="d-flex justify-content-end">
                <Link to="/dashboard/industry-news/add" className="btn btn-link">Add new</Link>
            </div>
            {posts?.docs?.map((post, index) => (
                <div key={index}>
                    <span className="date_created">{moment(post?.created_at).fromNow()}</span>
                    <p className="_title"><strong>{post?.title}</strong></p>
                    <p>{post?.description}</p>
                    <Link to={`/dashboard/industry-news/${post._id}`} className="px-0 mb-4 btn btn-link">Read full article</Link>
                </div>
            ))}
            
            
            {posts?.totalDocs && posts?.totalPages > 1 ? <PaginationComponent {...posts} setPage={setPage} /> : null }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPosts: (data) => dispatch(getPosts(data))
})
export default memo(connect(mapStateToProps, mapDispatchToProps)(IndustryNews))
