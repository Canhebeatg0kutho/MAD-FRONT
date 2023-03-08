import { Button, Text, View, TextInput, StyleSheet, Pressable } from 'react-native'
import { useState,useEffect } from 'react'
import React from 'react'

export default function DeleteScreen() {
    const [products, setProduct] = useState([])
    const [productList,setList]= useState([])
    const [id, setId] = useState('')


    const fetchAll = async () => {
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
            setList(data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(()=>{
        fetchAll()
    },[])

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
                placeholder="Enter the ID of the product here!"
                onChangeText={findProduct => setId(findProduct)}
                defaultValue={id}
            />
            <Pressable
                style={style.button}
                onPress={async () => {callAPI(id); fetchAll()}}
            ><Text style={style.text}>Delete Product</Text></Pressable>
            
            <Text>
                {productList.map((product) => (
                    <Text key={product._id}> {product.name}: ${product.price} ID:{product.ourId} {"\n"}</Text>
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