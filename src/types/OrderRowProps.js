// @flow
import type { DisplayOrder } from './OrderTypes';

type OrderRowProps = {
  // TODO: Maybe?
  action: () => void,
  actionLabel: ?string,
  displayOrder: DisplayOrder
}

export type { OrderRowProps };
