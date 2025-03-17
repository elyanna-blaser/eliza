"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[69156],{31275:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"plugins/solana","title":"@elizaos/plugin-solana","description":"Core Solana blockchain plugin for Eliza OS that provides essential services and actions for token operations, trading, and DeFi integrations.","source":"@site/packages/plugins/solana.md","sourceDirName":"plugins","slug":"/plugins/solana","permalink":"/eliza/packages/plugins/solana","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Solana Plugin V2 for Eliza \ud83c\udf1f","permalink":"/eliza/packages/plugins/solana-v2"},"next":{"title":"service-speech-tts","permalink":"/eliza/packages/plugins/speech-tts"}}');var r=i(31085),l=i(71184);const t={},a="@elizaos/plugin-solana",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Token Operations",id:"token-operations",level:3},{value:"Trading Operations",id:"trading-operations",level:3},{value:"DeFi Integration",id:"defi-integration",level:3},{value:"Trust &amp; Security",id:"trust--security",level:3},{value:"Security Features",id:"security-features",level:2},{value:"Access Control",id:"access-control",level:3},{value:"Risk Management",id:"risk-management",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Services",id:"services",level:3},{value:"TokenProvider",id:"tokenprovider",level:4},{value:"WalletProvider",id:"walletprovider",level:4},{value:"TrustScoreProvider",id:"trustscoreprovider",level:4},{value:"Actions",id:"actions",level:2},{value:"executeSwap",id:"executeswap",level:3},{value:"transferToken",id:"transfertoken",level:3},{value:"transferSol",id:"transfersol",level:3},{value:"takeOrder",id:"takeorder",level:3},{value:"pumpfun",id:"pumpfun",level:3},{value:"fomo",id:"fomo",level:3},{value:"executeSwapForDAO",id:"executeswapfordao",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Safety &amp; Security",id:"safety--security",level:2},{value:"Best Practices",id:"best-practices",level:3},{value:"Performance Optimization",id:"performance-optimization-1",level:2},{value:"Support",id:"support",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elizaosplugin-solana",children:"@elizaos/plugin-solana"})}),"\n",(0,r.jsx)(n.p,{children:"Core Solana blockchain plugin for Eliza OS that provides essential services and actions for token operations, trading, and DeFi integrations."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Solana plugin serves as a foundational component of Eliza OS, bridging Solana blockchain capabilities with the Eliza ecosystem. It provides crucial services for token operations, trading, portfolio management, and DeFi integrations, enabling both automated and user-directed interactions with the Solana blockchain."}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.h3,{id:"token-operations",children:"Token Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Creation"}),": Deploy new tokens with customizable metadata"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Transfers"}),": Send and receive tokens securely"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Balance Management"}),": Track and manage token balances"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Portfolio Analytics"}),": Real-time portfolio valuation and tracking"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"trading-operations",children:"Trading Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Swaps"}),": Execute trades between tokens using Jupiter aggregator"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Order Management"}),": Place and track token orders"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Price Monitoring"}),": Real-time price feeds and historical data"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automated Trading"}),": Configurable trading strategies and automation"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"defi-integration",children:"DeFi Integration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Liquidity Analysis"}),": Monitor and analyze pool liquidity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Market Making"}),": Automated market making capabilities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Yield Optimization"}),": Smart routing for optimal yields"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Risk Management"}),": Advanced risk scoring and monitoring"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"trust--security",children:"Trust & Security"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Trust Scoring"}),": Dynamic trust score calculation for tokens"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Risk Assessment"}),": Real-time risk evaluation for trades"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance Tracking"}),": Historical performance monitoring"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simulation Mode"}),": Test strategies without real transactions"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"security-features",children:"Security Features"}),"\n",(0,r.jsx)(n.h3,{id:"access-control",children:"Access Control"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Wallet Management"}),": Secure wallet key derivation and storage"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Permission Scoping"}),": Granular control over trading permissions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TEE Integration"}),": Trusted Execution Environment support"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Protection"}),": Secure private key handling"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"risk-management",children:"Risk Management"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Trade Limits"}),": Configurable transaction limits"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Slippage Protection"}),": Automatic slippage controls"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Validation Checks"}),": Multi-level transaction validation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simulation Support"}),": Pre-execution transaction simulation"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @elizaos/plugin-solana\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Configure the plugin by setting the following environment variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const solanaEnvSchema = {\n  WALLET_SECRET_SALT: string(optional),\n  WALLET_SECRET_KEY: string,\n  WALLET_PUBLIC_KEY: string,\n  SOL_ADDRESS: string,\n  SLIPPAGE: string,\n  SOLANA_RPC_URL: string,\n  HELIUS_API_KEY: string,\n  BIRDEYE_API_KEY: string,\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { solanaPlugin } from '@elizaos/plugin-solana';\n\n// Initialize the plugin\nconst runtime = await initializeRuntime({\n  plugins: [solanaPlugin],\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,r.jsx)(n.h4,{id:"tokenprovider",children:"TokenProvider"}),"\n",(0,r.jsx)(n.p,{children:"Manages token operations and information retrieval."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const tokenProvider = new TokenProvider(tokenAddress, walletProvider, cacheManager);\nawait tokenProvider.getTokensInWallet(runtime);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"walletprovider",children:"WalletProvider"}),"\n",(0,r.jsx)(n.p,{children:"Handles wallet operations and portfolio management."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const walletProvider = new WalletProvider(connection, publicKey);\nawait walletProvider.getFormattedPortfolio(runtime);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"trustscoreprovider",children:"TrustScoreProvider"}),"\n",(0,r.jsx)(n.p,{children:"Evaluates and manages trust scores for tokens and trading activities."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const trustScore = await runtime.getProvider('trustScore');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,r.jsx)(n.h3,{id:"executeswap",children:"executeSwap"}),"\n",(0,r.jsx)(n.p,{children:"Executes a token swap using Jupiter aggregator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('EXECUTE_SWAP', {\n  inputTokenSymbol: 'SOL',\n  outputTokenSymbol: 'USDC',\n  amount: 0.1,\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"transfertoken",children:"transferToken"}),"\n",(0,r.jsx)(n.p,{children:"Transfers tokens between wallets."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('SEND_TOKEN', {\n  tokenAddress: 'TokenAddressHere',\n  recipient: 'RecipientAddressHere',\n  amount: '1000',\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"transfersol",children:"transferSol"}),"\n",(0,r.jsx)(n.p,{children:"Transfers SOL between wallets."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('SEND_SOL', {\n  recipient: 'RecipientAddressHere',\n  amount: '1000',\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"takeorder",children:"takeOrder"}),"\n",(0,r.jsx)(n.p,{children:"Places a buy order based on conviction level."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('TAKE_ORDER', {\n  ticker: 'SOL',\n  contractAddress: 'ContractAddressHere',\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pumpfun",children:"pumpfun"}),"\n",(0,r.jsx)(n.p,{children:"Creates and buys tokens on pump.fun."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('CREATE_AND_BUY_TOKEN', {\n  tokenMetadata: {\n    name: 'TokenName',\n    symbol: 'SYMBOL',\n    description: 'Token description',\n    image_description: 'Image description',\n  },\n  buyAmountSol: 0.1,\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fomo",children:"fomo"}),"\n",(0,r.jsx)(n.p,{children:"Creates and buys tokens on fomo.fund."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('CREATE_AND_BUY_TOKEN', {\n  tokenMetadata: {\n    name: 'TokenName',\n    symbol: 'SYMBOL',\n    description: 'Token description',\n    image_description: 'Image description',\n  },\n  buyAmountSol: 0.1,\n  requiredLiquidity: 1000,\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"executeswapfordao",children:"executeSwapForDAO"}),"\n",(0,r.jsx)(n.p,{children:"Executes token swaps for DAO operations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Example usage\nconst result = await runtime.executeAction('EXECUTE_SWAP_DAO', {\n  inputTokenSymbol: 'SOL',\n  outputTokenSymbol: 'USDC',\n  amount: 0.1,\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement token data caching"}),"\n",(0,r.jsx)(n.li,{children:"Configure cache TTL settings"}),"\n",(0,r.jsx)(n.li,{children:"Monitor cache hit rates"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"RPC Optimization"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use connection pooling"}),"\n",(0,r.jsx)(n.li,{children:"Implement request batching"}),"\n",(0,r.jsx)(n.li,{children:"Monitor RPC usage"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Optimize transaction bundling"}),"\n",(0,r.jsx)(n.li,{children:"Implement retry strategies"}),"\n",(0,r.jsx)(n.li,{children:"Monitor transaction success rates"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Node.js 16.x or higher"}),"\n",(0,r.jsx)(n.li,{children:"Solana CLI tools (optional)"}),"\n",(0,r.jsx)(n.li,{children:"Minimum 4GB RAM recommended"}),"\n",(0,r.jsx)(n.li,{children:"Stable internet connection"}),"\n",(0,r.jsx)(n.li,{children:"Access to Solana RPC endpoint"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Wallet Connection Failures"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Error: Failed to connect to wallet\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify RPC endpoint is accessible"}),"\n",(0,r.jsx)(n.li,{children:"Check wallet configuration settings"}),"\n",(0,r.jsx)(n.li,{children:"Ensure proper network selection"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Transaction Errors"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Error: Transaction simulation failed\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check account balances"}),"\n",(0,r.jsx)(n.li,{children:"Verify transaction parameters"}),"\n",(0,r.jsx)(n.li,{children:"Ensure proper fee configuration"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Price Feed Issues"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Error: Unable to fetch price data\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify API key configuration"}),"\n",(0,r.jsx)(n.li,{children:"Check network connectivity"}),"\n",(0,r.jsx)(n.li,{children:"Ensure price feed service status"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"safety--security",children:"Safety & Security"}),"\n",(0,r.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Variables"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Store sensitive keys in environment variables"}),"\n",(0,r.jsx)(n.li,{children:"Use .env.example for non-sensitive defaults"}),"\n",(0,r.jsx)(n.li,{children:"Never commit real credentials to version control"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Limits"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set maximum transaction amounts"}),"\n",(0,r.jsx)(n.li,{children:"Implement daily trading limits"}),"\n",(0,r.jsx)(n.li,{children:"Configure per-token restrictions"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Track failed transaction attempts"}),"\n",(0,r.jsx)(n.li,{children:"Monitor unusual trading patterns"}),"\n",(0,r.jsx)(n.li,{children:"Log security-relevant events"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Recovery"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement transaction rollback mechanisms"}),"\n",(0,r.jsx)(n.li,{children:"Maintain backup RPC endpoints"}),"\n",(0,r.jsx)(n.li,{children:"Document recovery procedures"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-optimization-1",children:"Performance Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement token data caching"}),"\n",(0,r.jsx)(n.li,{children:"Configure cache TTL settings"}),"\n",(0,r.jsx)(n.li,{children:"Monitor cache hit rates"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"RPC Optimization"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use connection pooling"}),"\n",(0,r.jsx)(n.li,{children:"Implement request batching"}),"\n",(0,r.jsx)(n.li,{children:"Monitor RPC usage"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Optimize transaction bundling"}),"\n",(0,r.jsx)(n.li,{children:"Implement retry strategies"}),"\n",(0,r.jsx)(n.li,{children:"Monitor transaction success rates"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,r.jsx)(n.p,{children:"For issues and feature requests, please:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check the troubleshooting guide above"}),"\n",(0,r.jsx)(n.li,{children:"Review existing GitHub issues"}),"\n",(0,r.jsxs)(n.li,{children:["Submit a new issue with:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"System information"}),"\n",(0,r.jsx)(n.li,{children:"Error logs"}),"\n",(0,r.jsx)(n.li,{children:"Steps to reproduce"}),"\n",(0,r.jsx)(n.li,{children:"Transaction IDs (if applicable)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsx)(n.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,r.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://solana.com/",children:"Solana"})," - The core blockchain platform"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/solana-labs/solana-web3.js",children:"Solana Web3.js"})," - Core Solana interactions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://spl.solana.com/",children:"SPL Token"})," - Token program interactions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://jup.ag/",children:"Jupiter"})," - Token swap aggregation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://birdeye.so/",children:"Birdeye"})," - Price feeds and analytics"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://helius.xyz/",children:"Helius"})," - Enhanced RPC services"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://project-serum.github.io/anchor/",children:"Anchor"})," - Smart contract framework"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://fomo.fund/",children:"FOMO"})," - Token creation and trading"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://pump.fun/",children:"Pump.fun"})," - Token creation and trading"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Solana ecosystem and all the open-source contributors who make these integrations possible."}),"\n",(0,r.jsx)(n.li,{children:"The Eliza community for their contributions and feedback."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For more information about Solana blockchain capabilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.solana.com/",children:"Solana Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://solana.com/developers",children:"Solana Developer Portal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://solscan.io/",children:"Solana Network Dashboard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/solana-labs/solana",children:"Solana GitHub Repository"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,r.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(14041);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);