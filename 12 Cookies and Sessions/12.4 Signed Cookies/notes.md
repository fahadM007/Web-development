# Signed Cookies

By default, as we've seen, the cookies are sent as text. This means that we, as the user, can adjust the cookies in any way we want. This is not a problem if the cookie is used to store information about the user's preferences, but it is a problem if the cookie is used to store information about the user's identity. If the cookie is used to store information about the user's identity, then the user can impersonate another user by changing the cookie value.

One to the problem of the user changing the cookie content is to create an encrypted signature of the cookie data, and passing that along with the cookie. When the user responds with the cookie (and the encrypted signature), the server can check whether the signature is valid. If the signature is valid, then the server can trust the cookie data. If the signature is not valid, then the server can discard the cookie data.

`getSignedCookie` and `setSignedCookie` functions 

the `getSignedCookie` function takes a `Context` object , `secret` and `cookie name` as arguments.

```js
getSignedCookie(c,secret,name)

```

`setSignedCookie` function takes a `Context object` `cookie name ` a cookie value and a secret as argument this signe the cookie and sets the signed cookie in the context object both functions are asynchronous 

```js
import { Context } from "hono";
import { setSignedCookie } from "hono/cookie";

async function setSignedCookieValue(c: Context, cookieName: string, cookieValue: string, secret: string) {
  await setSignedCookie(c, cookieName, cookieValue, secret, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
}

```

The seceret should be a long random string 

# Path and setSignedCookie

The reason for adding the path option becouse the default path for cookies is the path of the request 
his means that if we would not have added the path: '/' option, the cookie would only be sent to the server if the request path would be /.
f the request path would be /foo, then the cookie would not be sent to the server.