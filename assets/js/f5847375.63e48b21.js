"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3338],{17245:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=(a(8209),["components"]),s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/sre/kubernetes-helm.md"},p="Managing Pyrsia on Kubernetes",o={unversionedId:"sre/kubernetes-helm",id:"sre/kubernetes-helm",title:"Managing Pyrsia on Kubernetes",description:"Prerequisites",source:"@site/docs/sre/kubernetes-helm.md",sourceDirName:"sre",slug:"/sre/kubernetes-helm",permalink:"/docs/sre/kubernetes-helm",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/sre/kubernetes-helm.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/sre/kubernetes-helm.md"},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/docs/community/rfc/sample_rfc"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"GKE - Google",id:"gke---google",level:3},{value:"EKS - Amazon",id:"eks---amazon",level:3},{value:"Interacting with the clusters",id:"interacting-with-the-clusters",level:2},{value:"Using helm to deploy updates",id:"using-helm-to-deploy-updates",level:2},{value:"Other helm commands",id:"other-helm-commands",level:2},{value:"Cheatsheets",id:"cheatsheets",level:2}],d={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"managing-pyrsia-on-kubernetes"},"Managing Pyrsia on Kubernetes"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("h3",{id:"gke---google"},"GKE - Google"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install-sdk"},"Install gcloud"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set your gcloud config"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"[compute]\nzone = us-central1-c\n[container]\ncluster = pyrsia-cluster-1\n[core]\ndisable_usage_reporting = False\nproject = pyrsia-sandbox\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_kubectl"},"Install kubectl"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_plugin"},"Intall GKE Auth Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials"},"Configure Access to Cluster")," - pyrsia-nighty (has spelling mistake) or pyrsia-cluster-1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials <CLUSTER_NAME>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm")))),(0,l.kt)("h3",{id:"eks---amazon"},"EKS - Amazon"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions"},"Install aws-cli"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"Install kubectl"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/eks/update-kubeconfig.html"},"Configure Access to Cluster")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name <CLUSTER_NAME>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm")))),(0,l.kt)("h2",{id:"interacting-with-the-clusters"},"Interacting with the clusters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List current cluster connection"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl config view --minify -o jsonpath='{.clusters[].name}'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List current contexts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl config get-contexts"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Switch to another cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl config use-context <context name>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List running pods"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl get pods -n pyrsia-node"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List public ip assigned to pods"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl get svc -n pyrsia-node"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get logs for pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl logs -n pyrsia-node pyrsia-node-0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"ssh" to pod'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl exec -it -n pyrsia-node pyrsia-node-0 -- bash"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"reboot" a pod'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl delete pod -n pyrsia-node pyrsia-node-0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get image tag for a pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl describe pod -n pyrsia-node pyrsia-node-0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get ingress details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubectl describe svc -n pyrsia-node pyrsia-node-0"))))),(0,l.kt)("h2",{id:"using-helm-to-deploy-updates"},"Using helm to deploy updates"),(0,l.kt)("p",null,"The helm charts are automatically published by the Github Actions to the ",(0,l.kt)("a",{parentName:"p",href:"http://helmrepo.pyrsia.io"},"http://helmrepo.pyrsia.io")," site. ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io"},"ArtifactHub")," pulls in chart updates every half hour."),(0,l.kt)("p",null,"Details about the Chart Values and Installation steps are documented in the chart's ReadMe.  ArtifactHub renders the ReadMe on the ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/pyrsia-nightly/pyrsia-node"},"Prysia Package")," site."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the remote repo location to helm\n",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo add pyrsia-nightly http://helmrepo.pyrsia.io"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fetch the latest charts\n",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo update"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set you cluster connection\n",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config use-context <context name>"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deployment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Nightly"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade --install node1 -n pyrsia-node pyrsia-nightly/pyrsia-node --set "k8s_provider=gke" --set "p2pkeys.kms_key_id=projects/pyrsia-sandbox/locations/global/keyRings/pyrsia-keyring/cryptoKeys/pyrsia-p2p-key" --set "dnsname=nightly.pyrsia.link" --set "bootdns=nightly.pyrsia.link"  --set "replicaCount=1" --set "buildnode=http://35.193.148.20:8080" --version "0.2.0+2438"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Production"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade --install node1 -n pyrsia-node pyrsia-nightly/pyrsia-node --set "k8s_provider=gke" --set "p2pkeys.kms_key_id=projects/pyrsia-sandbox/locations/global/keyRings/pyrsia-keyring/cryptoKeys/pyrsia-p2p-key"   --set "replicaCount=1"  --set "buildnode=http://34.134.11.239:8080" --version "0.2.0+2438"\n')))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Note: Change the --version of the chart to reflect the image tag you want to deploy.  The image tag and chart version are kept in sync.")))),(0,l.kt)("p",null,"Verify the deployments using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," commands."),(0,l.kt)("h2",{id:"other-helm-commands"},"Other helm commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"List Deployments"),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("inlineCode",{parentName:"p"},"helm list"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete Deployment"),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("inlineCode",{parentName:"p"},"helm delete -n pyrsia-node node1")))),(0,l.kt)("h2",{id:"cheatsheets"},"Cheatsheets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#viewing-finding-resources"},"kubectl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://phoenixnap.com/kb/helm-commands-cheat-sheet"},"helm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/cheatsheet"},"gcloud"))))}k.isMDXComponent=!0}}]);