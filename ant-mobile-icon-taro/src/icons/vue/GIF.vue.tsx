
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'GIF',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size = 18,
        style = {},
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M944 299H692c-4.4 0-8 3.6-8 8v406c0 4.4 3.6 8 8 8h59.2c4.4 0 8-3.6 8-8V549.9h168.2c4.4 0 8-3.6 8-8V495c0-4.4-3.6-8-8-8H759.2V364.2H944c4.4 0 8-3.6 8-8V307c0-4.4-3.6-8-8-8zM588 300h-56c-4.4 0-8 3.6-8 8v406c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V308c0-4.4-3.6-8-8-8zM452 500.9H290.5c-4.4 0-8 3.6-8 8v43.7c0 4.4 3.6 8 8 8h94.9l-0.3 8.9c-1.2 58.8-45.6 98.5-110.9 98.5-76.2 0-123.9-59.7-123.9-156.7 0-95.8 46.8-155.2 121.5-155.2 54.8 0 93.1 26.9 108.5 75.4h76.2c-13.6-87.2-86-143.4-184.7-143.4C150 288 72 375.2 72 511.9 72 650.2 149.1 736 273 736c114.1 0 187-70.7 187-181.6v-45.5c0-4.4-3.6-8-8-8z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <view onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></view>
      )
    }
  }
})
