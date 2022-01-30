import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import StatsScreen from '../screens/Stats';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Stats" component={StatsScreen}
          options={{
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' }
      }}
         />
  </Stack.Navigator>
);
