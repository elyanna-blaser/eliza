"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[12241],{18593:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"plugins/3d-generation","title":"@elizaos/plugin-3d-generation","description":"A plugin for generating 3D models using the FAL.ai API within the ElizaOS ecosystem.","source":"@site/packages/plugins/3d-generation.md","sourceDirName":"plugins","slug":"/plugins/3d-generation","permalink":"/eliza/packages/plugins/3d-generation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"@elizaos/plugin-0x","permalink":"/eliza/packages/plugins/0x"},"next":{"title":"@elizaos/plugin-attps","permalink":"/eliza/packages/plugins/ATTPs"}}');var s=i(31085),r=i(71184);const t={},c="@elizaos/plugin-3d-generation",o={},a=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Integration",id:"basic-integration",level:3},{value:"Model Generation Examples",id:"model-generation-examples",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Actions",id:"actions",level:3},{value:"GENERATE_3D",id:"generate_3d",level:4},{value:"Common Issues &amp; Troubleshooting",id:"common-issues--troubleshooting",level:2},{value:"Security Best Practices",id:"security-best-practices",level:2},{value:"Development Guide",id:"development-guide",level:2},{value:"Setting Up Development Environment",id:"setting-up-development-environment",level:3},{value:"Future Enhancements",id:"future-enhancements",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elizaosplugin-3d-generation",children:"@elizaos/plugin-3d-generation"})}),"\n",(0,s.jsx)(n.p,{children:"A plugin for generating 3D models using the FAL.ai API within the ElizaOS ecosystem."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The 3D Generation plugin enables AI-powered creation of 3D models through FAL.ai's services. It provides functionality to generate 3D models from text descriptions and save them locally."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install @elizaos/plugin-3d-generation\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The plugin requires the following environment variable or runtime setting to be set:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"FAL_API_KEY=<Your FAL.ai API key>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"basic-integration",children:"Basic Integration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ThreeDGenerationPlugin } from '@elizaos/plugin-3d-generation';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"model-generation-examples",children:"Model Generation Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// The plugin responds to natural language commands like:\n\n'Generate a 3D object of a cat playing piano';\n'Create a 3D object of an anime character Goku';\n'Make a 3D model of [your description]';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.h4,{id:"generate_3d",children:"GENERATE_3D"}),"\n",(0,s.jsx)(n.p,{children:"Generates 3D models based on text descriptions."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Aliases:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"3D_GENERATION"}),"\n",(0,s.jsx)(n.li,{children:"3D_GEN"}),"\n",(0,s.jsx)(n.li,{children:"CREATE_3D"}),"\n",(0,s.jsx)(n.li,{children:"MAKE_3D"}),"\n",(0,s.jsx)(n.li,{children:"TEXT23D"}),"\n",(0,s.jsx)(n.li,{children:"TEXT_TO_3D"}),"\n",(0,s.jsx)(n.li,{children:"3D_CREATE"}),"\n",(0,s.jsx)(n.li,{children:"3D_MAKE"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Default Configuration:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'{\n    geometry_file_format: "glb",  // Available: glb, usdz, fbx, obj, stl\n    material: "PBR",             // Available: PBR, Shaded\n    quality: "medium",           // Available: extra-low, low, medium, high\n    tier: "Regular"              // Available: Regular, Sketch\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"common-issues--troubleshooting",children:"Common Issues & Troubleshooting"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Generation Failures"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify FAL API key is correctly set"}),"\n",(0,s.jsx)(n.li,{children:"Ensure prompt is descriptive (minimum 3 characters)"}),"\n",(0,s.jsx)(n.li,{children:"Check network connectivity to FAL.ai services"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Storage Issues"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify write permissions to content_cache directory"}),"\n",(0,s.jsx)(n.li,{children:"Ensure sufficient disk space"}),"\n",(0,s.jsx)(n.li,{children:"Check if content_cache directory exists"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-best-practices",children:"Security Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Store FAL API key securely using runtime settings or environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Never commit API keys to version control"}),"\n",(0,s.jsx)(n.li,{children:"Monitor API usage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"development-guide",children:"Development Guide"}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-development-environment",children:"Setting Up Development Environment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository"}),"\n",(0,s.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Build the plugin:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun run build\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run the plugin:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bun run dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"future-enhancements",children:"Future Enhancements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Advanced Generation Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multi-object scene generation"}),"\n",(0,s.jsx)(n.li,{children:"Texture customization options"}),"\n",(0,s.jsx)(n.li,{children:"Animation support"}),"\n",(0,s.jsx)(n.li,{children:"Material property controls"}),"\n",(0,s.jsx)(n.li,{children:"Advanced lighting systems"}),"\n",(0,s.jsx)(n.li,{children:"Physics-based rendering"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Model Optimization"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatic mesh simplification"}),"\n",(0,s.jsx)(n.li,{children:"LOD (Level of Detail) generation"}),"\n",(0,s.jsx)(n.li,{children:"Texture compression"}),"\n",(0,s.jsx)(n.li,{children:"File size optimization"}),"\n",(0,s.jsx)(n.li,{children:"Performance profiling"}),"\n",(0,s.jsx)(n.li,{children:"Mobile-friendly exports"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Format Support"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Additional file format exports"}),"\n",(0,s.jsx)(n.li,{children:"Custom format converters"}),"\n",(0,s.jsx)(n.li,{children:"Batch format conversion"}),"\n",(0,s.jsx)(n.li,{children:"Format-specific optimizations"}),"\n",(0,s.jsx)(n.li,{children:"Metadata preservation"}),"\n",(0,s.jsx)(n.li,{children:"Version control integration"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"AI Improvements"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enhanced prompt understanding"}),"\n",(0,s.jsx)(n.li,{children:"Style transfer capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Real-time generation"}),"\n",(0,s.jsx)(n.li,{children:"Multi-model support"}),"\n",(0,s.jsx)(n.li,{children:"Quality improvements"}),"\n",(0,s.jsx)(n.li,{children:"Consistency controls"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Scene Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scene composition tools"}),"\n",(0,s.jsx)(n.li,{children:"Environment management"}),"\n",(0,s.jsx)(n.li,{children:"Asset library integration"}),"\n",(0,s.jsx)(n.li,{children:"Scene presets"}),"\n",(0,s.jsx)(n.li,{children:"Batch processing"}),"\n",(0,s.jsx)(n.li,{children:"Scene version control"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Developer Tools"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"API expansion"}),"\n",(0,s.jsx)(n.li,{children:"Testing framework"}),"\n",(0,s.jsx)(n.li,{children:"Documentation generator"}),"\n",(0,s.jsx)(n.li,{children:"Debug visualization"}),"\n",(0,s.jsx)(n.li,{children:"Performance monitoring"}),"\n",(0,s.jsx)(n.li,{children:"Integration templates"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Rendering Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Real-time preview"}),"\n",(0,s.jsx)(n.li,{children:"Custom shader support"}),"\n",(0,s.jsx)(n.li,{children:"Post-processing effects"}),"\n",(0,s.jsx)(n.li,{children:"Render queue management"}),"\n",(0,s.jsx)(n.li,{children:"Batch rendering"}),"\n",(0,s.jsx)(n.li,{children:"Cloud rendering options"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Collaboration Features"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Asset sharing"}),"\n",(0,s.jsx)(n.li,{children:"Version control"}),"\n",(0,s.jsx)(n.li,{children:"Team workspace"}),"\n",(0,s.jsx)(n.li,{children:"Review system"}),"\n",(0,s.jsx)(n.li,{children:"Access control"}),"\n",(0,s.jsx)(n.li,{children:"Change tracking"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We welcome community feedback and contributions to help prioritize these enhancements."}),"\n",(0,s.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsx)(n.p,{children:"Contributions are welcome! Please see the CONTRIBUTING.md file for more information."}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"This plugin integrates with and builds upon several key technologies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://fal.ai/",children:"FAL.ai"}),": AI model deployment platform"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://threejs.org/",children:"Three.js"}),": 3D graphics library"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.khronos.org/gltf/",children:"glTF"}),": 3D file format standard"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://graphics.pixar.com/usd/",children:"USD"}),": Universal Scene Description"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.blender.org/",children:"Blender"}),": 3D creation suite"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Special thanks to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The FAL.ai team for AI infrastructure"}),"\n",(0,s.jsx)(n.li,{children:"The Three.js development community"}),"\n",(0,s.jsx)(n.li,{children:"The Khronos Group for glTF standards"}),"\n",(0,s.jsx)(n.li,{children:"The Pixar USD team"}),"\n",(0,s.jsx)(n.li,{children:"The Blender Foundation"}),"\n",(0,s.jsx)(n.li,{children:"The Eliza community for their contributions and feedback"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For more information about 3D generation capabilities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fal.ai/docs",children:"FAL.ai Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://threejs.org/docs/",children:"Three.js Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/KhronosGroup/glTF",children:"glTF Specification"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://graphics.pixar.com/usd/docs/index.html",children:"USD Documentation"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This plugin is part of the Eliza project. See the main project repository for license information."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var l=i(14041);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);