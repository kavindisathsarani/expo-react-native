import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    Alert.alert("Success", "Login successful!");
    setIsLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8fafc", padding: 20 }}>
      {/* Card */}
      <View style={{ backgroundColor: "#fff", padding: 30, borderRadius: 20, width: 300, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 }}>
        
        {/* Title */}
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#1f2937", textAlign: "center", marginBottom: 30 }}>
          Welcome Back
        </Text>

        {/* Email */}
        <TextInput
          style={{ height: 50, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 12, paddingHorizontal: 16, marginBottom: 16, fontSize: 16, backgroundColor: "#f9fafb" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <TextInput
          style={{ height: 50, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 12, paddingHorizontal: 16, marginBottom: 24, fontSize: 16, backgroundColor: "#f9fafb" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        {/* Login Button */}
        <TouchableOpacity
          style={{ height: 50, backgroundColor: "#3b82f6", borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 16 }}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        {/* Links */}
        <TouchableOpacity onPress={() => Alert.alert("Info", "Forgot password!")}>
          <Text style={{ color: "#3b82f6", textAlign: "center", fontSize: 14, marginBottom: 16 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#6b7280", fontSize: 14 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => Alert.alert("Info", "Sign up!")}>
            <Text style={{ color: "#3b82f6", fontSize: 14, fontWeight: "600" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;