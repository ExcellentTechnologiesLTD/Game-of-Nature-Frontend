import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/Signup/Signup";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AddProduct from "./components/AdminDashboard/AddProduct/AddProduct";
import AllProducts from "./components/AdminDashboard/AllProducts/AllProducts";
import FacialCare from "./components/Categories/FacialCare/FacialCare";
import Haircare from "./components/Categories/Haircare/Haircare";
import BodyCare from "./components/Categories/Bodycare/BodyCare";
import BabyCare from "./components/Categories/Babycare/BabyCare";
import SpaMassage from "./components/Categories/SpaMassage/SpaMassage";
import DailyNeeds from "./components/Categories/DailyNeeds/DailyNeeds";
import PerfumeAttar from "./components/Categories/PerfumesAttar/PerfumeAttar";
import Groceries from "./components/Categories/Groceries/Groceries";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signin" element={<Signin></Signin>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="facial-care" element={<FacialCare></FacialCare>}></Route>
        <Route path="hair-care" element={<Haircare></Haircare>}></Route>
        <Route path="body-care" element={<BodyCare></BodyCare>}></Route>
        <Route path="baby-care" element={<BabyCare></BabyCare>}></Route>
        <Route path="spa&massage" element={<SpaMassage></SpaMassage>}></Route>
        <Route
          path="perfumes&attar"
          element={<PerfumeAttar></PerfumeAttar>}
        ></Route>
        <Route path="daily-needs" element={<DailyNeeds></DailyNeeds>}></Route>
        <Route path="groceries" element={<Groceries></Groceries>}></Route>
        <Route
          path="admin-dashboard"
          element={<AdminDashboard></AdminDashboard>}
        >
          <Route path="addproducts" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="all-products"
            element={<AllProducts></AllProducts>}
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
