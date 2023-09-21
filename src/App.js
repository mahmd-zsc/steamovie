import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
import Home from "./components/home/home";
import { AuthProvider } from "./components/context";
import Movie from "./components/movie/movie";
import SearchPage from "./components/searchPage/searchPage";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./components/redux/store";
import TopRate from "./components/topRate/topRate";
function App() {
  return (
    <div className=" app   select-none min-h-screen    ">
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:movieId" element={<Movie />} />
              <Route path="/searchPage" element={<SearchPage />} />
              <Route path="/top-rate" element={<TopRate />} />
            </Routes>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
