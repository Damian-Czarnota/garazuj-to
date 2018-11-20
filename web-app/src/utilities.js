/**
 * Created by Damian.Czarnota on 2018-11-20.
 */

export const checkIfAdmin = (object) =>{
    let result;
    if(object.hasOwnProperty('authorities'))
        return (JSON.stringify(object.authorities)).includes('[{"authority":"ROLE_ADMIN"}]')?result=true:result=false;
    else if(object.hasOwnProperty('roles')){
        object.roles.forEach(role =>{
            if(role.name==="ROLE_ADMIN"){
                result = true;
                return;
            }
        })
    }
    return result;
};