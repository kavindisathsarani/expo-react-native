import { View, Text } from "react-native"
import React from "react"
import { Link, Slot } from "expo-router"
import "./../global.css"

const RootLayout = () => {
  // return (
  //   <View style={{ flex: 1, width: "100%" }} className="bg-green-400">
  //     {/* Outlet - React */}
  //     <Slot />
  //     {/* / */}
  //     {/* /profile */}
  //     {/* /user */}
  //     <View
  //       style={{
  //         width: "100%",
  //         flexDirection: "row",
  //         backgroundColor: "#5abfba",
  //         padding: 50,
  //         justifyContent: "space-evenly"
  //       }}
  //     >
  //       <View style={{ backgroundColor: "#000", padding: 10 }}>
  //         <Link
  //           href={"/"}
  //           style={{
  //             color: "#fff",
  //             padding: 10
  //           }}
  //         >
  //           Home
  //         </Link>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: "#000",
  //           padding: 10
  //         }}
  //       >
  //         <Link
  //           href={"/profile"}
  //           style={{
  //             color: "#fff",
  //             padding: 10
  //           }}
  //         >
  //           Profile
  //         </Link>
  //       </View>
  //       <View
  //         style={{
  //           backgroundColor: "#000",
  //           padding: 10
  //         }}
  //       >
  //         <Link
  //           href={"/user"}
  //           style={{
  //             color: "#fff",
  //             padding: 10
  //           }}
  //         >
  //           User
  //         </Link>
  //       </View>
  //     </View>
  //   </View>
  // )
  return (
  <View style={{ flex: 1, width: "100%" }} className="bg-gradient-to-b from-slate-50 to-slate-100">
    {/* Main Content Area */}
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
    
    {/* Bottom Navigation Bar */}
    <View
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 30, // Extra padding for safe area
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10, // Android shadow
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Home Button */}
        <View style={{ alignItems: "center" }}>
          <Link
            href={"/"}
            style={{
              backgroundColor: "#6366f1", // Indigo
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 20,
              shadowColor: "#6366f1",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
               Home
            </Text>
          </Link>
        </View>

        {/* Profile Button */}
        <View style={{ alignItems: "center" }}>
          <Link
            href={"/profile"}
            style={{
              backgroundColor: "#ec4899", // Pink
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 20,
              shadowColor: "#ec4899",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
                Profile
            </Text>
          </Link>
        </View>

        {/* User Button */}
        <View style={{ alignItems: "center" }}>
          <Link
            href={"/user"}
            style={{
              backgroundColor: "#10b981", // Emerald
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 20,
              shadowColor: "#10b981",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
               User
            </Text>
          </Link>
        </View>
      </View>
    </View>
  </View>
)

}

export default RootLayout
