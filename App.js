// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Pressable, Text, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

import FetchScreen from "./components/FetchScreen"
import CreateScreen from "./components/CreateScreen"
import DeleteScreen from "./components/DeleteScreen"
import FindScreen from "./components/FindScreen"
import EditScreen from "./components/EditScreen"

const Stack = createNativeStackNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Fetch"
          component={FetchScreen}
        />
        <Stack.Screen
          name="Find"
          component={FindScreen}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteScreen}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Pressable
        style={style.button}
        title="Go to Fetch Screen"
        onPress={() => navigation.navigate('Fetch')
        }
      ><Text style = {style.text}>Fetch</Text></Pressable>
      <Pressable
        title="Go to create screen"
        style={style.button}
        onPress={() => navigation.navigate('Find')}
      ><Text style = {style.text}>Find Product</Text></Pressable>
      <Pressable
        title="Go to create screen"
        style={style.button}
        onPress={() => navigation.navigate('Create')}
      ><Text style = {style.text}>Create Product</Text></Pressable>
      <Pressable
        title="Go to create screen"
        style={style.button}
        onPress={() => navigation.navigate('Edit')}
      ><Text style = {style.text}>Edit Product</Text></Pressable>
      <Pressable
        title="Go to create screen"
        style={style.button}
        onPress={() => navigation.navigate('Delete')}
      ><Text style = {style.text}>Delete Product</Text></Pressable>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",

  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
  },
})