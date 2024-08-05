import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import categories from '../config/categories';
import colors from '../config/colors';

const Categories = ({onChange}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = id => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal
      data={categories}
      contentContainerStyle={{marginVertical: 15}}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{marginRight: 20}}>
          <Text
            style={[
              {color: colors.secondary, fontSize: 20},
              activeCategoryId === item.id && {color: colors.primary},
            ]}>
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: colors.primary,
                borderRadius: 5,
                marginTop: 5,
              }}></View>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
