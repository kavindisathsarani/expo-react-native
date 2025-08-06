import { View, Text } from "react-native"
import React, { use } from "react"
import { Link, Slot, usePathname } from "expo-router"
import "./../global.css"
import FooterNav from "@/components/FooterNav"

const RootLayout = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const hideFooter = ["/signup", "/login"].includes(pathname);

  return (
    <View style={{ flex: 1, width: "100%" }} className="bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Main Content Area */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      
      {/* Bottom Navigation Bar - Only show if not on login/signup */}
      {hideFooter ? null : <FooterNav />}
    </View>
  )
}

export default RootLayout;