import React from 'react'
import { useCart } from '../hooks/useCart';

export default function Label({label,name,type,actype}) {
    const {dispatch}=useCart()

  return (
    <label className="ship-flex nm-in">
      <span className="label">{label}</span>
      <input
        type={type}
        name={name}
        onChange={
            (e) =>
          dispatch({
            type: actype,
            payload: e.target.value})
      
        }
        required
      />
    </label>
  );
}
