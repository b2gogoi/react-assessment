import React, { useState } from "react"
import "./OrderDetails.css"
import { orders } from '../Data/Orders';
import OrderList from '../Components/OrderList';
function OrderDetails() {
    const [served, setValue] = useState(0)
    const [tableNumber, setTableNumber] = useState([])

    const checkTotalOrder =()=>{
        let size= orders.length;
        return size;
      }

      const updateArray =(i)=>{
        let number= Array.from(tableNumber)
        if(tableNumber.indexOf(i) === -1){
            number.push(i)
        }
        setTableNumber((number))
      }

    return (
        <div>
            <div>
                <OrderList sizeofdata={checkTotalOrder()} served={served}/>
            </div>
            <div className="test">
            {orders.map((i,j) => <div className="pizzaDetails" key={j}>
            <div className="order_details">
                <div className="allData">
                    <div>Table No</div>
                    <div>Crust</div>
                    <div>Flavor</div>
                    <div>Size</div>
                </div>
                <div className="dataValue">
                    <div>{i.Table_No}</div>
                    <div>{i.Crust}</div>
                    <div>{i.Flavor}</div>
                    <div>{i.Size}
                    </div>

                </div>
            </div>
            <div className="button">
                <button className="readyButton" onClick={() => { setValue((served + 1)); updateArray(j) }} disabled={tableNumber.indexOf(j) !== -1}>
                    <div className="btnContent">{tableNumber.indexOf(j) !== -1 ? 'DONE' : 'READY'}</div></button>
            </div>
            </div>)}
           </div>
            
        </div>

    );
}

export default OrderDetails;