import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';
import {BlurView} from '@react-native-community/blur';

const {height, width} = Dimensions.get('window');
const sizes = ['S', 'M', 'L'];

const CoffeeDetailsScreen = ({coffee}) => {
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={coffee.image}
            style={{
              height: height / 2 + 20,
              // padding: 20,
              justifyContent: 'space-between',
            }}
            imageStyle={{borderRadius: 30}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="arrow-left" size={20} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="heart" size={20} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={{borderRadius: 20, bottom: 10}}>
              <View
                style={{
                  backgroundColor: '#131212b7',
                  height: 100,
                  top: 10,
                  opacity: 0.9,
                  borderRadius: 18,
                  padding: 30,
                }}>
                {/* <View style={{bottom: 18}}>
                <Text style={{fontSize: 20, color: '#fff', fontWeight: '600'}}>
                  {coffee.name}
                </Text>
                <Text style={{color: 'white', fontSize: 16, top: 4}}>
                  {coffee.included}
                </Text>
                <View style={{flexDirection: 'row', top: 6, padding: 4}}>
                  <Icon name="star" size={20} color={'orange'} style={{}} />
                  <Text style={{color: '#fff', marginLeft: 10}}>
                    {coffee.rating}
                  </Text>
                </View>
              </View> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{bottom: 16}}>
                    <Text
                      style={{fontSize: 20, color: '#fff', fontWeight: '600'}}>
                      {coffee.name}
                    </Text>
                    <Text style={{color: 'white', fontSize: 16}}>
                      {coffee.included}
                    </Text>
                    <View style={{flexDirection: 'row', top: 5}}>
                      <Icon name="star" size={20} color={'orange'} />
                      <Text
                        style={{
                          marginLeft: 10,
                          color: '#fff',
                          fontWeight: '700',
                        }}>
                        {coffee.rating}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginRight: 10,
                          bottom: 20,
                        }}>
                        <View
                          style={{
                            padding: 5,
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            margin: 10,
                          }}>
                          <Icon name="coffee" size={28} color={'orange'} />
                          <Text style={{color: '#fff', fontSize: 12}}>
                            Coffee
                          </Text>
                        </View>
                        <View
                          style={{
                            padding: 5,
                            marginLeft: 10,
                            borderRadius: 15,
                            backgroundColor: 'grey',
                            alignItems: 'center',
                            margin: 10,
                          }}>
                          <Icon name="eye" size={28} color={'orange'} />
                          <Text style={{color: '#fff', fontSize: 12}}>
                            Milk
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{height: 200}}>
            <Text
              style={{color: '#fff', fontWeight: '900', top: 10, margin: 10}}>
              Description
            </Text>
            <Text style={{color: '#fff', top: 6, margin: 10}}>
              {coffee.description}
            </Text>
            <Text
              style={{top: 20, color: '#fff', fontWeight: '900', margin: 10}}>
              Size
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              // top: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {sizes.map((size, index) => (
              <TouchableOpacity
                onPress={() => setActiveSize(size)}
                style={[
                  {
                    borderWidth: 2,
                    borderColor: 'orange',
                    paddingVertical: 5,
                    borderRadius: 10,
                    backgroundColor: 'grey',
                    width: width / 3 - 30,
                    alignItems: 'center',
                  },
                  activeSize == size && {
                    borderColor: 'orange',
                    backgroundColor: 'black',
                  },
                ]}
                key={index}>
                <Text
                  style={[
                    {color: '#fff'},
                    activeSize == size && {color: 'orange'},
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView
        style={{flexDirection: 'row', justifyContent: 'space-between',bottom:20}}>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 30,
          }}>
          <Text style={{color: '#fff', fontSize: 15}}>Price</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontSize: 20}}>₹</Text>
            <Text style={{color: '#fff', fontSize: 20, marginLeft: 10}}>
              {coffee.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: 'orange',
            width: width / 2 + 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
