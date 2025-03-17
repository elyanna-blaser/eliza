"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[98465],{7509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"plugins/ankr","title":"ankr","description":"Ankr Plugin Guide","source":"@site/packages/plugins/ankr.md","sourceDirName":"plugins","slug":"/plugins/ankr","permalink":"/eliza/packages/plugins/ankr","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-allora","permalink":"/eliza/packages/plugins/allora"},"next":{"title":"@elizaos/plugin-anyone","permalink":"/eliza/packages/plugins/anyone"}}');var c=t(31085),i=t(71184);const r={},s=void 0,l={},o=[{value:"Ankr Plugin Guide",id:"ankr-plugin-guide",level:2},{value:"Available Actions",id:"available-actions",level:3},{value:"1. Blockchain Information",id:"1-blockchain-information",level:4},{value:"2. Wallet &amp; Balance Queries",id:"2-wallet--balance-queries",level:4},{value:"3. NFT Operations",id:"3-nft-operations",level:4},{value:"4. Token Operations",id:"4-token-operations",level:4},{value:"5. Transaction Queries",id:"5-transaction-queries",level:4},{value:"Tag Reference",id:"tag-reference",level:3},{value:"Important Notes",id:"important-notes",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"ankr-plugin-guide",children:"Ankr Plugin Guide"}),"\n",(0,c.jsx)("div",{align:"center",children:(0,c.jsx)("h3",{children:"\ud83d\udd17 Blockchain Data Query Interface"})}),"\n",(0,c.jsx)(n.h3,{id:"available-actions",children:"Available Actions"}),"\n",(0,c.jsx)(n.p,{children:"The Ankr plugin provides comprehensive blockchain data querying capabilities through natural language prompts. Below are the supported actions and their usage:"}),"\n",(0,c.jsx)(n.h4,{id:"1-blockchain-information",children:"1. Blockchain Information"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# Get blockchain stats\nShow me stats for [chain]eth[/chain]\n\n# Get top currencies\nShow me the top currencies on [chain]eth[/chain]\n"})}),"\n",(0,c.jsx)(n.h4,{id:"2-wallet--balance-queries",children:"2. Wallet & Balance Queries"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# Check wallet balance\nShow me the balance for wallet [wallet]0x6B0031518934952C485d5a7E76f1729B50e67486[/wallet] on [chain]eth[/chain]\n\n# View wallet interactions\nShow me interactions for the wallet [wallet]0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45[/wallet]\n"})}),"\n",(0,c.jsx)(n.h4,{id:"3-nft-operations",children:"3. NFT Operations"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# Get NFT holders\nShow me holders of NFT contract [contract]0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258[/contract] token [token]112234[/token] on [chain]eth[/chain]\n\n# Get NFT metadata\nShow me the metadata for NFT [token]1234[/token] at contract [contract]0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d[/contract] [chain]eth[/chain]\n\n# List NFTs by owner\nShow me all NFTs owned by wallet [wallet]0x1234567890123456789012345678901234567890[/wallet] on [chain]eth[/chain]\n\n# View NFT transfers\nShow me NFT transfers for contract [contract]0xd8da6bf26964af9d7eed9e03e53415d37aa96045[/contract] [chain]eth[/chain] [fromtimestamp]1655197483[/fromtimestamp][totimestamp]1671974699[/totimestamp]\n"})}),"\n",(0,c.jsx)(n.h4,{id:"4-token-operations",children:"4. Token Operations"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# Get token holders\nShow me holders for contract [contract]0xf307910A4c7bbc79691fD374889b36d8531B08e3[/contract] on [chain]bsc[/chain]\n\n# Get token holder count\nHow many holders does [contract]0xdAC17F958D2ee523a2206206994597C13D831ec7[/contract] have? [chain]eth[/chain]\n\n# Check token price\nWhat's the current price of [contract]0x8290333cef9e6d528dd5618fb97a76f268f3edd4[/contract] token [chain]eth[/chain]\n\n# View token transfers\nShow me recent contract [contract]0xd8da6bf26964af9d7eed9e03e53415d37aa96045[/contract] transfers [chain]eth[/chain] from [fromtimestamp]1655197483[/fromtimestamp] to [totimestamp]1656061483[/totimestamp]\n"})}),"\n",(0,c.jsx)(n.h4,{id:"5-transaction-queries",children:"5. Transaction Queries"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# Get transactions by address\nShow me the latest transactions for address [contract]0xd8da6bf26964af9d7eed9e03e53415d37aa96045[/contract] [chain]eth[/chain]\n\n# Get transaction details\nShow me details for transaction [txHash]0x748eeb4a15ba05736a9397a07ca86f0184c0c1eca53fa901b28a412d1a3f211f[/txHash] [chain]eth[/chain]\n"})}),"\n",(0,c.jsx)(n.h3,{id:"tag-reference",children:"Tag Reference"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Tag"}),(0,c.jsx)(n.th,{children:"Description"}),(0,c.jsx)(n.th,{children:"Example"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[chain]"})}),(0,c.jsx)(n.td,{children:"Blockchain identifier"}),(0,c.jsx)(n.td,{children:"eth, bsc"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[wallet]"})}),(0,c.jsx)(n.td,{children:"Wallet address"}),(0,c.jsx)(n.td,{children:"0x1234..."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[contract]"})}),(0,c.jsx)(n.td,{children:"Contract address"}),(0,c.jsx)(n.td,{children:"0xabcd..."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[token]"})}),(0,c.jsx)(n.td,{children:"Token ID"}),(0,c.jsx)(n.td,{children:"1234"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[txHash]"})}),(0,c.jsx)(n.td,{children:"Transaction hash"}),(0,c.jsx)(n.td,{children:"0x748e..."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[fromtimestamp]"})}),(0,c.jsx)(n.td,{children:"Start timestamp"}),(0,c.jsx)(n.td,{children:"1655197483"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"[totimestamp]"})}),(0,c.jsx)(n.td,{children:"End timestamp"}),(0,c.jsx)(n.td,{children:"1656061483"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"All addresses must be valid blockchain addresses (0x format)"}),"\n",(0,c.jsx)(n.li,{children:"Timestamps must be in Unix timestamp format"}),"\n",(0,c.jsx)(n.li,{children:"Chain names should be lowercase (eth, bsc, etc.)"}),"\n",(0,c.jsx)(n.li,{children:"Transaction hashes must be complete and valid"}),"\n",(0,c.jsx)(n.li,{children:"Include all required tags for each action typ"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(14041);const c={},i=a.createContext(c);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);