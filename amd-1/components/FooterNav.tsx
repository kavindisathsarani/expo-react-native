import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router, useRouter, useSegments } from 'expo-router'

const FooterNav = () => {
  const router = useRouter();

  const segment = useSegments();
  const activeRouter = segment[0] ?? ("" as string);

  return (
    
    <View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4 pb-10 shadow-lg rounded-t-3xl">
      <View className="flex-row justify-between items-center flex-wrap gap-2">
        {/* Home Button */}
        <TouchableOpacity
          onPress={() => router.push('/')}
          className="bg-indigo-500 py-3 px-4 rounded-2xl flex-1 min-w-[70px]"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Home
          </Text>
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity
          onPress={() => router.push('/profile')}
          className="bg-pink-500 py-3 px-4 rounded-2xl flex-1 min-w-[70px]"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Profile
          </Text>
        </TouchableOpacity>

        {/* User Button */}
        <TouchableOpacity
          onPress={() => router.push('/user')}
          className="bg-emerald-500 py-3 px-4 rounded-2xl flex-1 min-w-[70px]"
        >
          <Text className="text-white text-sm font-semibold text-center">
            User
          </Text>
        </TouchableOpacity>

        {/* Go to Item Button */}
        <TouchableOpacity
          onPress={() => router.push({
            pathname: "/item/[id]",
            params: { 
              id: "1",
              name: "kavi",
              age: 29,
              address: "galle"
            }
          })}
          className="bg-purple-500 py-3 px-4 rounded-2xl flex-1 min-w-[70px]"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Item
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => router.push('/login')}
          className="bg-amber-500 py-3 px-4 rounded-2xl flex-1 min-w-[70px]"
        >
          <Text className="text-white text-sm font-semibold text-center">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FooterNav