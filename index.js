// https://mainnet.infura.io/v3/2db27373c6d240e1a8d0aff448039837
// private key, real account
// 573a5a01689a616eb4bef64c14b0d5eb0aae3986c11cbb737842e746e0bed7d8
const { ethers } = require('ethers')

const itx = new ethers.providers.InfuraProvider(
    'ropsten', // or 'mainnet', 'ropsten', 'rinkeby', 'kovan', 'goerli'
    '2db27373c6d240e1a8d0aff448039837'
)
//private key is for the account 0x4F5Af9D8595A491b53A38C97ad904Efd0Bd42Ebb

const signer = new ethers.Wallet("573a5a01689a616eb4bef64c14b0d5eb0aae3986c11cbb737842e746e0bed7d8", itx)
async function getBalance() {
    response = await itx.send('relay_getBalance', [signer.address])
    console.log(`Your current ITX balance is ${response.balance}`)
}

async function deposit(signer) {
    const tx = await signer.sendTransaction({
        // ITX deposit contract (same address for all public Ethereum networks)
        to: '0x015C7C7A7D65bbdb117C573007219107BD7486f9',
        // Choose how much ether you want to deposit to your ITX gas tank
        value: ethers.utils.parseUnits('0.1', 'ether')
    })
    // Waiting for the transaction to be mined
    await tx.wait()
}
async function run() {
    await getBalance();
    // await deposit(signer);
}
run();
