import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
interface DetailScreenProps {
  route: {
    params: {
      id: string;
      previousBlockId: string;
      fee: string;
      address: string;
    };
  };
}

const BlockDetailScreen = ({route}: DetailScreenProps) => {
  const {previousBlockId, fee, address, id} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Previous Block:</Text>
      <Text style={styles.value}>{previousBlockId}</Text>

      <Text style={styles.label}>Transaction Address:</Text>
      <Text style={styles.value}>{id}</Text>

      <Text style={styles.label}>Fee:</Text>
      <Text style={styles.value}>{fee}</Text>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{address}</Text>
    </View>
  );
};

export default BlockDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  copy: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'green',
  },
  center: {
    alignItems: 'center',
  },
});
