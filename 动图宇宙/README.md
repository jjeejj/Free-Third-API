# 动图宇宙API

网站 [动图宇宙](https://www.dongtu.com/) 的部分动图 `API` 接口

## 根据关键词搜索动图

`接口描述` : `根据公众号文章的链接,提取文章中的视频链接`

`请求地址` :  `https://www.dongtu.com:9999/search/:keyword?page=2&size=20`

`请求方法` :  `GET`

`请求头`: 
```
无
```

``
`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | Int | 第几页 |  true |
| size   | 20      | Int | 每页返回的数量 |  true |

参数类型 `parmas`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| keyword   | 哈哈     | String | 查询的关键词 |  true |

示例：
```
`https://www.dongtu.com:9999/search/:keyword?page=2&size=20
```


`响应数据` : 
```json
{
    "count": 1275,
    "gifs": [
        {
            "guid": "1180cf5642f111e899326c92bf61e2d8",
            "gif_thumb": "https://static.dongtu.com/netpic/20180418181257IA7I2WVUJJRNSWX2_m_th5.gif",
            "main": "https://static.dongtu.com/netpic/20180418181257IA7I2WVUJJRNSWX2_m_mc.gif",
            "width": 240,
            "height": 240,
            "md5": "adf72808cd5883e690f23205d46ac953",
            "hitKeyword": "哈哈",
            "webp": "https://static.dongtu.com/netpic/20180418181257IA7I2WVUJJRNSWX2_m.webp",
            "webpsize": 556390,
            "webpmd5": "61bac5043173b704633f0b45cb8536d6",
            "classify": 0,
            "fsize": 299765
        },
        {
            "guid": "68dee7f642b011e899326c92bf61e2d8",
            "gif_thumb": "https://static.dongtu.com/netpic/20180418103006WOWAE2ZR4FVV3CVT_m_th5.gif",
            "main": "https://static.dongtu.com/netpic/20180418103006WOWAE2ZR4FVV3CVT_m_mc.gif",
            "width": 240,
            "height": 240,
            "md5": "76b6f9f17e4622ed21fab2e28abe3aad",
            "hitKeyword": "哈哈",
            "webp": "https://static.dongtu.com/netpic/20180418103006WOWAE2ZR4FVV3CVT_m.webp",
            "webpsize": 431870,
            "webpmd5": "da363cb6da43cf13b0719821209f5dcb",
            "classify": 0,
            "fsize": 252415
        },
        ...
    ],
    "error_code": 0
}
```