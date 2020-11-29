# 常见问题

你可以在这里找到使用过程中可能会产生的一些问题。

## 重要通知

简要概括 : **我们在 2020 年 11 月 18 日中午发现, 腾讯 QQ 更新了 " 群昵称装扮 " 这个功能**

**用户可以在 群聊 → 修改群昵称 页面充值 svip 之后更换昵称装扮。~~这东西不是只有 jk 才会喜欢的吗 ???~~, 经测试发现使用这个装扮会引发 bug , 请暂时不要使用这个装扮。**

详细说明 :

:::danger 警告

- 使用装扮后, 昵称变为特殊的编码, 此种编码会导致传参失败, 即无法让 bot 判断发言者, 即 bot 不会响应使用了这种装扮的用户
- 报错为 **decode OnlinePush.PbPushGroupMsg error: string field contains invalid UTF-8**
- 这是 **[protobuf](https://github.com/golang/protobuf)** 的锅, 如果你想关于这个错误的详细, 你可以查看 [这里](https://github.com/golang/protobuf/issues/622) 
- [Mrs4s](https://github.com/Mrs4s) ( [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 的作者 ) 表示已经有解决方法, 目前需要时间

:::

请在此 bug 修复前, 勿使用昵称装扮。

## 会战相关

Q : 网页显示不正常。

:::tip

- 尝试更换现代化浏览器, 例如 [Chrome](https://www.google.com/intl/zh-CN/chrome/) , 再例如 [Edge](https://www.microsoft.com/zh-cn/edge/) 。

- 尝试联系维护组。

:::

Q : 成员无法退出公会。

:::warning 警告

- 成员无法自行退出公会。
- 若需要变动人员, 你可让会战管理员在后台进行操作。

:::

Q : 已是群管理员, 但是没被 bot 认为公会战管理员。

:::tip 提示

- 只有在你发送 `加入全部成员` 的时候, bot 才会检查权限, 你可发送此命令。

:::

Q : Estonteco 预设的 Boos 的血量与游戏里的对不上。

:::tip 提示

- 请速与维护组联系, 维护组定会快速处理。

:::

## 功能相关

Q : 我不需要某些功能。

:::tip 提示

- 关掉它, 绝大部分功能可以由群管理员控制开关。
- 关闭 公会战, 搜图 等功能请联系维护组手动关闭。

:::

Q : 我需要其它功能。

:::tip 提示

- 请与维护组联系, 若你提议的功能有存在被滥用的可能性, 维护组会尽快给你推荐别的 bot 。

:::

对 [常见问题-补充](#) 的补充 :

:::tip 补充

- 维护组不会在任何时间限制任何功能, 并把绝大多部分的功能的控制权限交给用户, 请自行控制。
- 随着开发进度, Estonteco 可能会有更多的功能, 随着提供查询的并发量的增大, Estonteco 可能会迁移至更好的服务器, 但你无需为此多支付费用。

:::

***目前, Estonteco 所在的服务器性能已严重溢出且完全够维持运营, 除非遭遇重大变故, 否则迁移服务器的可能性已经无限趋近于零。***

## 项目相关

Q : 我原来的群出了问题, 我希望 Estonteco 能在我的另一个群提供应答。

:::tip 提示

- 请随时联系维护组, 维护组会尽快执行。

:::

Q : 作为用户, 还有什么需要知道的。

:::tip 补充

- Estonteco 是服务于 [地河君_official](https://github.com/Chendihe4975) 的公会群的机器人, 也存在承担了部分服务器费用或是赞助了 [地河云](https://michikawachin.art/query.html) 运营从而获取使用的其他用户。
- 维护组希望能与每个用户建立友好关系, 若你想知道功能的用法, 你可以在这个站点找到帮助, 若你有疑问欢迎联系维护组, 若你因使用方法不当或者没理解到 [此文档 ](/) 已明确介绍的功能而四处散布 Estonteco 维护组的不实言论, 维护组有权在服务周期内终止此应答服务。
- 本项目大量使用的 [yobot](https://github.com/pcrbot/yobot) 和 [HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot) 及 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp/) 的代码均为开源, 若你愿意, 你可尝试自建一个类似的 Q 群机器人, 为此你需要一个服务器, 最低成本约 9.5 元 / 月。
- 本项目涉及到太多需要认证的 key , 故不宜公开, 本项目不涉及到发布代码 / 二进制文件, 所以本项目仍遵循 [GPL 3.0 开源协议](https://zh.wikipedia.org/zh-cn/GNU_General_Public_License) 。

:::

## 退群相关

Q : 我不再需要此机器人。

:::danger 警告

- 请不要直接移除出群, 这一举动可能伴随着风险, 可能给其他用户带来困扰。
- 你可以使用指令 `退出此群` 命令机器人退群。

:::

<Valine></Valine>