export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxe6ce8d3bec1baa53",
    // 公众号appSecret
    appSecret: "052f8e3c1d63fdfcf5a38542a0b2efc6",
    // 模板消息id
    templateId: "cAp6Ir10HfKovUqTJKMKvCVyPJqYUERZiEufVQdDCXI	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["olzNF6NmYGBnJqyihSmsKbFFrGKg"],
     
    // 信息配置
    // 所在省份
    province: "江苏",
    // 所在城市
    city: "南京",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "某某某", "year": "1993", "date": "12-27", "type": 'new'},
      {"name": "家公", "year": "1993", "date": "08-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
