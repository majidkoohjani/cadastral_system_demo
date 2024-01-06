export default class CookieManager
{
    static setCookie(name = "", value = "", path = "/") {
        document.cookie = `${name}=${value}; path=${path}; domain=.metacadastralsystem.com;SameSite=None; Secure=True`;
    }

    static getCookie = (name = "") => {
        let cookies = document.cookie.split(";");

        let targetCookie = cookies.find(cookie => cookie.includes(name));

        if (targetCookie) {
            targetCookie = targetCookie.trim();
            let equalSign = targetCookie.indexOf("=");

            return targetCookie.substring(equalSign + 1).trim();
        }

        return null;
    }

    static deleteCookies = (cookiesName = []) => {
        cookiesName.forEach(cookie => {
            document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    }
}
