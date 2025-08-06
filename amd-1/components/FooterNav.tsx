import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const FooterNav = () => {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4 pb-10 shadow-lg rounded-t-3xl">
      <View className="flex-row justify-between items-center">
        {/* Home Button */}
        <TouchableOpacity
          onPress={() => router.push('/')}
          className="bg-indigo-500 py-3 px-6 rounded-2xl"
        >
          <Text className="text-white text-base font-semibold text-center">
            Home
          </Text>
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity
          onPress={() => router.push('/profile')}
          className="bg-pink-500 py-3 px-6 rounded-2xl"
        >
          <Text className="text-white text-base font-semibold text-center">
            Profile
          </Text>
        </TouchableOpacity>

        {/* User Button */}
        <TouchableOpacity
          onPress={() => router.push('/user')}
          className="bg-emerald-500 py-3 px-6 rounded-2xl"
        >
          <Text className="text-white text-base font-semibold text-center">
            User
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => router.push('/login')}
          className="bg-amber-500 py-3 px-6 rounded-2xl"
        >
          <Text className="text-white text-base font-semibold text-center">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FooterNav