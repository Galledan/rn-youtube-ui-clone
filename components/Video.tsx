import React from 'react';
import { View, Image, Text, ImageSourcePropType, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface VideoProps {
  title: string;
  channelName: string;
  viewCount: string;
  sinceRelease: string;
  thumbnail: ImageSourcePropType;

}

const Video: React.FC<VideoProps> = ({ title, channelName,viewCount,sinceRelease, thumbnail }) => {
  return (
    <View>
      <Image source={thumbnail} style={styles.thumbnail} />
      <View style={styles.container}>
        <FontAwesome name="user-circle" size={26} color="black" />
        <View style={{
          paddingVertical: 10
        }}>
          <Text style={styles.title}>{title}</Text>
          <View style={{
            flexDirection: 'row',
            gap: 10
          }}>
          <Text style={styles.description}>{channelName}</Text>
          <Text style={styles.description}>-</Text>
          <Text style={styles.description}>{viewCount}</Text>
          <Text style={styles.description}>-</Text>
          <Text style={styles.description}>{sinceRelease}</Text>
          </View>
          
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 15,
    alignItems:'center'
  },
  thumbnail: {
    height: 230,
    resizeMode: 'cover',

  },
  title: {
    fontSize:14,
    fontWeight: 'bold'
  },
  description: {
    fontSize:12
  },
});

export default Video;
