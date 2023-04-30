import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Feeds from "../pages/Feeds";
import AddForm from "../pages/AddForm";
import FeedDetail from "../pages/FeedDetail";
import Layout from "../components/Layout/Layout";
import SignIn from "../pages/SignIn";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="add" element={<AddForm />} />
          <Route path="feeds/:id" element={<FeedDetail />} />
          <Route path="sign-in" element={<SignIn/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
