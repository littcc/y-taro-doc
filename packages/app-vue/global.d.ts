/// <reference path="../../node_modules/@tarojs/plugin-platform-weapp/types/shims-weapp.d.ts" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare module 'ant-mobile-icon-taro';
declare module 'ant-mobile-taro';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd';
  }
}