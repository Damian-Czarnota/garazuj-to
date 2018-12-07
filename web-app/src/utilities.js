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

export const showError = (label,text) =>{
    let el = document.querySelector(`input[name="${label}"]`);
    el.classList.add("input-error");
    if(text)
        el.insertAdjacentHTML('afterend',`<p class="error-text">${text}</p>`);
};

export const clearErrors = () =>{
    let inputArr = document.querySelectorAll('.input-error');
    inputArr.forEach(el =>{
        el.classList.remove('input-error');
    });
    let textArr = document.querySelectorAll('.error-text');
    textArr.forEach(el =>{
        el.remove();
    })
};

export const dataFromTimestampToString = (data) => {
        let index = data.indexOf('T');
        return `${data.slice(index+1,index+9)} ${data.slice(0,index)}`;
};