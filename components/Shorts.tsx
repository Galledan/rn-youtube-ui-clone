import React from 'react';
import { View, Text, StyleSheet,Dimensions, ImageSourcePropType, ImageBackground } from 'react-native';

interface ShortsProps {
    imageSource: ImageSourcePropType;
    text: string;
}

const DeviceWidth = Dimensions.get('window').width;

const Shorts: React.FC<ShortsProps> = ({ imageSource, text }) => {

    

    return (
        <View style={styles.container}>
        <ImageBackground source={imageSource} style={styles.backgroundImage}>
            <Text style={styles.text}>{text}</Text>
        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    backgroundImage: {
        width: (DeviceWidth-40)/2,
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 5
    },
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Shorts;