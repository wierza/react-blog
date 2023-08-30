import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import SinglePost from './components/pages/SinglePost';
import AddPost from './components/pages/AddPosts';
import EditPost from './components/pages/EditPosts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import SingleCategory from './components/pages/SingleCategory';
import { Container } from 'react-bootstrap';



const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<SingleCategory />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:postId" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
  );
};

export default App;