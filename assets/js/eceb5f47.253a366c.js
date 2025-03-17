"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[12992],{41104:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"cli/create","title":"Create Command","description":"The create command is used to scaffold new ElizaOS projects or plugins. It guides you through an interactive setup process to generate the appropriate files and configurations.","source":"@site/docs/cli/create.md","sourceDirName":"cli","slug":"/cli/create","permalink":"/eliza/docs/cli/create","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/docs/cli/create.md","tags":[],"version":"current","lastUpdatedBy":"Shaw","lastUpdatedAt":1742108548000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Agent","permalink":"/eliza/docs/cli/agent"},"next":{"title":"Dev","permalink":"/eliza/docs/cli/dev"}}');var r=i(31085),c=i(71184);const l={sidebar_position:2},t="Create Command",a={},o=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Project Types",id:"project-types",level:2},{value:"Project",id:"project",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Interactive Process",id:"interactive-process",level:2},{value:"Examples",id:"examples",level:2},{value:"Creating a basic project",id:"creating-a-basic-project",level:3},{value:"Creating a plugin",id:"creating-a-plugin",level:3},{value:"Specifying a directory",id:"specifying-a-directory",level:3},{value:"Skipping confirmation prompts",id:"skipping-confirmation-prompts",level:3},{value:"After Creation",id:"after-creation",level:2},{value:"Related Commands",id:"related-commands",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"create-command",children:"Create Command"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"create"})," command is used to scaffold new ElizaOS projects or plugins. It guides you through an interactive setup process to generate the appropriate files and configurations."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create [options]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--dir"}),", ",(0,r.jsx)(n.code,{children:"-d"})]}),(0,r.jsx)(n.td,{children:"Installation directory (defaults to project name in current directory)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--yes"}),", ",(0,r.jsx)(n.code,{children:"-y"})]}),(0,r.jsx)(n.td,{children:"Skip confirmation prompts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--type"}),", ",(0,r.jsx)(n.code,{children:"-t"})]}),(0,r.jsxs)(n.td,{children:["Type to create: ",(0,r.jsx)(n.code,{children:"project"})," or ",(0,r.jsx)(n.code,{children:"plugin"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"project-types",children:"Project Types"}),"\n",(0,r.jsx)(n.h3,{id:"project",children:"Project"}),"\n",(0,r.jsx)(n.p,{children:"A standard ElizaOS project with agent configuration, knowledge setup, and essential components."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create --type project\n"})}),"\n",(0,r.jsx)(n.p,{children:"This creates a complete project structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"my-agent-project/\n\u251c\u2500\u2500 knowledge/          # Knowledge files for RAG\n\u251c\u2500\u2500 src/                # Source code directory\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 other configuration files\n"})}),"\n",(0,r.jsx)(n.h3,{id:"plugin",children:"Plugin"}),"\n",(0,r.jsx)(n.p,{children:"A plugin that extends ElizaOS functionality with custom actions, services, providers, or other extensions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create --type plugin\n"})}),"\n",(0,r.jsx)(n.p,{children:"This creates a plugin structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"my-plugin/\n\u251c\u2500\u2500 src/                # Plugin source code\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 other configuration files\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interactive-process",children:"Interactive Process"}),"\n",(0,r.jsx)(n.p,{children:"When run without all options specified, the command launches an interactive wizard:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Project Type"}),": If not specified, select between project or plugin"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Project Name"}),": Enter a name for your project or plugin"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Database Selection"}),": For projects, choose your database (PGLite or Postgres)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Database Configuration"}),": For Postgres, you'll be prompted for your database URL"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-basic-project",children:"Creating a basic project"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create\n# Then follow the interactive prompts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create --type plugin\n# Then follow the interactive prompts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"specifying-a-directory",children:"Specifying a directory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create --dir ./my-projects/new-agent\n"})}),"\n",(0,r.jsx)(n.h3,{id:"skipping-confirmation-prompts",children:"Skipping confirmation prompts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli create --yes\n"})}),"\n",(0,r.jsx)(n.h2,{id:"after-creation",children:"After Creation"}),"\n",(0,r.jsx)(n.p,{children:"Once your project is created:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the project directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd my-project-name\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli start\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or start in development mode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli dev\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Visit ",(0,r.jsx)(n.code,{children:"http://localhost:3000"})," to view your project in the browser"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For plugins, you can:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start development:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli start\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test your plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli test\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Publish your plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @elizaos/cli plugins publish\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/eliza/docs/cli/start",children:(0,r.jsx)(n.code,{children:"start"})}),": Start your created project"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/eliza/docs/cli/dev",children:(0,r.jsx)(n.code,{children:"dev"})}),": Run your project in development mode"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/eliza/docs/cli/env",children:(0,r.jsx)(n.code,{children:"env"})}),": Configure environment variables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/eliza/docs/cli/plugins",children:(0,r.jsx)(n.code,{children:"plugin"})}),": Manage plugins in your project"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(14041);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);