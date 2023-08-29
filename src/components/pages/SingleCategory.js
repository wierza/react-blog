import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../redux/categoriesRedux';
import { Row } from 'react-bootstrap';
import Post from './Post/Post';
import { Navigate } from 'react-router-dom';

const SingleCategory = () => {
  const { category } = useParams();
  const categoriesData = useSelector(state => getPostsByCategory(state, category));
  if (!categoriesData) return <Navigate to="/categories/" />;
  return (
    <Row className="justify-content-between">
      <Post posts={categoriesData} />
    </Row>
  );
};

export default SingleCategory;