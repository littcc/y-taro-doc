/* eslint-disable react/react-in-jsx-scope */
import { defineComponent } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'

const classPrefix = `adm-space`

const SpaceProps = {
  direction: {
    validator(value: string) {
      return ['horizontal', 'vertical'].includes(value)
    },
    default: 'horizontal',
  },
  justify: {
    validator(value: string) {
      return [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
      ].includes(value)
    },
  },
  align: {
    validator(value: string) {
      return ['start', 'end', 'center', 'baseline'].includes(value)
    },
  },
  block: Boolean,
  wrap: Boolean,
}

export default defineComponent({
  name: 'Space',
  props: SpaceProps,
  setup(props, { attrs, slots }) {
    console.log(props, attrs, slots.default?.length)
    return () => (
      <View
        className={classNames(classPrefix, {
          [`${classPrefix}-wrap`]: props.wrap,
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-${props.direction}`]: true,
          [`${classPrefix}-align-${props.align}`]: !!props.align,
          [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
        })}
        {...attrs}
      >
        {slots.default &&
          slots.default().map(child => {
            return (
              child !== null &&
              child !== undefined && (
                <View className={`${classPrefix}-item`}>{child}</View>
              )
            )
          })}
      </View>
    )
  },
})
