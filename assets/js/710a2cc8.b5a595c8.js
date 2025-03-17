"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[25902],{71184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(14041);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}},75839:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"plugins/aws-s3","title":"@elizaos/plugin-node","description":"Core Node.js plugin for Eliza OS that provides AWS S3 integration for file operations and cloud storage.","source":"@site/packages/plugins/aws-s3.md","sourceDirName":"plugins","slug":"/plugins/aws-s3","permalink":"/eliza/packages/plugins/aws-s3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-avalanche","permalink":"/eliza/packages/plugins/avalanche"},"next":{"title":"@elizaos/plugin-b2","permalink":"/eliza/packages/plugins/b2"}}');var l=i(31085),a=i(71184);const r={},o="@elizaos/plugin-node",t={},c=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"AWS Settings",id:"aws-settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Services",id:"services",level:2},{value:"AwsS3Service",id:"awss3service",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common AWS S3 Issues",id:"common-aws-s3-issues",level:3},{value:"License",id:"license",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elizaosplugin-node",children:"@elizaos/plugin-node"})}),"\n",(0,l.jsx)(n.p,{children:"Core Node.js plugin for Eliza OS that provides AWS S3 integration for file operations and cloud storage."}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"The Node plugin serves as a foundational component of Eliza OS, providing AWS S3 integration for cloud-based file management and storage capabilities."}),"\n",(0,l.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"AWS S3 Integration"}),": File upload and management with AWS S3"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install @elizaos/plugin-node\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(n.p,{children:"The plugin requires AWS environment variables to function:"}),"\n",(0,l.jsx)(n.h3,{id:"aws-settings",children:"AWS Settings"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-env",children:"AWS_ACCESS_KEY_ID=your_aws_access_key\nAWS_SECRET_ACCESS_KEY=your_aws_secret_key\nAWS_REGION=your_aws_region\nAWS_S3_BUCKET=your_s3_bucket\nAWS_S3_UPLOAD_PATH=your_upload_path\nAWS_S3_ENDPOINT=an_alternative_endpoint\nAWS_S3_SSL_ENABLED=boolean(true|false)\nAWS_S3_FORCE_PATH_STYLE=boolean(true|false)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { createNodePlugin } from '@elizaos/plugin-node';\n\n// Initialize the plugin\nconst nodePlugin = createNodePlugin();\n\n// Register with Eliza OS\nelizaos.registerPlugin(nodePlugin);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,l.jsx)(n.h3,{id:"awss3service",children:"AwsS3Service"}),"\n",(0,l.jsx)(n.p,{children:"Handles file uploads and management with AWS S3."}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.h3,{id:"common-aws-s3-issues",children:"Common AWS S3 Issues"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Error: AWS credentials not configured\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verify AWS credentials are set"}),"\n",(0,l.jsx)(n.li,{children:"Check S3 bucket permissions"}),"\n",(0,l.jsx)(n.li,{children:"Ensure correct region configuration"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,l.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);