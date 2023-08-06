import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postsRedux';
import PostForm from '../features/PostForm';

const AddPostForm = () => {
    const disptach = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = post => {
        disptach(addPost(post));
        navigate('/');
    }
    return (
        <PostForm action={handleSubmit} actionText="Add post" />
    );
};

export default AddPostForm;