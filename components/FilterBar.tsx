import { View, Text, ScrollView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const FilterBar = () => {

    const categories: string[] = ['Category 1', 'Category 2', 'Category 3','Category 1', 'Category 2', 'Category 3','Category 1', 'Category 2', 'Category 3',];

    return (
        <ScrollView horizontal={true} style={{
            height: 80,
        }}>
              <View style={{
                    height: 40,
                    backgroundColor: 'black',
                    borderRadius: 5,
                    alignItems: 'center',
                    padding: 10,
                    marginHorizontal: 8 // Add margin between each category
                }}>
                   <FontAwesome5 name="compass" size={18} color="white" />
                </View>
            {categories.map((category, index) => (
                <View key={index} style={{
                    height: 40,
                    backgroundColor: 'black',
                    borderRadius: 5,
                    alignItems: 'center',
                    padding: 12,
                    marginHorizontal: 8 // Add margin between each category
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>{category}</Text>
                </View>
            ))}

        </ScrollView>
    )
}

export default FilterBar