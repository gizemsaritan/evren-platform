import { ethers } from 'ethers';

export function testWeb3() {
  const provider = new ethers.JsonRpcProvider(
    'https://rpc.sepolia.org'
  );

  return provider.getBlockNumber();
}
