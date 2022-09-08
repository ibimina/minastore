import React from 'react'
import { useCart } from '../hooks/useCart';

export default function ShipRadioBtn({value,shiptype,days,amount}) {
 const {dispatch}=useCart()
 
    return (
    <label className="ship gap">
      <div className="ship ra">
        <input
          type="radio"
          name="shipping"
          value={value}
          onClick={(e) =>
            dispatch({ type: "ADD_SHIPP", payload: e.target.value })
          }
          className="radio"
          required
        />
        <span>{shiptype}</span>
      </div>
      <span>{days}</span> <span>{amount}</span>
    </label>
  );
}
