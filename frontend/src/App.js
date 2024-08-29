import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './component/layout/Header';
import { useEffect,useState } from "react";
import WebFont from "webfontloader";
import React from "react";
import Footer from './component/layout/Footer';
import Home from './component/Home/Home';
import ProductDetail from './component/Product/ProductDetail';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from "./actions/userAction";
import Useropt from './component/layout/Useropt';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/ProtectedROute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/admin/Dashboard';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrderList from './component/admin/OrderList';
import ProcessOrder from './component/admin/ProcessOrder';
import UsersList from './component/admin/UsersList';
import UpdateUser from './component/admin/UpdateUser';
import ProductReviews from './component/admin/ProductReviews';
import About from './component/layout/About/About';
import Contact from './component/layout/Contact/Contact';
import NotFound from './component/layout/Not Found/NotFound';


function App() {

  const {isAuthenticated,user} = useSelector((state)=>state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "Poppins"],
      },
    });

    store.dispatch(loadUser());
      getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      <Header />
      {isAuthenticated && <Useropt user={user} />}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:keyword' element={<Products />} />
      <Route path='/search' element={<Search/>} />
      <Route path='/login' element={<LoginSignUp/>} />
      <Route path='/account'element={<ProtectedRoute element={Profile} />}/>
      <Route path='/me/update'element={<ProtectedRoute element={UpdateProfile} />}/>
      <Route path='/password/update'element={<ProtectedRoute element={UpdatePassword} />}/>
      <Route path='/password/forgot'element={<ForgotPassword/>} />
      <Route path='/cart'element={<Cart/>} />
      <Route path='/shipping'element={<ProtectedRoute element={Shipping} />}/>
      <Route path='/order/confirm'element={<ProtectedRoute element={ConfirmOrder} />}/>
      <Route path='/success'element={<ProtectedRoute element={OrderSuccess} />}/>
      <Route path='/orders'element={<ProtectedRoute element={MyOrders} />}/>
      <Route path='/order/:id'element={<ProtectedRoute element={OrderDetails} />}/>
      <Route path='/admin/dashboard'element={<ProtectedRoute isAdmin={true} element={Dashboard} />}/>
      <Route path='/admin/products'element={<ProtectedRoute isAdmin={true} element={ProductList} />}/>
      <Route path='/admin/product'element={<ProtectedRoute isAdmin={true} element={NewProduct} />}/>
      <Route path='/admin/product/:id'element={<ProtectedRoute isAdmin={true} element={UpdateProduct} />}/>
      <Route path='/admin/orders'element={<ProtectedRoute isAdmin={true} element={OrderList} />}/>
      <Route path='/admin/order/:id'element={<ProtectedRoute isAdmin={true} element={ProcessOrder} />}/>
      <Route path='/admin/users'element={<ProtectedRoute isAdmin={true} element={UsersList} />}/>
      <Route path='/admin/user/:id'element={<ProtectedRoute isAdmin={true} element={UpdateUser} />}/>
      <Route path='/admin/reviews'element={<ProtectedRoute isAdmin={true} element={ProductReviews} />}/>
      {stripeApiKey && (
        <Route 
        path='/process/payment' 
        element={
          <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute element={Payment} />
              </Elements>
            } 
            />
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
