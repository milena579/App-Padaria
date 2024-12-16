import { Stack, Tabs } from "expo-router";
import React from "react";
import { Text, Image } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs>
<<<<<<< HEAD
        <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () => (<Text>😍</Text>)}}></Tabs.Screen>
        <Tabs.Screen name="explore" options={{headerShown: false, tabBarIcon: () => (<Text>🤦‍♂️</Text>)}}></Tabs.Screen>
        <Tabs.Screen name="carrinho" options={{headerShown: false, tabBarIcon: () => (<Text>🤦‍♂️</Text>)}}></Tabs.Screen>
        <Tabs.Screen name="product" options={{headerShown: false, tabBarIcon: () => (<Text></Text>)}}></Tabs.Screen>
=======
        <Tabs.Screen name="product" options={{headerShown: false, tabBarIcon: () => (<Image source={require("../../assets/images/user-alt-1-svgrepo-com 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
        <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () => (<Image source={require("../../assets/images/home-4-svgrepo-com 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
        <Tabs.Screen  name="carrinho" options={{headerShown: false, tabBarIcon: () => ( <Image source={require("../../assets/images/buy-svgrepo-com (3) 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
>>>>>>> 94c0148c7378e666a73da804a5bb178f590c06f3
      </Tabs>

    </>
  );
}