# 应用接入监控

## 示例

以下为接入示例的springboot日志接入`logback-spring.xml`示例文件文件[示例][logback-spring]

## 本内容你将获得

- [后端]SpringBoot应用接入的示例
- [前端]Nginx日志接入的示例

## 接入配置

这里接入配置按最简化配置接入，实现日志的收集和管理即可

### 后端接入

这里接入当前为支持kafka接入，配置替换掉springboot的日志服务即可，主要配置说明，
这里主要是配置kafka地址即可

```xml
<springProperty scope="context" name="watcher.appName" source="spring.application.name"/>
<springProperty scope="context" name="watcher.env" source="spring.profiles.active"/>

 <!-- 使用kafka队列配置 -->
<appender name="ALINESNO-CLOUD-WATCHER" class="com.alinesno.cloud.watcher.logback.appender.KafkaAppender">
    <appName>${watcher.appName}</appName>

    <!-- 这里配置kafka的接入地址-->
    <kafkaHosts>192.168.1.1:9092</kafkaHosts>
    <env>${watcher.env}</env>
</appender>

<root level="INFO">
    <!-- 添加appender -->
    <appender-ref ref="ALINESNO-CLOUD-WATCHER"/>
</root>
```

完善代码请查看示例文件[示例][logback-spring]

### 前端接入

nginx的log日志格式配置如下,这里注意配置下`appName`:
```json
log_format json '{"dtTime":"$time_iso8601",'
           '"logLevel":"INFO",'
           '"className":"$uri",'
           '"content":"requestParam=>$query_string \n status=>$status \n size=>$body_bytes_sent \n request_time=>$request_time",'
           '"serverName":"$server_addr",'
           '"traceId":"$remote_addr",'
           '"method":"$http_user_agent",'
           '"appName":"alinesno-cloud-watcher-ui"'  # 注意修改成自己的appName
           '}';
access_log  /var/log/nginx/logs/access.log  json;
```

前端接入这里集成的是`filebeat`数据抽取服务，输入到kafka队列中，`filebeat`配置如下:

```yaml
filebeat.prospectors:
- input.type: log	# 来源的类型
  enabled: true	  	# 表示这个input源启动
  include_lines: ['content'] #包含 content 的行
  paths:
    - /var/log/nginx/logs/*.log # 监听文件的路径
  tail_files: true	# 是否 tail 的方式
  fields:
    topicname: watcher_log_list # 自定义的字段名，可以在配置文件的别的地方引用

#输出源为kafka，下面配置 kafka 的连接地址和 topic
output.kafka:
    hosts: ["192.168.1.1:9092"]
    topic: '%{[fields.topicname]}'
```

这里filebeta的使用安装请查询相关文档

## 其它

- 后端也可以不接入spring-logback.xml的配置，使用filebeat收集日志，这个主要还是需要看项目的情况

[logback-spring]: #
