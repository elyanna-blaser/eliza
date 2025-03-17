"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[19601],{1603:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"plugins/form","title":"@elizaos/plugin-form","description":"A plugin for integrating Form chain capabilities within the ElizaOS ecosystem, providing direct access to curves-based token economics and ERC20 conversions.","source":"@site/packages/plugins/form.md","sourceDirName":"plugins","slug":"/plugins/form","permalink":"/eliza/packages/plugins/form","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-football","permalink":"/eliza/packages/plugins/football"},"next":{"title":"@elizaos/plugin-fuel","permalink":"/eliza/packages/plugins/fuel"}}');var s=i(31085),l=i(71184);const c={},t="@elizaos/plugin-form",a={},o=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Plugin Setup",id:"plugin-setup",level:3},{value:"Actions",id:"actions",level:2},{value:"BUY_CURVES_TOKEN",id:"buy_curves_token",level:3},{value:"SELL_CURVES_TOKEN",id:"sell_curves_token",level:3},{value:"WITHDRAW_CURVES_TOKEN",id:"withdraw_curves_token",level:3},{value:"DEPOSIT_CURVES_TOKEN",id:"deposit_curves_token",level:3},{value:"MINT_CURVES_ERC20",id:"mint_curves_erc20",level:3},{value:"GET_CURVES_BALANCE",id:"get_curves_balance",level:3},{value:"GET_CURVES_BUY_PRICE",id:"get_curves_buy_price",level:3},{value:"GET_CURVES_SELL_PRICE",id:"get_curves_sell_price",level:3},{value:"Formula Selection",id:"formula-selection",level:2},{value:"QUADRATIC",id:"quadratic",level:3},{value:"LOGRITHMIC",id:"logrithmic",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Security",id:"security",level:3},{value:"Performance",id:"performance",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elizaosplugin-form",children:"@elizaos/plugin-form"})}),"\n",(0,s.jsx)(n.p,{children:"A plugin for integrating Form chain capabilities within the ElizaOS ecosystem, providing direct access to curves-based token economics and ERC20 conversions."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://form.network/",children:"Form Chain"})," is a blockchain platform that implements curves-based token economics, allowing users to interact with bonding curves for token creation, trading, and management. This plugin integrates Form chain with Eliza, giving your agent the ability to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Buy and sell curves tokens"}),"\n",(0,s.jsx)(n.li,{children:"Convert between curves and ERC20 tokens"}),"\n",(0,s.jsx)(n.li,{children:"Manage token holdings"}),"\n",(0,s.jsx)(n.li,{children:"Query prices and balances"}),"\n",(0,s.jsx)(n.li,{children:"Create new ERC20 tokens for curves"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The plugin supports both QUADRATIC and LOGRITHMIC formulas, optimizing for different use cases and trading volumes."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install @elizaos/plugin-form\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"FORM_PRIVATE_KEY=<Your Form chain wallet private key>\nFORM_TESTNET=true  # Optional, defaults to false\n"})}),"\n",(0,s.jsx)(n.h3,{id:"plugin-setup",children:"Plugin Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// In your agent configuration\nimport { formPlugin } from '@elizaos/plugin-form';\n\nconst character = {\n  plugins: [formPlugin],\n  // ... other configuration\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.h3,{id:"buy_curves_token",children:"BUY_CURVES_TOKEN"}),"\n",(0,s.jsx)(n.p,{children:"Buy curves tokens for a subject address."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('BUY_CURVES_TOKEN', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: 1,\n  formula: 'QUADRATIC', // or \"LOGRITHMIC\" for high volume\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sell_curves_token",children:"SELL_CURVES_TOKEN"}),"\n",(0,s.jsx)(n.p,{children:"Sell curves tokens back to the protocol."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('SELL_CURVES_TOKEN', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: 1,\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"withdraw_curves_token",children:"WITHDRAW_CURVES_TOKEN"}),"\n",(0,s.jsx)(n.p,{children:"Convert curves tokens to their ERC20 equivalent."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('WITHDRAW_CURVES_TOKEN', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: 1,\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deposit_curves_token",children:"DEPOSIT_CURVES_TOKEN"}),"\n",(0,s.jsx)(n.p,{children:"Convert ERC20 tokens back to curves."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('DEPOSIT_CURVES_TOKEN', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: '1000000000000000000', // 1 token in 18 decimals\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mint_curves_erc20",children:"MINT_CURVES_ERC20"}),"\n",(0,s.jsx)(n.p,{children:"Mint new ERC20 token for curves holdings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('MINT_CURVES_ERC20', {\n  name: 'My Token',\n  symbol: 'MTK',\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get_curves_balance",children:"GET_CURVES_BALANCE"}),"\n",(0,s.jsx)(n.p,{children:"Check curves token balance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('GET_CURVES_BALANCE', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get_curves_buy_price",children:"GET_CURVES_BUY_PRICE"}),"\n",(0,s.jsx)(n.p,{children:"Get price quote for buying curves."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('GET_CURVES_BUY_PRICE', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: 1,\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get_curves_sell_price",children:"GET_CURVES_SELL_PRICE"}),"\n",(0,s.jsx)(n.p,{children:"Get price quote for selling curves."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await runtime.processAction('GET_CURVES_SELL_PRICE', {\n  subject: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',\n  amount: 1,\n  formula: 'QUADRATIC',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"formula-selection",children:"Formula Selection"}),"\n",(0,s.jsx)(n.p,{children:"The plugin supports two bonding curve formulas:"}),"\n",(0,s.jsx)(n.h3,{id:"quadratic",children:"QUADRATIC"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default formula for standard operations"}),"\n",(0,s.jsx)(n.li,{children:"Suitable for personal and small group usage"}),"\n",(0,s.jsx)(n.li,{children:"Balanced price impact"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"logrithmic",children:"LOGRITHMIC"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optimized for high volume trading"}),"\n",(0,s.jsx)(n.li,{children:"Better price stability"}),"\n",(0,s.jsx)(n.li,{children:"Recommended for large-scale operations"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Store private keys securely using environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Never expose keys in code or commits"}),"\n",(0,s.jsx)(n.li,{children:"Validate addresses before transactions"}),"\n",(0,s.jsx)(n.li,{children:"Check balances before operations"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use caching for repeated price checks"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Trading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always check price quotes before trading"}),"\n",(0,s.jsx)(n.li,{children:"Use appropriate formula for volume"}),"\n",(0,s.jsx)(n.li,{children:"Monitor price impact"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"The plugin provides detailed error messages for common issues:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'try {\n    await runtime.processAction("BUY_CURVES_TOKEN", {...});\n} catch (error) {\n    if (error.message.includes("insufficient balance")) {\n        // Handle insufficient funds\n    } else if (error.message.includes("price impact too high")) {\n        // Handle excessive price impact\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsx)(n.p,{children:"This plugin is part of the ElizaOS project. See the main project repository Contributing Guide for details."}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This plugin is part of the ElizaOS project. See the main project repository for license information."})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var r=i(14041);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);