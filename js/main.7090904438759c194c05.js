(self.webpackChunkreact_model=self.webpackChunkreact_model||[]).push([[179],{6948:(e,s,r)=>{"use strict";var n=r(745),t=r(5998),i=r(9342),a=(r(2564),r(6974)),c=r(5893);const l=function(){return(0,c.jsxs)("footer",{className:"footer",children:[(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"footer-link",children:(0,c.jsx)(i.OL,{to:"/",children:"Accueil 1"})}),(0,c.jsx)("li",{className:"footer-link",children:(0,c.jsx)(i.OL,{to:"/services",children:"Services"})}),(0,c.jsx)("li",{className:"footer-link",children:(0,c.jsx)(i.OL,{to:"/contact",children:" Contact"})}),(0,c.jsx)("li",{className:"footer-link",children:(0,c.jsx)(i.OL,{to:"/mentions-legal",children:"Mentions-légal"})})]}),(0,c.jsxs)("div",{className:"footer-author",children:["Site réaliser par",(0,c.jsx)("a",{href:"https://github.com/MaximeTheneau",target:"blank",className:"footer-author_signature",children:(0,c.jsx)("i",{className:"theneau-maxime"})})]})]})};var o=r(7294),u="TOGGLE_NAVBAR";function d(){return{type:u}}var m="TOGGLE_NAVBAR_SUBTITLE";function p(){return{type:m}}var h="IMG_STICKY";var j="IMG_STICKY_FALSE";function x(){return{type:j}}const v=r.p+"561f0372f61401a7b26c.svg?url",g=r.p+"images/9b6a76e4e773ef341b8a.webp";const b=function(){var e=(0,t.I0)(),s=(0,t.v9)((function(e){return e.header.toogleNavbar})),n=(0,t.v9)((function(e){return e.header.imgSticky})),a=(0,t.v9)((function(e){return e.header.toogleNavbarSubtitle})),l=function(){e(p()),e(d())};return(0,o.useEffect)((function(){console.log(window.scrollY)}),[]),(0,c.jsxs)(c.Fragment,{children:[n?(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:r(905),type:"image/webp"}),(0,c.jsx)("img",{src:r(5936),alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous"})]}):"",(0,c.jsx)("header",{className:"header",children:s?(0,c.jsxs)("div",{className:"header-navbar-toggle",children:[(0,c.jsx)("div",{className:"header-logo",children:(0,c.jsx)(i.OL,{to:"/",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:g,type:"image/webp"}),(0,c.jsx)("img",{src:v,alt:"Logo Une Taupe Chez Vous",title:"Logo Une taupe chez vous"})]})})}),(0,c.jsx)("div",{className:"header-button_close",children:(0,c.jsx)("button",{className:"",onClick:function(){e(d()),e(x())},children:(0,c.jsx)("i",{className:"icon-navbar"})})})]}):(0,c.jsxs)("nav",{className:"navbar",children:[(0,c.jsxs)("div",{className:"header-navbar-toggle",children:[(0,c.jsx)("div",{className:"header-logo",children:(0,c.jsx)(i.OL,{to:"/",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:g,type:"image/webp"}),(0,c.jsx)("img",{src:v,alt:"Logo Une Taupe Chez Vous",title:"Logo Une taupe chez vous"})]})})}),(0,c.jsx)("div",{className:"header-button_close",children:(0,c.jsx)("button",{onClick:function(){return e(d())},children:(0,c.jsx)("i",{className:"icon-x"})})})]}),(0,c.jsxs)("ul",{className:"header-navbar",children:[(0,c.jsx)(i.OL,{to:"/",onClick:function(){return e(d())},children:(0,c.jsx)("li",{className:"header-navbar-item",children:"Accueil"})}),(0,c.jsxs)("li",{children:[(0,c.jsxs)("div",{className:"header-navbar-item_subtitle",onClick:function(){return e(p())},children:["Services",a?(0,c.jsx)("i",{className:"icon-angle"}):(0,c.jsx)("i",{className:"icon-angle rotate-90"})]}),a?"":(0,c.jsxs)("ul",{className:"header-navbar-subitem",children:[(0,c.jsx)(i.OL,{to:"/services/nuisibles/taupe",onClick:l,children:(0,c.jsx)("li",{className:"header-navbar-subtitle-item",children:"Taupe"})}),(0,c.jsx)(i.OL,{to:"/services/nuisibles/fouine",onClick:l,children:(0,c.jsx)("li",{className:"header-navbar-subtitle-item",children:"Fouine"})}),(0,c.jsx)(i.OL,{to:"/services/nuisibles/Ragondin",onClick:l,children:(0,c.jsx)("li",{className:"header-navbar-subtitle-item",children:"Ragondin"})})]})]}),(0,c.jsx)(i.OL,{to:"/contact",onClick:function(){return e(d())},children:(0,c.jsx)("li",{className:"header-navbar-item",children:"Contact"})})]})]})})]})};r(8309);var f=r(5365),N=r(9757),y="TOGGLE_MODAL";function O(){return{type:y}}var w="TOGGLE_MODAL_ERROR";function _(){return{type:w}}var S="NUMBER_IMG";var C="NUMBER_IMG2";const E=function(){var e=(0,t.I0)(),s=(0,t.v9)((function(e){return e.contact.name})),r=(0,t.v9)((function(e){return e.contact.email})),n=(0,t.v9)((function(e){return e.contact.message}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:N,alt:"illustration taupes Vacances"}),(0,c.jsx)("h1",{children:"Contact"}),(0,c.jsxs)("form",{className:"contact-form",onSubmit:function(s){s.preventDefault(),console.log(s.target),f.ZP.sendForm("service_j890q4l","template_xd1r1j3",s.target,"1O8Ob4TeUeGNU_xaz").then((function(s){e(O())}),(function(e){console.log(e.text)}))},children:[(0,c.jsxs)("label",{htmlFor:"Name",children:[(0,c.jsx)("div",{className:"contact-form_title",children:"Nom / Prénom*"}),(0,c.jsx)("input",{type:"text",className:"contact-form-input",name:"user_name",value:s,onChange:function(s){return e(contactForm(s.target.value,"name"))},required:!0})]}),(0,c.jsxs)("label",{htmlFor:"email",children:[(0,c.jsx)("div",{className:"contact-form_title",children:"Email*"}),(0,c.jsx)("input",{name:"user_email",type:"email",value:r,className:"contact-form-input",onChange:function(s){return e(contactForm(s.target.value,"email"))},required:!0})]}),(0,c.jsxs)("label",{htmlFor:"message",children:[(0,c.jsx)("div",{className:"contact-form_title",children:"Message*"}),(0,c.jsx)("textarea",{name:"message",className:"contact-form-input",value:n,onChange:function(s){return e(contactForm(s.target.value,"message"))},required:!0})]}),(0,c.jsx)("div",{className:"contact-form_button",children:(0,c.jsxs)("button",{type:"submit",children:[(0,c.jsx)("i",{className:"icon-submit",value:"send"}),"Envoyer"]})})]})]})},k=r.p+"741d964741c20d2ebddf.svg?url",I=r.p+"images/d86abf8fdcff7da8a124.webp",U=r.p+"55f5a96e67849507baf9.svg?url",T=r.p+"images/72e9da6b46f407993583.webp",M=r.p+"e589d7ceb30f1915e7af.svg?url",P=r.p+"images/c36812ca5180d47c985b.webp",z=r.p+"4cbbe08207b514757d34.svg?url",L=r.p+"images/31f17a05e0605ac4a7db.webp",q=r.p+"9a375ab7b565d9a27c20.svg?url",A=r.p+"images/9ac188b89564dcdebf31.webp",F=r.p+"99e5680791b673631725.svg?url",D=r.p+"images/ad41e6c421b437f14b1a.webp",R=r.p+"dccbbc055c00f69b1ca6.svg?url",G=r.p+"images/c94c599d31e974d59f08.webp";var V=r(1372);const B=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(V.ZP,{children:[(0,c.jsx)("title",{children:"Une Taupe Chez Vous"}),(0,c.jsx)("meta",{name:"description",content:"Une Taupe Chez Vous Artisant Maître Taupiers depuis presque 30 ans. Intervient en yvelynes (78), pour les nuisibles comme les taupes, ragondin, fouines, etc..."})]}),(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:g,type:"image/webp"}),(0,c.jsx)("img",{src:v,alt:"Logo Une Taupe Chez Vous",className:"home-logo",title:"Logo Une taupe chez vous"})]}),(0,c.jsx)("h1",{className:"home-title",children:"Une Taupe Chez vous"}),(0,c.jsx)("h2",{className:"home-subtitle",children:"Artisans Maitre Taupiers piégeurs"}),(0,c.jsxs)("p",{className:"home-paragrah",children:["nous mettons à vote service plus de 25 ans d'expérience dans la destruction des ",(0,c.jsx)(i.rU,{to:"/services/nuisibles/taupe",children:"taupes"}),",",(0,c.jsx)(i.rU,{to:"/services/nuisibles/fouines",children:" fouines"}),",",(0,c.jsx)(i.rU,{to:"/services/nuisibles/ragondin",children:" ragondins"})," et autres nuisibles qui envahissent votre jardin."]}),(0,c.jsxs)("div",{className:"home-cards",children:[(0,c.jsxs)("div",{className:"home-card",children:[(0,c.jsx)("div",{className:"home-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:I,type:"image/webp"}),(0,c.jsx)("img",{src:k,alt:"Illustration Environment",title:"illustration Environment"})]})}),(0,c.jsx)("div",{className:"home-card_description",children:(0,c.jsx)("h3",{children:"Sans danger pour l'environnement"})})]}),(0,c.jsxs)("div",{className:"home-card",children:[(0,c.jsx)("div",{className:"home-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:T,type:"image/webp"}),(0,c.jsx)("img",{src:U,alt:"illustration certified",title:"illustration certified"})]})}),(0,c.jsx)("div",{className:"home-card_description",children:(0,c.jsx)("h3",{children:"Piégeur Agréé"})})]}),(0,c.jsxs)("div",{className:"home-card",children:[(0,c.jsx)("div",{className:"home-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:P,type:"image/webp"}),(0,c.jsx)("img",{src:M,alt:"illustration trap",title:"illustraion trap"})]})}),(0,c.jsx)("div",{className:"home-card_description",children:(0,c.jsx)("h3",{children:"Piéges sans danger pour les animaux de compagnie"})})]})]}),(0,c.jsxs)("div",{className:"home-list-services",children:[(0,c.jsx)("h2",{className:"home-list-services_title",children:"Nos services"}),(0,c.jsxs)("div",{className:"home-cards",children:[(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/taupe",children:[(0,c.jsx)("div",{className:"home-list-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:A,type:"image/webp"}),(0,c.jsx)("img",{src:q,alt:"illustration de taupe",title:"illustration de taupe"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Taupes"})]})}),(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/fouine",children:[(0,c.jsx)("div",{className:"home-list-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:D,type:"image/webp"}),(0,c.jsx)("img",{src:F,alt:"illustration fouine"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Fouines"})]})}),(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/ragondin",children:[(0,c.jsx)("div",{className:"home-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:G,type:"image/webp"}),(0,c.jsx)("img",{src:R,alt:"illustration ragondin"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Ragondins"})]})})]})]}),(0,c.jsx)("h3",{children:"Interventions en Yvelynes (78)"}),(0,c.jsxs)("div",{className:"home-map",children:[(0,c.jsxs)("div",{className:"home-map_description",children:[(0,c.jsxs)("div",{children:["Pour tous demande de devis ou demande de renseignement",(0,c.jsx)(i.rU,{to:"/contact",children:" contactez-nous"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("i",{className:"icon-phone"}),(0,c.jsx)("a",{href:"tel:+33232264958",children:"02 32 26 49 58"})]})]}),(0,c.jsx)("div",{className:"home-map_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:L,type:"image/webp"}),(0,c.jsx)("img",{src:z,alt:"illustration dessins carte ile de france",title:"illustration dessins carte ile de france"})]})})]})]})};const W=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Taupe"}),(0,c.jsxs)("div",{className:"service-card",children:[(0,c.jsx)("div",{className:"service-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:A,type:"image/webp"}),(0,c.jsx)("img",{imagesizes:"(max-width: 100%) 100%",src:q,alt:"illustration de taupe",title:"illustration de taupe"})]})}),(0,c.jsxs)("div",{className:"service-card_content",children:[(0,c.jsxs)("p",{children:["Les ",(0,c.jsx)("em",{children:"taupes"})," jouent un rôle dans l'écosystème.",(0,c.jsx)("br",{}),"L'objectif est de limiter la prolifération des taupes, dans votre jardin, terrain de foot, piste d'aérodrome, golf, etc..."]}),(0,c.jsx)("p",{children:"Nous utilisons des méthodes naturelles de piégeage, sans produits chimiques ou nocifs pour l'environnement."}),(0,c.jsx)("h2",{children:"Comment se débarrasser des taupes dans sont jardins?"}),(0,c.jsxs)("p",{children:["Pour se debarrasser des taupes, il faut d'abord comprendre le comportement de la taupe.",(0,c.jsx)("br",{}),"La taupe est un animal nocturne, elle sort la nuit pour creuser des galeries et des terriers.",(0,c.jsx)("br",{}),"Une Taupe chez vous vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre les taupes avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement."]})]})]})]})};const K=function(){return(0,c.jsxs)("div",{className:"mentions",children:[(0,c.jsxs)(V.NR,{children:[(0,c.jsx)("title",{children:"Mention légal"}),(0,c.jsx)("meta",{name:"description",content:"Une Taupe Chez Vous, 71 rue Marie Curie, 27780 Garrennes Sur Eure, 0232264958, N° SIRET 39338032400029"})]}),(0,c.jsx)("h1",{children:"Mentions-légal"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{className:"list-mentions",children:[(0,c.jsx)("i",{className:"icon-location"}),(0,c.jsxs)("p",{children:["Une Taupe Chez Vous,",(0,c.jsx)("br",{}),"71 rue Marie Curie,",(0,c.jsx)("br",{}),"27780 Garenne Sur Eure"]})]}),(0,c.jsxs)("li",{className:"list-mentions",children:[(0,c.jsx)("i",{className:"icon-phone"}),(0,c.jsx)("p",{children:"+33 2 32 26 49 58"})]}),(0,c.jsx)("li",{className:"list-mentions",children:(0,c.jsx)("p",{children:"N° SIRET : 39338032400029"})})]}),(0,c.jsx)("h2",{children:"Cookies"}),(0,c.jsx)("p",{children:"Cookies strictement nécessaires à l’utilisation du service demandé."}),(0,c.jsx)("p",{children:"Ils permettent l’utilisation des principales fonctionnalités du site, comme le cas échéant l’accès à votre compte personnel, ou encore de mémoriser les préférences d'affichage de votre terminal (langue, paramètres d'affichage) et d'en tenir compte lors de vos visites, selon la charte graphique et les logiciels de visualisation ou de lecture de votre terminal. Ils peuvent inclure des cookies de réseaux sociaux lorsque vous interagissez avec ces derniers. Ils nous permettent aussi de lier entre elles les différentes pages consultées pour vous assurer une navigation fluide."}),(0,c.jsx)("p",{children:"Vous pouvez désactiver complètement les cookies dans votre navigateur. Dans ce cas notre site ne fonctionnera plus normalement mais vous pourrez quand même effectuer des actions basiques."}),(0,c.jsxs)("ol",{children:[(0,c.jsx)("li",{className:"mentions-cookie",children:(0,c.jsxs)("p",{children:["Si vous utilisez le navigateur Internet Explorer",(0,c.jsx)("br",{}),"Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur « Internet ». Sous l’onglet Confidentialité déplacez le curseur vers le haut pour bloquer tous les cookies ou vers le bas pour autoriser tous les cookies, puis cliquez sur OK."]})}),(0,c.jsx)("li",{className:"mentions-cookie",children:(0,c.jsxs)("p",{children:["Si vous utilisez le navigateur Firefox",(0,c.jsx)("br",{}),"Allez dans le menu « Outils » du navigateur puis sélectionnez le menu « Options » Cliquez sur l’onglet « vie privée », décochez la case « Accepter les cookies » puis cliquez sur OK."]})})]})]})};const Y=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(V.NR,{children:[(0,c.jsx)("title",{children:"Services "}),(0,c.jsx)("meta",{name:"description",content:"Une Taupe Chez Vous, intervient pour vous aider à lutter contre les nuisibles comme les taupes, fouines et ragondins en yvelines (78), essones(91), Paris (75)."})]}),(0,c.jsx)("h1",{children:"Services"}),(0,c.jsxs)("div",{className:"home-cards",children:[(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/taupe",children:[(0,c.jsx)("div",{className:"home-list-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:A,type:"image/webp"}),(0,c.jsx)("img",{src:q,alt:"illustration de taupe",title:"illustration de taupe"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Taupes"})]})}),(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/fouine",children:[(0,c.jsx)("div",{className:"home-list-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:D,type:"image/webp"}),(0,c.jsx)("img",{src:F,alt:"illustration fouine"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Fouines"})]})}),(0,c.jsx)("div",{className:"home-card-service",children:(0,c.jsxs)(i.rU,{to:"/services/nuisibles/ragondin",children:[(0,c.jsx)("div",{className:"home-services_list_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:G,type:"image/webp"}),(0,c.jsx)("img",{src:R,alt:"illustration ragondin"})]})}),(0,c.jsx)("h3",{className:"home-card-service_title",children:"Ragondins"})]})})]})]})};const Z=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Ragondin "}),(0,c.jsxs)("div",{className:"service-card",children:[(0,c.jsx)("div",{className:"service-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:G,type:"image/webp"}),(0,c.jsx)("img",{src:R,alt:"illustration ragondin"})]})}),(0,c.jsxs)("div",{className:"service-card_content",children:[(0,c.jsxs)("p",{children:["Les ragondins sont reconnaissable à ses quatres grandes incisives rouge-orange, d'un taille de 40 à 60 cm, il peut peser jusqu'à 9 kilos.",(0,c.jsx)("br",{}),"Le ragondin privilie les milieux aquatiques, il creuse des terriers le long des berges, ce qui participent à la dégradation et des rives."]}),(0,c.jsx)("h2",{children:"Inscrit sur la liste des animaux nuisibles"}),(0,c.jsx)("p",{children:"Classé comme animal nuisible, le ragondin est un prédateur de la faune aquatique, il est responsable de la destruction des berges et des rives, il est également responsable de la destruction des cultures."}),(0,c.jsx)("h2",{children:"Comment lutter contre le ragondin ?"}),(0,c.jsxs)("p",{children:["Une Taupes chez vous vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre le ragondin avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement.",(0,c.jsx)("br",{}),"Nous vous proposons également des solutions de prévention pour éviter que les ragondins ne reviennent sur votre terrain."]})]})]})]})};const X=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Fouine"}),(0,c.jsxs)("div",{className:"service-card",children:[(0,c.jsx)("div",{className:"service-card_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:D,type:"image/svg"}),(0,c.jsx)("img",{src:F,alt:"illustration fouine"})]})}),(0,c.jsxs)("div",{className:"service-card_content",children:[(0,c.jsxs)("p",{children:["La fouine est un animal de taille moyenne, elle mesure entre 40 et 60 cm.",(0,c.jsx)("br",{}),"Elle est reconnaissable à sa tache blanche couvrant la gorge et le haut des pattes.",(0,c.jsx)("br",{})]}),(0,c.jsx)("h2",{children:"Utile ou nuisible ?"}),(0,c.jsx)("p",{children:"La fouine est un animal utile, elle est un prédateur chassant les de nombreux rongeurs."}),(0,c.jsx)("h2",{children:"Comment se débarrasser d'une fouine dans le grenier ?"}),(0,c.jsxs)("p",{children:["Une Taupes chez vous vous propose des solutions naturelles et sans danger pour l'environnement pour lutter contre la fouine avec des pièges sans danger pour vos animaux de compagnie, sans produits chimiques chimiques ou nocifs pour l'environnement.",(0,c.jsx)("br",{}),"Nous vous proposons également des solutions de prévention pour éviter que les fouines ne reviennent sur votre grenier."]})]})]})]})},H=r.p+"ec3c8489f9ed44b0f7b2.svg?url",$=r.p+"images/c152a258298094fa1c6e.webp";const J=function(){var e=(0,t.I0)(),s=(0,a.s0)();return(0,o.useEffect)((function(){setTimeout((function(){console.log("yep"),s("/"),e(O())}),7e3)}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"modal-blur"}),(0,c.jsxs)("div",{className:"modal",children:[(0,c.jsx)("div",{className:"modal_img",children:(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:$,type:"image/webp"}),(0,c.jsx)("img",{src:H,alt:"Illustration cards"})]})}),(0,c.jsxs)("div",{className:"modal_description",children:[(0,c.jsx)("h2",{children:"Bien reçu"}),(0,c.jsx)("p",{children:"On vous répond aux plus vite "}),(0,c.jsx)(i.rU,{to:"/",children:(0,c.jsx)("button",{className:"modal_button",onClick:function(){return e(O())},children:"Retour à l'accueil"})})]})]})]})};r(7042),r(1249);var Q=r(5936),ee=r(905);const se=function(){function e(e){return Math.floor(3*Math.random())+1}return console.log(e()),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("picture",{className:"modal-error-animation_img",style:{left:"".concat(Math.floor(110*Math.random()),"%"),top:"".concat(Math.floor(110*Math.random()),"%")},children:[(0,c.jsx)("source",{srcSet:r(5888)("./illustration-taupe-".concat(e(),".webp")),type:"image/webp"}),(0,c.jsx)("img",{width:"1000",height:"1000",srcSet:r(6306)("./illustration-taupe-".concat(e(),".svg")),alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous"})]})})};const re=function(){var e=(0,t.I0)(),s=(0,a.s0)(),r=(0,t.v9)((function(e){return e.modalBox.toggleModalError})),n=(0,t.v9)((function(e){return e.modalBox.numberImg})).slice(0,22);return console.log(n),(0,o.useEffect)((function(){setInterval((function(){var s;e({type:S,numberImg:s})}),1e3)}),[]),(0,o.useEffect)((function(){setTimeout((function(){s("/"),e(_())}),15e3)}),[]),(0,c.jsx)(c.Fragment,{children:r?"":(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(B,{}),(0,c.jsx)("div",{className:"modal-blur"}),(0,c.jsx)("div",{className:"modal-error-animation",children:n.map((function(e){return(0,c.jsx)(se,{},e)}))}),(0,c.jsxs)("div",{className:"modal",children:[(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{srcSet:ee,type:"image/webp"}),(0,c.jsx)("img",{width:"1000",height:"1000",src:Q,alt:"Illustration d'une taupe dans un jardin avec une tondeuse",title:"illustration Une taupe chez vous"})]}),(0,c.jsx)("h1",{className:"modal-error_title",children:"404"}),(0,c.jsx)("p",{children:"Oups"}),(0,c.jsx)(i.rU,{to:"/",children:(0,c.jsx)("button",{className:"modal_button",onClick:function(){return e(_())},children:"Retour à l'accueil"})})]})]})})};const ne=function(){var e=(0,t.I0)(),s=(0,t.v9)((function(e){return e.modalBox.toggleModal})),r=(0,a.TH)();return(0,o.useEffect)((function(){var s="/"===r.pathname;e(s?{type:h}:x()),setTimeout((function(){e(x())}),3e3)}),[r]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(b,{}),(0,c.jsxs)("main",{className:"main",children:[(0,c.jsxs)(a.Z5,{children:[(0,c.jsx)(a.AW,{path:"/",element:(0,c.jsx)(B,{})}),(0,c.jsx)(a.AW,{path:"/services/",element:(0,c.jsx)(Y,{})}),(0,c.jsx)(a.AW,{path:"/services/nuisibles/taupe",element:(0,c.jsx)(W,{})}),(0,c.jsx)(a.AW,{path:"/services/nuisibles/ragondin",element:(0,c.jsx)(Z,{})}),(0,c.jsx)(a.AW,{path:"/services/nuisibles/fouine",element:(0,c.jsx)(X,{})}),(0,c.jsx)(a.AW,{path:"/contact",element:(0,c.jsx)(E,{})}),(0,c.jsx)(a.AW,{path:"/mentions-legal",element:(0,c.jsx)(K,{})}),(0,c.jsx)(a.AW,{path:"*",element:(0,c.jsx)(re,{})})]}),s?(0,c.jsx)(J,{}):""]}),(0,c.jsx)(l,{})]})};var te=r(5857);r(9070),r(7941),r(2526),r(7327),r(1539),r(5003),r(9554),r(4747),r(9337),r(3321);function ie(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?ie(Object(r),!0).forEach((function(s){ce(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function ce(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var le={toogleNavbar:!0,toogleNavbarSubtitle:!0,imgSticky:null};const oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s.type){case u:return ae(ae({},e),{},{toogleNavbar:!e.toogleNavbar});case h:return ae(ae({},e),{},{imgSticky:!e.imgSticky});case h:return ae(ae({},e),{},{imgSticky:e.imgSticky=!0});case j:return ae(ae({},e),{},{imgSticky:e.imgSticky=!1});case m:return ae(ae({},e),{},{toogleNavbarSubtitle:!e.toogleNavbarSubtitle});default:return e}};var ue="CONTACT_FORM";function de(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?de(Object(r),!0).forEach((function(s){pe(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function pe(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var he={};const je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.type===ue?me(me({},e),{},pe({},s.field,s.value)):e};r(2222),r(9753),r(1817),r(2165),r(6992),r(8783),r(3948),r(1038),r(4916);function xe(e){return function(e){if(Array.isArray(e))return ve(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"==typeof e)return ve(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ve(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=e[r];return n}function ge(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?ge(Object(r),!0).forEach((function(s){fe(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function fe(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}var Ne={toggleModal:!1,toggleModalError:!1,numberImg:[],numberImg2:null};const ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s.type){case y:return be(be({},e),{},{toggleModal:!e.toggleModal});case w:return be(be({},e),{},{toggleModalError:!e.toggleModalError});case S:return be(be({},e),{},{numberImg:[].concat(xe(e.numberImg),[e.numberImg.length+1])});case C:return be(be({},e),{},{numberImg2:e.numberImg2.concat(s.numberImg2)});default:return e}};const Oe=(0,te.UY)({header:oe,contact:je,modalBox:ye});var we=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.qC)((0,te.md)());const _e=(0,te.MT)(Oe,we);var Se=(0,c.jsx)(t.zt,{store:_e,children:(0,c.jsx)(i.VK,{children:(0,c.jsx)(ne,{})})});(0,n.s)(document.getElementById("root")).render(Se)},6273:()=>{},6306:(e,s,r)=>{var n={"./illustration-taupe-1.svg":3240,"./illustration-taupe-2.svg":8045,"./illustration-taupe-3.svg":4099,"./illustration-taupe-vacances.svg":9757};function t(e){var s=i(e);return r(s)}function i(e){if(!r.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=i,e.exports=t,t.id=6306},5888:(e,s,r)=>{var n={"./illustration-taupe-1.webp":1307,"./illustration-taupe-2.webp":5892,"./illustration-taupe-3.webp":9576,"./illustration-taupe-vacances.webp":9788};function t(e){var s=i(e);return r(s)}function i(e){if(!r.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=i,e.exports=t,t.id=5888},905:(e,s,r)=>{"use strict";e.exports=r.p+"images/ddc95d3624afead5581c.webp"},1307:(e,s,r)=>{"use strict";e.exports=r.p+"images/d9d1d168055dd717332b.webp"},5892:(e,s,r)=>{"use strict";e.exports=r.p+"images/41536f928be478358ac5.webp"},9576:(e,s,r)=>{"use strict";e.exports=r.p+"images/744db1551d42c56bec3f.webp"},9788:(e,s,r)=>{"use strict";e.exports=r.p+"images/2c4f0b2f8f9483aca51e.webp"},5936:(e,s,r)=>{"use strict";e.exports=r.p+"1bad9735619d6c3e1718.svg?url"},3240:(e,s,r)=>{"use strict";e.exports=r.p+"3be54299d17c072cb82e.svg?url"},8045:(e,s,r)=>{"use strict";e.exports=r.p+"7967695eb3a140cbd3b8.svg?url"},4099:(e,s,r)=>{"use strict";e.exports=r.p+"f61b59dd45c8704b993a.svg?url"},9757:(e,s,r)=>{"use strict";e.exports=r.p+"a5b0a25c7b9f7484c6b7.svg?url"}},e=>{var s=s=>e(e.s=s);e.O(0,[854],(()=>(s(6273),s(6948))));e.O()}]);