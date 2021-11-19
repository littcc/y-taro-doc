
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'Poweroff',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M705.6 124.9c-5.3-2.7-11.6 1.2-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6 22.4 14.1 43.2 30.7 62.2 49.8 32.7 32.8 58.4 70.9 76.3 113.3 18.5 43.9 27.9 90.5 27.9 138.7 0 48.1-9.4 94.8-27.9 138.7-17.9 42.4-43.6 80.5-76.3 113.3-32.7 32.8-70.8 58.5-113.2 76.4-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28c-42.4-17.9-80.5-43.6-113.2-76.4-32.7-32.8-58.4-70.9-76.3-113.3-18.5-43.9-27.9-90.5-27.9-138.7 0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 0.5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7z' fill='<%= color %>' /><path d='M480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <View onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></View>
      )
    }
  }
})
