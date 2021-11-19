
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
  name: 'CodepenSquareFill',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M723.1 428L535.9 303.4v111.3l103.6 69.1zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM535.9 610.3v111.3L723.1 597l-83.6-55.8zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-90 485c0 1.1-0.1 2.1-0.2 3.1 0 0.4-0.1 0.7-0.2 1-0.1 0.7-0.2 1.3-0.4 2-0.1 0.4-0.2 0.8-0.4 1.2-0.2 0.6-0.4 1.2-0.6 1.7-0.2 0.4-0.4 0.8-0.5 1.2-0.3 0.5-0.5 1.1-0.8 1.6-0.2 0.4-0.4 0.7-0.7 1.1-0.3 0.5-0.7 1-1 1.5-0.3 0.4-0.5 0.7-0.8 1-0.4 0.4-0.8 0.9-1.2 1.3-0.3 0.3-0.6 0.6-1 0.9-0.4 0.4-0.9 0.8-1.4 1.1-0.4 0.3-0.7 0.6-1.1 0.8-0.1 0.1-0.3 0.2-0.4 0.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-0.1-0.1-0.3-0.2-0.4-0.3-0.4-0.3-0.7-0.5-1.1-0.8-0.5-0.4-0.9-0.7-1.3-1.1-0.3-0.3-0.6-0.6-1-0.9-0.4-0.4-0.8-0.8-1.2-1.3-0.3-0.3-0.6-0.7-0.8-1-0.4-0.5-0.7-1-1-1.5-0.2-0.4-0.5-0.7-0.7-1.1-0.3-0.5-0.6-1.1-0.8-1.6-0.2-0.4-0.4-0.8-0.5-1.2-0.2-0.6-0.4-1.2-0.6-1.7-0.1-0.4-0.3-0.8-0.4-1.2-0.2-0.7-0.3-1.3-0.4-2-0.1-0.3-0.1-0.7-0.2-1-0.1-1-0.2-2.1-0.2-3.1V427.9c0-1 0.1-2.1 0.2-3.1 0.1-0.3 0.1-0.7 0.2-1 0.1-0.7 0.2-1.3 0.4-2 0.1-0.4 0.2-0.8 0.4-1.2 0.2-0.6 0.4-1.2 0.6-1.7 0.2-0.4 0.4-0.8 0.5-1.2 0.2-0.5 0.5-1.1 0.8-1.6 0.2-0.4 0.4-0.7 0.7-1.1 0.6-0.9 1.2-1.7 1.8-2.5 0.4-0.4 0.8-0.9 1.2-1.3 0.3-0.3 0.6-0.6 1-0.9 0.4-0.4 0.9-0.8 1.3-1.1 0.4-0.3 0.7-0.6 1.1-0.8 0.1-0.1 0.3-0.2 0.4-0.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c0.1 0.1 0.3 0.2 0.4 0.3 0.4 0.3 0.7 0.5 1.1 0.8 0.5 0.4 0.9 0.7 1.4 1.1 0.3 0.3 0.6 0.6 1 0.9 0.4 0.4 0.8 0.8 1.2 1.3 0.7 0.8 1.3 1.6 1.8 2.5 0.2 0.4 0.5 0.7 0.7 1.1 0.3 0.5 0.6 1 0.8 1.6 0.2 0.4 0.4 0.8 0.5 1.2 0.2 0.6 0.4 1.2 0.6 1.7 0.1 0.4 0.3 0.8 0.4 1.2 0.2 0.7 0.3 1.3 0.4 2 0.1 0.3 0.1 0.7 0.2 1 0.1 1 0.2 2.1 0.2 3.1V597z' fill='<%= color %>' /><path d='M742.2 552.4v-79.8l-59.8 39.9zM281.8 472.6v79.8l59.8-39.9zM488.1 414.7V303.4L300.9 428l83.6 55.8z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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
