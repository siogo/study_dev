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
- stretch: 撑满整个容器（项目没有宽高才适用）
- baseline: 项目中文字对齐，首行底部对齐

### 项目的属性
