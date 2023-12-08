import { Action, createReducer, on } from "@ngrx/store";
import { Mode } from "../../../app/interfaces/Mode";

import * as fromApplication from './index';
import { IApplicationState } from "./application.model";

export interface ApplicationState {
  mode: Mode;
}

const initialApplicationState: ApplicationState = {
  mode: Mode.ShowCase,
};

const reducer = createReducer<ApplicationState>(
  initialApplicationState,
  on(fromApplication.setMode, (state, { mode }) => {
    return { ...state, mode };
  }),
  on(fromApplication.getMode, (state) => {
    return { ...state };
  })
)

export function applicationReducer(state = initialApplicationState, actions: Action): IApplicationState {
  return reducer(state, actions);
}