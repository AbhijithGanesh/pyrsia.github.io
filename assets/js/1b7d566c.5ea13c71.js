"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3700],{81179:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(8209),["components"]),l={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/quick-installation.mdx",sidebar_position:0},s="Quick Installation",p={unversionedId:"tutorials/quick-installation",id:"tutorials/quick-installation",title:"Quick Installation",description:"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our apt installer package.",source:"@site/docs/tutorials/quick-installation.mdx",sourceDirName:"tutorials",slug:"/tutorials/quick-installation",permalink:"/docs/tutorials/quick-installation",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/quick-installation.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/quick-installation.mdx",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"End-user documentation",permalink:"/docs/tutorials/"},next:{title:"What is Pyrsia",permalink:"/docs/tutorials/what_is_pyrsia"}},u={},c=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Windows",id:"windows",level:2},{value:"macOS",id:"macos",level:2},{value:"Using Homebrew Package Manager",id:"using-homebrew-package-manager",level:3},{value:"Linux",id:"linux",level:2},{value:"Using the Web Script",id:"using-the-web-script",level:3},{value:"From the Command Line",id:"from-the-command-line",level:3},{value:"Installer Bootstrapping other than default cluster",id:"installer-bootstrapping-other-than-default-cluster",level:3},{value:"Verify everything is running smoothly",id:"verify-everything-is-running-smoothly",level:3},{value:"Run Pyrsia in Docker",id:"run-pyrsia-in-docker",level:2},{value:"Docker",id:"docker",level:3},{value:"Docker Compose",id:"docker-compose",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-installation"},"Quick Installation"),(0,i.kt)("p",null,"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," installer package."),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("p",null,"We support the following platforms to run Pyrsia."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#windows"},"Windows (x86_64)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#macos"},"macOS (x86_64)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#linux"},"Ubuntu Focal (x86_64)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-pyrsia-in-docker"},"pre-built Docker image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/community/get_involved/local_dev_setup"},"build Pyrsia from source"))),(0,i.kt)("p",null,"Please let us know if the platform of your choice is not yet supported."),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("admonition",{title:"Minimal installer functionality",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In version 0.2 we chose to include a minimal Windows installer. It simply installs the node and cli executables that need\nto be run manually. Also the installer is not yet signed, so you need to ignore some warnings. We plan to fix this in subsequent releases.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download the latest Windows installer from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/releases/"},"release page"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the installer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Either simply double-click or use the ",(0,i.kt)("inlineCode",{parentName:"li"},"msiexec")," command described below"),(0,i.kt)("li",{parentName:"ul"},'If you get a "Windows protected your PC" warning, click more info, and click run anyway because we haven\'t signed our installer yet.')))),(0,i.kt)("p",null,"Instead of double-clicking the installer, you can also run it like this, open a command prompt (type: Win+R + cmd):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'msiexec /i Downloads/pyrsia-installer-0.2.2.msi ROOTDRIVE="C:"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The installer will now install Pyrsia (pyrsia_node.exe and pyrsia.exe) in ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Pyrsia")," unless you specified a different\nROOTDRIVE in the previous step.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open a command prompt (type Win+R + cmd) and type"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"SET RUST_LOG=info\ncd c:\\Pyrsia\\Pyrsia\\service\n.\\pyrsia_node.exe\n")),(0,i.kt)("p",null,"This will start your local Pyrsia node with ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," logs. (you can also skip ",(0,i.kt)("inlineCode",{parentName:"p"},"SET RUST_LOG=info")," if you don't want logs,\nor set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"SET RUST_LOG=debug")," to see even more logs)"),(0,i.kt)("p",null,"When you first start the Pyrsia node, Windows might ask you to allow Pyrsia to make network connections, so make sure to\nallow this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once your Pyrsia node is running, open another command prompt and verify it's running:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia --version\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pyrsia_cli 0.2.2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia ping\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Connection Successful !!\n")),(0,i.kt)("p",null,"If the pyrsia command cannot be found, make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Pyrsia\\Pyrsia\\bin")," is in your ",(0,i.kt)("inlineCode",{parentName:"p"},"%PATH%")," or simply ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," to that path\nand run pyrsia from there."),(0,i.kt)("p",null,"To verify you received the transparency logs from the network, run this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia inspect-log docker --image alpine:3.16.0\n")),(0,i.kt)("p",null,"This should output something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'[\n  {\n    "artifact_hash": "2408cc74d12b6cd092bb8b516ba7d5e290f485d3eb9672efc00f0583730179e8",\n    "artifact_id": "f3f2c69c-3387-47d0-96c8-cb57b3e9f1ae",\n    "id": "70d17e31-14b5-4e00-9107-acc95e8bf5c8",\n    "node_id": "bde95c7a-1397-470a-8f07-d9f13e97dffe",\n    "node_public_key": "a65f7c06-cdc9-4210-b0c1-1a08311231ec",\n    "num_artifacts": 4,\n    "operation": "AddArtifact",\n    "package_specific_artifact_id": "alpine@sha256:2408cc74d12b6cd092bb8b516ba7d5e290f485d3eb9672efc00f0583730179e8",\n    "package_specific_id": "alpine:3.16.0",\n    "package_type": "Docker",\n    "source_id": "ddd37612-5da8-4b74-b884-5fa1e2fb1a52",\n    "timestamp": 1666096808\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"Including the JSON output of the retrieved transparency logs for ",(0,i.kt)("inlineCode",{parentName:"p"},"alpine:3.16.0"),"."),(0,i.kt)("p",null,"Now you are ready to follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/docker"},"Configure Docker to use Pyrsia")," to make actual use of Pyrsia."),(0,i.kt)("h2",{id:"macos"},"macOS"),(0,i.kt)("admonition",{title:"Minimal installer functionality",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In version 0.2 we choose to include minimalistic macOS installer. The installer is available through Homebrew package manager.")),(0,i.kt)("h3",{id:"using-homebrew-package-manager"},"Using Homebrew Package Manager"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Homebrew is a free macOS package manager that allows you to install, update, or remove software by running commands in\nthe terminal. Homebrew makes it easy to install the latest versions of various software for macOS. Find the\nHomebrew installation ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"link")," here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/homebrew-pyrsia"},"Pyrsia Taps")," (Third-Party Repositories)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap pyrsia/pyrsia\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use brew installer to install Pyrsia")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install pyrsia\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a terminal and start Pyrsia Node as background service using the following")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew services start pyrsia\n")),(0,i.kt)("p",null,"As per service configuration, Pyrsia Node service logging level set to ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," except module pyrsia set to ",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),"."),(0,i.kt)("p",null,"When you start the Pyrsia node for the first time, a directory is created in ",(0,i.kt)("inlineCode",{parentName:"p"},"$(brew --prefix)/var/pyrsia/")," where all logs and blockchain data are saved. Also macOS might ask for network connection permission. So make sure to allow this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once Pyrsia node is running state, similar kind of logs can be found in the Homebrew log file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' $ tail -f $(brew --prefix)/var/pyrsia/logs/stdout/pyrsia_node.log\n 2022-10-20T07:45:57.707Z INFO  pyrsia_node > Pyrsia Node will start running on 0.0.0.0:7888\n 2022-10-20T07:45:57.708Z INFO  pyrsia_node > Looking up bootstrap node\n 2022-10-20T07:45:57.709Z INFO  pyrsia::network::event_loop > Local node is listening on "/ip4/192.168.86.171/tcp/54690/p2p/12D3KooWL8xbhUABLVUAmpcVoCZSghRX1XZZmoyMPo4VC28CEx6P"\n 2022-10-20T07:45:57.709Z INFO  pyrsia::network::event_loop > Local node is listening on "/ip4/127.0.0.1/tcp/54690/p2p/12D3KooWL8xbhUABLVUAmpcVoCZSghRX1XZZmoyMPo4VC28CEx6P"\n 2022-10-20T07:45:57.709Z INFO  pyrsia::network::event_loop > Local node is listening on "/ip4/100.64.0.1/tcp/54690/p2p/12D3KooWL8xbhUABLVUAmpcVoCZSghRX1XZZmoyMPo4VC28CEx6P"\n 2022-10-20T07:45:57.929Z INFO  pyrsia_node                 > Found bootstrap peer_addr "/ip4/104.198.178.107/tcp/44000/p2p/12D3KooWERQcvMrdmRc8a3oSuEDU2AmMZ974ADpisbbpFDrSZ8hx"\n 2022-10-20T07:45:57.930Z INFO  pyrsia_node                 > Probing "/ip4/104.198.178.107/tcp/44000/p2p/12D3KooWERQcvMrdmRc8a3oSuEDU2AmMZ974ADpisbbpFDrSZ8hx"\n 2022-10-20T07:46:23.248Z INFO  pyrsia::network::event_loop > Autonat status changed from Unknown to Private\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open another terminal to verify everything is running smoothly.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To verify Pyrsia version")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia --version\n")),(0,i.kt)("p",null,"Display the version ",(0,i.kt)("inlineCode",{parentName:"p"},"pyrsia_cli 0.2.2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- To verify your local Pyrsia node connected to Pyrsia network\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia ping\n")),(0,i.kt)("p",null,"If your node successfully connected to the Pyrsia network you will see ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection Successful !!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- To verify you received the transparency logs from the network, run this:\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia inspect-log docker --image alpine:3.16.0\n")),(0,i.kt)("p",null,"This should output something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Inspect log request returns the following logs: ...\n")),(0,i.kt)("p",null,"Including the JSON output of the retrieved transparency logs for ",(0,i.kt)("inlineCode",{parentName:"p"},"alpine:3.16.0"),"."),(0,i.kt)("p",null,"Now you are ready to follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/docker"},"Configure Docker to use Pyrsia")," to make actual use of Pyrsia."),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("h3",{id:"using-the-web-script"},"Using the Web Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://pyrsia.io/install.sh | sh\n")),(0,i.kt)("h3",{id:"from-the-command-line"},"From the Command Line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Update system and install base tooling\nsudo apt-get update\nsudo apt-get install -y wget gnupg\n\n# Add the Pyrsia keys to verify packages\nwget -q -O - https://repo.pyrsia.io/repos/Release.key |  gpg --dearmor  > pyrsia.gpg\nsudo install -o root -g root -m 644 pyrsia.gpg /etc/apt/trusted.gpg.d/\nrm pyrsia.gpg\necho "deb https://repo.pyrsia.io/repos/nightly focal main" | sudo tee -a /etc/apt/sources.list > /dev/null\nsudo apt-get update\n\n# Install\nsudo apt-get install -y pyrsia\n')),(0,i.kt)("h3",{id:"installer-bootstrapping-other-than-default-cluster"},"Installer Bootstrapping other than default cluster"),(0,i.kt)("p",null,"To connect Pyrsia peer-node authorized boot-node other than default authorize boot node, here is the hack. You have to\nmake some edits to ",(0,i.kt)("inlineCode",{parentName:"p"},"pyrsia.service")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# E.G. bootstrapping to nightly-cluster.\nsudo sed -i '/ExecStart=/ s/$/ --bootstrap-url http:\\/\\/boot.nightly.pyrsia.link\\/status/' $(sudo find /etc -name pyrsia.service)\n\n# reload daemon & restart service\nsystemctl daemon-reload\nservice pyrsia restart\n")),(0,i.kt)("h3",{id:"verify-everything-is-running-smoothly"},"Verify everything is running smoothly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia --version\npyrsia 0.2.2\n$ pyrsia ping\nConnection Successful !!\n")),(0,i.kt)("p",null,"If you see the following output, then your installation has failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia ping\nError: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")),(0,i.kt)("p",null,"To verify you received the transparency logs from the network, run this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pyrsia inspect-log docker --image alpine:3.16.0\n")),(0,i.kt)("p",null,"This should output something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'[\n  {\n    "artifact_hash": "2408cc74d12b6cd092bb8b516ba7d5e290f485d3eb9672efc00f0583730179e8",\n    "artifact_id": "f3f2c69c-3387-47d0-96c8-cb57b3e9f1ae",\n    "id": "70d17e31-14b5-4e00-9107-acc95e8bf5c8",\n    "node_id": "bde95c7a-1397-470a-8f07-d9f13e97dffe",\n    "node_public_key": "a65f7c06-cdc9-4210-b0c1-1a08311231ec",\n    "num_artifacts": 4,\n    "operation": "AddArtifact",\n    "package_specific_artifact_id": "alpine@sha256:2408cc74d12b6cd092bb8b516ba7d5e290f485d3eb9672efc00f0583730179e8",\n    "package_specific_id": "alpine:3.16.0",\n    "package_type": "Docker",\n    "source_id": "ddd37612-5da8-4b74-b884-5fa1e2fb1a52",\n    "timestamp": 1666096808\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"Including the JSON output of the retrieved transparency logs for ",(0,i.kt)("inlineCode",{parentName:"p"},"alpine:3.16.0")),(0,i.kt)("p",null,"Now you are ready to follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/docker"},"Configure Docker to use Pyrsia")," to make actual use of Pyrsia."),(0,i.kt)("h2",{id:"run-pyrsia-in-docker"},"Run Pyrsia in Docker"),(0,i.kt)("p",null,"As a temporary alternative to the installation scripts for the supported platforms,\nyou can also choose to run our pre-built Docker image available in ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pyrsiaoss/pyrsia-node"},"Docker Hub"),"."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Make sure you have Docker installed on your system and run in the background:"),(0,i.kt)("p",null,"(Add an option ",(0,i.kt)("inlineCode",{parentName:"p"},"-e RUST_LOG=debug")," to change the log level from the default value, ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),".)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -p 7888:7888 --name pyrsia_node pyrsiaoss/pyrsia-node:0.2.2-2699\n")),(0,i.kt)("p",null,"Tail the logs to check if Pyrsia started correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker logs -f pyrsia_node\n")),(0,i.kt)("p",null,"Or use the pyrsia CLI like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec pyrsia_node pyrsia ping\nConnection Successful !!\n")),(0,i.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,i.kt)("p",null,"Use this ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  pyrsia:\n    image: pyrsiaoss/pyrsia-node:0.2.2-2699\n    ports:\n      - "7888:7888"\n    volumes:\n      - "pyrsia:/pyrsia"\n\nvolumes:\n  pyrsia:\n')),(0,i.kt)("p",null,"Add the following setting to change the log level (",(0,i.kt)("inlineCode",{parentName:"p"},"info")," is set as a default value):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  pyrsia:\n    environment: # This is optional.\n      - RUST_LOG=debug\n")),(0,i.kt)("p",null,"Start running Pyrsia in the background:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),(0,i.kt)("p",null,"Tail the logs to check if Pyrsia started correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs -f\n")),(0,i.kt)("p",null,"Or use the pyrsia CLI like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec pyrsia-1 pyrsia ping\nConnection Successful !!\n")),(0,i.kt)("p",null,"(replace pyrsia-1 with the name of your Pyrsia container)"))}m.isMDXComponent=!0}}]);