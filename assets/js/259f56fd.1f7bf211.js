"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[49238],{70219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"plugins/coinmarketcap","title":"@elizaos/plugin-coinmarketcap","description":"A plugin for Eliza that enables cryptocurrency price checking using the CoinMarketCap API.","source":"@site/packages/plugins/coinmarketcap.md","sourceDirName":"plugins","slug":"/plugins/coinmarketcap","permalink":"/eliza/packages/plugins/coinmarketcap","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Plugin CoinGecko","permalink":"/eliza/packages/plugins/coingecko"},"next":{"title":"@elizaos-plugins/plugin-compass","permalink":"/eliza/packages/plugins/compass"}}');var l=i(31085),s=i(71184);const a={},c="@elizaos/plugin-coinmarketcap",t={},o=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Cryptocurrencies",id:"supported-cryptocurrencies",level:3},{value:"Available Actions",id:"available-actions",level:3},{value:"GET_PRICE",id:"get_price",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Types",id:"types",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Rate Limits",id:"rate-limits",level:2},{value:"Support",id:"support",level:2},{value:"Links",id:"links",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elizaosplugin-coinmarketcap",children:"@elizaos/plugin-coinmarketcap"})}),"\n",(0,l.jsx)(n.p,{children:"A plugin for Eliza that enables cryptocurrency price checking using the CoinMarketCap API."}),"\n",(0,l.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Real-time cryptocurrency price checking"}),"\n",(0,l.jsx)(n.li,{children:"Support for multiple cryptocurrencies (BTC, ETH, SOL, etc.)"}),"\n",(0,l.jsx)(n.li,{children:"Currency conversion (USD, EUR, etc.)"}),"\n",(0,l.jsx)(n.li,{children:"Detailed price and market data"}),"\n",(0,l.jsx)(n.li,{children:"Natural language processing for price queries"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install @elizaos/plugin-coinmarketcap\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Get your API key from ",(0,l.jsx)(n.a,{href:"https://pro.coinmarketcap.com",children:"CoinMarketCap"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Set up your environment variables:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COINMARKETCAP_API_KEY=your_api_key\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Register the plugin in your Eliza configuration:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { CoinMarketCapPlugin } from '@elizaos/plugin-coinmarketcap';\n\n// In your Eliza configuration\nplugins: [\n  new CoinMarketCapPlugin(),\n  // ... other plugins\n];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"The plugin responds to natural language queries about cryptocurrency prices. Here are some examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plaintext",children:'"What\'s the current price of Bitcoin?"\n"Show me ETH price in USD"\n"Get the price of SOL"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"supported-cryptocurrencies",children:"Supported Cryptocurrencies"}),"\n",(0,l.jsx)(n.p,{children:"The plugin supports major cryptocurrencies including:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bitcoin (BTC)"}),"\n",(0,l.jsx)(n.li,{children:"Ethereum (ETH)"}),"\n",(0,l.jsx)(n.li,{children:"Solana (SOL)"}),"\n",(0,l.jsx)(n.li,{children:"USD Coin (USDC)"}),"\n",(0,l.jsx)(n.li,{children:"And many more..."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"available-actions",children:"Available Actions"}),"\n",(0,l.jsx)(n.h4,{id:"get_price",children:"GET_PRICE"}),"\n",(0,l.jsx)(n.p,{children:"Fetches the current price of a cryptocurrency."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// Example response format\n{\n  symbol: "BTC",\n  price: 50000.00,\n  currency: "USD",\n  marketCap: 1000000000000,\n  volume24h: 50000000000,\n  percentChange24h: 2.5\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,l.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Variable"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Required"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"COINMARKETCAP_API_KEY"}),(0,l.jsx)(n.td,{children:"Your CoinMarketCap API key"}),(0,l.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"interface PriceData {\n  price: number;\n  marketCap: number;\n  volume24h: number;\n  percentChange24h: number;\n}\n\ninterface GetPriceContent {\n  symbol: string;\n  currency: string;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,l.jsx)(n.p,{children:"The plugin includes comprehensive error handling for:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Invalid API keys"}),"\n",(0,l.jsx)(n.li,{children:"Rate limiting"}),"\n",(0,l.jsx)(n.li,{children:"Network timeouts"}),"\n",(0,l.jsx)(n.li,{children:"Invalid cryptocurrency symbols"}),"\n",(0,l.jsx)(n.li,{children:"Unsupported currencies"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"rate-limits",children:"Rate Limits"}),"\n",(0,l.jsxs)(n.p,{children:["CoinMarketCap API has different rate limits based on your subscription plan. Please refer to ",(0,l.jsx)(n.a,{href:"https://coinmarketcap.com/api/pricing/",children:"CoinMarketCap's pricing page"})," for detailed information."]}),"\n",(0,l.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,l.jsx)(n.p,{children:"For support, please open an issue in the repository or reach out to the maintainers:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Discord: 0xspit"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://coinmarketcap.com/api/documentation/v1/",children:"CoinMarketCap API Documentation"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/elizaos/eliza/tree/main/packages/plugin-coinmarketcap",children:"GitHub Repository"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var r=i(14041);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);