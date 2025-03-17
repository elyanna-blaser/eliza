"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[8161],{71184:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(14041);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},97828:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"plugins/tee-log","title":"TEE Log Plugin for Eliza","description":"The TEE Log Plugin for Eliza is designed to enhance the logging capabilities of the Eliza by providing a structured way to generate, store and verify TEE (Trusted Execution Environment) logs for agents. This plugin ensures that all sensitive interactions are securely logged, providing a transparent and tamper-resistant record of all sensitive activities.","source":"@site/packages/plugins/tee-log.md","sourceDirName":"plugins","slug":"/plugins/tee-log","permalink":"/eliza/packages/plugins/tee-log","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"suno","permalink":"/eliza/packages/plugins/suno"},"next":{"title":"Marlin TEE Plugin","permalink":"/eliza/packages/plugins/tee-marlin"}}');var s=i(31085),r=i(71184);const o={},l="TEE Log Plugin for Eliza",a={},c=[{value:"Background",id:"background",level:2},{value:"Requirements",id:"requirements",level:2},{value:"TEE Logging Mechanism",id:"tee-logging-mechanism",level:2},{value:"TEE Logging Mechanism",id:"tee-logging-mechanism-1",level:2},{value:"Services",id:"services",level:2},{value:"Class: TeeLogService",id:"class-teelogservice",level:3},{value:"Methods",id:"methods",level:4},{value:"Storage",id:"storage",level:3},{value:"Usage",id:"usage",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tee-log-plugin-for-eliza",children:"TEE Log Plugin for Eliza"})}),"\n",(0,s.jsx)(n.p,{children:"The TEE Log Plugin for Eliza is designed to enhance the logging capabilities of the Eliza by providing a structured way to generate, store and verify TEE (Trusted Execution Environment) logs for agents. This plugin ensures that all sensitive interactions are securely logged, providing a transparent and tamper-resistant record of all sensitive activities."}),"\n",(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"As Eliza is a fully autonomous AI agent capable of running within a TEE, we need to demonstrate to the outside world that we are indeed operating within a TEE. This allows external parties to verify that our actions are protected by the TEE and that they are autonomously executed by Eliza, without any third-party interference. Therefore, it is necessary to leverage TEE's remote attestation and establish a TEE logging mechanism to prove that these operations are entirely and autonomously performed by Eliza within the TEE."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Since the TEE Logging is based on the TEE, it is necessary to have a TEE enabled environment. Currently, we support Intel SGX (Gramine) and Intel TDX (dstack)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"using Intel SGX (Gramine), you need to enable the plugin-sgx in the Eliza runtime, which is enabled in SGX env automatically."}),"\n",(0,s.jsx)(n.li,{children:"using Intel TDX (dstack), you need to enable the plugin-tee in the Eliza runtime."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tee-logging-mechanism",children:"TEE Logging Mechanism"}),"\n",(0,s.jsx)(n.h2,{id:"tee-logging-mechanism-1",children:"TEE Logging Mechanism"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Key Pair Generation and Attestation"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"During startup, each agent generates a key pair and creates a remote attestation for the public key. The private key is securely stored in the TEE's encrypted memory. The agent's relevant information, along with the public key and attestation, is recorded in a local database. A new key pair is generated each time the agent is updated or restarted to ensure key security."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log Recording"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For each log entry, basic information is recorded, including ",(0,s.jsx)(n.code,{children:"agentId"}),", ",(0,s.jsx)(n.code,{children:"roomId"}),", ",(0,s.jsx)(n.code,{children:"userId"}),", ",(0,s.jsx)(n.code,{children:"type"}),", ",(0,s.jsx)(n.code,{children:"content"}),", and ",(0,s.jsx)(n.code,{children:"timestamp"}),". This information is concatenated and signed using the agent's corresponding private key to ensure verifiability. The verification process follows this trust chain:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify the attestation."}),"\n",(0,s.jsx)(n.li,{children:"Trust the public key contained in the attestation."}),"\n",(0,s.jsx)(n.li,{children:"Use the public key to verify the signature."}),"\n",(0,s.jsx)(n.li,{children:"Trust the complete log record."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Storage"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All log data must be stored in the TEE's encrypted file system in production environments. Storing data in plaintext is prohibited to prevent tampering."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log Extraction for Verification"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Third parties can extract TEE logs for verification purposes. Two types of information can be extracted:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Agent Information"}),": This includes the agent's metadata, public key, and attestation, which can be used to verify the agent's public key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Log Information"}),": Required logs can be extracted, with the agent's attestation and public key used to verify the signature, ensuring that each record remains untampered."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Integrity Protection"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When users extract TEE logs via the REST API, the results are hashed, and an attestation is generated. After extraction, users can verify the attestation by comparing the hash value contained within it to the extracted results, thereby ensuring the integrity of the data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[TeeLogService]"}),": This service is responsible for generating and storing TEE logs for agents."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"class-teelogservice",children:"Class: TeeLogService"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TeeLogService"})," class implements the ",(0,s.jsx)(n.code,{children:"ITeeLogService"})," interface and extends the ",(0,s.jsx)(n.code,{children:"Service"})," class. It manages the logging of sensitive interactions within a Trusted Execution Environment (TEE)."]}),"\n",(0,s.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getInstance()"}),": ",(0,s.jsx)(n.code,{children:"TeeLogService"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Returns the singleton instance of the ",(0,s.jsx)(n.code,{children:"TeeLogService"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"static get serviceType()"}),": ",(0,s.jsx)(n.code,{children:"ServiceType"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns the service type for TEE logging."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async initialize(runtime: IAgentRuntime): Promise void"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initializes the TEE log service. It checks the runtime settings to configure the TEE type and enables logging if configured."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async log(agentId: string, roomId: string, userId: string, type: string, content: string): Promise boolean"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Logs an interaction with the specified parameters. Returns ",(0,s.jsx)(n.code,{children:"false"})," if TEE logging is not enabled."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async getAllAgents(): Promise TeeAgent[]"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves all agents that have been logged. Returns an empty array if TEE logging is not enabled."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async getAgent(agentId: string): Promise TeeAgent | undefined"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Retrieves the details of a specific agent by their ID. Returns ",(0,s.jsx)(n.code,{children:"undefined"})," if TEE logging is not enabled."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async getLogs(query: TeeLogQuery, page: number, pageSize: number): Promise PageQuery TeeLog[]"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves logs based on the provided query parameters. Returns an empty result if TEE logging is not enabled."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"async generateAttestation(userReport: string): Promise string"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generates an attestation based on the provided user report."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(n.p,{children:["The TEE logs are stored in a SQLite database, which is located at ",(0,s.jsx)(n.code,{children:"./data/tee_log.sqlite"}),". The database is automatically created when the service is initialized."]}),"\n",(0,s.jsxs)(n.p,{children:["Important: You need to use the encrypted file system to store the database file in production, otherwise the database will be compromised. Since TEE only protects memory-in-use, the disk is not protected by the TEE. However, Many TEE development tools support the encrypted file system, for example, you can refer to the ",(0,s.jsx)(n.a,{href:"https://gramine.readthedocs.io/en/latest/manifest-syntax.html#encrypted-files",children:"Gramine Encrypted files"})," documentation for more information."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To use the ",(0,s.jsx)(n.code,{children:"TeeLogService"}),", ensure that the TEE environment is properly configured and initialized."]}),"\n",(0,s.jsx)(n.p,{children:"Enable the TEE logging in the Eliza .env file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-env",children:"TEE_LOG_ENABLED=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The logging isn't integrated for actions by default, you need to integrate the logging for the actions you want to log. For example, if you want to log the ",(0,s.jsx)(n.code,{children:"Continue"})," action of plugin-bootstrap, you can do the following:"]}),"\n",(0,s.jsx)(n.p,{children:"First, add plugin-tee-log to the dependencies of plugin-bootstrap:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"@elizaos/plugin-tee-log": "workspace:*",\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then, add the following code to the ",(0,s.jsx)(n.code,{children:"Continue"})," action:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ServiceType, ITeeLogService } from '@elizaos/core';\n\n// In the handler of the action\nhandler: async (\n  runtime: IAgentRuntime,\n  message: Memory,\n  state: State,\n  options: any,\n  callback: HandlerCallback\n) => {\n  // Continue the action\n\n  // Log the action\n  const teeLogService = runtime.getService<ITeeLogService>(ServiceType.TEE_LOG).getInstance();\n  if (\n    teeLogService.log(\n      runtime.agentId,\n      message.roomId,\n      message.userId,\n      'The type of the log, for example, Action:CONTINUE',\n      'The content that you want to log'\n    )\n  ) {\n    console.log('Logged TEE log successfully');\n  }\n\n  // Continue the action\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"After configuring the logging for the action, you can run the Eliza and see the logs through the client-direct REST API."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);