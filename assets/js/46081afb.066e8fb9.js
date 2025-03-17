"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[48495],{71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(14041);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}},97117:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"plugins/web-search","title":"@elizaos/plugin-web-search","description":"A plugin for powerful web search capabilities, providing efficient search query handling and result processing through a customizable API interface.","source":"@site/packages/plugins/web-search.md","sourceDirName":"plugins","slug":"/plugins/web-search","permalink":"/eliza/packages/plugins/web-search","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-video Video Service","permalink":"/eliza/packages/plugins/video"},"next":{"title":"@elizaos/plugin-whatsapp","permalink":"/eliza/packages/plugins/whatsapp"}}');var l=i(31085),r=i(71184);const t={},a="@elizaos/plugin-web-search",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Web Search",id:"web-search",level:3},{value:"Token Management",id:"token-management",level:3},{value:"Development",id:"development",level:2},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Development Mode",id:"development-mode",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Core Interfaces",id:"core-interfaces",level:3},{value:"Plugin Methods",id:"plugin-methods",level:3},{value:"Common Issues/Troubleshooting",id:"common-issuestroubleshooting",level:2},{value:"Issue: API Authentication Failures",id:"issue-api-authentication-failures",level:3},{value:"Issue: Token Limit Exceeded",id:"issue-token-limit-exceeded",level:3},{value:"Issue: Search Rate Limiting",id:"issue-search-rate-limiting",level:3},{value:"Security Best Practices",id:"security-best-practices",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Token Management",id:"token-management-1",level:3},{value:"Search Actions",id:"search-actions",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elizaosplugin-web-search",children:"@elizaos/plugin-web-search"})}),"\n",(0,l.jsx)(n.p,{children:"A plugin for powerful web search capabilities, providing efficient search query handling and result processing through a customizable API interface."}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"This plugin provides functionality to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Execute web search queries with customizable parameters"}),"\n",(0,l.jsx)(n.li,{children:"Process and format search results"}),"\n",(0,l.jsx)(n.li,{children:"Handle search API authentication"}),"\n",(0,l.jsx)(n.li,{children:"Manage token limits and response sizes"}),"\n",(0,l.jsx)(n.li,{children:"Optimize query performance"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bun install @elizaos/plugin-web-search\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(n.p,{children:"The plugin requires the following environment variables:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-env",children:"TAVILY_API_KEY=your_api_key    # Required: API key for search service\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"Import and register the plugin in your Eliza configuration."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { webSearchPlugin } from '@elizaos/plugin-web-search';\n\nexport default {\n  plugins: [webSearchPlugin],\n  // ... other configuration\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Custom Usage"}),"\nIf you want custom usage, for example, twitter-client to search the web before posting a tweet, you can also import the webSearchService and use it directly. Here's how you can do it:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// packages/client-twitter/src/post.ts\nconst webSearchService = new WebSearchService();\nawait webSearchService.initialize(runtime);\nconst latestNews = await webSearchService.search(\n    "latest news on AI Agents",\n    // searchOptions\n);\n\nconst state = await this.runtime.composeState(\n    {  } // memory,\n    { // additional keys\n        latestNews: latestNews,\n    }\n);\n\n// Then modify the tweet template to include the {{latestNews}} and however you need\n'})}),"\n",(0,l.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,l.jsx)(n.h3,{id:"web-search",children:"Web Search"}),"\n",(0,l.jsx)(n.p,{children:"The plugin provides comprehensive web search capabilities:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { webSearch } from '@elizaos/plugin-web-search';\n\n// Execute a search query\nconst result = await webSearch.handler(\n  runtime,\n  {\n    content: { text: 'What is the latest news about AI?' },\n  },\n  state,\n  {},\n  callback\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"token-management",children:"Token Management"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// The plugin automatically handles token limits\nconst DEFAULT_MAX_WEB_SEARCH_TOKENS = 4000;\n\n// Example of token-limited response\nconst response = MaxTokens(searchResult, DEFAULT_MAX_WEB_SEARCH_TOKENS);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,l.jsx)(n.h3,{id:"building",children:"Building"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bun run build\n"})}),"\n",(0,l.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bun run test\n"})}),"\n",(0,l.jsx)(n.h3,{id:"development-mode",children:"Development Mode"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bun run dev\n"})}),"\n",(0,l.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@elizaos/core"}),": Core Eliza functionality"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"js-tiktoken"}),": Token counting and management"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"tsup"}),": Build tool"]}),"\n",(0,l.jsx)(n.li,{children:"Other standard dependencies listed in package.json"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,l.jsx)(n.h3,{id:"core-interfaces",children:"Core Interfaces"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"interface Action {\n  name: 'WEB_SEARCH';\n  similes: string[];\n  description: string;\n  validate: (runtime: IAgentRuntime, message: Memory) => Promise<boolean>;\n  handler: (\n    runtime: IAgentRuntime,\n    message: Memory,\n    state: State,\n    options: any,\n    callback: HandlerCallback\n  ) => Promise<void>;\n  examples: Array<Array<any>>;\n}\n\ninterface SearchResult {\n  title: string;\n  url: string;\n  answer?: string;\n  results?: Array<{\n    title: string;\n    url: string;\n  }>;\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"plugin-methods",children:"Plugin Methods"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"webSearch.handler"}),": Main method for executing searches"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"generateWebSearch"}),": Core search generation function"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"MaxTokens"}),": Token limit management function"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"getTotalTokensFromString"}),": Token counting utility"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"common-issuestroubleshooting",children:"Common Issues/Troubleshooting"}),"\n",(0,l.jsx)(n.h3,{id:"issue-api-authentication-failures",children:"Issue: API Authentication Failures"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Cause"}),": Invalid or missing Tavily API key"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Solution"}),": Verify TAVILY_API_KEY environment variable"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"issue-token-limit-exceeded",children:"Issue: Token Limit Exceeded"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Cause"}),": Search results exceeding maximum token limit"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Solution"}),": Results are automatically truncated to fit within limits"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"issue-search-rate-limiting",children:"Issue: Search Rate Limiting"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Cause"}),": Too many requests in short time"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Solution"}),": Implement proper request throttling"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"security-best-practices",children:"Security Best Practices"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Store API keys securely using environment variables"}),"\n",(0,l.jsx)(n.li,{children:"Validate all search inputs"}),"\n",(0,l.jsx)(n.li,{children:"Implement proper error handling"}),"\n",(0,l.jsx)(n.li,{children:"Keep dependencies updated"}),"\n",(0,l.jsx)(n.li,{children:"Monitor API usage and rate limits"}),"\n",(0,l.jsx)(n.li,{children:"Use HTTPS for API communication"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// Basic search\nconst searchQuery = 'Latest developments in quantum computing';\nconst results = await generateWebSearch(searchQuery, runtime);\n\n// With formatted response\nif (results && results.results.length) {\n  const formattedResponse = `${results.answer}\\n\\nFor more details, check out:\\n${results.results\n    .map((result, index) => `${index + 1}. [${result.title}](${result.url})`)\n    .join('\\n')}`;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,l.jsx)(n.h3,{id:"token-management-1",children:"Token Management"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"const DEFAULT_MODEL_ENCODING = 'gpt-3.5-turbo';\nconst DEFAULT_MAX_WEB_SEARCH_TOKENS = 4000;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"search-actions",children:"Search Actions"}),"\n",(0,l.jsx)(n.p,{children:"The plugin includes multiple search action similes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SEARCH_WEB"}),"\n",(0,l.jsx)(n.li,{children:"INTERNET_SEARCH"}),"\n",(0,l.jsx)(n.li,{children:"LOOKUP"}),"\n",(0,l.jsx)(n.li,{children:"QUERY_WEB"}),"\n",(0,l.jsx)(n.li,{children:"FIND_ONLINE"}),"\n",(0,l.jsx)(n.li,{children:"And more..."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,l.jsx)(n.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,l.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,l.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://tavily.com/",children:"Tavily API"}),": Advanced search and content analysis API"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/dqbd/tiktoken",children:"js-tiktoken"}),": Token counting for API responses"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/colinhacks/zod",children:"Zod"}),": TypeScript-first schema validation"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The Eliza community for their contributions and feedback"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"For more information about the search capabilities and tools:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.tavily.com/",children:"Tavily API Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/dqbd/tiktoken#readme",children:"Token Management Guide"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.tavily.com/docs/guides/best-practices",children:"Search API Best Practices"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,l.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);