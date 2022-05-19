//get session cookie (source: stackoverflow)
function getCookie() {
    let end;
    let documentCookie = document.cookie;
    let prefix = "session=";
    let begin = documentCookie.indexOf("; " + prefix);
    if (begin === -1) {
        begin = documentCookie.indexOf(prefix);
        if (begin !== 0) return null;
    }
    else
    {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = documentCookie.length;
        }
    }
    //returns cookie value
    return decodeURI(documentCookie.substring(begin + prefix.length, end));
}

//check if cookie exists
function checkCookie() {
    const sessionCookie = getCookie();

    //return false if it does not exist
    if (sessionCookie == null) {
        return false;
    }
    else { //return true if cookie exists
        //console.log(getCookie());
        //console.log(readSessionCookie().role);
        return true;
    }
}

//read cookie
function readSessionCookie() {
    //read and disassemble cookie
    return JSON.parse(getCookie());
}

//delete cookie in database (returns true or false)
function deleteSessionCookieDB() {
    let token = readSessionCookie().token
    let success;
    $.ajax({
        type: "GET",
        url: "../config/logoutHandler.php",
        cache: false,
        data: {method: "logout", token: token},
        dataType: "json",
        success: function (response) {
            //no action
            console.log(response);
            success = true;
        },
        error: function () {
            //show error message if no response (no successful logout)
            success = false;
        }
    });
    return success;
}
//delete cookie in frontend
function deleteCookie(){
    //set a past expire date
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}