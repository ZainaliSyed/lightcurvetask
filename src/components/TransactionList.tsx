import React from 'react';
import {FlatList} from 'react-native';
import Card from './Card';

const TransactionList: React.FC<{data: any[]; onPress: () => void}> = ({
  data,
  onPress,
}) => {
  const renderItem = ({item}: {item: any}) => (
    <Card
      title={item.moduleCommand}
      subtitle={item.fee}
      addressId={item.sender.address}
      onPress={onPress}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TransactionList;
