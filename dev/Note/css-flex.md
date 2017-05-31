# Flex
## 1.Flex
弹性布局
## 2.定义
才用Flex布局的元素被称为 *容器*， *容器*里的各个子元素自动成为容器成员，称为 *项目*
## 3.USE
### 容器的属性
容器有6个属性：
```
    flex-direction
    flex-wrap
    flex-flow 
    justify-content
    align-content
    align-items
```
#### flex-direction
定义flex容器主轴的方向，此属性有四个参数
```
    flex-direction:row || row-reverse || column || column-reverse
```
- row: 默认参数，主轴方向从左到右
- row-reverse: 主轴方向从左到右
- column: 主轴方向从上到下
- column-reverse: 主轴方向从下到上

#### flex-wrap
默认情况下，项目都排在一条线（又称"轴线"）上，如果一条轴线排不下，定义如何换行
```
    flex-wrap: nowrap || wrap || wrap-reverse
```

- nowrap: 默认参数，不换行
- wrap: 换行，方向从上到下，第一行在上方 
- wrap-reverse: 换行，方向从下到上，第一行在下方

#### flex-flow
flex-flow是flex-direction和flex-wrap的简写形式，默认参数为：
``` 
    flex-flow: <flex-direction> <flex-wrap>
    flex-flow: row nowrap;
```

#### justify-content
定义主轴对齐的的方式
```
    justify-content: flex-star || flex-end || center || space-between || space-around
```

- flex-star: 主轴方向依次排列，对齐主轴顶端，元素仍然按着先后顺序排列，下同
- flex-end: 主轴方向依次排列，对齐主轴底端
- center: 主轴方向依次排列，对齐主轴中部
- space-between: 撑开容器空间，上下项目对齐容器顶部和底部，每个项目间距相同
- space-around:撑开容器空间，项目间距相同

<img width="637" height="763" src="http://optmvphrh.bkt.clouddn.com/justify-content.png">

#### align-items
定义交叉轴上的对齐方式
```
    align-items: flex-star || flex-end || center || stretch || baseline
```

- flex-star: 交叉轴方向依次排列，对齐交叉轴顶部
- flex-end: 交叉轴方向依次排列，对齐交叉轴底部
- center: 交叉轴方向依次排列，在交叉轴中部
- stretch: 撑满整个容器（项目没有宽高才适用，且项目的display为块元素）
- baseline: 项目中文字对齐，首行底部对齐

#### align-content
多根轴线的对齐方式
```
    align-content: flex-star || flex-end || stretch || center || space-between || space-around
```

### 项目的属性
项目也有6个属性：
```
    order
    flex-grow
    flex-shrink
    flex-basis
    flex
    align-self
```

#### order
项目编号，并按着编号的顺序排列，数值越小越靠前
```
    order: <number>
```

#### flex-grow
定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。（以此类推）

#### flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

#### flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

#### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
