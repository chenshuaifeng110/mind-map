# 内置工具方法

## 基础工具方法

引用：

```js
import {walk, ...} from 'simple-mind-map/src/utils'
```

### 方法

#### walk(root, parent, beforeCallback, afterCallback, isRoot, layerIndex = 0, index = 0)

深度优先遍历树

`root`：要遍历的树的根节点

`parent`：父节点

`beforeCallback`：前序遍历回调函数，回调参数为：root, parent, isRoot, layerIndex, index

`afterCallback`：后序遍历回调函数，回调参数为：root, parent, isRoot, layerIndex, index

`isRoot`：是否是根节点

`layerIndex`：节点层级

`index`：节点在同级节点里的索引

示例：

```js
walk(tree, null, () => {}, () => {}, false, 0, 0)
```

#### bfsWalk(root, callback)

广度优先遍历树

#### resizeImgSize(width, height, maxWidth, maxHeight)

缩放图片的尺寸

`width`：图片原本的宽

`height`：图片原本的高

`maxWidth`：要缩放到的宽

`maxHeight`：要缩放到的高

`maxWidth`和`maxHeight`可以同时都传，也可以只传一个

#### resizeImg(imgUrl, maxWidth, maxHeight)

缩放图片，内部先加载图片，然后调用`resizeImgSize`方法，返回一个`promise`

#### simpleDeepClone(data)

极简的深拷贝方法，只能针对全是基本数据的对象，否则会报错

#### copyRenderTree(tree, root)

复制渲染树数据，示例：

```js
copyRenderTree({}, this.mindMap.renderer.renderTree)
```

#### copyNodeTree(tree, root)

复制节点树数据，主要是剔除其中的引用`node`实例的`_node`，然后复制`data`对象的数据，示例：

```js
copyNodeTree({}, node)
```

#### imgToDataUrl(src)

图片转成dataURL

#### downloadFile(file, fileName)

下载文件

#### throttle(fn, time = 300, ctx)

节流函数

#### asyncRun(taskList, callback = () => {})

异步执行任务队列，多个任务是同步执行的，没有先后顺序

#### degToRad(deg)

> v0.2.24+

角度转弧度

#### camelCaseToHyphen(str)

> v0.2.24+

驼峰转连字符

## 在canvas中模拟css的背景属性

引入：

```js
import drawBackgroundImageToCanvas from 'simple-mind-map/src/utils/simulateCSSBackgroundInCanvas'
```

使用：

```js
let width = 500
let height = 500
let img = '/1.jpg'
let canvas = document.createElement('canvas')
canvas.width = width
canvas.height = height
drawBackgroundImageToCanvas(ctx, width, height, img, {
  backgroundRepeat: 'repeat-y',
  backgroundSize: '60%',
  backgroundPosition: 'center center'
}, (err) => {
  if (err) {
    // 失败
  } else {
    // 成功
  }
})
```
