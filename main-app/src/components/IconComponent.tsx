import { defineComponent, h } from 'vue';
import * as Icon from '@ant-design/icons-vue';

export const IconComponent = defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const icons: any = { ...Icon };
    const icon: any = h(icons[props.type]);
    return () => {
      return <span>{icon}</span>;
    };
  },
});
