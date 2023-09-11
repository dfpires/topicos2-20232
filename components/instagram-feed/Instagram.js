import {View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, FlatList} from 'react-native'
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import data from "./data";
import Stories from './Stories'
import Article from './Article'

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram() {

  function renderItem({item, index}) {
    if (index == 0){ // é o primeiro article
      return (
        <>
          <View>
            <Stories stories={data.stories} profile={data.profile}/> // monta a linha de stories
          </View>
        //  <Article item={item}/> // mostra o primeiro article
        </>
      )
    }
    else { // não é o primeiro article
      return <Article item={item}/> //mostra o article atual
    }
  }
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
      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}>
      </FlatList>
    </SafeAreaView>
  )
}

const BORDER_BOTTOM: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    ...BORDER_BOTTOM,
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