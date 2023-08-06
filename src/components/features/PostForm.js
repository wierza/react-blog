import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label> Title </Form.Label>
                <Form.Control id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Author </Form.Label>
                <Form.Control id="author" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Published </Form.Label>
                <Form.Control id="published" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Short description </Form.Label>
                <Form.Control id="short-description" as="textarea" rows={4} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label> Main content </Form.Label>
                <Form.Control id="main-content" as="textarea" rows={10} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>

    );
};

export default PostForm;