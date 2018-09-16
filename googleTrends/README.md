# Google指数API

该接口是分 **2** 个步骤

## 第一步:根据关键词 获取请求的 widgets

`接口描述` : `根据关键词 获取第二步请求的 widgets request`

`请求地址` :  `https://trends.google.com/trends/api/explore?hl=zh-CN&tz=-480&req={"comparisonItem":[{"keyword":"ETHEREUM","geo":"AL","time":"now 4-H"}],"category":0,"property":"froogle"}`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| hl   | zh-CN     | String | 本地主机的语言   |  true |
| tz   | -480      | Int | 默认值 |  true |
| req   | {}      | Object | 请求的具体参数 |  true |
| comparisonItem   | []      | Array |  |  true |
| keyword   |  ETHEREUM     | String | 查询的关键词 |  true |
| geo   | AL      | Object | 请求查询的国家地区 |  true |
| time   | now 4-H     | String | 请求的时间段 |  true |
| category   | 65     | Int | 请求的行业 |  true |
| property   | froogle     | String | 请求的数据来源 |  true |

`响应数据` : 
```json
{
    "widgets": [
        {
            "request": {
                "time": "2018-09-16T00\\:46\\:39 2018-09-16T04\\:46\\:39",
                "resolution": "MINUTE",
                "locale": "zh-CN",
                "comparisonItem": [
                    {
                        "geo": {},
                        "complexKeywordsRestriction": {
                            "keyword": [
                                {
                                    "type": "BROAD",
                                    "value": "ETHEREUM"
                                }
                            ]
                        }
                    }
                ],
                "requestOptions": {
                    "property": "",
                    "backend": "CM",
                    "category": 0
                }
            },
            "lineAnnotationText": "搜索热度",
            "bullets": [
                {
                    "text": "ETHEREUM"
                }
            ],
            "showLegend": false,
            "showAverages": false,
            "helpDialog": {
                "title": "热度随时间变化的趋势",
                "content": "数字代表相对于图表中指定区域和指定时间内最高点的搜索热度。热度最高的字词得 100 分；热度是前者一半的字词得 50 分；没有足够数据的字词得 0 分。"
            },
            "token": "APP6_UEAAAAAW58xr235PzHWJaKnODsR3---4vBUn1xl",
            "id": "TIMESERIES",
            "type": "fe_line_chart",
            "title": "热度随时间变化的趋势",
            "template": "fe",
            "embedTemplate": "fe_embed",
            "version": "1",
            "isLong": true,
            "isCurated": false
        },
        {
            "request": {
                "geo": {},
                "comparisonItem": [
                    {
                        "time": "2018-09-16T00\\:46\\:39 2018-09-16T04\\:46\\:39",
                        "complexKeywordsRestriction": {
                            "keyword": [
                                {
                                    "type": "BROAD",
                                    "value": "ETHEREUM"
                                }
                            ]
                        }
                    }
                ],
                "resolution": "COUNTRY",
                "locale": "zh-CN",
                "requestOptions": {
                    "property": "",
                    "backend": "CM",
                    "category": 0
                }
            },
            "geo": "world",
            "resolution": "countries",
            "searchInterestLabel": "搜索热度",
            "displayMode": "regions",
            "helpDialog": {
                "title": "按区域显示的搜索热度",
                "content": "查看在指定时间范围内，您的字词在哪个位置的热度最高。得分为 0 - 100 分：在该位置所有搜索中热度最高的字词得 100 分；字词热度是前者一半的位置得 50 分；没有足够字词数据的位置得 0 分。<p><p><b>注意</b>：得分越高表示字词在当地所有查询中占比越高，并不代表绝对查询次数越多。因此，如果一个小国家/地区的“香蕉”查询次数占比是 80%，其得分会比该比例只有 40% 的大国家/地区高出 1 倍。",
                "url": "https://support.google.com/trends/answer/4355212"
            },
            "color": "PALETTE_COLOR_1",
            "index": 0,
            "bullet": "ETHEREUM",
            "token": "APP6_UEAAAAAW58xr7Hf9Kcuvv7H-E6d3l7beRJoTPVe",
            "id": "GEO_MAP",
            "type": "fe_geo_chart_explore",
            "title": "按区域显示的搜索热度",
            "template": "fe",
            "embedTemplate": "fe_embed",
            "version": "1",
            "isLong": true,
            "isCurated": false
        },
        {
            "request": {
                "restriction": {
                    "geo": {},
                    "time": "2018-09-16T00\\:46\\:39 2018-09-16T04\\:46\\:39",
                    "originalTimeRangeForExploreUrl": "now 4-H",
                    "complexKeywordsRestriction": {
                        "keyword": [
                            {
                                "type": "BROAD",
                                "value": "ETHEREUM"
                            }
                        ]
                    }
                },
                "keywordType": "ENTITY",
                "metric": [
                    "TOP",
                    "RISING"
                ],
                "trendinessSettings": {
                    "compareTime": "2018-09-15T20\\:46\\:39 2018-09-16T00\\:46\\:39"
                },
                "requestOptions": {
                    "property": "",
                    "backend": "CM",
                    "category": 0
                },
                "language": "zh"
            },
            "helpDialog": {
                "title": "相关主题",
                "content": "搜索您的字词的用户还搜索了这些主题。您可以按以下指标查看：<p>* <b>热门</b> - 最热门的主题。得分按相对比例计算：最常搜索的主题得 100 分，搜索频率是前者一半的主题得 50 分，以此类推。<p>* <b>搜索量上升</b> - 自上一时间段以来，搜索频率增幅最大的相关主题。标记为“飙升”的主题可能是新主题，之前几乎没有任何搜索次数，因此无法评估其搜索频率的增幅。"
            },
            "color": "PALETTE_COLOR_1",
            "keywordName": "ETHEREUM",
            "token": "APP6_UEAAAAAW58xrwalsf8-CaDP8WYJZMwHN3X5FqWG",
            "id": "RELATED_TOPICS",
            "type": "fe_related_searches",
            "title": "相关主题",
            "template": "fe",
            "embedTemplate": "fe_embed",
            "version": "1",
            "isLong": false,
            "isCurated": false
        },
        {
            "request": {
                "restriction": {
                    "geo": {},
                    "time": "2018-09-16T00\\:46\\:39 2018-09-16T04\\:46\\:39",
                    "originalTimeRangeForExploreUrl": "now 4-H",
                    "complexKeywordsRestriction": {
                        "keyword": [
                            {
                                "type": "BROAD",
                                "value": "ETHEREUM"
                            }
                        ]
                    }
                },
                "keywordType": "QUERY",
                "metric": [
                    "TOP",
                    "RISING"
                ],
                "trendinessSettings": {
                    "compareTime": "2018-09-15T20\\:46\\:39 2018-09-16T00\\:46\\:39"
                },
                "requestOptions": {
                    "property": "",
                    "backend": "CM",
                    "category": 0
                },
                "language": "zh"
            },
            "helpDialog": {
                "title": "相关查询",
                "content": "搜索您的字词的用户还搜索了这些查询。您可以按以下指标排序：<p>* <b>热门</b> - 最热门的搜索查询。得分按相对比例计算：最常搜索的查询得 100 分，搜索频率是前者一半的查询得 50 分，以此类推。<p>* <b>搜索量上升</b> - 自上一时间段以来，搜索频率增幅最大的相关查询。标记为“飙升”的查询可能是新查询，之前几乎没有任何搜索次数，因此无法评估其搜索频率的增幅。",
                "url": "https://support.google.com/trends/answer/4355000"
            },
            "color": "PALETTE_COLOR_1",
            "keywordName": "ETHEREUM",
            "token": "APP6_UEAAAAAW58xr_L1MuiUuIoykaIPkcDPbuA4pX0_",
            "id": "RELATED_QUERIES",
            "type": "fe_related_searches",
            "title": "相关查询",
            "template": "fe",
            "embedTemplate": "fe_embed",
            "version": "1",
            "isLong": false,
            "isCurated": false
        }
    ],
    "keywords": [
        {
            "keyword": "ETHEREUM",
            "name": "ETHEREUM",
            "type": "搜索字词"
        }
    ],
    "timeRanges": [
        "过去4小时"
    ],
    "examples": [],
    "shareText": "在 Google 趋势上按时间、地点和热门程度探索“ETHEREUM”的搜索热度",
    "shouldShowMultiHeatMapMessage": false
}
```

## 第二步: 获取指数 timeline 数据

`接口描述` : `根据第一步请求返回的 widgets rerquest 数据 请求具体的 timeline 数据`

`请求地址` :  ` https://trends.google.com/trends/api/widgetdata/multiline?hl=zh-CN&tz=-480&req={"time":"2018-04-26T21\\:57\\:05 2018-04-27T01\\:57\\:05","resolution":"MINUTE","locale":"zh-CN","comparisonItem":[{"geo":{},"complexKeywordsRestriction":{"keyword":[{"type":"BROAD","value":"ETHEREUM"}]}}],"requestOptions":{"property":"","backend":"CM","category":0}}&token=APP6_UEAAAAAWuPU8aWP5P1iR7V7U14w0z7FpbLrCp3D`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| hl   | zh-CN     | String | 本地主机的语言   |  true |
| tz   | -480      | Int | 默认值 |  true |
| req   | {}      | Object | **就是第一步返回的 widgets 对应某一个元素的 request 对象** |  true |
| token   | APP6_UEAAAAAWuPU8a...     | String | **就是第一步返回的 widgets 对应某一个元素的 token 的值** |  true |

`响应数据` : 
```json
{
    "default": {
        "timelineData": [
            {
                "time": "1537070220",
                "formattedTime": "2018年9月16日 上午11:57",
                "formattedAxisTime": "上午11:57",
                "value": [
                    36
                ],
                "hasData": [
                    true
                ],
                "formattedValue": [
                    "36"
                ]
            },
            {
                "time": "1537070280",
                "formattedTime": "2018年9月16日 上午11:58",
                "formattedAxisTime": "上午11:58",
                "value": [
                    40
                ],
                "hasData": [
                    true
                ],
                "formattedValue": [
                    "40"
                ]
            },
            ....
            {
                "time": "1537084500",
                "formattedTime": "2018年9月16日 下午3:55",
                "formattedAxisTime": "下午3:55",
                "value": [
                    39
                ],
                "hasData": [
                    true
                ],
                "formattedValue": [
                    "39"
                ]
            }
        ],
        "averages": []
    }
}
```

>第一步返回的的 `widgets` 数组中有 4个对象,分别对应页面中的 **热度随时间变化的趋势** | **搜索热度（按子区域** | **相关主题** | **相关查询** 。 提取对应的某一 `widgets` 中的对象数据,查询对应的详细数据 

## 获取 geo 列表

`接口描述` : `获取第一步请求参数中的 geo 数值列表`

`请求地址` :  `https://trends.google.com/trends/api/explore/pickers/geo?hl=zh-CN&tz=-480`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| hl   | zh-CN     | String | 本地主机的语言   |  true |
| tz   | -480      | Int | 默认值 |  true |

>参数要和第一步的值一致

`响应数据` : 
```json
{
    "children": [
        ...
        {
            "children": [
                ...
                {
                    "name": "中央区",
                    "id": "M"
                }
            ],
            "name": "以色列",
            "id": "IL"
        },
        {
            "name": "英属印度洋领地",
            "id": "IO"
        },
        ...
        {
            "children": [
                {
                    "name": "安徽省",
                    "id": "34"
                },
                ...
                {
                    "name": "浙江省",
                    "id": "33"
                }
            ],
            "name": "中国",
            "id": "CN"
        }
    ],
    "name": "全球",
    "id": ""
}
```

## 获取 category 列表

`接口描述` : `获取第一步请求参数中的 category 数值列表`

`请求地址` :  `https://trends.google.com/trends/api/explore/pickers/category?hl=zh-CN&tz=-480`

`请求方法` :  `GET`

`请求头`: 
```
无
```

`请求参数` :

参数类型 `query`
| key        | value           | type  | desc |  required|
|:----------:|:---------:|:-----:|  :---------:|:----: |
| hl   | zh-CN     | String | 本地主机的语言   |  true |
| tz   | -480      | Int | 默认值 |  true |

>参数要和第一步的值一致

`响应数据` : 
```json
{
    "children": [
        {
                {
                    "name": "古董与收藏",
                    "id": 64
                },
                {
                    "children": [
                        {
                            "name": "打猎与射击",
                            "id": 461
                        },
                        ...
                    ],
                    "name": "户外活动",
                    "id": 688
                },
                {
                    "children": [
                        {
                            "name": "彩票与抽奖",
                            "id": 364
                        },
                        {
                            "name": "电影与电视奖项",
                            "id": 1108
                        }
                    ],
                    "name": "竞赛、奖项与奖品",
                    "id": 1276
                },
                {
                    "name": "俱乐部与组织",
                    "id": 189
                },
                ...
            ],
            "name": "在线社区",
            "id": 299
        }
    ],
    "name": "所有类别",
    "id": 0
}
```

## 获取 time 列表

`接口描述` : `获取第一步请求参数中的 time 数值列表`

没有找到接口,直接写出来

| name        | value    | 
|:----------:|:---------:|
| 过去1小时   | now 1-H    |
| 过去4小时   | now 4-H    | 
| 过去1天   | now 1-d    | 
| 过去7天   | now 7-d    | 
| 过去30天   | today 1-m    | 
| 过去90天   | today 3-m  | 
| 过去1年   | today 12-m    | 

>其他的时间间隔,可以根据上面的规律去尝试

## 获取 property 列表

`接口描述` : `获取第一步请求参数中的 property 数值列表`

没有找到接口,直接写出来

| name        | value    | 
|:----------:|:---------:|
| Google 图片搜索   | images    |
| Google 网页搜索   | "" (默认值)    |
| Google 新闻搜索   | news    |
| Google 购物   | froogle    |
| Youtube 搜索  | youtube    |