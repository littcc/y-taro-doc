---
nav:
  title: 组件
  path: /components
  order: 6
group:
  title: 反馈
  path: /feedback
---

# ProgressCircle 进度圈

<code src="@ui/ProgressCircle"></code>

### 属性

| 参数     | 说明       | 类型              | 默认值 |
| -------- | ---------- | ----------------- | ------ |
| percent  | 百分比     | `number`          | `0`    |
| children | 自定义信息 | `React.ReactNode` | -      |

### CSS 变量

| 属性          | 说明           | 默认值    | 全局变量 |
| ------------- | -------------- | --------- | -------- |
| --size        | 画布的宽高     | `50px`    | -        |
| --track-width | 线条宽度       | `3px`     | -        |
| --track-color | 轨道的颜色     | `#e5e5e5` | -        |
| --fill-color  | 填充部分的颜色 | `#1677ff` | -        |