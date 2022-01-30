import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen}options={{
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' }
      }}
     />
  </Stack.Navigator>
);
