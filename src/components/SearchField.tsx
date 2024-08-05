import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import colors from '../config/colors';

const SearchField = () => {
  return (
    <View style={{}}>
      {/* <BlurView>
        <TextInput style={{width: '100%', color: '#030d1b', height: 9,borderWidth:7}}  placeholder='Find your Coffee....'/>
      </BlurView> */}
      <TextInput placeholder='Find Your Coffee......' style={{width:'100%',color: colors.white,height:29 }} placeholderTextColor={colors.light} />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
