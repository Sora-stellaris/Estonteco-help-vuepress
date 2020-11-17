# 概览

:::tip 提示
如果在阅读本文档时遇到难以理解的词汇, 请随时在 [常见问题](../faq/) 中的评论区指出, 或者帮我们改进这个文档。
:::

:::tip 提示
初次阅读文档可能会觉得枯燥, 但此文档是您了解 Estonteco 功能的一个重要途径, 请务必阅读。
:::

Estonteco ( 读音 /estonˈtet͡so/ )是一个基于 [yobot](https://github.com/yuudi/yobot) 和 [HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot) 的  QQ 机器人, 主要在 公主连结 玩家的 QQ 群中提供应答服务。借助 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 对 QQ 机器人收到的消息进行解析和处理, 并以插件化的形式, 分发给消息所对应的命令处理器, 来完成具体的功能。

> 目前, Estonteco 已在保证兼容性和独立性及维护便利的前提下, 实现了全功能的模块化。

[HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot) 框架封装了很多高级用法, 这使得基于 HoshinoBot 的 Estonteco 具有了 :

- 分群、分权限的管理插件
- 多种命令处理器
- 极高扩展性, 较低的开发难度
- 丰富的社区资源

::: tip 注意

对指令进行自然语言处理需要消耗巨大的服务器资源, 且影响处理效率, 目前 Estonteco 暂无自然语言处理计划。<br>这意味着, 它并不会尝试对用户的自然语言进行理解, 只对 指令 进行反馈。<br>这也是为什么用户需要阅读帮助文档的原因。

:::

[HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot) 与它的前身 [nonebot](https://github.com/nonebot/nonebot) 一样, WebSocket 通信方式, 性能是 HTTP 通信方式的两倍以上, 且保障了处理消息的吞吐量。

Estonteco 也是同理。

## 它如何工作？

Estonteco 的运行离不开 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp)。go-cqhttp 扮演着「无头 QQ 客户端」的角色, 它会将收到的消息消息包装为一个事件 ( 通知和请求同理 ) , 并将事件发送至 Estonteco 。

Estonteco 的事件处理函数收到通知后对于不同类型的事件做相应的预处理和解析, 然后调用对应的插件, 并向其提供适合此类事件的会话对象 ( 原先是 session , Hoshino v2 已将 session 拆分成多个属性 ) 。Estonteco 维护组除了需要更新 Estonteco 的静态资源外, 还需利用 session 对象中提供的数据, 在插件的处理函数中编写所需要实现的功能。

## 关于本站

本站是面向用户的帮助页面, 本应不该出现过多复杂词汇, 若您感到困惑, 您可直接跳转到 [开始使用](./start.md) 页面, 直接阅读功能的使用方法。

本站由 [Vuepress](https://vuepress.vuejs.org) 提供强力驱动。\# 来源于 [yobot](https://github.com/yuudi/yobot) 的作者 [yuudi](https://github.com/yuudi) 的建议。

式样和主题则是参考了 [nonebot](https://github/nonebot/nonebot) 的 [文档](https://docs.nonebot.dev) 。\# ~~是致敬 !~~

## 为什么不是 ?

### WordPress

WordPress 的主题好看但限的太死, 在 WordPress 上自由发挥是比较困难的事。
某种意义上 WordPress 并不好用。

###  hexo

维护组的博客就是使用 hexo 搭建, 地址是 <https://blog.di.he.cn/> , 用相同的工具搭建两个站点显得略无新意。

### 前端大佬模板

[VuePress](https://vuepress.vuejs.org/) 具有高性能的特点, 只需要使用 Markdown 进行写作, 就可以生成静态 HTML 。Markdown 语法简单, 现在正是 Estonteco 快速更新迭代的时候, 站点需要便于修改, 在此意义上 [VuePress](https://vuepress.vuejs.org/) 可算非常非常适合用来写帮助文档, 且 [VuePress](https://vuepress.vuejs.org/) 简洁性和美观性也不输于任何模板。

### 自动发卡系统

此举已经和与 HoshinoBot 的原作者 Ice-Cirno 的构想背道而驰。

> Ice-Cirno : 我只是不想让我的代码帮别人数钱罢了。

Estonteco - Project 只是由维护组学习交流的项目之一, 无论是出于学习交流的目的需要与 bot 的原作者保持友好关系, 还是对 bot 框架的原作者的尊重, 都自然会避免沾染上商业化的项目, 从前就是如此, 以后也不会变。

## Features

会找点 bug 写进去 ...

这不是 bug , 这是新的 Features ! 