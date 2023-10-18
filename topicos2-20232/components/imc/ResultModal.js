
import {Modal, SafeAreaView, Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {BOX, TEXT, BUTTON, BUTTON_TEXT} from './styles'
export default function ResultModal ({
      modalVisible, 
      setModalVisible,
      imc, 
      status, 
      interpretation
    }) {

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}> Seu resultado </Text>
            <View style={styles.content}>
              <Text style={[
              styles.bmiStatusText,
              { color: status === "NORMAL" ? "#7ac79d" : "#f5ac40" },
            ]}> {status}</Text>
              <Text style={styles.bmiPointText}> {imc} </Text>
              <Text style={styles.bmiInterpretationText}> {interpretation} </Text>
            </View>
            <TouchableOpacity 
              style={styles.recalculateButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.recalculateButtonText}> RE-CALCULATE </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    marginBottom: 10,
  },
  content: {
    ...BOX,
    justifyContent: "space-evenly",
    margin: 15,
  },
  bmiStatusText: {
    ...TEXT,
    fontSize: 18,
    fontWeight: "bold",
  },
  bmiPointText: {
    ...TEXT,
    fontSize: 70,
    fontWeight: "bold",
  },
  bmiInterpretationText: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "500",
  },
  recalculateButton: {
    ...BUTTON,
    marginTop: 10,
    marginBottom: 15,
  },
  recalculateButtonText: {
    ...BUTTON_TEXT,
  },
});

