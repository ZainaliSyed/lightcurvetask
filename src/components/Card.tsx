import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const Card: React.FC<{
  title: string;
  subtitle: string;
  addressId: string;
  onPress: () => void;
}> = ({title, subtitle, addressId, onPress}) => (
  <Pressable style={styles.cardContainer} onPress={onPress}>
    <Text style={styles.title}>TOKEN :{title}</Text>
    <Text style={styles.addressId}>Sender Address : {addressId}</Text>
    <Text style={styles.success}>FEES : {subtitle}</Text>
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

export default Card;
