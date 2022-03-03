---
nav:
  title: 组件
  path: /components
  order: 6
group:
  title: 试验性
  path: /experimental
---

# DesenseText 脱敏

<code src="@ui/DesenseText"></code>

# API

| 属性          | 说明           | 类型                        | 默认值 |
| ------------- | -------------- | --------------------------- | ------ |
| text          | 未脱敏的内容   | `ReactNode`                 | --     |
| desenseText   | 脱敏后的内容   | `ReactNode`                 | --     |
| desense       | 脱敏状态       | `boolean`                   | --     |
| defaultDesens | 默认脱敏状态   | `boolean`                   | `true` |
| onChange      | 切换脱敏的回调 | `(desens: boolean) => void` | --     |