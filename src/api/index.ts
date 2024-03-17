import axios from 'axios';
export const fetchTransactions = async (page: number, limit: number) => {
  try {
    const offset = page * limit;
    const response = await axios.get(
      `https://testnet-service.lisk.com/api/v3/transactions?address=lsk6u3fwtbbcauvaupgdq5q9v6h4bvjp86sq7aesu&limit=${limit}&offset=${offset}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};

export const fetchBlocks = async (page: number, limit: number) => {
  try {
    const offset = page * limit;
    const response = await axios.get(
      `https://testnet-service.lisk.com/api/v3/blocks?limit=${limit}&offset=${offset}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error block :', error);
  }
};
