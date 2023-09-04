
import {View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {styles} from './styles'
import {validationSchema} from './validation'

const ErrorMessage = ({ errorValue }) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}> {errorValue}</Text>
    </View>
  ) : null;
};

export default function RegisterForm(){
  function onSubmitHandler(values) {
    console.log(values)
  }
  return (
    <>
      <SafeAreaView style={styles.topSafeArea}/>
      <StatusBar style="light"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Register Form </Text>
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
            }}
            validationSchema={validationSchema}>
          {({
              handleChange, values, errors, touched, handleSubmit, handleBlur
          }) => (
              <KeyboardAwareScrollView style={styles.content}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> First Name </Text>
                  <TextInput style={styles.input} value={values.firstName} 
                             onChangeText={handleChange("firstName")}
                             onBlur={handleBlur("firstName")}/> 
                  <ErrorMessage
                    errorValue={touched.firstName && errors.firstName}/>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Last Name </Text>
                  <TextInput style={styles.input} value={values.lastName}
                             onChangeText={handleChange("lastName")}
                             onBlur={handleBlur("lastName")} 
                             /> 
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Email Address </Text>
                  <TextInput style={styles.input} value={values.email}
                             onChangeText={handleChange("email")}
                             onBlur={handleBlur("email")}/>
                  <ErrorMessage
                    errorValue={touched.email && errors.email}/>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Password </Text>
                  <TextInput style={styles.input} value={values.password}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            secureTextEntry={true}/>
                  <ErrorMessage
                    errorValue={touched.password && errors.password}/>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}> Confirm Password </Text>
                  <TextInput style={styles.input} 
                            value={values.confirmPassword}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            secureTextEntry={true}/>
                  <ErrorMessage
                    errorValue={touched.confirmPassword && errors.confirmPassword}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}> SUBMIT </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
          )}

          </Formik>
        </SafeAreaView>
    </>
  )
}