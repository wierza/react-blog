import { ListGroup } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(getAllCategories)
    return (
        <div m-auto>
            <h2> All Categories </h2>
            <ListGroup>
                {categories.map((category, index) => (
                    <ListGroup.Item key={index}>
                        <Link to={'/categories/' + category}>{category}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
        
        
    )
};

export default Categories;