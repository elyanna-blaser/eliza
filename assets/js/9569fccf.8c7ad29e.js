"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[27932],{71184:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var t=i(14041);const r={},l=t.createContext(r);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(l.Provider,{value:e},n.children)}},97926:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"plugins/ton","title":"@elizaos/plugin-ton","description":"A plugin for handling TON (Telegram Open Network) blockchain operations, providing wallet management and transfer capabilities.","source":"@site/packages/plugins/ton.md","sourceDirName":"plugins","slug":"/plugins/ton","permalink":"/eliza/packages/plugins/ton","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ai16z/plugin-thirdweb","permalink":"/eliza/packages/plugins/thirdweb"},"next":{"title":"@elizaos/plugin-trikon","permalink":"/eliza/packages/plugins/trikon"}}');var r=i(31085),l=i(71184);const s={},o="@elizaos/plugin-ton",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"WalletProvider",id:"walletprovider",level:3},{value:"TonConnectProvider",id:"tonconnectprovider",level:3},{value:"TransferAction",id:"transferaction",level:3},{value:"BatchTransferAction",id:"batchtransferaction",level:3},{value:"Create Ton Wallet Action",id:"create-ton-wallet-action",level:3},{value:"Auction Interaction Action",id:"auction-interaction-action",level:3},{value:"Development",id:"development",level:2},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Providers",id:"providers",level:3},{value:"Types",id:"types",level:3},{value:"Configuration Constants",id:"configuration-constants",level:3},{value:"Common Issues/Troubleshooting",id:"common-issuestroubleshooting",level:2},{value:"Issue: Balance Fetching Failure",id:"issue-balance-fetching-failure",level:3},{value:"Issue: Transfer Fails",id:"issue-transfer-fails",level:3},{value:"Security Best Practices",id:"security-best-practices",level:2},{value:"Future Enhancements",id:"future-enhancements",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"elizaosplugin-ton",children:"@elizaos/plugin-ton"})}),"\n",(0,r.jsx)(e.p,{children:"A plugin for handling TON (Telegram Open Network) blockchain operations, providing wallet management and transfer capabilities."}),"\n",(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(e.p,{children:"This plugin provides functionality to:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Manage TON wallets and key derivation"}),"\n",(0,r.jsx)(e.li,{children:"Execute secure token transfers"}),"\n",(0,r.jsx)(e.li,{children:"Query wallet balances and portfolio information"}),"\n",(0,r.jsx)(e.li,{children:"Format and cache transaction data"}),"\n",(0,r.jsx)(e.li,{children:"Interface with TON blockchain via RPC endpoints"}),"\n",(0,r.jsx)(e.li,{children:"Connect TON wallets using TonConnect protocol"}),"\n",(0,r.jsx)(e.li,{children:"Execute secure token transfers"}),"\n",(0,r.jsx)(e.li,{children:"Query wallet connection status"}),"\n",(0,r.jsx)(e.li,{children:"Support multiple wallet applications (like Tonkeeper)"}),"\n",(0,r.jsx)(e.li,{children:"Support QR Code scanning connection"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# you should read the debug.sh first!\n\n# if not provide the apikey, the response may very slow\nexport OPENAI_API_KEY=""\n\n# if not provide the testnet apikey, the transfer action may not stable\n# from https://t.me/toncenter to get your testnet apikey\nexport TON_RPC_API_KEY=""\n\n# nvm use 23 && npm install -g bun\nbash ./packages/plugin-ton/scripts/debug.sh\n'})}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install @elizaos/plugin-ton\n"})}),"\n",(0,r.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(e.p,{children:"The plugin requires the following environment variables:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-env",children:"TON_PRIVATE_KEY=your_mnemonic_phrase  # Required - wallet mnemonic words\nTON_RPC_URL=your_rpc_endpoint  # Optional - defaults to mainnet RPC\nTON_RPC_API_KEY=\nTON_MANIFEST_URL=your_manifest_url  # Required - TonConnect manifest URL\nTON_BRIDGE_URL=your_bridge_url  # Optional - defaults to https://bridge.tonapi.io/bridge\n"})}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:"Import and register the plugin in your Eliza configuration:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { tonPlugin } from '@elizaos/plugin-ton';\n\nexport default {\n  plugins: [tonPlugin],\n  // ... other configuration\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(e.h3,{id:"walletprovider",children:"WalletProvider"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"WalletProvider"})," manages wallet operations and portfolio tracking:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { WalletProvider } from '@elizaos/plugin-ton';\n\n// Initialize the provider\nconst provider = await initWalletProvider(runtime);\n\n// Get wallet balance\nconst balance = await provider.getWalletBalance();\n\n// Get formatted portfolio\nconst portfolio = await provider.getFormattedPortfolio(runtime);\n"})}),"\n",(0,r.jsx)(e.h3,{id:"tonconnectprovider",children:"TonConnectProvider"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"TonConnectProvider"})," manages wallet connection operations:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { TonConnectProvider } from '@elizaos/plugin-ton-connect';\n\n// Initialize provider\nconst provider = await initTonConnectProvider(runtime);\n\n// Connect wallet\nconst universalLink = await provider.connect();\n\n// Check connection status\nconst isConnected = provider.isConnected();\n\n// Disconnect\nawait provider.disconnect();\n"})}),"\n",(0,r.jsx)(e.h3,{id:"transferaction",children:"TransferAction"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"TransferAction"})," handles token transfers:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { TransferAction } from '@elizaos/plugin-ton';\n\n// Initialize transfer action\nconst action = new TransferAction(walletProvider);\n\n// Execute transfer\nconst hash = await action.transfer({\n  recipient: 'EQCGScrZe1xbyWqWDvdI6mzP-GAcAWFv6ZXuaJOuSqemxku4',\n  amount: '1.5',\n});\n"})}),"\n",(0,r.jsx)(e.h3,{id:"batchtransferaction",children:"BatchTransferAction"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"BatchTransferAction"})," handles transfers of NFTs, Jettons and TON in a single transaction:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { BatchTransferTokens } from '@elizaos/plugin-ton';\n\n// Initialize transfer action\nconst action = new BatchTransferTokens(walletProvider);\nconst batchTransfers = {\n  transfers: [\n    {\n      type: 'ton',\n      recipientAddress: '0QBLy_5Fr6f8NSpMt8SmPGiItnUE0JxgTJZ6m6E8aXoLtJHB',\n      amount: '0.1',\n    },\n    {\n      type: 'token',\n      recipientAddress: '0QBLy_5Fr6f8NSpMt8SmPGiItnUE0JxgTJZ6m6E8aXoLtJHB',\n      tokenInd: '0QDIUnzAEsgHLL7YSrvm_u7OYSKw93AQbtdidRdcbm7tQep5',\n      amount: '1',\n    },\n  ],\n};\nconst reports = await batchTransferAction.createBatchTransfer(batchTransfers);\n"})}),"\n",(0,r.jsx)(e.h3,{id:"create-ton-wallet-action",children:"Create Ton Wallet Action"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"CreateTonWallet"})," action handles on-demand wallet creation with encrypted key storage from user-supplied encryption key:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { CreateTonWallet } from '@elizaos/plugin-ton';\n\n// Initialize transfer action\nconst action = new CreateTonWallet(runtime);\n\n// Execute transfer\nconst { walletAddress, mnemonic } = await action.createNewWallet({\n  rpcUrl: 'https://toncenter.com/api/v2/jsonRPC',\n  encryptionPassword: 'GAcAWFv6ZXuaJOuSqemxku4',\n});\n"})}),"\n",(0,r.jsx)(e.h3,{id:"auction-interaction-action",children:"Auction Interaction Action"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"AuctionInteractionTon"})," action handles Auction interactions"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { AuctionInteractionActionTon } from '@elizaos/plugin-ton';\n\n// Initialize transfer action\nconst action = new AuctionInteractionActionTon(walletProvider);\n\nresult = await auctionAction.getAuctionData(auctionAddress);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"development",children:"Development"}),"\n",(0,r.jsx)(e.h3,{id:"building",children:"Building"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsx)(e.h3,{id:"testing",children:"Testing"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,r.jsx)(e.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@ton/ton"}),": Core TON blockchain functionality"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@ton/crypto"}),": Cryptographic operations"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"bignumber.js"}),": Precise number handling"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"node-cache"}),": Caching functionality"]}),"\n",(0,r.jsx)(e.li,{children:"Other standard dependencies listed in package.json"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsx)(e.h3,{id:"providers",children:"Providers"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"walletProvider"}),": Manages TON wallet operations"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"nativeWalletProvider"}),": Handles native TON token operations"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"interface TransferContent {\n  recipient: string;\n  amount: string | number;\n}\n\ninterface WalletPortfolio {\n  totalUsd: string;\n  totalNativeToken: string;\n}\n\ninterface Prices {\n  nativeToken: { usd: string };\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"configuration-constants",children:"Configuration Constants"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"const PROVIDER_CONFIG = {\n  MAINNET_RPC: 'https://toncenter.com/api/v2/jsonRPC',\n  STONFI_TON_USD_POOL: 'EQCGScrZe1xbyWqWDvdI6mzP-GAcAWFv6ZXuaJOuSqemxku4',\n  CHAIN_NAME_IN_DEXSCREENER: 'ton',\n  MAX_RETRIES: 3,\n  RETRY_DELAY: 2000,\n  TON_DECIMAL: BigInt(1000000000),\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"common-issuestroubleshooting",children:"Common Issues/Troubleshooting"}),"\n",(0,r.jsx)(e.h3,{id:"issue-balance-fetching-failure",children:"Issue: Balance Fetching Failure"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Cause"}),": Incorrect RPC endpoint or network connectivity issues"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Solution"}),": Verify ",(0,r.jsx)(e.code,{children:"TON_RPC_URL"})," and network connection"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"issue-transfer-fails",children:"Issue: Transfer Fails"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Cause"}),": Insufficient balance or invalid recipient address"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Solution"}),": Ensure sufficient funds and valid recipient address format"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"security-best-practices",children:"Security Best Practices"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Store private keys securely using environment variables"}),"\n",(0,r.jsx)(e.li,{children:"Validate all input addresses and amounts"}),"\n",(0,r.jsx)(e.li,{children:"Use proper error handling for blockchain operations"}),"\n",(0,r.jsx)(e.li,{children:"Keep dependencies updated for security patches"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"future-enhancements",children:"Future Enhancements"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Wallet Management"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Multi-wallet support"}),"\n",(0,r.jsx)(e.li,{children:"Hardware wallet integration"}),"\n",(0,r.jsx)(e.li,{children:"Advanced key management"}),"\n",(0,r.jsx)(e.li,{children:"Batch transaction processing"}),"\n",(0,r.jsx)(e.li,{children:"Custom wallet contracts"}),"\n",(0,r.jsx)(e.li,{children:"Recovery mechanisms"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Smart Contract Integration"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Contract deployment tools"}),"\n",(0,r.jsx)(e.li,{children:"FunC contract templates"}),"\n",(0,r.jsx)(e.li,{children:"Testing framework"}),"\n",(0,r.jsx)(e.li,{children:"Upgrade management"}),"\n",(0,r.jsx)(e.li,{children:"Gas optimization"}),"\n",(0,r.jsx)(e.li,{children:"Security analysis"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Token Operations"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Jetton creation tools"}),"\n",(0,r.jsx)(e.li,{children:"NFT support enhancement"}),"\n",(0,r.jsx)(e.li,{children:"Token metadata handling"}),"\n",(0,r.jsx)(e.li,{children:"Collection management"}),"\n",(0,r.jsx)(e.li,{children:"Batch transfers"}),"\n",(0,r.jsx)(e.li,{children:"Token standards"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"DeFi Features"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"DEX integration"}),"\n",(0,r.jsx)(e.li,{children:"Liquidity management"}),"\n",(0,r.jsx)(e.li,{children:"Yield farming tools"}),"\n",(0,r.jsx)(e.li,{children:"Price feed integration"}),"\n",(0,r.jsx)(e.li,{children:"Swap optimization"}),"\n",(0,r.jsx)(e.li,{children:"Portfolio tracking"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Developer Tools"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Enhanced debugging"}),"\n",(0,r.jsx)(e.li,{children:"CLI improvements"}),"\n",(0,r.jsx)(e.li,{children:"Documentation generator"}),"\n",(0,r.jsx)(e.li,{children:"Integration templates"}),"\n",(0,r.jsx)(e.li,{children:"Performance monitoring"}),"\n",(0,r.jsx)(e.li,{children:"Testing utilities"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Network Features"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Workchain support"}),"\n",(0,r.jsx)(e.li,{children:"Sharding optimization"}),"\n",(0,r.jsx)(e.li,{children:"RPC management"}),"\n",(0,r.jsx)(e.li,{children:"Network monitoring"}),"\n",(0,r.jsx)(e.li,{children:"Archive node integration"}),"\n",(0,r.jsx)(e.li,{children:"Custom endpoints"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"We welcome community feedback and contributions to help prioritize these enhancements."}),"\n",(0,r.jsx)(e.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsx)(e.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,r.jsx)(e.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(e.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://ton.org/",children:"TON Blockchain"}),": The Open Network blockchain platform"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@ton/ton",children:"@ton/ton"}),": Core TON blockchain functionality"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@ton/crypto",children:"@ton/crypto"}),": Cryptographic operations"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/MikeMcl/bignumber.js/",children:"bignumber.js"}),": Precise number handling"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/node-cache/node-cache",children:"node-cache"}),": Caching functionality"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Special thanks to:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"The TON Foundation for developing and maintaining the TON blockchain"}),"\n",(0,r.jsx)(e.li,{children:"The TON Developer community"}),"\n",(0,r.jsx)(e.li,{children:"The TON SDK maintainers"}),"\n",(0,r.jsx)(e.li,{children:"The Eliza community for their contributions and feedback"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"For more information about TON blockchain capabilities:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.ton.org/",children:"TON Documentation"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://ton.org/dev",children:"TON Developer Portal"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://ton.org/whitepaper.pdf",children:"TON Whitepaper"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://ton.org/docs/#/api",children:"TON API Reference"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"license",children:"License"}),"\n",(0,r.jsx)(e.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}}}]);