import { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories, getPostsByCategory } from '../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);

    const categories = useSelector(getAllCategories);

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        if (!category) {
            errors.category = { type: 'required' };
        }
        if (content && publishedDate && category) {
            action({ title, author, publishedDate, shortDescription, content, category });
        }
    };
    
    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label> Title </Form.Label>
                <Form.Control
                {...register("title", { required: true, minLength: 3 })}
                value={title}
                onChange={e => setTitle(e.target.value)}
                id="title" placeholder="Enter title"   
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Author </Form.Label>
                <Form.Control
                {...register("author", { required: true, minLength: 3 })}
                value={author}
                onChange={e => setAuthor(e.target.value)} 
                id="author" placeholder="Enter author"   
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Published </Form.Label>
                <DatePicker 
                selected={publishedDate}
                onChange={date => setPublishedDate(date)}
                id="published"   
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Category </Form.Label>
                <Form.Control
                    as="select"
                    {...register('category', { required: true })}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id="category"
                >
                    <option value="">Select a category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </Form.Control>
                {errors.category && <small className="d-block form-text text-danger mt-2">Please select a category</small>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Short description </Form.Label>
                <Form.Control 
                {...register("description", { required: true, minLength: 20 })}
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)}
                id="description" placeholder="Leave a comment here"
                />
                {errors.description && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}  
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label> Main content </Form.Label>
                <ReactQuill
                value={content}
                onChange={setContent} 
                id="main-content" as="textarea" theme="snow" placeholder="Leave a comment here"   
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>

    );
};

export default PostForm;