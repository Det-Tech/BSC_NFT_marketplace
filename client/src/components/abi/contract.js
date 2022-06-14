import Web3 from 'web3';
import Abi from './abi.json';
import ArtToken from './Arttoken.json';
import MarketPlace from './market_place.json';


export const testnet = `https://rpc-mumbai.matic.today`;
export var web3 = new Web3(new Web3.providers.HttpProvider(testnet));
export var tokenAddress = "0xE5e96c203AfBE8B1e477b3318Bed78c98848ADc1";
export var artTokenAddress = "0xF9F8D7DA4dC42DFee432B670cB6937ACC5EB3a12";
export var MarketTokenAddress = "0x9437a2B638e6FA99bde472475FCd4589e29028eC";
export var myContract = new web3.eth.Contract(Abi, tokenAddress);
export var artContract = new web3.eth.Contract(ArtToken, artTokenAddress);
export var MarketContract = new web3.eth.Contract(MarketPlace, MarketTokenAddress);
export const gasLimitHex = web3.utils.toHex(2200000);
