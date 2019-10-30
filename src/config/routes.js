const NAMESPACE_BLOCK = 'block'
const NAMESPACE_TRANSACTION = 'transaction'

const routes = {
  home: '/',
  block: `/${NAMESPACE_BLOCK}/:blockHash`,
  transaction: `/${NAMESPACE_BLOCK}/:blockHash/${NAMESPACE_TRANSACTION}/:hash`,
}

export const getBlockUrl = ({blockHash}) =>
  routes.block.replace(':blockHash', blockHash)

export const getBlockTransactionUrl = ({blockHash, transactionHash}) =>
  routes
    .transaction
    .replace(':blockHash', blockHash)
    .replace(':transactionHash', transactionHash)

export default routes