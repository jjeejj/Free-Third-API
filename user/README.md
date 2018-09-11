# 用户模块

## 用户注册

`接口描述` : `用户注册接口,返回用户注册的后的状态`

`请求路径` :  `/api/user/register`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
```

`请求参数` :
```
{
    "username": "",
    "password": "",
    "emai": ""
}
```

`响应数据` : 
```
{
    "code": "",
    "msg": "",
    "data": {

    }
}
```

## 用户登陆

`接口描述` : `用户登陆接口,返回用户的基本信息和登陆后的 token `

`请求路径` :  `/api/user/login`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/json
```

`请求参数` :
```json
{
    "username": "",
    "password": ""
}
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        
    }
}
```

## 用户列表

`接口描述` : `请求用户列表, 用到登陆接口返回的 token 进行认证 `

`请求路径` :  `/api/user/list/:page`

`请求方法` :  `GET`

`请求头`: 
```
Authorization: Bearer  token
```

`请求参数` 
```js
page: 第几页  required
```

`响应数据` : 
```json
{
    "code": "",
    "msg": "",
    "data": {
        
    }
}
```