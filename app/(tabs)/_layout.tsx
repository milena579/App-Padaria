import { Stack, Tabs } from "expo-router";
import React from "react";
import { Text, Image, StyleSheet } from "react-native";

export default function TabLayout() {

  
  return (
    <>
      <Tabs >
        <Tabs.Screen name="profile" options={{headerShown: false, tabBarIcon: () => (<Image source={require("../../assets/images/user-alt-1-svgrepo-com 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
        <Tabs.Screen name="index" options={{headerShown: false, tabBarIcon: () => (<Image source={require("../../assets/images/home-4-svgrepo-com 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
        <Tabs.Screen  name="carrinho" options={{headerShown: false, tabBarIcon: () => ( <Image source={require("../../assets/images/buy-svgrepo-com (3) 1.png")} />), tabBarLabel: () => null,}}></Tabs.Screen>
        <Tabs.Screen name="product" options={{headerShown: false, tabBarIcon: () => null, tabBarLabel: () => null, headerRightContainerStyle: false}}></Tabs.Screen>
      </Tabs>

    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: 0, display: "flex", justifyContent: "space-around", height: 0
  }
})