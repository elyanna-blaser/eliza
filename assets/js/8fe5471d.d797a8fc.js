"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[3339],{71184:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(14041);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},92574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"core/rooms","title":"Rooms","description":"Rooms in ElizaOS represent individual interaction spaces within a world. A room can be a conversation, a channel, a thread, or any other defined space where entities can exchange messages and interact. Rooms are typically contained within a world, though they can also exist independently.","source":"@site/docs/core/rooms.md","sourceDirName":"core","slug":"/core/rooms","permalink":"/eliza/docs/core/rooms","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/docs/core/rooms.md","tags":[],"version":"current","lastUpdatedBy":"Shaw","lastUpdatedAt":1742108548000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Reflection","permalink":"/eliza/docs/core/reflection"},"next":{"title":"Services","permalink":"/eliza/docs/core/services"}}');var i=t(31085),s=t(71184);const o={sidebar_position:8},a="Rooms",d={},l=[{value:"Room Structure",id:"room-structure",level:2},{value:"Room Types",id:"room-types",level:2},{value:"Room Creation and Management",id:"room-creation-and-management",level:2},{value:"Creating a Room",id:"creating-a-room",level:3},{value:"Ensuring a Room Exists",id:"ensuring-a-room-exists",level:3},{value:"Retrieving Room Information",id:"retrieving-room-information",level:3},{value:"Updating Room Properties",id:"updating-room-properties",level:3},{value:"Deleting a Room",id:"deleting-a-room",level:3},{value:"Participants in Rooms",id:"participants-in-rooms",level:2},{value:"Managing Room Participants",id:"managing-room-participants",level:3},{value:"Participant States",id:"participant-states",level:3},{value:"Following and Unfollowing Rooms",id:"following-and-unfollowing-rooms",level:2},{value:"Memory and Messages in Rooms",id:"memory-and-messages-in-rooms",level:2},{value:"Events Related to Rooms",id:"events-related-to-rooms",level:2},{value:"Handling Room Events",id:"handling-room-events",level:3},{value:"Room Connection with External Systems",id:"room-connection-with-external-systems",level:2},{value:"Best Practices",id:"best-practices",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"rooms",children:"Rooms"})}),"\n",(0,i.jsx)(n.p,{children:"Rooms in ElizaOS represent individual interaction spaces within a world. A room can be a conversation, a channel, a thread, or any other defined space where entities can exchange messages and interact. Rooms are typically contained within a world, though they can also exist independently."}),"\n",(0,i.jsx)(n.h2,{id:"room-structure",children:"Room Structure"}),"\n",(0,i.jsx)(n.p,{children:"A room in ElizaOS has the following properties:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Room = {\n  id: UUID;\n  name?: string;\n  agentId?: UUID;\n  source: string;\n  type: ChannelType;\n  channelId?: string;\n  serverId?: string;\n  worldId?: UUID;\n  metadata?: Record<string, unknown>;\n};\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:"Unique identifier for the room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{children:"Optional display name for the room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"agentId"})}),(0,i.jsx)(n.td,{children:"Optional ID of the agent associated with this room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"source"})}),(0,i.jsx)(n.td,{children:"The platform or origin of the room (e.g., 'discord', 'telegram')"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"type"})}),(0,i.jsx)(n.td,{children:"Type of room (DM, GROUP, THREAD, etc.)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"channelId"})}),(0,i.jsx)(n.td,{children:"External system channel identifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"serverId"})}),(0,i.jsx)(n.td,{children:"External system server identifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"worldId"})}),(0,i.jsx)(n.td,{children:"Optional ID of the parent world"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metadata"})}),(0,i.jsx)(n.td,{children:"Additional room configuration data"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"room-types",children:"Room Types"}),"\n",(0,i.jsxs)(n.p,{children:["ElizaOS supports several room types, defined in the ",(0,i.jsx)(n.code,{children:"ChannelType"})," enum:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SELF"})}),(0,i.jsx)(n.td,{children:"Messages to self"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DM"})}),(0,i.jsx)(n.td,{children:"Direct messages between two participants"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GROUP"})}),(0,i.jsx)(n.td,{children:"Group messages with multiple participants"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VOICE_DM"})}),(0,i.jsx)(n.td,{children:"Voice direct messages"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VOICE_GROUP"})}),(0,i.jsx)(n.td,{children:"Voice channels with multiple participants"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FEED"})}),(0,i.jsx)(n.td,{children:"Social media feed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"THREAD"})}),(0,i.jsx)(n.td,{children:"Threaded conversation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"WORLD"})}),(0,i.jsx)(n.td,{children:"World channel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FORUM"})}),(0,i.jsx)(n.td,{children:"Forum discussion"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"API"})}),(0,i.jsx)(n.td,{children:"Legacy type - Use DM or GROUP instead"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"room-creation-and-management",children:"Room Creation and Management"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-room",children:"Creating a Room"}),"\n",(0,i.jsx)(n.p,{children:"You can create a new room using the AgentRuntime:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const roomId = await runtime.createRoom({\n  name: 'general-chat',\n  source: 'discord',\n  type: ChannelType.GROUP,\n  channelId: 'external-channel-id',\n  serverId: 'external-server-id',\n  worldId: parentWorldId,\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ensuring-a-room-exists",children:"Ensuring a Room Exists"}),"\n",(0,i.jsx)(n.p,{children:"To create a room if it doesn't already exist:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await runtime.ensureRoomExists({\n  id: roomId,\n  name: 'general-chat',\n  source: 'discord',\n  type: ChannelType.GROUP,\n  channelId: 'external-channel-id',\n  serverId: 'external-server-id',\n  worldId: parentWorldId,\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"retrieving-room-information",children:"Retrieving Room Information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Get a specific room\nconst room = await runtime.getRoom(roomId);\n\n// Get all rooms in a world\nconst worldRooms = await runtime.getRooms(worldId);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"updating-room-properties",children:"Updating Room Properties"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await runtime.updateRoom({\n  id: roomId,\n  name: 'renamed-channel',\n  metadata: {\n    ...room.metadata,\n    customProperty: 'value',\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deleting-a-room",children:"Deleting a Room"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await runtime.deleteRoom(roomId);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"participants-in-rooms",children:"Participants in Rooms"}),"\n",(0,i.jsx)(n.p,{children:"Rooms can have multiple participants (entities) that can exchange messages."}),"\n",(0,i.jsx)(n.h3,{id:"managing-room-participants",children:"Managing Room Participants"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Add a participant to a room\nawait runtime.addParticipant(entityId, roomId);\n\n// Remove a participant from a room\nawait runtime.removeParticipant(entityId, roomId);\n\n// Get all participants in a room\nconst participants = await runtime.getParticipantsForRoom(roomId);\n\n// Get all rooms where an entity is a participant\nconst entityRooms = await runtime.getRoomsForParticipant(entityId);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"participant-states",children:"Participant States"}),"\n",(0,i.jsx)(n.p,{children:"Participants can have different states in a room:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Get a participant's state in a room\nconst state = await runtime.getParticipantUserState(roomId, entityId);\n// Returns: 'FOLLOWED', 'MUTED', or null\n\n// Set a participant's state in a room\nawait runtime.setParticipantUserState(roomId, entityId, 'FOLLOWED');\n"})}),"\n",(0,i.jsx)(n.p,{children:"The participant states are:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"State"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FOLLOWED"})}),(0,i.jsx)(n.td,{children:"The agent actively follows the conversation and responds without being directly mentioned"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MUTED"})}),(0,i.jsx)(n.td,{children:"The agent ignores messages in this room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:"Default state - the agent responds only when directly mentioned"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"following-and-unfollowing-rooms",children:"Following and Unfollowing Rooms"}),"\n",(0,i.jsxs)(n.p,{children:['ElizaOS allows agents to "follow" rooms to actively participate in conversations without being explicitly mentioned. This functionality is managed through the ',(0,i.jsx)(n.code,{children:"FOLLOW_ROOM"})," and ",(0,i.jsx)(n.code,{children:"UNFOLLOW_ROOM"})," actions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Follow a room (typically triggered by an action)\nawait runtime.setParticipantUserState(roomId, runtime.agentId, 'FOLLOWED');\n\n// Unfollow a room\nawait runtime.setParticipantUserState(roomId, runtime.agentId, null);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"memory-and-messages-in-rooms",children:"Memory and Messages in Rooms"}),"\n",(0,i.jsx)(n.p,{children:"Rooms store messages as memories in the database:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Create a new message in a room\nconst messageId = await runtime.createMemory(\n  {\n    entityId: senderEntityId,\n    agentId: runtime.agentId,\n    roomId: roomId,\n    content: {\n      text: 'Hello, world!',\n      source: 'discord',\n    },\n    metadata: {\n      type: 'message',\n    },\n  },\n  'messages'\n);\n\n// Retrieve recent messages from a room\nconst messages = await runtime.getMemories({\n  roomId: roomId,\n  count: 10,\n  unique: true,\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"events-related-to-rooms",children:"Events Related to Rooms"}),"\n",(0,i.jsx)(n.p,{children:"ElizaOS emits events related to room activities:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Event"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ROOM_JOINED"})}),(0,i.jsx)(n.td,{children:"Emitted when an entity joins a room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ROOM_LEFT"})}),(0,i.jsx)(n.td,{children:"Emitted when an entity leaves a room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MESSAGE_RECEIVED"})}),(0,i.jsx)(n.td,{children:"Emitted when a message is received in a room"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MESSAGE_SENT"})}),(0,i.jsx)(n.td,{children:"Emitted when a message is sent to a room"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"handling-room-events",children:"Handling Room Events"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Register event handlers in your plugin\nconst myPlugin: Plugin = {\n  name: 'my-room-plugin',\n  description: 'Handles room events',\n\n  events: {\n    [EventTypes.ROOM_JOINED]: [\n      async (payload) => {\n        const { runtime, entityId, roomId } = payload;\n        console.log(`Entity ${entityId} joined room ${roomId}`);\n      },\n    ],\n\n    [EventTypes.MESSAGE_RECEIVED]: [\n      async (payload: MessagePayload) => {\n        const { runtime, message } = payload;\n        console.log(`Message received in room ${message.roomId}`);\n      },\n    ],\n  },\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"room-connection-with-external-systems",children:"Room Connection with External Systems"}),"\n",(0,i.jsx)(n.p,{children:"When integrating with external platforms, rooms are typically mapped to channels, conversations, or other interaction spaces:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Ensure the connection exists for a room from an external system\nawait runtime.ensureConnection({\n  entityId: userEntityId,\n  roomId: roomId,\n  userName: 'username',\n  name: 'display-name',\n  source: 'discord',\n  channelId: 'external-channel-id',\n  serverId: 'external-server-id',\n  type: ChannelType.GROUP,\n  worldId: parentWorldId,\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use appropriate room types"}),": Select the most appropriate room type for each interaction context"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Follow relationship order"}),": Create worlds before creating rooms, as rooms often have a parent world"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use ensureRoomExists"}),": Use this method to avoid duplicate rooms when syncing with external systems"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clean up rooms"}),": Delete rooms when they're no longer needed to prevent database bloat"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Room metadata"}),": Use metadata for room-specific configuration that doesn't fit into the standard properties"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Follow state management"}),": Implement clear rules for when agents should follow or unfollow rooms"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Handle participants carefully"}),": Ensure that participant management aligns with external platform behavior"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);