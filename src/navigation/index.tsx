import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TransactionListingScreen from '../screens/TransactionListingScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import BlockListingScreen from '../screens/BlockListingScreen';
import BlockDetailScreen from '../screens/BlockDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionListing"
      component={TransactionListingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TransactionDetail"
      component={TransactionDetailScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const BlockStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BlockListing"
      component={BlockListingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="BlockDetail"
      component={BlockDetailScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Transaction" component={TransactionStack} />
      <Tab.Screen name="Block" component={BlockStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
