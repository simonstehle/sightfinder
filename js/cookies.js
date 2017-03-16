/**
 * Created by simon on 22.12.16.
 */

var prefCookieName = "userpreferences";
//The cookie ist always 4 characters long! each char has a value of 0 or 1 what means like or dislike

/**
 *
 * @param prefNum Numer of the selection, it goes from 1 to 4
 * @param prefVal - Value of the cahr, can be either 0 or 1
 */
function setPreference(prefNum, prefVal){

    var tempCookie = getCookie(prefCookieName);
    var newCookie = "0000";

    if (tempCookie.length == 4){
        var front = tempCookie.substr(0,prefNum-1);
        var back = tempCookie.slice(prefNum+1)
        newCookie = front + prefVal + back;
    }
    else {
        var front = newCookie.substr(0,prefNum-1);
        var back = newCookie.slice(prefNum+1)
        newCookie = front + prefVal + back;
    }

    setCookie(prefCookieName, newCookie, 100);

}





/**
 * This function is used to set a cookie inside the local Browser.
 * @param cname - The name of the cookie to be set
 * @param cvalue - The Value the cookie will get
 * @param exdays - Time, until the cookie will expire in DAYS
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}