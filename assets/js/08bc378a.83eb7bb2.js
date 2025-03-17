"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[94917],{71184:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var r=n(14041);const s={},c=r.createContext(s);function d(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:i},e.children)}},84906:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"interfaces/TypedService","title":"TypedService","description":"@elizaos/core v1.0.0-alpha.63 / TypedService","source":"@site/api/interfaces/TypedService.md","sourceDirName":"interfaces","slug":"/interfaces/TypedService","permalink":"/eliza/api/interfaces/TypedService","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"TranscriptionParams","permalink":"/eliza/api/interfaces/TranscriptionParams"},"next":{"title":"UnifiedMemoryOptions","permalink":"/eliza/api/interfaces/UnifiedMemoryOptions"}}');var s=n(31085),c=n(71184);const d={},l="Interface: TypedService<ConfigType, ResultType>",t={},a=[{value:"Extends",id:"extends",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"runtime",id:"runtime",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"capabilityDescription",id:"capabilitydescription",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"config",id:"config",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"stop()",id:"stop",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"process()",id:"process",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/",children:"@elizaos/core v1.0.0-alpha.63"})," / TypedService"]}),"\n",(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"interface-typedserviceconfigtype-resulttype",children:"Interface: TypedService<ConfigType, ResultType>"})}),"\n",(0,s.jsx)(i.p,{children:"Generic service interface that provides better type checking for services"}),"\n",(0,s.jsx)(i.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"ConfigType"})," = ",(0,s.jsx)(i.code,{children:"unknown"})]}),"\n",(0,s.jsx)(i.p,{children:"The configuration type for this service"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"ResultType"})," = ",(0,s.jsx)(i.code,{children:"unknown"})]}),"\n",(0,s.jsx)(i.p,{children:"The result type returned by the service operations"}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"runtime",children:"runtime"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"protected"})," ",(0,s.jsx)(i.strong,{children:"runtime"}),": ",(0,s.jsx)(i.a,{href:"/eliza/api/interfaces/IAgentRuntime",children:(0,s.jsx)(i.code,{children:"IAgentRuntime"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Runtime instance"}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#runtime",children:(0,s.jsx)(i.code,{children:"runtime"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L521",children:"packages/core/src/types.ts:521"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"capabilitydescription",children:"capabilityDescription"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"abstract"})," ",(0,s.jsx)(i.strong,{children:"capabilityDescription"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Service name"}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#capabilityDescription",children:(0,s.jsx)(i.code,{children:"capabilityDescription"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L535",children:"packages/core/src/types.ts:535"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"config",children:"config"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"config"}),": ",(0,s.jsx)(i.code,{children:"ConfigType"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The configuration for this service instance"}),"\n",(0,s.jsx)(i.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#config",children:(0,s.jsx)(i.code,{children:"config"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1799",children:"packages/core/src/types.ts:1799"})}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.h3,{id:"stop",children:"stop()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"abstract"})," ",(0,s.jsx)(i.strong,{children:"stop"}),"(): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#stop",children:(0,s.jsx)(i.code,{children:"stop"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L529",children:"packages/core/src/types.ts:529"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"process",children:"process()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"process"}),"(",(0,s.jsx)(i.code,{children:"input"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"ResultType"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Process an input with this service"}),"\n",(0,s.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"input"}),": ",(0,s.jsx)(i.code,{children:"unknown"})]}),"\n",(0,s.jsx)(i.p,{children:"The input to process"}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"ResultType"}),">"]}),"\n",(0,s.jsx)(i.p,{children:"A promise resolving to the result"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/elizaOS/eliza/blob/main/packages/core/src/types.ts#L1806",children:"packages/core/src/types.ts:1806"})})]})}function o(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);