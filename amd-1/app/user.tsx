import { View, Text } from "react-native"
import React from "react"

const UserScreen = () => {
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
  //       This is user screen
  //     </Text>
  //   </View>
  // )

  return (
  <View
    style={{
      flex: 1,
      width: "100%",
      backgroundColor: "#f0fdf4", // Light green background
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    }}
  >
    {/* User Icon Container */}
    <View
      style={{
        backgroundColor: "#10b981",
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        shadowColor: "#10b981",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 10,
      }}
    >
      <Text style={{ fontSize: 50, color: "#ffffff" }}>👥</Text>
    </View>

    {/* Main Title */}
    <Text
      style={{
        fontSize: 32,
        fontWeight: "bold",
        color: "#10b981",
        textAlign: "center",
        marginBottom: 16,
      }}
    >
      User Screen
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
      Connect with other users and manage relationships
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
           Friends
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          View and manage your friend connections
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
           Messages
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Chat with other users in the community
        </Text>
      </View>
    </View>
  </View>
)
}

export default UserScreen
