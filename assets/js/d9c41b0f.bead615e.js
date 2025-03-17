"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[34652],{46195:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/fine-tuning","title":"\ud83c\udfaf Fine-tuning Guide","description":"What is Fine-tuning?","source":"@site/versioned_docs/version-0.25.9/guides/fine-tuning.md","sourceDirName":"guides","slug":"/guides/fine-tuning","permalink":"/eliza/docs/0.25.9/guides/fine-tuning","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/versioned_docs/version-0.25.9/guides/fine-tuning.md","tags":[],"version":"0.25.9","lastUpdatedBy":"madjin","lastUpdatedAt":1742171474000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Deployment","permalink":"/eliza/docs/0.25.9/guides/remote-deployment"},"next":{"title":"Secrets Management","permalink":"/eliza/docs/0.25.9/guides/secrets-management"}}');var s=i(31085),r=i(71184);const a={sidebar_position:13},l="\ud83c\udfaf Fine-tuning Guide",o={},c=[{value:"What is Fine-tuning?",id:"what-is-fine-tuning",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Usage",id:"usage",level:2},{value:"Fetching Tweets",id:"fetching-tweets",level:3},{value:"2. Generating Character Files",id:"2-generating-character-files",level:3},{value:"3. Creating Fine-tuning Datasets",id:"3-creating-fine-tuning-datasets",level:3},{value:"4. Fine-tuning Models",id:"4-fine-tuning-models",level:3},{value:"Output Structure",id:"output-structure",level:2},{value:"FAQ",id:"faq",level:2},{value:"How much data do I need for good results?",id:"how-much-data-do-i-need-for-good-results",level:3},{value:"What should I do after generating a character file?",id:"what-should-i-do-after-generating-a-character-file",level:3},{value:"What are best practices for fine-tuning?",id:"what-are-best-practices-for-fine-tuning",level:3},{value:"How can I make my agent&#39;s responses more natural/less bot-like?",id:"how-can-i-make-my-agents-responses-more-naturalless-bot-like",level:3},{value:"Why am I getting Twitter authentication failures?",id:"why-am-i-getting-twitter-authentication-failures",level:3},{value:"Why isn&#39;t my data collection working?",id:"why-isnt-my-data-collection-working",level:3},{value:"What should I do if I get fine-tuning errors?",id:"what-should-i-do-if-i-get-fine-tuning-errors",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-fine-tuning-guide",children:"\ud83c\udfaf Fine-tuning Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-fine-tuning",children:"What is Fine-tuning?"}),"\n",(0,s.jsx)(n.p,{children:"Fine-tuning is the process of taking an existing AI model and specializing it for your specific needs. Think of it like taking a general-purpose chef and training them to become an expert in your favorite cuisine - they keep their fundamental cooking skills but learn your specific recipes and preferences."}),"\n",(0,s.jsx)(n.p,{children:"With fine-tuning, you can create models that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Write in your personal style"}),"\n",(0,s.jsx)(n.li,{children:"Specialize in your industry's terminology"}),"\n",(0,s.jsx)(n.li,{children:"Match your brand's voice"}),"\n",(0,s.jsx)(n.li,{children:"Understand your company's internal knowledge"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:["Guide for generating custom AI ",(0,s.jsx)(n.a,{href:"/eliza/docs/0.25.9/core/characterfile",children:"character files"})," and training datasets using public data from Twitter and blogs. Just like choosing the right chef to train, picking the right base model is crucial. Together AI offers several options:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For Beginners:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Llama 3 8B Instruct - Great for simpler tasks and smaller datasets"}),"\n",(0,s.jsx)(n.li,{children:"Good for: Personal projects, testing fine-tuning, simpler use cases"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For Advanced Use Cases:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Llama 3 70B Instruct - Best for complex tasks and larger datasets"}),"\n",(0,s.jsx)(n.li,{children:"Good for: Production applications, complex domain knowledge, nuanced interactions"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to prepare your data:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSONL Format"})," (Recommended for Beginners)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"text": "Your training example here"}\n{"text": "Another training example"}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simpler to create and understand"}),"\n",(0,s.jsx)(n.li,{children:"Works well for most use cases"}),"\n",(0,s.jsx)(n.li,{children:"Handled automatically by the system"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parquet Format"})," (Advanced)"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pre-tokenized data"}),"\n",(0,s.jsx)(n.li,{children:"More control over training"}),"\n",(0,s.jsx)(n.li,{children:"Faster processing for multiple runs"}),"\n",(0,s.jsx)(n.li,{children:"Recommended when you need custom loss masking"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For this guide we're going to use JSONL format."}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["We're going to use a tool to create a training dataset from sources like Twitter / Blogs: ",(0,s.jsx)(n.a,{href:"https://github.com/elizaOS/twitter-scraper-finetune",children:"https://github.com/elizaOS/twitter-scraper-finetune"}),". Alternatively you can also request a backup archive of your data from X and use this script: ",(0,s.jsx)(n.a,{href:"https://github.com/elizaOS/characterfile/blob/main/scripts/tweets2character.js",children:"https://github.com/elizaOS/characterfile/blob/main/scripts/tweets2character.js"}),", but then you'll miss the fine-tune parts of this guide."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Node.js v22+"}),"\n",(0,s.jsx)(n.li,{children:"Twitter credentials (username, password, email)"}),"\n",(0,s.jsx)(n.li,{children:"Together AI API key"}),"\n",(0,s.jsxs)(n.li,{children:["Together CLI installed (",(0,s.jsx)(n.code,{children:"pip install together"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone repo and install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:elizaOS/twitter-scraper-finetune.git\ncd twitter-scraper-finetune\nnpm install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.code,{children:".env.example"})," into a ",(0,s.jsx)(n.code,{children:".env"})," file:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"# (Required) Twitter Authentication\nTWITTER_USERNAME=     # your twitter username\nTWITTER_PASSWORD=     # your twitter password\n\n# (Optional) Blog Configuration\nBLOG_URLS_FILE=      # path to file containing blog URLs\n\n# (Optional) Scraping Configuration\nMAX_TWEETS=          # max tweets to scrape\nMAX_RETRIES=         # max retries for scraping\nRETRY_DELAY=         # delay between retries\nMIN_DELAY=           # minimum delay between requests\nMAX_DELAY=           # maximum delay between requests\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"fetching-tweets",children:"Fetching Tweets"}),"\n",(0,s.jsxs)(n.p,{children:["First configure collection parameters in ",(0,s.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Then to get tweets from a user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run twitter -- username\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Authenticate with Twitter"}),"\n",(0,s.jsx)(n.li,{children:"Collect tweets from the specified user"}),"\n",(0,s.jsxs)(n.li,{children:["Save raw tweets and analytics to ",(0,s.jsx)(n.code,{children:"pipeline/[username]/[date]/"})]}),"\n",(0,s.jsx)(n.li,{children:"Generate engagement statistics and content analysis"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-generating-character-files",children:"2. Generating Character Files"}),"\n",(0,s.jsx)(n.p,{children:"After collecting tweets, you can generate a character file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run character -- username\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A character.json file with personality traits"}),"\n",(0,s.jsx)(n.li,{children:"Interaction style and behavioral patterns"}),"\n",(0,s.jsx)(n.li,{children:"Sample responses and communication style"}),"\n",(0,s.jsx)(n.li,{children:"System prompts for different contexts"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-creating-fine-tuning-datasets",children:"3. Creating Fine-tuning Datasets"}),"\n",(0,s.jsx)(n.p,{children:"The pipeline automatically creates fine-tuning datasets during tweet collection. The datasets are stored in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pipeline/[username]/[date]/processed/finetuning.jsonl\n"})}),"\n",(0,s.jsx)(n.p,{children:"The JSONL file contains processed tweets optimized for fine-tuning, with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cleaned text content"}),"\n",(0,s.jsx)(n.li,{children:"Removed URLs and special characters"}),"\n",(0,s.jsx)(n.li,{children:"Filtered based on engagement metrics"}),"\n",(0,s.jsx)(n.li,{children:"Formatted for training"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-fine-tuning-models",children:"4. Fine-tuning Models"}),"\n",(0,s.jsx)(n.p,{children:"To start fine-tuning:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run finetune\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Optional test mode:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run finetune:test\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"The fine-tuning process:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Validates the JSONL file format"}),"\n",(0,s.jsx)(n.li,{children:"Uploads data to Together AI"}),"\n",(0,s.jsx)(n.li,{children:"Initiates LoRA fine-tuning"}),"\n",(0,s.jsx)(n.li,{children:"Provides job ID for monitoring"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default model: meta-llama/Meta-Llama-3-70B-Instruct"}),"\n",(0,s.jsx)(n.p,{children:"You can monitor your fine-tuning job:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"together fine-tuning retrieve [job_id]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or check status at: ",(0,s.jsx)(n.a,{href:"https://api.together.xyz/jobs",children:"https://api.together.xyz/jobs"})]}),"\n",(0,s.jsxs)(n.p,{children:["The fine-tuning script (",(0,s.jsx)(n.code,{children:"scripts/finetune.js"}),") allows configuration of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Model selection"}),"\n",(0,s.jsx)(n.li,{children:"Training parameters"}),"\n",(0,s.jsx)(n.li,{children:"LoRA settings"}),"\n",(0,s.jsx)(n.li,{children:"Together AI options"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"output-structure",children:"Output Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pipeline/\n  \u2514\u2500\u2500 [username]/\n      \u2514\u2500\u2500 [date]/\n          \u251c\u2500\u2500 raw/\n          \u2502   \u251c\u2500\u2500 tweets.json\n          \u2502   \u2514\u2500\u2500 urls.txt\n          \u251c\u2500\u2500 processed/\n          \u2502   \u2514\u2500\u2500 finetuning.jsonl\n          \u251c\u2500\u2500 analytics/\n          \u2502   \u2514\u2500\u2500 stats.json\n          \u251c\u2500\u2500 character/\n          \u2502   \u2514\u2500\u2500 character.json\n          \u2514\u2500\u2500 exports/\n              \u2514\u2500\u2500 summary.md\n"})}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"how-much-data-do-i-need-for-good-results",children:"How much data do I need for good results?"}),"\n",(0,s.jsx)(n.p,{children:"Collect at least 1000 tweets from accounts with consistent posting styles, and filter for high engagement examples. Remove irrelevant or low-quality content, and clean out any sensitive or private info."}),"\n",(0,s.jsx)(n.h3,{id:"what-should-i-do-after-generating-a-character-file",children:"What should I do after generating a character file?"}),"\n",(0,s.jsx)(n.p,{children:"Review and manually adjust the generated files, add specific behavioral examples, and fine-tune the system prompts for optimal outcomes."}),"\n",(0,s.jsx)(n.h3,{id:"what-are-best-practices-for-fine-tuning",children:"What are best practices for fine-tuning?"}),"\n",(0,s.jsx)(n.p,{children:"Start with test runs to validate your data, then closely monitor training metrics and thoroughly evaluate outputs before deployment."}),"\n",(0,s.jsx)(n.h3,{id:"how-can-i-make-my-agents-responses-more-naturalless-bot-like",children:"How can I make my agent's responses more natural/less bot-like?"}),"\n",(0,s.jsx)(n.p,{children:"Fine-tune the character's bio, lore, and post examples in the character file. Consider using different model providers and adjusting interaction settings. Some models (like DeepSeek) are noted for more natural responses."}),"\n",(0,s.jsx)(n.h3,{id:"why-am-i-getting-twitter-authentication-failures",children:"Why am I getting Twitter authentication failures?"}),"\n",(0,s.jsx)(n.p,{children:"Double-check your credentials in .env file, ensure your email is verified, and try adding rate limiting breaks between authentication attempts."}),"\n",(0,s.jsx)(n.h3,{id:"why-isnt-my-data-collection-working",children:"Why isn't my data collection working?"}),"\n",(0,s.jsx)(n.p,{children:"Verify your network connectivity is stable, confirm the target account is public, and try increasing the retry parameters in your configuration."}),"\n",(0,s.jsx)(n.h3,{id:"what-should-i-do-if-i-get-fine-tuning-errors",children:"What should I do if I get fine-tuning errors?"}),"\n",(0,s.jsx)(n.p,{children:"First validate your JSONL file format is correct, then check your API key has proper permissions, and monitor any rate limits that may be affecting the process."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(14041);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);