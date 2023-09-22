import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//the pressables after pressing + on explore screen//

const Add = () => {
  const [initial, setInitial] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const animate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    start();
    startAnimation()
  }, [])
  const start=()=>{
    Animated.spring(animate, {
      toValue: 1, // Change this value as needed
      useNativeDriver: true,
    }).start()
  }
  const startAnimation = () => {
    setInitial(initial ? false : true);
      
    Animated.spring(animation, {
      toValue: 1, // Change this value as needed
      useNativeDriver: true,
      delay:300,
    }).start();
  };
  const initialXTranslation = initial ? -100 : 100;
  return (
    <Animated.View style={{position:'relative', marginLeft: 200, marginRight:10,flex: 1, marginTop: 475,transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation+110], // Slide in from the right
        }),
      },
    ],}}>
      <Animated.View style={{flexDirection: 'row-reverse',marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation-240], // Slide in from the right
        }),
      },
    ],}}>
        <View style={styles.iconView}>
          <FontAwesome5 name="heart" size={26} color={'#0e2e43'} />
        </View>
        <Animated.Text style={[styles.text]}>Dating</Animated.Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation-200], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <MaterialCommunityIcons name="ring" size={27} color={'#0e2e43'} />
        </View>
        <Text style={styles.text}>Matrimony</Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0,1],
          outputRange: [0,initialXTranslation-160], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <FontAwesome name="shopping-bag" size={25} color={'#0e2e43'} />
        </View>
        <Text style={styles.text}>Buy-Sell-Rent</Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation-120], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <MaterialCommunityIcons
          name="card-account-details"
          size={27}
          color={'#0e2e43'}
        />
        </View>
        <Text style={styles.text}>Business</Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation-80], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <FontAwesome name="hashtag" size={27} color={'#0e2e43'} />
        </View>
        <Text style={styles.text}>NetClan Groups</Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation-40], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <MaterialCommunityIcons name="briefcase" size={27} color={'#0e2e43'} />
        </View>
        <Text style={styles.text}>Jobs</Text>
      </Animated.View>
      <Animated.View style={{flexDirection: 'row-reverse', marginTop: 10,transform: [
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0,initialXTranslation], // Slide in from the right
        }),
      },
    ]}}>
        <View style={styles.iconView}>
        <Foundation
          name="clipboard-pencil"
          size={27}
          color={'#0e2e43'}
          marginLeft={8}
        />
        </View>
        <Text style={styles.text}>Notes</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default Add;
const styles = StyleSheet.create({
  text: {
    marginRight: 50,
    marginTop:10,
    fontWeight: 'bold',
    color: '#0e2e43',
    position:'absolute'
  },
  iconView: {
    backgroundColor: 'yellow',
    borderRadius: 30,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'yellow',
  },
});
