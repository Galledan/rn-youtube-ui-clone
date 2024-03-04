import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          height: 80,
          paddingTop: 8
        },

        tabBarItemStyle:{
          height: 60
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="share"
        options={{
          title: 'Share',
          tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="upload"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={35} color={color} />,
        }}
      />
       <Tabs.Screen
        name="subs"
        options={{
          title: 'Subscription',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="youtube-subscription" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
