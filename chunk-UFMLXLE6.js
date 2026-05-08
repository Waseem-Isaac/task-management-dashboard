import{c as B}from"./chunk-KCCADMS2.js";import{a as xt,b as Pt,c as kt}from"./chunk-6CAGCLJT.js";import{c as vt}from"./chunk-B37ABX7C.js";import"./chunk-TUIBVCL5.js";import"./chunk-6B5WWFJB.js";import"./chunk-PGQIXHP2.js";import{a as Mt}from"./chunk-F66BTZFF.js";import{K as yt,da as _t,f as bt}from"./chunk-G5GWJPSE.js";import{$a as u,$b as f,Ba as o,Bb as U,Cb as A,Db as S,Eb as s,Fa as rt,Fb as C,Gb as T,Kc as Ct,Lb as gt,Ma as l,Na as G,Oa as ot,Ob as ut,P as W,T as Z,U as H,W as E,Xb as I,Y as h,Za as st,_a as g,aa as q,ba as J,bb as ct,ca as K,cb as k,cc as ft,da as Q,db as O,eb as m,ec as Y,fb as r,gb as i,hb as c,ia as tt,ib as b,ja as et,jb as v,kb as _,mb as dt,na as $,oa as at,ob as lt,qb as p,qc as ht,rb as mt,sa as nt,sb as pt,za as it}from"./chunk-7V5IQ5L5.js";import"./chunk-DS6P5DKD.js";var It=["*"];var Bt=new E("MAT_CARD_CONFIG"),Ot=(()=>{class e{appearance;constructor(){let t=h(Bt,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,d){n&2&&A("mat-mdc-card-outlined",d.appearance==="outlined")("mdc-card--outlined",d.appearance==="outlined")("mat-mdc-card-filled",d.appearance==="filled")("mdc-card--filled",d.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:It,decls:1,vars:0,template:function(n,d){n&1&&(mt(),pt(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return e})();var Dt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=ot({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var wt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=H({imports:[Ct]})}return e})();function zt(e,a){if(e&1&&(r(0,"mat-icon",8),s(1,"arrow_upward"),i(),r(2,"span",9),s(3),i()),e&2){let t=p(2);o(3),T(" ","+"+t.statistic().changeSinceYesterday+" Since yesterday")}}function Ft(e,a){if(e&1&&(r(0,"span",7),s(1),i()),e&2){let t=p(2);o(),T(" ","+"+t.statistic().changeSinceYesterday+" Since yesterday")}}function Nt(e,a){if(e&1&&g(0,zt,4,1)(1,Ft,2,1,"span",7),e&2){let t=p();u(t.statistic().changeSinceYesterday>0?0:1)}}function Lt(e,a){e&1&&(r(0,"i",6),s(1,"(Not implemented yet)"),i())}var R=class e{statistic=f.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:11,vars:7,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"],[1,"statistic-change"],[2,"font-size","0.6rem","color","var(--color-neutral)"],[1,"change-value","neutral"],[1,"change-icon","positive"],[1,"change-value","positive"]],template:function(t,n){t&1&&(r(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),c(3,"i",2),r(4,"span",3),s(5),i()(),r(6,"div",4),s(7),i(),r(8,"div",5),g(9,Nt,2,1)(10,Lt,2,0,"i",6),i()()()),t&2&&(S(n.statistic().type),o(3),S(n.statistic().type!=="total"?"dot "+n.statistic().type:"show_chart"),o(2),C(n.statistic().title),o(2),C(n.statistic().value),o(2),u(n.statistic().changeSinceYesterday!==null?9:10))},dependencies:[wt,Ot,Dt,Mt],styles:['.statistic-card[_ngcontent-%COMP%]{border-radius:var(--radius-lg);transition:transform .2s ease,box-shadow .2s ease;background-color:var(--color-primary-contrast);border:1px solid var(--color-light-grey);padding:0 1rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:1rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.7rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]   .change-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.statistic-card[_ngcontent-%COMP%]{border-top-width:.3rem}.statistic-card.overdue[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-danger)}.statistic-card.in-progress[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-info)}.statistic-card.completed[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-success)}.show_chart[_ngcontent-%COMP%]:before{font-family:Material Icons;content:"show_chart";font-feature-settings:"liga";display:inline-block;vertical-align:middle;color:var(--color-neutral)}']})};var jt=()=>[1,2,3,4],Xt=(e,a)=>a.type;function Vt(e,a){e&1&&(r(0,"div",1),c(1,"div",2)(2,"div",3)(3,"div",4),i())}function Ht(e,a){e&1&&(r(0,"div",0),k(1,Vt,4,0,"div",1,ct),i()),e&2&&(o(),O(ut(0,jt)))}function $t(e,a){if(e&1&&c(0,"app-statistic-card",5),e&2){let t=a.$implicit;m("statistic",t)}}function Gt(e,a){if(e&1&&(r(0,"div",0),k(1,$t,1,1,"app-statistic-card",5,Xt),i()),e&2){let t=p();o(),O(t.statistics())}}var z=class e{statistics=f();isLoading=f(!1);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-statistics-list"]],inputs:{statistics:[1,"statistics"],isLoading:[1,"isLoading"]},decls:2,vars:1,consts:[[1,"statistics-grid"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(t,n){t&1&&g(0,Ht,3,1,"div",0)(1,Gt,3,0,"div",0),t&2&&u(n.isLoading()?0:1)},dependencies:[R],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:var(--radius-lg);padding:1rem 2rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:.6rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}"]})};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-analytics-card-placeholder"]],decls:25,vars:0,consts:[[1,"chart-empty"],[2,"width","100%"],[1,"fake-bars"],[1,"fake-bar-group"],[1,"fake-bar",2,"height","60px"],[1,"fake-bar",2,"height","80px"],[1,"fake-bar",2,"height","40px"],[1,"fake-bar",2,"height","55px"],[1,"fake-bar",2,"height","25px"],[1,"fake-bar",2,"height","70px"],[1,"fake-bar",2,"height","45px"],[1,"fake-bar",2,"height","30px"],[1,"x-axis"],[1,"empty-icon"],["width","18","height","18","viewBox","0 0 18 18","fill","none","stroke","#e3783e","stroke-width","1.8"],["points","2,13 6,8 10,10 14,4"],["x1","14","y1","4","x2","14","y2","8"],["x1","14","y1","4","x2","10","y2","4"],[1,"empty-title"],[1,"empty-sub"]],template:function(t,n){t&1&&(b(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4,"div",4)(5,"div",5)(6,"div",6),v(),b(7,"div",3),_(8,"div",6)(9,"div",7)(10,"div",8),v(),b(11,"div",3),_(12,"div",9)(13,"div",10)(14,"div",11),v()(),_(15,"div",12),v(),b(16,"div",13),K(),b(17,"svg",14),_(18,"polyline",15)(19,"line",16)(20,"line",17),v()(),Q(),b(21,"div",18),s(22,"No data yet"),v(),b(23,"div",19),s(24,"Wait for data to appear here."),v()())},styles:["[_nghost-%COMP%]   .chart-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:1rem}[_nghost-%COMP%]   .fake-bars[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:1.5rem;height:100px;position:relative;width:100%;padding:0 16px;justify-content:center}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]{display:flex;gap:3px;align-items:flex-end}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]{width:14px;border-radius:5px 5px 0 0;background:#f0e9de;animation:_ngcontent-%COMP%_pulse 1.8s ease-in-out infinite}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(2)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.15s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(3)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.3s}[_nghost-%COMP%]   .x-axis[_ngcontent-%COMP%]{width:100%;height:1px;background:#ede5d8;margin-top:0}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:.5}50%{opacity:1}}[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%]{margin-top:1rem;width:36px;height:36px;border-radius:10px;background:#fef0e8;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#212121}[_nghost-%COMP%]   .empty-sub[_ngcontent-%COMP%]{font-size:11.5px;color:#9a8070;text-align:center;line-height:1.5}"]})};function Ut(e,a){if(e&1&&c(0,"canvas",0),e&2){let t=p();m("data",t.barChartData())("options",t.barChartOptions)("type",t.barChartType)}}function Yt(e,a){e&1&&c(0,"app-analytics-card-placeholder")}var F=class e{statusChartData=f();totalTasks=f(0);barChartData=I(()=>({labels:this.statusChartData()?.labels,datasets:[...(this.statusChartData()?.datasets??[]).map(a=>({label:a.label,data:a.data,backgroundColor:a.label==="Low"?"rgba(56, 142, 60, 0.75)":a.label==="Medium"?"rgba(245, 124, 0, 0.75)":a.label==="High"?"rgba(211, 47, 47, 0.75)":"rgba(158,158,158,0.75)",borderColor:a.label==="Low"?"#388E3C":a.label==="Medium"?"#F57C00":a.label==="High"?"#D32F2F":"#9E9E9E",borderWidth:1,borderRadius:4,barThickness:32,maxBarThickness:28}))]}));barChartOptions={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom",labels:{color:"#424242",font:{size:11},boxWidth:12,boxHeight:12,padding:20}},title:{display:!0,align:"start",font:{size:15,weight:"bold"},color:"#212121",padding:{bottom:64}},tooltip:{callbacks:{label:a=>` ${a.dataset.label} priority: ${a.parsed.y} task(s)`}}},scales:{x:{grid:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},title:{display:!1},border:{display:!1}}}};barChartType="bar";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-tasks-bar-chart"]],inputs:{statusChartData:[1,"statusChartData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[["baseChart","",3,"data","options","type"]],template:function(t,n){t&1&&g(0,Ut,1,3,"canvas",0)(1,Yt,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[B,y],styles:["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{max-width:100%!important}"]})};var N=class e{httpClient=h(ht);_analytics=$({});analytics=this._analytics.asReadonly();isLoading=$(!0);getAnalytics(a){return this._analytics.set({}),this.isLoading.set(!0),this.httpClient.get(`boards/${a}/analytics`).pipe(W(t=>{this._analytics.set(t),this.isLoading.set(!1)}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=Z({token:e,factory:e.\u0275fac,providedIn:"root"})};function Wt(e,a){e&1&&_(0,"div",2)}var Zt=new E("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var L=(()=>{class e{_elementRef=h(nt);_ngZone=h(et);_changeDetectorRef=h(ft);_renderer=h(rt);_cleanupTransitionEnd;constructor(){let t=bt(),n=h(Zt,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=St(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=St(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new tt;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,d){n&2&&(st("aria-valuenow",d._isIndeterminate()?null:d.value)("mode",d.mode),S("mat-"+d.color),A("_mat-animation-noopable",d._isNoopAnimation)("mdc-linear-progress--animation-ready",!d._isNoopAnimation)("mdc-linear-progress--indeterminate",d._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Y],bufferValue:[2,"bufferValue","bufferValue",Y],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,d){n&1&&(b(0,"div",0),_(1,"div",1),g(2,Wt,1,0,"div",2),v(),b(3,"div",3),_(4,"span",4),v(),b(5,"div",5),_(6,"span",4),v()),n&2&&(o(),U("flex-basis",d._getBufferBarFlexBasis()),o(),u(d.mode==="buffer"?2:-1),o(),U("transform",d._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();function St(e,a=0,t=100){return Math.max(a,Math.min(t,e))}function qt(e,a){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),s(3),i(),r(4,"div",3),s(5,"of tasks completed"),i()(),r(6,"div"),c(7,"mat-progress-bar",4),i(),r(8,"div")(9,"div",5)(10,"div",6)(11,"div",7),s(12),i(),r(13,"div",8),s(14,"Completed"),i()(),r(15,"div",6)(16,"div",7),s(17),i(),r(18,"div",8),s(19,"In Progress"),i()(),r(20,"div",6)(21,"div",7),s(22),i(),r(23,"div",8),s(24,"To Do"),i()()()()()),e&2){let t,n,d,x,w,P=p();o(3),T("",((t=P.completionRateData())==null?null:t.completionRate)||0,"%"),o(4),m("value",((n=P.completionRateData())==null?null:n.completionRate)||0),o(5),C(((d=P.completionRateData())==null?null:d.doneCount)||0),o(5),C(((x=P.completionRateData())==null?null:x.inProgressCount)||0),o(5),C(((w=P.completionRateData())==null?null:w.todoCount)||0)}}function Jt(e,a){e&1&&c(0,"app-analytics-card-placeholder")}var j=class e{completionRateData=f();totalTasks=f(0);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-completion-rate"]],inputs:{completionRateData:[1,"completionRateData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"container"],[1,"completion-rate"],[1,"completion-rate-value"],[1,"completion-rate-label"],["mode","determinate",3,"value"],[1,"completion-rate-details"],[1,"detail-item"],[1,"detail-value"],[1,"detail-label"]],template:function(t,n){t&1&&g(0,qt,25,5,"div",0)(1,Jt,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[L,y],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:end;gap:1rem;justify-content:space-between;min-height:90%}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]{text-align:center;padding:2rem 0}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-value[_ngcontent-%COMP%]{font-size:3.5rem;color:var(--color-primary);font-weight:800;letter-spacing:-2px;line-height:1.4}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:2rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--color-dark)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral)}"]})};function Kt(e,a){if(e&1&&(r(0,"div",0),c(1,"canvas",1),i()),e&2){let t=p();o(),m("data",t.doughnutChartData())("options",t.doughnutChartOptions)("type",t.doughnutChartType)("plugins",t.plugins)}}function Qt(e,a){e&1&&c(0,"app-analytics-card-placeholder")}var te={id:"doughnutCenter",beforeDraw(e){let{ctx:a,chartArea:{top:t,width:n,height:d}}=e,x=n/2+e.chartArea.left,w=t+d/2,P=e.data.datasets[0].data.reduce((Et,At)=>Et+At,0);a.save(),a.font="bold 28px Inter, sans-serif",a.fillStyle="#212121",a.textAlign="center",a.textBaseline="middle",a.fillText(`${P}`,x,w-10),a.font="500 16px Inter, sans-serif",a.fillStyle="#9a8070",a.fillText("tasks",x,w+14),a.restore()}},X=class e{priorityBreakdownChartData=f();totalTasks=f(0);plugins=[te];doughnutChartData=I(()=>(console.log("Computing doughnut chart data with input:",this.priorityBreakdownChartData()?.datasets[0]),{labels:this.priorityBreakdownChartData()?.labels,datasets:[...(this.priorityBreakdownChartData()?.datasets??[]).map(a=>({label:a.label,data:a.data,backgroundColor:(this.priorityBreakdownChartData()?.labels??[]).map(t=>t==="Low"?"rgba(56, 142, 60, 0.75)":t==="Medium"?"rgba(245, 124, 0, 0.75)":t==="High"?"rgba(211, 47, 47, 0.75)":"rgba(158,158,158,0.75)"),borderColor:(this.priorityBreakdownChartData()?.labels??[]).map(t=>t==="Low"?"#388E3C":t==="Medium"?"#F57C00":t==="High"?"#D32F2F":"#9E9E9E"),borderWidth:1}))]}));doughnutChartOptions={responsive:!0,cutout:"80%",maintainAspectRatio:!0,plugins:{legend:{position:"right",align:"center",labels:{color:"#424242",font:{size:11},boxWidth:12,boxHeight:12,padding:20}},title:{display:!1},tooltip:{callbacks:{label:a=>` ${a.dataset.label} priority: ${a.parsed} task(s)`}}}};doughnutChartType="doughnut";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-tasks-doughnut-chart"]],inputs:{priorityBreakdownChartData:[1,"priorityBreakdownChartData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"doughnutChart-container"],["baseChart","",3,"data","options","type","plugins"]],template:function(t,n){t&1&&g(0,Kt,2,4,"div",0)(1,Qt,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[B,y],styles:["[_nghost-%COMP%]   .doughnutChart-container[_ngcontent-%COMP%]{height:90%;width:100%;margin:auto;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{max-width:100%!important}"]})};var ee=(e,a)=>a.email;function ae(e,a){if(e&1&&(r(0,"div",1)(1,"div",2),c(2,"img",3),i(),r(3,"div",4)(4,"div",5),s(5),i(),c(6,"mat-progress-bar",6),i(),r(7,"div",7),s(8),i()()),e&2){let t=a.$implicit,n=p(2);o(2),m("alt",gt(t.name))("src",t.avatarUrl,it),o(3),C(t.name),o(),m("value",n.getMemberLoadPercentage(t.taskCount)),o(2),C(t.taskCount)}}function ne(e,a){if(e&1&&(r(0,"div",0),k(1,ae,9,6,"div",1,ee),i()),e&2){let t=p();o(),O(t.members())}}function ie(e,a){e&1&&c(0,"app-analytics-card-placeholder")}var V=class e{members=f([]);totalTasks=f(0);getMemberLoadPercentage(a){return this.totalTasks()===0?0:a/this.totalTasks()*100}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-tasks-per-member"]],inputs:{members:[1,"members"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"member-list"],[1,"member-row"],[1,"user-avatar","lg"],[3,"src","alt"],[1,"member-info"],[1,"member-name"],["mode","determinate",3,"value"],[1,"member-count"]],template:function(t,n){t&1&&g(0,ne,3,0,"div",0)(1,ie,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()===0?0:1)},dependencies:[L,y],styles:["[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:1rem 0}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--color-dark);margin-bottom:4px}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-count[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:var(--color-dark);min-width:28px;text-align:right;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]{max-height:330px;overflow:auto}"]})};var re=(e,a)=>a._id;function oe(e,a){if(e&1&&(r(0,"mat-option",21)(1,"span"),s(2),i()()),e&2){let t=a.$implicit;m("value",t._id),o(2),C(t.name)}}function se(e,a){if(e&1){let t=dt();r(0,"mat-form-field",2)(1,"mat-select",20),lt("selectionChange",function(d){q(t);let x=p();return J(x.onBoardChange(d.value))}),k(2,oe,3,2,"mat-option",21,re),i()()}if(e&2){let t,n=p();o(),m("value",(t=n.boardsService.activeBoard())==null?null:t._id),o(),O(n.boardsService.boards())}}var Tt=class e{taskService=h(kt);boardsService=h(yt);analyticsService=h(N);constructor(){this.boardsService.loadBoards().subscribe(),at(()=>{this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id??"").subscribe()})}onBoardChange(a){let t=this.boardsService.boards().find(n=>n._id===a);t&&this.boardsService.setActiveBoard(t)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-analytics"]],decls:45,vars:11,consts:[[1,"header","d-flex","justify-content-between","align-items-center","mb-5"],[1,"hint"],["appearance","outline","subscriptSizing","dynamic",1,"filter-select"],[3,"statistics","isLoading"],[1,"divider"],[1,"row"],[1,"bar-chart-container","col"],[1,"col-header","d-flex","justify-content-between","align-items-center"],[1,"col-title"],[1,"col-hint"],[3,"statusChartData","totalTasks"],[1,"completion-rate-container","col"],[3,"completionRateData","totalTasks"],[1,"row","three-cols"],[1,"doughnut-chart-container","col"],[3,"priorityBreakdownChartData","totalTasks"],[1,"tasks-per-member-container","col"],[3,"members","totalTasks"],[1,"recent-activity-container","col"],[2,"color","var(--color-neutral)","margin-bottom","0"],["placeholder","Board","hideSingleSelectionIndicator","true",3,"selectionChange","value"],[3,"value"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"p",1),s(2,"Gain insights into your project performance and team productivity"),i(),g(3,se,4,1,"mat-form-field",2),i(),c(4,"app-statistics-list",3)(5,"div",4),r(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),s(10,"Tasks by Status and Priority"),i(),r(11,"div",9),s(12,"Per active board"),i()(),c(13,"app-tasks-bar-chart",10),i(),r(14,"div",11)(15,"div",7)(16,"div",8),s(17,"Completion Rate"),i(),r(18,"div",9),s(19,"Per active board"),i()(),c(20,"app-completion-rate",12),i()(),r(21,"div",13)(22,"div",14)(23,"div",7)(24,"div",8),s(25,"Priority Breakdown"),i(),r(26,"div",9),s(27,"Per active board"),i()(),c(28,"app-tasks-doughnut-chart",15),i(),r(29,"div",16)(30,"div",7)(31,"div",8),s(32,"Tasks per Member"),i(),r(33,"div",9),s(34,"Per active board"),i()(),c(35,"app-tasks-per-member",17),i(),r(36,"div",18)(37,"div",7)(38,"div",8),s(39,"Recent Activity "),r(40,"div",19),s(41,"Stay tuned"),i()(),r(42,"div",9),s(43,"Per active board"),i()(),c(44,"app-analytics-card-placeholder"),i()()),t&2&&(o(3),u(n.boardsService.activeBoard()?3:-1),o(),m("statistics",n.analyticsService.analytics().statistics)("isLoading",n.analyticsService.isLoading()),o(9),m("statusChartData",n.analyticsService.analytics().statusChartData)("totalTasks",n.analyticsService.analytics().totalTasks),o(7),m("completionRateData",n.analyticsService.analytics().completionRateData)("totalTasks",n.analyticsService.analytics().totalTasks),o(8),m("priorityBreakdownChartData",n.analyticsService.analytics().priorityBreakdownChartData)("totalTasks",n.analyticsService.analytics().totalTasks),o(7),m("members",n.analyticsService.analytics().tasksPerMember)("totalTasks",n.analyticsService.analytics().totalTasks))},dependencies:[z,F,y,_t,Pt,xt,vt,j,X,V],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:.875rem;color:var(--color-neutral)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{flex-wrap:wrap}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]{flex:1}@media screen and (max-width:950px){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]{flex:unset;width:100%}}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{background-color:var(--color-primary-contrast);padding:1.5rem;border-radius:var(--radius-lg);border:1px solid var(--color-light-grey);flex:1 1 300px}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]{margin-bottom:1rem}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:var(--color-dark)}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .col-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--color-neutral)}[_nghost-%COMP%]   .row.three-cols[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1 1 300px}"]})};export{Tt as AnalyticsComponent};
