import { createStackNavigator } from 'react-navigation';
import Add from './Add';
import SelectGallery from './SelectGallery';


const StackAdd = createStackNavigator(
  {
    Add: {
      screen: Add,
    },
    SelectGallery: {
      screen: SelectGallery,
    },
  },
);

export { StackAdd };
