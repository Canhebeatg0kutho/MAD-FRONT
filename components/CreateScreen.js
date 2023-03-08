import { Button, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function CreateScreen() {

  const [products, setProduct] = useState([]);
  const [productName, setName] = useState('')
  const [productPrice, setPrice] = useState('')
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://77a9-193-1-57-1.eu.ngrok.io/addProduct`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420" // See: https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
          },
          body: JSON.stringify({
            name: productName,
            price: productPrice
          }) // Need to use POST to send body
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
    <View style={style.container}>
      <TextInput
        style={style.TextInput}
        placeholder="Type text here!"
        onChangeText={nameProduct => setName(nameProduct)}
        defaultValue={productName}
      />
      <TextInput
        style={style.TextInput}
        placeholder="Type text here!"
        onChangeText={priceProduct => setPrice(priceProduct)}
        defaultValue={productPrice}
      />

      <Pressable
        style={style.button}
        onPress={async () => callAPI({ name: productName, price: productPrice })}
      ><Text style={style.text}>Add</Text></Pressable>

      <Text>
        {products.map((product) => (
          <Text key={product._id}>{product.name}: ${product.price}</Text>
        ))}
      </Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    padding: 20,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    width: 300,
  },
})