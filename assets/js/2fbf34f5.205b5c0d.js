"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[91617],{71079:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"clients/slack","title":"Eliza Slack Client","description":"This package provides Slack integration for the Eliza AI agent.","source":"@site/packages/clients/slack.md","sourceDirName":"clients","slug":"/clients/slack","permalink":"/eliza/packages/clients/slack","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"simsai","permalink":"/eliza/packages/clients/simsai"},"next":{"title":"tako","permalink":"/eliza/packages/clients/tako"}}');var l=i(31085),r=i(71184);const t={},o="Eliza Slack Client",a={},c=[{value:"Setup Guide",id:"setup-guide",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Start ngrok",id:"step-1-start-ngrok",level:3},{value:"Step 2: Create Slack App",id:"step-2-create-slack-app",level:3},{value:"Step 2.5: Verify Event Subscription",id:"step-25-verify-event-subscription",level:3},{value:"Step 3: Configure Environment Variables",id:"step-3-configure-environment-variables",level:3},{value:"Step 4: Install the App",id:"step-4-install-the-app",level:3},{value:"Step 5: Verify Installation",id:"step-5-verify-installation",level:3},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:3},{value:"URL Verification Failed",id:"url-verification-failed",level:4},{value:"Bot Not Responding",id:"bot-not-responding",level:4},{value:"Messages Not Received",id:"messages-not-received",level:4},{value:"Updating ngrok URL",id:"updating-ngrok-url",level:3},{value:"Security Notes",id:"security-notes",level:3},{value:"Development",id:"development",level:2},{value:"Local Testing",id:"local-testing",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Adding New Features",id:"adding-new-features",level:3},{value:"Support",id:"support",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"eliza-slack-client",children:"Eliza Slack Client"})}),"\n",(0,l.jsx)(n.p,{children:"This package provides Slack integration for the Eliza AI agent."}),"\n",(0,l.jsx)(n.h2,{id:"setup-guide",children:"Setup Guide"}),"\n",(0,l.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A Slack workspace where you have permissions to install apps"}),"\n",(0,l.jsxs)(n.li,{children:["ngrok installed for local development (",(0,l.jsx)(n.code,{children:"brew install ngrok"})," on macOS)"]}),"\n",(0,l.jsx)(n.li,{children:"Node.js and bun installed"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-1-start-ngrok",children:"Step 1: Start ngrok"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Open a terminal and start ngrok on port 3069 (or your configured port):","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ngrok http 3069\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Copy the HTTPS URL (e.g., ",(0,l.jsx)(n.code,{children:"https://xxxx-xx-xx-xx-xx.ngrok-free.app"}),")"]}),"\n",(0,l.jsx)(n.li,{children:"Keep this terminal open - closing it will invalidate the URL"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-2-create-slack-app",children:"Step 2: Create Slack App"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://api.slack.com/apps",children:"Slack API Apps page"})]}),"\n",(0,l.jsx)(n.li,{children:'Click "Create New App"'}),"\n",(0,l.jsx)(n.li,{children:'Choose "From an app manifest"'}),"\n",(0,l.jsx)(n.li,{children:"Select your workspace"}),"\n",(0,l.jsxs)(n.li,{children:["Copy this manifest, replacing ",(0,l.jsx)(n.code,{children:"YOUR_NGROK_URL"})," with your ngrok HTTPS URL:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"display_information:\n  name: eve\n  description: Eve elizaos\n  background_color: '#143187'\nfeatures:\n  app_home:\n    home_tab_enabled: true\n    messages_tab_enabled: true\n    messages_tab_read_only_enabled: false\n  bot_user:\n    display_name: eve\n    always_online: false\noauth_config:\n  scopes:\n    bot:\n      - app_mentions:read\n      - channels:history\n      - channels:join\n      - channels:read\n      - chat:write\n      - files:read\n      - files:write\n      - groups:history\n      - groups:read\n      - im:history\n      - im:read\n      - im:write\n      - mpim:history\n      - mpim:read\n      - mpim:write\n      - users:read\nsettings:\n  event_subscriptions:\n    request_url: YOUR_NGROK_URL/slack/events\n    bot_events:\n      - app_mention\n      - message.channels\n      - message.groups\n      - message.im\n      - message.mpim\n      - file_shared\n  interactivity:\n    is_enabled: true\n    request_url: YOUR_NGROK_URL/slack/interactions\n  org_deploy_enabled: false\n  socket_mode_enabled: false\n  token_rotation_enabled: false\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"6",children:["\n",(0,l.jsx)(n.li,{children:'Click "Create"'}),"\n",(0,l.jsx)(n.li,{children:'On the "Basic Information" page, scroll down to "App Credentials"'}),"\n",(0,l.jsx)(n.li,{children:"Copy all the credentials - you'll need them in Step 3"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-25-verify-event-subscription",children:"Step 2.5: Verify Event Subscription"}),"\n",(0,l.jsx)(n.p,{children:"Before proceeding to install the app, make sure to verify the event subscription:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'In your Slack App settings, go to "Event Subscriptions."'}),"\n",(0,l.jsx)(n.li,{children:"Enter the request URL (your ngrok HTTPS URL followed by /slack/events)."}),"\n",(0,l.jsx)(n.li,{children:"Slack will send a verification request to this URL."}),"\n",(0,l.jsx)(n.li,{children:"Ensure your server is running and configured to respond to the url_verification event by echoing back the challenge token provided in the request."}),"\n",(0,l.jsx)(n.li,{children:"Once verified, you will see a confirmation in your Slack app settings."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-3-configure-environment-variables",children:"Step 3: Configure Environment Variables"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Create or edit ",(0,l.jsx)(n.code,{children:".env"})," file in your project root:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"SLACK_APP_ID=           # From Basic Information > App Credentials > App ID\nSLACK_CLIENT_ID=        # From Basic Information > App Credentials > Client ID\nSLACK_CLIENT_SECRET=    # From Basic Information > App Credentials > Client Secret\nSLACK_SIGNING_SECRET=   # From Basic Information > App Credentials > Signing Secret\nSLACK_BOT_TOKEN=        # From OAuth & Permissions > Bot User OAuth Token (starts with xoxb-)\nSLACK_VERIFICATION_TOKEN= # From Basic Information > App Credentials > Verification Token\nSLACK_SERVER_PORT=3069  # Must match the port you used with ngrok\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-4-install-the-app",children:"Step 4: Install the App"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'In your Slack App settings, go to "Install App"'}),"\n",(0,l.jsx)(n.li,{children:'Click "Install to Workspace"'}),"\n",(0,l.jsx)(n.li,{children:'Review the permissions and click "Allow"'}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"step-5-verify-installation",children:"Step 5: Verify Installation"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Start your Eliza server"}),"\n",(0,l.jsx)(n.li,{children:"Check the logs for successful connection"}),"\n",(0,l.jsxs)(n.li,{children:["Test the bot:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["In Slack, invite the bot to a channel: ",(0,l.jsx)(n.code,{children:"/invite @eve"})]}),"\n",(0,l.jsxs)(n.li,{children:["Try mentioning the bot: ",(0,l.jsx)(n.code,{children:"@eve hello"})]}),"\n",(0,l.jsx)(n.li,{children:"Check your server logs for event reception"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,l.jsx)(n.h4,{id:"url-verification-failed",children:"URL Verification Failed"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Make sure ngrok is running and the URL in your app settings matches exactly"}),"\n",(0,l.jsxs)(n.li,{children:["Check that the ",(0,l.jsx)(n.code,{children:"/slack/events"})," endpoint is accessible"]}),"\n",(0,l.jsx)(n.li,{children:"Verify your environment variables are set correctly"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"bot-not-responding",children:"Bot Not Responding"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Check server logs for incoming events"}),"\n",(0,l.jsx)(n.li,{children:"Verify the bot is in the channel"}),"\n",(0,l.jsx)(n.li,{children:"Ensure all required scopes are granted"}),"\n",(0,l.jsx)(n.li,{children:"Try reinstalling the app to refresh permissions"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"messages-not-received",children:"Messages Not Received"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Verify Event Subscriptions are enabled"}),"\n",(0,l.jsx)(n.li,{children:"Check the Request URL is correct and verified"}),"\n",(0,l.jsx)(n.li,{children:"Confirm all bot events are subscribed"}),"\n",(0,l.jsxs)(n.li,{children:["Ensure the bot token starts with ",(0,l.jsx)(n.code,{children:"xoxb-"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"updating-ngrok-url",children:"Updating ngrok URL"}),"\n",(0,l.jsx)(n.p,{children:"If you restart ngrok, you'll get a new URL. You'll need to:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Copy the new ngrok HTTPS URL"}),"\n",(0,l.jsxs)(n.li,{children:["Update the Request URLs in your Slack App settings:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Event Subscriptions > Request URL"}),"\n",(0,l.jsx)(n.li,{children:"Interactivity & Shortcuts > Request URL"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Wait for URL verification to complete"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"security-notes",children:"Security Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Never commit your ",(0,l.jsx)(n.code,{children:".env"})," file or tokens to version control"]}),"\n",(0,l.jsx)(n.li,{children:"Rotate your tokens if they're ever exposed"}),"\n",(0,l.jsx)(n.li,{children:"Use HTTPS URLs only for Request URLs"}),"\n",(0,l.jsx)(n.li,{children:"Keep your ngrok and server running while testing"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,l.jsx)(n.h3,{id:"local-testing",children:"Local Testing"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Start ngrok: ",(0,l.jsx)(n.code,{children:"ngrok http 3069"})]}),"\n",(0,l.jsx)(n.li,{children:"Update Slack App URLs with new ngrok URL"}),"\n",(0,l.jsxs)(n.li,{children:["Start the server: ",(0,l.jsx)(n.code,{children:"bun start"})]}),"\n",(0,l.jsx)(n.li,{children:"Monitor logs for events and errors"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,l.jsx)(n.p,{children:"Enable detailed logging by setting:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"DEBUG=eliza:*\n"})}),"\n",(0,l.jsx)(n.h3,{id:"adding-new-features",children:"Adding New Features"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Update the manifest if adding new scopes"}),"\n",(0,l.jsx)(n.li,{children:"Reinstall the app to apply new permissions"}),"\n",(0,l.jsx)(n.li,{children:"Update documentation for any new environment variables"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,l.jsx)(n.p,{children:"For issues or questions:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Check the Common Issues section above"}),"\n",(0,l.jsx)(n.li,{children:"Review server logs for errors"}),"\n",(0,l.jsx)(n.li,{children:"Verify all setup steps are completed"}),"\n",(0,l.jsxs)(n.li,{children:["Open an issue with:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Error messages"}),"\n",(0,l.jsx)(n.li,{children:"Server logs"}),"\n",(0,l.jsx)(n.li,{children:"Steps to reproduce"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(14041);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);