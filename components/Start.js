import React from 'react';
import { View, Button } from 'react-native';

export const Start = (props) => {
    if (props.correct == true) {
        return(
            <View>
               <Button title="Restart" onPress={ props.handler } />
            </View>
        )
    }
    else {
        return null;
    }   
}