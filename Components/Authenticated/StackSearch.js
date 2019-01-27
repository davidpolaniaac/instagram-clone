import { createStackNavigator } from 'react-navigation';
import Search from './Search';
import Author from './Profile';
import Publications from './Publications';
import Comments from './Comments';

const StackSearch = createStackNavigator(
  {
    Search: {
      screen: Search,
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

export { StackSearch };
