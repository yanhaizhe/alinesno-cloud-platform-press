import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { localTheme } from './theme'

import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { docsearchPlugin } from "@vuepress/plugin-docsearch"

import { feedPlugin } from "vuepress-plugin-feed2";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ACP数字中台',
  description: '能够灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据中台。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }] ,
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.11.2/css/all.css' }]
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    feedPlugin({
      // 插件选项
      hostname: 'https://alinesno-platform.linesno.com' ,
      json: true ,
      atom: true ,
      rss: true ,
    }),
    mediumZoomPlugin({
      // 配置项
    }),
    docsearchPlugin({
      appId: 'HAT6A1ER66',
      apiKey: '1c5e0970f29dd7423d668b1fd245a7e2',
      indexName: 'acp_linesno',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    // 谷歌分析
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-V0D6KNXG35',
    }),
    // 请求加载
    nprogressPlugin(),
  ],

  theme: localTheme({
    logo: '/logo.png', // 注意图片放在 public 文件夹下
    docsDir: 'docs',
    repo: 'https://github.com/alinesno-cloud/alinesno-cloud-platform-press',
    repoLabel: 'Github',
    docsBranch: '2.1.2',
    editLink: true,
    // editLinkText: '编辑页面',
    sidebarDepth: 0,
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    contributors: false,
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '首页',
        link: '/'
      },
      {
        text: '产品体系',
        link: '/platform/'
      },
      {
        text: '解决方案',
        link: '/solution/'
      },
      {
        text: '数字规划',
        children: [
          { text: '数字中台规划', link: '/design/overview/' },
          { text: '组织建设规划', link: '/group/01_部门建设/' },
          { text: '研发中台规划', link: '/framework/' },
          { text: '数据中台规划', link: '/data/framework/' }
        ]
      },
      {
        text: '部署建设',
        link: '/operation/'
      },
      {
        text: '开发者',
        children: [
          { text: '新手入门', link: '/firstlearn/' },
          { text: '前端手册', link: '/front/' },
          { text: '后端手册', link: '/technique/' },
          { text: '数据手册', link: '/dataskill/' }
        ]
      },
      {
        text: '产品服务',
        link: '/prices/'
      },
      {
        text: '中台演示',
        link: '/display/'
      },
    ],
    sidebar: {
      '/firstlearn/': [
        {
          text: '新手入门',
          collapsible: true,
          children: genFirestLearnSidebar(1)
        },
        {
          text: '第一个任务',
          collapsible: true,
          children: genFirestLearnSidebar(5)
        },
        {
          text: '研发中台集成',
          collapsible: true,
          children: genFirestLearnSidebar(2)
        },
        {
          text: '业务中台集成',
          collapsible: true,
          children: genFirestLearnSidebar(3)
        },
        {
          text: '数据治理集成',
          collapsible: true,
          children: genFirestLearnSidebar(4)
        }
      ],
      '/prices/': [
        {
          text: '服务说明',
          collapsible: true,
          children: genPricesSidebar(0)
        },
        {
          text: '交付内容',
          collapsible: true,
          children: genPricesSidebar(1)
        }
      ],
      '/display/': [
        {
          text: '中台演示',
          collapsible: true,
          children: genSolutionPlatformSidebar()
        },
      ],
      '/design/overview': [
        {
          text: '中台介绍',
          collapsible: true,
          children: genDesignSidebar(1)
        },
      ],
      '/design/technique': [
        {
          text: '平台介绍',
          collapsible: false,
          children: genTechniqueSidebar()
        }
      ],
      '/iot/': [
        {
          text: '行业需求',
          collapsible: true,
          children: genSectorDemandSidebar()
        },
        {
          text: '物联网架构设计',
          collapsible: true,
          children: genIotSystemSidebar()
        },
        {
          text: '功能架构规划',
          collapsible: true,
          children: genFunctionPlanSidebar()
        },
        {
          text: '场景集成',
          collapsible: true,
          children: genSceneSidebar()
        }
      ],
      '/framework/': [
        {
          text: '平台介绍',
          collapsible: true,
          children: genFrameworkAboutSidebar()
        },
        {
          text: '平台需求',
          collapsible: true,
          children: genFrameworkRequireSidebar()
        },
        {
          text: '平台架构',
          collapsible: true,
          children: genFrameworkSidebar()
        },
        {
          text: '服务规划',
          collapsible: true,
          children: genServiceSidebar()
        }
      ],
      '/front/': [
        {
          text: '环境搭建',
          collapsible: true,
          children: genFrontEnvSidebar()
        },
        {
          text: '开发技术',
          collapsible: true,
          children: genFrontSidebar()
        }
      ],
      '/operation': [
        {
          text: '部署规划',
          collapsible: true,
          children: genAutoOperationSidebar()
        },
        {
          text: '数字中台',
          collapsible: true,
          children: genBaseServiceSidebar()
        },
        {
          text: '容器镜像',
          collapsible: true,
          children: genManagerContainerSidebar()
        },
        {
          text: '管理环境',
          collapsible: true,
          children: genManagerOperationSidebar()
        },
        {
          text: '基础软件',
          collapsible: true,
          children: genBaseSoftwareSidebar()
        },
        {
          text: '数据环境',
          collapsible: true,
          children: genDataEnvironmentSidebar()
        }
      ],
      '/env/development/': [
        {
          text: '研发中台安装',
          collapsible: true,
          children: genBaseServiceSidebar()
        },
      ],
      '/data/onedata/': [
        {
          text: '数据治理',
          collapsible: true,
          children: genDataToolsSidebar(1)
        },
      ],
      '/data/framework/': [
        {
          text: '架构设计',
          collapsible: true,
          children: genDataFrameworkSidebar()
        },
        {
          text: '数仓设计',
          collapsible: true,
          children: genDataWarehouseDesignSidebar()
        },
        {
          text: '数仓采集',
          collapsible: true,
          children: genDataWarehouseCollectSidebar()
        },
        {
          text: '数仓分析',
          collapsible: true,
          children: genDataWarehouseAnalyzeSidebar()
        }
      ],
      '/platform/': [
        {
          text: '产品体系',
          collapsible: true,
          children: genPlatformBusinessSidebar(1)
        },
        {
          text: '技术引擎',
          collapsible: true,
          children: genPlatformBusinessSidebar(2)
        },
        {
          text: '基础服务',
          collapsible: true,
          children: genPlatformBusinessSidebar(3)
        },
        {
          text: '数据治理',
          collapsible: true,
          children: genPlatformBusinessSidebar(5)
        },
        {
          text: '运维监控',
          collapsible: true,
          children: genPlatformBusinessSidebar(6)
        }
      ],
      '/solution/': [
        {
          text: '解决方案体系',
          collapsible: true,
          children: genSolutionSidebar(0)
        },
        {
          text: '场景解决方案',
          collapsible: true,
          children: genSolutionSidebar(2)
        }
      ],
      '/group/': [
        {
          text: '团队建设',
          collapsible: true,
          children: genGroupDeptSidebar()
        },
        {
          text: '组织架构',
          collapsible: true,
          children: genGroupRuleSidebar(0)
        },
        {
          text: '质量体系',
          collapsible: true,
          children: genGroupRuleSidebar(2)
        },
      ],
      '/business/': [
        {
          text: '项目组织',
          collapsible: true,
          children: genBusinessSidebar()
        },
        {
          text: '业务集成',
          collapsible: true,
          children: genBusinessBuildSidebar()
        }
      ],
      '/technique/': [
        {
          text: '目录规划',
          collapsible: true,
          children: genCatalogSidebar()
        },
        {
          text: '环境搭建',
          collapsible: true,
          children: genEnvironmentSidebar()
        },
        {
          text: '代码生成器',
          collapsible: true,
          children: genCodeGenSidebar()
        },
        {
          text: '开发接入',
          collapsible: true,
          children: genAccessSidebar()
        },
        {
          text: '开发规范',
          collapsible: true,
          children: genStandardSidebar()
        },
        {
          text: '开发技术',
          collapsible: true,
          children: genDevTechniqueSidebar()
        },
        {
          text: '运维监控',
          collapsible: true,
          children: genMonitorSidebar()
        },
        {
          text: '分布式技术',
          collapsible: true,
          children: genDubboSidebar()
        },
        {
          text: '单点登陆',
          collapsible: true,
          children: genSSOSidebar()
        },
        // {
          // text: '中台能力',
          // collapsible: true,
          // children: genGatewayOpenSidebar()
        // },
        {
          text: '分布式消息',
          collapsible: true,
          children: genMessageSidebar()
        },
        {
          text: '网关服务',
          collapsible: true,
          children: genGatewaySidebar()
        },
        {
          text: '通知服务',
          collapsible: true,
          children: genNoticeSidebar()
        },
        {
          text: '分布式存储',
          collapsible: true,
          children: genStorageSidebar()
        },
        {
          text: '自动化操作',
          collapsible: true,
          children: genOperationDevopsSidebar()
        },
        {
          text: '审计日志监控',
          collapsible: true,
          children: genWatcherDevopsSidebar()
        },
        {
          text: '预警监控',
          collapsible: true,
          children: genTransferDevopsSidebar()
        }
      ],
      '/dataskill/': [
        {
          text: '目录规划',
          collapsible: true,
          children: genDataSkillPlanSidebar()
        },
        {
          text: '环境搭建',
          collapsible: true,
          children: genDataSkillEnvSidebar()
        },
        {
          text: '数据上报服务',
          collapsible: true,
          children: genDataSkillReportSidebar()
        },
        {
          text: '数据集成服务',
          collapsible: true,
          children: genDataIntegrationSidebar()
        } ,
        {
          text: '主数据管理',
          collapsible: true,
          children: genDataManSidebar()
        },
        {
          text: '数据开发服务',
          collapsible: true,
          children: genDataSkillDevSidebar()
        },
        // {
          // text: '数据开放服务',
          // collapsible: true,
          // children: genDataOpenSidebar()
        // }
      ],
      '/learn/': [
        {
          text: '人才团队建设',
          collapsible: true,
          children: genLearnSidebar(1)
        },
        {
          text: '企业中台建设',
          collapsible: true,
          children: genLearnSidebar(2)
        },
        {
          text: '过程培训文档',
          collapsible: true,
          children: genLearnSidebar(3)
        }
      ],
      '/about/': [
        {
          text: '关于',
          collapsible: false,
          children: genAboutSidebar()
        }
      ]
    }
  }),
});


/**
 * 视频教程菜单列表
 * @returns
 */
function genLearnSidebar(menus) {
  if (menus == 1) {
    const mapArr = [
      '/learn/02_初级培训员.md',
      '/learn/03_中级培训员.md',
      '/learn/04_高级培训员.md',
      '/learn/05_方案培训员.md'
    ]
    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    const mapArr = [
      '/learn/11_视频培训.md',
      '/learn/11_2_数字化平台视频教程.md',
      '/learn/12_直播培训.md'
    ]
    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    const mapArr = [
      '/learn/41_培训文档包.md',
      '/learn/42_高级培训文档.md',
      '/learn/43_软件工具包.md',
      '/learn/44_相关培训脚本.md',
      '/learn/45_最佳实践.md'
    ]
    return mapArr.map(i => {
      return i
    })
  } else if (menus == 4) {
    const mapArr = [
      '/learn/01_数字化/60_战略章节.md',
      '/learn/01_数字化/61_设计章节.md',
      '/learn/01_数字化/62_筹备章节.md',
      '/learn/01_数字化/63_建设章节.md',
      '/learn/01_数字化/64_落地章节.md',
      '/learn/01_数字化/65_成熟章节.md'
    ]
    return mapArr.map(i => {
      return i
    })
  }
}

/**
 * 物联网中台架构建设
 * @returns
 */
function genSectorDemandSidebar() {
  const mapArr = ['/iot/', '/iot/plan.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 *
 * @param {概述} type
 * @returns
 */
function genFirestLearnSidebar(type) {
  var mapArr: string[] = []

  if (type == 0) {
  } else if (type == 1) {
    mapArr = [
      '/firstlearn/',
      '/firstlearn/02_学习成长中心.md',
      '/firstlearn/03_中台示例中心.md',
      '/firstlearn/18_持续集成入门.md',
      '/firstlearn/04_中台设计视频.md',
      '/firstlearn/04_中台公开课.md'
    ]
  } else if (type == 2) {
    mapArr = [
      '/firstlearn/05_快速入门.md',
      '/firstlearn/06_开发指南.md',
      '/firstlearn/07_开发资源与工具.md',
      '/firstlearn/08_开发文档.md',
      '/firstlearn/09_开发者认证.md'
    ]
  } else if (type == 3) {
    mapArr = [
      '/firstlearn/10_快速入门.md',
      '/firstlearn/11_用户手册.md',
      '/firstlearn/12_课程培训.md',
      '/firstlearn/13_Demo案例.md'
    ]
  } else if (type == 4) {
    mapArr = [
      '/firstlearn/14_快速入门.md',
      '/firstlearn/16_数据集成示例.md',
      '/firstlearn/17_学习课程.md'
    ]
  } else if (type == 5) {
    mapArr = [
      '/firstlearn/task/00_任务内容.md',
      '/firstlearn/task/01_基础计划.md',
      '/firstlearn/task/02_开始客户管理系统.md',
      '/firstlearn/task/03_第一个服务工程.md',
      '/firstlearn/task/04_第一个前端工程.md',
      '/firstlearn/task/05_引入其它组件.md',
      '/firstlearn/task/06_完成第一天任务.md'
    ]
  } else if (type == 6) {
    mapArr = [
      '/firstlearn/task/00_任务内容.md',
      '/firstlearn/task/01_基础计划.md',
      '/firstlearn/task/02_开始客户管理系统.md',
      '/firstlearn/task/03_第一个服务工程.md',
      '/firstlearn/task/04_第一个前端工程.md',
      '/firstlearn/task/05_引入其它组件.md',
      '/firstlearn/task/06_完成第一天任务.md'
    ]
  }

  return mapArr.map(i => {
    return i
  })
}

function genIotSystemSidebar() {
  const mapArr = [
    '/iot/02_架构设计/01_业务架构设计.md',
    '/iot/02_架构设计/02_技术架构设计.md',
    '/iot/02_架构设计/03_AI视觉架构设计.md',
    '/iot/02_架构设计/04_服务规划.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFunctionPlanSidebar() {
  const mapArr = ['/iot/03_功能架构/01_功能架构规划.md']
  return mapArr.map(i => {
    return i
  })
}

function genSceneSidebar() {
  const mapArr = [
    '/iot/04_场景案例/01_智慧社区场景.md',
    '/iot/04_场景案例/03_AI视觉场景.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 自动化运维管理
 * @returns
 */
function genAutoOperationSidebar() {
  const mapArr = [
    '/operation/',
    '/operation/document/01_基础规则.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 容器镜像
 * @returns
 */
function genManagerContainerSidebar() {
  const mapArr = [
    '/operation/35_container/01_镜像规划.md',
    '/operation/35_container/02_制作和使用.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genManagerOperationSidebar() {
  const mapArr = [
    '/operation/01_gitbook/02_Git安装.md',
    '/operation/02_email/01_邮件申请及开通客户端配置.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genBaseSoftwareSidebar() {
  const mapArr = [
    '/operation/05_jdk/01_Linux的JDK配置.md',
    '/operation/09_nginx/01_nginx单点安装.md',
    '/operation/08_mysql/01_MySQL单点安装.md',
    '/operation/06_redis/01_Redis单点安装.md',
    '/operation/07_kafka/01_Kafka单点安装.md',
    '/operation/27_minio/01_MinIO单机安装.md',
    '/operation/14_nexus/01_Nexus安装配置.md',
    '/operation/36_gitlab/01_Gitlab安装.md',
    '/operation/37_gitea/01_Gitea安装.md',
    '/operation/13_jenkins/01_Jenkins安装.md',
    '/operation/13_jenkins/01_Jenkins插件安装配置.md',
    '/operation/16_sonar/01_Sonar安装.md',
    '/operation/33_docker/01_Docker在线安装.md',
    '/operation/11_zookeeper/01_Zookeeper单点安装.md',
    '/operation/22_elk/04_elk单机版本安装.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataEnvironmentSidebar() {
  const mapArr = [
    '/operation/39_hudi/03_scala安装.md',
    '/operation/39_hudi/07_hadoop安装.md',
    '/operation/39_hudi/08_spark安装.md',
    '/operation/39_hudi/09_hive安装.md',
    '/operation/39_hudi/01_Flink安装.md',
    '/operation/39_hudi/06_Hudi安装.md'

  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 研发手册
 * @returns
 */
function genCatalogSidebar() {
  const mapArr = ['/technique/']
  return mapArr.map(i => {
    return i
  })
}

function genEnvironmentSidebar() {
  const mapArr = ['/technique/11_环境搭建/01_平台环境要求.md']
  return mapArr.map(i => {
    return i
  })
}

function genCodeGenSidebar() {
  const mapArr = [
    '/technique/13_代码生成器/',
    '/technique/13_代码生成器/01_低代码生成.md',
    '/technique/13_代码生成器/02_前端代码生成.md',
    '/technique/13_代码生成器/04_自动发布集成.md',
    '/technique/13_代码生成器/07_权限用户集成.md',
    '/technique/13_代码生成器/08_微服务集成.md',
    '/technique/13_代码生成器/09_容器化集成.md',
    '/technique/13_代码生成器/10_通用CURD集成.md',
    '/technique/13_代码生成器/11_示例代码集成.md',
    '/technique/13_代码生成器/12_JWT集成.md',
    '/technique/13_代码生成器/13_版本管理集成.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genAccessSidebar() {
  const mapArr = [
    '/technique/09_开发接入/02_生成代码.md',
    '/technique/09_开发接入/03_配置菜单.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genStandardSidebar() {
  const mapArr = [
    '/technique/03_项目规范/01_服务工程规范.md',
    '/technique/03_项目规范/02_前端工程规范.md',
    '/technique/03_项目规范/03_Java编码规范.md',
    '/technique/03_项目规范/04_web编码规范.md',
    '/technique/03_项目规范/07_UI自动化规范.md',
    '/technique/03_项目规范/05_sql编码规范.md',
    '/technique/03_项目规范/06_版本管理规范.md',
    '/technique/03_项目规范/08_项目安全规范.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDevTechniqueSidebar() {
  const mapArr = [
    '/technique/01_开发技术/02_默认功能.md',
    '/technique/01_开发技术/30_登陆配置.md',
    '/technique/01_开发技术/26_按钮权限.md',
    '/technique/01_开发技术/28_租户配置.md',
    '/technique/01_开发技术/22_服务集成教程.md',
    '/technique/01_开发技术/20_获取当前用户.md',
    '/technique/06_开发教程/01_本地调试.md',
    '/technique/01_开发技术/11_异常处理.md',
    '/technique/01_开发技术/12_日志处理.md',
    '/technique/01_开发技术/37_页面搜索.md',
    '/technique/01_开发技术/13_缓存使用.md',
    '/technique/01_开发技术/14_消息使用.md',
    '/technique/01_开发技术/24_多数据库源.md',
    '/technique/01_开发技术/25_配置加密.md',
    '/technique/01_开发技术/23_表单提交校验.md',
    '/technique/01_开发技术/14_Excel导出.md',
    '/technique/01_开发技术/34_文件上传.md',
    '/technique/01_开发技术/31_CDN配置.md',
    '/technique/01_开发技术/32_国际化支持.md',
    '/technique/01_开发技术/35_代码转换和规范.md',
    '/technique/01_开发技术/38_组件转SDK.md',
    '/technique/01_开发技术/41_Swagger支持.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 运维监控
 */
function genMonitorSidebar() {
  const mapArr = [
    // '/technique/07_质量监控/',
    '/technique/07_质量监控/06_prometheus监控.md',
    '/technique/07_质量监控/01_ContiPerf压力测试.md',
    '/technique/07_质量监控/03_链路跟踪.md',
    '/technique/07_质量监控/02_数据库监控.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 单点登陆
function genSSOSidebar() {
  const mapArr = [
    '/technique/14_单点登陆/01_统一账号登陆.md',
    '/technique/14_单点登陆/02_企业品牌化配置.md',
    '/technique/14_单点登陆/03_微服务网关认证.md',
    '/technique/14_单点登陆/04_OpenId集成认证.md',
    '/technique/14_单点登陆/05_第三方账号同步.md',
    '/technique/14_单点登陆/06_系统登陆配置.md',
    '/technique/14_单点登陆/07_去掉单点登陆集成.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 中台能力
function genGatewayOpenSidebar() {
  const mapArr = [
    '/technique/15_中台开放能力/01_中台能力架构.md',
    '/technique/15_中台开放能力/02_应用集成说明.md',
    '/technique/15_中台开放能力/03_网关自定义配置.md',
    '/technique/15_中台开放能力/04_接口权限管理.md',
    '/technique/15_中台开放能力/05_集成业务中台.md',
    '/technique/15_中台开放能力/06_生产发布文档.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 支付服务
function genPaymentSidebar() {
  const mapArr = [
    '/technique/18_支付服务/01_聚合支付架构.md',
    '/technique/18_支付服务/02_应用集成支付服务.md',
    '/technique/18_支付服务/03_支付平台操作手册.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// // 流程服务
// function genWorkflowSidebar() {
  // const mapArr = [
    // '/technique/22_流程服务/01_流程架构设计.md',
    // '/technique/22_流程服务/02_任务接入流程.md',
    // '/technique/22_流程服务/03_流程接口服务.md'
  // ]
  // return mapArr.map(i => {
    // return i
  // })
// }

// 通知服务
function genNoticeSidebar() {
  const mapArr = [
    '/technique/17_通知服务/01_通知服务场景.md',
    '/technique/17_通知服务/02_第三方通知集成.md',
    '/technique/17_通知服务/04_通知技术构架.md',
    '/technique/17_通知服务/03_业务集成使用.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 自动化操作监控
function genOperationDevopsSidebar() {
  const mapArr = [
    '/technique/20_自动化操作/01_自动化操作架构.md',
    '/technique/20_自动化操作/02_移动端自动化操作.md',
    '/technique/20_自动化操作/03_集成多种自动化操作示例.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// 分布式存储
function genStorageSidebar() {
  const mapArr = [
    '/technique/21_存储服务/01_接入存储架构.md',
    '/technique/21_存储服务/02_前后端接入云存储方式.md',
    '/technique/21_存储服务/03_多存储在线切换.md',
    '/technique/21_存储服务/04_接入示例.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 分布式消息
function genMessageSidebar() {
  const mapArr = [
    '/technique/19_分布式消息/01_分布式消息架构.md',
    '/technique/19_分布式消息/02_业务消息集成.md',
    '/technique/19_分布式消息/04_消息管理平台手册.md',
    '/technique/19_分布式消息/05_业务集成最佳实践.md',
    '/technique/19_分布式消息/03_消息异常处理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

// 网关服务
function genGatewaySidebar() {
  const mapArr = [
    '/technique/16_网关服务/01_网关场景构架.md',
    '/technique/16_网关服务/05_管理接口.md',
    '/technique/16_网关服务/06_路由管理.md',
    '/technique/16_网关服务/07_授权管理.md',
    '/technique/16_网关服务/08_黑名单配置.md',
    '/technique/16_网关服务/09_访问策略配置.md',
    '/technique/16_网关服务/10_降级配置.md',
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDubboSidebar() {
  const mapArr = [
    '/technique/05_服务熔断/02_服务熔断说明.md',
    '/technique/05_服务熔断/01_Dubbo实现服务熔断.md',
    '/technique/01_开发技术/18_防重复提交.md',
    '/technique/01_开发技术/27_分布式定时任务.md',
    '/technique/01_开发技术/16_分布式锁.md',
    '/technique/01_开发技术/19_分布式限流.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 *
 * @returns 前端脚本
 */
function genFrontEnvSidebar() {
  const mapArr = [
    '/front/'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 *
 * @returns 前端脚本
 */
function genFrontSidebar() {
  const mapArr = [
    '/front/01_新增页面.md',
    '/front/02_请求流程.md',
    '/front/03_引入依赖.md',
    '/front/04_注册组件.md',
    '/front/05_权限使用.md',
    '/front/06_多级目录.md',
    '/front/08_使用图标.md',
    '/front/09_使用字典.md',
    '/front/10_使用参数.md',
    '/front/11_异常处理.md',
    '/front/12_应用路径.md',
    '/front/13_布局.md',
    '/front/14_路由和导航栏.md',
    '/front/15_权限验证.md',
    '/front/16_标签栏导航.md',
    '/front/17_样式.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 业务建设菜单列表
 * @returns
 */
function genBusinessSidebar() {
  const mapArr = [
    '/business/01_方案概述.md',
    '/business/project/01_多部门并发行开发.md',
    '/business/project/02_外包团队业务开发.md',
    '/business/project/03_代码自动生成.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genBusinessBuildSidebar() {
  const mapArr = [
    '/business/build/01_业务服务Docker镜像化.md',
    '/business/build/02_生产服务Docker镜像化.md',
    '/business/build/03_企业开发环境私有云环境.md',
    '/business/build/04_公有云服务采购及指导.md',
    '/business/build/05_基于Kubernetes的容器云平台.md',
    '/business/build/06_业务融合云原生基础设施中台.md',
    '/business/build/07_业务中台与云平台整合.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 组织搭建菜单列表
 * @returns
 */
function genGroupDeptSidebar() {
  const mapArr = [
    '/group/01_部门建设/'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genGroupRuleSidebar(type) {
  var mapArr = [
    '/group/02_管理体系/02_管理概述.md',
    '/group/02_管理体系/10_项目管理.md',
    '/group/02_管理体系/12_岗位职责.md',
    '/group/02_管理体系/19_能力模型.md',
    '/group/02_管理体系/03_入职流程.md',
    '/group/02_管理体系/08_培训体系.md',
    '/group/02_管理体系/05_成长梯度.md',
    '/group/02_管理体系/04_汇报制度.md',
    '/group/02_管理体系/07_绩效考核.md',
    '/group/02_管理体系/18_晋升定级.md'
  ]

  if (type == 1) {
    mapArr = [
      '/group/03_考核标准/01_学习期考核.md',
      '/group/03_考核标准/02_提升期考核.md',
      '/group/03_考核标准/03_代码规范考核.md',
      '/group/03_考核标准/04_架构师考核.md'
    ]
  }

  if (type == 2) {
    mapArr = [
      '/group/02_管理体系/21_业务自检表.md',
      '/group/02_管理体系/20_测试体系.md'
    ]
  }

  return mapArr.map(i => {
    return i
  })
}

/**
 * 中台连接器说明
 * @returns
 */
function genConnectReadmeSidebar() {
  const mapArr = ['/connect/00_连接器说明.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 中台连接器列表
 * @returns
 */
function genConnectListSidebar() {
  const mapArr = [
    '/connect/01_基础权限平台.md',
    '/connect/02_基础通知平台.md',
    '/connect/03_公共存储平台.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 技术平台
 */
function genPlatformBusinessSidebar(type) {
  var mapArr = ['/platform/', '/platform/CHANGELOG.md']

  if (type == 1) {
  } else if (type == 2) {
    mapArr = [
      '/platform/business/12_技术中台/01_微服务研发引擎.md',
      '/platform/business/19_业务中台/01_代码生成脚手架.md'
    ]
  } else if (type == 3) {
    mapArr = [
      '/platform/business/13_研发中台/01_基础权限管理平台.md',
      '/platform/business/13_研发中台/02_云门户管理平台.md',
      '/platform/business/13_研发中台/03_通知管理平台.md',
      '/platform/business/13_研发中台/06_存储管理平台.md',
      '/platform/business/13_研发中台/08_数据开放平台.md',
      '/platform/business/13_研发中台/15_分布式消息管理服务.md',
      '/platform/business/13_研发中台/11_单点登陆管理平台.md'
    ]
  } else if (type == 5) {
    mapArr = [
      '/platform/business/14_数据中台/06_数据上报服务.md',
      '/platform/business/14_数据中台/09_数据集成服务.md',
      '/platform/business/14_数据中台/07_主数据管理服务.md',
      '/platform/business/14_数据中台/08_数据开发服务.md',
      '/platform/business/14_数据中台/10_数据开放服务.md'
    ]
  } else if (type == 6) {
    mapArr = [
      '/platform/business/18_运维中台/01_审计日志监控平台.md',
      '/platform/business/18_运维中台/02_Ansible自动化操作平台.md'
    ]
  }

  return mapArr.map(i => {
    return i
  })
}

function genPlatformsSidebar() {
  const mapArr = ['/platform/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 环境搭建菜单列表
 * @returns
 */
function genEnvSidebar(menus) {
  if (menus == 1) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 4) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  }
}

//数据中台架构

function genDataFrameworkSidebar() {
  const mapArr = [
    '/data/framework/',
    '/data/framework/01_业务架构/03_业务架构设计.md',
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseDesignSidebar() {
  const mapArr = [
    '/data/framework/02_数据仓库/01_数据仓库.md',
    '/data/framework/02_数据仓库/02_数仓分层.md',
    '/data/framework/02_数据仓库/04_环境规划.md',
    '/data/framework/02_数据仓库/03_数仓规范.md',
    '/data/framework/04_数据同步/01_同步策略.md',
    '/data/framework/04_数据同步/02_维度建模.md',
    '/data/framework/04_数据同步/03_数据仓库建模.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseCollectSidebar() {
  const mapArr = [
    '/data/framework/03_业务数据采集/01_用户行为数据.md',
    '/data/framework/03_业务数据采集/02_业务数据采集.md',
    '/data/framework/03_业务数据采集/03_访问日志数据采集.md',
    '/data/framework/03_业务数据采集/04_数据采集汇总.md',
    '/data/framework/03_业务数据采集/05_数据维度汇总.md',
    '/data/framework/03_业务数据采集/06_应用数据汇总.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseAnalyzeSidebar() {
  const mapArr = [
    '/data/framework/05_数据分析/01_离线计算.md',
    '/data/framework/05_数据分析/02_实时计算.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataVisualSidebar() {
  const mapArr = [
    '/data/framework/06_数据可视化/01_报表展示.md',
    '/data/framework/06_数据可视化/02_数据大屏.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genMachineLearningSidebar() {
  const mapArr = [
    '/data/framework/07_机器学习/04_推荐系统.md',
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataManagerSidebar() {
  const mapArr = [
    '/data/framework/08_管理系统/03_ETL在线调试平台.md',
    '/data/framework/08_管理系统/05_数据分析平台.md',
    '/data/framework/08_管理系统/06_数据治理平台.md',
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataOperationSidebar() {
  const mapArr = [
    '/data/framework/09_运维监控/01_监控管理.md',
    '/data/framework/09_运维监控/02_预警管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 数字规划菜单列表
 * @returns
 */
function genDesignSidebar(menus) {
  if (menus == 1) {
    // 平台介绍
    const mapArr = [
      '/design/overview/',
      '/design/overview/04_数字化战略架构.md'
   ]
    return mapArr.map(i => {
      return i
    })
  }
}

/**
 * 研发平台架构设计
 * @returns
 */
function genFrameworkAboutSidebar() {
  const mapArr = ['/framework/']
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkRequireSidebar() {
  const mapArr = [
    '/framework/require/01_针对痛点.md',
    '/framework/require/02_解决方案.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkSidebar() {
  const mapArr = [
    '/framework/essentials/01_总体架构设计.md',
    '/framework/essentials/02_中台架构设计.md',
    '/framework/essentials/02_01_平台技术构架.md',
    '/framework/essentials/03_服务架构设计.md',
    '/framework/essentials/06_平台运维架构.md',
    '/framework/essentials/08_网关架构设计.md',
    '/framework/essentials/09_持续集成设计.md',
    '/framework/essentials/10_自动化测试架构.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genManagerSidebar() {
  const mapArr = [
    '/framework/manager/01_文档管理.md',
    '/framework/manager/02_代码管理.md',
    '/framework/manager/03_项目管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genServiceSidebar() {
  const mapArr = [
    '/framework/service/01_服务规划规范.md',
    '/framework/service/02_基础服务规划.md',
    '/framework/service/04_应用服务规划.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkManagerSidebar() {
  const mapArr = [
    '/framework/manager/04_文档目录管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 研发中台方案菜单列表
 * @returns
 */
function genTechniqueSidebar() {
  const mapArr = ['/design/technique/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 组件演示
 * @returns
 */
function genSolutionComponentSidebar() {
  const mapArr = [
    '/display/component/01_统一权限服务.md',
    '/display/component/02_研发门户服务.md',
    '/display/component/03_门户管理服务.md',
    '/display/component/04_单点登陆服务.md',
    '/display/component/05_代码生成器服务.md',
    '/display/component/06_基础通知组件.md',
    '/display/component/07_公共存储组件.md',
    '/display/component/08_可靠消息服务.md',
    '/display/component/09_网关管理服务.md',
    '/display/component/10_开放平台服务.md',
    '/display/component/11_微型工作流服务.md',
    '/display/component/12_电子签名打印服务.md',
    '/display/component/13_聚合支付服务.md',
    '/display/component/14_Oauth2授权服务.md',
    '/display/component/15_集团权限管理服务.md',
    '/display/component/16_内容管理服务.md',
    '/display/component/17_会员管理服务.md',
    '/display/component/18_基础电商服务.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 运维组件演示
 * @returns
 */
function genSolutionOperationSidebar() {
  const mapArr = [
    '/display/component/19_审计日志监控服务.md',
    '/display/component/20_异常报警监控服务.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 获取关于我们的菜单列表
 * @returns
 */
function genAboutSidebar() {
  const mapArr = ['/about/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

function genAdvancedSidebar() {
  const mapArr = ['/display/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

// 分布式新手入门
function genDistributedLearnSidebar(type) {
  const mapArr = [
    '/firstlearn/dubbo/00_学习计划.md',
    '/firstlearn/dubbo/01_安装软件并建立开发工程.md',
    '/firstlearn/dubbo/02_建表使用jdbc对表进行增删查改.md',
    '/firstlearn/dubbo/03_单元测试.md',
    '/firstlearn/dubbo/04_Jenkins安装.md',
    '/firstlearn/dubbo/06_html转成jsp文件以后前后端显示.md',
    '/firstlearn/dubbo/07_如何实现前后端数据交互.md',
    '/firstlearn/dubbo/08_dubbo框架和zookeeper的注册.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// >>>>>>>>>>>>>>>>>>>>>>>>>> 数据环境 >>>>>>>>>>>>>>>>>>.

// 数据仓库
function genDatahourceSidebar(type) {
  const mapArr = [
    '/data/onedata/',
    '/data/onedata/01_数据仓库.md',
    '/data/onedata/04_元数据管理.md',
    '/data/onedata/02_实时环境.md',
    '/data/onedata/03_监控环境.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// 数据治理
function genDataToolsSidebar(type) {
  const mapArr = [
    '/data/onedata/04_数据集成服务.md',
    '/data/onedata/05_数据开发服务.md',
    '/data/onedata/06_主数据管理服务.md',
    '/data/onedata/07_实时计算服务.md',
    '/data/onedata/08_数据开放服务.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// 运维监控
function genDataMonitorSidebar(type) {
  const mapArr = [
    '/data/onedata/09_监控运维服务.md',
    '/data/onedata/10_集成监控预警服务.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// >>>>>>>>>>>>>>>>>>>>>>>>>> 研发中台环境 >>>>>>>>>>>>>>>>>>.

// 基础服务
function genBaseServiceSidebar() {
  const mapArr = [
    '/operation/81_install/',
    '/operation/81_install/21_安装流程.md',
    '/operation/81_install/24_Jenkinsfile安装.md',
    '/operation/81_install/25_Docker单独安装.md'

  ]

  return mapArr.map(i => {
    return i
  })
}

// 组件服务
function genToolsServiceSidebar() {
  const mapArr = [
    '/env/development/06_基础通知组件.md',
    '/env/development/07_公共存储组件.md',
    '/env/development/08_可靠消息服务.md',
    '/env/development/09_网关管理服务.md',
    '/env/development/10_开放平台服务.md',
    '/env/development/11_微型工作流服务.md',
    '/env/development/12_电子签名打印服务.md',
    '/env/development/13_聚合支付服务.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

// // 业务服务
// function genBusinessServiceSidebar() {
  // const mapArr = [
    // '/env/development/15_集团权限管理服务.md',
    // '/env/development/16_内容管理服务.md',
    // '/env/development/17_会员管理服务.md',
    // '/env/development/18_基础电商服务.md'
  // ]

  // return mapArr.map(i => {
    // return i
  // })
// }

// 运维监控
function genOperationServiceSidebar() {
  const mapArr = [
    '/env/development/19_审计日志监控服务.md',
    '/env/development/20_异常报警监控服务.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

/**
 * 解决方案
 * @param {场景类型} menus
 * @returns
 */
function genSolutionSidebar(menus) {
  if (menus == 0) {
    // 平台介绍
    const mapArr = [
      '/solution/' ,
      '/solution/26_企业数字中台整体方案.md',
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 1) {
    // 平台介绍
    const mapArr = [
      '/solution/01_小型团队中台化方案.md',
      '/solution/02_中小团队研发自动化方案.md',
      '/solution/03_自动化运维监控方案.md',
      '/solution/04_中小型团队研发中台方案.md',
      '/solution/05_行业软件中台战略方案.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    // 平台架构
    const mapArr = [
        '/solution/09_传统业务升级中台解决方案.md',
        '/solution/18_SaaS平台解决方案.md',
        '/solution/19_技术中台解决方案.md',
        '/solution/20_企业数字化转型解决方案.md',
        '/solution/21_企业信息孤岛解决方案.md',
        '/solution/22_统一身份认证解决方案.md',
        '/solution/23_微服务技术解决方案.md',
        '/solution/24_业务中台解决方案.md',
        '/solution/25_云原生云平台解决方案.md',
        '/solution/26_中台系统建设解决方案.md',
        '/solution/27_数据采集治理方案.md',
        '/solution/28_数据开放平台治理方案.md',
        '/solution/29_轻量级数据治理方案.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    // 项目规划
    const mapArr = [
      '/solution/14_电商物流管理解决方案.md',
      '/solution/15_政务集团统一认证.md',
      '/solution/17_传媒智能内容管理方案.md'
    ]

    return mapArr.map(i => {
      return i
    })
  }
}

/**
 * 商业授权
 * @param {场景类型} menus
 * @returns
 */
function genPricesSidebar(menus) {
  if (menus == 0) {
    // 平台介绍
    const mapArr = ['/prices/', '/prices/03_服务内容.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 1) {
    // 平台介绍
    const mapArr = ['/prices/02_授权协议.md' , '/prices/04_商务沟通.md']

    return mapArr.map(i => {
      return i
    })
  }
}

function genDataSkillPlanSidebar(){
  const mapArr = [
    '/dataskill/'
  ]
  return mapArr.map(i => {
    return i
  })

}

function genDataSkillEnvSidebar(){
  const mapArr = [
    '/dataskill/01_env/01_开发环境要求.md'
  ]
  return mapArr.map(i => {
    return i
  })

}

function genDataSkillReportSidebar() {
  const mapArr = [
    '/dataskill/02_datareport/01_数据上报架构.md',
    '/dataskill/02_datareport/02_数据上报示例.md',
    '/dataskill/02_datareport/03_数据上报常见问题.md'
  ]
  return mapArr.map(i => {
    return i
  })

}

function genDataIntegrationSidebar(){
  const mapArr = [
    '/dataskill/03_dataintegration/01_数据集成架构.md',
    '/dataskill/03_dataintegration/02_当前集成功能.md',
    '/dataskill/03_dataintegration/03_数据采集示例.md'
  ]
  return mapArr.map(i => {
    return i
  })

}

function genDataManSidebar(){
  const mapArr = [
    '/dataskill/04_datamanage/01_主数据集成架构.md',
    '/dataskill/04_datamanage/02_主数据使用场景.md',
    '/dataskill/04_datamanage/03_主数据提供接口.md'
  ]
  return mapArr.map(i => {
    return i
  })

}

function genDataSkillDevSidebar() {
  const mapArr = [
    '/dataskill/05_datadev/01_数据开发使用场景.md',
    '/dataskill/05_datadev/02_数据计算示例.md'

  ]
  return mapArr.map(i => {
    return i
  })

}

/**
 * 处理解决方案菜单列表
 * @returns
 */
function genSolutionPlatformSidebar() {
  const mapArr = [
    '/display/'
  ]

  return mapArr.map(i => {
    return i
  })
}

/**
 * 审计日志监控
 */
function genWatcherDevopsSidebar() {
  const mapArr = [
    '/technique/22_审计日志监控/01_应用场景.md',
    '/technique/22_审计日志监控/02_SpringBoot应用接入.md',
    '/technique/22_审计日志监控/03_数据分析接入.md',
    '/technique/22_审计日志监控/04_钉钉预警接入.md'
  ]

  return mapArr.map(i => {
    return i
  })
}

/**
 * 预警监控
 */
function genTransferDevopsSidebar() {
  const mapArr = [
    '/technique/23_应用监控预警服务/01_应用监控预警场景.md',
    '/technique/23_应用监控预警服务/02_配置预警接入端.md',
    '/technique/23_应用监控预警服务/03_自定义配置预警规则.md',
    '/technique/23_应用监控预警服务/04_集成第三方移动预警通知.md',
    '/technique/23_应用监控预警服务/05_预警服务与业务集成.md'
  ]

  return mapArr.map(i => {
    return i
  })
}


