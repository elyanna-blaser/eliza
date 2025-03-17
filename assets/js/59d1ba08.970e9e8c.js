"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[98123],{3349:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"plugins/anyone","title":"@elizaos/plugin-anyone","description":"A plugin for integrating Anyone protocol proxy services into Eliza agents.","source":"@site/packages/plugins/anyone.md","sourceDirName":"plugins","slug":"/plugins/anyone","permalink":"/eliza/packages/plugins/anyone","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ankr","permalink":"/eliza/packages/plugins/ankr"},"next":{"title":"@elizaos/plugin-aptos","permalink":"/eliza/packages/plugins/aptos"}}');var s=i(31085),a=i(71184);const o={},t="@elizaos/plugin-anyone",r={},c=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Available Actions",id:"available-actions",level:3},{value:"START_ANYONE",id:"start_anyone",level:4},{value:"STOP_ANYONE",id:"stop_anyone",level:4},{value:"Technical Details",id:"technical-details",level:2},{value:"Dependencies",id:"dependencies",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"elizaosplugin-anyone",children:"@elizaos/plugin-anyone"})}),"\n",(0,s.jsx)(e.p,{children:"A plugin for integrating Anyone protocol proxy services into Eliza agents."}),"\n",(0,s.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"bun add @elizaos/plugin-anyone\n"})}),"\n",(0,s.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Start and stop Anyone client services"}),"\n",(0,s.jsx)(e.li,{children:"Automatic proxy configuration for axios"}),"\n",(0,s.jsx)(e.li,{children:"SOCKS proxy support (port 9050)"}),"\n",(0,s.jsx)(e.li,{children:"Clean proxy cleanup and restoration"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(e.p,{children:"Add the plugin to your agent's configuration:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { anyonePlugin } from '@elizaos/plugin-anyone';\n\nconst character = {\n  plugins: [anyonePlugin],\n};\n"})}),"\n",(0,s.jsx)(e.h3,{id:"available-actions",children:"Available Actions"}),"\n",(0,s.jsx)(e.h4,{id:"start_anyone",children:"START_ANYONE"}),"\n",(0,s.jsx)(e.p,{children:"Starts the Anyone client and configures proxy settings."}),"\n",(0,s.jsx)(e.p,{children:"Example commands:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:'"Can you start Anyone for me?"\n"Initialize the Anyone client please"\n"Launch Anyone for me"\n'})}),"\n",(0,s.jsx)(e.h4,{id:"stop_anyone",children:"STOP_ANYONE"}),"\n",(0,s.jsx)(e.p,{children:"Stops the Anyone client and cleans up proxy settings."}),"\n",(0,s.jsx)(e.p,{children:"Example commands:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:'"Can you stop Anyone for me?"\n"Please shut down Anyone"\n"Close Anyone for me"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,s.jsx)(e.p,{children:"The plugin provides two main services:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"AnyoneClientService"}),": Manages the Anyone client instance"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Singleton pattern implementation"}),"\n",(0,s.jsx)(e.li,{children:"Handles client initialization and cleanup"}),"\n",(0,s.jsx)(e.li,{children:"Configures SOCKS proxy on port 9050"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"AnyoneProxyService"}),": Handles axios proxy configuration"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Preserves original axios settings"}),"\n",(0,s.jsx)(e.li,{children:"Automatically applies proxy settings"}),"\n",(0,s.jsx)(e.li,{children:"Provides clean restoration of original config"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"@anyone-protocol/anyone-client: ^0.4.3"}),"\n",(0,s.jsx)(e.li,{children:"axios: ^1.7.9"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},71184:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>t});var l=i(14041);const s={},a=l.createContext(s);function o(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);