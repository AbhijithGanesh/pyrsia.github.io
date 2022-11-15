"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[4242],{18359:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=(a(8209),["components"]),s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/rfc/readme.md"},l="Pyrsia RFCs",p={unversionedId:"community/rfc/readme",id:"community/rfc/readme",title:"Pyrsia RFCs",description:"Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the",source:"@site/docs/community/rfc/readme.md",sourceDirName:"community/rfc",slug:"/community/rfc/",permalink:"/docs/community/rfc/",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/rfc/readme.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/rfc/readme.md"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Governance",permalink:"/docs/community/governance"},next:{title:"Template",permalink:"/docs/community/rfc/sample_rfc"}},c={},m=[{value:"Summary",id:"summary",level:2},{value:"Why are RFCs needed",id:"why-are-rfcs-needed",level:2},{value:"When you need to follow this process",id:"when-you-need-to-follow-this-process",level:2},{value:"Before Creating an RFC",id:"before-creating-an-rfc",level:2},{value:"The Proposal Process",id:"the-proposal-process",level:2},{value:"Approach the Community",id:"approach-the-community",level:3},{value:"Reviewing a Proposal",id:"reviewing-a-proposal",level:3},{value:"Proposal resolution",id:"proposal-resolution",level:3},{value:"After acceptance",id:"after-acceptance",level:2},{value:"Implementing a proposal",id:"implementing-a-proposal",level:2},{value:"Inspirations",id:"inspirations",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pyrsia-rfcs"},"Pyrsia RFCs"),(0,r.kt)("p",null,"Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the\nnormal GitHub pull request workflow."),(0,r.kt)("p",null,'Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce\na consensus among the Pyrsia community. See ',(0,r.kt)("a",{parentName:"p",href:"#when-you-need-to-follow-this-process"},"when to follow this process")," below."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The process can be broken down as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#before-creating-an-rfc"},"Reach out on community forms and open an issue")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#the-proposal-process"},"Follow the template and open a PR")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#approach-the-community"},"Attend our meeting and promote your proposal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#reviewing-a-proposal"},"Schedule a review meeting"))),(0,r.kt)("p",null,"Lastly, ",(0,r.kt)("a",{parentName:"p",href:"#proposal-resolution"},"Proposal resolution")," may take several different forms."),(0,r.kt)("h2",{id:"why-are-rfcs-needed"},"Why are RFCs needed"),(0,r.kt)("p",null,"An RFCs is a design document providing information to the Pyrsia community. The RFC should provide a concise technical specification of\nthe feature and a rationale for the feature. Strong RFCs included detailed research on the idea and may be accompanied by a proof of concept"),(0,r.kt)("p",null,"We intend RFCs to be the primary mechanisms for proposing major new features, for collecting community input on an issue, and for documenting\nthe design decisions that have gone into Pyrsia."),(0,r.kt)("p",null,"The RFC author is strongly encouraged to facilitate the discussion when the proposal is brought up at community events.\nBecause the RFCs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal."),(0,r.kt)("h2",{id:"when-you-need-to-follow-this-process"},"When you need to follow this process"),(0,r.kt)("p",null,'You should consider using this process if you intend to make "substantial" changes to Pyrsia or its documentation. Some examples that would benefit\nfrom an RFC are:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new feature that creates new API surface area."),(0,r.kt)("li",{parentName:"ul"},"The removal of features that already shipped as part of the release channel."),(0,r.kt)("li",{parentName:"ul"},"The introduction of new idiomatic usage or conventions.")),(0,r.kt)("p",null,'The RFC process is a great opportunity to get more eyeballs on your proposal before it becomes a part of a Pyrsia.\nQuite often, even proposals that seem "obvious" can be significantly improved once a wider group of interested people have a chance to weigh in.'),(0,r.kt)("p",null,"The RFC process can also be helpful to encourage discussions about a proposed feature as it is being designed, and incorporate important\nconstraints into the design while it's easier to change, before the design has been fully implemented."),(0,r.kt)("h2",{id:"before-creating-an-rfc"},"Before Creating an RFC"),(0,r.kt)("p",null,"A hastily-proposed RFC can hurt its chances of acceptance. Low quality proposals, proposals for previously-rejected features, or those that don't fit\ninto the near-term roadmap, may be quickly rejected, which can be demotivating for the unprepared contributor. Laying some groundwork ahead of the RFC\ncan make the process smoother."),(0,r.kt)("p",null,"Although there is no single way to prepare for submitting an RFC, it is generally a good idea to pursue feedback from other project developers beforehand,\nto ascertain that the RFC may be desirable; having a consistent impact on the project requires concerted effort toward consensus-building."),(0,r.kt)("p",null,"The most common preparations for writing and submitting an RFC include talking the idea over on our official Slack channel, discussing the topic in a\nGitHub issue."),(0,r.kt)("p",null,"As a rule of thumb, receiving encouraging feedback from long-standing project developers, and particularly members of the relevant sub-team is a good indication\nthat the RFC is worth pursuing."),(0,r.kt)("h2",{id:"the-proposal-process"},"The Proposal Process"),(0,r.kt)("p",null,'In short, to get a major feature added, one must first get the RFC merged into the RFC repository as a markdown file. At that point the RFC is "active" and may\nbe implemented.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork this repository ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/fork"},"pyrsia/pyrsia")),(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/rfc/0000-template.md")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/rfc/0000-my-feature.md"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"where 'my-feature' is the title in kebab case; don't assign a number yet."))),(0,r.kt)("li",{parentName:"ul"},"Please put in enough time and research in putting a proposal together and we strongly encourage getting some feedback from part of the team before making your proposal final."),(0,r.kt)("li",{parentName:"ul"},"Submit a pull request. As a pull request, the proposal will receive feedback from the larger community, and the author should be prepared to revise it in response.")),(0,r.kt)("h3",{id:"approach-the-community"},"Approach the Community"),(0,r.kt)("p",null,"Build consensus and integrate feedback. Proposals that have broad support are much more likely to make progress than those that don't receive any comments."),(0,r.kt)("h3",{id:"reviewing-a-proposal"},"Reviewing a Proposal"),(0,r.kt)("p",null,"Periodically, the team will attempt to review the active proposals. We try to discuss proposals at the bi-weekly team\n",(0,r.kt)("a",{parentName:"p",href:"/docs/community/get_involved/#attend-a-community-meeting"},"Architecture")," meeting, we schedule additional meetings as need. Actions are recorded in the meeting minutes."),(0,r.kt)("h3",{id:"proposal-resolution"},"Proposal resolution"),(0,r.kt)("p",null,"Eventually, the team will decide whether the proposal is a candidate for adoption."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A proposal can be modified based upon feedback from the team and community. Significant modifications may trigger a new final comment period."),(0,r.kt)("li",{parentName:"ul"},"A proposal may be rejected by the team after public discussion has settled and comments have been made summarizing the rationale for rejection. A member of the team should then close the associated pull request."),(0,r.kt)("li",{parentName:"ul"},"A proposal may be accepted. A team member will merge the proposal's associated pull request, at which point the proposal will become adopted.")),(0,r.kt)("h2",{id:"after-acceptance"},"After acceptance"),(0,r.kt)("p",null,"Once a proposal is accepted, then authors may implement it. This may mean submitting a pull request to the repository or putting some other process into place.\nAcceptance however does not mean that resources are committed to the work; instead it means that the group is open to the change taking place."),(0,r.kt)("p",null,"Modifications to accepted proposals can be done in followup PRs."),(0,r.kt)("h2",{id:"implementing-a-proposal"},"Implementing a proposal"),(0,r.kt)("p",null,"The author of a proposal is not obligated to implement it. Of course, the proposal author (like any other community member) is welcome to post an implementation for review."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"inspirations"},"Inspirations"),(0,r.kt)("p",null,"This has been derived from other community driven projects. But in the end the changes to this process can be proposed to the team and this process is open to being updated."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/discussions-and-proposals"},"React Native Proposals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/rfcs"},"Rust RFC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/dev/peps"},"Python PEPS"))))}d.isMDXComponent=!0}}]);