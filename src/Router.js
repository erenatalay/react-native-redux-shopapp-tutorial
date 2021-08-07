import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Products from "./pages/Products"
import Detail from "./pages/Detail"
import Login from './pages/Login/Login';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="LoginPage" 
        component={Login} 
        options={{
          title : "Giriş Yap",
          headerShown : false
        }}/>
        <Stack.Screen 
        name="ProductsPage" 
        component={Products} 
        options={{
          title : "Dükkan",
          headerStyle:{backgroundColor : "#64b5f6"},
          headerTitleStyle: {color : "#ffffff"}
        }}/>
        <Stack.Screen
         name="DetailPage" 
         component={Detail}
         options={{
          title : "Detay",
          headerStyle:{backgroundColor : "#64b5f6"},
          headerTitleStyle: {color : "#ffffff"},
          headerTintColor : "white"
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
