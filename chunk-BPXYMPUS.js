import{a as j}from"./chunk-YTLMOREY.js";import"./chunk-Z4OAZWIP.js";import"./chunk-6PLWQI5B.js";import{a as z}from"./chunk-VELRE6LU.js";import"./chunk-MQSGHXCI.js";import{b as L}from"./chunk-73F7KRZS.js";import"./chunk-CY4VHNCR.js";import{a as N}from"./chunk-Q5RFNLUE.js";import"./chunk-RZV4BE5Z.js";import"./chunk-L5OFKFQO.js";import"./chunk-RHSYMG56.js";import{X as E}from"./chunk-673N66RW.js";import{Fb as I,Gb as P,Hb as O,Oa as c,Rb as A,Sb as g,Tb as m,Ub as l,V as b,X as M,Z as p,ab as d,ac as T,bb as x,cb as _,nc as F,ob as D,pb as w,qb as S,rb as h,sb as C,tb as k,ub as n,vb as i,wb as o}from"./chunk-YRYBCETR.js";import"./chunk-IONH7NRB.js";var U=["*"];var V=new M("MAT_CARD_CONFIG"),R=(()=>{class t{appearance;constructor(){let e=p(V,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=d({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,s){a&2&&A("mat-mdc-card-outlined",s.appearance==="outlined")("mdc-card--outlined",s.appearance==="outlined")("mat-mdc-card-filled",s.appearance==="filled")("mdc-card--filled",s.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:U,decls:1,vars:0,template:function(a,s){a&1&&(P(),O(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var B=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=_({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var H=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=x({type:t});static \u0275inj=b({imports:[E]})}return t})();var u=class t{statistic=F.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:13,vars:10,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"],[1,"statistic-change"],[1,"change-value"],[1,"change-label"]],template:function(e,a){e&1&&(n(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),o(3,"i",2),n(4,"span",3),m(5),i()(),n(6,"div",4),m(7),i(),n(8,"div",5)(9,"span",6),m(10),i(),n(11,"span",7),m(12),i()()()()),e&2&&(g(a.statistic().type),c(3),g(a.statistic().type!=="total"?"dot "+a.statistic().type:"show_chart"),c(2),l(a.statistic().title),c(2),l(a.statistic().value),c(),g(a.statistic().changeType),c(2),l(+a.statistic().change>0?a.statistic().change:""),c(2),l(a.statistic().changeLabel))},dependencies:[H,R,B],styles:['.statistic-card[_ngcontent-%COMP%]{border-radius:var(--radius-lg);transition:transform .2s ease,box-shadow .2s ease;background-color:var(--color-primary-contrast);border:1px solid var(--color-light-grey);padding:0 1rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:1rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.8125rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change.positive[_ngcontent-%COMP%]{color:var(--color-success)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.negative[_ngcontent-%COMP%]{color:var(--color-danger)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.neutral[_ngcontent-%COMP%]{color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]{border-top-width:.3rem}.statistic-card.overdue[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-danger)}.statistic-card.in-progress[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-info)}.statistic-card.completed[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-success)}.show_chart[_ngcontent-%COMP%]:before{font-family:Material Icons;content:"show_chart";font-feature-settings:"liga";display:inline-block;vertical-align:middle;color:var(--color-neutral)}']})};var $=()=>[1,2,3,4],q=(t,r)=>r.type;function J(t,r){t&1&&(n(0,"div",1),o(1,"div",2)(2,"div",3)(3,"div",4),i())}function K(t,r){t&1&&(n(0,"div",0),h(1,J,4,0,"div",1,S),i()),t&2&&(c(),C(T(0,$)))}function Q(t,r){if(t&1&&o(0,"app-statistic-card",5),t&2){let e=r.$implicit;k("statistic",e)}}function W(t,r){if(t&1&&(n(0,"div",0),h(1,Q,1,1,"app-statistic-card",5,q),i()),t&2){let e=I();c(),C(e.statisticsService.statistics())}}var f=class t{statisticsService=p(L);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-statistics-list"]],decls:2,vars:1,consts:[[1,"statistics-grid"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(e,a){e&1&&D(0,K,3,1,"div",0)(1,W,3,0,"div",0),e&2&&w(a.statisticsService.isLoading()?0:1)},dependencies:[u],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:var(--radius-lg);padding:1rem 2rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:.6rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}"]})};var v=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-dashboard"]],decls:9,vars:0,consts:[[1,"dashboard"],[1,"dashboard-section"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"section",1),o(2,"app-statistics-list"),i(),n(3,"section",1),o(4,"app-task-list"),i(),n(5,"section",1),o(6,"app-analytics"),i(),n(7,"section",1),o(8,"app-users"),i()())},dependencies:[f,j,z,N],styles:[".dashboard-section[_ngcontent-%COMP%]{margin-bottom:2rem}"]})};var _t=[{path:"",component:v,data:{title:"Dashboard"}},{path:"tasks",loadComponent:()=>import("./chunk-VVIUHABI.js").then(t=>t.TaskListComponent),data:{title:"Tasks"}},{path:"analytics",loadComponent:()=>import("./chunk-U4AYQF7C.js").then(t=>t.AnalyticsComponent),data:{title:"Analytics"}},{path:"users",loadComponent:()=>import("./chunk-AJACNIY3.js").then(t=>t.UsersComponent),data:{title:"Users"}}];export{_t as DASHBOARD_ROUTES};
