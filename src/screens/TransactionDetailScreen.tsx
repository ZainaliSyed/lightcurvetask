// src/screens/TransactionListingScreen.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

interface DetailScreenProps {
  route: {
    params: {
      id: string;
      moduleCommand: string;
      fee: string;
      minFee: string;
      address: string;
    };
  };
}

const TransactionDetailScreen = ({route}: DetailScreenProps) => {
  const {moduleCommand, fee, minFee, address, id} = route.params;
  const [showCopy, setShowCopy] = useState(false);
  const copyToClipboard = () => {
    setShowCopy(true);
    Clipboard.setString(id);
    setTimeout(() => setShowCopy(false), 2000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Module Command:</Text>
      <Text style={styles.value}>{moduleCommand}</Text>

      <Text style={styles.label}>Transaction Address:</Text>
      <Text style={styles.value} onPress={copyToClipboard}>
        {id}
      </Text>

      <Text style={styles.label}>Fee:</Text>
      <Text style={styles.value}>{fee}</Text>

      <Text style={styles.label}>Minimum Fee:</Text>
      <Text style={styles.value}>{minFee}</Text>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{address}</Text>

      {showCopy ? (
        <View style={styles.center}>
          <Text style={styles.copy}>Text Copied</Text>
        </View>
      ) : null}
    </View>
  );
};

export default TransactionDetailScreen;

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
