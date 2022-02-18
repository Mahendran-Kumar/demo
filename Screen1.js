import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Screen1 extends Component
{
    
    render()
    {
        return(
            <View>
                <Text style={{textAlign:'center', fontSize: 30}}>Screen1</Text>
                <Button title="Show" onPress={()=>navigation.navigate('Screen2')}></Button>
            </View>
        );
    }
}