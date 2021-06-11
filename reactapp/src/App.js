import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetAllCustomers from './components/GetAllCustomers';
import GetCustomerById from './components/GetCustomerById';
import UpdateCustomer from './components/UpdateCustomer';
import RegisterCustomer from './components/RegisterCustomer';
import Login from './components/login/login';
import AdminHome from './components/admin-home/homePageAdmin';
import AddOrders2 from './components/AddOrders2';
import AddBooking from './components/AddBooking';
import Home from './components/home/Home'
import CustomerHome from './components/customer-home/homeCustomer';
import AddItems from './components/AddItems';
import GetAllBookings from './components/booking/GetAllBookings';
import GetBookingByCustomer from './components/booking/GetBookingByCustomer';
import GetBookingById from './components/booking/GetBookingById';
import GetBookingsByDate from './components/booking/GetBookingsByDate';
import UpdateBooking from './components/booking/UpdateBooking';
import DeleteItems from './components/items/DeleteItems';
import GetItemById from './components/items/GetItemById';
import UpdateItem from './components/items/UpdateItem';
import GetAllOrders from './components/order/GetAllOrders';
import GetOrderById from './components/order/GetOrderById';
import UpdateOrder from './components/order/UpdateOrder';
import GetAllPayments from './components/payment/GetAllPayments';
import GetPaymentById from './components/payment/GetPaymentById';
import ThankuPage from './components/ThankuPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>

          <Route path="/login" exact component={Login}></Route>
          <Route path="/home-admin" exact component={AdminHome}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home-customer" exact component={CustomerHome}></Route>

          <Route path="/viewCustomers" exact component={GetAllCustomers}></Route>
          <Route path="/viewCustomersById" exact component={GetCustomerById}></Route>
          <Route path="/updateCustomer" exact component={UpdateCustomer}></Route>
          <Route path="/registerCustomer" exact component={RegisterCustomer}></Route>

          <Route path="/placeOrder" exact component={AddOrders2}></Route>
          <Route path="/viewOrder" exact component={GetAllOrders}></Route>
          <Route path="/viewOrder-id" exact component={GetOrderById}></Route>
          <Route path="/updateOrder" exact component={UpdateOrder}></Route>
          
          <Route path="/addBooking" exact component={AddBooking}></Route>
          <Route path="/viewBookings" exact component={GetAllBookings}></Route>
          <Route path="/viewBooking-customer" exact component={GetBookingByCustomer}></Route>
          <Route path="/viewBooking-id" exact component={GetBookingById}></Route>
          <Route path="/viewBooking-date" exact component={GetBookingsByDate}></Route>
          <Route path="/updateBooking" exact component={UpdateBooking}></Route>

          <Route path="/addItems" exact component={AddItems}></Route>
          <Route path="/viewItems" exact component={DeleteItems}></Route>
          <Route path="/updateItems" exact component={UpdateItem}></Route>
          <Route path="/viewItems-id" exact component={GetItemById}></Route>

          <Route path="/viewPayments" exact component={GetAllPayments}></Route>
          <Route path="/viewPayment-id" exact component={GetPaymentById}></Route>

          <Route path="/thankyou" exact component={ThankuPage}></Route>
          {/* <Route path="/" exact component={}></Route> */}


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
