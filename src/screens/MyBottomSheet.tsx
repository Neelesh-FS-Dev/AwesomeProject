import React from 'react';
import {View, Text} from 'react-native';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

function MyBottomSheet() {
  return (
    <BottomSheetScrollView>
      <View>
        <Text>Bottom Sheet Content</Text>
      </View>
    </BottomSheetScrollView>
  );
}

export default MyBottomSheet;
