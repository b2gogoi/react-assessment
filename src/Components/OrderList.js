import React from "react"
import "./OrderList.css"


function OrderList(props) {

    return (
        <div className="totalOrder">
            <div className="totalNum"><div>Total order&nbsp;:&nbsp;</div>
                <div>{props.sizeofdata}</div>
            </div>
            <div className="servedNum">
                <div>Served&nbsp;:&nbsp;</div>
                <div>{props.served}</div>
            </div>
        </div>
    )
}

export default OrderList;