import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Props } from '../onboardingScreen'

const ExportDataSent: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('/Users/rohit3345ksChicmic/ExpenseTrackerdemo/src/images/Illustration.png')} style={ styles.icon} />
      <Text style={styles.description}>Check your email, we send you the financial report.
        In certain cases, it might take a little longer, depending on the time period and the volume of activity.</Text>
      <TouchableOpacity style={ styles.button} onPress={()=>navigation.navigate('Home',{email:'abc'})}><Text style={styles.buttonText}>Back TO Home</Text></TouchableOpacity>
    </View>
  )
}

export default ExportDataSent
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  icon: {
    height: 312,
    width: 312,
    top: 76,
    left:31,
  },
  description: {
    top:150,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    lineHeight:19.36,
  },
  button: {
    height: 56,
    width: 380,
    top: 450,
    left: 16,
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
padding:15,
    textAlign: 'center',
    color: 'white',
 
  }
 
  

})