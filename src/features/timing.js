import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="1min" onPress={() => onChangeTime(1)} />
    </View>
      <View style={styles.timingButton}>
      <RoundedButton size={75} title="30s" onPress={() => onChangeTime(0.5)} />
    </View>
      <View style={styles.timingButton}>
      <RoundedButton size={75} title="10s" onPress={() => onChangeTime(0.1)} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
