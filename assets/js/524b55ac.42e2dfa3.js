"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[29026],{21477:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"clients/twitter","title":"Eliza Twitter/X Client","description":"This package provides Twitter/X integration for the Eliza AI agent.","source":"@site/packages/clients/twitter.md","sourceDirName":"clients","slug":"/clients/twitter","permalink":"/eliza/packages/clients/twitter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Telegram Client Plugin for ElizaOS","permalink":"/eliza/packages/clients/telegram"},"next":{"title":"XMTP Client package","permalink":"/eliza/packages/clients/xmtp"}}');var s=i(31085),l=i(71184);const r={},a="Eliza Twitter/X Client",o={},c=[{value:"Features",id:"features",level:2},{value:"Setup Guide",id:"setup-guide",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Configure Environment Variables",id:"step-1-configure-environment-variables",level:3},{value:"Step 2: Initialize the Client",id:"step-2-initialize-the-client",level:3},{value:"Features",id:"features-1",level:2},{value:"Post Generation",id:"post-generation",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Search",id:"search",level:3},{value:"Twitter Spaces",id:"twitter-spaces",level:3},{value:"Approval Workflow",id:"approval-workflow",level:3},{value:"Development",id:"development",level:2},{value:"Testing",id:"testing",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"Login Failures",id:"login-failures",level:4},{value:"Post Generation Issues",id:"post-generation-issues",level:4},{value:"Spaces Issues",id:"spaces-issues",level:4},{value:"Security Notes",id:"security-notes",level:2},{value:"Support",id:"support",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"eliza-twitterx-client",children:"Eliza Twitter/X Client"})}),"\n",(0,s.jsx)(n.p,{children:"This package provides Twitter/X integration for the Eliza AI agent."}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Post generation and management"}),"\n",(0,s.jsx)(n.li,{children:"Interaction handling (mentions, replies)"}),"\n",(0,s.jsx)(n.li,{children:"Search functionality"}),"\n",(0,s.jsx)(n.li,{children:"Twitter Spaces support with STT/TTS capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Media handling (images, videos)"}),"\n",(0,s.jsx)(n.li,{children:"Approval workflow via Discord (optional)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup-guide",children:"Setup Guide"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Twitter/X Developer Account with API access"}),"\n",(0,s.jsx)(n.li,{children:"Node.js and bun installed"}),"\n",(0,s.jsx)(n.li,{children:"Discord bot (if using approval workflow)"}),"\n",(0,s.jsx)(n.li,{children:"ElevenLabs API key (if using Spaces with TTS)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-1-configure-environment-variables",children:"Step 1: Configure Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Create or edit ",(0,s.jsx)(n.code,{children:".env"})," file in your project root:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Twitter API Credentials\nTWITTER_USERNAME=           # Your Twitter/X username\nTWITTER_PASSWORD=           # Your Twitter/X password\nTWITTER_EMAIL=              # Your Twitter/X email\nTWITTER_2FA_SECRET=         # Optional: 2FA secret for login\n\n# Twitter Client Configuration\nTWITTER_DRY_RUN=false      # Set to true for testing without posting\nMAX_TWEET_LENGTH=280       # Default tweet length limit\nTWITTER_SEARCH_ENABLE=false # Enable search functionality\nTWITTER_RETRY_LIMIT=5      # Login retry attempts\nTWITTER_POLL_INTERVAL=120  # Poll interval in seconds\nTWITTER_TARGET_USERS=      # Comma-separated list of target users\n\n# Post Generation Settings\nENABLE_TWITTER_POST_GENERATION=true\nPOST_INTERVAL_MIN=90       # Minimum interval between posts (minutes)\nPOST_INTERVAL_MAX=180      # Maximum interval between posts (minutes)\nPOST_IMMEDIATELY=false     # Skip approval workflow\n\n# Action Processing\nENABLE_ACTION_PROCESSING=false\nACTION_INTERVAL=5          # Action check interval (minutes)\nMAX_ACTIONS_PROCESSING=1   # Maximum concurrent actions\n\n# Spaces Configuration (Optional)\nTWITTER_SPACES_ENABLE=false\nELEVENLABS_XI_API_KEY=     # Required for TTS in Spaces\n\n# Approval Workflow (Optional)\nTWITTER_APPROVAL_DISCORD_BOT_TOKEN=\nTWITTER_APPROVAL_DISCORD_CHANNEL_ID=\nTWITTER_APPROVAL_CHECK_INTERVAL=300000  # 5 minutes in milliseconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-initialize-the-client",children:"Step 2: Initialize the Client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { TwitterClientInterface } from '@elizaos/twitter';\n\nconst twitterPlugin = {\n  name: 'twitter',\n  description: 'Twitter client',\n  clients: [TwitterClientInterface],\n};\n\n// Register with your Eliza runtime\nruntime.registerPlugin(twitterPlugin);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"features-1",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"post-generation",children:"Post Generation"}),"\n",(0,s.jsx)(n.p,{children:"The client can automatically generate and post tweets based on your agent's character profile and topics. Posts can be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular tweets (\u2264280 characters)"}),"\n",(0,s.jsx)(n.li,{children:"Long-form tweets (Note Tweets)"}),"\n",(0,s.jsx)(n.li,{children:"Media tweets (with images/videos)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"interactions",children:"Interactions"}),"\n",(0,s.jsx)(n.p,{children:"Handles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mentions"}),"\n",(0,s.jsx)(n.li,{children:"Replies"}),"\n",(0,s.jsx)(n.li,{children:"Quote tweets"}),"\n",(0,s.jsx)(n.li,{children:"Direct messages"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"search",children:"Search"}),"\n",(0,s.jsx)(n.p,{children:"When enabled, periodically searches Twitter for relevant topics and engages with found content."}),"\n",(0,s.jsx)(n.h3,{id:"twitter-spaces",children:"Twitter Spaces"}),"\n",(0,s.jsx)(n.p,{children:"Supports creating and managing Twitter Spaces with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Speech-to-Text (STT) for transcription"}),"\n",(0,s.jsx)(n.li,{children:"Text-to-Speech (TTS) via ElevenLabs"}),"\n",(0,s.jsx)(n.li,{children:"Speaker management"}),"\n",(0,s.jsx)(n.li,{children:"Idle monitoring"}),"\n",(0,s.jsx)(n.li,{children:"Recording capabilities"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"approval-workflow",children:"Approval Workflow"}),"\n",(0,s.jsx)(n.p,{children:"Optional Discord-based approval system for tweets:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generated tweets are sent to a Discord channel"}),"\n",(0,s.jsx)(n.li,{children:"Moderators can approve/reject via reactions"}),"\n",(0,s.jsx)(n.li,{children:"Approved tweets are automatically posted"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Run tests\nbun test\n\n# Run with debug logging\nDEBUG=eliza:* bun start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsx)(n.h4,{id:"login-failures",children:"Login Failures"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify credentials in .env"}),"\n",(0,s.jsx)(n.li,{children:"Check 2FA configuration"}),"\n",(0,s.jsx)(n.li,{children:"Ensure no rate limiting"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"post-generation-issues",children:"Post Generation Issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify character profile configuration"}),"\n",(0,s.jsx)(n.li,{children:"Check MAX_TWEET_LENGTH setting"}),"\n",(0,s.jsx)(n.li,{children:"Monitor approval workflow logs"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"spaces-issues",children:"Spaces Issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify ELEVENLABS_XI_API_KEY if using TTS"}),"\n",(0,s.jsx)(n.li,{children:"Check space configuration in character profile"}),"\n",(0,s.jsx)(n.li,{children:"Monitor idle timeout settings"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-notes",children:"Security Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Never commit .env or credential files"}),"\n",(0,s.jsx)(n.li,{children:"Use environment variables for sensitive data"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper rate limiting"}),"\n",(0,s.jsx)(n.li,{children:"Monitor API usage and costs (especially for ElevenLabs)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,s.jsx)(n.p,{children:"For issues or questions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Check the Common Issues section"}),"\n",(0,s.jsx)(n.li,{children:"Review debug logs (enable with DEBUG=eliza:*)"}),"\n",(0,s.jsxs)(n.li,{children:["Open an issue with:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Error messages"}),"\n",(0,s.jsx)(n.li,{children:"Configuration details"}),"\n",(0,s.jsx)(n.li,{children:"Steps to reproduce"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(14041);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);