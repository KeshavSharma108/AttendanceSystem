import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const CustomInput = ({
  style,
  placeholder = 'enter placeholder name....',
  title = 'Enter Title',
  titleStyle,
  onchange,
value,
  placeholderTextColor = 'grey', 
  ...props
}) => {
  return (
    <View >
        <View style={{marginVertical:10}}>
        <Text style={[{fontSize:17 , fontWeight:'500'}, titleStyle]}>{title}</Text>
        </View>
        
      <TextInput
    onChange={onchange}
    value={value}
        style={[{ borderWidth: 1, height: 40, width: '100%' , padding:10 ,borderRadius:7, elevation:5 ,backgroundColor:'white'}, style]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor} // Use the prop or default value
        {...props}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});