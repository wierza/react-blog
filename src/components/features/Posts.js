import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../redux/postsRedux";
import { Card, Col, Row, Button } from "react-bootstrap";
import dateToStr from "../../utils/dateToStr";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <Row className='py-4'>
            {posts.map((post) => (
                <Col key={post.id} xs='12' md='6' lg='4' className='mb-4'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <div>
                                <span className='fw-bold'> Author: </span>
                                <span>{post.author}</span>
                            </div>
                            <div>
                                <span className='fw-bold'> Published: </span>
                                <span>{dateToStr(new Date(post.publishedDate))}</span>
                            </div>
                            <div>
                                <span className="fw-bold"> Category: </span>
                                <span>{post.category}</span>
                            </div>
                            <Card.Text className='mt-2'>{post.shortDescription}</Card.Text>
                            <Button variant='primary' as={NavLink} to={`/post/${post.id}`}>
                                Read more
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
};

export default Posts;