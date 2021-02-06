require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember color gesture oppose off similar'; 
let testAccounts = [
"0x19e87a57358abc8a4bdfc7af9bd40ee50e59cf34605ff4f15363373012a79085",
"0x5f50bd81f14dbb26824e329936a160e55184c24cb702bdd8bda9cb60bd1d7185",
"0x065f363f15be6cdd29964e9d4142c6f458aba105872e8c0e49b63385334c93da",
"0x424cc8c91a4d2bb4dcec40edacdba3dbd37518cd991ca24cf3f602c628c69db3",
"0x4a0ce21f858fe8bce6f6c8039d1409281a96b220352a7f021b31800526f0a164",
"0x867947e4c8f2a0f4b3dc9f96c9e31d28cbd8bb1f6142a6d1f6a25ff5616df49f",
"0x06c8530ae572ba25a26199ed2253113b456dee91853dfcfd3d3379d4355722d7",
"0xa5123cbc02ff9c1983c0cd364007b85f933f0603d5d29cfd00ea52e39a0eaf5d",
"0xcc9d7614800b69f70a8c551a28ea1f40ebb9dcd124083a8af1949cc845a3165c",
"0x92104afc64475e6e7aa6e09e49f516edbda5eecd99b24820f642c67608a3e531"
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
            version: '^0.5.11'
        }
    }
};
