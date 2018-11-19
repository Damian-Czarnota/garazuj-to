/**
 * Created by Damian.Czarnota on 2018-11-19.
 */

import { headers, URL } from './config';

export const get = (hash) =>
    fetch(`${URL}/articles/${hash}`,{
        method:'GET',
        headers:headers
    })
        .then(res => res.json());