import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Feeds from "../pages/Feeds";
import AddForm from "../pages/AddForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="feeds" element={<Feeds/>}/>
        <Route path="add" element={<AddForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;