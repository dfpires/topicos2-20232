
import {SafeAreaView, View, Text, StyleSheet, Animated} from 'react-native'
import {useState, useRef} from 'react'
import Constants from 'expo-constants'
import Actions from './Actions'
export default function JaQuemPo(){
  const [result, setResult] = useState("")
  const [canPlay, setCanPlay] = useState(true)
  const fadeAnimation = useRef(new Animated.Value(0)).current
   
  function play(){
    
  } 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <View style={styles.result}> 
          <Animated.Text 
              style={[styles.resultText, {opacity: fadeAnimation}]}> 
            {result} 
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          { !result ? (
            <Text style={styles.readyText}> Let´s Play </Text>
          ) : (
            <Text> Aqui virá o resultado </Text>
          )
          }
        </View>
        <Actions play={play} canPlay={canPlay}/>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: Constants.statusBarHeight
  },
  content: {
    flex: 1, padding: 15
  },
  result: {
    height: 100, justifyContent: "flex-end", alignItems: "center"
  },
  resultText: {
    fontSize: 48, fontWeight: "bold"
  },
  screen: {
    flex: 1, flexDirection: "row"
  },
  readyText: {
    marginTop: -48, alignSelf: "center",  textAlign: "center",
    width: "100%", fontSize: 48, fontWeight: "bold",
  }
})