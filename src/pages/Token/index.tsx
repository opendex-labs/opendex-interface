import React from 'react'

export default function Token() {

const PageWrapper = {
  margin: '20px',
  fontSize: '11pt',
  width: '720px',
  maxWidth: '80vw',
  lineHeight: '1.3',
}

const Title = {
  fontSize: '32px',
  margin: '10px 0px 10px 0px'
}

const Header = {
  fontSize: '18px',
  margin: '10px 0px 10px 0px'
}

const Spacer = {
  margin: '20px 0px 20px 0px'
}

const Button = {
  background: 'rgba(0, 0, 0, 0.2)',
  padding: '20px',
  textDecoration: 'none',
  margin: '10px 0px 10px 0px'
}

  return (
    <div id='page-wrapper' style={PageWrapper}>
      <div id='main-title' style={Title}>ODX Token</div>
        <div id='body'>
          ODX Token is OpenDEX decentralized ERC20 token, deployed on Nova Network.
          It has a max. supply of <b>9,100</b>, and has been pooled with SNT received
          from community donations. All the liquidity was pooled and locked with half
          of the supply, with on-chain proof. The other half of the supply has been
          split in two, with one share being airdropped to donating wallets, and
          the other share has been sent to Nova Network. No tokens were withheld by
          the protocol, and the supply is already 100% in circulation. It is a truly
          decentralized token, with intrinsic value, and locked liquidity.
        </div>
        <div id='token-info' style={Spacer}>
        <b>Name:</b> OpenDEX Token <br />
        <b>Symbol:</b> ODX <br />
        <b>Total Supply:</b> 9,100 <br />
        <b>Supply in Circulation:</b> 9,100 <br />
        <b>Token Address:</b> <a
          href='https://novascan.io/address/0xe36118ccfa51e4caf750dfaeaf5c6cf250759acb'
          target='_blank'
          >0xe36118ccfa51e4caf750dfaeaf5c6cf250759acb</a> <br />
        </div>
        <div id='txns' style={Spacer}>
          <div style={Header}>Proof of Liquidity:</div>
          <b>Liquidity Pooling:</b> <br />
          <a
            href='https://novascan.io/transaction/0x4f7a2aa5202014abb2b700105c12188d0f155fb1438be8814253a218fbc8fb72'
            target='_blank'
            >0x4f7a2aa5202014abb2b700105c12188d0f155fb1438be8814253a218fbc8fb72</a> <br />
          <br /><br />
          <b>Liquidity Locking:</b> <br />
          <a
            href='https://novascan.io/transaction/0x61cc0aeef191066c4d3705090d9d77bd5a4a591ed03fe9bcb578415f959a5b46'
            target='_blank'
            >0x61cc0aeef191066c4d3705090d9d77bd5a4a591ed03fe9bcb578415f959a5b46</a> <br />
        </div>
        <div id='button-wrapper' style={Spacer}>
          <br />
          <span id='trade-button' style={Button}>
          <a href='/swap' style={{ textDecoration: 'none' }}><b>BUY ODX</b></a>
          </span>
        </div>
    </div>
  )
}
