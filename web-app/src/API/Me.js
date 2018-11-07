/**
 * Created by Damian.Czarnota on 2018-11-07.
 */

import { headers, URL } from './config';

export const get = () =>
    fetch(`${URL}/test/currentuser`,{
        method:'GET',
        headers:headers
    })
        .then(res => res.json());