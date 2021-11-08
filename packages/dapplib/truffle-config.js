require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stone raise stick pulse hunt hat army gaze'; 
let testAccounts = [
"0xf59c6d10320b718258d7c5c6916d407686674a40794ff5f2d87355d959c11386",
"0x9e1fb2375096b4f8e4cf8f4dbe8dd75c33440edce4fe07f7d05ed87e6a4b317b",
"0x7d501e2fd43a766e16db2c45860a1dd9eb98f0c82f1b4b42b216746b44bd56a7",
"0x60c2745fb6f10cb0a599ab5b8f739959dd6126300ed7aee60a269cf6ecb0d73c",
"0xc7a253fb09befaa77e84a4a24cdbaaaf0fa4bd3f48b83253e12191dff8fb01f5",
"0xfa99d89e71f19313cd6d4137397f4ca6aeba19b07e3cbffb67228783246854db",
"0xd3627e54d8dc41e81d753ec089550eb0d54e0a6379803bdd8547201a8c645260",
"0xd2b3c7774cf788cf8564d5fcd88b33b3926411e3625d767cc0a70b51a7a1c5a9",
"0x821695541defd419567ad71b42c90c97209dd7f8cdc6a0219efac57dd616c51d",
"0xf632e2f2b62f8381959e9b5271bc735d7751c582229f8146cc7a73623f08d434"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

