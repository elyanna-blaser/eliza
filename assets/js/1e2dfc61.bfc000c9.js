"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[56857],{27625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"plugins/tee-verifiable-log","title":"tee-verifiable-log","description":"Build","source":"@site/packages/plugins/tee-verifiable-log.md","sourceDirName":"plugins","slug":"/plugins/tee-verifiable-log","permalink":"/eliza/packages/plugins/tee-verifiable-log","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Marlin TEE Plugin","permalink":"/eliza/packages/plugins/tee-marlin"},"next":{"title":"@elizaos/plugin-tee","permalink":"/eliza/packages/plugins/tee"}}');var i=t(74848),s=t(28453);const o={},r=void 0,a={},c=[{value:"Build",id:"build",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Test",id:"test",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,i.jsx)(n.p,{children:"Execute the following command to build the code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pnpm clean\npnpm install  or  pnpm install --no-frozen-lockfile\npnpm build\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This plugin depends on plugin-tee.\nTo get a TEE simulator for local testing, use the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker pull phalanetwork/tappd-simulator:latest\n# by default the simulator is available in localhost:8090\ndocker run --rm -p 8090:8090 phalanetwork/tappd-simulator:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using the provider through the runtime environment, ensure the following settings are configured:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:' # Optional, for simulator purposes if testing on mac or windows. Leave empty for Linux x86 machines.\nTEE_MODE="LOCAL"                    # LOCAL | DOCKER | PRODUCTION\nWALLET_SECRET_SALT= "<your-secret-salt>"            # ONLY define if you want to use TEE Plugin, otherwise it will throw errors\n\nVLOG="true"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,i.jsxs)(n.p,{children:["Test files are located in the ",(0,i.jsx)(n.code,{children:"test"})," folder. To run the tests, execute the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pnpm test\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var l=t(96540);const i={},s=l.createContext(i);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);