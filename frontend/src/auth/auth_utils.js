import Cookies from 'js-cookie';


export function setJWT(token) {
    Cookies.set("token",token);

}

export function getToken() {
    return Cookies.get('token');
    // console.log(document.cookie);
}
export function setUser(user) {
    Cookies.set("user",user);
}

export function getUser() {
    return Cookies.get('user');;
}