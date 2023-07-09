import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>Nothing focused on yet </Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you've focused on </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'center',
    padding: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: 'center',
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
