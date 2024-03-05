import React from 'react';
import { View, Text } from 'react-native';
import Shorts from './Shorts';
import { MaterialIcons } from '@expo/vector-icons';

const ShortsArea: React.FC = () => {
    const shortsData = [
        { imageSource: require('../assets/images/shorts/car1.jpg'), text: 'Learn about this classic' },
        { imageSource: require('../assets/images/shorts/car2.jpg'), text: 'CAR EDIT!!!' },
        { imageSource: require('../assets/images/shorts/cat.jpg'), text: 'Facts about cats!' },
        { imageSource: require('../assets/images/shorts/snake.jpeg'), text: 'Top 10 Interesting facts about Snakes' }
    ];

    return (
        <View style={{
            paddingHorizontal: 8
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5
            }}>
            <MaterialIcons name="video-library" size={24} color="black" />
            <Text style={{
                fontSize: 25,
                fontWeight: '500'
            }}>Shorts</Text>
            </View>
           
            <View style={{
                alignItems:'center',
                paddingHorizontal: 8,
                flexWrap: 'wrap',
                height:700,
                gap: 10
            }}>
            {shortsData.map((short, index) => (
                <Shorts key={index} imageSource={short.imageSource} text={short.text} />
            ))}
            </View>
           
        </View>
    );
};

export default ShortsArea;