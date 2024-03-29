const CONF = {

  //本开发环境搭建-----------------------------------------------------------------
  // // 其他配置 ...
  // serverHost: 'localhost',
  // tunnelServerUrl: '',
  // tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
  // qcloudAppId: '1257197283',
  // qcloudSecretId: 'AKIDJXggU7vpupY5RetcKrCLI3czAA1g7QYU',
  // qcloudSecretKey: 'ta7av65sTt7TjnfOvGPPFtKI9pKdlgml',
  // wxMessageToken: 'weixinmsgtoken',
  // networkTimeout: 30000,

  //本开发环境搭建-----------------------------------------------------------------------
  port: '3306',
  rootPathname: '',
  // 微信小程序 App ID
  appId: 'wxbfd16e828eb183f4',
  // 微信小程序 App Secret
  appSecret: '639477db44a8af2f03362c1848c3ddba',
  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: false,
  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'nodemysql',
    pass: 'root',
    char: 'utf8mb4'
  },

  cos: {
    /**
     * 地区简称
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    region: 'ap-guangzhou',
    // Bucket 名称
    fileBucket: 'qcloudtest',
    // 文件夹
    uploadFolder: ''
  },

  // 微信登录态有效期
  wxLoginExpires: 7200,

  //线上配置----------------------------
  // 其他配置 ...
  serverHost: 'www.heyuhsuo.xyz',
  tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // 腾讯云相关配置可以查看云 API 密钥控制台：https://console.cloud.tencent.com/capi
  qcloudAppId: '1257197283',
  qcloudSecretId: 'AKIDJXggU7vpupY5RetcKrCLI3czAA1g7QYU',
  qcloudSecretKey: 'ta7av65sTt7TjnfOvGPPFtKI9pKdlgml',
  wxMessageToken: 'weixinmsgtoken',
  networkTimeout: 30000
  //线上配置----------------------------
}

module.exports = CONF