// @flow
import type { OrderRowProps } from '../../Types/OrderRowProps';
import React from 'react';

const OrderRow = (props: OrderRowProps) => {
  return (
    <div className='order-row'>
      {props.actionLabel && <button onClick={props.action}>{props.actionLabel}</button> }
      <SpanOrEmpty value={props.displayOrder.name} />
      <SpanOrEmpty value={props.displayOrder.order} />
      <SpanOrEmpty value={props.displayOrder.datePlaced} />
      <SpanOrEmpty value={props.displayOrder.dateResolved} />
    </div>
  );
};

type SpanOrEmptyProps = {
  value: ?string
}

const SpanOrEmpty = (props: SpanOrEmptyProps) =>
  props.value ? (<span>{props.value}</span>) : null;

export default OrderRow;
