
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const ControlFill: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM404 683v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99z m279.6-143.9c0.2 0 0.3-0.1 0.4-0.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c0.2 0 0.3 0.1 0.4 0.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1-0.2 0-0.3 0.1-0.4 0.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-0.2 0-0.3-0.1-0.4-0.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1z' fill='<%= color %>' /><path d='M652 440m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z' fill='<%= color %>' /><path d='M403.4 566.5l-1.5-2.4c0-0.1-0.1-0.1-0.1-0.2l-0.9-1.2c-0.1-0.1-0.2-0.2-0.2-0.3-1-1.3-2-2.5-3.2-3.6l-0.2-0.2c-0.4-0.4-0.8-0.8-1.2-1.1-0.8-0.8-1.7-1.5-2.6-2.1h-0.1l-1.2-0.9c-0.1-0.1-0.3-0.2-0.4-0.3-1.2-0.8-2.5-1.6-3.9-2.2-0.2-0.1-0.5-0.2-0.7-0.4-0.4-0.2-0.7-0.3-1.1-0.5-0.3-0.1-0.7-0.3-1-0.4-0.5-0.2-1-0.4-1.5-0.5-0.4-0.1-0.9-0.3-1.3-0.4l-0.9-0.3c-0.5-0.1-0.9-0.2-1.4-0.3-0.2-0.1-0.5-0.1-0.7-0.2-0.7-0.1-1.4-0.3-2.1-0.4-0.2 0-0.4 0-0.6-0.1-0.6-0.1-1.1-0.1-1.7-0.2-0.2 0-0.4 0-0.7-0.1-0.8 0-1.5-0.1-2.3-0.1s-1.5 0-2.3 0.1c-0.2 0-0.4 0-0.7 0.1-0.6 0-1.2 0.1-1.7 0.2-0.2 0-0.4 0-0.6 0.1-0.7 0.1-1.4 0.2-2.1 0.4-0.2 0.1-0.5 0.1-0.7 0.2-0.5 0.1-0.9 0.2-1.4 0.3l-0.9 0.3c-0.4 0.1-0.9 0.3-1.3 0.4-0.5 0.2-1 0.4-1.5 0.5-0.3 0.1-0.7 0.3-1 0.4-0.4 0.2-0.7 0.3-1.1 0.5-0.2 0.1-0.5 0.2-0.7 0.4-1.3 0.7-2.6 1.4-3.9 2.2-0.1 0.1-0.3 0.2-0.4 0.3l-1.2 0.9h-0.1c-0.9 0.7-1.8 1.4-2.6 2.1-0.4 0.4-0.8 0.7-1.2 1.1l-0.2 0.2c-1.1 1.1-2.2 2.4-3.2 3.6-0.1 0.1-0.2 0.2-0.2 0.3l-0.9 1.2c0 0.1-0.1 0.1-0.1 0.2l-1.5 2.4c-0.1 0.2-0.2 0.3-0.3 0.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c0.1 0.2 0.2 0.3 0.3 0.5l1.5 2.4c0 0.1 0.1 0.1 0.1 0.2l0.9 1.2c0.1 0.1 0.2 0.2 0.2 0.3 1 1.3 2 2.5 3.2 3.6l0.2 0.2c0.4 0.4 0.8 0.8 1.2 1.1 0.8 0.8 1.7 1.5 2.6 2.1h0.1l1.2 0.9c0.1 0.1 0.3 0.2 0.4 0.3 1.2 0.8 2.5 1.6 3.9 2.2 0.2 0.1 0.5 0.2 0.7 0.4 0.4 0.2 0.7 0.3 1.1 0.5 0.3 0.1 0.7 0.3 1 0.4 0.5 0.2 1 0.4 1.5 0.5 0.4 0.1 0.9 0.3 1.3 0.4l0.9 0.3c0.5 0.1 0.9 0.2 1.4 0.3 0.2 0.1 0.5 0.1 0.7 0.2 0.7 0.1 1.4 0.3 2.1 0.4 0.2 0 0.4 0 0.6 0.1 0.6 0.1 1.1 0.1 1.7 0.2 0.2 0 0.4 0 0.7 0.1 0.8 0 1.5 0.1 2.3 0.1s1.5 0 2.3-0.1c0.2 0 0.4 0 0.7-0.1 0.6 0 1.2-0.1 1.7-0.2 0.2 0 0.4 0 0.6-0.1 0.7-0.1 1.4-0.2 2.1-0.4 0.2-0.1 0.5-0.1 0.7-0.2 0.5-0.1 0.9-0.2 1.4-0.3l0.9-0.3c0.4-0.1 0.9-0.3 1.3-0.4 0.5-0.2 1-0.4 1.5-0.5 0.3-0.1 0.7-0.3 1-0.4 0.4-0.2 0.7-0.3 1.1-0.5 0.2-0.1 0.5-0.2 0.7-0.4 1.3-0.7 2.6-1.4 3.9-2.2 0.1-0.1 0.3-0.2 0.4-0.3l1.2-0.9h0.1c0.9-0.7 1.8-1.4 2.6-2.1 0.4-0.4 0.8-0.7 1.2-1.1l0.2-0.2c1.1-1.1 2.2-2.4 3.2-3.6 0.1-0.1 0.2-0.2 0.2-0.3l0.9-1.2c0-0.1 0.1-0.1 0.1-0.2l1.5-2.4c0.1-0.2 0.2-0.3 0.3-0.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-0.1-0.2-0.2-0.4-0.3-0.5z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

ControlFill.displayName = 'ControlFill';

ControlFill.defaultProps = {
  size: 18,
  style: {}
}

export default ControlFill;
