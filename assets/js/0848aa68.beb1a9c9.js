"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[6975],{41969:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"guides/secrets-management","title":"\ud83d\udd10 Secrets Management","description":"A comprehensive guide for managing API keys, credentials, and other sensitive configuration in Eliza.","source":"@site/versioned_docs/version-0.25.9/guides/secrets-management.md","sourceDirName":"guides","slug":"/guides/secrets-management","permalink":"/eliza/docs/0.25.9/guides/secrets-management","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/versioned_docs/version-0.25.9/guides/secrets-management.md","tags":[],"version":"0.25.9","lastUpdatedBy":"madjin","lastUpdatedAt":1742171474000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Fine Tuning","permalink":"/eliza/docs/0.25.9/guides/fine-tuning"},"next":{"title":"Memory Management","permalink":"/eliza/docs/0.25.9/guides/memory-management"}}');var s=i(31085),t=i(71184);const a={sidebar_position:11},c="\ud83d\udd10 Secrets Management",l={},o=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Environment Variable Hierarchy",id:"environment-variable-hierarchy",level:3},{value:"Common Secret Types",id:"common-secret-types",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Setting Up Environment Variables",id:"setting-up-environment-variables",level:3},{value:"Accessing Secrets in Code",id:"accessing-secrets-in-code",level:3},{value:"Character-Specific Secrets",id:"character-specific-secrets",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Environment Segregation",id:"1-environment-segregation",level:3},{value:"2. Secret Validation",id:"2-secret-validation",level:3},{value:"3. Secure Error Handling",id:"3-secure-error-handling",level:3},{value:"4. API Key Validation",id:"4-api-key-validation",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Private Key Handling",id:"private-key-handling",level:3},{value:"Secret Rotation",id:"secret-rotation",level:3},{value:"Cloud Deployment Security",id:"cloud-deployment-security",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"1. Missing Environment Variables",id:"1-missing-environment-variables",level:4},{value:"2. Character-Specific Secrets Not Working",id:"2-character-specific-secrets-not-working",level:4},{value:"3. Environment File Not Loading",id:"3-environment-file-not-loading",level:4},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-secrets-management",children:"\ud83d\udd10 Secrets Management"})}),"\n",(0,s.jsx)(n.p,{children:"A comprehensive guide for managing API keys, credentials, and other sensitive configuration in Eliza."}),"\n",(0,s.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsx)(n.h3,{id:"environment-variable-hierarchy",children:"Environment Variable Hierarchy"}),"\n",(0,s.jsx)(n.p,{children:"Eliza uses a hierarchical environment variable system that retrieves settings in this order:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Character-specific secrets (highest priority)"}),"\n",(0,s.jsx)(n.li,{children:"Character-specific settings"}),"\n",(0,s.jsx)(n.li,{children:"Global environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Default values (lowest priority)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This allows you to override global settings for specific characters when needed."}),"\n",(0,s.jsx)(n.h3,{id:"common-secret-types",children:"Common Secret Types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# API Keys for Model Providers\nOPENAI_API_KEY=sk-*               # OpenAI API key\nANTHROPIC_API_KEY=your-key        # Anthropic/Claude API key\nGOOGLE_GENERATIVE_AI_API_KEY=     # Gemini API key\nGROQ_API_KEY=gsk-*                # Groq API key\n\n# Client Authentication\nDISCORD_API_TOKEN=                # Discord bot token\nTELEGRAM_BOT_TOKEN=               # Telegram bot token\nTWITTER_USERNAME=                 # Twitter/X username\nTWITTER_PASSWORD=                 # Twitter/X password\n\n# Database Credentials\nSUPABASE_URL=                     # Supabase URL\nSUPABASE_ANON_KEY=                # Supabase anonymous key\nMONGODB_CONNECTION_STRING=        # MongoDB connection string\n\n# Blockchain Related\nEVM_PRIVATE_KEY=                  # EVM private key with "0x" prefix\nSOLANA_PRIVATE_KEY=               # Solana wallet private key\nSOLANA_PUBLIC_KEY=                # Solana wallet public key\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For a complete list of supported environment variables, see the ",(0,s.jsx)(n.a,{href:"https://github.com/elizaos/eliza/blob/main/.env.example",children:(0,s.jsx)(n.code,{children:".env.example"})})," file in the project repository."]}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-environment-variables",children:"Setting Up Environment Variables"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:".env"})," file in your project root directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add your secrets to this file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Model Provider\nOPENAI_API_KEY=sk-xxxxxxxxxxxxx\n\n# Clients\nDISCORD_API_TOKEN=xxxxxxxxxxxxxxxx\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".env"})," file is automatically excluded from Git via ",(0,s.jsx)(n.code,{children:".gitignore"})," to prevent accidental exposure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"accessing-secrets-in-code",children:"Accessing Secrets in Code"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"runtime.getSetting()"})," method to access configuration values:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// In a plugin, action, or service\nconst apiKey = runtime.getSetting('OPENAI_API_KEY');\nif (!apiKey) {\n  throw new Error('OpenAI API key not configured');\n}\n\n// With a fallback value\nconst temperature = runtime.getSetting('TEMPERATURE') || '0.7';\n"})}),"\n",(0,s.jsx)(n.p,{children:"This method automatically handles the environment variable hierarchy, checking character-specific secrets first, then character settings, and finally global environment variables."}),"\n",(0,s.jsx)(n.h3,{id:"character-specific-secrets",children:"Character-Specific Secrets"}),"\n",(0,s.jsx)(n.p,{children:"Define secrets for individual characters in their character file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "FinancialAssistant",\n  "settings": {\n    "secrets": {\n      "OPENAI_API_KEY": "sk-character-specific-key",\n      "ALPHA_VANTAGE_API_KEY": "financial-data-api-key"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, use namespaced environment variables with this format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CHARACTER.<CHARACTER_NAME>.<SECRET_NAME>=value\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CHARACTER.TraderAgent.OPENAI_API_KEY=sk-character-specific-key\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"1-environment-segregation",children:"1. Environment Segregation"}),"\n",(0,s.jsx)(n.p,{children:"Keep separate environment files for different deployment contexts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".env.development    # Local development settings\n.env.staging        # Testing environment\n.env.production     # Production settings\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Load the appropriate file based on your ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," or custom environment flag."]}),"\n",(0,s.jsx)(n.h3,{id:"2-secret-validation",children:"2. Secret Validation"}),"\n",(0,s.jsx)(n.p,{children:"Validate required secrets before using them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function validateRequiredSecrets(runtime) {\n  const required = ['OPENAI_API_KEY', 'DATABASE_URL'];\n\n  const missing = required.filter((key) => !runtime.getSetting(key));\n\n  if (missing.length > 0) {\n    throw new Error(`Missing required secrets: ${missing.join(', ')}`);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-secure-error-handling",children:"3. Secure Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"Avoid exposing secrets in error messages or logs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"try {\n  const apiKey = runtime.getSetting('API_KEY');\n  // Use API key...\n} catch (error) {\n  // Log without exposing the secret\n  console.error('Error using API:', error.message);\n  // Don't log the actual API key!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-api-key-validation",children:"4. API Key Validation"}),"\n",(0,s.jsx)(n.p,{children:"Validate API key formats before use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// OpenAI API key validation\nconst apiKey = runtime.getSetting('OPENAI_API_KEY');\nif (apiKey && !apiKey.startsWith('sk-')) {\n  throw new Error('Invalid OpenAI API key format');\n}\n\n// Mask before logging\nconst maskedKey = apiKey ? `${apiKey.substring(0, 5)}...` : 'not set';\nconsole.log('Using API key:', maskedKey);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,s.jsx)(n.h3,{id:"private-key-handling",children:"Private Key Handling"}),"\n",(0,s.jsx)(n.p,{children:"Take extra care with blockchain private keys:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Retrieve private key from settings\nconst privateKey = runtime.getSetting('WALLET_PRIVATE_KEY');\n\n// Validate private key format (example for EVM)\nif (privateKey && !privateKey.match(/^(0x)?[0-9a-fA-F]{64}$/)) {\n  throw new Error('Invalid private key format');\n}\n\n// Use private key securely - NEVER log the actual key\nconsole.log('Using wallet with address:', getAddressFromPrivateKey(privateKey));\n"})}),"\n",(0,s.jsx)(n.h3,{id:"secret-rotation",children:"Secret Rotation"}),"\n",(0,s.jsx)(n.p,{children:"Implement periodic key rotation for production deployments:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generate new API keys/credentials"}),"\n",(0,s.jsx)(n.li,{children:"Update environment variables or character secrets"}),"\n",(0,s.jsx)(n.li,{children:"Verify functionality with new credentials"}),"\n",(0,s.jsx)(n.li,{children:"Revoke old credentials"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cloud-deployment-security",children:"Cloud Deployment Security"}),"\n",(0,s.jsx)(n.p,{children:"When deploying to cloud environments:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the platform's secrets management service:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS: Secrets Manager or Parameter Store"}),"\n",(0,s.jsx)(n.li,{children:"Google Cloud: Secret Manager"}),"\n",(0,s.jsx)(n.li,{children:"Azure: Key Vault"}),"\n",(0,s.jsx)(n.li,{children:"Vercel/Netlify: Environment Variables UI"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Minimize secret access:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Restrict which services can access which secrets"}),"\n",(0,s.jsx)(n.li,{children:"Use short-lived credentials when possible"}),"\n",(0,s.jsx)(n.li,{children:"Configure proper IAM roles and permissions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsx)(n.h4,{id:"1-missing-environment-variables",children:"1. Missing Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"If settings aren't being found:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Check that the ",(0,s.jsx)(n.code,{children:".env"})," file exists in the project root"]}),"\n",(0,s.jsx)(n.li,{children:"Verify variable names match exactly (they're case-sensitive)"}),"\n",(0,s.jsx)(n.li,{children:"Ensure the file is properly formatted with no spaces around equals signs"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-character-specific-secrets-not-working",children:"2. Character-Specific Secrets Not Working"}),"\n",(0,s.jsx)(n.p,{children:"If character-specific secrets aren't being applied:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify the character name in your namespaced variable matches exactly"}),"\n",(0,s.jsxs)(n.li,{children:["Check JSON syntax in the character file's ",(0,s.jsx)(n.code,{children:"settings.secrets"})," object"]}),"\n",(0,s.jsx)(n.li,{children:"Restart the application after changes to environment variables"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"3-environment-file-not-loading",children:"3. Environment File Not Loading"}),"\n",(0,s.jsxs)(n.p,{children:["If your entire ",(0,s.jsx)(n.code,{children:".env"})," file isn't being loaded:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Add this near the start of your application\nimport dotenv from 'dotenv';\ndotenv.config({ path: '.env.development' }); // Specify exact path if needed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/guides/configuration",children:"Configuration Guide"})," - General application configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/core/characterfile",children:"Character Files"})," - Character-specific configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/guides/local-development",children:"Local Development"})," - Development environment setup"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/guides/remote-deployment",children:"Deployment Guide"})," - Secure production deployment"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var r=i(14041);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);