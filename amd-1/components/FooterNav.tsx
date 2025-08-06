import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const FooterNav = () => {
  return (
    <View className="absolute bottom-0 left-0 right-0 w-full bg-white px-4 py-2.5 pb-4 shadow-lg rounded-t-3xl">
      <View className="flex-row justify-between items-center px-1">
        {/* Home Button */}
        <Link
          href={"/"}
          className="bg-indigo-500 py-2 px-4 rounded-2xl shadow-md"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Home
          </Text>
        </Link>

        {/* Profile Button */}
        <Link
          href={"/profile"}
          className="bg-pink-500 py-2 px-4 rounded-2xl shadow-md"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Profile
          </Text>
        </Link>

        {/* User Button */}
        <Link
          href={"/user"}
          className="bg-emerald-500 py-2 px-4 rounded-2xl shadow-md"
        >
          <Text className="text-white text-sm font-semibold text-center">
            User
          </Text>
        </Link>

        {/* Login Button */}
        <Link
          href={"/login"}
          className="bg-amber-500 py-2 px-4 rounded-2xl shadow-md"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Login
          </Text>
        </Link>
      </View>
    </View>
  )
}

export default FooterNav