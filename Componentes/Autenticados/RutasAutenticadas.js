import { createTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Add from './Add';
import { StackFollow } from './StackFollow';
import Profile from './Profile';

const RutasAutenticadas = createTabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: StackFollow,
    },
    Profile: {
      screen: Profile,
    },
  },
);

export { RutasAutenticadas };
