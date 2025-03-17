"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[58666],{43398:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"plugins/advanced-sdk-ts","title":"Coinbase Advanced API TypeScript SDK","description":"Welcome to the Coinbase Advanced API TypeScript SDK. This TypeScript project was created to allow developers to easily plug into the Coinbase Advanced API.","source":"@site/packages/plugins/advanced-sdk-ts.md","sourceDirName":"plugins","slug":"/plugins/advanced-sdk-ts","permalink":"/eliza/packages/plugins/advanced-sdk-ts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-abstract","permalink":"/eliza/packages/plugins/abstract"},"next":{"title":"@elizaos/plugin-agentkit","permalink":"/eliza/packages/plugins/agentkit"}}');var s=r(31085),i=r(71184);const a={},o="Coinbase Advanced API TypeScript SDK",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Build and Use",id:"build-and-use",level:2},{value:"Coinbase Developer Platform (CDP) API Keys",id:"coinbase-developer-platform-cdp-api-keys",level:2},{value:"Importing the RESTClient",id:"importing-the-restclient",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Making Requests",id:"making-requests",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"coinbase-advanced-api-typescript-sdk",children:"Coinbase Advanced API TypeScript SDK"})}),"\n",(0,s.jsxs)(n.p,{children:["Welcome to the Coinbase Advanced API TypeScript SDK. This TypeScript project was created to allow developers to easily plug into the ",(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/docs/welcome",children:"Coinbase Advanced API"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Coinbase Advanced Trade offers a comprehensive API for traders, providing access to real-time market data, order management, and execution. Elevate your trading strategies and develop sophisticated solutions using our powerful tools and features."}),"\n",(0,s.jsxs)(n.p,{children:["For more information on all the available REST endpoints, see the ",(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/reference/",children:"API Reference"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"build-and-use",children:"Build and Use"}),"\n",(0,s.jsx)(n.p,{children:"To build the project, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: To avoid potential issues, do not forget to build your project again after making any changes to it."})}),"\n",(0,s.jsxs)(n.p,{children:["After building the project, each ",(0,s.jsx)(n.code,{children:".ts"})," file will have its ",(0,s.jsx)(n.code,{children:".js"})," counterpart generated."]}),"\n",(0,s.jsx)(n.p,{children:"To run a file, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"node dist/{INSERT-FILENAME}.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For example, a ",(0,s.jsx)(n.code,{children:"main.ts"})," file would be run like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node dist/main.js\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"coinbase-developer-platform-cdp-api-keys",children:"Coinbase Developer Platform (CDP) API Keys"}),"\n",(0,s.jsxs)(n.p,{children:["This SDK uses Cloud Developer Platform (CDP) API keys. To use this SDK, you will need to create a CDP API key and secret by following the instructions ",(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/docs/getting-started",children:"here"}),".\nMake sure to save your API key and secret in a safe place. You will not be able to retrieve your secret again."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"importing-the-restclient",children:"Importing the RESTClient"}),"\n",(0,s.jsx)(n.p,{children:"All the REST endpoints are available directly from the client, therefore it's all you need to import."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"import { RESTClient } from './rest';\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Authentication of CDP API Keys is handled automatically by the SDK when making a REST request."}),"\n",(0,s.jsx)(n.p,{children:"After creating your CDP API keys, store them using your desired method and simply pass them into the client during initialization like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"const client = new RESTClient(API_KEY, API_SECRET);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"making-requests",children:"Making Requests"}),"\n",(0,s.jsx)(n.p,{children:"Here are a few examples requests:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getaccounts",children:"List Accounts"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"client\n    .listAccounts({})\n    .then((result) => {\n        console.log(result);\n    })\n    .catch((error) => {\n        console.error(error.message);\n    });\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getproduct",children:"Get Product"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'client\n    .getProduct({productId: "BTC-USD"})\n    .then((result) => {\n        console.log(result);\n    })\n    .catch((error) => {\n        console.error(error.message);\n    });\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_postorder",children:"Create Order"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"$10 Market Buy on BTC-USD"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'client\n    .createOrder({\n        clientOrderId: "00000001",\n        productId: "BTC-USD",\n        side: OrderSide.BUY,\n        orderConfiguration:{\n            market_market_ioc: {\n                quote_size: "10"\n            }\n        }\n    })\n    .then((result) => {\n        console.log(result);\n    })\n    .catch((error) => {\n        console.error(error.message);\n    });\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},71184:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(14041);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);