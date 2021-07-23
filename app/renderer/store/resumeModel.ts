const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '刘泓吉',
      area: '陕西 · 汉中',
      school: '西安邮电大学',
      major: '计算机科学与技术',
      degree: '本科',
      hometown: '汉中',
      onSchoolTime: {
        beginTime: '2019.09',
        endTime: '2021.07',
      },
    },
    contact: {
      phone: '13772846495',
      email: '934007690@qq.com',
      github: 'https://github.com/13772846495',
      juejin: 'https://juejin.cn/user/1583774124737527',
    },
    work: {
      job: '前端工程师',
      city: '上海 | 北京 | 西安',
      cityList: ['上海', '北京', '西安'],
    },
    hobby: '打游戏、摸鱼、划水、躺尸、睡觉，只要不学习，我jio的我可以样样精通~',
    skill:
      '熟悉 React，了解并使用 Hooks 特性，阅读过 巴拉巴拉巴拉 源码，并开发 巴拉巴拉巴拉 | 阅读过 Antd 部分优秀组件源码，并参考借鉴，巴拉巴拉巴拉 | 了解 Vscode，巴拉巴拉巴拉，开发 Vscode 插件 巴拉巴拉巴拉 | 了解 Webpack 编译原理，了解 巴拉巴拉 转码原理，编写过 巴拉巴拉 插件 | 了解 Electron，了解 Node.js 以及 Git 团队协作开发工具 | 了解设计模式，对于特定场景，能采用合适的设计模式进行解决 | 了解 MYSQL，了解数据库 巴拉巴拉 方法 | 了解基于 巴拉巴拉巴拉 应用开发，采用 巴拉巴拉 开发 巴拉巴拉巴拉，具备良好的 巴拉巴拉巴拉',
    skillList: [
      '熟悉 React，了解并使用 Hooks 特性，阅读过 巴拉巴拉巴拉 源码，并开发 巴拉巴拉巴拉',
      '阅读过 Antd 部分优秀组件源码，并参考借鉴，巴拉巴拉巴拉',
      '了解 Vscode，巴拉巴拉巴拉，开发 Vscode 插件 巴拉巴拉巴拉',
      '了解 Webpack 编译原理，了解 巴拉巴拉 转码原理，编写过 巴拉巴拉 插件',
      '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
      '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
      '了解 MYSQL，了解数据库 巴拉巴拉 方法',
      '了解基于 巴拉巴拉巴拉 应用开发，采用 巴拉巴拉 开发 巴拉巴拉巴拉，具备良好的 巴拉巴拉巴拉',
    ],
    evaluation:
      '投身闭源，touch-fish 库作者，LetUsTouchFish Club 闭源组织负责人 | 掘金 Lv0 博主，掘金文章 0 阅读量，github blog 0 star | 无良好语言表达能力和沟通能力，无法快速融入团队，不能适应新环境 | 前后端不会，自我学习能力极差，对新技术具有放弃精神',
    evaluationList: [
      '投身闭源，touch-fish 库作者，LetUsTouchFish Club 闭源组织负责人',
      '掘金 Lv0 博主，掘金文章 0 阅读量，github blog 0 star',
      '无良好语言表达能力和沟通能力，无法快速融入团队，不能适应新环境',
      '前后端不会，自我学习能力极差，对新技术具有放弃精神',
    ],
    certificate: '全国英语四级证书 | 全国摸鱼总决赛三等奖 | 全国躺尸总决赛二等奖',
    certificateList: ['全国英语四级证书',
      '全国摸鱼总决赛三等奖',
      '全国躺尸总决赛二等奖'
    ],
    schoolExperience: [
      {
        beginTime: '2019.09',
        endTime: '2021.07',
        post: '摸鱼部会长',
        department: '309小社会',
        content:
          '计划、组织、协调全宿舍学生组织的集体摸鱼项目 | 团结同学，互帮互助，共同摸鱼！',
        parseContent: [
          '计划、组织、协调全宿舍学生组织的集体摸鱼项目',
          '团结同学，互帮互助，共同摸鱼！',
        ],
        date: 1621145137865,
      },
    ],
    workExperience: [
      {
        beginTime: '2019.09',
        endTime: '2021.07',
        post: '摸鱼宗师',
        department: '西安邮电大学移动应用开发实验室',
        content:
          '担任3g移动应用开发室摸鱼工程师，与西安邮电大学摸鱼中心合作，围绕摸鱼开发应用 | 任职期间基于摸鱼商机开发校内摸鱼市场，采用React.js主导开发，并与西安摸鱼科技有限公司合作，主导开发摸鱼平台管理',
        parseContent: [
          '担任3g移动应用开发室摸鱼工程师，与西安邮电大学摸鱼中心合作，围绕摸鱼开发应用',
          '任职期间基于摸鱼商机开发校内摸鱼市场，采用React.js主导开发，并与西安摸鱼科技有限公司合作，主导开发摸鱼平台管理',
        ],
        date: 1621145137865,
      },
    ],
    projectExperience: [
      {
        beginTime: '2021.03',
        endTime: '2021.05',
        projectName: 'visResumeMook 可视化简历平台',
        post: '前端工程师',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版(未实现) | 通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档(未实现) | 通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版(未实现)',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版(未实现)',
          '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档(未实现)',
          '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版(未实现)',
        ],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;
