# 动图宇宙API

网站 [动图宇宙](https://www.dongtu.com/) 的部分动图 `API` 接口

## 单个关键词搜索动图

`接口描述` : `根据单个关键词搜索动图`

`请求地址` :  `https://www.dongtu.com:9999/search/:q?page=2&size=20`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | Int | 第几页 |  true |
| size   | 20      | Int | 每页返回的数量 |  true |

参数类型 `parmas`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| q   | 哈哈     | String | 查询的关键词 |  true |

示例：
```
https://www.dongtu.com:9999/search/哈哈?page=2&size=20
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

## 多个关键词搜索动图

`接口描述` : `根据多个关键词搜索动图`

`请求地址` :  `https://www.dongtu.com:9999/mutli/search?q=笑尿,哈哈,掉下巴&page=1&size=20`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| page   | 1      | Int | 第几页 |  true |
| size   | 20      | Int | 每页返回的数量 |  true |
| q   | 笑尿,哈哈,掉下巴     | String | 查询的多个关键词,以逗号分隔开 |  true |



示例：
```
https://www.dongtu.com:9999/mutli/search?q=笑尿,哈哈,掉下巴&page=1&size=20
```

`响应数据` : 
```json
{
    "count": 323,
    "gifs": [
        {
            "guid": "29172f07733f11e7bd957cd30abeadec",
            "gif_thumb": "https://static.dongtu.com/netpic/20170728104716VKUXM79ZWRF8E5UI_l_mr2_th5.gif",
            "main": "https://static.dongtu.com/netpic/20170728104716VKUXM79ZWRF8E5UI_l_mr2_mc.gif",
            "width": 225,
            "height": 240,
            "md5": "1e13c5f4575b6adc8947c2106f107e63",
            "hitKeyword": "哈哈",
            "webp": "https://static.dongtu.com/netpic/20170728104716VKUXM79ZWRF8E5UI_l_mr2.webp",
            "webpsize": 826920,
            "webpmd5": "020701a216767eba92cb1f8b0be0077f",
            "classify": 0,
            "fsize": 1082638
        },
        {
            "guid": "97c32903733e11e7bd957cd30abeadec",
            "gif_thumb": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l_mr2_th5.gif",
            "main": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l_mr2_mc.gif",
            "width": 240,
            "height": 160,
            "md5": "465fbaae58c417d90f0f44a6e50074dc",
            "hitKeyword": "哈哈",
            "webp": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l_mr2.webp",
            "webpsize": 40510,
            "webpmd5": "1952e262162fc49d95b23abd1c551ccf",
            "classify": 0,
            "fsize": 72725
        },
        ...
    ],
    "error_code": 0
}
```

## 动图详情

`接口描述` : `动图的详细信息`

`请求地址` :  `https://www.dongtu.com:9999/gif/detail/:guid`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `params`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| guid   | 97c32903733e11e7bd957cd30abeadec      | String | 动图的guid,值为列表上面搜索列表返回的guid字段的值 |  true |


示例：
```
https://www.dongtu.com:9999/gif/detail/97c32903733e11e7bd957cd30abeadec
```

`响应数据` : 
```json
{
    "data": {
        "main": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l.gif",
        "width": 320,
        "height": 213,
        "mp4": "",
        "less1M": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l_mc_1.gif",
        "less2M": "https://static.dongtu.com/netpic/20170728104344W117P7FGT09V046R_l_mc_1.gif",
        "keywords": [
            "笑尿",
            "哈哈",
            "开心",
            "王青"
        ],
        "pv": 5,
        "fsize": 281295,
        "ip_list": []
    },
    "error_code": 0
}
```