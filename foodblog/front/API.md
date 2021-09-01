# REST API
HTTP 요청 리스트(ajax)


### GET /users
- Get my loging info, if not logged in, false.
- return: IUser | false

### POST /users
- Signup
- body: { email: string(EMAIL), nickname: string(NICKNAME) password: string(PASSWORD) }
- return: 'ok'

### POST /users/login
- Login
- body: { email: string(EMAIL), password: string(PASSWORD) }
- return: IUser

### Logout /users/logout
- Logout
- return 'ok'