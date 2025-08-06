import { View, Text } from "react-native"
import React, { use } from "react"
import { Link, Slot, usePathname } from "expo-router"
import "./../global.css"
import FooterNav from "@/components/FooterNav"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthProvider from "@/context/AuthContext"

const RootLayout = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const hideFooter = ["/signup", "/login"].includes(pathname);

  return (
    // <SafeAreaView style={{ flex: 1, width: "100%" }} 
    // className="bg-gradient-to-b">
   
    //     <Slot />
  
    //   {hideFooter ? null : <FooterNav />}
    // </SafeAreaView>

    <AuthProvider>
       <SafeAreaView style={{ flex: 1, width: "100%" }} 
    className="bg-gradient-to-b">
   
        <Slot />
  
      {hideFooter ? null : <FooterNav />}
    </SafeAreaView>
    </AuthProvider>
  )
}

export default RootLayout;