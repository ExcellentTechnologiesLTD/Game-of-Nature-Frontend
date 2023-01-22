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
import ItemDetails from "./components/AdminDashboard/ItemDetails/ItemDetails";
import ProductForm from "./components/ProductForm/ProductForm";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import RequireAdminAuth from "./components/RequireAuth/RequireAdminAuth";
import RequireCustomerAuth from "./components/RequireAuth/RequireCustomerAuth";
import Cart from "./components/Cart/Cart";
import CustomerDashboard from "./components/CustomerDashboard/CustomerDashboard";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import { useState } from "react";
import CheckOut from "./components/CheckOut/CheckOut";
import ManageOrders from "./components/AdminDashboard/ManageOrders/ManageOrders";
import ManageDeliveries from "./components/AdminDashboard/ManageDeliveries/ManageDeliveries";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App ">
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
          path="/item-details/:id"
          element={
            <ItemDetails
              setCartItems={setCartItems}
              cartItems={cartItems}
            ></ItemDetails>
          }
        ></Route>
        <Route
          path="perfumes&attar"
          element={<PerfumeAttar></PerfumeAttar>}
        ></Route>
        <Route path="daily-needs" element={<DailyNeeds></DailyNeeds>}></Route>
        <Route path="groceries" element={<Groceries></Groceries>}></Route>

        {/* Routes For Customers  */}

        <Route
          path="/dashboard"
          element={
            <RequireCustomerAuth>
              <CustomerDashboard></CustomerDashboard>
            </RequireCustomerAuth>
          }
        >
          <Route
            path="order-history"
            element={
              <RequireCustomerAuth>
                <OrderHistory></OrderHistory>
              </RequireCustomerAuth>
            }
          ></Route>
          {/* <Route
            path="cart"
            element={
              <RequireCustomerAuth>
                <Cart cartItems={cartItems}></Cart>
              </RequireCustomerAuth>
            }
          ></Route> */}
          <Route
            path="checkout"
            element={
              <RequireCustomerAuth>
                <CheckOut cartItems={cartItems}></CheckOut>
              </RequireCustomerAuth>
            }
          ></Route>
        </Route>
        {/* Routes For Customers  */}
        {/* Routes For Admin  */}
        <Route
          path="/admin-dashboard"
          element={
            <RequireAdminAuth>
              <AdminDashboard></AdminDashboard>
            </RequireAdminAuth>
          }
        >
          <Route
            // path="all-products"
            index
            element={<AllProducts></AllProducts>}
          ></Route>
          <Route path="addproducts" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manage-orders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="manage-deliveries"
            element={<ManageDeliveries></ManageDeliveries>}
          ></Route>
        </Route>
        {/* Routes For Admin  */}

        <Route path="/edit/:id" element={<AddProduct></AddProduct>}></Route>
        <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
