// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import {useState} from 'react'

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
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
     <Button
      title="Go to Fetch Screen"
      onPress={() => navigation.navigate('Fetch')
      }
    />

      <Button
      title="Go to Find Screen"
      onPress={() => navigation.navigate('Find')
      }
    />
    </View>
   
    
  )
}

const FetchScreen = ({ navigation }) => {
  const [products, setProducts] = useState([])
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://3bd7-193-1-57-1.eu.ngrok.io`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
        //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
        }
      )
      const data = await res.json()
      setProducts(JSON.stringify(data))
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI()}
    />
       <Text>{products}</Text>
  </View>
  )
}


const FindScreen = ({ navigation }) => {
  const [text, setText] = useState([])
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://2b2a-193-1-57-1.eu.ngrok.io`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          data:{
            name,
          }
        //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
        }
      )
      const data = await res.json()
      setText(JSON.stringify(data))
      console.log(text?.name)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI()}
    />
       <Text>{text}</Text>

  </View>
  )
}


const EditScreen = ({ navigation }) => {
  const [text, setText] = useState([])
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://2b2a-193-1-57-1.eu.ngrok.io`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          data:{
            name,
          }
        //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
        }
      )
      const data = await res.json()
      setText(JSON.stringify(data))
      console.log(text?.name)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI()}
    />
       <Text>{text}</Text>

  </View>
  )
}


const DeleteScreen = ({ navigation }) => {
  const [text, setText] = useState([])
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://2b2a-193-1-57-1.eu.ngrok.io`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          data:{
            name,
          }
        //  body: JSON.stringify( { testData: 'Test data sent to server' } ) // Need to use POST to send body
        }
      )
      const data = await res.json()
      setText(JSON.stringify(data))
      console.log(text?.name)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI()}
    />
       <Text>{text}</Text>

  </View>
  )
}
