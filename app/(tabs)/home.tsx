import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '@/components/TopBar'
import FilterBar from '@/components/FilterBar'
import ShortsArea from '@/components/ShortsArea'


// rnfe equivalent of rfce

const home = () => {
  return (
    <SafeAreaView>
      <View>
        <TopBar />

        <FilterBar />

        <ShortsArea />

      </View>
    </SafeAreaView>
  )
}

export default home