import type { DeltaSet } from "sketching-delta";

import type { Range } from "../../selection/modules/range";
import type { SELECTION_STATE, SelectionState } from "../../selection/utils/constant";

export type ContentChangeEvent = {
  current: DeltaSet;
  previous: DeltaSet;
  source: string;
  // TODO: Strict Operation
  changes: unknown;
  effect: string[];
};

export type PaintEvent = {
  deltaId: string;
};

export type SelectionChangeEvent = {
  previous: Range | null;
  current: Range | null;
};

type SelectionStateMap = {
  [P in SELECTION_STATE]: { type: P; payload: SelectionState[P] };
};
export type SelectionStateEvent = SelectionStateMap[keyof SelectionStateMap];
