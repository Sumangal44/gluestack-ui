import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
// import { config } from '../src/styled/components/nb.config';
import { config } from '@gluestack-ui/config';
import { Center, GluestackUIProvider } from '@gluestack-ui/themed';
import { useState } from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // inlineStories: false,
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Home',
        [
          'Overview',
          ['Introduction', 'All Components'],
          'Getting Started',
          [
            'Installation',
            'Incremental Adoption',
            'VS Code Extensions',
            'Figma UI Kit',
          ],

          'Core Concepts',
          ['Themed Library', 'Unstyled Library', 'Accessibility', 'Universal'],
          'Performance',
          ['Overview', 'Benchmarks'],
          'Theme Configuration',
          [
            'Theme',
            ['Default Tokens', 'Default Components'],
            'Customizing Theme',
            ['Eject Components', 'Eject Theme'],
          ],
          'Styling',
          [
            'Overview',
            'Utility and SX Props',
            'State',
            'Color Mode',
            'Responsive',
            'Descendants',
            'Platform Specific',
            'Variants',
          ],
        ],
        'Components',
        [
          'Provider',
          ['GluestackUIProvider'],
          'Typography',
          ['Heading', 'Text'],
          'Layout',
          ['Box', 'Center', 'Divider', 'Stack', 'HStack', 'VStack'],
          'Feedback',
          ['Alert', 'Progress', 'Spinner', 'Toast'],
          'Data Display',
          ['Badge', 'Table', 'Card'],
          'Forms',
          [
            'Button',
            'Checkbox',
            'FormControl',
            'Input',
            'Link',
            'Pressable',
            'Radio',
            'Select',
            'Slider',
            'Switch',
            'Tabs',
            'Textarea',
          ],
          'Overlay',
          ['AlertDialog', 'Menu', 'Modal', 'Popover', 'Tooltip'],
          'Disclosure',
          ['Actionsheet', 'Accordion', 'Tabs'],
          'Media And Icons',
          ['Avatar', 'Icon', 'Image'],
          'Others',
          ['Fab'],
          'React Native Components',
          [
            'FlatList',
            'ScrollView',
            'SafeAreaView',
            'VirtualizedList',
            'View',
            'KeyboardAvoidingView',
            'SectionList',
            'StatusBar',
            'Refresh Control',
            'ImageBackground',
            'InputAccessoryView',
          ],
          'Hooks',
          [
            'React Native ARIA',
            'useToken',
            'useBreakpointValue',
            'useMedia',
            'useColorMode',
            'useStyled',
            'useTheme',
          ],
        ],
        'Apps',
        [['Dashboard App']],
        'Guides',
        [
          'Production Optimizations',
          ['With a Babel Plugin'],
          'Guides',
          [
            'Install in Next.js',
            'Install in Expo',
            'Install in React Native',
            'Building Design Systems',
          ],
          'Configuration',
          ['Server-Side Rendering', 'React Server Components'],
          'Advanced',
          ['Fonts', 'Animations'],
          'Recipes',
          ['LinearGradient', 'More Recipes'],
          'Resources',
          ['Todo-List', 'Dashboard App', 'Third Party Library Integrations'],
          'Migration',
          ['NativeBase to gluestack-ui'],
          'More',
          ['Roadmap', 'Changelog', 'Contribution Guidelines', 'FAQs'],
        ],
      ],
      icons: [
        {
          source: 'lucide-react-native',
          name: 'Home',
          headerTitle: 'Home',
        },
        {
          source: 'lucide-react-native',
          name: 'Component',
          headerTitle: 'Components',
        },
        {
          source: 'lucide-react-native',
          name: 'app-window',
          headerTitle: 'Apps',
        },
        {
          source: 'lucide-react-native',
          name: 'BookOpen',
          headerTitle: 'Guides',
        },
      ],
    },
  },
};

import { useDarkMode } from '../src/ui/components/hooks/useDarkMode';
import { Platform } from 'react-native';

export const decorators = [
  (Story) => {
    let value = false;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value = useDarkMode();
    }
    const [isDark] = useState(false);

    function getColorMode() {
      //@ts-ignore
      if (Platform.OS === 'web') {
        return value ? 'dark' : 'light';
      } else {
        return isDark ? 'dark' : 'light';
      }
    }
    return (
      <GluestackUIProvider config={config} colorMode={getColorMode()}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

addParameters({
  docs: {
    container: ({ children, context }) => {
      let value = false;

      if (Platform.OS === 'web') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        value = useDarkMode();
      }
      const [isDark] = useState(false);

      function getColorMode() {
        //@ts-ignore
        if (Platform.OS === 'web') {
          return value ? 'dark' : 'light';
        } else {
          return isDark ? 'dark' : 'light';
        }
      }

      return (
        <DocsContainer context={context}>
          <GluestackUIProvider config={config} colorMode={getColorMode()}>
            {children}
          </GluestackUIProvider>
        </DocsContainer>
      );
    },
  },
});
