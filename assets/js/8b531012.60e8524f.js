"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[26255],{13630:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"plugins/football","title":"@elizaos/plugin-football","description":"A plugin providing live football match data and league standings integration for ElizaOS agents.","source":"@site/packages/plugins/football.md","sourceDirName":"plugins","slug":"/plugins/football","permalink":"/eliza/packages/plugins/football","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-flow","permalink":"/eliza/packages/plugins/flow"},"next":{"title":"@elizaos/plugin-form","permalink":"/eliza/packages/plugins/form"}}');var t=i(31085),s=i(71184);const a={},o="@elizaos/plugin-football",r={},c=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"1. Live Match Data",id:"1-live-match-data",level:3},{value:"2. League Standings",id:"2-league-standings",level:3},{value:"3. Flexible Integration",id:"3-flexible-integration",level:3},{value:"API Key Configuration",id:"api-key-configuration",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"<code>fetchMatchAction</code>",id:"fetchmatchaction",level:3},{value:"<code>fetchStandingsAction</code>",id:"fetchstandingsaction",level:3},{value:"Development",id:"development",level:2},{value:"Steps to Build and Test",id:"steps-to-build-and-test",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Future Enhancements",id:"future-enhancements",level:2},{value:"Expanded Football Data Features",id:"expanded-football-data-features",level:3},{value:"Advanced League Tracking",id:"advanced-league-tracking",level:3},{value:"Customizable Output",id:"customizable-output",level:3},{value:"Integration Improvements",id:"integration-improvements",level:3},{value:"Developer Tools",id:"developer-tools",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"elizaosplugin-football",children:"@elizaos/plugin-football"})}),"\n",(0,t.jsx)(n.p,{children:"A plugin providing live football match data and league standings integration for ElizaOS agents."}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Football plugin integrates with the ",(0,t.jsx)(n.a,{href:"https://www.football-data.org/",children:"Football-Data.org API"})," to enable ElizaOS agents to fetch live football match information and league standings. It includes actions and utilities to provide real-time football data in conversations."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install the plugin, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun install @elizaos/plugin-football\n"})}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.h3,{id:"1-live-match-data",children:"1. Live Match Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action"}),": ",(0,t.jsx)(n.code,{children:"fetchMatchAction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Retrieves live football match data, including:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Teams"}),"\n",(0,t.jsx)(n.li,{children:"Scores"}),"\n",(0,t.jsx)(n.li,{children:"Game events"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Provides real-time updates for ongoing matches."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-league-standings",children:"2. League Standings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Action"}),": ",(0,t.jsx)(n.code,{children:"fetchStandingsAction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fetches league standings for a specified competition, including:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Team rankings"}),"\n",(0,t.jsx)(n.li,{children:"Points"}),"\n",(0,t.jsx)(n.li,{children:"Goals scored"}),"\n",(0,t.jsx)(n.li,{children:"Other league statistics."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-flexible-integration",children:"3. Flexible Integration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Extendable for additional football data, such as:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Player statistics"}),"\n",(0,t.jsx)(n.li,{children:"Match schedules"}),"\n",(0,t.jsx)(n.li,{children:"Historical match data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api-key-configuration",children:"API Key Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["To use this plugin, you need an API key from ",(0,t.jsx)(n.a,{href:"https://www.football-data.org/",children:"Football-Data.org"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Register and obtain your API key from Football-Data.org."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the API key to your ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"FOOTBALL_API_KEY=your_api_key_here\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugin will use this key to authenticate requests."}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsx)(n.h3,{id:"fetchmatchaction",children:(0,t.jsx)(n.code,{children:"fetchMatchAction"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Retrieves live match data."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { fetchMatchAction } from '@elizaos/plugin-football';\n\nconst result = await fetchMatchAction.handler(runtime, message, state);\nconsole.log(result);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sample Output"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "matches": [\n    {\n      "homeTeam": { "name": "Chelsea" },\n      "awayTeam": { "name": "Arsenal" },\n      "score": {\n        "fullTime": { "homeTeam": 1, "awayTeam": 2 }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"fetchstandingsaction",children:(0,t.jsx)(n.code,{children:"fetchStandingsAction"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Fetches league standings for a specific competition."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { fetchStandingsAction } from '@elizaos/plugin-football';\n\nconst result = await fetchStandingsAction.handler(runtime, message, state);\nconsole.log(result);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sample Output"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "standings": [\n    {\n      "table": [\n        {\n          "position": 1,\n          "team": { "name": "Manchester City" },\n          "points": 45\n        },\n        { "position": 2, "team": { "name": "Arsenal" }, "points": 42 }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-build-and-test",children:"Steps to Build and Test"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/elizaOS/eliza.git\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"plugin-football"})," directory and install dependencies:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/plugin-football\nbun install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build the plugin:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun run build\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run linting:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun run lint\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Test the plugin:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bun vitest src/tests/match-action.test.ts\nbun vitest src/tests/fetch-standings-action.test.ts\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"This plugin relies on the following dependency:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"@elizaos/core: workspace:*"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"future-enhancements",children:"Future Enhancements"}),"\n",(0,t.jsx)(n.h3,{id:"expanded-football-data-features",children:"Expanded Football Data Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Player statistics"}),"\n",(0,t.jsx)(n.li,{children:"Match schedules and fixtures"}),"\n",(0,t.jsx)(n.li,{children:"Team information and histories"}),"\n",(0,t.jsx)(n.li,{children:"Historical match data"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"advanced-league-tracking",children:"Advanced League Tracking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Real-time updates for all supported leagues"}),"\n",(0,t.jsx)(n.li,{children:"Integration with more competitions (e.g., Champions League, World Cup)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"customizable-output",children:"Customizable Output"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Improved data formatting for conversational outputs"}),"\n",(0,t.jsx)(n.li,{children:"Support for additional localization options"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"integration-improvements",children:"Integration Improvements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enhanced API error handling"}),"\n",(0,t.jsx)(n.li,{children:"Caching for frequently accessed data"}),"\n",(0,t.jsx)(n.li,{children:"Increased rate-limit compliance for the Football-Data.org API"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"developer-tools",children:"Developer Tools"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sample applications for plugin usage"}),"\n",(0,t.jsx)(n.li,{children:"Test suites for advanced football scenarios"}),"\n",(0,t.jsx)(n.li,{children:"Examples for extending plugin functionality"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsx)(n.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,t.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,t.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.football-data.org/documentation/quickstart/",children:"Football-Data.org"})," Official Football-Data platform API"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Special thanks to ",(0,t.jsx)(n.a,{href:"https://www.football-data.org/",children:"Football-Data.org"})," for providing the API that powers this plugin."]}),"\n",(0,t.jsx)(n.li,{children:"The Eliza Core development team."}),"\n",(0,t.jsx)(n.li,{children:"The Eliza community for their contributions and feedback"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For more information about Football-Data integration capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.football-data.org/documentation/quickstart",children:"Football-Data API Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.football-data.org/documentation/api",children:"Football-Data Developer Portal"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var l=i(14041);const t={},s=l.createContext(t);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);