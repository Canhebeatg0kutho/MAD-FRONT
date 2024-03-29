import { Button, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function CreateScreen() {
    const [products, setProducts] = useState([])

    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://77a9-193-1-57-1.eu.ngrok.io`,
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
        <View style={style.container}>


            <Pressable
                style={style.button}
                onPress={async () => callAPI()}
            ><Text style={style.btnText}>Fetch</Text></Pressable>

            <Text style={style.text}>
                {products.map((product) => (
                    <Text style={style.tableText} key={product._id}>{product.name}: ${product.price} {"\n"} </Text>
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
    btnText:{

    },
    text:{
        marginTop: 40,
    },
    tableText:{
        fontSize: 20,
    },
})