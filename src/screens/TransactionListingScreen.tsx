import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import PaginationFooter from '../components/PaginationFooter';
import TransactionList from '../components/TransactionList';
import {useNavigation} from '@react-navigation/native';
import {fetchTransactions} from '../api/index.ts';

const TransactionListingScreen: React.FC = () => {
  const navigation = useNavigation();
  const limit = 10; // Number of transactions per page
  const [transactions, setTransactions] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions(page, limit);
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchData();
  }, [page]);

  const goToDetailScreen = () => {
    const trans = transactions[0];
    navigation.navigate('TransactionDetail', {
      id: trans.id,
      moduleCommand: trans.moduleCommand,
      fee: trans.fee,
      minFee: trans.minFee,
      address: trans?.sender?.address || '',
    });
  };

  return (
    <View style={{flex: 1}}>
      <TransactionList data={transactions} onPress={goToDetailScreen} />
      <PaginationFooter page={page} setPage={setPage} />
    </View>
  );
};

export default TransactionListingScreen;
