# 高级用法

[nonebot](https://docs.nonebot.dev/) demo 插件的引申用法, 对于一般用户来说过于复杂, 可以选择跳过本页。

## 抽取图片 api 

首先启用服务

```shell
enable echo
```

其次, 您还需要知道一个图片 api 的地址, 比如这个: [http://xn--bsr.art/p.jpg](http://xn--bsr.art/p.jpg) 

然后, 按照这样的格式发给 bot : 

```shell
echo [CQ:image,cache=0,file=http://xn--bsr.art/p.jpg]
```

然后, bot 会从 [http://xn--bsr.art/p.jpg](http://xn--bsr.art/p.jpg) 这个图片 api 中抽出一张图, 发送到您的群里。

### 引申用法

可以提取知道 pixiv id 的图片, 用法如下:

```shell
echo [CQ:image,file=https://pixiv.cat/{pid}.png]
```

将上述 {pid} 替换成你想要的图片的 id 。例如, 需要发送 pid = 74187526 的图片, 这个指令需要表述成

```shell
echo [CQ:image,file=https://pixiv.cat/74187526.png]
```

## 文本转语音

调用 QQ 自带文本转语音功能。

```shell
echo [CQ:tts,text={text}]
```

`{text}` 是需要转语音的文本。

## 点歌

编写中 ...

## 自定义卡片

编写中 ...

## 礼物

此功能暂不介绍。


## 其他常见消息格式

仅举例, 熟悉 CQ 码规则的可以用这个功能做到很多事。

```shell
echo [CQ:face,id={id}]
#表情
echo [CQ:at,qq={qq}]
# @ , {qq} 为 all 则为 @全体成员
echo [CQ:record,cache=0,file={url}]
#语音, 参考地址 https://redive.estertion.win/
echo [CQ:music,type=qq,id={id}]
# qq 音乐的分享
echo [CQ:music,type=163,id={id}]
#网易云音乐的分享

#不继续举例了
```

好耶, 是 CQ 码！