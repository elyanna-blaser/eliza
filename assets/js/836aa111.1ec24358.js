"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[8467],{55160:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"plugins/arthera","title":"@elizaos/plugin-arthera","description":"This plugin provides actions and providers for interacting with Arthera.","source":"@site/packages/plugins/arthera.md","sourceDirName":"plugins","slug":"/plugins/arthera","permalink":"/eliza/packages/plugins/arthera","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ElizaOS Arbitrage Plugin","permalink":"/eliza/packages/plugins/arbitrage"},"next":{"title":"@elizaos/plugin-asterai","permalink":"/eliza/packages/plugins/asterai"}}');var i=r(31085),t=r(71184);const a={},l="@elizaos/plugin-arthera",o={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Default Setup",id:"default-setup",level:3},{value:"Custom RPC URLs",id:"custom-rpc-urls",level:3},{value:"Provider",id:"provider",level:2},{value:"Actions",id:"actions",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Contribution",id:"contribution",level:2},{value:"Running Tests",id:"running-tests",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"elizaosplugin-arthera",children:(0,i.jsx)(n.code,{children:"@elizaos/plugin-arthera"})})}),"\n",(0,i.jsx)(n.p,{children:"This plugin provides actions and providers for interacting with Arthera."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"default-setup",children:"Default Setup"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.strong,{children:"Arthera"})," is enabled. To use it, simply add your private key to the ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ARTHERA_PRIVATE_KEY=your-private-key-here\n"})}),"\n",(0,i.jsx)(n.h3,{id:"custom-rpc-urls",children:"Custom RPC URLs"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the RPC URL is inferred from the ",(0,i.jsx)(n.code,{children:"viem/chains"})," config. To use a custom RPC URL for a specific chain, add the following to your ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ETHEREUM_PROVIDER_<CHAIN_NAME>=https://your-custom-rpc-url\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example usage:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ETHEREUM_PROVIDER_ARTHERA=https://rpc.arthera.net\n"})}),"\n",(0,i.jsx)(n.h2,{id:"provider",children:"Provider"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Wallet Provider"})," initializes with Arthera. It:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Provides the ",(0,i.jsx)(n.strong,{children:"context"})," of the currently connected address and its balance."]}),"\n",(0,i.jsxs)(n.li,{children:["Creates ",(0,i.jsx)(n.strong,{children:"Public"})," and ",(0,i.jsx)(n.strong,{children:"Wallet clients"})," to interact with the supported chain."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,i.jsx)(n.p,{children:"Transfer tokens from one address to another on Arthera. Just specify the:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Amount"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Chain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Recipient Address"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example usage:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Transfer 1 AA to 0xRecipient on arthera.\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"contribution",children:"Contribution"}),"\n",(0,i.jsxs)(n.p,{children:["The plugin contains tests. Whether you're using ",(0,i.jsx)(n.strong,{children:"TDD"})," or not, please make sure to run the tests before submitting a PR."]}),"\n",(0,i.jsx)(n.h3,{id:"running-tests",children:"Running Tests"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"plugin-arthera"})," directory and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bun test\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71184:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(14041);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);