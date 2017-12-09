import React from 'react';

const OrderRow = (props) => {
  return (
    <div>
      <SpanOrEmpty value={props.name} />
      <SpanOrEmpty value={props.order} />
      <SpanOrEmpty value={props.datePlaced} />
      <SpanOrEmpty value={props.dateResolved} />
    </div>
  );
};

const SpanOrEmpty = (props) =>
  props.value ? (<span>{props.value}</span>) : null;

export default OrderRow;
