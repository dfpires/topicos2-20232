import {SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from "expo-constants";
import {CENTER, TEXT, BUTTON, BUTTON_TEXT} from './styles'
import {useState} from 'react'
import GenderSelection from './GenderSelection'
import HeightSelection from './HeightSelection'
import WeightAndAgeSelection from './WeightAndAgeSelection'
import ResultModal from './ResultModal' 

export default function Imc(){
  const [gender, setGender] = useState("female")
  const [height, setHeight] = useState(150)
  const [weight, setWeight] = useState(50)
  const [age, setAge] = useState(20)
  const [status, setStatus] = useState("NORMAL")
  const [interpretation, setInterpretation] = useState("")
  const [imc, setImc] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  function calculate(){
    const aux = weight / ((height/100) ** 2)
    if (aux < 18.5){
      setStatus("ABAIXO DO PESO");
      setInterpretation("Você está abaixo do peso normal");
    }
    else if (aux < 25){
      setStatus("NORMAL");
      setInterpretation("Você está no peso ideal");
    }
    else {
      setStatus("ACIMA DO PESO");
      setInterpretation("Você está acima do peso normal");
    }
    setImc(aux.toFixed(2))
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}> BMI CALCULATOR </Text>
        </View>
        <GenderSelection
          style={styles.gender}
          gender={gender}
          setGender={setGender}/>

        <HeightSelection
          style={styles.height}
          height={height}
          setHeight={setHeight}
        />

         <WeightAndAgeSelection
          style={styles.weightAndAge}
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
        />

         <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
          <Text style={styles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>

        <ResultModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          imc={imc}
          status={status}
          interpretation={interpretation}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  calculateButton: {
    ...BUTTON,
    marginTop: 10,
    marginBottom: 15,
  },
  calculateButtonText: {
     ...BUTTON_TEXT,
  },
  container: {
      flex: 1, backgroundColor: "#1d2236",
      paddingTop: Constants.statusBarHeight
  },
  content: {
    flex: 1
  },
  header: {
    ...CENTER,
    height: 70,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#16192e"
  },
  headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "500"
  },
  gender: {
    flex: 1,
  },
  height: {
    flex: 1,
  },
  weightAndAge: {
    flex: 1
  }
})