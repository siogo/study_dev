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
    align-item
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

### 项目的属性
