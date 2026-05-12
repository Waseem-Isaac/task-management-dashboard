import{a as Xe,b as Ye}from"./chunk-RXOKFJFA.js";import{a as et,b as mt}from"./chunk-UPMYJIPS.js";import{b as fe,c as tt,d as nt,e as it,f as rt}from"./chunk-2S4ZJEVN.js";import{b as ot,d as st,e as dt,f as lt}from"./chunk-USMIOXMM.js";import{a as at}from"./chunk-GC2OQTYY.js";import{c as ct}from"./chunk-SAGAFVOV.js";import"./chunk-ZKG5SQAH.js";import{a as Ge,e as Ze}from"./chunk-752GA5II.js";import{a as K,b as $}from"./chunk-P2PEHIBQ.js";import{B as F,K as q,Z as Ue,d as Ve,fa as qe,g as Le,ha as Ke,ia as $e,j as ue,ja as I,ka as Je,l as je,la as he,p as ze,q as Ne,u as He}from"./chunk-ACKHIWRQ.js";import{$ as L,Da as R,G as re,Gb as Pe,I as v,Ja as le,Ka as b,La as w,Mb as W,N as Me,O as xe,P as ae,Qa as h,R as r,Ra as a,Sa as o,Ta as f,U as x,V as S,Y as oe,Ya as D,Z as Se,_a as p,aa as j,ab as y,bb as E,c as C,cb as _,cc as Be,da as z,db as ce,dc as Ae,eb as me,ec as Ie,fb as T,fc as U,ga as N,gb as O,gc as G,ha as H,hc as Re,ia as De,jc as Z,kb as Oe,l as P,lb as Q,mb as g,oa as se,ob as l,pa as c,pb as pe,qa as de,qb as Fe,t as ye,ta as Ee,u as M,x as Ce,xb as B,xc as Qe,y as ke,ya as u,yb as A,yc as We,z as ie,za as Te}from"./chunk-AZP6SPPI.js";import"./chunk-LG6SK6BE.js";var ee=["*"],gt=["content"],bt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],wt=["mat-drawer","mat-drawer-content","*"];function yt(i,s){if(i&1){let e=D();a(0,"div",1),p("click",function(){x(e);let n=y();return S(n._onBackdropClicked())}),o()}if(i&2){let e=y();g("mat-drawer-shown",e._isShowingBackdrop())}}function Ct(i,s){i&1&&(a(0,"mat-drawer-content"),_(1,2),o())}var kt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Mt=["mat-sidenav","mat-sidenav-content","*"];function xt(i,s){if(i&1){let e=D();a(0,"div",1),p("click",function(){x(e);let n=y();return S(n._onBackdropClicked())}),o()}if(i&2){let e=y();g("mat-drawer-shown",e._isShowingBackdrop())}}function St(i,s){i&1&&(a(0,"mat-sidenav-content"),_(1,2),o())}var Dt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Et=new ae("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ge=new ae("MAT_DRAWER_CONTAINER"),J=(()=>{class i extends I{_platform=r(Z);_changeDetectorRef=r(W);_container=r(ve);constructor(){let e=r(H),t=r($e),n=r(j);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Q("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[B([{provide:I,useExisting:i}]),R],ngContentSelectors:ee,decls:1,vars:0,template:function(t,n){t&1&&(E(),_(0))},encapsulation:2,changeDetection:0})}return i})(),_e=(()=>{class i{_elementRef=r(H);_focusTrapFactory=r(Ne);_focusMonitor=r(je);_platform=r(Z);_ngZone=r(j);_renderer=r(Ee);_interactivityChecker=r(ze);_doc=r(Se);_container=r(ge,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=F(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=F(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(F(e))}_opened=z(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new L(!0);_openedStream=this.openedChange.pipe(M(e=>e),P(()=>{}));openedStart=this._animationStarted.pipe(M(()=>this.opened),ie(void 0));_closedStream=this.openedChange.pipe(M(e=>!e),P(()=>{}));closedStart=this._animationStarted.pipe(M(()=>!this.opened),ie(void 0));_destroyed=new C;onPositionChanged=new L;_content;_modeChanged=new C;_injector=r(oe);_changeDetectorRef=r(W);constructor(){this.openedChange.pipe(v(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!He(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),m(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),m=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":de(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(ke(1)).subscribe(m=>d(m?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&me(gt,5),t&2){let d;T(d=O())&&(n._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(le("align",null)("tabIndex",n.mode!=="side"?"-1":null),Q("visibility",!n._container&&!n.opened?"hidden":null),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),_(2),o())},dependencies:[I],encapsulation:2,changeDetection:0})}return i})(),ve=(()=>{class i{_dir=r(Qe,{optional:!0});_element=r(H);_ngZone=r(j);_changeDetectorRef=r(W);_animationDisabled=Le();_transitionsEnabled=!1;_allDrawers;_drawers=new De;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=F(e)}_autosize=r(Et);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:F(e)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=r(oe);constructor(){let e=r(Z),t=r(Je);this._dir?.change.pipe(v(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(v(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(re(this._allDrawers),v(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(re(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ce(10),v(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(v(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(v(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(v(this._drawers.changes)).subscribe(()=>{de({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(v(ye(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&ce(d,J,5)(d,_e,5),t&2){let m;T(m=O())&&(n._content=m.first),T(m=O())&&(n._allDrawers=m)}},viewQuery:function(t,n){if(t&1&&me(J,5),t&2){let d;T(d=O())&&(n._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[B([{provide:ge,useExisting:i}])],ngContentSelectors:wt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(bt),b(0,yt,1,2,"div",0),_(1),_(2,1),b(3,Ct,2,0,"mat-drawer-content")),t&2&&(w(n.hasBackdrop?0:-1),c(3),w(n._content?-1:3))},dependencies:[J],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})(),X=(()=>{class i extends J{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=u({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[B([{provide:I,useExisting:i}]),R],ngContentSelectors:ee,decls:1,vars:0,template:function(t,n){t&1&&(E(),_(0))},encapsulation:2,changeDetection:0})}return i})(),be=(()=>{class i extends _e{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=F(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ue(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ue(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=u({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(le("tabIndex",n.mode!=="side"?"-1":null)("align",null),Q("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[B([{provide:_e,useExisting:i}]),R],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),_(2),o())},dependencies:[I],encapsulation:2,changeDetection:0})}return i})(),pt=(()=>{class i extends ve{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=u({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&ce(d,X,5)(d,be,5),t&2){let m;T(m=O())&&(n._content=m.first),T(m=O())&&(n._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[B([{provide:ge,useExisting:i},{provide:ve,useExisting:i}]),R],ngContentSelectors:Mt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(kt),b(0,xt,1,2,"div",0),_(1),_(2,1),b(3,St,2,0,"mat-sidenav-content")),t&2&&(w(n.hasBackdrop?0:-1),c(3),w(n._content?-1:3))},dependencies:[X],styles:[Dt],encapsulation:2,changeDetection:0})}return i})(),ut=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Te({type:i});static \u0275inj=xe({imports:[he,We,he]})}return i})();var k=class i{breakpointObserver=r(Ve);router=r(U);activatedRoute=r(Ae);isMobile=fe(this.breakpointObserver.observe("(max-width: 992px)").pipe(P(s=>s.matches)),{initialValue:!1});sidenavOpen=z(!1);pageTitle=fe(this.router.events.pipe(M(s=>s instanceof Be),P(()=>{let s=this.activatedRoute;for(;s.firstChild;)s=s.firstChild;return s.snapshot.data.title??""})),{initialValue:""});toggle(){this.sidenavOpen.update(s=>!s)}close(){this.sidenavOpen.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Me({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ft(i,s){if(i&1){let e=D();a(0,"button",15),p("click",function(){x(e);let n=y();return S(n.layoutService.toggle())}),a(1,"mat-icon"),l(2,"menu"),o()()}}var te=class i{searchService=r(et);layoutService=r(k);authService=r(q);usersService=r(at);sidenavOpen=Pe(()=>!this.layoutService.isMobile()||this.layoutService.sidenavOpen());searchTerm=this.searchService.searchTerm;onSearchChange(s){this.searchService.search(s)}clearSearch(){this.searchService.clear()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=u({type:i,selectors:[["app-header"]],hostVars:2,hostBindings:function(e,t){e&2&&g("sidenav-open",t.sidenavOpen())},decls:28,vars:7,consts:[["userMenu","matMenu"],["color","primary"],["mat-icon-button","","aria-label","Toggle menu"],[1,"page-title"],["mat-icon-button","","aria-label","User menu",1,"d-flex","align-items-center",3,"matMenuTriggerFor"],[1,"user-avatar"],["alt","",3,"src"],[1,"header-user-menu"],[1,"header",3,"click"],[1,"user-avatar","lg","p-1"],[1,"info"],[1,"name","mb-1"],[1,"email"],["mat-menu-item","","routerLink","/profile"],["mat-menu-item","",3,"click"],["mat-icon-button","","aria-label","Toggle menu",3,"click"]],template:function(e,t){if(e&1&&(a(0,"mat-toolbar",1),b(1,Ft,3,0,"button",2),a(2,"div",3),l(3),o(),a(4,"button",4)(5,"div",5),f(6,"img",6),o()(),a(7,"mat-menu",null,0)(9,"div",7)(10,"div",8),p("click",function(d){return d.stopPropagation()}),a(11,"div",9),f(12,"img",6),o(),a(13,"div",10)(14,"div",11),l(15),o(),a(16,"div",12),l(17),o()()(),a(18,"button",13)(19,"mat-icon"),l(20,"person_outline"),o(),a(21,"span"),l(22,"Profile"),o()(),a(23,"button",14),p("click",function(){return t.authService.logout()}),a(24,"mat-icon"),l(25,"logout"),o(),a(26,"span"),l(27,"Logout"),o()()()()()),e&2){let n,d,m,we,_t=Oe(8);c(),w(t.layoutService.isMobile()?1:-1),c(2),Fe(" ",t.layoutService.pageTitle()," "),c(),h("matMenuTriggerFor",_t),c(2),h("src",(n=t.authService.currentUser())==null?null:n.avatarUrl,se),c(6),h("src",(d=t.authService.currentUser())==null?null:d.avatarUrl,se),c(3),pe((m=t.authService.currentUser())==null?null:m.name),c(2),pe((we=t.authService.currentUser())==null?null:we.email)}},dependencies:[G,Ye,Xe,Ge,Ze,$,K,Ke,qe,Ue,rt,nt,tt,it],styles:["[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;z-index:100}.sidenav-open[_nghost-%COMP%]{left:var(--sidenav-width)}[_nghost-%COMP%]{border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-title[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;letter-spacing:.025em;display:flex;align-items:center;gap:.5rem;line-height:0}"]})};var V=()=>({exact:!0});function Pt(i,s){if(i&1){let e=D();a(0,"div",11)(1,"button",12),p("click",function(){x(e);let n=y();return S(n.openAddBoardDialog())}),a(2,"span",13)(3,"mat-icon",13),l(4,"add"),o(),l(5," New Board "),o()()()}}var ne=class i{layout=r(k);dialog=r(ct);authService=r(q);router=r(U);openAddBoardDialog(){this.dialog.open(mt,{panelClass:["app-dialog","sm"],disableClose:!0}).afterClosed().subscribe(e=>{console.log("Add Board dialog closed"),e&&this.router.navigate(["/board"])})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=u({type:i,selectors:[["app-sidenav"]],decls:28,vars:11,consts:[["routerLink","/",1,"logo-area"],[1,"logo-sq"],["width","100%","src","icons/logo-main.png","alt","Logo"],[1,"nav-items"],["mat-list-item","","routerLink","/board","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLinkActiveOptions"],[1,"nav-icon"],[1,"mt-2","mb-2"],["mat-list-item","","routerLink","/team","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLinkActiveOptions"],["mat-list-item","","routerLink","/users","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLinkActiveOptions"],["mat-list-item","","routerLink","/transfer-requests","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLinkActiveOptions"],["mat-list-item","","routerLink","/analytics","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLinkActiveOptions"],[1,"sidebar-footer"],[1,"m-4","btn-primary","full-width",3,"click"],[1,"d-flex","align-items-center","justify-content-center"]],template:function(e,t){if(e&1&&(a(0,"mat-nav-list")(1,"a",0)(2,"div",1),f(3,"img",2),o()(),a(4,"div",3)(5,"a",4),p("click",function(){return t.layout.isMobile()&&t.layout.close()}),a(6,"mat-icon",5),l(7,"dashboard"),o(),l(8," Board "),o(),f(9,"mat-divider",6),a(10,"a",7),p("click",function(){return t.layout.isMobile()&&t.layout.close()}),a(11,"mat-icon",5),l(12,"group"),o(),l(13," My Team "),o(),a(14,"a",8),p("click",function(){return t.layout.isMobile()&&t.layout.close()}),a(15,"mat-icon",5),l(16,"person"),o(),l(17," People "),o(),a(18,"a",9),p("click",function(){return t.layout.isMobile()&&t.layout.close()}),a(19,"mat-icon",5),l(20,"swap_horiz"),o(),l(21," Transfer Requests "),o(),f(22,"mat-divider",6),a(23,"a",10),p("click",function(){return t.layout.isMobile()&&t.layout.close()}),a(24,"mat-icon",5),l(25,"show_chart"),o(),l(26," Analytics "),o()(),b(27,Pt,6,0,"div",11),o()),e&2){let n;c(5),h("routerLinkActiveOptions",A(6,V)),c(5),h("routerLinkActiveOptions",A(7,V)),c(4),h("routerLinkActiveOptions",A(8,V)),c(4),h("routerLinkActiveOptions",A(9,V)),c(5),h("routerLinkActiveOptions",A(10,V)),c(4),w(((n=t.authService.currentUser())==null?null:n.role)==="TEAM_LEAD"?27:-1)}},dependencies:[G,Re,lt,dt,st,ot,$,K],styles:["[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding:0;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:.2rem;display:flex;align-items:center;border:none;--mat-list-list-item-label-text-size: .75rem;--mat-list-list-item-label-text-weight: 500;--mat-list-list-item-label-text-color: #9a8070}[_nghost-%COMP%]   .nav-item.active-nav-item[_ngcontent-%COMP%]{background:var(--color-primary-active)!important;color:var(--color-primary)!important;--mat-list-list-item-label-text-color: var(--color-primary);--mat-list-list-item-label-text-weight: 700}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(button){background:var(--menu-item-color-hover)!important;color:var(--color-primary)!important}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]     .mdc-list-item__primary-text{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]{padding:0 16px;height:var(--mat-toolbar-standard-height);border-bottom:1px solid var(--color-light-grey);display:flex;align-items:center;gap:9px;color:var(--color-primary);font-weight:700;font-size:1rem;line-height:1;text-decoration:none}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-sq[_ngcontent-%COMP%]{width:110px}[_nghost-%COMP%]   .nav-items[_ngcontent-%COMP%]{padding:.5rem;flex:1;display:flex;gap:2px;flex-direction:column}[_nghost-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{padding:1rem;border-top:1px solid #f0e9de}"]})};var ft=class i{layout=r(k);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=u({type:i,selectors:[["app-shell"]],decls:7,vars:2,consts:[[1,"app-container"],[1,"app-sidenav",3,"openedChange","mode","opened"],[1,"main-content"]],template:function(e,t){e&1&&(f(0,"app-header"),a(1,"mat-sidenav-container",0)(2,"mat-sidenav",1),p("openedChange",function(d){return t.layout.sidenavOpen.set(d)}),f(3,"app-sidenav"),o(),a(4,"mat-sidenav-content")(5,"main",2),f(6,"router-outlet"),o()()()),e&2&&(c(2),h("mode",t.layout.isMobile()?"over":"side")("opened",t.layout.isMobile()?t.layout.sidenavOpen():!0))},dependencies:[Ie,ut,be,pt,X,te,ne],styles:[".app-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]{--mat-sidenav-container-shape: 0}.app-sidenav[_ngcontent-%COMP%]{width:var(--sidenav-width);border-right:1px solid var(--color-light-grey)}.main-content[_ngcontent-%COMP%]{padding:calc(var(--mat-toolbar-standard-height) + 1.5rem) 1.5rem 1.5rem}"]})};export{ft as ShellComponent};
