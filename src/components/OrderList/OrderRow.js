import React from 'react';

const OrderRow = (props) => {
  return (
    <div className='order-row'>
      {props.actionLabel && <button onClick={props.action}>{props.actionLabel}</button> }
      {props.columnNames.map((colname, index) => <SpanOrEmpty key={index} value={props.order[colname]} />)}
    </div>
  );
};

const SpanOrEmpty = (props) =>
  props.value ? (<span>{props.value}</span>) : null;

export default OrderRow;
