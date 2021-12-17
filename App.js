import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Screen
import Posts from './src/screens/Posts';
import DetailPost from './src/screens/DetailPost';

const Stack = createStackNavigator();

export default function App(){
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Posts" component={Posts} />
       <Stack.Screen name="DetailPost" component={DetailPost} />
     </Stack.Navigator>
   </NavigationContainer> 
  )
}