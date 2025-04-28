import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CustomRadio = () => {
    const [selectedOption , setSelectedOption] = useState(null)
    const options = ["Male","Female" , "Others"]
  
  return (
    <View style={styles.mainContainer}>
{
    options.map((item, index)=>(
        <>
<TouchableOpacity onPress={()=>setSelectedOption(item)} key={index} style={[styles.optionsStyle , selectedOption === item ? styles.selected : null ]}/>
<Text>{item}</Text>
</>
    ))
}
    </View>
  )
}

export default CustomRadio

const styles = StyleSheet.create({optionsStyle:{
    width:30,
    height:30,
    borderWidth:2,
    borderRadius:50,
    backgroundColor:'white',
    justifyContent:'space-between'
},
selected:{
    borderRadius:50,
    backgroundColor:'cyan',
    width:28,
    height:28
},mainContainer:{flexDirection:'row',width:'100% ',  justifyContent:'space-around' ,alignItems:'center' , marginVertical:10}


})





