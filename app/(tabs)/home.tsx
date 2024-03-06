import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '@/components/TopBar'
import FilterBar from '@/components/FilterBar'
import ShortsArea from '@/components/ShortsArea'
import VideoArea from '@/components/VideoArea'


// rnfe equivalent of rfce

const home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopBar />

        <FilterBar />

        <ShortsArea />
        <VideoArea />
      </ScrollView>
    </SafeAreaView>
  )
}

export default home