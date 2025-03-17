"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[54692],{45670:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"plugins/dcap","title":"@elizaos/plugin-dcap","description":"A plugin for verifying DCAP attestation on-chain built based on the automata-dcap-attestation.","source":"@site/packages/plugins/dcap.md","sourceDirName":"plugins","slug":"/plugins/dcap","permalink":"/eliza/packages/plugins/dcap","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos-plugins/plugin-d.a.t.a","permalink":"/eliza/packages/plugins/d-a-t-a"},"next":{"title":"@elizaos/plugin-depin","permalink":"/eliza/packages/plugins/depin"}}');var s=i(31085),a=i(71184);const l={},r="@elizaos/plugin-dcap",o={},c=[{value:"Features",id:"features",level:2},{value:"Future Features (coming soon)",id:"future-features-coming-soon",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Development",id:"development",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elizaosplugin-dcap",children:"@elizaos/plugin-dcap"})}),"\n",(0,s.jsxs)(n.p,{children:["A plugin for verifying DCAP attestation on-chain built based on the ",(0,s.jsx)(n.a,{href:"https://github.com/automata-network/automata-dcap-attestation",children:"automata-dcap-attestation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.p,{children:"This plugin provides the following features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Generate DCAP attestation on TDX using the ",(0,s.jsx)(n.code,{children:"remoteAttestationProvider"})," provided by the ",(0,s.jsx)(n.a,{href:"https://github.com/elizaOS/eliza/tree/develop/packages/plugin-tee",children:"plugin-tee"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Generate DCAP attestation on SGX using the ",(0,s.jsx)(n.code,{children:"sgxAttestationProvider"})," provided by the ",(0,s.jsx)(n.a,{href:"https://github.com/elizaOS/eliza/tree/develop/packages/plugin-sgx",children:"plugin-sgx"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Submit and verify DCAP attestation on-chain."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"future-features-coming-soon",children:"Future Features (coming soon)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support to verify DCAP attestation on more EVM networks."}),"\n",(0,s.jsx)(n.li,{children:"Support to verify DCAP attestation on Solana."}),"\n",(0,s.jsx)(n.li,{children:"Support to verify DCAP attestation using ZKVM and verify the zk proof on-chain."}),"\n",(0,s.jsx)(n.li,{children:"Support to topup the wallet before submitting the DCAP attestation on testnets."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install @elizaos/plugin-dcap\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set up your environment variables:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-env",children:"EVM_PRIVATE_KEY=your-private-key-here\nDCAP_MODE=PLUGIN-SGX|PLUGIN-TEE|MOCK\n"})}),"\n",(0,s.jsx)(n.p,{children:"The EVM_PRIVATE_KEY used to submit the DCAP attestation on evm networks, please make sure it has enough balance to pay for the transaction fee."}),"\n",(0,s.jsx)(n.p,{children:"The DCAP_MODE is used to specify the mode of generating DCAP attestation, it can be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PLUGIN-SGX: Use the ",(0,s.jsx)(n.code,{children:"sgxAttestationProvider"})," in ",(0,s.jsx)(n.code,{children:"plugin-sgx"})," to generate the DCAP attestation."]}),"\n",(0,s.jsxs)(n.li,{children:["PLUGIN-TEE: Use the ",(0,s.jsx)(n.code,{children:"remoteAttestationProvider"})," in ",(0,s.jsx)(n.code,{children:"plugin-tee"})," to generate the DCAP attestation."]}),"\n",(0,s.jsx)(n.li,{children:"MOCK: Use a predefined attestation, this option is only for testing purposes."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Check the docs of ",(0,s.jsx)(n.code,{children:"plugin-sgx"})," and ",(0,s.jsx)(n.code,{children:"plugin-tee"})," for how to run your agent in TEE before using the SGX or TDX mode."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Register the plugin in your Eliza configuration:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { dcapPlugin } from '@elizaos/plugin-dcap';\n\n// In your Eliza configuration\nplugins: [\n  dcapPlugin,\n  // ... other plugins\n];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin provides an action ",(0,s.jsx)(n.code,{children:"dcapOnChainVerifyAction"})," which will be triggered by natural languages like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'"Verify the DCAP attestation on-chain"\n"Generate a DCAP attestation and verify it on-chain"\n"DCAP_ON_CHAIN" # The keyword will also trigger the action\n'})}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository"}),"\n",(0,s.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Build the plugin:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun run build\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run tests:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun test\n"})}),"\n",(0,s.jsx)(n.p,{children:"We are welcom to any feedback and contributions!"}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ata.network",children:"Automata Network"}),": Provided the on-chain DCAP verification, enabling the decentralized verification of TEE attestations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://phala.network",children:"Phala Network"}),": Provided support for running agents in TDX environment and contributed the ",(0,s.jsx)(n.code,{children:"plugin-tee"})," for generating DCAP attestation on TDX."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://gramineproject.io/",children:"Gramine"}),": Provided support for running agents in SGX environment."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(14041);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);