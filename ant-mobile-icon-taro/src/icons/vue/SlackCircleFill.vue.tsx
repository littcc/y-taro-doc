// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'SlackCircleFill',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit, attrs }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size,
        style,
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return typeof size === 'number' ? usePX ? (size + 'px') : pxTransform(size!) : size;
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M445.262 477.673l101.292-32.909 32.909 101.293-101.292 32.908z' fill='<%= color %>' /><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m231.1 523.5l-50.3 16.3 16.5 50.6c7.7 23.6-5.3 49-28.9 56.7-23.6 7.7-49-5.3-56.7-28.9l-16.5-50.6L506 664.5l16.5 50.6c7.7 23.6-5.3 49-28.9 56.7-23.6 7.7-49-5.3-56.7-28.9l-16.5-50.6-51 16.6c-23.6 7.7-49-5.3-56.7-28.9s5.3-49 28.9-56.7l51-16.6-32.9-101.3-51 16.6c-23.6 7.7-49-5.3-56.7-28.9-7.7-23.6 5.3-49 28.9-56.7l51-16.6-16.5-50.6c-7.7-23.6 5.3-49 28.9-56.7 23.6-7.7 49 5.3 56.7 28.9l16.5 50.6 101.3-32.9-16.5-50.6c-7.7-23.6 5.3-49 28.9-56.7s49 5.3 56.7 28.9l16.5 50.6 50.3-16.3c23.6-7.7 49 5.3 56.7 28.9 7.7 23.6-5.3 49-28.9 56.7L632.1 417 665 518.3l50.3-16.3c23.6-7.7 49 5.3 56.7 28.9 7.6 23.5-5.3 48.9-28.9 56.6z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <Text {...restProps} {...attrs} className={`adm-icon ${restProps.className} ${attrs.class}`} onClick={onClick} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})