import{a as Ye,b as et}from"./chunk-VTK6NRSG.js";import{a as ue,b as tt,c as nt,d as rt,e as it,f as at,g as mt}from"./chunk-YYEIPI2K.js";import{a as ot,d as lt}from"./chunk-EN4M2LUC.js";import{c as st,d as dt,e as ct}from"./chunk-TXBFWXQN.js";import{b as qe}from"./chunk-246I7AD7.js";import{a as q,c as $e,e as Ke}from"./chunk-YLWIDSCZ.js";import"./chunk-L7EWM3FE.js";import"./chunk-K72INF2D.js";import{a as Ze}from"./chunk-GJXKZFMG.js";import{a as $,b as K}from"./chunk-5QAXA3ML.js";import{B as O,Y as Ge,d as je,ea as Je,fa as I,g as ze,ga as Xe,ha as he,j as pe,l as Le,p as Ne,q as He,u as Qe}from"./chunk-BRQCFWI3.js";import{$ as z,$a as le,$b as Re,Cb as Pe,D as ie,F as f,Fa as ce,Ga as v,Ha as b,Ib as W,K as Me,Ka as Te,L as xe,La as Fe,M as ae,Ma as x,Na as a,O as i,Oa as s,Pa as w,Q as C,R as M,U as oe,Ua as k,V as ke,Wa as h,X as V,Y as j,Ya as _,Za as E,Zb as Ie,_a as u,_b as Ae,ab as me,ac as U,bb as T,bc as G,c as y,ca as L,cb as F,cc as Ve,da as N,ea as Se,ec as Z,gb as Oe,hb as H,ib as g,k as B,ka as se,kb as m,la as c,lb as R,ma as de,mb as Q,pa as De,q as we,r as D,sc as We,tb as P,tc as Ue,u as ye,ua as p,ub as Be,v as Ce,va as Ee,w as re,za as A}from"./chunk-Z3XJ2XXR.js";import"./chunk-DS6P5DKD.js";var ee=["*"],vt=["content"],bt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],wt=["mat-drawer","mat-drawer-content","*"];function yt(r,o){if(r&1){let e=k();a(0,"div",1),h("click",function(){C(e);let n=_();return M(n._onBackdropClicked())}),s()}if(r&2){let e=_();g("mat-drawer-shown",e._isShowingBackdrop())}}function Ct(r,o){r&1&&(a(0,"mat-drawer-content"),u(1,2),s())}var Mt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],xt=["mat-sidenav","mat-sidenav-content","*"];function kt(r,o){if(r&1){let e=k();a(0,"div",1),h("click",function(){C(e);let n=_();return M(n._onBackdropClicked())}),s()}if(r&2){let e=_();g("mat-drawer-shown",e._isShowingBackdrop())}}function St(r,o){r&1&&(a(0,"mat-sidenav-content"),u(1,2),s())}var Dt=`.mat-drawer-container {
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
`;var Et=new ae("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ge=new ae("MAT_DRAWER_CONTAINER"),J=(()=>{class r extends I{_platform=i(Z);_changeDetectorRef=i(W);_container=i(_e);constructor(){let e=i(N),t=i(Je),n=i(j);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(H("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[P([{provide:I,useExisting:r}]),A],ngContentSelectors:ee,decls:1,vars:0,template:function(t,n){t&1&&(E(),u(0))},encapsulation:2,changeDetection:0})}return r})(),fe=(()=>{class r{_elementRef=i(N);_focusTrapFactory=i(He);_focusMonitor=i(Le);_platform=i(Z);_ngZone=i(j);_renderer=i(De);_interactivityChecker=i(Ne);_doc=i(ke);_container=i(ge,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=O(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=O(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(O(e))}_opened=z(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new V(!0);_openedStream=this.openedChange.pipe(D(e=>e),B(()=>{}));openedStart=this._animationStarted.pipe(D(()=>this.opened),re(void 0));_closedStream=this.openedChange.pipe(D(e=>!e),B(()=>{}));closedStart=this._animationStarted.pipe(D(()=>!this.opened),re(void 0));_destroyed=new y;onPositionChanged=new V;_content;_modeChanged=new y;_injector=i(oe);_changeDetectorRef=i(W);constructor(){this.openedChange.pipe(f(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Qe(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),l(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),l=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":de(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(Ce(1)).subscribe(l=>d(l?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&me(vt,5),t&2){let d;T(d=F())&&(n._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(ce("align",null)("tabIndex",n.mode!=="side"?"-1":null),H("visibility",!n._container&&!n.opened?"hidden":null),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),u(2),s())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),_e=(()=>{class r{_dir=i(We,{optional:!0});_element=i(N);_ngZone=i(j);_changeDetectorRef=i(W);_animationDisabled=ze();_transitionsEnabled=!1;_allDrawers;_drawers=new Se;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=O(e)}_autosize=i(Et);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:O(e)}_backdropOverride=null;backdropClick=new V;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=i(oe);constructor(){let e=i(Z),t=i(Xe);this._dir?.change.pipe(f(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(f(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ie(this._allDrawers),f(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ie(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ye(10),f(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(f(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(f(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(f(this._drawers.changes)).subscribe(()=>{de({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(f(we(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&le(d,J,5)(d,fe,5),t&2){let l;T(l=F())&&(n._content=l.first),T(l=F())&&(n._allDrawers=l)}},viewQuery:function(t,n){if(t&1&&me(J,5),t&2){let d;T(d=F())&&(n._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[P([{provide:ge,useExisting:r}])],ngContentSelectors:wt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(bt),v(0,yt,1,2,"div",0),u(1),u(2,1),v(3,Ct,2,0,"mat-drawer-content")),t&2&&(b(n.hasBackdrop?0:-1),c(3),b(n._content?-1:3))},dependencies:[J],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return r})(),X=(()=>{class r extends J{static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[P([{provide:I,useExisting:r}]),A],ngContentSelectors:ee,decls:1,vars:0,template:function(t,n){t&1&&(E(),u(0))},encapsulation:2,changeDetection:0})}return r})(),ve=(()=>{class r extends fe{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=O(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=pe(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=pe(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(ce("tabIndex",n.mode!=="side"?"-1":null)("align",null),H("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[P([{provide:fe,useExisting:r}]),A],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),u(2),s())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),pt=(()=>{class r extends _e{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&le(d,X,5)(d,ve,5),t&2){let l;T(l=F())&&(n._content=l.first),T(l=F())&&(n._allDrawers=l)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[P([{provide:ge,useExisting:r},{provide:_e,useExisting:r}]),A],ngContentSelectors:xt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(Mt),v(0,kt,1,2,"div",0),u(1),u(2,1),v(3,St,2,0,"mat-sidenav-content")),t&2&&(b(n.hasBackdrop?0:-1),c(3),b(n._content?-1:3))},dependencies:[X],styles:[Dt],encapsulation:2,changeDetection:0})}return r})(),ht=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Ee({type:r});static \u0275inj=xe({imports:[he,Ue,he]})}return r})();var S=class r{breakpointObserver=i(je);router=i(U);activatedRoute=i(Ae);isMobile=ue(this.breakpointObserver.observe("(max-width: 992px)").pipe(B(o=>o.matches)),{initialValue:!1});sidenavOpen=z(!1);pageTitle=ue(this.router.events.pipe(D(o=>o instanceof Ie),B(()=>{let o=this.activatedRoute;for(;o.firstChild;)o=o.firstChild;return o.snapshot.data.title??""})),{initialValue:""});toggle(){this.sidenavOpen.update(o=>!o)}close(){this.sidenavOpen.set(!1)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=Me({token:r,factory:r.\u0275fac,providedIn:"root"})};function Ot(r,o){if(r&1){let e=k();a(0,"button",15),h("click",function(){C(e);let n=_();return M(n.layoutService.toggle())}),a(1,"mat-icon"),m(2,"menu"),s()()}}var te=class r{searchService=i(tt);layoutService=i(S);authService=i(q);usersService=i(ot);sidenavOpen=Pe(()=>!this.layoutService.isMobile()||this.layoutService.sidenavOpen());searchTerm=this.searchService.searchTerm;onSearchChange(o){this.searchService.search(o)}clearSearch(){this.searchService.clear()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-header"]],hostVars:2,hostBindings:function(e,t){e&2&&g("sidenav-open",t.sidenavOpen())},decls:28,vars:7,consts:[["userMenu","matMenu"],["color","primary"],["mat-icon-button","","aria-label","Toggle menu"],[1,"page-title"],["mat-icon-button","","aria-label","User menu",1,"d-flex","align-items-center",3,"matMenuTriggerFor"],[1,"user-avatar"],["alt","",3,"src"],[1,"header-user-menu"],[1,"header",3,"click"],[1,"user-avatar","lg","p-1"],[1,"info"],[1,"name","mb-1"],[1,"email"],["mat-menu-item","","routerLink","/profile"],["mat-menu-item","",3,"click"],["mat-icon-button","","aria-label","Toggle menu",3,"click"]],template:function(e,t){if(e&1&&(a(0,"mat-toolbar",1),v(1,Ot,3,0,"button",2),a(2,"div",3),m(3),s(),a(4,"button",4)(5,"div",5),w(6,"img",6),s()(),a(7,"mat-menu",null,0)(9,"div",7)(10,"div",8),h("click",function(d){return d.stopPropagation()}),a(11,"div",9),w(12,"img",6),s(),a(13,"div",10)(14,"div",11),m(15),s(),a(16,"div",12),m(17),s()()(),a(18,"button",13)(19,"mat-icon"),m(20,"person_outline"),s(),a(21,"span"),m(22,"Profile"),s()(),a(23,"button",14),h("click",function(){return t.authService.logout()}),a(24,"mat-icon"),m(25,"logout"),s(),a(26,"span"),m(27,"Logout"),s()()()()()),e&2){let n,d,l,be,_t=Oe(8);c(),b(t.layoutService.isMobile()?1:-1),c(2),Q(" ",t.layoutService.pageTitle()," "),c(),x("matMenuTriggerFor",_t),c(2),x("src",(n=t.authService.currentUser())==null?null:n.avatarUrl,se),c(6),x("src",(d=t.authService.currentUser())==null?null:d.avatarUrl,se),c(3),R((l=t.authService.currentUser())==null?null:l.name),c(2),R((be=t.authService.currentUser())==null?null:be.email)}},dependencies:[G,et,Ye,Ze,qe,K,$,Ke,$e,Ge,at,rt,nt,it],styles:["[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;z-index:100}.sidenav-open[_nghost-%COMP%]{left:var(--sidenav-width)}[_nghost-%COMP%]{border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-title[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;letter-spacing:.025em;display:flex;align-items:center;gap:.5rem;line-height:0}"]})};var Bt=()=>({exact:!0}),Pt=(r,o)=>o.route;function It(r,o){if(r&1){let e=k();a(0,"a",6),h("click",function(){C(e);let n=_();return M(n.layout.isMobile()&&n.layout.close())}),a(1,"mat-icon",7),m(2),s(),m(3),s()}if(r&2){let e=o.$implicit;x("routerLink",e.route)("routerLinkActiveOptions",Be(4,Bt)),c(2),R(e.matIcon),c(),Q(" ",e.label," ")}}function At(r,o){if(r&1){let e=k();a(0,"div",5)(1,"button",8),h("click",function(){C(e);let n=_();return M(n.openAddBoardDialog())}),a(2,"span",9)(3,"mat-icon",9),m(4,"add"),s(),m(5," New Board "),s()()()}}var ne=class r{layout=i(S);dialog=i(lt);authService=i(q);router=i(U);navItems=[{label:"Board",route:"/board",matIcon:"dashboard"},{label:"Team",route:"/users",matIcon:"supervisor_account"},{label:"Analytics",route:"/analytics",matIcon:"show_chart"}];openAddBoardDialog(){this.dialog.open(mt,{panelClass:["app-dialog","sm"],disableClose:!0}).afterClosed().subscribe(e=>{console.log("Add Board dialog closed"),e&&this.router.navigate(["/board"])})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-sidenav"]],decls:8,vars:1,consts:[["routerLink","/",1,"logo-area"],[1,"logo-sq"],["width","100%","src","icons/logo-main.png","alt","Logo"],[1,"nav-items"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"sidebar-footer"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLink","routerLinkActiveOptions"],[1,"nav-icon"],[1,"m-4","btn-primary","full-width",3,"click"],[1,"d-flex","align-items-center","justify-content-center"]],template:function(e,t){if(e&1&&(a(0,"mat-nav-list")(1,"a",0)(2,"div",1),w(3,"img",2),s()(),a(4,"div",3),Te(5,It,4,5,"a",4,Pt),s(),v(7,At,6,0,"div",5),s()),e&2){let n;c(5),Fe(t.navItems),c(2),b(((n=t.authService.currentUser())==null?null:n.role)==="TEAM_LEAD"?7:-1)}},dependencies:[G,Ve,ct,dt,st,K,$],styles:["[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding:0;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:.2rem;display:flex;align-items:center;border:none;--mat-list-list-item-label-text-size: .75rem;--mat-list-list-item-label-text-weight: 500;--mat-list-list-item-label-text-color: #9a8070}[_nghost-%COMP%]   .nav-item.active-nav-item[_ngcontent-%COMP%]{background:var(--color-primary-active)!important;color:var(--color-primary)!important;--mat-list-list-item-label-text-color: var(--color-primary);--mat-list-list-item-label-text-weight: 700}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(button){background:var(--menu-item-color-hover)!important;color:var(--color-primary)!important}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]     .mdc-list-item__primary-text{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]{padding:0 16px;height:var(--mat-toolbar-standard-height);border-bottom:1px solid var(--color-light-grey);display:flex;align-items:center;gap:9px;color:var(--color-primary);font-weight:700;font-size:1rem;line-height:1;text-decoration:none}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-sq[_ngcontent-%COMP%]{width:110px}[_nghost-%COMP%]   .nav-items[_ngcontent-%COMP%]{padding:.5rem;flex:1;display:flex;gap:2px;flex-direction:column}[_nghost-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{padding:1rem;border-top:1px solid #f0e9de}"]})};var ft=class r{layout=i(S);static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-shell"]],decls:7,vars:2,consts:[[1,"app-container"],[1,"app-sidenav",3,"openedChange","mode","opened"],[1,"main-content"]],template:function(e,t){e&1&&(w(0,"app-header"),a(1,"mat-sidenav-container",0)(2,"mat-sidenav",1),h("openedChange",function(d){return t.layout.sidenavOpen.set(d)}),w(3,"app-sidenav"),s(),a(4,"mat-sidenav-content")(5,"main",2),w(6,"router-outlet"),s()()()),e&2&&(c(2),x("mode",t.layout.isMobile()?"over":"side")("opened",t.layout.isMobile()?t.layout.sidenavOpen():!0))},dependencies:[Re,ht,ve,pt,X,te,ne],styles:[".app-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]{--mat-sidenav-container-shape: 0}.app-sidenav[_ngcontent-%COMP%]{width:var(--sidenav-width);border-right:1px solid var(--color-light-grey)}.main-content[_ngcontent-%COMP%]{padding:calc(var(--mat-toolbar-standard-height) + 1.5rem) 1.5rem 1.5rem}"]})};export{ft as ShellComponent};
