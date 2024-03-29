import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import PaginationFooter from '../components/PaginationFooter';
import BlockList from '../components/BlockList.tsx';
import {useNavigation} from '@react-navigation/native';
import {fetchBlocks} from '../api/index.ts';
import io from 'socket.io-client';

const BlockListingScreen: React.FC = () => {
  const navigation = useNavigation();
  const limit = 10; // Number of transactions per page
  const [blocks, setBlocks] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  const [connected, setConnected] = useState(false);
  const socket = io('wss://testnet-service.lisk.com/blockchain');
  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true);
    });
    socket.on('new.block', (block: any) => {
      setBlocks(prevBlocks => [block, ...prevBlocks]);
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlocks(page, limit);
        setBlocks(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchData();
  }, [page]);

  const goToDetailScreen = () => {
    const trans = blocks[0];
    navigation.navigate('BlockDetail', {
      id: trans.id,
      previousBlockId: trans.previousBlockId,
      fee: trans.networkFee,
      address: trans?.generator?.address || '',
    });
  };

  return (
    <View style={{flex: 1}}>
      <BlockList data={blocks} onPress={goToDetailScreen} />
      <PaginationFooter page={page} setPage={setPage} />
    </View>
  );
};

export default BlockListingScreen;
