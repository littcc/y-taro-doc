// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../util';
import type { ITaroIconProps } from '../type';
import '../style/icon.less';

const VerticalAlignBotto: FC<ITaroIconProps> = ({
  size,
  style,
  color,
  usePX,
  ...props
}) => {
  const renderSize = useMemo(() => {
    return usePX
      ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
      : pxTransform(size!);
  }, [usePX, size]);

  const background = useMemo(() => {
    const base64SVG = template(
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z' fill='<%= color %>' /></svg>",
      { size: renderSize, color: hex2rgb(color || '') },
    );
    const escape = base64SVG.replace(/<|>/g, (str: string) =>
      encodeURIComponent(str),
    );
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    <View
      className="adm-icon"
      style={{ ...style, background, width: renderSize, height: renderSize }}
      {...props}
    ></View>
  );
};

VerticalAlignBotto.displayName = 'VerticalAlignBotto';

VerticalAlignBotto.defaultProps = {
  size: 18,
  style: {},
};

export default VerticalAlignBotto;
