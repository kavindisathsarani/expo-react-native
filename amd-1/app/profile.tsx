import { View, Text } from "react-native"
import React from "react"

const ProfileScreen = () => {
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       width: "100%"
  //     }}
  //   >
  //     <Text
  //       style={{
  //         fontSize: 40
  //       }}
  //     >
  //       This is Profile screen
  //     </Text>
  //   </View>
  // )

  return (
  <View
    style={{
      flex: 1,
      width: "100%",
      backgroundColor: "#fef7ff", // Light pink background
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    }}
  >
    {/* Profile Icon Container */}
    <View
      style={{
        backgroundColor: "#ec4899",
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        shadowColor: "#ec4899",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 10,
      }}
    >
      <Text style={{ fontSize: 50, color: "#ffffff" }}>👤</Text>
    </View>

    {/* Main Title */}
    <Text
      style={{
        fontSize: 32,
        fontWeight: "bold",
        color: "#ec4899",
        textAlign: "center",
        marginBottom: 16,
      }}
    >
      Profile Screen
    </Text>

    {/* Subtitle */}
    <Text
      style={{
        fontSize: 18,
        color: "#9ca3af",
        textAlign: "center",
        marginBottom: 40,
        lineHeight: 24,
      }}
    >
      Manage your personal information and preferences
    </Text>

    {/* Feature Cards */}
    <View style={{ width: "100%", maxWidth: 300 }}>
      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 20,
          borderRadius: 16,
          marginBottom: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#374151", marginBottom: 8 }}>
           Personal Info
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Update your name, email, and phone number
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 20,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#374151", marginBottom: 8 }}>
           Settings
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Customize your app experience
        </Text>
      </View>
    </View>
  </View>
);

}

export default ProfileScreen
