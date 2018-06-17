// @flow
import type { OrderRowProps } from '../../Types/OrderRowProps';
import React from 'react';

const OrderRow = (props: OrderRowProps) => {
  return (
    <div className="row">
      {props.actionLabel &&
        <span className="col">
          <button
            className="btn btn-primary btn-sm mb-1"
            onClick={props.action}>
            {props.actionLabel}
          </button>
        </span>}
      <SpanOrEmpty value={props.displayOrder.name} />
      <SpanOrEmpty value={props.displayOrder.productType} />
      <SpanOrEmpty value={props.displayOrder.datePlaced} />
      <SpanOrEmpty value={props.displayOrder.dateResolved} />
    </div>
  );
};

type SpanOrEmptyProps = {
  value: ?string
}

const SpanOrEmpty = (props: SpanOrEmptyProps) =>
  props.value ? (<span className="col">{props.value}</span>) : null;

export default OrderRow;
