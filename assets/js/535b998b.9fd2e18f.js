"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[1463],{87047:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var s=a(87462),l=a(63366),r=(a(67294),a(3905)),n=(a(8209),["components"]),o={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/postrelease_manual_tests.md",sidebar_position:22},i="Post-release manual tests",u={unversionedId:"developers/postrelease_manual_tests",id:"developers/postrelease_manual_tests",title:"Post-release manual tests",description:"After a release has been deployed, run these manual tests to make sure everything works as expected. Run these tests after each deployment to",source:"@site/docs/developers/postrelease_manual_tests.md",sourceDirName:"developers",slug:"/developers/postrelease_manual_tests",permalink:"/docs/developers/postrelease_manual_tests",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/postrelease_manual_tests.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/postrelease_manual_tests.md",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Creating a Release for Pyrsia",permalink:"/docs/developers/release_process"},next:{title:"Community",permalink:"/docs/community/"}},p={},c=[],d={toc:c};function m(e){var t=e.components,a=(0,l.Z)(e,n);return(0,r.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"post-release-manual-tests"},"Post-release manual tests"),(0,r.kt)("p",null,"After a release has been deployed, run these manual tests to make sure everything works as expected. Run these tests after each deployment to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nightly cluster"),(0,r.kt)("li",{parentName:"ul"},"Production cluster")),(0,r.kt)("p",null,"When the new version is deployed, run checks for all supported platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Linux"),(0,r.kt)("li",{parentName:"ul"},"MacOS"),(0,r.kt)("li",{parentName:"ul"},"Docker")),(0,r.kt)("p",null,"Run through these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Pyrsia using one of the installers following the instructions on pyrsia.io"),(0,r.kt)("li",{parentName:"ul"},"Make sure to configure the node to use ",(0,r.kt)("inlineCode",{parentName:"li"},"--bootstrap-url http://boot.nightly.pyrsia.link/status")," as the bootstrap URL"),(0,r.kt)("li",{parentName:"ul"},"Make sure to test both with and without existing data in the pyrsia folder (keypair, artifacts, blocks, log db)"),(0,r.kt)("li",{parentName:"ul"},"View your logs and check for anomalies"),(0,r.kt)("li",{parentName:"ul"},"Check to see if transparency logs can be inspected (make sure to use the installed pyrsia cli - not a local build)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pyrsia inspect-log docker --image alpine:3.16.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check to see if artifacts can be downloaded")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://0.0.0.0:7888/v2/library/alpine/manifests/3.16.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check to see if new builds can be requested.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"find an artifact version that is not in the transparency log yet"),(0,r.kt)("li",{parentName:"ul"},"configure your docker client to use pyrsia"),(0,r.kt)("li",{parentName:"ul"},"try to pull the artifact - check the logs that a build has been requested"),(0,r.kt)("li",{parentName:"ul"},"wait a while and check to see if the build was added to the transparency log"))),(0,r.kt)("li",{parentName:"ul"},"Check the release notes of the new version")))}m.isMDXComponent=!0}}]);