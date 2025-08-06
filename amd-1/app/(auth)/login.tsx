import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";


const Login = () => {
  const { isUser, login, logout } = useAuth();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if(username === "admin" && password === "1234") {
     login();
     router.replace("/")
    }

    if (!username || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      Alert.alert("Login Failed", "Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    setUsername("");
    setPassword("");
  };

  return (
    <View className="flex-1 w-full bg-slate-100 justify-center items-center px-5">
      {/* Login Form */}
      <View className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
          {isUser ? "Welcome!" : "Login"}
        </Text>

        {!isUser ? (
          <>
            {/* Username Input */}
            <Text className="text-base font-semibold text-gray-700 mb-2">
              Username
            </Text>
            <TextInput
              className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-5 bg-gray-50 text-base"
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              editable={!isLoading}
              placeholderTextColor="#9CA3AF"
            />

            {/* Password Input */}
            <Text className="text-base font-semibold text-gray-700 mb-2">
              Password
            </Text>
            <TextInput
              className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-6 bg-gray-50 text-base"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!isLoading}
              placeholderTextColor="#9CA3AF"
            />

            {/* Login Button */}
            <TouchableOpacity
              className={`w-full h-12 rounded-lg justify-center items-center mb-4 ${
                isLoading ? "bg-gray-400" : "bg-blue-600"
              }`}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text className="text-white text-base font-bold">
                {isLoading ? "Signing In..." : "Login"}
              </Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity className="items-center mt-3">
              <Text className="text-blue-600 text-sm">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          /* Logged In State */
          <View className="items-center">
            <View className="w-16 h-16 bg-green-500 rounded-full justify-center items-center mb-5">
              <Text className="text-white text-2xl font-bold">✓</Text>
            </View>
            
            <Text className="text-gray-600 text-lg text-center mb-3">
              You are logged in successfully!
            </Text>
            
            <Text className="text-gray-400 text-sm text-center mb-6">
              Username: {username}
            </Text>
            
            <TouchableOpacity
              className="w-full h-12 bg-red-600 rounded-lg justify-center items-center"
              onPress={handleLogout}
            >
              <Text className="text-white text-base font-bold">
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Footer */}
        {!isUser && (
          <View className="mt-8 pt-5 border-t border-gray-200 items-center">
            <Text className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Text className="text-blue-600 font-semibold">
                Sign Up
              </Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;