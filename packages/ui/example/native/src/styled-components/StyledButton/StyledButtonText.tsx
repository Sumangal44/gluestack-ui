import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text.800' } },
  },
  { ancestorStyle: ['_text'] }
);
