# 工具方法

## 提取微信公众号文章的视频连接

`接口描述` : `根据公众号文章的链接,提取文章中的视频链接`

`请求地址` :  `http://www.15um.com/tools/weixin_v.php`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/x-www-form-urlencoded
```

`请求参数` :
```
url=公众号文章地址
```

`响应数据` : 
```json
{
    "code": 1,
    "msg": "",
    "data": [
        {
            "title": "手把手教你用Python撒情人节狗粮的正确姿势",
            "url": "http://vhotakamai.video.gtimg.com/flv/192/138/i0374lu4fuc.mp4?vkey=873621E1E64FBAB469FEB3FD0EC8D8C6186993810EF71A94BA716E7A26764207C873F32669637695848001AFDEE4215B097A73EC04F4783C62FE11EB7363DA77FBB9B70CD16488CA65042F4FBA6DD62B591A90D239A753DE99CA771138BC714FD48FE2138F810765"
        }
    ]
}
```

## 获取本机的 IP 地址

`接口描述` : `获取本机的 IP 地址`

`请求地址` :  `http://ip.taobao.com/service/getIpInfo.php?ip=myip`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :
```
ip=myip
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "ip": "119.123.67.95",
        "country": "中国",
        "area": "",
        "region": "广东",
        "city": "深圳",
        "county": "XX",
        "isp": "电信",
        "country_id": "CN",
        "area_id": "",
        "region_id": "440000",
        "city_id": "440300",
        "county_id": "xx",
        "isp_id": "100017"
    }
}
```

## 获取本机的 IP 地址

`接口描述` : `获取本机的 IP 地址`

`请求地址` :  `http://ip.taobao.com/service/getIpInfo2.php`

`请求方法` :  `POST`

`请求头`: 
```
Content-Type: application/x-www-form-urlencoded
```

`请求参数` :
```
ip=myip
```

`响应数据` : 
```json
{
    "code": 0,
    "data": {
        "ip": "119.123.67.95",
        "country": "中国",
        "area": "",
        "region": "广东",
        "city": "深圳",
        "county": "XX",
        "isp": "电信",
        "country_id": "CN",
        "area_id": "",
        "region_id": "440000",
        "city_id": "440300",
        "county_id": "xx",
        "isp_id": "100017"
    }
}
```