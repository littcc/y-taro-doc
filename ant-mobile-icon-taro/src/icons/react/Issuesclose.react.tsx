
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Issuesclose: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z' fill='<%= color %>' /><path d='M536 576c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zM936 388h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8c-1.5-2.1-3.9-3.3-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7c6.4 8.8 19.6 8.8 26 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7z' fill='<%= color %>' /><path d='M892 694h-64.2c-5.5 0-10.6 2.9-13.6 7.5-14.1 22.4-30.7 43.2-49.8 62.2-32.8 32.7-70.9 58.4-113.3 76.3-43.9 18.5-90.5 27.9-138.7 27.9-48.1 0-94.8-9.4-138.7-27.9-42.4-17.9-80.5-43.6-113.3-76.3-32.8-32.7-58.5-70.8-76.4-113.2-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3 43.9-18.5 90.5-27.9 138.7-27.9 48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4 2.7-5.3-1.2-11.6-7.1-11.6z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

Issuesclose.displayName = 'Issuesclose';

Issuesclose.defaultProps = {
  size: 18,
  style: {}
}

export default Issuesclose;
