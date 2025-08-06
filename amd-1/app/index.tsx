import { View, Text } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E3A8A", // blue-900
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#FBBF24", // yellow-400
          marginBottom: 16,
        }}
      >
        🌟 Hello, Explorer!
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#E5E7EB", // gray-200
          textAlign: "center",
          maxWidth: 300,
          lineHeight: 24,
        }}
      >
        Check out the tabs to unlock exciting tools and sections.
      </Text>
    </View>
  );
};

export default Index;