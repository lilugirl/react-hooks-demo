import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {UserProvider} from './Users/UserContext';
import { QueryClient,QueryClientProvider } from 'react-query';

import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";

import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker";
import AnagramsPage from "./Anagrams/AnagramsPage";
import ProductPage from "./Anagrams/ProductPage";


import "../App.css";
const queryClient=new QueryClient();

export default function App () {
  const [user,setUser]=useState();

  return (
    <QueryClientProvider client={queryClient}>
    <UserProvider >
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt/>
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen/>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers/>
                  <span>Users</span>
                </Link>
              </li>
              <li>
                <Link to="/anagrams" className="btn btn-header">
                  <FaUsers/>
                  <span>Anagrams</span>
                </Link>
              </li>
              <li>
                <Link to="/product" className="btn btn-header">
                  <FaUsers/>
                  <span>Product</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker/>
        </header>

        <Routes>
          <Route path="/bookings" element={<BookingsPage/>}/>
          <Route path="/bookables/*" element={<BookablesPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/anagrams" element={<AnagramsPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
        </Routes>
      </div>
    </Router>
    </UserProvider>
    </QueryClientProvider>
  );
}