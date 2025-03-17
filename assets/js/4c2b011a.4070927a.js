"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[86179],{13587:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>K,frontMatter:()=>h,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"rest/get-agent-logs","title":"Get agent logs","description":"Retrieves logs for a specific agent","source":"@site/docs/rest/get-agent-logs.api.mdx","sourceDirName":"rest","slug":"/rest/get-agent-logs","permalink":"/eliza/docs/rest/get-agent-logs","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"madjin","lastUpdatedAt":1742183879000,"frontMatter":{"id":"get-agent-logs","title":"Get agent logs","description":"Retrieves logs for a specific agent","sidebar_label":"Get agent logs","hide_title":true,"hide_table_of_contents":true,"api":"eJztV8FuGzcQ/RViTgmw0aqt0cPehNoNBKRt4Lin2IcRd3aXCZdkSK5sVdh/L4a7ktaRZbkJkFN9MWwN33ucecMZbSFiHaD4CNrWATLAmkwMcJdBSUF65aKyBgq4pugVrSkIDhSV9QJFcCRVpaRIpyAD68gjn1iWUEBNccEfvBugHXpsKZJnvi0YbAmKgXBZQgaKeRzGBjLw9KVTnkooou8ogyAbahGKLcSN42MhemVqyKCyvsUIBXSdKqH/WvfyUthKxIZGjX22Z/bWtgfiLx35DXwH0+9KR/JDelYbwehieTklTIAvpDsHn6In2NJ2qQLPgysTqSZ/jP4HPqi2a4Xp2hV5TlkiilZ4ip03UypbVYG+g+udrcWAkWzksFYmmQb6O658cNYECgz183zOvx6fT54So1+lNZHrWmwBndNKJqT8U+DQ7bEqu/pEksU7z2aNaiAKnZQUwiRwZa0mNJABPWDrNA1W5NtgnCKi98gJUJHacJ5J05r0JGzIODyVpCG0zyAqTvzxkb0jlYm/Xhxh3KiWQsTW7VpA21qQiX7DoG2on3L5sYyWQsCa3bZv1rPdcboNPWmMVA7tKF6pSox1W2l6vef4Ex/d+IQ6jnohbspi5Cryna6GJAw/GVw8ZbOlWaNWO8Dl5Q82W4U6sNvIe+vPY0pbviBhVwwmUiw7YCzsC49NfFBSRKXD+ZOXKZBKka4hlBlskpq9nxYlUcCuHBenut5YfjQ6U/5fjR9TjSQsNnac52mMxwYKyNGpfNgW8u34LvT5+CoH8uvdnO+8hgKaGF2R59pK1I0NsfhlPp8/8dxI1KLkd8+6lgs+IKXJwHLTHXcitfoHxV8fxOL98ghp8X4pSis7Bkk3TLNmf2T902w+m79B7RoUb8RCVJoe1EqTQFOKIFHzuyEWy7H9K15d7q3/PLs1t+amUYFZhQqipKBqQyXPyhWJLlAp7lVsBIp0Wb0RvjNGmXpkVyZENJJm4sqUzioTg0Ct7X1SKD1hVKbObk2LhkdjnSVNPE49Sv5swN9pCyI23nY1M15ffbgZIiuUNIMMuAxDRiY3HpsHZWqecazvc/ObbdvOqMhD7VC8UOR5rWLTrWbStjlxtA3D7/S8Ohtii2aC+JbimL7RFo9KtD008Au3y9HckR5i7jQq3koGhdvRlR8BnTpssRkUh/UyabjLgN3HkdvtCgP97XXf87+HPYYNW6rAxS/Hrn9G9omV74TSz7SZbp1r1B0HpdXqmznHnfIZwjHiG+nOLobPcu+20m8kP70pPsu6X1APtHf8h1fM+x9r/Op6/CryWnz9XeKEiN1eaDZTCTtxO0P2d30GDWFJPikaPl1ISW4q/Wiy8VX2L/Lbqxvo+38BjTa5bw==","sidebar_class_name":"get api-method","info_path":"docs/rest/eliza-os-api","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Generate speech from text","permalink":"/eliza/docs/rest/generate-speech"},"next":{"title":"Get agent memories","permalink":"/eliza/docs/rest/get-agent-memories"}}');var a=i(31085),n=i(71184),o=i(32851),r=i.n(o),p=i(36601),l=i.n(p),c=i(84515),d=i.n(c),g=i(98125),m=i.n(g),b=(i(98316),i(14435),i(54661));const h={id:"get-agent-logs",title:"Get agent logs",description:"Retrieves logs for a specific agent",sidebar_label:"Get agent logs",hide_title:!0,hide_table_of_contents:!0,api:"eJztV8FuGzcQ/RViTgmw0aqt0cPehNoNBKRt4Lin2IcRd3aXCZdkSK5sVdh/L4a7ktaRZbkJkFN9MWwN33ucecMZbSFiHaD4CNrWATLAmkwMcJdBSUF65aKyBgq4pugVrSkIDhSV9QJFcCRVpaRIpyAD68gjn1iWUEBNccEfvBugHXpsKZJnvi0YbAmKgXBZQgaKeRzGBjLw9KVTnkooou8ogyAbahGKLcSN42MhemVqyKCyvsUIBXSdKqH/WvfyUthKxIZGjX22Z/bWtgfiLx35DXwH0+9KR/JDelYbwehieTklTIAvpDsHn6In2NJ2qQLPgysTqSZ/jP4HPqi2a4Xp2hV5TlkiilZ4ip03UypbVYG+g+udrcWAkWzksFYmmQb6O658cNYECgz183zOvx6fT54So1+lNZHrWmwBndNKJqT8U+DQ7bEqu/pEksU7z2aNaiAKnZQUwiRwZa0mNJABPWDrNA1W5NtgnCKi98gJUJHacJ5J05r0JGzIODyVpCG0zyAqTvzxkb0jlYm/Xhxh3KiWQsTW7VpA21qQiX7DoG2on3L5sYyWQsCa3bZv1rPdcboNPWmMVA7tKF6pSox1W2l6vef4Ex/d+IQ6jnohbspi5Cryna6GJAw/GVw8ZbOlWaNWO8Dl5Q82W4U6sNvIe+vPY0pbviBhVwwmUiw7YCzsC49NfFBSRKXD+ZOXKZBKka4hlBlskpq9nxYlUcCuHBenut5YfjQ6U/5fjR9TjSQsNnac52mMxwYKyNGpfNgW8u34LvT5+CoH8uvdnO+8hgKaGF2R59pK1I0NsfhlPp8/8dxI1KLkd8+6lgs+IKXJwHLTHXcitfoHxV8fxOL98ghp8X4pSis7Bkk3TLNmf2T902w+m79B7RoUb8RCVJoe1EqTQFOKIFHzuyEWy7H9K15d7q3/PLs1t+amUYFZhQqipKBqQyXPyhWJLlAp7lVsBIp0Wb0RvjNGmXpkVyZENJJm4sqUzioTg0Ct7X1SKD1hVKbObk2LhkdjnSVNPE49Sv5swN9pCyI23nY1M15ffbgZIiuUNIMMuAxDRiY3HpsHZWqecazvc/ObbdvOqMhD7VC8UOR5rWLTrWbStjlxtA3D7/S8Ohtii2aC+JbimL7RFo9KtD008Au3y9HckR5i7jQq3koGhdvRlR8BnTpssRkUh/UyabjLgN3HkdvtCgP97XXf87+HPYYNW6rAxS/Hrn9G9omV74TSz7SZbp1r1B0HpdXqmznHnfIZwjHiG+nOLobPcu+20m8kP70pPsu6X1APtHf8h1fM+x9r/Op6/CryWnz9XeKEiN1eaDZTCTtxO0P2d30GDWFJPikaPl1ISW4q/Wiy8VX2L/Lbqxvo+38BjTa5bw==",sidebar_class_name:"get api-method",info_path:"docs/rest/eliza-os-api",custom_edit_url:null},y=void 0,u={},f=[];function N(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get agent logs"}),"\n",(0,a.jsx)(r(),{method:"get",path:"/api/agents/{agentId}/logs",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves logs for a specific agent"}),"\n",(0,a.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"agentId",in:"path",required:!0,schema:{type:"string",format:"uuid"},description:"ID of the agent"},{name:"roomId",in:"query",schema:{type:"string",format:"uuid"},description:"Filter logs by room ID"},{name:"type",in:"query",schema:{type:"string"},description:"Filter logs by type"},{name:"count",in:"query",schema:{type:"integer"},description:"Maximum number of logs to return"},{name:"offset",in:"query",schema:{type:"integer"},description:"Log offset for pagination"}]}),"\n",(0,a.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Agent logs",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!0},data:{type:"array",items:{type:"object",properties:{level:{type:"number",description:"Log level"},time:{type:"number",format:"int64",description:"Timestamp of the log entry"},msg:{type:"string",description:"Log message"},agentId:{type:"string",format:"uuid",description:"ID of the related agent (if applicable)"},agentName:{type:"string",description:"Name of the related agent (if applicable)"}},title:"LogEntry"}}}}}}},400:{description:"Invalid agent ID",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}},404:{description:"Agent not found",content:{"application/json":{schema:{type:"object",properties:{success:{type:"boolean",example:!1},error:{type:"object",properties:{code:{type:"string",description:"Error code"},message:{type:"string",description:"Error message"},details:{type:"string",description:"Detailed error information"}}}},title:"Error"}}}}}})]})}function K(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(N,{...e})}):N(e)}}}]);