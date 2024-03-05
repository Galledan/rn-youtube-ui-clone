import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TopBar = () => {
    return (
        <View style={{
            height: 60,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal: 10
        }}>
            <View style={{
                flexDirection: 'row',
                gap: 6,
                alignItems: 'center'
            }}>
                 <AntDesign name="youtube" size={40} color="red" />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 26
            }}>YouTube</Text>
            </View>
           <View style={{
            flexDirection: 'row',
            gap: 15
           }}>
           <FontAwesome5 name="chromecast" size={24} color="black" />
           <MaterialIcons name="notifications" size={24} color="black" />
           <MaterialIcons name="search" size={24} color="black" />
           </View>
        </View>
    )
}

export default TopBar