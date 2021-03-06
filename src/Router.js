import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from "./pages/Products"
import Detail from "./pages/Detail"
import Login from './pages/Login/Login';
const Stack = createStackNavigator();
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading/Loading.';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {

  const userSession = useSelector(state => state.user)
  const isAuthLoading = useSelector(state => state.isAuthLoading)
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
        { isAuthLoading ? 
          (<Loading/>)
        :
        !userSession ?
      <Stack.Navigator>

          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              title: "Giriş Yap",
              headerShown: false
            }} />
      </Stack.Navigator>

          :

          <Stack.Navigator>

            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: "Dükkan",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "#ffffff" },
                headerRight : () => <Icon name="logout" size={30} color="white"onPress={() => dispatch({type : "REMOVE_USER",payload : {user : null}})}/>
              }} />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: "Detay",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "#ffffff" },
                headerTintColor: "white"
              }}
            />
      </Stack.Navigator>
          
        }
    </NavigationContainer>
  )
}

export default App;
