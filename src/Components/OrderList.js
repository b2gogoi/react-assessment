import react from "react"
import "./OrderList.css"


function OrderList(props) {

    return(
        <div className="totalOrder">
            <div>Total order:</div>
            <div>{props.sizeofdata}</div>
            
        </div>
    )
}

export default OrderList;