import{c as V}from"./chunk-ETLY2DK4.js";import{a as Lt,b as It,f as Bt,g as Nt,h as zt,i as Ft}from"./chunk-HIYQYC4A.js";import"./chunk-7ZXMOV2K.js";import{a as Rt}from"./chunk-DYPH5HGQ.js";import{f as Tt}from"./chunk-WJBDSOJ2.js";import"./chunk-J7LALHKN.js";import"./chunk-VJNKJKEQ.js";import"./chunk-2S4ZJEVN.js";import"./chunk-USMIOXMM.js";import{c as At}from"./chunk-SAGAFVOV.js";import"./chunk-ZKG5SQAH.js";import"./chunk-752GA5II.js";import{a as j}from"./chunk-P2PEHIBQ.js";import{J as wt,da as Et,f as St}from"./chunk-ACKHIWRQ.js";import{$ as ct,Aa as gt,Ab as Ct,B as Q,Ba as ut,Bb as xt,Gb as F,Ib as Mt,Ja as ft,Jb as f,K as tt,Ka as g,La as u,Mb as Pt,N as rt,Na as ht,O as et,Oa as k,Ob as it,P as R,Pa as O,Qa as p,R as h,Ra as r,Sa as i,Ta as d,U as w,Ua as _,V as E,Va as b,W as ot,Wa as M,X as st,Ya as L,_a as I,_b as kt,aa as dt,ab as l,bb as yt,cb as vt,da as A,ea as lt,gc as Ot,ha as mt,i as J,lb as nt,mb as z,nb as B,oa as N,ob as o,pa as s,pb as y,qb as C,ta as pt,vb as _t,ya as m,yb as bt,yc as Dt,za as at}from"./chunk-AZP6SPPI.js";import"./chunk-LG6SK6BE.js";var Yt=["*"];var Kt=new R("MAT_CARD_CONFIG"),jt=(()=>{class e{appearance;constructor(){let t=h(Kt,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,c){n&2&&z("mat-mdc-card-outlined",c.appearance==="outlined")("mdc-card--outlined",c.appearance==="outlined")("mat-mdc-card-filled",c.appearance==="filled")("mdc-card--filled",c.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Yt,decls:1,vars:0,template:function(n,c){n&1&&(yt(),vt(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return e})();var Vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=gt({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var Xt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=at({type:e});static \u0275inj=et({imports:[Dt]})}return e})();function Zt(e,a){if(e&1&&(r(0,"mat-icon",8),o(1,"arrow_upward"),i(),r(2,"span",9),o(3),i()),e&2){let t=l(2);s(3),C(" ","+"+t.statistic().changeSinceYesterday+" Since yesterday")}}function qt(e,a){if(e&1&&(r(0,"span",7),o(1),i()),e&2){let t=l(2);s(),C(" ",t.statistic().changeSinceYesterday+" Since yesterday")}}function Jt(e,a){if(e&1&&g(0,Zt,4,1)(1,qt,2,1,"span",7),e&2){let t=l();u(t.statistic().changeSinceYesterday>0?0:1)}}function Qt(e,a){e&1&&(r(0,"i",6),o(1,"(Not implemented yet)"),i())}var X=class e{statistic=f.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:11,vars:7,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"],[1,"statistic-change"],[2,"font-size","0.6rem","color","var(--color-neutral)"],[1,"change-value","neutral"],[1,"change-icon","positive"],[1,"change-value","positive"]],template:function(t,n){t&1&&(r(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),d(3,"i",2),r(4,"span",3),o(5),i()(),r(6,"div",4),o(7),i(),r(8,"div",5),g(9,Jt,2,1)(10,Qt,2,0,"i",6),i()()()),t&2&&(B(n.statistic().type),s(3),B(n.statistic().type!=="total"?"dot "+n.statistic().type:"show_chart"),s(2),y(n.statistic().title),s(2),y(n.statistic().value),s(2),u(n.statistic().changeSinceYesterday!==null?9:10))},dependencies:[Xt,jt,Vt,j],styles:['.statistic-card[_ngcontent-%COMP%]{border-radius:var(--radius-lg);transition:transform .2s ease,box-shadow .2s ease;background-color:var(--color-primary-contrast);border:1px solid var(--color-light-grey);padding:0 1rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:2rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.7rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]   .change-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.statistic-card[_ngcontent-%COMP%]{border-top-width:.3rem}.statistic-card.overdue[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-danger)}.statistic-card.in_progress[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-info)}.statistic-card.done[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-success)}.show_chart[_ngcontent-%COMP%]:before{font-family:Material Icons;content:"show_chart";font-feature-settings:"liga";display:inline-block;vertical-align:middle;color:var(--color-neutral)}']})};var v=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-analytics-card-placeholder"]],decls:25,vars:0,consts:[[1,"chart-empty"],[2,"width","100%"],[1,"fake-bars"],[1,"fake-bar-group"],[1,"fake-bar",2,"height","60px"],[1,"fake-bar",2,"height","80px"],[1,"fake-bar",2,"height","40px"],[1,"fake-bar",2,"height","55px"],[1,"fake-bar",2,"height","25px"],[1,"fake-bar",2,"height","70px"],[1,"fake-bar",2,"height","45px"],[1,"fake-bar",2,"height","30px"],[1,"x-axis"],[1,"empty-icon"],["width","18","height","18","viewBox","0 0 18 18","fill","none","stroke","#e3783e","stroke-width","1.8"],["points","2,13 6,8 10,10 14,4"],["x1","14","y1","4","x2","14","y2","8"],["x1","14","y1","4","x2","10","y2","4"],[1,"empty-title"],[1,"empty-sub"]],template:function(t,n){t&1&&(_(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),M(4,"div",4)(5,"div",5)(6,"div",6),b(),_(7,"div",3),M(8,"div",6)(9,"div",7)(10,"div",8),b(),_(11,"div",3),M(12,"div",9)(13,"div",10)(14,"div",11),b()(),M(15,"div",12),b(),_(16,"div",13),ot(),_(17,"svg",14),M(18,"polyline",15)(19,"line",16)(20,"line",17),b()(),st(),_(21,"div",18),o(22,"No data yet"),b(),_(23,"div",19),o(24,"Wait for data to appear here."),b()())},styles:["[_nghost-%COMP%]   .chart-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:1rem}[_nghost-%COMP%]   .fake-bars[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:1.5rem;height:100px;position:relative;width:100%;padding:0 16px;justify-content:center}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]{display:flex;gap:3px;align-items:flex-end}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]{width:14px;border-radius:5px 5px 0 0;background:#f0e9de;animation:_ngcontent-%COMP%_pulse 1.8s ease-in-out infinite}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(2)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.15s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(3)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.3s}[_nghost-%COMP%]   .x-axis[_ngcontent-%COMP%]{width:100%;height:1px;background:#ede5d8;margin-top:0}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:.5}50%{opacity:1}}[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%]{margin-top:1rem;width:36px;height:36px;border-radius:10px;background:#fef0e8;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#212121}[_nghost-%COMP%]   .empty-sub[_ngcontent-%COMP%]{font-size:11.5px;color:#9a8070;text-align:center;line-height:1.5}"]})};var te=()=>[1,2,3,4],ee=(e,a)=>a.type;function ae(e,a){e&1&&(r(0,"div",2),d(1,"div",3)(2,"div",4)(3,"div",5),i())}function ne(e,a){e&1&&(r(0,"div",0),k(1,ae,4,0,"div",2,ht),i()),e&2&&(s(),O(bt(0,te)))}function ie(e,a){if(e&1&&d(0,"app-statistic-card",6),e&2){let t=a.$implicit;p("statistic",t)}}function re(e,a){if(e&1&&(r(0,"div",0),k(1,ie,1,1,"app-statistic-card",6,ee),i()),e&2){let t=l();s(),O(t.statistics())}}function oe(e,a){e&1&&(r(0,"div",1),d(1,"app-analytics-card-placeholder"),i())}var $=class e{statistics=f([]);isLoading=f(!1);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-statistics-list"]],inputs:{statistics:[1,"statistics"],isLoading:[1,"isLoading"]},decls:3,vars:1,consts:[[1,"statistics-grid"],[1,"empty-state-card"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(t,n){t&1&&g(0,ne,3,1,"div",0)(1,re,3,0,"div",0)(2,oe,2,0,"div",1),t&2&&u(n.isLoading()?0:n.statistics()&&n.statistics().length>0?1:2)},dependencies:[X,v],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:var(--radius-lg);padding:1rem 2rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:.6rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}.empty-state-card[_ngcontent-%COMP%]{background-color:var(--color-primary-contrast);padding:1.5rem;border-radius:var(--radius-lg);border:1px solid var(--color-light-grey)}"]})};function se(e,a){if(e&1&&d(0,"canvas",0),e&2){let t=l();p("data",t.barChartData())("options",t.barChartOptions)("type",t.barChartType)}}function ce(e,a){e&1&&d(0,"app-analytics-card-placeholder")}var H=class e{statusChartData=f();totalTasks=f(0);barChartData=F(()=>({labels:this.statusChartData()?.labels,datasets:[...(this.statusChartData()?.datasets??[]).map(a=>({label:a.label,data:a.data,backgroundColor:a.label==="Low"?"#065f46":a.label==="Medium"?"#e3783e":a.label==="High"?"#991b1b":"#9e9e9e",borderColor:a.label==="Low"?"#065f46":a.label==="Medium"?"#e3783e":a.label==="High"?"#991b1b":"#9E9E9E",borderWidth:1,borderRadius:4,barThickness:32,maxBarThickness:28}))]}));barChartOptions={responsive:!0,maintainAspectRatio:!0,aspectRatio:1.5,plugins:{legend:{position:"bottom",labels:{color:"#424242",font:{size:11},boxWidth:12,boxHeight:12,padding:20}},title:{display:!0,align:"start",font:{size:15,weight:"bold"},color:"#212121"},tooltip:{callbacks:{label:a=>` ${a.dataset.label} priority: ${a.parsed.y} task(s)`}}},scales:{x:{grid:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},title:{display:!1},border:{display:!1}}}};barChartType="bar";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-tasks-bar-chart"]],inputs:{statusChartData:[1,"statusChartData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[["baseChart","",3,"data","options","type"]],template:function(t,n){t&1&&g(0,se,1,3,"canvas",0)(1,ce,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[V,v],styles:["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{max-width:100%!important}"]})};var U=class e{httpClient=h(kt);_analytics=A({});analytics=this._analytics.asReadonly();isLoading=A(!0);_historyLog=A([]);historyLog=this._historyLog.asReadonly();isHistoryLogLoading=A(!0);getAnalytics(a){return this._analytics.set({}),this.isLoading.set(!0),a?this.httpClient.get(`boards/${a}/analytics`).pipe(Q(()=>this.isLoading.set(!1)),tt(t=>{this._analytics.set(t)})):(this.isLoading.set(!1),J({}))}getHistoryLog(a){return a?(this.isHistoryLogLoading.set(!0),this.httpClient.get(`boards/${a}/analytics/history`).pipe(Q(()=>this.isHistoryLogLoading.set(!1)),tt(t=>{this._historyLog.set(t)}))):J([])}static \u0275fac=function(t){return new(t||e)};static \u0275prov=rt({token:e,factory:e.\u0275fac,providedIn:"root"})};function de(e,a){e&1&&M(0,"div",2)}var le=new R("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var G=(()=>{class e{_elementRef=h(mt);_ngZone=h(dt);_changeDetectorRef=h(Pt);_renderer=h(pt);_cleanupTransitionEnd;constructor(){let t=St(),n=h(le,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=$t(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=$t(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ct;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=m({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,c){n&2&&(ft("aria-valuenow",c._isIndeterminate()?null:c.value)("mode",c.mode),B("mat-"+c.color),z("_mat-animation-noopable",c._isNoopAnimation)("mdc-linear-progress--animation-ready",!c._isNoopAnimation)("mdc-linear-progress--indeterminate",c._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",it],bufferValue:[2,"bufferValue","bufferValue",it],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,c){n&1&&(_(0,"div",0),M(1,"div",1),g(2,de,1,0,"div",2),b(),_(3,"div",3),M(4,"span",4),b(),_(5,"div",5),M(6,"span",4),b()),n&2&&(s(),nt("flex-basis",c._getBufferBarFlexBasis()),s(),u(c.mode==="buffer"?2:-1),s(),nt("transform",c._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return e})();function $t(e,a=0,t=100){return Math.max(a,Math.min(t,e))}function me(e,a){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),o(3),i(),r(4,"div",3),o(5,"of tasks completed"),i()(),r(6,"div"),d(7,"mat-progress-bar",4),i(),r(8,"div")(9,"div",5)(10,"div",6)(11,"div",7),o(12),i(),r(13,"div",8),o(14,"Completed"),i()(),r(15,"div",6)(16,"div",7),o(17),i(),r(18,"div",8),o(19,"In Progress"),i()(),r(20,"div",6)(21,"div",7),o(22),i(),r(23,"div",8),o(24,"To Do"),i()()()()()),e&2){let t,n,c,P,D,T=l();s(3),C("",((t=T.completionRateData())==null?null:t.completionRate)||0,"%"),s(4),p("value",((n=T.completionRateData())==null?null:n.completionRate)||0),s(5),y(((c=T.completionRateData())==null?null:c.doneTasks)||0),s(5),y(((P=T.completionRateData())==null?null:P.inProgressTasks)||0),s(5),y(((D=T.completionRateData())==null?null:D.todoTasks)||0)}}function pe(e,a){e&1&&d(0,"app-analytics-card-placeholder")}var Y=class e{completionRateData=f();totalTasks=f(0);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-completion-rate"]],inputs:{completionRateData:[1,"completionRateData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"container"],[1,"completion-rate"],[1,"completion-rate-value"],[1,"completion-rate-label"],["mode","determinate",3,"value"],[1,"completion-rate-details"],[1,"detail-item"],[1,"detail-value"],[1,"detail-label"]],template:function(t,n){t&1&&g(0,me,25,5,"div",0)(1,pe,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[G,v],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:end;gap:1rem;justify-content:space-between;min-height:90%}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]{text-align:center;padding:2rem 0}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-value[_ngcontent-%COMP%]{font-size:3.5rem;color:var(--color-primary);font-weight:800;letter-spacing:-2px;line-height:1.4}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:2rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--color-dark)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral)}"]})};function ge(e,a){if(e&1&&(r(0,"div",0),d(1,"canvas",1),i()),e&2){let t=l();s(),p("data",t.doughnutChartData())("options",t.doughnutChartOptions)("type",t.doughnutChartType)("plugins",t.plugins)}}function ue(e,a){e&1&&d(0,"app-analytics-card-placeholder")}var fe={id:"doughnutCenter",beforeDraw(e){let{ctx:a,chartArea:{top:t,width:n,height:c}}=e,P=n/2+e.chartArea.left,D=t+c/2,T=e.data.datasets[0].data.reduce((Ut,Gt)=>Ut+Gt,0);a.save(),a.font="bold 28px Inter, sans-serif",a.fillStyle="#212121",a.textAlign="center",a.textBaseline="middle",a.fillText(`${T}`,P,D-10),a.font="500 16px Inter, sans-serif",a.fillStyle="#9a8070",a.fillText("tasks",P,D+14),a.restore()}},K=class e{priorityBreakdownChartData=f();totalTasks=f(0);plugins=[fe];doughnutChartData=F(()=>({labels:this.priorityBreakdownChartData()?.labels,datasets:[...(this.priorityBreakdownChartData()?.datasets??[]).map(a=>({label:a.label,data:a.data,backgroundColor:(this.priorityBreakdownChartData()?.labels??[]).map(t=>t==="Low"?"#065f46":t==="Medium"?"#e3783e":t==="High"?"#991b1b":"#9e9e9e"),borderColor:(this.priorityBreakdownChartData()?.labels??[]).map(t=>t==="Low"?"#065f46":t==="Medium"?"#e3783e":t==="High"?"#991b1b":"#9E9E9E"),borderWidth:1}))]}));doughnutChartOptions={responsive:!0,cutout:"80%",maintainAspectRatio:!0,plugins:{legend:{position:"right",align:"center",labels:{color:"#424242",font:{size:11},boxWidth:12,boxHeight:12,padding:20}},title:{display:!1},tooltip:{callbacks:{label:a=>` ${a.dataset.label} priority: ${a.parsed} task(s)`}}}};doughnutChartType="doughnut";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-tasks-doughnut-chart"]],inputs:{priorityBreakdownChartData:[1,"priorityBreakdownChartData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"doughnutChart-container"],["baseChart","",3,"data","options","type","plugins"]],template:function(t,n){t&1&&g(0,ge,2,4,"div",0)(1,ue,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[V,v],styles:["[_nghost-%COMP%]   .doughnutChart-container[_ngcontent-%COMP%]{height:90%;width:100%;margin:auto;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{max-width:100%!important}"]})};var he=(e,a)=>a.email;function ye(e,a){if(e&1&&(r(0,"div",1)(1,"div",2),d(2,"img",3),i(),r(3,"div",4)(4,"div",5),o(5),i(),d(6,"mat-progress-bar",6),i(),r(7,"div",7),o(8),i()()),e&2){let t=a.$implicit,n=l(2);s(2),p("alt",_t(t.name))("src",t.avatarUrl,N),s(3),y(t.name),s(),p("value",n.getMemberLoadPercentage(t.taskCount)),s(2),y(t.taskCount)}}function ve(e,a){if(e&1&&(r(0,"div",0),k(1,ye,9,6,"div",1,he),i()),e&2){let t=l();s(),O(t.members())}}function _e(e,a){e&1&&d(0,"app-analytics-card-placeholder")}var W=class e{members=f([]);totalTasks=f(0);getMemberLoadPercentage(a){return this.totalTasks()===0?0:a/this.totalTasks()*100}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-tasks-per-member"]],inputs:{members:[1,"members"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[[1,"member-list"],[1,"member-row"],[1,"user-avatar","lg"],[3,"src","alt"],[1,"member-info"],[1,"member-name"],["mode","determinate",3,"value"],[1,"member-count"]],template:function(t,n){t&1&&g(0,ve,3,0,"div",0)(1,_e,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0?0:1)},dependencies:[G,v],styles:["[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:1rem 0}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--color-dark);margin-bottom:4px}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]   .member-row[_ngcontent-%COMP%]   .member-count[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:var(--color-dark);min-width:28px;text-align:right;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .member-list[_ngcontent-%COMP%]{max-height:330px;overflow:auto}"]})};var Z=class e{transform(a){if(!a)return"";let t=new Date,n=new Date(a),c=Math.floor((t.getTime()-n.getTime())/1e3);return c<60?"Just now":c<3600?`${Math.floor(c/60)}m ago`:c<86400?`${Math.floor(c/3600)}h ago`:c<604800?`${Math.floor(c/86400)}d ago`:c<2592e3?`${Math.floor(c/604800)}w ago`:c<31536e3?`${Math.floor(c/2592e3)}mo ago`:`${Math.floor(c/31536e3)}y ago`}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=ut({name:"timeAgo",type:e,pure:!0})};var be=(e,a)=>a.timestamp;function Ce(e,a){if(e&1&&(o(0," changed status from "),r(1,"span",10),o(2),i(),o(3," to "),r(4,"span",10),o(5),i()),e&2){let t=l().$implicit,n=l(2);s(2),C('"',n.TASK_STATUS_LABELS[t.oldValue],'"'),s(3),C('"',n.TASK_STATUS_LABELS[t.newValue],'"')}}function xe(e,a){if(e&1&&(o(0," changed priority from "),r(1,"span",10),o(2),i(),o(3," to "),r(4,"span",10),o(5),i()),e&2){let t=l().$implicit,n=l(2);s(2),C('"',n.TASK_PRIORITY_LABELS[t.oldValue],'"'),s(3),C('"',n.TASK_PRIORITY_LABELS[t.newValue],'"')}}function Me(e,a){if(e&1&&(o(0," changed assignee from "),r(1,"span",10),o(2),i(),o(3," to "),r(4,"span",10),o(5),i()),e&2){let t=l().$implicit;s(2),C('"',t.oldValue,'"'),s(3),C('"',t.newValue,'"')}}function Pe(e,a){if(e&1){let t=L();r(0,"div",1)(1,"div",2)(2,"div",3),d(3,"img",4),i(),r(4,"div",5)(5,"strong",6),o(6),i(),r(7,"span",7),g(8,Ce,6,2)(9,xe,6,2)(10,Me,6,2),o(11," on "),r(12,"button",8),I("click",function(){let c=w(t).$implicit,P=l(2);return E(P.openViewTaskDialog(c.task._id))}),o(13),i()(),r(14,"div")(15,"span",9),o(16),Ct(17,"timeAgo"),i()()()()()}if(e&2){let t=a.$implicit;s(3),p("src",t.user.avatarUrl,N),s(3),y(t.user.name),s(2),u(t.type==="status_change"?8:t.type==="priority_change"?9:t.type==="assignee_change"?10:-1),s(5),y(t.task.referenceId),s(3),y(xt(17,5,t.timestamp))}}function ke(e,a){if(e&1&&(r(0,"div",0),k(1,Pe,18,7,"div",1,be),i()),e&2){let t=l();s(),O(t.historyLog())}}function Oe(e,a){e&1&&d(0,"app-analytics-card-placeholder")}var q=class e{dialog=h(At);historyLog=f([]);totalTasks=f(0);taskUpdated=Mt();TASK_STATUS_LABELS=Nt;TASK_PRIORITY_LABELS=zt;openViewTaskDialog(a){this.dialog.open(Ft,{panelClass:"app-dialog",data:{taskId:a,users:[]},disableClose:!0}).afterClosed().subscribe(t=>{t&&this.taskUpdated.emit()})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-activity-log"]],inputs:{historyLog:[1,"historyLog"],totalTasks:[1,"totalTasks"]},outputs:{taskUpdated:"taskUpdated"},decls:2,vars:1,consts:[[1,"activity-log-list"],[1,"activity"],[1,"d-flex","align-items-start","gap-2"],[1,"user-avatar","lg"],["alt","",3,"src"],[1,"activity-content"],[1,"user-name"],[1,"activity-message"],[1,"link","task-reference",3,"click"],[1,"timestamp"],[1,"changed-value"]],template:function(t,n){t&1&&g(0,ke,3,0,"div",0)(1,Oe,1,0,"app-analytics-card-placeholder"),t&2&&u(n.totalTasks()>0&&n.historyLog().length>0?0:1)},dependencies:[v,Z],styles:["[_nghost-%COMP%]   .activity-log-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:330px;overflow:auto}[_nghost-%COMP%]   .activity-log-list[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:1rem 0}[_nghost-%COMP%]   .activity-log-list[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   .activity-log-list[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral)}[_nghost-%COMP%]   .activity-log-list[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]   .activity-content[_ngcontent-%COMP%]   .changed-value[_ngcontent-%COMP%]{font-weight:600}"]})};var Se=(e,a)=>a._id;function Te(e,a){e&1&&d(0,"app-loading-spinner")}function De(e,a){e&1&&(r(0,"div",0)(1,"mat-icon",1),o(2,"dashboard"),i(),r(3,"h2"),o(4,"No data yet"),i(),r(5,"p"),o(6,"Analytics will be available once a board is created. "),d(7,"br")(8,"br"),o(9," go to the "),r(10,"a",2),o(11,"Boards"),i(),o(12,". "),i()())}function we(e,a){if(e&1&&(r(0,"mat-option",24)(1,"span"),o(2),i()()),e&2){let t=a.$implicit;p("value",t._id),s(2),y(t.name)}}function Ee(e,a){if(e&1){let t=L();r(0,"mat-form-field",5)(1,"mat-select",23),I("selectionChange",function(c){w(t);let P=l(2);return E(P.onBoardChange(c.value))}),k(2,we,3,2,"mat-option",24,Se),i()()}if(e&2){let t,n=l(2);s(),p("value",(t=n.boardsService.activeBoard())==null?null:t._id),s(),O(n.boardsService.boards())}}function Ae(e,a){if(e&1){let t=L();r(0,"div",3)(1,"p",4),o(2,"Gain insights into your project performance and team productivity"),i(),g(3,Ee,4,1,"mat-form-field",5),i(),d(4,"app-statistics-list",6)(5,"div",7),r(6,"div",8)(7,"div",9)(8,"div",10)(9,"div",11),o(10,"Tasks by Status and Priority"),i(),r(11,"div",12),o(12,"Per active board"),i()(),d(13,"app-tasks-bar-chart",13),i(),r(14,"div",14)(15,"div",10)(16,"div",11),o(17,"Completion Rate"),i(),r(18,"div",12),o(19,"Per active board"),i()(),d(20,"app-completion-rate",15),i()(),r(21,"div",16)(22,"div",17)(23,"div",10)(24,"div",11),o(25,"Priority Breakdown"),i(),r(26,"div",12),o(27,"Per active board"),i()(),d(28,"app-tasks-doughnut-chart",18),i(),r(29,"div",19)(30,"div",10)(31,"div",11),o(32,"Tasks per Member"),i(),r(33,"div",12),o(34,"Per active board"),i()(),d(35,"app-tasks-per-member",20),i(),r(36,"div",21)(37,"div",10)(38,"div",11),o(39,"Recent Activity"),i(),r(40,"div",12),o(41,"Per active board"),i()(),r(42,"app-activity-log",22),I("taskUpdated",function(){w(t);let c=l();return E(c.onTaskUpdated())}),i()()()}if(e&2){let t=l();s(3),u(t.boardsService.activeBoard()?3:-1),s(),p("statistics",t.analyticsService.analytics().statistics),s(9),p("statusChartData",t.analyticsService.analytics().statusChartData)("totalTasks",t.analyticsService.analytics().totalTasks),s(7),p("completionRateData",t.analyticsService.analytics().completionRateData)("totalTasks",t.analyticsService.analytics().totalTasks),s(8),p("priorityBreakdownChartData",t.analyticsService.analytics().priorityBreakdownChartData)("totalTasks",t.analyticsService.analytics().totalTasks),s(7),p("members",t.analyticsService.analytics().tasksPerMember)("totalTasks",t.analyticsService.analytics().totalTasks),s(7),p("historyLog",t.analyticsService.historyLog())("totalTasks",t.analyticsService.analytics().totalTasks)}}var Ht=class e{taskService=h(Bt);boardsService=h(wt);analyticsService=h(U);constructor(){this.boardsService.loadBoards().subscribe(),lt(()=>{this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id??"").subscribe(),this.analyticsService.getHistoryLog(this.boardsService.activeBoard()?._id??"").subscribe()})}onBoardChange(a){let t=this.boardsService.boards().find(n=>n._id===a);t&&this.boardsService.setActiveBoard(t)}onTaskUpdated(){this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id??"").subscribe(),this.analyticsService.getHistoryLog(this.boardsService.activeBoard()?._id??"").subscribe()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-analytics"]],decls:3,vars:1,consts:[[1,"empty-state"],[1,"empty-state-icon"],["routerLink","/board",1,"link"],[1,"header","d-flex","justify-content-between","align-items-center","mb-5"],[1,"hint"],["appearance","outline","subscriptSizing","dynamic",1,"filter-select"],[3,"statistics"],[1,"divider"],[1,"row"],[1,"bar-chart-container","col"],[1,"col-header","d-flex","justify-content-between","align-items-center"],[1,"col-title"],[1,"col-hint"],[3,"statusChartData","totalTasks"],[1,"completion-rate-container","col"],[3,"completionRateData","totalTasks"],[1,"row","three-cols"],[1,"doughnut-chart-container","col"],[3,"priorityBreakdownChartData","totalTasks"],[1,"tasks-per-member-container","col"],[3,"members","totalTasks"],[1,"recent-activity-container","col"],[3,"taskUpdated","historyLog","totalTasks"],["placeholder","Board","hideSingleSelectionIndicator","true",3,"selectionChange","value"],[3,"value"]],template:function(t,n){t&1&&g(0,Te,1,0,"app-loading-spinner")(1,De,13,0,"div",0)(2,Ae,43,12),t&2&&u(n.analyticsService.isLoading()?0:n.boardsService.activeBoard()===null?1:2)},dependencies:[$,H,Et,It,Lt,Tt,Y,K,W,Rt,j,Ot,q],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:.875rem;color:var(--color-neutral)}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{flex-wrap:wrap}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]{flex:1}@media screen and (max-width:950px){[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%], [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]{flex:unset;width:100%}}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{background-color:var(--color-primary-contrast);padding:1.5rem;border-radius:var(--radius-lg);border:1px solid var(--color-light-grey);flex:1 1 300px}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]{margin-bottom:1rem}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:var(--color-dark)}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .col-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--color-neutral)}[_nghost-%COMP%]   .row.three-cols[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1 1 300px}"]})};export{Ht as AnalyticsComponent};
