/**
 * Created by Damian.Czarnota on 2018-10-16.
 */
import { AUTHENTICATE } from "../constants/action-types.js";

export const authenticate = value => ({
    type:AUTHENTICATE,
    payload:value
});