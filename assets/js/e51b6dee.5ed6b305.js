"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[17624],{71184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(14041);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},91733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"plugins/ethstorage","title":"@elizaos/plugin-ethstorage - Plugin for EthStorage","description":"This plugin allows interaction with the EthStorage decentralized storage network using Eliza. By default, it operates on the beta testnet, but you can switch to other testnets by updating the ETHSTORAGERPCURL in the .env file. The mainnet is not yet available.","source":"@site/packages/plugins/ethstorage.md","sourceDirName":"plugins","slug":"/plugins/ethstorage","permalink":"/eliza/packages/plugins/ethstorage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Description","permalink":"/eliza/packages/plugins/email"},"next":{"title":"@elizaos/plugin-evm","permalink":"/eliza/packages/plugins/evm"}}');var i=n(31085),r=n(71184);const a={},o="@elizaos/plugin-ethstorage - Plugin for EthStorage",l={},h=[{value:"Actions",id:"actions",level:2},{value:"Usage &amp; Testing",id:"usage--testing",level:2},{value:"Detailed testing steps",id:"detailed-testing-steps",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"elizaosplugin-ethstorage---plugin-for-ethstorage",children:"@elizaos/plugin-ethstorage - Plugin for EthStorage"})}),"\n",(0,i.jsxs)(t.p,{children:["This plugin allows interaction with the EthStorage decentralized storage network using Eliza. By default, it operates on the beta testnet, but you can switch to other testnets by updating the ",(0,i.jsx)(t.code,{children:"ETHSTORAGE_RPC_URL"})," in the ",(0,i.jsx)(t.code,{children:".env"})," file. The mainnet is not yet available."]}),"\n",(0,i.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"transfer"}),": This action enables the transfer of QKC tokens from the agent's wallet (specified via ",(0,i.jsx)(t.code,{children:"ETHSTORAGE_PRIVATE_KEY"}),") to another wallet. To use, just mention the transfer of tokens to an EthStorage account."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Name: ",(0,i.jsx)(t.code,{children:"SEND_TOKEN"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Message sample: ",(0,i.jsx)(t.code,{children:"Send 100 QKC to 0x341Cb1a94ef69499F97E93c41707B21326C0Cc87"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"submitData"}),': This action enables the submission of any arbitrary data to the EthStorage decentralized storage network. To use, just mention that you need to send "any data" to EthStorage using the key you specified.']}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Name: ",(0,i.jsx)(t.code,{children:"SUBMIT_DATA"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Message sample: ",(0,i.jsx)(t.code,{children:"Submit the following data using key 'my_key' to EthStorage \"Hello World!\""})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"usage--testing",children:"Usage & Testing"}),"\n",(0,i.jsx)(t.h3,{id:"detailed-testing-steps",children:"Detailed testing steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the .env file, set the following values:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"ETHSTORAGE_ADDRESS: The entry contract address for storing data on the EthStorage network (default is set to the beta testnet but can be updated if needed)."}),"\n",(0,i.jsx)(t.li,{children:"ETHSTORAGE_RPC_URL: The RPC endpoint for connecting to the desired EthStorage network (default is set to the beta testnet)."}),"\n",(0,i.jsx)(t.li,{children:"ETHSTORAGE_PRIVATE_KEY: The private key for the agent\u2019s wallet."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Transfer Tokens"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To test the transfer function, you need tokens in your EthStorage account. On the testnet, you can use the ",(0,i.jsx)(t.a,{href:"https://qkc-l2-faucet.eth.sep.w3link.io/",children:"EthStorage Faucet"}),". If you need more tokens, please ping us on ",(0,i.jsx)(t.a,{href:"https://discord.com/invite/xhCwaMp7ps",children:"Discord"}),", and we can send them over."]}),"\n",(0,i.jsxs)(t.li,{children:['Run the agent and prompt it with: "send AMOUNT QKC to any other EthStorage account" - e.g. ',(0,i.jsx)(t.code,{children:"send 1 QKC to 0x341Cb1a94ef69499F97E93c41707B21326C0Cc87"})]}),"\n",(0,i.jsxs)(t.li,{children:["If the transaction is successful, the agent will return the Tx Hash.\nThe tx hash can be checked on the EthStorage block explorer at ",(0,i.jsx)(t.a,{href:"https://explorer.beta.testnet.l2.quarkchain.io",children:"https://explorer.beta.testnet.l2.quarkchain.io"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Submit Data"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To test data submission, you need tokens in your EthStorage account to pay fees. On the testnet, you can use the ",(0,i.jsx)(t.a,{href:"https://qkc-l2-faucet.eth.sep.w3link.io/",children:"EthStorage Faucet"}),". If you need more tokens, please ping us on ",(0,i.jsx)(t.a,{href:"https://discord.com/invite/xhCwaMp7ps",children:"Discord"}),", and we can send them over."]}),"\n",(0,i.jsxs)(t.li,{children:['Run the agent and prompt it with: "Submit the following data using the key KEY to EthStorage DATA" - e.g. ',(0,i.jsx)(t.code,{children:"Submit the following data using the key 'my_key' to EthStorage \"Hello World!\""})]}),"\n",(0,i.jsxs)(t.li,{children:["If the transaction is successful, the agent will return the Tx Hash. The tx hash can be checked on the EthStorage block explorer at ",(0,i.jsx)(t.a,{href:"https://explorer.beta.testnet.l2.quarkchain.io",children:"https://explorer.beta.testnet.l2.quarkchain.io"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.ethstorage.io/",children:"EthStorage Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://ethstorage.io/",children:"Learn more about EthStorage"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ethstorage/",children:"Awesome EthStorage Repo"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);