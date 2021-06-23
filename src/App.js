import './App.css';
import { orders } from './Data/Orders';
import OrderList from './Components/OrderList';
import OrderDetails from './Components/OrderDetails';

const checkTotalOrder =()=>{
  let size= orders.length;
  return size;
}



function App(props) {
  // console.log(orders)
  checkTotalOrder()
  return (
    <div className="App">
      <h1>Pizza Orders</h1>
      <div>
        <OrderList sizeofdata={checkTotalOrder()}/>
      </div>
      <div>
      <OrderDetails/>
      </div>

    </div>
  );
}

export default App;
