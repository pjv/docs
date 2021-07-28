__NUXT_JSONP__("/installation/quick-install", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{document:{slug:"quick-install",description:"",title:"Quick Install",position:2.5,category:"Installation",toc:[{id:l,depth:2,text:m}],body:{type:n,children:[{type:b,tag:d,props:{},children:[{type:a,value:"To get up and running quickly, you can follow these steps. You'll have a basic Postal installation ready to go in in less than 10 minutes."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Provision a new server running Ubuntu 16.04 LTS. This can be from any provider. We use "},{type:b,tag:o,props:{href:"https:\u002F\u002Fm.do.co\u002Fc\u002F17696597a9ed",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Digital Ocean"}]},{type:a,value:" for testing."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Login to your new server as "},{type:b,tag:f,props:{},children:[{type:a,value:n}]},{type:a,value:" and run the following command to install Postal:"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{className:[j,u]},children:[{type:a,value:"curl"}]},{type:a,value:" https:\u002F\u002Fraw.githubusercontent.com\u002Fatech\u002Fpostal\u002Fmaster\u002Fscript\u002Finstall\u002Fubuntu1604.sh "},{type:b,tag:h,props:{className:[j,"operator"]},children:[{type:a,value:"|"}]},{type:a,value:" "},{type:b,tag:h,props:{className:[j,u]},children:[{type:a,value:"sh"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:3},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Create a new user for you to login with:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"postal make-user\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:4},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Access your Postal installation in a web browser. You'll start with an SSL warning because the certificate isn't valid but you can fix that later."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You should also be able to access the SMTP server on port "},{type:b,tag:f,props:{},children:[{type:a,value:"25"}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h2",props:{id:l},children:[{type:b,tag:o,props:{href:"#next-steps",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:h,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now your installation is active, there are a few things you can look at doing next."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Change your MySQL & RabbitMQ passwords. By default they are set to "},{type:b,tag:f,props:{},children:[{type:a,value:"p0stalpassw0rd"}]},{type:a,value:" and the MySQL root password is blank."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Replace the self signed certificates in "},{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fetc\u002Fnginx\u002Fssl\u002Fpostal.cert"}]},{type:a,value:" with something proper. You can use something like CertBot to get you one for free through Let's Encrypt."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Set up your DNS appropriately, "},{type:b,tag:i,props:{to:"\u002Finstallation\u002Fdns-configuration"},children:[{type:a,value:k}]},{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Configure spam & virus checking, "},{type:b,tag:i,props:{to:"\u002Ffeatures\u002Fspam-and-virus-checking"},children:[{type:a,value:k}]},{type:a,value:" for full details"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Configure click\u002Fopen tracking, "},{type:b,tag:i,props:{to:"\u002Ffeatures\u002Fclick-and-open-tracking"},children:[{type:a,value:k}]},{type:a,value:v}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Configure Postal to "},{type:b,tag:i,props:{to:w},children:[{type:a,value:"start on boot"}]}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Finstallation",path:"\u002Fen\u002Finstallation\u002Fquick-install",extension:".md",createdAt:x,updatedAt:x,to:"\u002Finstallation\u002Fquick-install"},prev:{slug:"processes",title:"Processes",to:"\u002Finstallation\u002Fprocesses"},next:{slug:"starting-on-boot",title:"Starting on boot",to:w}}],fetch:{},mutations:[]}}("text","element","\n","p","li","code","ol","span","nuxt-link","token","see the guide","next-steps","Next steps","root","a","div","nuxt-content-highlight","pre","language-bash","line-numbers","function"," for full details.","\u002Finstallation\u002Fstarting-on-boot","2021-07-28T15:54:28.555Z")));