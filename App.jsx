import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './components/Home';
import Veiculo from './components/Veiculos';
 import Detalhes from './components/Detalhes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="início" component={Home} />
      <Tab.Screen name="Veículos" component={Veiculo} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} options={{tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons/>
        )}} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}