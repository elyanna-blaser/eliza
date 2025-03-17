"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[70378],{22620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"plugins/trustdb","title":"@elizaos/plugin-trustdb","description":"A plugin for managing trust scores and performance metrics in a secure database, providing recommender tracking and token performance analysis capabilities.","source":"@site/packages/plugins/trustdb.md","sourceDirName":"plugins","slug":"/plugins/trustdb","permalink":"/eliza/packages/plugins/trustdb","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-trikon","permalink":"/eliza/packages/plugins/trikon"},"next":{"title":"@toddli/plugin-trustgo","permalink":"/eliza/packages/plugins/trustgo"}}');var s=r(31085),t=r(71184);const a={},c="@elizaos/plugin-trustdb",d={},l=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"TrustScoreDatabase",id:"trustscoredatabase",level:3},{value:"Performance Tracking",id:"performance-tracking",level:3},{value:"Development",id:"development",level:2},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Linting",id:"linting",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Core Interfaces",id:"core-interfaces",level:3},{value:"Database Methods",id:"database-methods",level:3},{value:"Common Issues/Troubleshooting",id:"common-issuestroubleshooting",level:2},{value:"Issue: Database Connection Errors",id:"issue-database-connection-errors",level:3},{value:"Issue: Data Consistency",id:"issue-data-consistency",level:3},{value:"Security Best Practices",id:"security-best-practices",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elizaosplugin-trustdb",children:"@elizaos/plugin-trustdb"})}),"\n",(0,s.jsx)(n.p,{children:"A plugin for managing trust scores and performance metrics in a secure database, providing recommender tracking and token performance analysis capabilities."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This plugin provides functionality to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Track and manage recommender trust scores"}),"\n",(0,s.jsx)(n.li,{children:"Monitor token performance metrics"}),"\n",(0,s.jsx)(n.li,{children:"Record and analyze trading performance"}),"\n",(0,s.jsx)(n.li,{children:"Maintain historical metrics data"}),"\n",(0,s.jsx)(n.li,{children:"Handle transaction records and validations"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @elizaos/plugin-trustdb\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The plugin uses SQLite as its database backend and requires proper initialization:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { TrustScoreDatabase } from '@elizaos/plugin-trustdb';\nimport Database from 'better-sqlite3';\n\nconst db = new Database('path/to/database.sqlite');\nconst trustDB = new TrustScoreDatabase(db);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Import and use the TrustDB functionality in your application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { TrustScoreDatabase } from '@elizaos/plugin-trustdb';\n\n// Initialize database\nconst trustDB = new TrustScoreDatabase(db);\n\n// Add a recommender\nconst recommender = {\n  id: 'uuid',\n  address: 'wallet-address',\n  telegramId: 'telegram-id',\n};\ntrustDB.addRecommender(recommender);\n\n// Track token performance\nconst performance = {\n  tokenAddress: 'token-address',\n  priceChange24h: 10.5,\n  volumeChange24h: 25.3,\n  // ... other metrics\n};\ntrustDB.upsertTokenPerformance(performance);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"trustscoredatabase",children:"TrustScoreDatabase"}),"\n",(0,s.jsx)(n.p,{children:"The main database manager providing comprehensive tracking and analysis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Get or create a recommender\nconst recommender = await trustDB.getOrCreateRecommender({\n  address: 'wallet-address',\n  telegramId: 'user-id',\n});\n\n// Update recommender metrics\ntrustDB.updateRecommenderMetrics({\n  recommenderId: 'uuid',\n  trustScore: 85.5,\n  totalRecommendations: 10,\n  // ... other metrics\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"performance-tracking",children:"Performance Tracking"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Add trade performance\ntrustDB.addTradePerformance(\n  {\n    token_address: 'address',\n    recommender_id: 'uuid',\n    buy_price: 1.0,\n    // ... other trade details\n  },\n  false\n);\n\n// Get token performance\nconst tokenMetrics = trustDB.getTokenPerformance('token-address');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.h3,{id:"building",children:"Building"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"linting",children:"Linting"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"better-sqlite3"}),": SQLite database interface"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uuid"}),": Unique identifier generation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dompurify"}),": HTML sanitization"]}),"\n",(0,s.jsx)(n.li,{children:"Other standard dependencies listed in package.json"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsx)(n.h3,{id:"core-interfaces",children:"Core Interfaces"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface Recommender {\n  id: string;\n  address: string;\n  solanaPubkey?: string;\n  telegramId?: string;\n  discordId?: string;\n  twitterId?: string;\n  ip?: string;\n}\n\ninterface RecommenderMetrics {\n  recommenderId: string;\n  trustScore: number;\n  totalRecommendations: number;\n  successfulRecs: number;\n  avgTokenPerformance: number;\n  riskScore: number;\n  consistencyScore: number;\n  virtualConfidence: number;\n  lastActiveDate: Date;\n  trustDecay: number;\n  lastUpdated: Date;\n}\n\ninterface TokenPerformance {\n  tokenAddress: string;\n  symbol: string;\n  priceChange24h: number;\n  volumeChange24h: number;\n  // ... other performance metrics\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"database-methods",children:"Database Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addRecommender"}),": Add new recommender to database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getRecommenderMetrics"}),": Retrieve recommender performance metrics"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updateRecommenderMetrics"}),": Update recommender metrics"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upsertTokenPerformance"}),": Add or update token performance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getTokenPerformance"}),": Retrieve token performance metrics"]}),"\n",(0,s.jsx)(n.li,{children:"Many more specialized methods for tracking and analysis"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"common-issuestroubleshooting",children:"Common Issues/Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"issue-database-connection-errors",children:"Issue: Database Connection Errors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cause"}),": Incorrect database path or permissions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Solution"}),": Verify database path and file permissions"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"issue-data-consistency",children:"Issue: Data Consistency"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cause"}),": Concurrent database access"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Solution"}),": Use proper transaction handling"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-best-practices",children:"Security Best Practices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement proper database backup procedures"}),"\n",(0,s.jsx)(n.li,{children:"Use parameterized queries to prevent SQL injection"}),"\n",(0,s.jsx)(n.li,{children:"Validate all input data before storage"}),"\n",(0,s.jsx)(n.li,{children:"Maintain regular database maintenance"}),"\n",(0,s.jsx)(n.li,{children:"Keep dependencies updated for security patches"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsx)(n.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/WiseLibs/better-sqlite3",children:"better-sqlite3"}),": High-performance SQLite3 driver"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/uuidjs/uuid",children:"uuid"}),": UUID generation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cure53/DOMPurify",children:"DOMPurify"}),": HTML sanitization library"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The better-sqlite3 team for their excellent database driver"}),"\n",(0,s.jsx)(n.li,{children:"The UUID.js maintainers for reliable identifier generation"}),"\n",(0,s.jsx)(n.li,{children:"The DOMPurify team for security-focused sanitization tools"}),"\n",(0,s.jsx)(n.li,{children:"The Eliza community for their contributions and feedback"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For more information about database management and security:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.sqlite.org/docs.html",children:"SQLite Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.sqlite.org/security.html",children:"Database Security Best Practices"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/cure53/DOMPurify/wiki/Security-Goals-&-Threat-Model",children:"Data Sanitization Guide"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},71184:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var i=r(14041);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);