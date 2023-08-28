import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateToStr from "../../utils/dateToStr";


const SinglePost = () => {

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemove = () => {
        dispatch(removePost(postId));
        handleClose();
    }
    if (!postData) return <Navigate to="/" />

    return (
    <>
        <Row className="justify-content-center">
            <Col xs="12" md="10" lg="8">
            <header className="d-flex justify-content-between align-items-center">
            <h2>{postData.title}</h2>
            <div className="d-flex">
                <Button id="edit-button" variant="outline-info" as={NavLink} to={`/post/edit/${postData.id}`} style={{ marginLeft: '10px', marginRight: '5px' }}> Edit </Button>
                <Button id="delete-button" variant="outline-danger" onClick={handleShow}> Delete </Button>
            </div>
            </header>
            <div className="py-4">
                        <div>
                            <span className="fw-bold"> Author: </span>
                            <span>{postData.author}</span>
                        </div>
                        <div>
                            <span className="fw-bold"> Published: </span>
                            <span>{dateToStr(new Date(postData.publishedDate))}</span>
                        </div>
                    </div>
                    <article dangerouslySetInnerHTML={{ __html: postData.content}}></article>
            </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title> Are you sure? </Modal.Title>
        </Modal.Header>
        <Modal.Body> This operation will completely remove this post from the app.<br /> Are you sure you want to do that? </Modal.Body>
        <Modal.Footer>
            <Button id="cancel-button" variant="secondary" onClick={handleClose}> Cancel </Button>
            <Button id="remove-button" variant="danger" onClick={handleRemove}> Remove </Button>
        </Modal.Footer>
    </Modal>
</>
    );
};

export default SinglePost;