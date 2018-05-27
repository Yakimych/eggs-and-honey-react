// @flow
import type { Order, ResolvedOrder, ApiOrder, ApiResolvedOrder } from '../types/OrderTypes';

export const toOrder = (apiOrder: ApiOrder): Order =>
  ({
    id: apiOrder.id,
    name: apiOrder.name,
    order: apiOrder.order,
    datePlaced: new Date(apiOrder.datePlaced)
  });

export const toResolvedOrder = (apiResolvedOrder: ApiResolvedOrder): ResolvedOrder =>
  ({
    id: apiResolvedOrder.id,
    name: apiResolvedOrder.name,
    order: apiResolvedOrder.order,
    datePlaced: new Date(apiResolvedOrder.datePlaced),
    dateResolved: new Date(apiResolvedOrder.dateResolved)
  });
