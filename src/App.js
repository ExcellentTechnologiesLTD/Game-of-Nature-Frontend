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
import { createContext, useState } from "react";
import CheckOut from "./components/CheckOut/CheckOut";
import ManageOrders from "./components/AdminDashboard/ManageOrders/ManageOrders";
import ManageDeliveries from "./components/AdminDashboard/ManageDeliveries/ManageDeliveries";
import ManageVouchers from "./components/AdminDashboard/ManageVouchers/ManageVouchers";
import Promotions from "./components/Promotions/Promotions";
import Policies from "./components/Policies/Policies";
import PolicyPage from "./components/PolicyPage/PolicyPage";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";

export const CartContext = createContext("cartInfo");

function App() {
  // Reset LocalStorage
  // localStorage.clear();

  //Global Shareable data
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("currentUserDetails"))
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("myCartItems"))
  );
  const [totalCartItemCost, setTotalCartItemCost] = useState(
    parseInt(localStorage.getItem("totalCartItemCost"))
  );

  const [shippingCost, setShippingCost] = useState(
    localStorage.getItem("shippingCost")
      ? parseInt(localStorage.getItem("shippingCost"))
      : 0
  );
  const [voucherName, setVoucherName] = useState(
    localStorage.getItem("discountVoucherName")
  );
  const [discount, setDiscount] = useState(
    localStorage.getItem("discountVoucherAmount")
      ? parseInt(localStorage.getItem("discountVoucherAmount"))
      : 0
  );
  const [discountApplied, setDiscountApplied] = useState(
    localStorage.getItem("discountApplied") == true ? true : false
  );
  const [reload, setReload] = useState(false);

  return (
    <CartContext.Provider
      value={[
        userDetails,
        setUserDetails,
        cartItems,
        setCartItems,
        totalCartItemCost,
        setTotalCartItemCost,
        shippingCost,
        setShippingCost,
        voucherName,
        setVoucherName,
        discount,
        setDiscount,
        discountApplied,
        setDiscountApplied,
        reload,
        setReload,
      ]}
    >
      <div className="App ">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/terms&Conditions"
            element={<PolicyPage></PolicyPage>}
          ></Route>
          <Route
            path="/return_or_refund_policy"
            element={<PolicyPage></PolicyPage>}
          ></Route>
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

          {/* Routes For Customers  */}
          <Route
            path="/item-details/:id"
            element={<ItemDetails></ItemDetails>}
          ></Route>
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
            <Route
              path="addproducts"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route
              path="completed-orders"
              element={<CompletedOrders></CompletedOrders>}
            ></Route>
            <Route
              path="manage-orders"
              element={<ManageOrders></ManageOrders>}
            ></Route>
            <Route
              path="manage-deliveries"
              element={<ManageDeliveries></ManageDeliveries>}
            ></Route>
            <Route
              path="manage-vouchers"
              element={<ManageVouchers></ManageVouchers>}
            ></Route>
            <Route
              path="promotions"
              element={<Promotions></Promotions>}
            ></Route>
            <Route path="policies" element={<Policies></Policies>}></Route>
          </Route>
          {/* Routes For Admin  */}

          <Route path="/edit/:id" element={<AddProduct></AddProduct>}></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CartContext.Provider>
  );
}

export default App;
