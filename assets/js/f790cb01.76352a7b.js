"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3755],{34336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=n(8209),s=["components"],p={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-autonat.md",sidebar_position:4},l="Pyrsia AutoNAT Implementation (IETF STUN)",d={unversionedId:"developers/pyrsia-autonat",id:"developers/pyrsia-autonat",title:"Pyrsia AutoNAT Implementation (IETF STUN)",description:"Warning: This document is a work-in-progress.",source:"@site/docs/developers/pyrsia-autonat.md",sourceDirName:"developers",slug:"/developers/pyrsia-autonat",permalink:"/docs/developers/pyrsia-autonat",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-autonat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-autonat.md",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pyrsia demo: build Maven images from source",permalink:"/docs/developers/build_from_source_maven"},next:{title:"How to start and debug Pyrsia Node using IDE",permalink:"/docs/developers/setting_up_ide"}},u={},m=[{value:"Abbreviations used in this document",id:"abbreviations-used-in-this-document",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Hole punching",id:"hole-punching",level:2},{value:"Hole punching implementation notes",id:"hole-punching-implementation-notes",level:3},{value:"Bootstrapping an initial peer from boot.pyrsia.link",id:"bootstrapping-an-initial-peer-from-bootpyrsialink",level:2},{value:"Bootstrapping implementation notes",id:"bootstrapping-implementation-notes",level:3}],c={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pyrsia-autonat-implementation-ietf-stun"},"Pyrsia AutoNAT Implementation (IETF STUN)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," This document is a work-in-progress.")),(0,r.kt)("h2",{id:"abbreviations-used-in-this-document"},"Abbreviations used in this document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NAT: Network Address Translation. A mechanism for connecting and routing between private networks and the public internet."),(0,r.kt)("li",{parentName:"ul"},"STUN: Session Traversal Utilities for NAT. An IETF standard for connecting applications over the public internet originating from private networks."),(0,r.kt)("li",{parentName:"ul"},"IETF: Internet Engineering Task Force. One of the groups that standardizes protocols on the Internet."),(0,r.kt)("li",{parentName:"ul"},"P2P: Peer-to-peer. A networking technology emphasizing decentralization and scalability.")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/libp2p"},"libp2p")," - The primary source of our p2p implementation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/libp2p-autonat"},"libp2p-autonat")," - NAT and firewall detection.")),(0,r.kt)("h2",{id:"hole-punching"},"Hole punching"),(0,r.kt)("p",null,"libp2p-autonat (combined with libp2p-identify) correspond to ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8489"},"STUN"),".\nThis is used to allow private networks to connect and participate in the pyrsia peer to peer network."),(0,r.kt)("h3",{id:"hole-punching-implementation-notes"},"Hole punching implementation notes"),(0,r.kt)("p",null,"A review of ",(0,r.kt)("a",{parentName:"p",href:"https://blog.ipfs.tech/2022-01-20-libp2p-hole-punching/"},"Hole punching in libp2p - Overcoming Firewalls by Max Inden")," is recommended, as that spells out the technical details of the libp2p implementation. Also note that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p/go-libp2p/issues/436"},"libp2p may advertise non-routable networks to peers"),". We have implemented our own bootstrapping strategy. That is described in detail below."),(0,r.kt)("h2",{id:"bootstrapping-an-initial-peer-from-bootpyrsialink"},"Bootstrapping an initial peer from boot.pyrsia.link"),(0,r.kt)("p",null,'We maintain a cluster of bootstrap servers behind the public url "',(0,r.kt)("a",{parentName:"p",href:"http://boot.pyrsia.link%22"},'http://boot.pyrsia.link"'),' on that site, we return a round robin list of peer addresses through a JSON document. On startup, a pyrsia client performs a HTTP GET to "',(0,r.kt)("a",{parentName:"p",href:"http://boot.pyrsia.link/status%22"},'http://boot.pyrsia.link/status"')," and parses an array of peer multi addresses in the libp2p format. The client then begins an AutoNAT probe of the peer address."),(0,r.kt)(a.G,{chart:"graph TD;\nnode[Pyrsia Node] --HTTP GET /status--\x3e boot[boot.pyrsia.link]\nboot --\x3e boot1[Boot node 1<br>PeerId A]\nboot --\x3e boot2[boot node 2<br>PeerId B]\nboot --\x3e boot3[Boot node 3<br>PeerId C]\nboot --\x3e boot4[Boot node 4<br>PeerId D]\nboot1 --\x3e json[JSON<br>Containing peer<br>addresses and<br>basic metrics]\nboot2 --\x3e json\nboot3 --\x3e json\nboot4 --\x3e json\njson ----\x3e node",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"bootstrapping-implementation-notes"},"Bootstrapping implementation notes"),(0,r.kt)("p",null,"The peers returned by the boot.pyrsia.link are currently implemented with a basic round robin algorithm. We are in the process of gathering peer metrics and may use those to inform this process in the future. Additional peers may be returned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_addr")," array. Once an ",(0,r.kt)("inlineCode",{parentName:"p"},"AutonatEvent::InboundProbe")," Request is received from the bootstrap node the client is fully connected to the Pyrsia p2p network."))}h.isMDXComponent=!0}}]);