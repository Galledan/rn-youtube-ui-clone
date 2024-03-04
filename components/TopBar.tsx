import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const TopBar = () => {
    return (
        <View style={{
            height: 60
        }}>
            <View style={{
                flexDirection: 'row',
                gap: 6
            }}>
                 <AntDesign name="youtube" size={40} color="red" />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 26
            }}>YouTube</Text>
            </View>
           
        </View>
    )
}

export default TopBar