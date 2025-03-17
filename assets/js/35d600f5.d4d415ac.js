"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[59078],{41107:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Contributors/2025-01-21","title":"Meeting 2025-01-21","description":"Major architectural discussions on implementing a dynamic plugin system and addressing challenges from the Biome linter migration.","source":"@site/community/Contributors/2025-01-21.md","sourceDirName":"Contributors","slug":"/Contributors/2025-01-21","permalink":"/eliza/community/Contributors/2025-01-21","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Meeting 2025-01-21","date":"2025-01-21T00:00:00.000Z","description":"Major architectural discussions on implementing a dynamic plugin system and addressing challenges from the Biome linter migration."},"sidebar":"defaultSidebar","previous":{"title":"Meeting 2025-01-14","permalink":"/eliza/community/Contributors/2025-01-14"},"next":{"title":"Meeting 2025-01-28","permalink":"/eliza/community/Contributors/2025-01-28"}}');var s=n(31085),r=n(71184);const o={title:"Meeting 2025-01-21",date:new Date("2025-01-21T00:00:00.000Z"),description:"Major architectural discussions on implementing a dynamic plugin system and addressing challenges from the Biome linter migration."},a="Weekly Contributor Meeting Notes",l={},c=[{value:"Summary",id:"summary",level:2}];function d(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"weekly-contributor-meeting-notes",children:"Weekly Contributor Meeting Notes"})}),"\n",(0,s.jsx)(i.p,{children:"(January 21, 2025 4:00 PM PST)"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Dynamic Plugin System & Biome Migration: Major Architecture Changes Ahead"})}),"\n",(0,s.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(i.p,{children:"This was a weekly contributors meeting for the open-source agent framework, ElizaOS. Participants discussed various technical topics, primarily focusing on issues with the codebase, recent changes, and future development plans."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Linting Issues:"})," The team recently switched from ESLint to Biome as their linter tool. While Biome is faster, it introduced around 2,000 linting errors in the codebase. This led to discussions about how to best address these errors\u2014whether to fix them all at once or progressively. There was also a concern that merging a large pull request (PR) related to Biome might have exacerbated the issue."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Merge Queue and CI/CD:"})," Participants talked about improving the merge queue process and Continuous Integration/Continuous Deployment (CI/CD) workflows. They considered using remote caching with Turbo to speed up builds and discussed the possibility of setting up their own Drone CI instance."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Agent Discussions:"})," The use of different PR agents like Devon, CodeRabbit, and AI Flows was brought up. There were mixed opinions on Devon's effectiveness, while CodeRabbit received positive feedback for catching errors in a PR."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Dynamic Plugin System:"}),' A significant portion of the meeting was dedicated to discussing a new dynamic plugin system proposed by a contributor representing Upstreet and Avere. This system aims to move plugins out of the main codebase and into separate repositories, making the core lighter and faster. The system would allow for both "official" plugins maintained by the ElizaOS team and community-submitted plugins.']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Security Concerns:"})," The dynamic plugin system raised security concerns, especially regarding community plugins hosted on any GitHub repository. Ideas to mitigate these risks included maintaining a blacklist of malicious plugins, using automated code scanning tools, and requiring plugins to be loaded from specific release tags rather than directly from the main branch."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Version Compatibility:"})," With the introduction of the dynamic plugin system, version compatibility between ElizaOS releases and plugin versions became a crucial point of discussion. The team discussed potential approaches to handle versioning, such as aligning plugin versions with ElizaOS releases or using a range-based system similar to NPM."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Other topics touched upon included:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The Node.js container, which was deemed unnecessary."}),"\n",(0,s.jsx)(i.li,{children:"Key management issues that need to be addressed."}),"\n",(0,s.jsx)(i.li,{children:"The possibility of adding a REST endpoint to list all registered actions for better oversight."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The meeting concluded with an agreement to prioritize resolving the linting errors introduced by Biome and to further discuss the dynamic plugin system, focusing on its implementation and security aspects."})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(14041);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);