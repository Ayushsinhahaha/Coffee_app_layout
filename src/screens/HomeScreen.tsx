import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SPACING from '../config/SPACING';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlurView} from '@react-native-community/blur';
import colors from '../config/colors';
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import coffee from '../config/coffee';

const avatar = require('../assets/avatar.png');
const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  return (
    <SafeAreaView style={{padding: 5}}>
      <ScrollView
        style={{
          padding: SPACING,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: 'hidden',
              width: SPACING * 4,
              height: SPACING * 4,
            }}>
            <BlurView
              style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="bars" color={colors.secondary} size={SPACING * 2.5} />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <BlurView
              style={{height: '100%', width: '100%', padding: SPACING / 2}}>
              <Image
                source={avatar}
                style={{height: '100%', width: '100%', borderRadius: 20}}
              />
            </BlurView>
          </View>
        </View>
        <View style={{width: '80%', marginVertical: 35}}>
          <Text style={{color: colors.white, fontSize: 35}}>
            Find the best coffee for you
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <BlurView > */}
          <TextInput
            placeholder="Find your Coffee"
            style={{
              width: '100%',
              color: colors.secondary,
              fontSize: 17,
              padding: 10,
              paddingLeft: 40,
            }}
            placeholderTextColor={colors.light}
          />
          {/* </BlurView> */}
          <Icon
            name="search"
            style={{position: 'absolute', left: 10}}
            color={colors.light}
            size={20}
          />
        </View>
        <Categories onChange={(id)=>setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {
          coffee.filter(coffee=>{
            if(activeCategoryId===null){
                return true;
            }
            return coffee.categoryId === activeCategoryId;
          }).map(coffee => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - 20,
                marginBottom: 10,
                borderRadius: 20,
              }}>
              {/* <BlurView blurAmount={90}> */}
              <TouchableOpacity
                style={{
                  height: 150,
                  width: '100%',
                  backgroundColor: colors['dark-light'],
                }}>
                <Image
                  source={coffee.image}
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: colors['white-smoke'],
                    borderBottomStartRadius: 30,
                    overflow: 'hidden',
                    borderTopEndRadius: 20,
                  }}>
                  <Icon name="star" size={17} color={colors.primary} />
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 16,
                      fontWeight: '800',
                      color: colors.white,
                    }}>
                    {coffee.rating}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                style={{
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 18,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                {coffee.name}
              </Text>
              <Text style={{color: colors.primary, fontSize: 14,fontWeight:'800'}}>
                {coffee.included}
              </Text>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: colors.white, fontSize: 15}}>Rs</Text>
                  <Text
                    style={{color: colors.white, fontSize: 16, marginLeft: 10}}>
                    {coffee.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Icon name="plus" size={25} color={colors.white} />
                </TouchableOpacity>
              </View>
              {/* </BlurView> */}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
