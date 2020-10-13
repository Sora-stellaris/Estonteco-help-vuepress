# 其他

除了公主连结相关功能外, Estonteco 还提供了: 

## 迫害龙王

首先, 启用服务:

```shell
enable dragonking
```

然后, 就可以使用指令 `迫害龙王` 来一起愉快的迫害龙王啦~

## 丢群友

用法 : 

```shell
丢 @ 群友

爬 @ 群友
```

作用 : 生成丢群友和让群友爬的表情包。

## 上号

原本是嘲讽网易云音乐评论区的风气, 后来成为了一个梗

用法 : 

```shell
上号

到点了

生而为人
```

但愿这个功能不会对您产生消极的影响。

## 自定义词库

先使用 `enable set-qa` 启用这个功能, 具体用法 : 

```shell
我问xxx你答yyy
#仅对自己有效
有人问xxx你答yyy
#对全群有效
看看我问
#查看自己设置的问答
看看有人问
#查看当前群内设置的 "有人问"
```

您也可以删除您设下的词库 : 

```shell
不要回答xxx
#删除自己设置的问答
删除有人问xxx
#删除当前群聊设置的 "有人问"
```

## 治疗选择困难症

首先启用服务, 

```shell
enable chooseone
```

然后发送选择语句, 例如

![QQ截图20200909045756.png](https://i.loli.net/2020/09/09/LKYXlD4qWp2NVa8.png)

不管你有没有选择困难症, 反正都能治。

## 搜图

能查找图片来源, 这个功能来源于 [这个项目](https://github.com/Tsuk1ko/cq-picsearcher-bot) 。

![Screenshot_2020_0909_161720.png](https://i.loli.net/2020/09/09/EJpNmwHFu6hK5ZQ.png)

如果您使用移动端设备, 可以依次 `在文本框中输入 @Estonteco `, `选择图片`, `输入参数 ( 若需要 ) `, `点击发送` 。

参数列表见 [命令一览](https://mirai.michikawachin.art/yobot/help/) 。

您可访问 pixiv 提取原图。

考虑到部分境内用户无法访问 pixiv 的情况, 用 Estonteco 提取原图的方法见后文的 [高级用法](#) 。



## 好好说话

社交平台上通过拼音首字母缩写指代特定词句的情况越来越多, 为了让更多人能勉强理解这一门另类沟通方式, 出现了一个[划词转义工具](https://lab.magiconch.com/nbnhhsh/) 。

事实上, 我非常不建议大家使用这种说话方式。

![QQ截图20200909083456.png](https://i.loli.net/2020/09/09/hW3IwCNTK5FboHD.png)

以上是网页中查询的结果。

您也可以使用 Estonteco 进行查询, 用法如下: 

```shell
?pcr
```

若一切 OK , 此时 bot 会回复您 pcr 这个词的四种可能的意思。

## 定制入群欢迎



如果你希望 Estonteco 为你的群的新成员发送欢迎消息, 您可与维护组联系定制。

:::warning 提示

* 可以在非会战期间提出定制要求, 但是请不要在公会战期间提。

:::

支持定制的入群欢迎 : `文字消息` , `图片消息` , `语音消息`<br>不支持定制的入群欢迎 : `xml` `json`

## 其他

见 [帮助文档](https://mirai.michikawachin.art/yobot/help/)