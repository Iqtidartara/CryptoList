import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useTheme} from '../../assets/theme/Theme';
import {assets} from '../../assets/image/assets';
import CustomBtn from '../../components/CustomBtn';

const ForgetPassword = ({navigation}) => {
  const theme = useTheme();


  const toggleSignIn = () => {
    navigation.navigate('AuthenticationCode');
  }

  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: theme.text,
        paddingTop: 20,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <Text style={[styles.title, {color: theme.background}]}>
          Crypto<Text style={[styles.list, {color: '#FF265D'}]}>List</Text>
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={[styles.Heading, {color: theme.background}]}>Forget Password</Text>
        <Text style={[styles.Discription, {color: theme.background}]}>
          Please fill your detail to access your account.
        </Text>
      </View>
     
      <CustomInput
        placeholder="Enter Your Email"
        svgImage={assets.CrossIcon}
        label="Email"
      />
      <CustomBtn title='Next' onPress={()=>toggleSignIn()}/>
        <View style={{width: '100%',marginTop: 10, alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
          <Text style={{color: theme.background}}>Don't have an account?</Text>
          <TouchableOpacity style={{padding: 3}} onPress={toggleSignIn}>
          <Text style={{color: "#FF811D", fontWeight: 'bold', marginLeft: 5}}>Log In</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Discription: {
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  list: {
    color: '#FF811D',
    fontSize: 32,
  },
});
