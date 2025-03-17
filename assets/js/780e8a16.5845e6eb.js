"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[74291],{62491:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"plugins/omniflix","title":"@elizaos/plugin-omniflix","description":"A plugin for ElizaOS that enables interaction with the OmniFlix Network blockchain.","source":"@site/packages/plugins/omniflix.md","sourceDirName":"plugins","slug":"/plugins/omniflix","permalink":"/eliza/packages/plugins/omniflix","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@okto_web3/eliza-plugin","permalink":"/eliza/packages/plugins/okto"},"next":{"title":"Unmaintained: this verifiable inference plugin needs to be ported","permalink":"/eliza/packages/plugins/opacity"}}');var o=i(31085),a=i(71184);const t={},s="@elizaos/plugin-omniflix",r={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Mainnet (Default)",id:"mainnet-default",level:4},{value:"Testnet",id:"testnet",level:4},{value:"Features",id:"features",level:2},{value:"1. Bank Operations",id:"1-bank-operations",level:3},{value:"Check Balance",id:"check-balance",level:4},{value:"Send Tokens",id:"send-tokens",level:4},{value:"Check Staked Balance",id:"check-staked-balance",level:4},{value:"2. Staking Operations",id:"2-staking-operations",level:3},{value:"Delegate Tokens",id:"delegate-tokens",level:4},{value:"Undelegate Tokens",id:"undelegate-tokens",level:4},{value:"Redelegate Tokens",id:"redelegate-tokens",level:4},{value:"Cancel Unbonding",id:"cancel-unbonding",level:4},{value:"3. Governance Operations",id:"3-governance-operations",level:3},{value:"Vote on Proposals",id:"vote-on-proposals",level:4},{value:"Integration",id:"integration",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"Token Denominations",id:"token-denominations",level:3},{value:"Address Formats",id:"address-formats",level:3},{value:"Staking Parameters",id:"staking-parameters",level:3},{value:"Governance Rules",id:"governance-rules",level:3},{value:"License",id:"license",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"elizaosplugin-omniflix",children:"@elizaos/plugin-omniflix"})}),"\n",(0,o.jsx)(n.p,{children:"A plugin for ElizaOS that enables interaction with the OmniFlix Network blockchain."}),"\n",(0,o.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#configuration",children:"Configuration"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#features",children:"Features"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#integration",children:"Integration"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#technical-details",children:"Technical Details"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @elizaos/plugin-omniflix\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:'# Required: RPC endpoint for OmniFlix Network\nOMNIFLIX_RPC_ENDPOINT="https://rpc.omniflix.network:443"\n\n# Required: API endpoint for OmniFlix Network\nOMNIFLIX_API_URL="https://rest.omniflix.network"\n\n# Required: Either mnemonic or private key (one is required)\nOMNIFLIX_MNEMONIC="your mnemonic"\n# OR\nOMNIFLIX_PRIVATE_KEY="your hex private key"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"network-configuration",children:"Network Configuration"}),"\n",(0,o.jsx)(n.p,{children:"You can configure different networks by updating the endpoints:"}),"\n",(0,o.jsx)(n.h4,{id:"mainnet-default",children:"Mainnet (Default)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:'OMNIFLIX_RPC_ENDPOINT="https://rpc.omniflix.network"\nOMNIFLIX_API_URL="https://rest.omniflix.network"\n'})}),"\n",(0,o.jsx)(n.h4,{id:"testnet",children:"Testnet"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:'OMNIFLIX_RPC_ENDPOINT="https://rpc.testnet.omniflix.network"\nOMNIFLIX_API_URL="https://api.testnet.omniflix.network"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Note: Make sure to use the appropriate network endpoints based on your requirements. The mainnet endpoints should be used for production environments, while testnet are suitable for testing."}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsx)(n.h3,{id:"1-bank-operations",children:"1. Bank Operations"}),"\n",(0,o.jsx)(n.h4,{id:"check-balance",children:"Check Balance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- What is my balance?\n- How many FLIX do I have?\n- Check my wallet balance\n"})}),"\n",(0,o.jsx)(n.h4,{id:"send-tokens",children:"Send Tokens"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Send 100 FLIX to omniflix1abc123...\n- Transfer 50 FLIX to omniflix1xyz789...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"check-staked-balance",children:"Check Staked Balance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- What is my staked balance?\n- Show my delegated FLIX\n- Check my staking balance\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-staking-operations",children:"2. Staking Operations"}),"\n",(0,o.jsx)(n.h4,{id:"delegate-tokens",children:"Delegate Tokens"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Delegate 100 FLIX to omniflixvaloper1abc123...\n- Stake 50 FLIX with validator omniflixvaloper1xyz789...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"undelegate-tokens",children:"Undelegate Tokens"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Undelegate 100 FLIX from omniflixvaloper1abc123...\n- Unstake 50 FLIX from validator omniflixvaloper1xyz789...\n"})}),"\n",(0,o.jsx)(n.h4,{id:"redelegate-tokens",children:"Redelegate Tokens"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Redelegate 100 FLIX from omniflixvaloper1abc123... to omniflixvaloper1def456...\n- Move 50 FLIX stake from validator1 to validator2\n"})}),"\n",(0,o.jsx)(n.h4,{id:"cancel-unbonding",children:"Cancel Unbonding"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Cancel unbonding of 100 FLIX from omniflixvaloper1abc123... at creation height 123456\n- Stop unbonding 50 FLIX from validator omniflixvaloper1xyz789... at creation height 789012\n- Cancel unbonding delegation with:\n  - Amount: 100 FLIX\n  - Validator: omniflixvaloper1abc123...\n  - Creation Height: 123456\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note: Creation height is required for canceling unbonding operations. You can find the creation height:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"In the unbonding delegation response"}),"\n",(0,o.jsx)(n.li,{children:"Through the chain explorer"}),"\n",(0,o.jsx)(n.li,{children:"From the original unbonding transaction"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3-governance-operations",children:"3. Governance Operations"}),"\n",(0,o.jsx)(n.h4,{id:"vote-on-proposals",children:"Vote on Proposals"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Commands:\n- Vote yes on proposal 1\n- Vote no on proposal 2\n- Vote abstain on proposal 3\n- Vote no_with_veto on proposal 4\n\n\nValid Options:\n- yes\n- no\n- abstain\n- no_with_veto\n\nNote: proposal Id and vote option is required for voting on proposals or it will take unspecified vote option. You can find the proposal ID:\n\n- In the proposal response\n- Through the chain explorer\n- From the original proposal transaction\n"})}),"\n",(0,o.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Import the plugin:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { OmniflixPlugin } from '@elizaos/plugin-omniflix';\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Register with ElizaOS:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Eliza } from '@elizaos/core';\n\nconst eliza = new Eliza();\neliza.registerPlugin(OmniflixPlugin);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { voteOnProposal } from '@elizaos/plugin-omniflix';\n\n// Vote on a proposal\nconst voteOnProposal = await voteOnProposal(\n  {\n    proposalId: '1',\n    vote: 'YES',\n  },\n  {\n    apiEndpoint: 'https://rest.omniflix.network',\n    rpcEndpoint: 'https://rpc.omniflix.network:443',\n  }\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,o.jsx)(n.h3,{id:"token-denominations",children:"Token Denominations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Display denomination: FLIX"}),"\n",(0,o.jsx)(n.li,{children:"Base denomination: uflix (auto-converted by plugin)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"address-formats",children:"Address Formats"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Wallet addresses: Start with ",(0,o.jsx)(n.code,{children:"omniflix"})]}),"\n",(0,o.jsxs)(n.li,{children:["Validator addresses: Start with ",(0,o.jsx)(n.code,{children:"omniflixvaloper"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"staking-parameters",children:"Staking Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Unbonding period: 28 days"}),"\n",(0,o.jsx)(n.li,{children:"Redelegation: Has cooldown period"}),"\n",(0,o.jsx)(n.li,{children:"Delegation: Minimum amount may apply"}),"\n",(0,o.jsxs)(n.li,{children:["Unbonding cancellation requires:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Validator address"}),"\n",(0,o.jsx)(n.li,{children:"Amount"}),"\n",(0,o.jsx)(n.li,{children:"Creation height (block height when unbonding started)"}),"\n",(0,o.jsx)(n.li,{children:"Must be within unbonding period"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"governance-rules",children:"Governance Rules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Voting eligibility: Proposals must be in voting period"}),"\n",(0,o.jsx)(n.li,{children:"Voting frequency: One vote per address per proposal"}),"\n",(0,o.jsx)(n.li,{children:"Voting power: Proportional to staked amount"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,o.jsx)(n.p,{children:"This plugin is part of the ElizaOS project. See LICENSE file for details."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>s});var l=i(14041);const o={},a=l.createContext(o);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);