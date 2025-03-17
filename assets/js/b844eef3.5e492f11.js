"use strict";(self.webpackChunk_elizaos_docs=self.webpackChunk_elizaos_docs||[]).push([[89342],{33071:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"advanced/eliza-in-tee","title":"\ud83e\uded6 Eliza in TEE","description":"Overview","source":"@site/versioned_docs/version-0.25.9/advanced/eliza-in-tee.md","sourceDirName":"advanced","slug":"/advanced/eliza-in-tee","permalink":"/eliza/docs/0.25.9/advanced/eliza-in-tee","draft":false,"unlisted":false,"editUrl":"https://github.com/elizaos/eliza/tree/main/docs/versioned_docs/version-0.25.9/advanced/eliza-in-tee.md","tags":[],"version":"0.25.9","lastUpdatedBy":"madjin","lastUpdatedAt":1742171474000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"Autonomous Trading","permalink":"/eliza/docs/0.25.9/advanced/autonomous-trading"},"next":{"title":"Verified Inference","permalink":"/eliza/docs/0.25.9/advanced/verified-inference"}}');var i=a(31085),r=a(71184);const c={sidebar_position:17},o="\ud83e\uded6 Eliza in TEE",s={},d=[{value:"Overview",id:"overview",level:2},{value:"Background",id:"background",level:3},{value:"Core Components",id:"core-components",level:2},{value:"Derive Key Provider",id:"derive-key-provider",level:3},{value:"Remote Attestation Provider",id:"remote-attestation-provider",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Environment Setup",id:"environment-setup",level:3},{value:"Run an Eliza Agent Locally with TEE Simulator",id:"run-an-eliza-agent-locally-with-tee-simulator",level:3},{value:"Build, Test, and Publish an Eliza Agent Docker Image",id:"build-test-and-publish-an-eliza-agent-docker-image",level:3},{value:"Run an Eliza Agent in a Real TEE Environment",id:"run-an-eliza-agent-in-a-real-tee-environment",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-eliza-in-tee",children:"\ud83e\uded6 Eliza in TEE"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(49555).A+"",width:"2569",height:"951"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The Eliza agent can be deployed in a TEE environment to ensure the security and privacy of the agent's data. This guide will walk you through the process of setting up and running an Eliza agent in a TEE environment by utilizing the TEE Plugin in the Eliza Framework."}),"\n",(0,i.jsx)(n.h3,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(n.p,{children:["The TEE Plugin in the Eliza Framework is built on top of the ",(0,i.jsx)(n.a,{href:"https://github.com/Dstack-TEE/dstack",children:"Dstack SDK"}),", which is designed to simplify the steps for developers to deploy programs to CVM (Confidential VM), and to follow the security best practices by default. The main features include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Convert any docker container to a CVM image to deploy on supported TEEs"}),"\n",(0,i.jsx)(n.li,{children:"Remote Attestation API and a chain-of-trust visualization on Web UI"}),"\n",(0,i.jsx)(n.li,{children:"Automatic RA-HTTPS wrapping with content addressing domain on 0xABCD.dstack.host"}),"\n",(0,i.jsx)(n.li,{children:"Decouple the app execution and state persistent from specific hardware with decentralized Root-of-Trust"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,i.jsx)(n.p,{children:"Eliza's TEE implementation consists of two primary providers that handle secure key management operations and remote attestations."}),"\n",(0,i.jsx)(n.p,{children:"These components work together to provide:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Secure key derivation within the TEE"}),"\n",(0,i.jsx)(n.li,{children:"Verifiable proof of TEE execution"}),"\n",(0,i.jsx)(n.li,{children:"Support for both development (simulator) and production environments"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The providers are typically used together, as seen in the wallet key derivation process where each derived key includes an attestation quote to prove it was generated within the TEE environment."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"derive-key-provider",children:"Derive Key Provider"}),"\n",(0,i.jsx)(n.p,{children:"The DeriveKeyProvider enables secure key derivation within TEE environments. It supports:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Multiple TEE modes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LOCAL"}),": Connects to simulator at ",(0,i.jsx)(n.code,{children:"localhost:8090"})," for local development on Mac/Windows"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DOCKER"}),": Connects to simulator via ",(0,i.jsx)(n.code,{children:"host.docker.internal:8090"})," for local development on Linux"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PRODUCTION"}),": Connects to actual TEE environment when deployed to the ",(0,i.jsx)(n.a,{href:"https://teehouse.vercel.app",children:"TEE Cloud"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Key features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Support to deriveEd25519 (Solana) and ECDSA (EVM) keypairs"}),"\n",(0,i.jsx)(n.li,{children:"Generates deterministic keys based on a secret salt and agent ID"}),"\n",(0,i.jsx)(n.li,{children:"Includes remote attestation for each derived key"}),"\n",(0,i.jsx)(n.li,{children:"Supports raw key derivation for custom use cases"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const provider = new DeriveKeyProvider(teeMode);\n// For Solana\nconst { keypair, attestation } = await provider.deriveEd25519Keypair(secretSalt, 'solana', agentId);\n// For EVM\nconst { keypair, attestation } = await provider.deriveEcdsaKeypair(secretSalt, 'evm', agentId);\n\n// For raw key derivation\nconst rawKey = await provider.deriveRawKey(secretSalt, 'raw');\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"remote-attestation-provider",children:"Remote Attestation Provider"}),"\n",(0,i.jsx)(n.p,{children:"The RemoteAttestationProvider handles TEE environment verification and quote generation. It:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connects to the same TEE modes as DeriveKeyProvider"}),"\n",(0,i.jsx)(n.li,{children:"Generates TDX quotes with replay protection (RTMRs)"}),"\n",(0,i.jsx)(n.li,{children:"Provides attestation data that can be verified by third parties"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Key features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generates attestation quotes with custom report data"}),"\n",(0,i.jsx)(n.li,{children:"Includes timestamp for quote verification"}),"\n",(0,i.jsx)(n.li,{children:"Supports both simulator and production environments"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const provider = new RemoteAttestationProvider(teeMode);\nconst quote = await provider.generateAttestation(reportData);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before getting started with Eliza, ensure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker Desktop"})," or ",(0,i.jsx)(n.a,{href:"https://orbstack.dev/",children:"Orbstack"})," (Orbstack is recommended)"]}),"\n",(0,i.jsxs)(n.li,{children:["For Mac/Windows: Check the prerequisites from ",(0,i.jsx)(n.a,{href:"/eliza/docs/0.25.9/quickstart",children:"Quickstart Guide"})]}),"\n",(0,i.jsx)(n.li,{children:"For Linux: You just need Docker"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,i.jsx)(n.p,{children:"To set up your environment for TEE development:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure TEE Mode"})}),"\n",(0,i.jsxs)(n.p,{children:["Set the ",(0,i.jsx)(n.code,{children:"TEE_MODE"})," environment variable to one of:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"# For Mac/Windows local development\nTEE_MODE=LOCAL\n\n# For Linux/Docker local development\nTEE_MODE=DOCKER\n\n# For production deployment\nTEE_MODE=PRODUCTION\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Set Required Environment Variables"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"# Required for key derivation\nWALLET_SECRET_SALT=your_secret_salt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start the TEE Simulator"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull phalanetwork/tappd-simulator:latest\n# by default the simulator is available in localhost:8090\ndocker run --rm -p 8090:8090 phalanetwork/tappd-simulator:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"run-an-eliza-agent-locally-with-tee-simulator",children:"Run an Eliza Agent Locally with TEE Simulator"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure Eliza Agent"})}),"\n",(0,i.jsxs)(n.p,{children:["Go through the ",(0,i.jsx)(n.a,{href:"/eliza/docs/0.25.9/guides/configuration",children:"configuration guide"})," to set up your Eliza agent."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start the TEE Simulator"}),"\nFollow the simulator setup instructions above based on your TEE mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For Mac/Windows"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to set the ",(0,i.jsx)(n.code,{children:"TEE_MODE"})," environment variable to ",(0,i.jsx)(n.code,{children:"LOCAL"}),". Then you can install the dependencies and run the agent locally:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm i\npnpm build\npnpm start --character=./characters/yourcharacter.character.json\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Verify TEE Attestation"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify the TEE attestation quote by going to the ",(0,i.jsx)(n.a,{href:"https://proof.t16z.com/",children:"TEE RA Explorer"})," and pasting the attestation quote from the agent logs. Here's an example of interacting with the Eliza agent to ask for the agent's wallet address:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"You: what's your wallet address?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Log output from the agent:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Generating attestation for:  {"agentId":"025e0996-69d7-0dce-8189-390e354fd1c1","publicKey":"9yZBmCRRFEBtA3KYokxC24igv1ijFp6tyvzKxRs3khTE"}\nrtmr0: a4a17452e7868f62f77ea2039bd2840e7611a928c26e87541481256f57bfbe3647f596abf6e8f6b5a0e7108acccc6e89\nrtmr1: db6bcc74a3ac251a6398eca56b2fcdc8c00a9a0b36bc6299e06fb4bb766cb9ecc96de7e367c56032c7feff586f9e557e\nrtmr2: 2cbe156e110b0cc4b2418600dfa9fb33fc60b3f04b794ec1b8d154b48f07ba8c001cd31f75ca0d0fb516016552500d07\nrtmr3: eb7110de9956d7b4b1a3397f843b39d92df4caac263f5083e34e3161e4d6686c46c3239e7fbf61241a159d8da6dc6bd1f\nRemote attestation quote:  {\nquote: \'0x0400030081000000736940f888442c8ca8cb432d7a87145f9b7aeab1c5d129ce901716a7506375426ea8741ca69be68e92c5df29f539f103eb60ab6780c56953b0d81af523a031617b32d5e8436cceb019177103f4aceedbf114a846baf8e8e2b8e6d3956e96d6b89d94a0f1a366e6c309d77c77c095a13d2d5e2f8e2d7f51ece4ae5ffc5fe8683a37387bfdb9acb8528f37342360abb64ec05ff438f7e4fad73c69a627de245a31168f69823883ed8ba590c454914690946b7b07918ded5b89dc663c70941f8704978b91a24b54d88038c30d20d14d85016a524f7176c7a7cff7233a2a4405da9c31c8569ac3adfe5147bdb92faee0f075b36e8ce794aaf596facd881588167fbcf5a7d059474c1e4abff645bba8a813f3083c5a425fcc88cd706b19494dedc04be2bc3ab1d71b2a062ddf62d0393d8cb421393cccc932a19d43e315a18a10d216aea4a1752cf3f3b0b2fb36bea655822e2b27c6156970d18e345930a4a589e1850fe84277e0913ad863dffb1950fbeb03a4a17452e7868f62f77ea2039bd2840e7611a928c26e87541481256f57bfbe3647f596abf6e8f6b5a0e7108acccc6e89db6bcc74a3ac251a6398eca56b2fcdc8c00a9a0b36bc6299e06fb4bb766cb9ecc96de7e367c56032c7feff586f9e557e2cbe156e110b0cc4b2418600dfa9fb33fc60b3f04b794ec1b8d154b48f07ba8c001cd31f75ca0d0fb516016552500d07eb7110de9956d7b4b1a3397f843b39d92df4caac263f5083e34e3161e4d6686c46c3239e7fbf61241a159d8da6dc6bd13df734883d4d0d78d670a1d17e28ef09dffbbfbd15063b73113cb5bed692d68cc30c38cb9389403fe6a1c32c35dbac75464b77597e27b854839db51dfde0885462020000530678b9eb99d1b9e08a6231ef00055560f7d3345f54ce355da68725bb38cab0caf84757ddb93db87577758bb06de7923c4ee3583453f284c8b377a1ec2ef613491e051c801a63da5cb42b9c12e26679fcf489f3b14bd5e8f551227b09d976975e0fbd68dcdf129110a5ca8ed8d163dafb60e1ec4831d5285a7fbae81d0e39580000dc010000ebb282d5c6aca9053a21814e9d65a1516ebeaacf6fc88503e794d75cfc5682e86aa04e9d6e58346e013c5c1203afc5c72861e2a7052afcdcb3ddcccd102dd0daeb595968edb6a6c513db8e2155fc302eeca7a34c9ba81289d6941c4c813db9bf7bd0981d188ab131e5ae9c4bb831e4243b20edb7829a6a7a9cf0eae1214b450109d990e2c824c2a60a47faf90c24992583bc5c3da3b58bd8830a4f0ad5c650aa08ae0e067d4251d251e56d70972ad901038082ee9340f103fd687ec7d91a9b8b8652b1a2b7befb4cbfdb6863f00142e0b2e67198ddc8ddbe96dc02762d935594394f173114215cb5abcf55b9815eb545683528c990bfae34c34358dbb19dfc1426f56cba12af325d7a2941c0d45d0ea4334155b790554d3829e3be618eb1bfc6f3a06f488bbeb910b33533c6741bff6c8a0ca43eb2417eec5ecc2f50f65c3b40d26174376202915337c7992cdd44471dee7a7b2038605415a7af593fd9066661e594b26f4298baf6d001906aa8fc1c460966fbc17b2c35e0973f613399936173802cf0453a4e7d8487b6113a77947eef190ea8d47ba531ce51abf5166448c24a54de09d671fd57cbd68154f5995aee6c2ccfd6738387cf3ad9f0ad5e8c7d46fb0a0000000000000000000000bd920a00000000000000000000000000\',\ntimestamp: 1733606453433\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Take the ",(0,i.jsx)(n.code,{children:"quote"})," field and paste it into the ",(0,i.jsx)(n.a,{href:"https://ra-quote-explorer.vercel.app/",children:"TEE RA Explorer"})," to verify the attestation. ",(0,i.jsx)(n.strong,{children:"Note"}),": The verification will be unverified since the quote is generated from the TEE simulator."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/xYGMeP4.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/BugdNUy.png",alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-test-and-publish-an-eliza-agent-docker-image",children:"Build, Test, and Publish an Eliza Agent Docker Image"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have run the Eliza agent in the TEE simulator, we can build and publish an Eliza agent Docker image to prepare for deployment to a real TEE environment."}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to create a Docker account and publish your image to a container registry. Here we will use ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," as an example."]}),"\n",(0,i.jsx)(n.p,{children:"Login to Docker Hub:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker login\n"})}),"\n",(0,i.jsx)(n.p,{children:"Build the Docker image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# For Linux/AMD64 machines run\ndocker build -t username/eliza-agent:latest .\n\n# For architecture other than AMD64, run\ndocker buildx build --platform=linux/amd64 -t username/eliza-agent:latest .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For Linux/AMD64 machines, you can now test the agent locally by updating the ",(0,i.jsx)(n.code,{children:"TEE_MODE"})," environment variable to ",(0,i.jsx)(n.code,{children:"DOCKER"})," and setting the environment variables in the ",(0,i.jsx)(n.a,{href:"https://github.com/elizaos/eliza/blob/main/docker-compose.yaml",children:"docker-compose.yaml"})," file. Once you have done that, you can start the agent by running:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": Make sure the TEE simulator is running before starting the agent through docker compose."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,i.jsx)(n.p,{children:"Publish the Docker image to a container registry:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker push username/eliza-agent:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now we are ready to deploy the Eliza agent to a real TEE environment."}),"\n",(0,i.jsx)(n.h3,{id:"run-an-eliza-agent-in-a-real-tee-environment",children:"Run an Eliza Agent in a Real TEE Environment"}),"\n",(0,i.jsxs)(n.p,{children:["Before deploying the Eliza agent to a real TEE environment, you need to create a new TEE account on the ",(0,i.jsx)(n.a,{href:"https://cloud.phala.network/login",children:"TEE Cloud"}),". Reach out to Phala Network on ",(0,i.jsx)(n.a,{href:"https://discord.gg/phalanetwork",children:"Discord"})," if you need help."]}),"\n",(0,i.jsx)(n.p,{children:"Next, you will need to take the docker-compose.yaml file in the root folder of the project and edit it based on your agent configuration."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": The API Keys and other secret environment variables should be set in your secret environment variables configuration in the TEE Cloud dashboard."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yaml\nservices:\n  tee:\n    command: ['pnpm', 'start', '--character=./characters/yourcharacter.character.json']\n    image: username/eliza-agent:latest\n    stdin_open: true\n    tty: true\n    volumes:\n      - /var/run/tappd.sock:/var/run/tappd.sock\n      - tee:/app/packages/client-twitter/src/tweetcache\n      - tee:/app/db.sqlite\n    environment:\n      - REDPILL_API_KEY=$REDPILL_API_KEY\n      - SMALL_REDPILL_MODEL=anthropic/claude-3-5-sonnet\n      - MEDIUM_REDPILL_MODEL=anthropic/claude-3-5-sonnet\n      - LARGE_REDPILL_MODEL=anthropic/claude-3-opus\n      - ELEVENLABS_XI_API_KEY=$ELEVENLABS_XI_API_KEY\n      - ELEVENLABS_MODEL_ID=eleven_multilingual_v2\n      - ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM\n      - ELEVENLABS_VOICE_STABILITY=0.5\n      - ELEVENLABS_VOICE_SIMILARITY_BOOST=0.9\n      - ELEVENLABS_VOICE_STYLE=0.66\n      - ELEVENLABS_VOICE_USE_SPEAKER_BOOST=false\n      - ELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4\n      - ELEVENLABS_OUTPUT_FORMAT=pcm_16000\n      - TWITTER_DRY_RUN=false\n      - TWITTER_USERNAME=$TWITTER_USERNAME\n      - TWITTER_PASSWORD=$TWITTER_PASSWORD\n      - TWITTER_EMAIL=$TWITTER_EMAIL\n      - X_SERVER_URL=$X_SERVER_URL\n      - BIRDEYE_API_KEY=$BIRDEYE_API_KEY\n      - SOL_ADDRESS=So11111111111111111111111111111111111111112\n      - SLIPPAGE=1\n      - SOLANA_RPC_URL=https://api.mainnet-beta.solana.com\n      - HELIUS_API_KEY=$HELIUS_API_KEY\n      - SERVER_PORT=3000\n      - WALLET_SECRET_SALT=$WALLET_SECRET_SALT\n      - TEE_MODE=PRODUCTION\n    ports:\n      - '3000:80'\n    restart: always\n\nvolumes:\n  tee:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you can deploy the Eliza agent to a real TEE environment. Go to the ",(0,i.jsx)(n.a,{href:"https://cloud.phala.network/login",children:"TEE Cloud"})," and click on the ",(0,i.jsx)(n.code,{children:"Create VM"})," button to configure your Eliza agent deployment."]}),"\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Compose Manifest Mode"})," tab and paste the docker-compose.yaml file content into the ",(0,i.jsx)(n.code,{children:"Compose Manifest"})," field."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/wl6pddX.png",alt:"Compose Manifest"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, go to the ",(0,i.jsx)(n.code,{children:"Resources"})," tab and configure your VM resources."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": The ",(0,i.jsx)(n.code,{children:"CPU"})," and ",(0,i.jsx)(n.code,{children:"Memory"})," resources should be greater than the minimum requirements for your agent configuration (Recommended: 2 CPU, 4GB Memory, 50GB Disk)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/HsmupO1.png",alt:"Resources"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, click on the ",(0,i.jsx)(n.code,{children:"Submit"})," button to deploy your Eliza agent."]}),"\n",(0,i.jsxs)(n.p,{children:["This will take a few minutes to complete. Once the deployment is complete, you can click on the ",(0,i.jsx)(n.code,{children:"View"})," button to view your Eliza agent."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of a deployed agent named ",(0,i.jsx)(n.code,{children:"vitalik2077"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/ie8gpg9.png",alt:"Deployed Agent"})}),"\n",(0,i.jsx)(n.p,{children:"I can go to the dashboard and view the remote attestation info:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/vUqHGjF.png",alt:"Agent Dashboard"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Logs"})," tab to view the agent logs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/aU3i0Dv.png",alt:"Agent Logs"})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can verify the REAL TEE attestation quote by going to the ",(0,i.jsx)(n.a,{href:"https://proof.t16z.com/",children:"TEE RA Explorer"})," and pasting the attestation quote from the agent logs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/TJ5299l.png",alt:"TEE RA Explorer"})}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You have successfully run an Eliza agent in a real TEE environment."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},49555:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/eliza_in_tee-9d4ac74fe40ee5b815cc350c5168c6c5.jpg"},71184:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>o});var t=a(14041);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);