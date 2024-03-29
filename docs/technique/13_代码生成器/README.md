# 生成器使用说明

## 工程示例

代码生成集成示例工程[打开](https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop)

## 什么是 alinesno-init

团队基于 spring boot 孵化了一套 alinesno-init 脚手架，可以快速完成新服务代码框架的搭建。目的是让项目平台所有创建的服务都是基于同一套框架和代码结构，统一风格和技术路线，避免后期升级等困难。

## 为什么使用 alinesno-init

1. 通过 alinesno-init 脚手架生成的项目代码，能帮开发者准备好开发的前期工作，让开发更加迅速，不用在前期配置上花费时间，降低框架学习成本，让开发者更加专注于业务逻辑开发。
2. 通过集成基础平台组件以及数据支撑类组件，行业公共能力组件，为应用的开发提供底座能力赋能。
3. 低代码生成器通过使用自动化生成的平台，集成多种环境配置，主要针对复杂场景的使用，简单场景的使用，
4. 构建针对于微服务平台框架，进行整体的说明

## 开发规范

我们的产品研发主要是使用 java，因此参考了团队推出的 java 开发规范，截取了特别重要的部分进行重点强调，根据项目实际情况可以增加内容，把一些通用的问题提取出来，增强大家的认识。

## 项目模块规划

使用 alinesno-init 进行二次开发，按业务模块进一步划分如下:

| 序号 | 模块                                 | 描述             | 备注                               |
|:----:|--------------------------------------|------------------|------------------------------------|
| 1    | alinesno-cloud-demo-parent           | 公共父类定义     | 这里主要定义版本号和其它自定义配置 |
| 2    | alinesno-cloud-demo-api              | 对外 api 接口    | 放entity/api/dto/公共实体          |
| 3    | alinesno-cloud-demo-starter          | 核心业务         | 此为业务价值的最终能力沉淀         |
| 4    | alinesno-cloud-demo-gateway          | 对外接口         |                                    |
| 5    | alinesno-cloud-demo-ui               | 前端工程         |                                    |
| 6    | alinesno-cloud-demo-boot             | 工程启动包       |                                    |
|      |                                      |                  |                                    |
| 7    | [自定义]alinesno-cloud-demo-consumer | 对外引用服务     |                                    |
| 8    | [自定义]alinesno-cloud-demo-provider | 对外提供服务     | 根据业务情况自定义建设             |
| 9    | [自定义]alinesno-cloud-demo-common   | 服务公共包       | 根据业务情况自定义建设             |
| 10   | [自定义]alinesno-cloud-demo-[模块名] | 新业务能力补丁包 | 根据业务情况自定义建设             |
|      |                                      |                  |                                    |

这里对外提供服务包`provider`，类似于 sdk 单独业务情况建设，是基于职责划分考虑，
这里定义第三方引用属于第三方职责，提供出来的 sdk 包属于为第三方服务范围，组件的职责是做好业务中台能力，
具体由团队根据自己情况定义

## 功能模块

> 主要针对于低代码生成器平台的功能权限处理

| 序号 | 模块                 | 说明                       | 状态 | 备注 |
|:----:|----------------------|----------------------------|:----:|------|
| 1    | 01\_低代码生成       | 描述整体自生成的服务能力   | 完成 |      |
| 2    | 02\_工程脚手架构生成 | 介绍自动生成的工程结构     | 完成 |      |
| 2    | 02\_前端代码生成     | 介绍生成的前端结构和思路   | 完成 |      |
| 4    | 04\_自动发布集成     | 集成多种发布方式           | 完成 |      |
| 7    | 07\_权限用户集成     | 默认集成资源引擎服务       | 完成 |      |
| 8    | 08\_微服务集成       | 多种场景微服务引用         | 完成 |      |
| 9    | 09\_容器化集成       | 容器化配置和打包上传方式   | 完成 |      |
| 10   | 10\_通用 CURD 集成   | 接口默认集成的接口         | 完成 |      |
| 11   | 11\_示例代码集成     | 一些基础示例和典型例子     | 完成 |      |
| 12   | 12_JWT 集成          | 登陆认证的处理思路和方式   | 完成 |      |
| 13   | 13\_版本管理集成     | 工程版本管理的实践和注意点 | 完成 |      |
| 14   | 14\_分布式存储集成   | 集成基础服务说明           |      |      |
|      |                      |                            |      |      |

## 其它

- 无
