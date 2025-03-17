"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[21913],{29891:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"plugins/giphy","title":"Plugin Giphy","description":"A plugin for sending GIFs in response to user messages.","source":"@site/packages/plugins/giphy.md","sourceDirName":"plugins","slug":"/plugins/giphy","permalink":"/eliza/packages/plugins/giphy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Eliza GigBot Client","permalink":"/eliza/packages/plugins/gigbot"},"next":{"title":"@elizaos/plugin-gitbook","permalink":"/eliza/packages/plugins/gitbook"}}');var t=i(31085),r=i(71184);const l={},a="Plugin Giphy",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"License",id:"license",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"plugin-giphy",children:"Plugin Giphy"})}),"\n",(0,t.jsx)(n.p,{children:"A plugin for sending GIFs in response to user messages."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Plugin Giphy"})," enhances your agent's interactions by enabling it to respond with relevant GIFs based on user inputs. Leveraging the ",(0,t.jsx)(n.a,{href:"https://developers.giphy.com/",children:"Giphy API"}),", this plugin detects specific triggers in user messages and responds with appropriate GIFs to make conversations more engaging and expressive."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun add @elizaos/plugin-giphy\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Set up your environment with the required Giphy API key:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GIPHY_API_KEY"})}),(0,t.jsx)(n.td,{children:"Giphy API key for authenticating requests"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["You need to obtain an API key by signing up at ",(0,t.jsx)(n.a,{href:"https://developers.giphy.com/",children:"Giphy Developers"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { giphyPlugin } from '@elizaos/plugin-giphy';\n\n// Initialize the plugin\nconst plugin = giphyPlugin;\n\n// Add the plugin to your agent's plugin list\nconst plugins = [\n  giphyPlugin,\n  // ... other plugins\n];\n\n// Initialize your agent with the plugins\n// Example:\n// const agent = new Agent({ plugins, ...otherConfig });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The plugin provides the ",(0,t.jsx)(n.code,{children:"SEND_GIF"})," action, which automatically responds with a GIF based on the context of user messages. No additional setup is required beyond installing and configuring the plugin."]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsx)(n.p,{children:"MIT"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(14041);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);