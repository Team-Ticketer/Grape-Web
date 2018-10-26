const Caver = require('caver-js')

/**
 * truffle network variables
 */
const FROM = '0xC39b1048d6DD7fB500A2E8F9fFFa0ca33cd4dB5a'
const HOST = 'http://127.0.0.1'
const PORT = '8551'
const URL = `${HOST}:${PORT}`
const NETWORK_ID = '1000'
const GASLIMIT = 20000000

const caver = new Caver(new Caver.providers.HttpProvider(URL))

/**
 * network description
 * @param {string} from - wallet address for deploying
 */
module.exports = {
  networks: {
    klaytn: {
      host: HOST,
      port: PORT,
      network_id: NETWORK_ID,
      from: FROM,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
}
