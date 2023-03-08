import { Button, Text, View, TextInput, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function DeleteScreen() {
    const [products, setProduct] = useState([])
    const [id, setId] = useState('')
    const callAPI = async (id) => {
        try {
            const res = await fetch(
                `https://77a9-193-1-57-1.eu.ngrok.io/deleteSpecificProduct/${id}`,
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
        <View style = {style.container}>
            <TextInput
                style={style.TextInput}
                placeholder="Type text here!"
                onChangeText={findProduct => setId(findProduct)}
                defaultValue={id}
            />

            <Pressable
                style={style.button}
                onPress={async () => callAPI(id)}
            ><Text style={style.text}>Delete Product</Text></Pressable>

            <Text>
                {products > 0 && products.map((product) => (
                    <Text key={product._id}> Product Deleted:  {product.name}: ${product.price} {"\n"}</Text>
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