
import {View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {styles} from './styles'
export default function RegisterForm(){
  function onSubmitHandler(values) {
    console.log(values)
  }
  return (
    <>
      <SafeAreaView style={styles.topSafeArea}/>
        <StatusBar style="light"/>
        <SafeAreaView>
          <View>
            <Text> Register Form </Text>
          </View>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: ""
            }}
            onSubmit={(values, actions) => {
              onSubmitHandler(values, actions)
            }}>
          {({
              handleChange, values, errors, touched, handleSubmit, handleBlur
          }) => (
              <KeyboardAwareScrollView>
                <View>
                  <Text> First Name </Text>
                  <TextInput value={values.firstName} 
                             onChangeText={handleChange("firstName")}
                             onBlur={handleBlur("firstName")}/> 
                </View>
                <View>
                  <Text> Last Name </Text>
                  <TextInput value={values.lastName}
                             onChangeText={handleChange("lastName")}
                             onBlur={handleBlur("lastName")} 
                             /> 
                </View>
                <View>
                  <Text> Email Address </Text>
                  <TextInput value={values.email}
                             onChangeText={handleChange("email")}
                             onBlur={handleBlur("email")}/>
                </View>
                <View>
                  <Text> Password </Text>
                  <TextInput value={values.password}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}/>
                </View>
                <View>
                  <Text> Confirm Password </Text>
                  <TextInput value={values.confirmPassword}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}/>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text> SUBMIT </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
          )}

          </Formik>
        </SafeAreaView>
    </>
  )
}