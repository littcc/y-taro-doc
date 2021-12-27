import React from 'react';
import { Result } from 'ant-mobile-taro';
import DemoBlock from '@components/DemoBlock';
import { Smile } from 'ant-mobile-icon-taro/es/index.react';

import './index.less';

export default () => {
  return (
    <>
      <DemoBlock title="Success">
        <Result
          status="success"
          title="操作成功"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
      <DemoBlock title="Error">
        <Result
          status="error"
          title="无法完成操作"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
      <DemoBlock title="Info">
        <Result
          status="info"
          title="信息提示"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
      <DemoBlock title="Waiting">
        <Result
          status="waiting"
          title="等待处理"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
      <DemoBlock title="Warning">
        <Result
          status="warning"
          title="警告提示"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
      <DemoBlock title="自定义 icon">
        <Result
          icon={<Smile />}
          status="success"
          title="Well done"
          description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        />
      </DemoBlock>
    </>
  );
};