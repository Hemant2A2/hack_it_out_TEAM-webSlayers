import React, { useState } from 'react';

const SearchCity = () => {
  const [from, setFrom] = useState("Patna");
  const [to, setTo] = useState("Kashmir");
  const changeTo = (event) => {
    setTo(event.target.value);
  };
  const changeFrom = (event) => {
    setFrom(event.target.value);
  };
  const write = () => {
    window.location.href = `/map/${from}/${to}`;
  }
  return (
    <div>
      <input type="text" name="from" id="from" value={from} onChange={changeFrom}/>
      <input type="text" name="to" id="to" value={to} onChange={changeTo}/>
      <button onClick={write}>Select</button>
    </div>
  )
}

export default SearchCity;  
