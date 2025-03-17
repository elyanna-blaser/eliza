"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[3006],{25244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"core/services","title":"\ud83d\udd0c Services","description":"Services are core components in Eliza that enable AI agents to interact with external platforms and services. Each service provides a specialized interface for communication while maintaining consistent agent behavior across different platforms.","source":"@site/docs/core/services.md","sourceDirName":"core","slug":"/core/services","permalink":"/eliza/docs/core/services","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/docs/core/services.md","tags":[],"version":"current","lastUpdatedBy":"Shaw","lastUpdatedAt":1742108548000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Rooms","permalink":"/eliza/docs/core/rooms"},"next":{"title":"Tasks","permalink":"/eliza/docs/core/tasks"}}');var t=s(31085),r=s(71184);const a={sidebar_position:3},c="\ud83d\udd0c Services",d={},o=[{value:"Supported Services",id:"supported-services",level:2},{value:"System Overview",id:"system-overview",level:2},{value:"Service Configuration",id:"service-configuration",level:2},{value:"Service Implementation",id:"service-implementation",level:2},{value:"Runtime Integration",id:"runtime-integration",level:3},{value:"Memory System Integration",id:"memory-system-integration",level:3},{value:"Direct Service Example",id:"direct-service-example",level:2},{value:"Direct Service API Endpoints",id:"direct-service-api-endpoints",level:3},{value:"Static Routes",id:"static-routes",level:3},{value:"Common Parameters",id:"common-parameters",level:3},{value:"FAQ",id:"faq",level:2},{value:"What can services actually do?",id:"what-can-services-actually-do",level:3},{value:"Can multiple services be used simultaneously?",id:"can-multiple-services-be-used-simultaneously",level:3},{value:"How are service-specific features handled?",id:"how-are-service-specific-features-handled",level:3},{value:"How do services handle rate limits?",id:"how-do-services-handle-rate-limits",level:3},{value:"How is service state managed?",id:"how-is-service-state-managed",level:3},{value:"How do services handle messages?",id:"how-do-services-handle-messages",level:3},{value:"How are messages processed across services?",id:"how-are-messages-processed-across-services",level:3},{value:"How is state managed between services?",id:"how-is-state-managed-between-services",level:3},{value:"How do services integrate with platforms?",id:"how-do-services-integrate-with-platforms",level:3},{value:"How do services manage memory?",id:"how-do-services-manage-memory",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-services",children:"\ud83d\udd0c Services"})}),"\n",(0,t.jsx)(n.p,{children:"Services are core components in Eliza that enable AI agents to interact with external platforms and services. Each service provides a specialized interface for communication while maintaining consistent agent behavior across different platforms."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"supported-services",children:"Supported Services"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Service"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Key Features"}),(0,t.jsx)(n.th,{children:"Use Cases"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-discord",children:"Discord"})}),(0,t.jsx)(n.td,{children:"Communication"}),(0,t.jsx)(n.td,{children:"\u2022 Voice channels \u2022 Server management \u2022 Moderation tools \u2022 Channel management"}),(0,t.jsx)(n.td,{children:"\u2022 Community management \u2022 Gaming servers \u2022 Event coordination"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-twitter",children:"Twitter"})}),(0,t.jsx)(n.td,{children:"Social Media"}),(0,t.jsx)(n.td,{children:"\u2022 Post scheduling \u2022 Timeline monitoring \u2022 Engagement analytics \u2022 Content automation"}),(0,t.jsx)(n.td,{children:"\u2022 Brand management \u2022 Content creation \u2022 Social engagement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-telegram",children:"Telegram"})}),(0,t.jsx)(n.td,{children:"Messaging"}),(0,t.jsx)(n.td,{children:"\u2022 Bot API \u2022 Group chat \u2022 Media handling \u2022 Command system"}),(0,t.jsx)(n.td,{children:"\u2022 Customer support \u2022 Community engagement \u2022 Broadcast messaging"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaOS/eliza/tree/develop/packages/plugin-direct/src",children:"Direct"})}),(0,t.jsx)(n.td,{children:"API"}),(0,t.jsx)(n.td,{children:"\u2022 REST endpoints \u2022 Web integration \u2022 Custom applications \u2022 Real-time communication"}),(0,t.jsx)(n.td,{children:"\u2022 Backend integration \u2022 Web apps \u2022 Custom interfaces"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-github",children:"GitHub"})}),(0,t.jsx)(n.td,{children:"Development"}),(0,t.jsx)(n.td,{children:"\u2022 Repository management \u2022 Issue tracking \u2022 Pull requests \u2022 Code review"}),(0,t.jsx)(n.td,{children:"\u2022 Development workflow \u2022 Project management \u2022 Team collaboration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-slack",children:"Slack"})}),(0,t.jsx)(n.td,{children:"Enterprise"}),(0,t.jsx)(n.td,{children:"\u2022 Channel management \u2022 Conversation analysis \u2022 Workspace tools \u2022 Integration hooks"}),(0,t.jsx)(n.td,{children:"\u2022 Team collaboration \u2022 Process automation \u2022 Internal tools"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-lens",children:"Lens"})}),(0,t.jsx)(n.td,{children:"Web3"}),(0,t.jsx)(n.td,{children:"\u2022 Decentralized networking \u2022 Content publishing \u2022 Memory management \u2022 Web3 integration"}),(0,t.jsx)(n.td,{children:"\u2022 Web3 social networking \u2022 Content distribution \u2022 Decentralized apps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-farcaster",children:"Farcaster"})}),(0,t.jsx)(n.td,{children:"Web3"}),(0,t.jsx)(n.td,{children:"\u2022 Decentralized social \u2022 Content publishing \u2022 Community engagement"}),(0,t.jsx)(n.td,{children:"\u2022 Web3 communities \u2022 Content creation \u2022 Social networking"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/elizaos-plugins/plugin-auto",children:"Auto"})}),(0,t.jsx)(n.td,{children:"Automation"}),(0,t.jsx)(n.td,{children:"\u2022 Workload management \u2022 Task scheduling \u2022 Process automation"}),(0,t.jsx)(n.td,{children:"\u2022 Background jobs \u2022 Automated tasks \u2022 System maintenance"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*Additional services"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Instagram: Social media content and engagement"}),"\n",(0,t.jsx)(n.li,{children:"XMTP: Web3 messaging and communications"}),"\n",(0,t.jsx)(n.li,{children:"Alexa: Voice interface and smart device control"}),"\n",(0,t.jsx)(n.li,{children:"Home Assistant: Home automation OS"}),"\n",(0,t.jsx)(n.li,{children:"Devai.me: AI first social service"}),"\n",(0,t.jsx)(n.li,{children:"Simsai: Jeeter / Social media platform for AI"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"system-overview",children:"System Overview"}),"\n",(0,t.jsx)(n.p,{children:"Services serve as bridges between Eliza agents and various platforms, providing core capabilities:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Message Processing"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Platform-specific message formatting and delivery"}),"\n",(0,t.jsxs)(n.li,{children:["Media handling and attachments via ",(0,t.jsx)(n.a,{href:"/api/interfaces/Memory",children:(0,t.jsx)(n.code,{children:"Memory"})})," objects"]}),"\n",(0,t.jsx)(n.li,{children:"Reply threading and context management"}),"\n",(0,t.jsx)(n.li,{children:"Support for different content types"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"State & Memory Management"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each service maintains independent state to prevent cross-platform contamination"}),"\n",(0,t.jsx)(n.li,{children:"Integrates with runtime memory managers for different types of content:"}),"\n",(0,t.jsx)(n.li,{children:"Messages processed by one service don't automatically appear in other services' contexts"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/State",children:(0,t.jsx)(n.code,{children:"State"})})," persists across agent restarts through the database adapter"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Platform Integration"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authentication and API compliance"}),"\n",(0,t.jsx)(n.li,{children:"Event processing and webhooks"}),"\n",(0,t.jsx)(n.li,{children:"Rate limiting and cache management"}),"\n",(0,t.jsx)(n.li,{children:"Platform-specific feature support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"service-configuration",children:"Service Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Services are configured through the ",(0,t.jsx)(n.a,{href:"/api/type-aliases/Character",children:(0,t.jsx)(n.code,{children:"Character"})})," configuration's ",(0,t.jsx)(n.code,{children:"settings"})," property:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type Character = {\n  // ... other properties ...\n  settings?: {\n    discord?: {\n      shouldIgnoreBotMessages?: boolean;\n      shouldIgnoreDirectMessages?: boolean;\n      shouldRespondOnlyToMentions?: boolean;\n      messageSimilarityThreshold?: number;\n      isPartOfTeam?: boolean;\n      teamAgentIds?: string[];\n      teamLeaderId?: string;\n      teamMemberInterestKeywords?: string[];\n      allowedChannelIds?: string[];\n      autoPost?: {\n        enabled?: boolean;\n        monitorTime?: number;\n        inactivityThreshold?: number;\n        mainChannelId?: string;\n        announcementChannelIds?: string[];\n        minTimeBetweenPosts?: number;\n      };\n    };\n    telegram?: {\n      shouldIgnoreBotMessages?: boolean;\n      shouldIgnoreDirectMessages?: boolean;\n      shouldRespondOnlyToMentions?: boolean;\n      shouldOnlyJoinInAllowedGroups?: boolean;\n      allowedGroupIds?: string[];\n      messageSimilarityThreshold?: number;\n      // ... other telegram-specific settings\n    };\n    slack?: {\n      shouldIgnoreBotMessages?: boolean;\n      shouldIgnoreDirectMessages?: boolean;\n    };\n    // ... other service configs\n  };\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"service-implementation",children:"Service Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Each service manages its own:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Platform-specific message formatting and delivery"}),"\n",(0,t.jsx)(n.li,{children:"Event processing and webhooks"}),"\n",(0,t.jsx)(n.li,{children:"Authentication and API integration"}),"\n",(0,t.jsx)(n.li,{children:"Message queueing and rate limiting"}),"\n",(0,t.jsx)(n.li,{children:"Media handling and attachments"}),"\n",(0,t.jsx)(n.li,{children:"State management and persistence"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of a basic service implementation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Service, IAgentRuntime } from '@elizaos/core';\n\nexport class CustomService extends Service {\n  static serviceType = 'custom';\n  capabilityDescription = 'The agent is able to interact with the custom platform';\n\n  constructor(protected runtime: IAgentRuntime) {\n    super();\n    // Initialize platform connection\n    // Set up event handlers\n    // Configure message processing\n  }\n\n  static async start(runtime: IAgentRuntime): Promise<CustomService> {\n    const service = new CustomService(runtime);\n    // Additional initialization if needed\n    return service;\n  }\n\n  async stop(): Promise<void> {\n    // Cleanup resources\n    // Close connections\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"runtime-integration",children:"Runtime Integration"}),"\n",(0,t.jsxs)(n.p,{children:["Services interact with the agent runtime through the ",(0,t.jsx)(n.a,{href:"api/interfaces/IAgentRuntime/",children:(0,t.jsx)(n.code,{children:"IAgentRuntime"})})," interface, which provides:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Memory managers for different types of data storage"}),"\n",(0,t.jsx)(n.li,{children:"Service access for capabilities like transcription or image generation"}),"\n",(0,t.jsx)(n.li,{children:"State management and composition"}),"\n",(0,t.jsx)(n.li,{children:"Message processing and action handling"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"memory-system-integration",children:"Memory System Integration"}),"\n",(0,t.jsxs)(n.p,{children:["Services use the runtime's memory managers to persist conversation data (source: ",(0,t.jsx)(n.a,{href:"/api/interfaces/Memory",children:(0,t.jsx)(n.code,{children:"memory.ts"})}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"messageManager"})," Chat messages"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"documentsManager"})," File attachments"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"descriptionManager"})," Media descriptions"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"See example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Store a new message\nawait runtime.messageManager.createMemory({\n    id: messageId,\n    content: { text: message.content },\n    userId: userId,\n    roomId: roomId,\n    agentId: runtime.agentId\n});\n\n// Retrieve recent messages\nconst recentMessages = await runtime.messageManager.getMemories({\nroomId: roomId,\ncount: 10\n});\n\n"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"direct-service-example",children:"Direct Service Example"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/elizaOS/eliza/tree/develop/packages/plugin-direct",children:"Direct service"})," provides message processing, webhook integration, and a REST API interface for Eliza agents. It's the primary service used for testing and development."]}),"\n",(0,t.jsx)(n.p,{children:"Key features of the Direct service:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Express.js server for HTTP endpoints"}),"\n",(0,t.jsx)(n.li,{children:"Agent runtime management"}),"\n",(0,t.jsx)(n.li,{children:"File upload handling"}),"\n",(0,t.jsx)(n.li,{children:"Memory system integration"}),"\n",(0,t.jsx)(n.li,{children:"WebSocket support for real-time communication"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"direct-service-api-endpoints",children:"Direct Service API Endpoints"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Params"}),(0,t.jsx)(n.th,{children:"Input"}),(0,t.jsx)(n.th,{children:"Response"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/:agentId/whisper"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Audio transcription (Whisper)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentId"})}),(0,t.jsx)(n.td,{children:"Audio file"}),(0,t.jsx)(n.td,{children:"Transcription"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/:agentId/message"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Main message handler"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentId"})}),(0,t.jsx)(n.td,{children:"Text, optional file"}),(0,t.jsx)(n.td,{children:"Agent response"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/agents/:agentIdOrName/hyperfi/v1"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Hyperfi game integration"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentIdOrName"})}),(0,t.jsx)(n.td,{children:"Objects, emotes, history"}),(0,t.jsxs)(n.td,{children:["JSON (",(0,t.jsx)(n.code,{children:"lookAt"}),", ",(0,t.jsx)(n.code,{children:"emote"}),", ",(0,t.jsx)(n.code,{children:"say"}),", actions)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/:agentId/image"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Image generation"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentId"})}),(0,t.jsx)(n.td,{children:"Generation params"}),(0,t.jsx)(n.td,{children:"Image(s) with captions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/fine-tune"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Proxy for BagelDB fine-tuning"}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"Fine-tuning data"}),(0,t.jsx)(n.td,{children:"BagelDB API response"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/fine-tune/:assetId"})}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"Download fine-tuned assets"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"assetId"})}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"File download"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/:agentId/speak"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Text-to-speech (ElevenLabs)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentId"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Audio stream"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/:agentId/tts"})}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"Direct text-to-speech"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"agentId"})}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Audio stream"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"static-routes",children:"Static Routes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/media/uploads/"})}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"Serves uploaded files"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/media/generated/"})}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"Serves generated images"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"common-parameters",children:"Common Parameters"}),"\n",(0,t.jsx)(n.p,{children:"Most endpoints accept:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"roomId"})," (defaults to agent-specific room)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"userId"})," (defaults to ",(0,t.jsx)(n.code,{children:'"user"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"userName"})," (for identity management)"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"what-can-services-actually-do",children:"What can services actually do?"}),"\n",(0,t.jsx)(n.p,{children:"Services handle platform-specific communication (like Discord messages or Twitter posts), manage memories and state, and execute actions like processing media or handling commands. Each service adapts these capabilities to its platform while maintaining consistent agent behavior."}),"\n",(0,t.jsx)(n.h3,{id:"can-multiple-services-be-used-simultaneously",children:"Can multiple services be used simultaneously?"}),"\n",(0,t.jsx)(n.p,{children:"Yes, Eliza supports running multiple services concurrently while maintaining consistent agent behavior across platforms."}),"\n",(0,t.jsx)(n.h3,{id:"how-are-service-specific-features-handled",children:"How are service-specific features handled?"}),"\n",(0,t.jsx)(n.p,{children:"Each service implements platform-specific features through its capabilities system, while maintaining a consistent interface for the agent."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-services-handle-rate-limits",children:"How do services handle rate limits?"}),"\n",(0,t.jsx)(n.p,{children:"Services implement platform-specific rate limiting with backoff strategies and queue management."}),"\n",(0,t.jsx)(n.h3,{id:"how-is-service-state-managed",children:"How is service state managed?"}),"\n",(0,t.jsx)(n.p,{children:"Services maintain their own connection state while integrating with the agent's runtime database adapter and memory / state management system."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-services-handle-messages",children:"How do services handle messages?"}),"\n",(0,t.jsx)(n.p,{children:"Services translate platform messages into Eliza's internal format, process any attachments (images, audio, etc.), maintain conversation context, and manage response queuing and rate limits."}),"\n",(0,t.jsx)(n.h3,{id:"how-are-messages-processed-across-services",children:"How are messages processed across services?"}),"\n",(0,t.jsx)(n.p,{children:"Each service processes messages independently in its platform-specific format, while maintaining conversation context through the shared memory system. V2 improves upon this architecture."}),"\n",(0,t.jsx)(n.h3,{id:"how-is-state-managed-between-services",children:"How is state managed between services?"}),"\n",(0,t.jsx)(n.p,{children:"Each service maintains separate state to prevent cross-contamination, but can access shared agent state through the runtime."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-services-integrate-with-platforms",children:"How do services integrate with platforms?"}),"\n",(0,t.jsx)(n.p,{children:"Each service implements platform-specific authentication, API compliance, webhook handling, and follows the platform's rules for rate limiting and content formatting."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-services-manage-memory",children:"How do services manage memory?"}),"\n",(0,t.jsx)(n.p,{children:"Services use Eliza's memory system to track conversations, user relationships, and state, enabling context-aware responses and persistent interactions across sessions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71184:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(14041);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);