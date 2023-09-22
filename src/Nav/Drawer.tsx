import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Dimensions } from 'react-native';
import Explore from '../Explore/Explore';
import CustomDrawer from './CustomDrawer';

const Draw = createDrawerNavigator();
const Drawer = props => {
  return (

    // creating a drawer navigator//
    
    <Draw.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width / 1.2,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Draw.Screen
        name={'My Network'}
        component={Explore}
        options={{drawerActiveTintColor: 'grey', headerShown: false}}
      />
    </Draw.Navigator>
  );
};

export default Drawer;
