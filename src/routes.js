import {createAppContainer, createStackNavigation} from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigation(
    {Home, Cart},
    {
      cardStyle: {
        backgroundColor: '#000',
      },
    },
  ),
);
