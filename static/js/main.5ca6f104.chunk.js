(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{169:function(e,t){},179:function(e,t){},197:function(e,t){},228:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(154),s=n.n(r),o=n(20),i=n(39),l=n(7),j=n(244),d=n(248),u=Object({NODE_ENV:"production",PUBLIC_URL:"/near-marketplace-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"mycontract.brunodev.testnet";var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:u,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:u,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},x=n(60),O=n(70),p=b("testnet");function h(){return(h=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.connect)(Object.assign({deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}},p));case 2:t=e.sent,window.walletConnection=new x.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new x.Contract(window.walletConnection.account(),p.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){window.walletConnection.requestSignIn(p.contractName)}function w(){window.walletConnection.signOut(),window.location.reload()}var v=n(246),y=n(241),N=n(251),C=n(1),k=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(v.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(C.jsxs)(C.Fragment,{children:[n," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(C.jsx)(y.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(v.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(v.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(v.a.Divider,{}),Object(C.jsxs)(v.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=n(62),P=(n(227),function(){return Object(C.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),I=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},F=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T={text:""};I.defaultProps=T,F.defaultProps=T;var E=n(2),U=n(155),A=n(245),L=n(247),R=n(157),_=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1],p=Object(c.useState)(""),h=Object(l.a)(p,2),m=h[0],f=h[1],g=Object(c.useState)(0),w=Object(l.a)(g,2),v=w[0],y=w[1],N=Object(c.useState)(!1),k=Object(l.a)(N,2),S=k[0],P=k[1],I=function(){return P(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(U.a,{onClick:function(){return P(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(C.jsx)("i",{class:"bi bi-plus"})}),Object(C.jsxs)(A.a,{show:S,onHide:I,centered:!0,children:[Object(C.jsx)(A.a.Header,{closeButton:!0,children:Object(C.jsx)(A.a.Title,{children:"New Product"})}),Object(C.jsx)(L.a,{children:Object(C.jsxs)(A.a.Body,{children:[Object(C.jsx)(R.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(C.jsx)(L.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(C.jsx)(R.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(L.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(C.jsx)(R.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(L.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(C.jsx)(R.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(C.jsx)(L.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(C.jsx)(R.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(C.jsx)(L.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(C.jsxs)(A.a.Footer,{children:[Object(C.jsx)(U.a,{variant:"outline-secondary",onClick:I,children:"Close"}),Object(C.jsx)(U.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v),onClick:function(){t({name:r,image:j,description:x,location:m,price:v}),I()},children:"Save product"})]})]})]})},B=n(156),D=n(250),H=n(242),W=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(C.jsx)(B.a,{children:Object(C.jsxs)(D.a,{className:" h-100",children:[Object(C.jsx)(D.a.Header,{children:Object(C.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(C.jsxs)(H.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(C.jsxs)(D.a.Body,{className:"d-flex  flex-column text-center",children:[Object(C.jsx)(D.a.Title,{children:r}),Object(C.jsx)(D.a.Text,{className:"flex-grow-1 ",children:s}),Object(C.jsx)(D.a.Text,{className:"text-secondary",children:Object(C.jsx)("span",{children:i})}),Object(C.jsxs)(U.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",x.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},M=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)(y.a,{animation:"border",role:"status",className:"opacity-25",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},K=n(243),z=n(249),J=1e14;function q(e){return V.apply(this,arguments)}function V(){return(V=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},J,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],d=s[1],u=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),b=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(n=t,n.id=Object(z.a)(),n.price=Object(O.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){u()})),Object(S.b)(Object(C.jsx)(I,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(S.b)(Object(C.jsx)(F,{text:"Failed to create a product."}))}finally{d(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q({id:t,price:n}).then((function(e){return u()}));case 3:Object(S.b)(Object(C.jsx)(I,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(S.b)(Object(C.jsx)(F,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[u]),Object(C.jsx)(C.Fragment,{children:j?Object(C.jsx)(M,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(C.jsx)(_,{save:b})]}),Object(C.jsx)(K.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(C.jsx)(W,{product:Object(E.a)({},e),buy:x})}))})]})})},Q=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(C.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(C.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(C.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(C.jsx)("img",{src:c,alt:""})}),Object(C.jsx)("h1",{children:t}),Object(C.jsx)("p",{children:"Please connect your wallet to continue."}),Object(C.jsx)(U.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(C.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};Q.defaultProps={name:""};var X=Q,Y=n.p+"static/media/sandwich.2d312449.jpg";n(228);var Z=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,m();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){s()}),[s]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(P,{}),e.accountId?Object(C.jsxs)(j.a,{fluid:"md",children:[Object(C.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(C.jsx)(d.a.Item,{children:Object(C.jsx)(k,{address:e.accountId,amount:a,symbol:"NEAR",destroy:w})})}),Object(C.jsx)("main",{children:Object(C.jsx)(G,{})})]}):Object(C.jsx)(X,{name:"Street Food",login:g,coverImg:Y})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,252)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},ee=(n(234),n(231),n(232),s.a.createRoot(document.getElementById("root")));window.nearInitPromise=function(){return h.apply(this,arguments)}().then((function(){ee.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(Z,{})}))})).catch(console.error),$()}},[[233,1,2]]]);
//# sourceMappingURL=main.5ca6f104.chunk.js.map