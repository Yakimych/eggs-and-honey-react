// @flow
import type { Order, ResolvedOrder, ApiOrder, ApiResolvedOrder, OrderType } from '../types/OrderTypes';

const orderTypeFromString = (orderTypeString: string): OrderType => {
  switch (orderTypeString) {
    case 'Eggs':
      return 'Eggs';
    case 'Honey':
      return 'Honey';
    default:
      throw new Error(`Error parsing OrderType: ${orderTypeString}`);
  }
};

export const toOrder = (apiOrder: ApiOrder): Order =>
  ({
    id: apiOrder.id,
    name: apiOrder.name,
    order: orderTypeFromString(apiOrder.order),
    datePlaced: new Date(apiOrder.datePlaced)
  });

export const toResolvedOrder = (apiResolvedOrder: ApiResolvedOrder): ResolvedOrder =>
  ({
    id: apiResolvedOrder.id,
    name: apiResolvedOrder.name,
    order: orderTypeFromString(apiResolvedOrder.order),
    datePlaced: new Date(apiResolvedOrder.datePlaced),
    dateResolved: new Date(apiResolvedOrder.dateResolved)
  });
