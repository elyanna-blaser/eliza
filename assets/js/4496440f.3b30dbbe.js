"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[76612],{32144:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"plugins/merkle","title":"MerkleTrade Plugin for Eliza","description":"This plugin is a sample plugin for interacting with MerkleTrade within the elizaOS ecosystem.","source":"@site/packages/plugins/merkle.md","sourceDirName":"plugins","slug":"/plugins/merkle","permalink":"/eliza/packages/plugins/merkle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"MerkleTrade Plugin for Eliza","permalink":"/eliza/packages/plugins/merkle-eliza-plugin"},"next":{"title":"@elizaos/plugin-messari-ai-toolkit","permalink":"/eliza/packages/plugins/messari-ai-toolkit"}}');var s=i(31085),a=i(71184);const r={},t="MerkleTrade Plugin for Eliza",o={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Actions",id:"actions",level:2},{value:"Development Guide",id:"development-guide",level:2},{value:"Setting Up Development Environment",id:"setting-up-development-environment",level:3},{value:"Dependencies",id:"dependencies",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"merkletrade-plugin-for-eliza",children:"MerkleTrade Plugin for Eliza"})}),"\n",(0,s.jsx)(n.p,{children:"This plugin is a sample plugin for interacting with MerkleTrade within the elizaOS ecosystem."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The plugin requires the following environment variables to be set:"}),"\n",(0,s.jsx)(n.p,{children:"Merkle Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-env",children:"MERKLE_TRADE_NETWORK=               # Must be one of mainnet, testnet\nMERKLE_TRADE_APTOS_PRIVATE_KEY=     # Aptos private key\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": ["@elizaos/plugin-merkle"]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'// The plugin responds to natural language like:\n\nYou: "Open a BTC Long position on the Merkle Trade platform with 1000 pay and 10 leverage."\nAgent: "Successfully market order BTC with 1000 pay and 10 leverage, Transaction: 0x104af5d1a786a2e1a4721a721b2cfccc7e15fa41eec15a489ba1768790adb523"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OPEN_ORDER"}),"\n",(0,s.jsx)(n.li,{children:"GET_PRICE"}),"\n",(0,s.jsx)(n.li,{children:"GET_POSITION"}),"\n",(0,s.jsx)(n.li,{children:"GET_ORDER"}),"\n",(0,s.jsx)(n.li,{children:"GET_BALANCE"}),"\n",(0,s.jsx)(n.li,{children:"FULLY_CLOSE_POSITION"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"development-guide",children:"Development Guide"}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-development-environment",children:"Setting Up Development Environment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository"}),"\n",(0,s.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Build the plugin:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun build\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@elizaos/core: v0.1.9"}),"\n",(0,s.jsx)(n.li,{children:"@merkletrade/ts-sdk: ^v1.0.0"}),"\n",(0,s.jsx)(n.li,{children:"@aptos-labs/ts-sdk: ^v1.26.0"}),"\n",(0,s.jsx)(n.li,{children:"node-cache: 5.1.2"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For more information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.merkle.trade/",children:"Merkle Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://aptos.dev/",children:"Aptos Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://move-language.github.io/move/",children:"Move Language Guide"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var l=i(14041);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);