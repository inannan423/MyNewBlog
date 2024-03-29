import { Friends } from './friend'
export interface Website {
  name: string
  logo: string
  desc?: string
  href: string
  tags?: string[]
}

export interface WebsiteCategory {
  name: string
  websites: Website[]
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链',
    websites: friends,
  },
  // {
  //   name: '站点',
  //   websites: [
  //     {
  //       name: '程序员盒子',
  //       desc: '程序员一站式编程导航，专注于程序员学习编程提效，官网',
  //       logo: 'https://www.coderutil.com/favicon.ico',
  //       href: 'https://www.coderutil.com/',
  //       tags: [''],
  //     },
  //     {
  //       name: 'Road To Coding',
  //       desc: 'Road To Coding，意为「编程自学之路」，是自学编程以来所用资源和分享内容的大聚合',
  //       logo: 'https://r2coding.com/favicon.ico',
  //       href: 'https://r2coding.com/',
  //       tags: [''],
  //     },
  //     {
  //       name: '印记中文',
  //       desc: '深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档！',
  //       logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/al1nd-ai8jt.png',
  //       href: 'https://docschina.org/',
  //       tags: ['前端', '文档'],
  //     },
  //     {
  //       name: 'ES6 入门教程',
  //       desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
  //       logo: '/img/website/es6.png',
  //       href: 'https://es6.ruanyifeng.com/',
  //       tags: ['前端', '文档'],
  //     },
  //     {
  //       name: '深入理解 TypeScript',
  //       desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你。',
  //       logo: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
  //       href: 'https://jkchao.github.io/typescript-book-chinese/',
  //       tags: ['前端', '文档'],
  //     },
  //     {
  //       name: 'NGINX 配置',
  //       desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法。',
  //       logo: '/img/website/digitalocean.png',
  //       href: 'https://www.digitalocean.com/community/tools/nginx',
  //       tags: [],
  //     },
  //   ],
  // },
  {
    name: '工具',
    websites: [
      {
        name: 'Markdown',
        desc: 'Markdown语法',
        logo: 'https://markdown.com.cn/hero.png',
        href: 'https://markdown.com.cn/',
        tags: ['教程'],
      },
      {
        name: '菜鸟教程',
        desc: '编程技术文档',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://code.visualstudio.com/',
        tags: ['教程'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: ['工具', '思维导图'],
      },
      {
        name: 'CodePen',
        desc: '前端创意大本营',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线编码', '开发平台'],
      },
      {
        name: 'Base64编码',
        desc: '图片和Base64转换',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/base.png',
        href: 'https://base64.us/',
        tags: ['工具'],
      },
      // {
      //   name: ' JsonT.run',
      //   desc: '一个简洁的在线 JSON 解析器',
      //   logo: 'https://www.jsont.run/favicon.ico',
      //   href: 'https://www.jsont.run/',
      //   tags: ['工具'],
      // },
    ],
  },
  {
    name: '代码托管',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管', '项目源码', '社区'],
      },
      {
        name: 'Vercel',
        desc: '自动部署',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Netlify',
        desc: '自动部署、CDN加速',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Coding',
        desc: '国内的代码托管',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/coding.png',
        href: 'https://coding.net/',
        tags: ['代码托管'],
      },

    ],
  },
  {
    name: '前端',
    websites: [
      {
        name: 'Vue.js',
        desc: '渐进式 JavaScript 框架',
        logo: 'https://vuejs.org/logo.svg',
        href: 'https://vuejs.org',
        tags: ['前端', 'Vue', '框架'],
      },
      {
        name: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://reactjs.org',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Angular',
        desc: '前端老牌Javascript库',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/angular.png',
        href: 'https://angular.cn/',
        tags: ['前端', 'Angular', '框架'],
      },
      {
        name: 'Node',
        desc: '前端做后端的神器',
        logo: 'https://cdn.jsdelivr.net/gh/Yafine/cdn@3.2.1/source/box/images/logo/Node.js.png',
        href: 'http://nodejs.cn/',
        tags: ['后端', 'Nodejs', '文档'],
      },
      {
        name: 'NPM',
        desc: 'NPM是世界上最大的包管理器',
        logo: 'https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
        href: 'https://www.npmjs.com',
        tags: ['Nodejs', '包管理', '文档'],
      },
      {
        name: 'Node.js技术栈',
        desc: '“Nodejs技术栈” 是作者 @五月君 从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们',
        logo: 'https://nodejsred.oss-cn-shanghai.aliyuncs.com/nodejs_roadmap-logo.jpeg?x-oss-process=style/may',
        href: 'https://www.nodejs.red/',
        tags: ['Nodejs', '笔记', '教程'],
      },

      {
        name: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        logo: 'https://cn.vitejs.dev/logo.svg',
        href: 'https://cn.vitejs.dev',
        tags: ['前端', 'Vue', '框架'],
      },
      {
        name: 'Vitest',
        desc: '一个 Vite 原生单元测试框架。它很快！',
        logo: 'https://vitest.dev/favicon.ico',
        href: 'https://cn.vitest.dev/',
        tags: ['前端', 'Vue', '框架'],
      },
      {
        name: 'Nuxt.js',
        desc: '使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。',
        logo: 'https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png',
        href: 'https://nuxtjs.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'Element',
        desc: '基于 Vue，面向设计师和开发者的组件库',
        logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
        href: 'https://element.eleme.cn/#/zh-CN',
        tags: ['前端', 'Vue', '组件库'],
      },
      {
        name: 'VbenAdmin',
        desc: 'Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架',
        logo: 'https://vvbin.cn/doc-next/logo.png',
        href: 'https://vvbin.cn/doc-next/',
        tags: ['前端', 'Vue', '后台', '项目'],
      },

      {
        name: 'Next.js',
        desc: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。',
        logo: 'https://nextjs.org/static/favicon/favicon.ico',
        href: 'https://nextjs.org/',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Ant Design',
        desc: '一套企业级 UI设计语言和 React 组件库',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        href: 'https://ant.design',
        tags: ['前端', 'React', '组件库'],
      },
      {
        name: 'CSS参考-MDN',
        desc: 'MDN的CSS参考手册',
        logo: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
        tags: ['Css', '教程'],
      },
      {
        name: 'JavaScript',
        desc: 'Javascript参考手册',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/js.png',
        href: 'https://www.w3school.com.cn/js/index.asp',
        tags: ['js', '教程'],
      },
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站。',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
        tags: ['Css', '框架'],
      },
      {
        name: '微信小程序',
        desc: '微信小程序文档',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/wx.png',
        href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        tags: ['微信小程序', '文档'],
      },
      {
        name: 'w3schools css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
        tags: ['Css', '样式'],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站，本站就是基于它的',
        logo: 'https://docusaurus.io/img/docusaurus.png',
        href: 'https://docusaurus.io',
        tags: ['前端', 'React', '静态站点'],
      },
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org/',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org/',
        tags: ['前端', 'Vue', '静态站点'],
      },

    ],
  },
  {
    name: '编程',
    websites: [
      {
        name: 'Java',
        desc: 'Java学习文档',
        logo: 'https://zq99299.github.io/java-tutorial/favicon.ico',
        href: 'https://zq99299.github.io/java-tutorial/',
        tags: ['编程'],
      },
      {
        name: 'LeetCode',
        desc: '算法刷题必备站',
        logo: 'https://leetcode.cn/favicon.ico',
        href: 'https://leetcode.cn/',
        tags: ['编程'],
      },
      {
        name: 'Python',
        desc: 'Python学习站',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/py.png',
        href: 'https://python123.io/',
        tags: ['编程'],
      },
      {
        name: 'MySql',
        desc: 'MySql学习站',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/mysql.png',
        href: 'https://www.w3cschool.cn/mysql/',
        tags: ['编程'],
      },

    ]
  },
  {
    name: '字体图标',
    websites: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架。',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['图标', 'svg'],
      },
      {
        name: 'Slidesgo',
        desc: '国外优质PPT模板',
        logo: 'https://slidesgo.com/favicon.ico',
        href: 'https://slidesgo.com/',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: 'https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/gog.png',
        href: 'https://googlefonts.cn/',
        tags: ['字体'],
      },
    ],
  },
  {
    name: '致谢',
    websites: [
      {
        name: '愧怍',
        desc: '本页面参考愧怍的代码。',
        logo: 'https://kuizuo.cn/img/logo.webp',
        href: 'https://kuizuo.cn/',
        tags: ['友链'],
      },
    ],
  },
]
