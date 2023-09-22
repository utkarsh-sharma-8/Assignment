import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import Drawer from './Drawer';

const Parent = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        width: responsiveWidth(100),
        height: responsiveHeight(100),
      }}>
      <Drawer />
    </SafeAreaView>
  );
};

export default Parent;
