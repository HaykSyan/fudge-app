import { lazy, memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createComments } from "../../../../store/actions/comment";

const Input = lazy(() => import('../input'));

const CommentForm = ({post, user, createComments}) => {
    const { register, handleSubmit, clearErrors, formState: { errors }} = useForm();
    const [form, setForm] = useState({
        comment: "",
        from: user._id,
        post: post,
    });

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const add = (e) => {
        createComments(form);
        setForm({...form, comment: ""});
    }
    return (
        <form onSubmit={handleSubmit(add)} className="needs-validation" noValidate>
            <Input
                register={register}
                required
                placeholder="comment"
                name="comment"
                type="text"
                className={`form-control mt-3 ${errors?.comment?.type === 'required'?'is-invalid':''}`}
                onChange={handleInput}
                value={form.comment}
                leftSection={<button className="btn btn-secondary mt-3 input-group-text" type="submit">Send</button>}
            />
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    createComments: (data) => dispatch(createComments(data))
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
