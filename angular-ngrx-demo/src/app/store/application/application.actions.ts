import { createAction, props } from "@ngrx/store";
import { Mode } from "../../../app/interfaces/Mode";

export const setMode = createAction(
    `[Mode] Set Mode`,
    props<{
        mode: Mode;
    }>()
);

export const getMode = createAction(
    `[Mode] Get Mode`
);