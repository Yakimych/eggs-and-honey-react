import React from 'react';

const OrderRow = (props) => {
  return (
    <div className='order-row'>
      {props.columnNames.map((colname, index) => <SpanOrEmpty key={index} value={props[colname]} />)}
    </div>
  );
};

const SpanOrEmpty = (props) =>
  props.value ? (<span>{props.value}</span>) : null;

export default OrderRow;
