import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import HeaderStyles from "./HeaderStyles";

interface HeaderI {
  title: string;
  hrefPath: Href;
}

const Header = ({ title, hrefPath }: HeaderI) => {
  return (
    <View style={HeaderStyles.goBackView}>
      <Link href={hrefPath} asChild>
        <View style={HeaderStyles.goBackView}>
          <Link href={hrefPath} asChild>
            <Pressable style={HeaderStyles.backPressable}>
              <View style={HeaderStyles.backFlexViewLeft}>
                <Image
                  style={HeaderStyles.backImage}
                  source={require("../../../assets/images/chevron_left_24dp.png")}
                />
              </View>
              <View style={HeaderStyles.backFlexViewMiddle}>
                <Text style={HeaderStyles.backTitle}>{title}</Text>
              </View>

              <View style={HeaderStyles.backFlexViewRight}></View>
            </Pressable>
          </Link>
          <LinearGradient
            colors={["rgba(117, 117, 117, 0.8)", "transparent"]}
            style={HeaderStyles.backViewGradient}
          />
        </View>
      </Link>
    </View>
  );
};

export default Header;
