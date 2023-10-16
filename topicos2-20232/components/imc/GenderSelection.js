import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import {TEXT_LABEL, ROW, CENTER, BOX} from './styles'

export default function GenderSelection({style, gender, setGender}){
  return (
    <View style={style}>
      <View style={styles.genderSelection}>
        <TouchableOpacity style={[
          styles.genderBox, 
          {backgroundColor: gender === "male" ? "#24263b" : "#323344"},]}
          onPress={ () => setGender("male")}
        >
          <FontAwesome5 name="mars" size={80} color="#51caef"/>
          <Text style={styles.genderTextSelecion}> MALE </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[
          styles.genderBox, 
          {backgroundColor: gender === "female" ? "#24263b" : "#323344"},]}
          onPress={ () => setGender("female")}
        >
          <FontAwesome5 name="venus" size={80} color="#51caef"/>
          <Text style={styles.genderTextSelecion}> FEMALE </Text> 
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    genderSelection: {
        ...ROW
    },
    genderTextSelecion: {
      ...TEXT_LABEL,
      marginTop: 10,
    },
    genderBox: {
      ...CENTER,
      ...BOX,
      margin: 15,
      marginTop: 0,
    }
})