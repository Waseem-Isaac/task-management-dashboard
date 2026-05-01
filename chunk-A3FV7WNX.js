import{c as st,d as dt,e as ct}from"./chunk-G4D6MGSY.js";import{a as Ye,b as et}from"./chunk-4YMFB5GA.js";import{a as tt,b as nt,c as rt,d as it,e as at,i as mt}from"./chunk-XIEXYQ6W.js";import"./chunk-SSSHIUHS.js";import"./chunk-VK5PB7YA.js";import"./chunk-WXCAYD4P.js";import{a as pe}from"./chunk-G2QBHON2.js";import"./chunk-5XQWBQF5.js";import{a as ot,d as lt}from"./chunk-VYNS3WEU.js";import{a as Ze,c as qe}from"./chunk-4WBND33J.js";import{a as Z,b as q}from"./chunk-5NDOI56P.js";import"./chunk-TNA5JN6U.js";import{$ as I,A as O,H as Ue,V as Ge,X as $e,Z as Ke,_ as Je,aa as Xe,ba as me,c as Ve,f as je,i as le,k as ze,o as Le,p as Ne,t as He}from"./chunk-F6VJE22W.js";import{c as Pe,d as Be,e as Ie,f as Ae,g as U,h as Re,j as G,x as Qe,y as We}from"./chunk-J7TADXZS.js";import{B as be,C as we,Cb as S,D as te,Eb as h,Gb as v,Hb as E,Ib as u,Jb as de,Kb as ce,Lb as T,M as ne,Mb as F,Na as ae,O as f,Pa as c,Qb as Te,Rb as H,Sb as _,Ta as oe,U as ye,Ub as m,V as Ce,Vb as R,Wa as xe,Wb as Q,X as re,Z as i,ac as B,bb as p,bc as Fe,ca as k,cb as De,d as b,da as M,ga as ie,gb as A,ha as ke,ka as V,kc as Oe,la as j,n as P,ob as se,pa as z,pb as x,qb as D,rc as W,sa as L,sb as Se,tb as Ee,ua as N,ub as w,va as Me,vb as a,w as ve,wb as s,x as C,xb as g}from"./chunk-BLS3HVHZ.js";import"./chunk-IONH7NRB.js";var X=["*"],vt=["content"],bt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],wt=["mat-drawer","mat-drawer-content","*"];function yt(r,o){if(r&1){let e=S();a(0,"div",1),h("click",function(){k(e);let n=v();return M(n._onBackdropClicked())}),s()}if(r&2){let e=v();_("mat-drawer-shown",e._isShowingBackdrop())}}function Ct(r,o){r&1&&(a(0,"mat-drawer-content"),u(1,2),s())}var kt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Mt=["mat-sidenav","mat-sidenav-content","*"];function xt(r,o){if(r&1){let e=S();a(0,"div",1),h("click",function(){k(e);let n=v();return M(n._onBackdropClicked())}),s()}if(r&2){let e=v();_("mat-drawer-shown",e._isShowingBackdrop())}}function Dt(r,o){r&1&&(a(0,"mat-sidenav-content"),u(1,2),s())}var St=`.mat-drawer-container {
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
`;var Et=new re("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),fe=new re("MAT_DRAWER_CONTAINER"),$=(()=>{class r extends I{_platform=i(G);_changeDetectorRef=i(W);_container=i(ue);constructor(){let e=i(N),t=i(Je),n=i(j);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(H("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),_("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[B([{provide:I,useExisting:r}]),A],ngContentSelectors:X,decls:1,vars:0,template:function(t,n){t&1&&(E(),u(0))},encapsulation:2,changeDetection:0})}return r})(),he=(()=>{class r{_elementRef=i(N);_focusTrapFactory=i(Ne);_focusMonitor=i(ze);_platform=i(G);_ngZone=i(j);_renderer=i(xe);_interactivityChecker=i(Le);_doc=i(ke);_container=i(fe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=O(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=O(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(O(e))}_opened=z(!1);_openedVia=null;_animationStarted=new b;_animationEnd=new b;openedChange=new V(!0);_openedStream=this.openedChange.pipe(C(e=>e),P(()=>{}));openedStart=this._animationStarted.pipe(C(()=>this.opened),te(void 0));_closedStream=this.openedChange.pipe(C(e=>!e),P(()=>{}));closedStart=this._animationStarted.pipe(C(()=>!this.opened),te(void 0));_destroyed=new b;onPositionChanged=new V;_content;_modeChanged=new b;_injector=i(ie);_changeDetectorRef=i(W);constructor(){this.openedChange.pipe(f(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!He(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),l(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),l=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":oe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(we(1)).subscribe(l=>d(l?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&ce(vt,5),t&2){let d;T(d=F())&&(n._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(se("align",null)("tabIndex",n.mode!=="side"?"-1":null),H("visibility",!n._container&&!n.opened?"hidden":null),_("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:X,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),u(2),s())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),ue=(()=>{class r{_dir=i(Qe,{optional:!0});_element=i(N);_ngZone=i(j);_changeDetectorRef=i(W);_animationDisabled=je();_transitionsEnabled=!1;_allDrawers;_drawers=new Me;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=O(e)}_autosize=i(Et);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:O(e)}_backdropOverride=null;backdropClick=new V;_start=null;_end=null;_left=null;_right=null;_destroyed=new b;_doCheckSubject=new b;_contentMargins={left:null,right:null};_contentMarginChanges=new b;get scrollable(){return this._userContent||this._content}_injector=i(ie);constructor(){let e=i(G),t=i(Xe);this._dir?.change.pipe(f(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(f(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ne(this._allDrawers),f(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ne(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(be(10),f(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(f(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(f(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(f(this._drawers.changes)).subscribe(()=>{oe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(f(ve(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=p({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&de(d,$,5)(d,he,5),t&2){let l;T(l=F())&&(n._content=l.first),T(l=F())&&(n._allDrawers=l)}},viewQuery:function(t,n){if(t&1&&ce($,5),t&2){let d;T(d=F())&&(n._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&_("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[B([{provide:fe,useExisting:r}])],ngContentSelectors:wt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(bt),x(0,yt,1,2,"div",0),u(1),u(2,1),x(3,Ct,2,0,"mat-drawer-content")),t&2&&(D(n.hasBackdrop?0:-1),c(3),D(n._content?-1:3))},dependencies:[$],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return r})(),K=(()=>{class r extends ${static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[B([{provide:I,useExisting:r}]),A],ngContentSelectors:X,decls:1,vars:0,template:function(t,n){t&1&&(E(),u(0))},encapsulation:2,changeDetection:0})}return r})(),_e=(()=>{class r extends he{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=O(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=le(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=le(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(se("tabIndex",n.mode!=="side"?"-1":null)("align",null),H("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),_("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[B([{provide:he,useExisting:r}]),A],ngContentSelectors:X,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(E(),a(0,"div",1,0),u(2),s())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),pt=(()=>{class r extends ue{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(r)))(n||r)}})();static \u0275cmp=p({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&de(d,K,5)(d,_e,5),t&2){let l;T(l=F())&&(n._content=l.first),T(l=F())&&(n._allDrawers=l)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&_("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[B([{provide:fe,useExisting:r},{provide:ue,useExisting:r}]),A],ngContentSelectors:Mt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(E(kt),x(0,xt,1,2,"div",0),u(1),u(2,1),x(3,Dt,2,0,"mat-sidenav-content")),t&2&&(D(n.hasBackdrop?0:-1),c(3),D(n._content?-1:3))},dependencies:[K],styles:[St],encapsulation:2,changeDetection:0})}return r})(),ht=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=De({type:r});static \u0275inj=Ce({imports:[me,We,me]})}return r})();var y=class r{breakpointObserver=i(Ve);router=i(Ae);activatedRoute=i(Be);isMobile=pe(this.breakpointObserver.observe("(max-width: 992px)").pipe(P(o=>o.matches)),{initialValue:!1});sidenavOpen=z(!1);pageTitle=pe(this.router.events.pipe(C(o=>o instanceof Pe),P(()=>{let o=this.activatedRoute;for(;o.firstChild;)o=o.firstChild;return o.snapshot.data.title??""})),{initialValue:""});toggle(){this.sidenavOpen.update(o=>!o)}close(){this.sidenavOpen.set(!1)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac,providedIn:"root"})};function Ot(r,o){if(r&1){let e=S();a(0,"button",15),h("click",function(){k(e);let n=v();return M(n.layoutService.toggle())}),a(1,"mat-icon"),m(2,"menu"),s()()}}var Y=class r{searchService=i(tt);layoutService=i(y);authService=i(Ue);usersService=i(ot);sidenavOpen=Oe(()=>!this.layoutService.isMobile()||this.layoutService.sidenavOpen());searchTerm=this.searchService.searchTerm;onSearchChange(o){this.searchService.search(o)}clearSearch(){this.searchService.clear()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-header"]],hostVars:2,hostBindings:function(e,t){e&2&&_("sidenav-open",t.sidenavOpen())},decls:28,vars:7,consts:[["userMenu","matMenu"],["color","primary"],["mat-icon-button","","aria-label","Toggle menu"],[1,"page-title"],["mat-icon-button","","aria-label","User menu",1,"d-flex","align-items-center",3,"matMenuTriggerFor"],[1,"user-avatar"],["alt","",3,"src"],[1,"header-user-menu"],[1,"header",3,"click"],[1,"user-avatar","lg","p-1"],[1,"info"],[1,"name","mb-1"],[1,"email"],["mat-menu-item","","routerLink","/profile"],["mat-menu-item","",3,"click"],["mat-icon-button","","aria-label","Toggle menu",3,"click"]],template:function(e,t){if(e&1&&(a(0,"mat-toolbar",1),x(1,Ot,3,0,"button",2),a(2,"div",3),m(3),s(),a(4,"button",4)(5,"div",5),g(6,"img",6),s()(),a(7,"mat-menu",null,0)(9,"div",7)(10,"div",8),h("click",function(d){return d.stopPropagation()}),a(11,"div",9),g(12,"img",6),s(),a(13,"div",10)(14,"div",11),m(15),s(),a(16,"div",12),m(17),s()()(),a(18,"button",13)(19,"mat-icon"),m(20,"person_outline"),s(),a(21,"span"),m(22,"Profile"),s()(),a(23,"button",14),h("click",function(){return t.authService.logout()}),a(24,"mat-icon"),m(25,"logout"),s(),a(26,"span"),m(27,"Logout"),s()()()()()),e&2){let n,d,l,ge,_t=Te(8);c(),D(t.layoutService.isMobile()?1:-1),c(2),Q(" ",t.layoutService.pageTitle()," "),c(),w("matMenuTriggerFor",_t),c(2),w("src",(n=t.authService.currentUser())==null?null:n.avatarUrl,ae),c(6),w("src",(d=t.authService.currentUser())==null?null:d.avatarUrl,ae),c(3),R((l=t.authService.currentUser())==null?null:l.name),c(2),R((ge=t.authService.currentUser())==null?null:ge.email)}},dependencies:[U,et,Ye,Ze,qe,q,Z,Ke,$e,Ge,at,rt,nt,it],styles:["[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;z-index:100}.sidenav-open[_nghost-%COMP%]{left:var(--sidenav-width)}[_nghost-%COMP%]{border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-title[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;letter-spacing:.025em;display:flex;align-items:center;gap:.5rem;line-height:0}"]})};var Pt=()=>({exact:!0}),Bt=(r,o)=>o.route;function It(r,o){if(r&1){let e=S();a(0,"a",9),h("click",function(){k(e);let n=v();return M(n.layout.isMobile()&&n.layout.close())}),a(1,"mat-icon",10),m(2),s(),m(3),s()}if(r&2){let e=o.$implicit;w("routerLink",e.route)("routerLinkActiveOptions",Fe(4,Pt)),c(2),R(e.matIcon),c(),Q(" ",e.label," ")}}var ee=class r{layout=i(y);dialog=i(lt);navItems=[{label:"Dashboard",route:"/dashboard",matIcon:"dashboard"},{label:"Tasks",route:"/dashboard/tasks",matIcon:"short_text"},{label:"Analytics",route:"/dashboard/analytics",matIcon:"show_chart"},{label:"Team (Users)",route:"/dashboard/users",matIcon:"supervisor_account"}];openAddTaskDialog(){this.dialog.open(mt,{panelClass:"task-dialog",disableClose:!0})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-sidenav"]],decls:15,vars:0,consts:[["routerLink","/",1,"logo-area"],[1,"logo-sq"],["src","icons/logo.svg","alt","Logo"],[1,"logo-name"],[1,"nav-items"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"sidebar-footer"],[1,"m-4","btn-primary","full-width",3,"click"],[1,"d-flex","align-items-center","justify-content-center"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLink","routerLinkActiveOptions"],[1,"nav-icon"]],template:function(e,t){e&1&&(a(0,"mat-nav-list")(1,"a",0)(2,"div",1),g(3,"img",2),s(),a(4,"span",3),m(5,"Boardly"),s()(),a(6,"div",4),Se(7,It,4,5,"a",5,Bt),s(),a(9,"div",6)(10,"button",7),h("click",function(){return t.openAddTaskDialog()}),a(11,"span",8)(12,"mat-icon",8),m(13,"add"),s(),m(14," New Task "),s()()()()),e&2&&(c(7),Ee(t.navItems))},dependencies:[U,Re,ct,dt,st,q,Z],styles:["[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding:0;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:.2rem;display:flex;align-items:center;border:none;--mat-list-list-item-label-text-size: .75rem;--mat-list-list-item-label-text-weight: 500;--mat-list-list-item-label-text-color: #9a8070}[_nghost-%COMP%]   .nav-item.active-nav-item[_ngcontent-%COMP%]{background:var(--color-primary-active)!important;color:var(--color-primary)!important;--mat-list-list-item-label-text-color: var(--color-primary);--mat-list-list-item-label-text-weight: 700}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(button){background:var(--menu-item-color-hover)!important;color:var(--color-primary)!important}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]     .mdc-list-item__primary-text{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]{padding:0 16px;height:var(--mat-toolbar-standard-height);border-bottom:1px solid var(--color-light-grey);display:flex;align-items:center;gap:9px;color:var(--color-primary);font-weight:700;font-size:1rem;line-height:1;text-decoration:none}[_nghost-%COMP%]   .nav-items[_ngcontent-%COMP%]{padding:.5rem;flex:1;display:flex;gap:2px;flex-direction:column}[_nghost-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{padding:1rem;border-top:1px solid #f0e9de}"]})};var ft=class r{layout=i(y);static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-shell"]],decls:7,vars:2,consts:[[1,"app-container"],[1,"app-sidenav",3,"openedChange","mode","opened"],[1,"main-content"]],template:function(e,t){e&1&&(g(0,"app-header"),a(1,"mat-sidenav-container",0)(2,"mat-sidenav",1),h("openedChange",function(d){return t.layout.sidenavOpen.set(d)}),g(3,"app-sidenav"),s(),a(4,"mat-sidenav-content")(5,"main",2),g(6,"router-outlet"),s()()()),e&2&&(c(2),w("mode",t.layout.isMobile()?"over":"side")("opened",t.layout.isMobile()?t.layout.sidenavOpen():!0))},dependencies:[Ie,ht,_e,pt,K,Y,ee],styles:[".app-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]{--mat-sidenav-container-shape: 0}.app-sidenav[_ngcontent-%COMP%]{width:var(--sidenav-width);border-right:1px solid var(--color-light-grey)}.main-content[_ngcontent-%COMP%]{padding:calc(var(--mat-toolbar-standard-height) + 1.5rem) 1.5rem 1.5rem}"]})};export{ft as ShellComponent};
