import React from 'react';
import { View } from 'react-native';
import Video from './Video'; 

const mockData = [
  {
    title: 'Video 1',
    channelName: 'Channel 1',
    viewCount: '15 Mn Views',
    sinceRelease: '2 years ago',
    thumbnail: require('../assets/images/thumbs/thumb1.png'),
    
  },
  {
    title: 'Video 1',
    channelName: 'Channel 1',
    viewCount: '15 Mn Views',
    sinceRelease: '2 years ago',
    thumbnail: require('../assets/images/thumbs/thumb1.png'),
    
  },
  {
    title: 'Video 1',
    channelName: 'Channel 1',
    viewCount: '15 Mn Views',
    sinceRelease: '2 years ago',
    thumbnail: require('../assets/images/thumbs/thumb1.png'),
    
  },
  {
    title: 'Video 1',
    channelName: 'Channel 1',
    viewCount: '15 Mn Views',
    sinceRelease: '2 years ago',
    thumbnail: require('../assets/images/thumbs/thumb1.png'),
    
  },

  
];

const VideoArea: React.FC = () => {
  return (
    <View>
    {mockData.map((item, index) => (
      <Video
        key={index.toString()}
        title={item.title}
        channelName={item.channelName}
        viewCount={item.viewCount}
        sinceRelease={item.sinceRelease}
        thumbnail={item.thumbnail}
      />
    ))}
  </View>
  );
};

export default VideoArea;
