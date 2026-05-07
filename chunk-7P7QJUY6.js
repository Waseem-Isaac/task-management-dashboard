import{c as ht}from"./chunk-XC6566GH.js";import{a as ft,b as bt,c as w,d as vt}from"./chunk-TIKOPIXO.js";import{c as lt}from"./chunk-GOHZHB5T.js";import"./chunk-EN2BR5BC.js";import"./chunk-K7SA2B36.js";import"./chunk-VK77QXD5.js";import"./chunk-GSY3GDBR.js";import{K as gt,da as ut,f as mt}from"./chunk-FBOGVW7V.js";import{$a as y,$b as h,Ca as c,Cb as j,Db as E,Eb as P,Fb as o,Ga as Q,Gb as b,Hb as it,Lc as pt,Na as l,Oa as N,Ob as ot,Pa as Y,Q as G,U as $,V as z,X as O,Xb as st,Z as d,_a as tt,ab as _,cb as et,cc as ct,da as Z,db as M,ea as q,eb as x,ec as X,fb as f,gb as i,hb as r,ib as m,ja as U,jb as p,ka as W,kb as g,lb as u,oa as F,pa as J,pb as at,qc as dt,rb as S,sb as nt,ta as K,tb as rt}from"./chunk-EPXM3Q2M.js";import"./chunk-IONH7NRB.js";var kt=["*"];var Dt=new O("MAT_CARD_CONFIG"),yt=(()=>{class e{appearance;constructor(){let t=d(Dt,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=l({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,s){a&2&&E("mat-mdc-card-outlined",s.appearance==="outlined")("mdc-card--outlined",s.appearance==="outlined")("mat-mdc-card-filled",s.appearance==="filled")("mdc-card--filled",s.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:kt,decls:1,vars:0,template:function(a,s){a&1&&(nt(),rt(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return e})();var _t=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275dir=Y({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var Ct=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=N({type:e});static \u0275inj=z({imports:[pt]})}return e})();var T=class e{statistic=h.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-statistic-card"]],inputs:{statistic:[1,"statistic"]},decls:8,vars:6,consts:[[1,"statistic-card"],[1,"statistic-header"],[1,"statistic-icon"],[1,"statistic-title"],[1,"statistic-value"]],template:function(t,a){t&1&&(i(0,"mat-card",0)(1,"mat-card-content")(2,"div",1),m(3,"i",2),i(4,"span",3),o(5),r()(),i(6,"div",4),o(7),r()()()),t&2&&(P(a.statistic().type),c(3),P(a.statistic().type!=="total"?"dot "+a.statistic().type:"show_chart"),c(2),b(a.statistic().title),c(2),b(a.statistic().value))},dependencies:[Ct,yt,_t],styles:['.statistic-card[_ngcontent-%COMP%]{border-radius:var(--radius-lg);transition:transform .2s ease,box-shadow .2s ease;background-color:var(--color-primary-contrast);border:1px solid var(--color-light-grey);padding:0 1rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.statistic-card[_ngcontent-%COMP%]   .statistic-header[_ngcontent-%COMP%]   .statistic-title[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]   .statistic-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:1rem 0}.statistic-card[_ngcontent-%COMP%]   .statistic-change[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem;font-size:.8125rem}.statistic-card[_ngcontent-%COMP%]   .statistic-change.positive[_ngcontent-%COMP%]{color:var(--color-success)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.negative[_ngcontent-%COMP%]{color:var(--color-danger)}.statistic-card[_ngcontent-%COMP%]   .statistic-change.neutral[_ngcontent-%COMP%]{color:var(--color-neutral)}.statistic-card[_ngcontent-%COMP%]{border-top-width:.3rem}.statistic-card.overdue[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-danger)}.statistic-card.in-progress[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-info)}.statistic-card.completed[_ngcontent-%COMP%]{border-top:.3rem solid var(--color-success)}.show_chart[_ngcontent-%COMP%]:before{font-family:Material Icons;content:"show_chart";font-feature-settings:"liga";display:inline-block;vertical-align:middle;color:var(--color-neutral)}']})};var St=()=>[1,2,3,4],Et=(e,n)=>n.type;function wt(e,n){e&1&&(i(0,"div",1),m(1,"div",2)(2,"div",3)(3,"div",4),r())}function Tt(e,n){e&1&&(i(0,"div",0),M(1,wt,4,0,"div",1,et),r()),e&2&&(c(),x(ot(0,St)))}function At(e,n){if(e&1&&m(0,"app-statistic-card",5),e&2){let t=n.$implicit;f("statistic",t)}}function It(e,n){if(e&1&&(i(0,"div",0),M(1,At,1,1,"app-statistic-card",5,Et),r()),e&2){let t=S();c(),x(t.statisticsService.statistics())}}var A=class e{statisticsService=d(w);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-statistics-list"]],decls:2,vars:1,consts:[[1,"statistics-grid"],[1,"skeleton-stat-card"],[1,"skeleton","skeleton-icon-row"],[1,"skeleton","skeleton-value"],[1,"skeleton","skeleton-label"],[3,"statistic"]],template:function(t,a){t&1&&y(0,Tt,3,1,"div",0)(1,It,3,0,"div",0),t&2&&_(a.statisticsService.isLoading()?0:1)},dependencies:[T],styles:[".statistics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem}.skeleton-stat-card[_ngcontent-%COMP%]{background:var(--color-primary-contrast);border-radius:var(--radius-lg);padding:1rem 2rem;box-shadow:0 4px 8px #0000001f;display:flex;flex-direction:column;gap:.6rem}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-icon-row[_ngcontent-%COMP%]{height:16px;width:55%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-value[_ngcontent-%COMP%]{height:44px;width:40%}.skeleton-stat-card[_ngcontent-%COMP%]   .skeleton-label[_ngcontent-%COMP%]{height:14px;width:70%}"]})};var C=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-analytics-card-placeholder"]],decls:27,vars:0,consts:[[1,"chart-empty"],[2,"width","100%"],[1,"fake-bars"],[1,"fake-bar-group"],[1,"fake-bar",2,"height","60px"],[1,"fake-bar",2,"height","80px"],[1,"fake-bar",2,"height","40px"],[1,"fake-bar",2,"height","55px"],[1,"fake-bar",2,"height","25px"],[1,"fake-bar",2,"height","70px"],[1,"fake-bar",2,"height","45px"],[1,"fake-bar",2,"height","30px"],[1,"x-axis"],[1,"empty-icon"],["width","18","height","18","viewBox","0 0 18 18","fill","none","stroke","#e3783e","stroke-width","1.8"],["points","2,13 6,8 10,10 14,4"],["x1","14","y1","4","x2","14","y2","8"],["x1","14","y1","4","x2","10","y2","4"],[1,"empty-title"],[1,"empty-sub"]],template:function(t,a){t&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),u(4,"div",4)(5,"div",5)(6,"div",6),g(),p(7,"div",3),u(8,"div",6)(9,"div",7)(10,"div",8),g(),p(11,"div",3),u(12,"div",9)(13,"div",10)(14,"div",11),g()(),u(15,"div",12),g(),p(16,"div",13),Z(),p(17,"svg",14),u(18,"polyline",15)(19,"line",16)(20,"line",17),g()(),q(),p(21,"div",18),o(22,"No data yet"),g(),p(23,"div",19),o(24,"Create tasks on this board"),u(25,"br"),o(26,"and data will appear here."),g()())},styles:["[_nghost-%COMP%]   .chart-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:10px 0 20px}[_nghost-%COMP%]   .fake-bars[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:1.5rem;height:100px;position:relative;width:100%;padding:0 16px;justify-content:center}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]{display:flex;gap:3px;align-items:flex-end}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]{width:14px;border-radius:5px 5px 0 0;background:#f0e9de;animation:_ngcontent-%COMP%_pulse 1.8s ease-in-out infinite}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}[_nghost-%COMP%]   .fake-bar[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(2)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.15s}[_nghost-%COMP%]   .fake-bar-group[_ngcontent-%COMP%]:nth-child(3)   .fake-bar[_ngcontent-%COMP%]{animation-delay:.3s}[_nghost-%COMP%]   .x-axis[_ngcontent-%COMP%]{width:100%;height:1px;background:#ede5d8;margin-top:0}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:.5}50%{opacity:1}}[_nghost-%COMP%]   .empty-icon[_ngcontent-%COMP%]{margin-top:1rem;width:36px;height:36px;border-radius:10px;background:#fef0e8;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .empty-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#212121}[_nghost-%COMP%]   .empty-sub[_ngcontent-%COMP%]{font-size:11.5px;color:#9a8070;text-align:center;line-height:1.5}"]})};function Bt(e,n){if(e&1&&m(0,"canvas",0),e&2){let t=S();f("data",t.barChartData())("options",t.barChartOptions)("type",t.barChartType)}}function Rt(e,n){e&1&&m(0,"app-analytics-card-placeholder")}var I=class e{statusChartData=h();totalTasks=h(0);barChartData=st(()=>({labels:this.statusChartData()?.labels,datasets:[...(this.statusChartData()?.datasets??[]).map(n=>({label:n.label,data:n.data,backgroundColor:n.label==="Low"?"rgba(56, 142, 60, 0.75)":n.label==="Medium"?"rgba(245, 124, 0, 0.75)":n.label==="High"?"rgba(211, 47, 47, 0.75)":"rgba(158,158,158,0.75)",borderColor:n.label==="Low"?"#388E3C":n.label==="Medium"?"#F57C00":n.label==="High"?"#D32F2F":"#9E9E9E",borderWidth:1,borderRadius:4,barThickness:32,maxBarThickness:28}))]}));barChartOptions={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom",labels:{color:"#424242",font:{size:11},boxWidth:12,boxHeight:12,padding:20}},title:{display:!0,align:"start",font:{size:15,weight:"bold"},color:"#212121",padding:{bottom:64}},tooltip:{callbacks:{label:n=>` ${n.dataset.label} priority: ${n.parsed.y} task(s)`}}},scales:{x:{grid:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},title:{display:!1},border:{display:!1}}}};barChartType="bar";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-tasks-bar-chart"]],inputs:{statusChartData:[1,"statusChartData"],totalTasks:[1,"totalTasks"]},decls:2,vars:1,consts:[["baseChart","",3,"data","options","type"]],template:function(t,a){t&1&&y(0,Bt,1,3,"canvas",0)(1,Rt,1,0,"app-analytics-card-placeholder"),t&2&&_(a.totalTasks()>0?0:1)},dependencies:[ht,C],encapsulation:2})};var B=class e{httpClient=d(dt);_analytics=F({});analytics=this._analytics.asReadonly();isLoading=F(!0);getAnalytics(n){return this._analytics.set({}),this.isLoading.set(!0),this.httpClient.get(`boards/${n}/analytics`).pipe(G(t=>{this._analytics.set(t),this.isLoading.set(!1)}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"})};function zt(e,n){e&1&&u(0,"div",2)}var Ft=new O("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var xt=(()=>{class e{_elementRef=d(K);_ngZone=d(W);_changeDetectorRef=d(ct);_renderer=d(Q);_cleanupTransitionEnd;constructor(){let t=mt(),a=d(Ft,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),a&&(a.color&&(this.color=this._defaultColor=a.color),this.mode=a.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=Mt(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Mt(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new U;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=l({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(a,s){a&2&&(tt("aria-valuenow",s._isIndeterminate()?null:s.value)("mode",s.mode),P("mat-"+s.color),E("_mat-animation-noopable",s._isNoopAnimation)("mdc-linear-progress--animation-ready",!s._isNoopAnimation)("mdc-linear-progress--indeterminate",s._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",X],bufferValue:[2,"bufferValue","bufferValue",X],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(a,s){a&1&&(p(0,"div",0),u(1,"div",1),y(2,zt,1,0,"div",2),g(),p(3,"div",3),u(4,"span",4),g(),p(5,"div",5),u(6,"span",4),g()),a&2&&(c(),j("flex-basis",s._getBufferBarFlexBasis()),c(),_(s.mode==="buffer"?2:-1),c(),j("transform",s._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return e})();function Mt(e,n=0,t=100){return Math.max(n,Math.min(t,e))}var R=class e{completionRateData=h();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-completion-rate"]],inputs:{completionRateData:[1,"completionRateData"]},decls:25,vars:5,consts:[[1,"container"],[1,"completion-rate"],[1,"completion-rate-value"],[1,"completion-rate-label"],["mode","determinate",3,"value"],[1,"completion-rate-details"],[1,"detail-item"],[1,"detail-value"],[1,"detail-label"]],template:function(t,a){if(t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),o(3),r(),i(4,"div",3),o(5,"of tasks completed"),r()(),i(6,"div"),m(7,"mat-progress-bar",4),r(),i(8,"div")(9,"div",5)(10,"div",6)(11,"div",7),o(12),r(),i(13,"div",8),o(14,"Completed"),r()(),i(15,"div",6)(16,"div",7),o(17),r(),i(18,"div",8),o(19,"In Progress"),r()(),i(20,"div",6)(21,"div",7),o(22),r(),i(23,"div",8),o(24,"To Do"),r()()()()()),t&2){let s,D,L,V,H;c(3),it("",((s=a.completionRateData())==null?null:s.completionRate)||0,"%"),c(4),f("value",((D=a.completionRateData())==null?null:D.completionRate)||0),c(5),b(((L=a.completionRateData())==null?null:L.doneCount)||0),c(5),b(((V=a.completionRateData())==null?null:V.inProgressCount)||0),c(5),b(((H=a.completionRateData())==null?null:H.todoCount)||0)}},dependencies:[xt],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:end;gap:1rem}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]{text-align:center;padding:1rem 0}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-value[_ngcontent-%COMP%]{font-size:3.5rem;color:var(--color-primary);font-weight:800;letter-spacing:-2px;line-height:1.4}[_nghost-%COMP%]   .completion-rate[_ngcontent-%COMP%]   .completion-rate-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-neutral)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:2rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--color-dark)}[_nghost-%COMP%]   .completion-rate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--color-neutral)}"]})};var Nt=(e,n)=>n._id;function jt(e,n){if(e&1&&(i(0,"mat-option",4)(1,"span"),o(2),r()()),e&2){let t=n.$implicit;f("value",t._id),c(2),b(t.name)}}var Pt=class e{taskService=d(vt);boardsService=d(gt);analyticsService=d(B);statisticsService=d(w);constructor(){this.boardsService.loadBoards().subscribe(),J(()=>{this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id??"").subscribe(),this.statisticsService.reload(this.boardsService.activeBoard()?._id??"")})}onBoardChange(n){let t=this.boardsService.boards().find(a=>a._id===n);t&&this.boardsService.setActiveBoard(t)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-analytics"]],decls:36,vars:4,consts:[[1,"header","d-flex","justify-content-between","align-items-center","mb-5"],[1,"subtitle"],["appearance","outline","subscriptSizing","dynamic",1,"filter-select"],["placeholder","Board","hideSingleSelectionIndicator","true",3,"selectionChange","value"],[3,"value"],[1,"divider"],[1,"row"],[1,"bar-chart-container","col"],[1,"col-header","d-flex","justify-content-between","align-items-center"],[1,"col-title"],[1,"col-hint"],[3,"statusChartData","totalTasks"],[1,"completion-rate-container","col"],[3,"completionRateData"],[1,"doughnut-chart-container","col"],[1,"tasks-per-member-container","col"],[1,"recent-activity-container","col"]],template:function(t,a){if(t&1&&(i(0,"div",0)(1,"div")(2,"p",1),o(3,"Gain insights into your project performance and team productivity"),r()(),i(4,"div")(5,"mat-form-field",2)(6,"mat-select",3),at("selectionChange",function(D){return a.onBoardChange(D.value)}),M(7,jt,3,2,"mat-option",4,Nt),r()()()(),m(9,"app-statistics-list")(10,"div",5),i(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9),o(15,"Tasks by Status and Priority"),r(),i(16,"div",10),o(17,"Per active board"),r()(),m(18,"app-tasks-bar-chart",11),r(),i(19,"div",12)(20,"div",9),o(21,"Completion Rate"),r(),m(22,"app-completion-rate",13),r()(),i(23,"div",6)(24,"div",14)(25,"div",9),o(26,"Priority Breakdown"),r(),m(27,"app-analytics-card-placeholder"),r(),i(28,"div",15)(29,"div",9),o(30,"Tasks per Member"),r(),m(31,"app-analytics-card-placeholder"),r(),i(32,"div",16)(33,"div",9),o(34,"Recent Activity"),r(),m(35,"app-analytics-card-placeholder"),r()()),t&2){let s;c(6),f("value",(s=a.boardsService.activeBoard())==null?null:s._id),c(),x(a.boardsService.boards()),c(11),f("statusChartData",a.analyticsService.analytics().statusChartData)("totalTasks",a.analyticsService.analytics().totalTasks),c(4),f("completionRateData",a.analyticsService.analytics().completionRateData)}},dependencies:[A,I,C,ut,bt,ft,lt,R],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:var(--color-neutral)}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;gap:1.5rem;margin-bottom:1.5rem}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1;background-color:var(--color-primary-contrast);padding:1.5rem;border-radius:var(--radius-lg);box-shadow:0 2px 4px #00000014}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:var(--color-dark);margin-bottom:1rem}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--color-neutral)}"]})};export{Pt as AnalyticsComponent};
