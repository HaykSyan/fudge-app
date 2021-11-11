import { lazy, memo, useState } from "react"
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { createPosts } from "../../../../store/actions/post";

const Input = lazy(() => import('../input'));

const AddNewsForm = ({createPosts, user}) => {
    const navigate = useNavigate();
    const { register, handleSubmit, clearErrors, formState: { errors }} = useForm();
    const [form, setForm] = useState({
        title: "",
        description: "",
        user: user._id
    });
    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const add = (e) => {
        createPosts(form);
        setForm({title: "", description: ""});
        navigate('/dashboard/industry-news/');
    }

    return (
        <form onSubmit={handleSubmit(add)} className="needs-validation" noValidate>
            <Input
                register={register}
                required
                label="title"
                name="title"
                type="text"
                className={`form-control ${errors?.title?.type === 'required'?'is-invalid':''}`}
                onChange={handleInput}
                value={form.title}
            />
            
            <Input
                register={register}
                required
                label="description"
                name="description"
                type="textarea"
                className={`form-control ${errors?.description?.type === 'required'?'is-invalid':''}`}
                onChange={handleInput}
                value={form.description}
            />
            <div className="btn-group">
                <button className="btn btn-success">Save</button>
            </div>
        </form>
    );
};


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPosts: (data) => dispatch(createPosts(data))
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(AddNewsForm));
