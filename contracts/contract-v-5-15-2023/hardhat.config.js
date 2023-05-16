/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        // enabled: false,
        runs: 200,
        //details: {
        //  yul: false
       // }
      },
    },
  },
};
