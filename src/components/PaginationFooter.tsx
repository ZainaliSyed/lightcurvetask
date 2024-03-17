import React from 'react';
import {View, Button} from 'react-native';

const PaginationFooter: React.FC<{
  page: number;
  setPage: (page: number) => void;
}> = ({page, setPage}) => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    }}>
    <Button
      title="Previous Page"
      onPress={() => setPage(page - 1)}
      disabled={page === 1}
    />
    <Button title="Next Page" onPress={() => setPage(page + 1)} />
  </View>
);

export default PaginationFooter;
