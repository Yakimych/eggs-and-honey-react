// @flow
type OrderRowProps = {
  action: () => void,
  actionLabel: ?string,
  columnNames: Array<string>,
  // TODO: This is actually rather silly, since we're "indexing" it in OrderRow
  order: Object
}

export type { OrderRowProps };
