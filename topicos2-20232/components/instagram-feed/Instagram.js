import {View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark"/>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24}/>
        </TouchableOpacity>
        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
        <TouchableOpacity>
          <Feather name="send" size={24}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain"
  }
  }
)