import React from 'react';

let OrderRow = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.order}</span>
    </div>
  );
}

export default OrderRow;