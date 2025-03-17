"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[16515],{98287:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>b,contentTitle:()=>x,default:()=>g,frontMatter:()=>f,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"rest/get-room","title":"Get room details","description":"Retrieves details about a specific room","source":"@site/docs/rest/get-room.api.mdx","sourceDirName":"rest","slug":"/rest/get-room","permalink":"/eliza/docs/rest/get-room","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"madjin","lastUpdatedAt":1742183879000,"frontMatter":{"id":"get-room","title":"Get room details","description":"Retrieves details about a specific room","sidebar_label":"Get room details","hide_title":true,"hide_table_of_contents":true,"api":"eJztVk1v4zYQ/SvEnFpAa7nt9qKb0QQLA0W7SLKnJIcxNZa4S5EKOXKSCvrvxVBS7MS7SfqBnPYky5qPN29myNcDYxWhuITgfRMhA6zIcYTrDEqKOpiWjXdQwBlxMLSjqEpiNDYq3PiOFarYkjZbo5WEgAx8SwHFa11CARXx2fh/iwEbYgqSrweHDUEx5luXkIGRNC1yDRkEuulMoBIKDh1lEHVNDULRA9+34hY5GFdBBlsfGmQooOtMCcNT2OsT5beKa1IpEQzZQ2aB+xaJEy3DtcSOrXeRooT7ebmUxxOSvW9mfiED7R0L6KIHbFtrdKI1/xzFuD/G5jefSbNQHaQJbMZUsdOaYjww3HhvCR1kQHfYtJbGcqUI5FdENOXLjDwl5JMzNx0pU5JjszUU1NaHA4KyqS/HcR/H+QMbekxtBtF3Qb/C9zzZPfW+9cGW639R0r7HKYTi2sQUVW3IeldFxV4SSMUzdVMGDAHvZfaYmvj/EP5NBofhaDpPJ0TKuD1qEDs2LOOQRlE8k/P7rw3r2u3QmnJcLCVchLH49ckbz+4WbZThpRB8eDmm9uUrZuVUgqlkO2TQUIxYvdptNk/Ej+v8oudJMqRSpTKUcWN75ePYhbk1KQXMnXl/3JlV6sjcDudZbX3nyu9deauu/Pq1fRkxhPEeNa6a78vvPXmDniRgXPtJkiQ5wjUUkGNr8lH05P0kRoY8qaG8HyXCABlECrtZuXTBQgE1c1vkufUabe0jF78sl8sjqL/LZ1XSjqxvG1nLMVISBAI8VTvDteYvVH+eq9XH9VGk1ce1Kr3uJEiqNd2fDy67nxbLxfId2rZG9U6t1NbSndlYUuhKFTValJfVejqvtyLGbn34srhyV+5C7gDJYETfRVM5KhV7tSHVRSrVreFaoUrF2nsVOudkgsfsxkVGp2mhTl3ZeuM4KrTW3yaEOhCycVV25Rp0WMnPhMk4poBavo3xZ2xRcR18V0nGs9Pzi9Fyi5oWkIG0YWTkoOJpjVCnNZoE3gM3v/mm6ZxhuXD3zYtFnleG626z0L7JSax9HJ/pKmx95AbdQcQPxOOZutdoj5rU75f5HwjmadiZ7jhvLRony5Bw9tOUXgK2Zi/OMyj2snkW7sWkZ68zkHEUp77fYKRPwQ6D/H3TUbiH4vI6gx0GI/OQ5rk0UX6X0/HwTE0/nE3y+Ef1VFh/o4xZ7jjhfoe2kzfI4AvdH4h/UeX/EcVzXD4PYuJtuB4yqAlLComV8eNKa2r5wO3oiJZFfjhaPpxewDD8DYx4mCk=","sidebar_class_name":"get api-method","info_path":"docs/rest/eliza-os-api","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Get room memories","permalink":"/eliza/docs/rest/get-room-memories"},"next":{"title":"Get system status","permalink":"/eliza/docs/rest/get-status"}}');var i=o(31085),s=o(71184),a=o(32851),n=o.n(a),d=o(36601),p=o.n(d),c=o(84515),l=o.n(c),m=o(98125),u=o.n(m),h=(o(98316),o(14435),o(54661));const f={id:"get-room",title:"Get room details",description:"Retrieves details about a specific room",sidebar_label:"Get room details",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v4zYQ/SvEnFpAa7nt9qKb0QQLA0W7SLKnJIcxNZa4S5EKOXKSCvrvxVBS7MS7SfqBnPYky5qPN29myNcDYxWhuITgfRMhA6zIcYTrDEqKOpiWjXdQwBlxMLSjqEpiNDYq3PiOFarYkjZbo5WEgAx8SwHFa11CARXx2fh/iwEbYgqSrweHDUEx5luXkIGRNC1yDRkEuulMoBIKDh1lEHVNDULRA9+34hY5GFdBBlsfGmQooOtMCcNT2OsT5beKa1IpEQzZQ2aB+xaJEy3DtcSOrXeRooT7ebmUxxOSvW9mfiED7R0L6KIHbFtrdKI1/xzFuD/G5jefSbNQHaQJbMZUsdOaYjww3HhvCR1kQHfYtJbGcqUI5FdENOXLjDwl5JMzNx0pU5JjszUU1NaHA4KyqS/HcR/H+QMbekxtBtF3Qb/C9zzZPfW+9cGW639R0r7HKYTi2sQUVW3IeldFxV4SSMUzdVMGDAHvZfaYmvj/EP5NBofhaDpPJ0TKuD1qEDs2LOOQRlE8k/P7rw3r2u3QmnJcLCVchLH49ckbz+4WbZThpRB8eDmm9uUrZuVUgqlkO2TQUIxYvdptNk/Ej+v8oudJMqRSpTKUcWN75ePYhbk1KQXMnXl/3JlV6sjcDudZbX3nyu9deauu/Pq1fRkxhPEeNa6a78vvPXmDniRgXPtJkiQ5wjUUkGNr8lH05P0kRoY8qaG8HyXCABlECrtZuXTBQgE1c1vkufUabe0jF78sl8sjqL/LZ1XSjqxvG1nLMVISBAI8VTvDteYvVH+eq9XH9VGk1ce1Kr3uJEiqNd2fDy67nxbLxfId2rZG9U6t1NbSndlYUuhKFTValJfVejqvtyLGbn34srhyV+5C7gDJYETfRVM5KhV7tSHVRSrVreFaoUrF2nsVOudkgsfsxkVGp2mhTl3ZeuM4KrTW3yaEOhCycVV25Rp0WMnPhMk4poBavo3xZ2xRcR18V0nGs9Pzi9Fyi5oWkIG0YWTkoOJpjVCnNZoE3gM3v/mm6ZxhuXD3zYtFnleG626z0L7JSax9HJ/pKmx95AbdQcQPxOOZutdoj5rU75f5HwjmadiZ7jhvLRony5Bw9tOUXgK2Zi/OMyj2snkW7sWkZ68zkHEUp77fYKRPwQ6D/H3TUbiH4vI6gx0GI/OQ5rk0UX6X0/HwTE0/nE3y+Ef1VFh/o4xZ7jjhfoe2kzfI4AvdH4h/UeX/EcVzXD4PYuJtuB4yqAlLComV8eNKa2r5wO3oiJZFfjhaPpxewDD8DYx4mCk=",sidebar_class_name:"get api-method",info_path:"docs/rest/eliza-os-api",custom_edit_url:null},x=void 0,b={},j=[];function y(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get room details"}),"\n",(0,i.jsx)(n(),{method:"get",path:"/api/agents/{agentId}/rooms/{roomId}",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves details about a specific room"}),"\n",(0,i.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(p(),{parameters:[{name:"agentId",in:"path",required:!0,schema:{type:"string",format:"uuid"},description:"ID of the agent"},{name:"roomId",in:"path",required:!0,schema:{type:"string",format:"uuid"},description:"ID of the room"}]}),"\n",(0,i.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Room details",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!0},data:{type:"object",properties:{id:{type:"string",format:"uuid",description:"Unique identifier for the room"},name:{type:"string",description:"Name of the room"},source:{type:"string",description:"Source of the room"},worldId:{type:"string",format:"uuid",description:"ID of the world this room belongs to"},entities:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid"},name:{type:"string"}}},description:"Entities in this room"}},title:"Room"}}}}}},400:{description:"Invalid agent ID or room ID",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}},404:{description:"Agent or room not found",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}},500:{description:"Error retrieving room",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}}}})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}}}]);