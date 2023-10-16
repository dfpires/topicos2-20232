import {View, StyleSheet} from 'react-native'
import {CENTER, BOX, ROW} from './styles'

export default function WeightAndAgeSelection({style, weight, setWeight, age, setAge}){

  return (
    <View style={style}>
      <View style={styles.weightAndAgeSelection}>
        <View style={styles.weightAndAgeBox}>

        </View>
      </View>  
    </View>
  )  
}
const styles = StyleSheet.create({
  weightAndAgeSelection: {
     ...ROW,
  },
  weightAndAgeBox: {
   ...CENTER,
    ...BOX,
    margin: 15,
  }
})