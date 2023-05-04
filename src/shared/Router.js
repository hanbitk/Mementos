import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Feeds from "../pages/Feeds";
import AddForm from "../pages/AddForm";
import FeedDetail from "../pages/FeedDetail";
import Layout from "../components/Layout/Layout";
import SignIn from "../pages/SignIn";
import RegisterUser from "../pages/RegisterUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="add" element={<AddForm />} />
          <Route path="feeds/:id" element={<FeedDetail />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<RegisterUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
