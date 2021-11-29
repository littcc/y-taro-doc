import { defineComponent } from 'vue';
import { Tag, Space } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';

export default defineComponent({
  name: 'TagDemo',
  setup() {
    return () => (
      <View>
        <DemoBlock title="基本用法">
          <Tag>123</Tag>
        </DemoBlock>

        <DemoBlock title="默认提供 5 种通用标签颜色">
          <Space>
            <Tag color="default">Default</Tag>
            <Tag color="primary">Primary</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="danger">Danger</Tag>
          </Space>
        </DemoBlock>

        <DemoBlock title="自定义颜色">
          <Space>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
          </Space>
        </DemoBlock>
        <DemoBlock title="线框填充">
          <Space>
            <Tag color="primary" fill="outline">
              Primary
            </Tag>
            <Tag color="#87d068" fill="outline">
              #87d068
            </Tag>
            <Tag color="#ff6430" fill="outline">
              #ff6430
            </Tag>
          </Space>
        </DemoBlock>

        <DemoBlock title="圆角">
          <Tag round color="#2db7f5">
            kongxin
          </Tag>
        </DemoBlock>
      </View>
    );
  },
});
