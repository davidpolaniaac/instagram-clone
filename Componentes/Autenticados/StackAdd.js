import { createStackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';


const StackAdd = createStackNavigator(
  {
    Home: {
      screen: Add,
    },
    SeleccionarGaleria: {
      screen: SeleccionarGaleria,
    },
  },
);

export { StackAdd };
