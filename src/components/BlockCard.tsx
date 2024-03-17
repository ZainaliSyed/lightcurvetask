import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const BlockCard: React.FC<{
  title: string;
  subtitle: string;
  fees: string;
  addressId: string;
  onPress: () => void;
}> = ({title, subtitle, addressId, fees, onPress}) => (
  <Pressable style={styles.cardContainer} onPress={onPress}>
    <Text style={styles.title}>Block ID : {title}</Text>
    <Text style={styles.title}>Previous Block: {subtitle}</Text>
    <Text style={styles.addressId}>Generator Address : {addressId}</Text>
    <Text style={styles.success}>FEES : {fees}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  success: {
    color: 'green',
    fontSize: 16,
  },
  addressId: {
    fontSize: 14,
    paddingVertical: 5,
  },
});

export default BlockCard;
