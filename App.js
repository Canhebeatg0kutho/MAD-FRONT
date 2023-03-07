// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View, TextInput } from 'react-native'
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
        <Stack.Screen
          name="Create"
          component={CreateScreen}
        />
         <Stack.Screen
          name="Delete"
          component={DeleteScreen}
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

     <Button
      title="Go to Create Screen"
      onPress={() => navigation.navigate('Create')
      }
    />
      <Button
      title="Go to Delete Screen"
      onPress={() => navigation.navigate('Delete')
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
        `https://9104-193-1-57-1.eu.ngrok.io`,
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
      setProducts(data)
        } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI()}
    />
    <Text>
   {products.map((product) => (
     <Text key={product._id}>{product.name}: ${product.price} {"\n"} </Text>
   ))}
  </Text>
  </View>
  )
}


const FindScreen = ({ navigation }) => {
  const [products, setProduct] = useState([])
  const [found,setFind]= useState('')
  const callAPI = async () => {
    try {
       const res = await fetch(
        `https://9104-193-1-57-1.eu.ngrok.io/find`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body: JSON.stringify({ 
            name:found,
           } ) // Need to use POST to send body
        }
      )
      // .then((res)=>res.json())
      // .then((json)=>console.log(json))
      const data = await res.json()
      setProduct(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type text here!"
        onChangeText={findProduct => setFind(findProduct)}
        defaultValue={found}
      />
    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI({name: found})}
    />
  <Text>
   { products.map((product) => (
     <Text key={product._id}> {product.name}: ${product.price} {"\n"}</Text> 
   ))}
  </Text>

  </View>
  )
}


const CreateScreen = ({ navigation }) => {
  const [products, setProduct] = useState([]);
  const [productName,setName]= useState('')
  const [productPrice,setPrice]= useState('')
  const callAPI = async () => {
    try {
       const res = await fetch(
        `https://9104-193-1-57-1.eu.ngrok.io/addProduct`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body: JSON.stringify({ 
            name:productName,
            price:productPrice
           } ) // Need to use POST to send body
        }
      )
      // .then((res)=>res.json())
      // .then((json)=>console.log(json))
      const data = await res.json()
      if (Array.isArray(data)) {
        setProduct(data);
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type text here!"
        onChangeText={nameProduct => setName(nameProduct)}
        defaultValue={productName}
      />
       <TextInput
        style={{ height: 40 }}
        placeholder="Type text here!"
        onChangeText={priceProduct => setPrice(priceProduct)}
        defaultValue={productPrice}
      />

    <Button
      title="Go Fetch Some Products" onPress={async () => callAPI({name: productName, price:productPrice})}
    />

  <Text>
  {products.map((product) => (
  <Text key={product._id}>{product.name}: ${product.price}</Text> 
))}
  </Text>
  </View>
  )
}


const DeleteScreen = ({ navigation }) => {
  const [products, setProduct] = useState([])
  const [id,setId]= useState('')
  const callAPI = async (id) => {
    try {
       const res = await fetch(
        `https://9104-193-1-57-1.eu.ngrok.io/deleteSpecificProduct/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
        }
      )
      const data = await res.json()
      setProduct(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type text here!"
        onChangeText={findProduct => setId(findProduct)}
        defaultValue={id}
      />
    <Button
      title="Delete Product" onPress={async () => callAPI(id)}
    />

  <Text>
   { products > 0 && products.map((product) => (
     <Text key={product._id}> Product Deleted:  {product.name}: ${product.price} {"\n"}</Text> 
   ))}
  </Text>

  </View>
  )
}


