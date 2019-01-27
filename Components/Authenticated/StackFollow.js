import { createStackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Author from './Profile';
import Publications from './Publications';
import Comments from './Comments';

const StackFollow = createStackNavigator(
  {
    TabFollow: {
      screen: TabFollow,
      navigationOptions: {
        header: null,
      },
    },
    Author: {
      screen: Author,
    },
    Publications: {
      screen: Publications,
    },
    Comments: {
      screen: Comments,
    },
  },
);

export { StackFollow };
