
import {SafeAreaView, View, Text, StyleSheet, Animated} from 'react-native'
import {useState, useRef} from 'react'
import Constants from 'expo-constants'
import Actions from './Actions'
import DisplayResult from './DisplayResult'
export default function JaQuemPo(){
  const [result, setResult] = useState("")
  const [canPlay, setCanPlay] = useState(true)
  const [userChoice, setUserChoice] = useState(null)
  const [pcChoice, setPcChoice] = useState(false)
  const fadeAnimation = useRef(new Animated.Value(0)).current
   
  function play(choice){
    // escolha do PC pedra (1), papel (2) e tesoura (3)
    const randomPcChoice = Math.floor((Math.random() * 3)) + 1
    let resultString = ""
    if (choice == 1){
      resultString = randomPcChoice == 3 ? "WIN": "LOOSE" 
    }
    else if (choice == 2){
              resultString = randomPcChoice == 1 ? "WIN": "LOOSE"
    }
    else {
        resultString = randomPcChoice == 2 ? "WIN": "LOOSE"
    }
    // empate
    if (choice == randomPcChoice){
      resultString = "DRAW"
    }
    // alterar as variáveis
    setPcChoice(randomPcChoice)
    setUserChoice(choice)
    // define o valor do resultado com um delay
    setTimeout( () => {
      setResult(resultString)
    }, 300)
    // sequência de animação
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue:0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnimation, {
        toValue:1,
        duration: 300,
        useNativeDriver: true
      }).start()
    ])
    // prepara para a próxima jogada
    setPlay(false)
    setTimeout( () => {
      setPlay(true)
    }, 600)
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
           <DisplayResult userChoice={userChoice} computerChoice={pcChoice}/>
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