import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';

const FilterBar = () => {

    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);

    const handleCategoryClick = (index: number) => {
        setSelectedCategory(index);
    };

    const categories: string[] = ['All', 'New', 'Games','Sitcom', 'Live', 'Sci-Fi'];

    return (
        <ScrollView horizontal={true} style={{
            height: 50,
        }}>
              <TouchableOpacity  style={{
                    height: 40,
                    backgroundColor: 'gray',
                    borderRadius: 5,
                    alignItems: 'center',
                    padding: 10,
                    marginHorizontal: 8 
                }}>
                   <FontAwesome5 name="compass" size={18} color="black" />
                </TouchableOpacity>
                {categories.map((category, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={{
                        height: 40,
                        backgroundColor: selectedCategory === index ? 'black' : 'gray',
                        borderRadius: 10,
                        alignItems: 'center',
                        padding: 12,
                        marginHorizontal: 8 
                    }}
                    onPress={() => handleCategoryClick(index)}
                >
                    <Text style={{
                        fontSize: 12,
                        color: selectedCategory === index ? 'white' : 'black',
                        fontWeight: 'bold'
                    }}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}

export default FilterBar