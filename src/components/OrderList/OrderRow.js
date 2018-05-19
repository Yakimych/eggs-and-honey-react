// @flow
import type { OrderRowProps } from '../../Types/OrderRowProps';
import React from 'react';

const OrderRow = (props: OrderRowProps) => {
  return (
    <div className='order-row'>
      {props.actionLabel && <button onClick={props.action}>{props.actionLabel}</button> }
      {props.columnNames.map((colname: string, index: number) => <SpanOrEmpty key={index} value={props.order[colname]} />)}
    </div>
  );
};

type SpanOrEmptyProps = {
  value: string
}
const SpanOrEmpty = (props: SpanOrEmptyProps) =>
  props.value ? (<span>{props.value}</span>) : null;

export default OrderRow;
