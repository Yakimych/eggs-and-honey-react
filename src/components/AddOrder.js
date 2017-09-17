import React from 'react';

let AddOrder = (props) => {
  let name = "";
  let nameChanged = (event) => {
    name = event.target.value;
  };
 
  let addOrder = function() {
    props.onAddOrder(name, "Eggs");
  };
 
  return (
    <div>
      <input type="text" onChange={nameChanged} />
      <button onClick={addOrder}>Add</button>
    </div>
  );
};

export default AddOrder;