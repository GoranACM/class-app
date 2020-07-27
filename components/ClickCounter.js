import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const ClickCounter = (props) => {

    const [click, setclick] = useState(0);

    return(
        <View>
            <TouchableOpacity onPress = { () => { setclick(click + 1) } } style={ styles.button }>
                <Text style={ styles.text }>Clicked: {click}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            minWidth: 250,
            backgroundColor: '#3333ff',
            padding: 15,
            margin: 10,
        },
        text: {
            color: 'white',
            textAlign: 'center',
        }
    }
)


