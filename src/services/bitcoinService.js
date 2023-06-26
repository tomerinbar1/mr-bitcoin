import axios from 'axios'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate() {
  const rate = await axios.get(
    'https://blockchain.info/tobtc?currency=USD&value=1'
  )
  return rate
}

async function getMarketPriceHistory(timeSpan = '1years') {
  const history = await axios.get(
    `https://api.blockchain.info/charts/market-price?timespan=${timeSpan}&format=json&cors=true`
  )
  return history
}

async function getAvgBlockSize() {
  const avgBlockSize = await axios.get(
    'https://api.blockchain.info/charts/avg-block-size?timespan=6months&format=json&cors=true'
  )
  return avgBlockSize
}