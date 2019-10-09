import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Entypo } from '@expo/vector-icons';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      MainPage: {
        screen: Main,
        navigationOptions: {
          tabBarLabel: 'Itens',
          tabBarIcon: ({ tintColor }) => (
            <Entypo name="shop" size={24} color={tintColor} />
          ),
        },
      },
      CartPage: {
        screen: Cart,
        navigationOptions: {
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ tintColor }) => (
            <Entypo name="shopping-cart" size={24} color={tintColor} />
          ),
        },
      },
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#fff',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        adaptive: false,
        style: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#191919',
        },
      },
    }
  )
);

export default Routes;
