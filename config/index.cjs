/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx441adaa274ff01a0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b1aae663a3b5d0c30c2b3e1234916519',

  PROVINCE: '贵州',
  CITY: '贵阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '张怡静',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUVbQ6rbh5M6y9dygj3dp_T6XbMs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	-TPH2zkqu4VxI5A86ASSmdskJwy_WfMSpW7QsrvN5uM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张怡静', year: '2004', date: '09-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张怡静', year: '2004', date: '07-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-03',
        },
      ],
      // 我们认识已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'love_day', date: '2022-09-03' },
        // 遇见纪念日
        { keyword: 'marry_day', date: '2023-07-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	-TPH2zkqu4VxI5A86ASSmdskJwy_WfMSpW7QsrvN5uM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUVbQ6rbh5M6y9dygj3dp_T6XbMs',
    }
  ],

}

module.exports = USER_CONFIG
