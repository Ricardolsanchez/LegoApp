import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { Signup } from '../pages/SignUp';
import HomeScreen from '../screen/HomeScreen';
import ProductScreen from '../screen/ProductScreen';


const Stack = createStackNavigator();

export function Router() {
  return (
    
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FA8072',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            { title: 'Login' }
          }
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Registro' }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={
            {
              title: 'LegoApp',
              headerLeft: null
            }
          }

        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={
            { title: 'Product Details' }
          }
        />
      </Stack.Navigator>
  
  );
}
