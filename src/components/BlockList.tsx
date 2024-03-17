import React from 'react';
import {FlatList} from 'react-native';
import BlockCard from './BlockCard';

const BlockList: React.FC<{data: any[]; onPress: () => void}> = ({
  data,
  onPress,
}) => {
  const renderItem = ({item}: {item: any}) => (
    <BlockCard
      title={item.id}
      subtitle={item.previousBlockId}
      fees={item.networkFee}
      addressId={item.generator.address}
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

export default BlockList;
