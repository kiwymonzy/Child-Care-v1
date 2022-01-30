import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MultiBaseScreen from '../screens/MultiBase';
import MultiLevel2Screen from '../screens/MultiLevel2';

// components
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MultiBase"
      component={MultiBaseScreen}
      options={{
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'CHILD CARE'
      }}
    />
    <Stack.Screen
      name="MultiLevel2"
      component={MultiLevel2Screen}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'ARTICLE 1'
      }}
    />
    <Stack.Screen
      name="MultiLevel3"
      component={MultiLevel2Screen}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'ARTICLE 2'
      }}
    />
  </Stack.Navigator>
);
