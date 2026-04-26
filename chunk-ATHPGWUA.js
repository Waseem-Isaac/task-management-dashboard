import{a as H}from"./chunk-JVQEJDNW.js";import{a as U}from"./chunk-D3YFFWTT.js";import"./chunk-6PLWQI5B.js";import{a as V}from"./chunk-OLQTXWXV.js";import"./chunk-MQSGHXCI.js";import"./chunk-QLG566OX.js";import{a as G}from"./chunk-WE3PQ6L7.js";import"./chunk-J76XR2K7.js";import"./chunk-L5OFKFQO.js";import"./chunk-BVUEM3HR.js";import{X as B}from"./chunk-673N66RW.js";import{Fb as T,Gb as F,Hb as L,Lc as R,Oa as c,Rb as E,Sb as j,Tb as s,U as D,Ub as m,V as _,X as w,Z as p,ab as o,ac as z,bb as S,cb as k,jc as y,n as x,nc as N,ob as I,pb as A,qb as P,rb as C,sb as b,tb as O,u as M,ub as n,vb as i,wb as d}from"./chunk-YRYBCETR.js";import"./chunk-IONH7NRB.js";var K=["*"];var Q=new w("MAT_CARD_CONFIG"),X=(()=>{class t{appearance;constructor(){let e=p(Q,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=o({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,l){a&2&&E("mat-mdc-card-outlined",l.appearance==="outlined")("mdc-card--outlined",l.appearance==="outlined")("mat-mdc-card-filled",l.appearance==="filled")("mdc-card--filled",l.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:K,decls:1,vars:0,template:function(a,l){a&1&&(F(),L(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var $=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=k({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var q=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=S({type:t});static \u0275inj=_({imports:[B]})}return t})();var u=class t{statistic=N.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:14,vars:7,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"],[1,"statistic-change"],[1,"change-value"],[1,"change-label"]],template:function(e,a){e&1&&(n(0,"mat-card",0)(1,"mat-card-content")(2,"div",1)(3,"span",2),s(4),i(),n(5,"span",3),s(6),i()(),n(7,"div",4),s(8),i(),n(9,"div",5)(10,"span",6),s(11),i(),n(12,"span",7),s(13),i()()()()),e&2&&(c(4),m(a.statistic().icon),c(2),m(a.statistic().title),c(2),m(a.statistic().value),c(),j(a.statistic().changeType),c(2),m(+a.statistic().change>0?a.statistic().change:""),c(2),m(a.statistic().changeLabel))},dependencies:[q,X,$],styles:[".statistic-card[_ngcontent-%COMP%]{border-radius:8px;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 4px 8px #0000001f;background-color:var(--color-primary-contrast);padding:1.25rem}.statistic-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.2rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:2rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.8125rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change.positive[_ngcontent-%COMP%]{color:var(--color-success)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.negative[_ngcontent-%COMP%]{color:var(--color-danger)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.neutral[_ngcontent-%COMP%]{color:var(--color-neutral)}"]})};var J={production:!0,clientUrl:"https://waseem-isaac.github.io/task-management-dashboard/",apiUrl:"https://task-management-dashboard-tawny-eta.vercel.app/"};var f=class t{_resource=R(()=>`${J.clientUrl}statistics.json`);_simulatingLoad=U(M(1e3).pipe(x(()=>!1)),{initialValue:!0});statistics=y(()=>this._resource.value()?.statistics??[]);isLoading=y(()=>this._resource.isLoading()||this._simulatingLoad());error=this._resource.error;static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};var Z=()=>[1,2,3,4],tt=(t,r)=>r.id;function et(t,r){t&1&&(n(0,"div",1),d(1,"div",2)(2,"div",3)(3,"div",4),i())}function at(t,r){t&1&&(n(0,"div",0),C(1,et,4,0,"div",1,P),i()),t&2&&(c(),b(z(0,Z)))}function nt(t,r){if(t&1&&d(0,"app-statistic-card",5),t&2){let e=r.$implicit;O("statistic",e)}}function it(t,r){if(t&1&&(n(0,"div",0),C(1,nt,1,1,"app-statistic-card",5,tt),i()),t&2){let e=T();c(),b(e.statisticsService.statistics())}}var v=class t{statisticsService=p(f);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-statistics-list"]],decls:2,vars:1,consts:[[1,"statistics-grid"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(e,a){e&1&&I(0,at,3,1,"div",0)(1,it,3,0,"div",0),e&2&&A(a.statisticsService.isLoading()?0:1)},dependencies:[u],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:8px;padding:1.75rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}"]})};var h=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-dashboard"]],decls:9,vars:0,consts:[[1,"dashboard"],[1,"dashboard-section"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"section",1),d(2,"app-statistics-list"),i(),n(3,"section",1),d(4,"app-task-list"),i(),n(5,"section",1),d(6,"app-analytics"),i(),n(7,"section",1),d(8,"app-users"),i()())},dependencies:[v,H,V,G],styles:[".dashboard-section[_ngcontent-%COMP%]{margin-bottom:2rem}"]})};var Nt=[{path:"",component:h},{path:"tasks",loadComponent:()=>import("./chunk-IWXZ5HGI.js").then(t=>t.TaskListComponent)},{path:"analytics",loadComponent:()=>import("./chunk-PE7YBL66.js").then(t=>t.AnalyticsComponent)},{path:"users",loadComponent:()=>import("./chunk-EZVJEJCQ.js").then(t=>t.UsersComponent)}];export{Nt as DASHBOARD_ROUTES};
