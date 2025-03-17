"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[46380],{12227:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>x,metadata:()=>i,toc:()=>v});const i=JSON.parse('{"id":"rest/synthesize-speech","title":"Convert text to speech","description":"Converts text to speech using the agent\'s voice","source":"@site/docs/rest/synthesize-speech.api.mdx","sourceDirName":"rest","slug":"/rest/synthesize-speech","permalink":"/eliza/docs/rest/synthesize-speech","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"madjin","lastUpdatedAt":1742183879000,"frontMatter":{"id":"synthesize-speech","title":"Convert text to speech","description":"Converts text to speech using the agent\'s voice","sidebar_label":"Convert text to speech","hide_title":true,"hide_table_of_contents":true,"api":"eJztVktv4zYQ/ivEXLoFFMtttxfd3GwOBgpskKSnJIcxOZa4S5FaknLiFfTfiyHlyEncpii6Pa0uksh5fPOeASLWAapbCB2RbKAArMnGAPcFKArS6y5qZ6GCc2d35GMQkR6jiE5kDtEHbWsRGxKJ84cgdk5LggJcRx6Ze62ggrC3saGgv9L1QVWHHluK5BnBABZbgioDWCsoQLPeDiPTevrSa08Kquh7KiDIhlqEaoC475gtRK9tDQVsnW8xQgV9rxWML+1YfxBuO+OF8T4LpxB/c2rPEl/qks5GJq0GwK4zWiaryk+BBQ6vobjNJ5KRDfTsg6gppFt6jKcAP8d3M7lXZn/PnoYxPYw2dM6GLPTn5ZJfz2WseqWdCNETtuJBx0bM3lfiKdTHdjFH2XZUn7TotXM32qLfQ0b0/hSItd2h0Sq7WbDbvWh1yOnCrvjPHBt6KSmEI8KNc4bQQgH0iG1nCKotmkBjAeS982/LlE7R28G6YGEi0Y4FtBQC1v+Y7UCeUjSiNuFtzg+JkJRIZghtc0D4Moci6sjWZhVP4Xl/IkdSWKyLYut6q75H4/+Kxq+niiVjqMmmlmnr00X6PSrfKCoJWGwcD6rOhWQqz50KSux0mWdiOUyjaSxTuzybwIVy7q5QQCC/O4y03huooImxq8rSOImmcSFWvyyXy1ewf+droWhHxnUtF2eWlCYUh/tqnlIXh4gdpsrBFyNPza1LFwcrjf6K4uO1WF2uXyldXa6FcrJnfclFYuu8eGLZ/bRYLpZnaLoGxZlYia2hR70xJNAqESQa5J/VeuryWx7oD85/XtzZO3vT6MBahQ5CUdC1JcXzbEOiD6TyZEKR/GL2wvfWcupn7dqGiFbSQlxY1TltYxBojHtICKWnVCfFnW3RYs2fCZO2kTzKVENJ/gFbELHxrq9Z49XF9U2m3KKkBRTAEcseObJ4qj6Uqfqm9eTJN+eubXur4x6KoziHqixrHZt+s5CuLYmpXchv4Dzj9GrRHkk8P0z6Z4vVy1ANcyf4F7vYVDFMX3YGteVMSaiHKdNvATs9738FVPMi9jzdOcfnhL8vgHOaBQzDBgP94c048vGXnvweqtv7AnboNWdKKgqlA3+rqd/8jZ3vrqZN7Efxcm37C5OmQ7QclR2anv+ggM+0P1otx/uxgIZQkU+I8u151nt2wzJm7ldddywOHCspqYvHtPMaxVX71FMuP17fQAGbacFsU+MEjw+82eJDxuiSB1KDS2cDGLR1n7olZM38/AnjXxDS","sidebar_class_name":"post api-method","info_path":"docs/rest/eliza-os-api","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Stop the server","permalink":"/eliza/docs/rest/stop-server"},"next":{"title":"Transcribe audio to text","permalink":"/eliza/docs/rest/transcribe-audio"}}');var r=s(31085),n=s(71184),o=s(32851),a=s.n(o),c=s(36601),p=s.n(c),d=s(84515),l=s.n(d),h=s(98125),u=s.n(h),g=(s(98316),s(14435),s(54661));const x={id:"synthesize-speech",title:"Convert text to speech",description:"Converts text to speech using the agent's voice",sidebar_label:"Convert text to speech",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktv4zYQ/ivEXLoFFMtttxfd3GwOBgpskKSnJIcxOZa4S5FaknLiFfTfiyHlyEncpii6Pa0uksh5fPOeASLWAapbCB2RbKAArMnGAPcFKArS6y5qZ6GCc2d35GMQkR6jiE5kDtEHbWsRGxKJ84cgdk5LggJcRx6Ze62ggrC3saGgv9L1QVWHHluK5BnBABZbgioDWCsoQLPeDiPTevrSa08Kquh7KiDIhlqEaoC475gtRK9tDQVsnW8xQgV9rxWML+1YfxBuO+OF8T4LpxB/c2rPEl/qks5GJq0GwK4zWiaryk+BBQ6vobjNJ5KRDfTsg6gppFt6jKcAP8d3M7lXZn/PnoYxPYw2dM6GLPTn5ZJfz2WseqWdCNETtuJBx0bM3lfiKdTHdjFH2XZUn7TotXM32qLfQ0b0/hSItd2h0Sq7WbDbvWh1yOnCrvjPHBt6KSmEI8KNc4bQQgH0iG1nCKotmkBjAeS982/LlE7R28G6YGEi0Y4FtBQC1v+Y7UCeUjSiNuFtzg+JkJRIZghtc0D4Moci6sjWZhVP4Xl/IkdSWKyLYut6q75H4/+Kxq+niiVjqMmmlmnr00X6PSrfKCoJWGwcD6rOhWQqz50KSux0mWdiOUyjaSxTuzybwIVy7q5QQCC/O4y03huooImxq8rSOImmcSFWvyyXy1ewf+droWhHxnUtF2eWlCYUh/tqnlIXh4gdpsrBFyNPza1LFwcrjf6K4uO1WF2uXyldXa6FcrJnfclFYuu8eGLZ/bRYLpZnaLoGxZlYia2hR70xJNAqESQa5J/VeuryWx7oD85/XtzZO3vT6MBahQ5CUdC1JcXzbEOiD6TyZEKR/GL2wvfWcupn7dqGiFbSQlxY1TltYxBojHtICKWnVCfFnW3RYs2fCZO2kTzKVENJ/gFbELHxrq9Z49XF9U2m3KKkBRTAEcseObJ4qj6Uqfqm9eTJN+eubXur4x6KoziHqixrHZt+s5CuLYmpXchv4Dzj9GrRHkk8P0z6Z4vVy1ANcyf4F7vYVDFMX3YGteVMSaiHKdNvATs9738FVPMi9jzdOcfnhL8vgHOaBQzDBgP94c048vGXnvweqtv7AnboNWdKKgqlA3+rqd/8jZ3vrqZN7Efxcm37C5OmQ7QclR2anv+ggM+0P1otx/uxgIZQkU+I8u151nt2wzJm7ldddywOHCspqYvHtPMaxVX71FMuP17fQAGbacFsU+MEjw+82eJDxuiSB1KDS2cDGLR1n7olZM38/AnjXxDS",sidebar_class_name:"post api-method",info_path:"docs/rest/eliza-os-api",custom_edit_url:null},m=void 0,y={},v=[];function b(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Convert text to speech"}),"\n",(0,r.jsx)(a(),{method:"post",path:"/api/agents/{agentId}/audio-messages/synthesize",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Converts text to speech using the agent's voice"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(p(),{parameters:[{name:"agentId",in:"path",required:!0,schema:{type:"string",format:"uuid"},description:"ID of the agent"}]}),"\n",(0,r.jsx)(l(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{text:{type:"string",description:"Text to convert to speech"}}}}}}}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Audio stream with synthesized speech",content:{"audio/mpeg":{schema:{type:"string",format:"binary"}}}},400:{description:"Invalid agent ID or missing text",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}},404:{description:"Agent not found",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}},500:{description:"Error generating speech",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}}}})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);