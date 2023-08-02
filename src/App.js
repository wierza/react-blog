import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SinglePost from './components/pages/SinglePost';
import AddPost from './components/pages/AddPosts';
import EditPost from './components/pages/EditPosts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';



const App = () => {
  return (
    <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:postId" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </main>  
  );
};

export default App;