"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[76679],{55411:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"plugins/starknet","title":"@elizaos/plugin-starknet","description":"Core Starknet blockchain plugin for Eliza OS that provides essential services and actions for token operations, trading, and DeFi integrations.","source":"@site/packages/plugins/starknet.md","sourceDirName":"plugins","slug":"/plugins/starknet","permalink":"/eliza/packages/plugins/starknet","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Plugin Stargaze","permalink":"/eliza/packages/plugins/stargaze"},"next":{"title":"ElizaOS Story Protocol Plugin","permalink":"/eliza/packages/plugins/story"}}');var r=i(74848),t=i(28453);const l={},a="@elizaos/plugin-starknet",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Token Operations",id:"token-operations",level:3},{value:"Trading Operations",id:"trading-operations",level:3},{value:"DeFi Integration",id:"defi-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Actions",id:"actions",level:2},{value:"deployToken",id:"deploytoken",level:3},{value:"transferToken",id:"transfertoken",level:3},{value:"executeSwap",id:"executeswap",level:3},{value:"transferSubdomain",id:"transfersubdomain",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elizaosplugin-starknet",children:"@elizaos/plugin-starknet"})}),"\n",(0,r.jsx)(n.p,{children:"Core Starknet blockchain plugin for Eliza OS that provides essential services and actions for token operations, trading, and DeFi integrations."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Starknet plugin serves as a foundational component of Eliza OS, bridging Starknet blockchain capabilities with the Eliza ecosystem. It provides crucial services for token operations, trading, portfolio management, and DeFi integrations, enabling both automated and user-directed interactions with the Starknet blockchain."}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.h3,{id:"token-operations",children:"Token Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Creation"}),": Deploy new unruggable tokens with customizable metadata"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Transfers"}),": Send and receive tokens securely"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Balance Management"}),": Track and manage token balances"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Portfolio Analytics"}),": Real-time portfolio valuation and tracking"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"trading-operations",children:"Trading Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Swaps"}),": Execute token swaps through aggregated DEX liquidity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Order Management"}),": Place and manage trading orders"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Price Monitoring"}),": Track token prices and market movements"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Trust Score Analysis"}),": Evaluate token and trader reliability"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"defi-integration",children:"DeFi Integration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Liquidity Management"}),": Monitor and manage liquidity positions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Yield Optimization"}),": Track and optimize yield farming opportunities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Risk Assessment"}),": Analyze and monitor DeFi protocol risks"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance Tracking"}),": Monitor investment performance metrics"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The plugin requires the following environment variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"STARKNET_ADDRESS = your_starknet_address;\nSTARKNET_PRIVATE_KEY = your_private_key;\nSTARKNET_RPC_URL = your_rpc_url;  // e.g. https://rpc.starknet.lava.build\n"})}),"\n",(0,r.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,r.jsx)(n.h3,{id:"deploytoken",children:"deployToken"}),"\n",(0,r.jsx)(n.p,{children:"Deploys a new unruggable token on Starknet."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// Example usage\nconst result = await runtime.executeAction(\n    "DEPLOY_STARKNET_UNRUGGABLE_MEME_TOKEN",\n    {\n        name: "TokenName",\n        symbol: "TKN",\n        owner: "OwnerAddressHere",\n        initialSupply: "1000000000000000000",\n    }\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"transfertoken",children:"transferToken"}),"\n",(0,r.jsx)(n.p,{children:"Transfers tokens between wallets."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// Example usage\nconst result = await runtime.executeAction("TRANSFER_TOKEN", {\n    tokenAddress: "TokenAddressHere",\n    recipient: "RecipientAddressHere",\n    amount: "1000",\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"executeswap",children:"executeSwap"}),"\n",(0,r.jsx)(n.p,{children:"Executes a token swap on Starknet."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// Example usage\nconst result = await runtime.executeAction("EXECUTE_STARKNET_SWAP", {\n    sellTokenAddress: "SellTokenAddressHere",\n    buyTokenAddress: "BuyTokenAddressHere",\n    sellAmount: "1000000000000000000",\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"transfersubdomain",children:"transferSubdomain"}),"\n",(0,r.jsx)(n.p,{children:"Creates and transfers a subdomain."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// Example usage\nconst result = await runtime.executeAction("CREATE_SUBDOMAIN", {\n    subdomain: "subdomain.domain.stark",\n    recipient: "RecipientAddressHere",\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Access Control"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validate transaction signers"}),"\n",(0,r.jsx)(n.li,{children:"Implement role-based permissions"}),"\n",(0,r.jsx)(n.li,{children:"Secure private key storage"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Limits"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set maximum transaction amounts"}),"\n",(0,r.jsx)(n.li,{children:"Implement daily trading limits"}),"\n",(0,r.jsx)(n.li,{children:"Configure per-token restrictions"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Track failed transaction attempts"}),"\n",(0,r.jsx)(n.li,{children:"Monitor unusual trading patterns"}),"\n",(0,r.jsx)(n.li,{children:"Log security-relevant events"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Recovery"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement transaction rollback mechanisms"}),"\n",(0,r.jsx)(n.li,{children:"Maintain backup RPC endpoints"}),"\n",(0,r.jsx)(n.li,{children:"Document recovery procedures"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement token data caching"}),"\n",(0,r.jsx)(n.li,{children:"Configure cache TTL settings"}),"\n",(0,r.jsx)(n.li,{children:"Monitor cache hit rates"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"RPC Optimization"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use connection pooling"}),"\n",(0,r.jsx)(n.li,{children:"Implement request batching"}),"\n",(0,r.jsx)(n.li,{children:"Monitor RPC usage"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Batch similar transactions"}),"\n",(0,r.jsx)(n.li,{children:"Optimize gas usage"}),"\n",(0,r.jsx)(n.li,{children:"Handle transaction retries"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(n.p,{children:["Contributions are welcome! Please see the ",(0,r.jsx)(n.a,{href:"CONTRIBUTING.md",children:"CONTRIBUTING.md"})," file for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://starknet.io/",children:"Starknet"})," - The core blockchain platform"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/starknet-io/starknet.js",children:"Starknet.js"})," - Core Starknet interactions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://unruggable.meme/",children:"Unruggable"})," - Token creation and security"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.ekubo.org/",children:"Ekubo"})," - DEX integrations"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://avnu.fi/",children:"Avnu"})," - Token swap aggregation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://birdeye.so/",children:"Birdeye"})," - Price feeds and analytics"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://helius.xyz/",children:"Helius"})," - Enhanced RPC services"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Starknet ecosystem and all the open-source contributors who make these integrations possible."}),"\n",(0,r.jsx)(n.li,{children:"The Eliza community for their contributions and feedback."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For more information about Starknet blockchain capabilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.starknet.io/",children:"Starknet Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://starknet.io/developers",children:"Starknet Developer Portal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://starknet.io/dashboard",children:"Starknet Network Dashboard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/starkware-libs/starknet",children:"Starknet GitHub Repository"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,r.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);