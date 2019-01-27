import { createTabNavigator } from 'react-navigation';
import Follow from './Follow';

const TabFollow = createTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },
  },
  {
    tabBarPosition: 'top',
  },
);

export { TabFollow };
