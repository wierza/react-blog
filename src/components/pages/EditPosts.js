import React from "react";
import { Row, Col } from "react-bootstrap";
import EditPostForm from "../features/EditPostForm";

const EditPost = () => {
    return (
        <Row className="justify-content-center">
            <Col xs="12" md="10" lg="8">
            <h2> Edit Post </h2>
            <EditPostForm />
            </Col>
        </Row>
        
    );
};

export default EditPost;