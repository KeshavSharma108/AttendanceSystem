import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./NavigationDrawer";





const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Drawer' component={MyDrawer} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
