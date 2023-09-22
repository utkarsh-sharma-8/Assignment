import { CHANGE_STATUS, NAME, SAVE_PURPOSE } from "./ActionTypes";

export const saveStatus=(data)=>({
    type:CHANGE_STATUS,
    payload:data,
});
export const changePurpose=(data)=>({
    type:SAVE_PURPOSE,
    payload:data,
});
export const name=(data)=>({
    type:NAME,
    payload:data,
});