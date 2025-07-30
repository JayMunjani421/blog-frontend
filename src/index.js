import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetails from './components/SingleBlog';
import { Provider } from 'react-redux';
import mystore from './mystore/store';
import Blog from './components/Blog';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import InsertForm from './components/InsertForm';
import UpdateForm from './components/UpdateForm';
import ViewData from './components/ViewData';
import Profile from './components/AdminProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={mystore}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/insertform" element={<InsertForm/>}></Route>
          <Route path="/updateform/:id" element={<UpdateForm/>}></Route>
          <Route path="/viewdata/:id" element={<ViewData/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


