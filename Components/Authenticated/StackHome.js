import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Author from './Profile';
import Publications from './Publications';
import Comments from './Comments';

const StackHome = createStackNavigator(
  {
    Home: {
      screen: Home,
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

export { StackHome };
