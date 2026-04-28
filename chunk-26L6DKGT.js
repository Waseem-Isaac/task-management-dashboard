import{a as Rt,b as Pt,c as Bt,d as jt,e as at,f as Vt,h as ee}from"./chunk-4A7VRFJ3.js";import{a as le,b as de,c as me,d as he,e as pe,i as ue}from"./chunk-XZHH5WFX.js";import{i as te}from"./chunk-GUES3PGK.js";import{a as vt}from"./chunk-Q7ELMTF5.js";import"./chunk-OMB3UM7D.js";import{a as se,b as Z,c as ce,d as ft,t as _e,w as ge}from"./chunk-X6IQ45HJ.js";import{B as re,C as rt,D as st,n as ie,v as ne,y as ae,z as oe}from"./chunk-DDN6YSLQ.js";import{D as Zt,Q as f,S as Kt,T as Xt,V as Yt,W as $t,X as R,Y as Jt,e as z,h as Nt,j as ot,p as tt,r as Qt,t as Ht,w as Gt,x as Wt,y as Ut,z as qt}from"./chunk-SINZ6M42.js";import{$b as F,B as Dt,Bb as H,C as St,D as pt,Db as b,Fb as C,Gb as v,Hb as d,Ib as A,Jb as Y,Kb as h,Lb as p,M as _t,O as w,Oa as g,Pb as bt,Qb as nt,Rb as _,Sa as gt,Sb as Et,Tb as u,U as Tt,Ub as At,V as S,Va as ut,Vb as $,X as U,Z as a,a as Mt,ab as m,ac as Ft,bb as T,ca as j,cb as x,d as M,da as V,fb as y,ga as K,ha as it,jc as zt,ka as X,la as q,n as W,nb as I,ob as L,pa as N,pb as O,qc as J,rb as Lt,sa as D,sb as Ot,tb as Q,ua as k,ub as r,va as It,vb as l,w as et,wb as E,x as B}from"./chunk-EOK4J5D5.js";import"./chunk-IONH7NRB.js";var dt=["*"],Ie=["content"],Le=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Oe=["mat-drawer","mat-drawer-content","*"];function Ee(i,s){if(i&1){let t=H();r(0,"div",1),b("click",function(){j(t);let n=C();return V(n._onBackdropClicked())}),l()}if(i&2){let t=C();_("mat-drawer-shown",t._isShowingBackdrop())}}function Ae(i,s){i&1&&(r(0,"mat-drawer-content"),d(1,2),l())}var Fe=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ze=["mat-sidenav","mat-sidenav-content","*"];function Re(i,s){if(i&1){let t=H();r(0,"div",1),b("click",function(){j(t);let n=C();return V(n._onBackdropClicked())}),l()}if(i&2){let t=C();_("mat-drawer-shown",t._isShowingBackdrop())}}function Pe(i,s){i&1&&(r(0,"mat-sidenav-content"),d(1,2),l())}var Be=`.mat-drawer-container {
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
`;var je=new U("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),kt=new U("MAT_DRAWER_CONTAINER"),ct=(()=>{class i extends Z{_platform=a(z);_changeDetectorRef=a(J);_container=a(wt);constructor(){let t=a(k),e=a(se),n=a(q);super(t,e,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(nt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),_("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[F([{provide:Z,useExisting:i}]),y],ngContentSelectors:dt,decls:1,vars:0,template:function(e,n){e&1&&(v(),d(0))},encapsulation:2,changeDetection:0})}return i})(),xt=(()=>{class i{_elementRef=a(k);_focusTrapFactory=a(qt);_focusMonitor=a(Qt);_platform=a(z);_ngZone=a(q);_renderer=a(ut);_interactivityChecker=a(Ut);_doc=a(it);_container=a(kt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=f(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=f(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(f(t))}_opened=N(!1);_openedVia=null;_animationStarted=new M;_animationEnd=new M;openedChange=new X(!0);_openedStream=this.openedChange.pipe(B(t=>t),W(()=>{}));openedStart=this._animationStarted.pipe(B(()=>this.opened),pt(void 0));_closedStream=this.openedChange.pipe(B(t=>!t),W(()=>{}));closedStart=this._animationStarted.pipe(B(()=>!this.opened),pt(void 0));_destroyed=new M;onPositionChanged=new X;_content;_modeChanged=new M;_injector=a(K);_changeDetectorRef=a(J);constructor(){this.openedChange.pipe(w(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Zt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),c(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",n),c=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":gt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(St(1)).subscribe(c=>o(c?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&Y(Ie,5),e&2){let o;h(o=p())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(I("align",null)("tabIndex",n.mode!=="side"?"-1":null),nt("visibility",!n._container&&!n.opened?"hidden":null),_("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:dt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(v(),r(0,"div",1,0),d(2),l())},dependencies:[Z],encapsulation:2,changeDetection:0})}return i})(),wt=(()=>{class i{_dir=a($t,{optional:!0});_element=a(k);_ngZone=a(q);_changeDetectorRef=a(J);_animationDisabled=ot();_transitionsEnabled=!1;_allDrawers;_drawers=new It;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=f(t)}_autosize=a(je);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:f(t)}_backdropOverride=null;backdropClick=new X;_start=null;_end=null;_left=null;_right=null;_destroyed=new M;_doCheckSubject=new M;_contentMargins={left:null,right:null};_contentMarginChanges=new M;get scrollable(){return this._userContent||this._content}_injector=a(K);constructor(){let t=a(z),e=a(ce);this._dir?.change.pipe(w(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(w(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(_t(this._allDrawers),w(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(_t(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Dt(10),w(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(w(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(w(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(w(this._drawers.changes)).subscribe(()=>{gt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(w(et(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,o){if(e&1&&A(o,ct,5)(o,xt,5),e&2){let c;h(c=p())&&(n._content=c.first),h(c=p())&&(n._allDrawers=c)}},viewQuery:function(e,n){if(e&1&&Y(ct,5),e&2){let o;h(o=p())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&_("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[F([{provide:kt,useExisting:i}])],ngContentSelectors:Oe,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(v(Le),L(0,Ee,1,2,"div",0),d(1),d(2,1),L(3,Ae,2,0,"mat-drawer-content")),e&2&&(O(n.hasBackdrop?0:-1),g(3),O(n._content?-1:3))},dependencies:[ct],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),lt=(()=>{class i extends ct{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[F([{provide:Z,useExisting:i}]),y],ngContentSelectors:dt,decls:1,vars:0,template:function(e,n){e&1&&(v(),d(0))},encapsulation:2,changeDetection:0})}return i})(),yt=(()=>{class i extends xt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=f(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=tt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=tt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(I("tabIndex",n.mode!=="side"?"-1":null)("align",null),nt("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),_("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[F([{provide:xt,useExisting:i}]),y],ngContentSelectors:dt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(v(),r(0,"div",1,0),d(2),l())},dependencies:[Z],encapsulation:2,changeDetection:0})}return i})(),be=(()=>{class i extends wt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,o){if(e&1&&A(o,lt,5)(o,yt,5),e&2){let c;h(c=p())&&(n._content=c.first),h(c=p())&&(n._allDrawers=c)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&_("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[F([{provide:kt,useExisting:i},{provide:wt,useExisting:i}]),y],ngContentSelectors:ze,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(v(Fe),L(0,Re,1,2,"div",0),d(1),d(2,1),L(3,Pe,2,0,"mat-sidenav-content")),e&2&&(O(n.hasBackdrop?0:-1),g(3),O(n._content?-1:3))},dependencies:[lt],styles:[Be],encapsulation:2,changeDetection:0})}return i})(),fe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[ft,R,ft]})}return i})();var Ne=["*",[["mat-toolbar-row"]]],Qe=["*","mat-toolbar-row"],He=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ve=(()=>{class i{_elementRef=a(k);_platform=a(z);_document=a(it);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,o){if(e&1&&A(o,He,5),e&2){let c;h(c=p())&&(n._toolbarRows=c)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(Et(n.color?"mat-"+n.color:""),_("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Qe,decls:2,vars:0,template:function(e,n){e&1&&(v(Ne),d(0),d(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var xe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[R]})}return i})();var P=class i{breakpointObserver=a(Nt);router=a(jt);activatedRoute=a(Pt);isMobile=vt(this.breakpointObserver.observe("(max-width: 992px)").pipe(W(s=>s.matches)),{initialValue:!1});sidenavOpen=N(!1);pageTitle=vt(this.router.events.pipe(B(s=>s instanceof Rt),W(()=>{let s=this.activatedRoute;for(;s.firstChild;)s=s.firstChild;return s.snapshot.data.title??""})),{initialValue:""});toggle(){this.sidenavOpen.update(s=>!s)}close(){this.sidenavOpen.set(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Tt({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ue(i,s){if(i&1){let t=H();r(0,"button",8),b("click",function(){j(t);let n=C();return V(n.layoutService.toggle())}),r(1,"mat-icon"),u(2,"menu"),l()()}}var mt=class i{searchService=a(le);layoutService=a(P);authService=a(ee);usersService=a(_e);sidenavOpen=zt(()=>!this.layoutService.isMobile()||this.layoutService.sidenavOpen());searchTerm=this.searchService.searchTerm;onSearchChange(s){this.searchService.search(s)}clearSearch(){this.searchService.clear()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-header"]],hostVars:2,hostBindings:function(t,e){t&2&&_("sidenav-open",e.sidenavOpen())},decls:19,vars:4,consts:[["userMenu","matMenu"],["color","primary"],["mat-icon-button","","aria-label","Toggle menu"],[1,"page-title"],["mat-icon-button","","aria-label","User menu",1,"d-flex","align-items-center",3,"matMenuTriggerFor"],[1,"user-avatar"],["mat-menu-item","","routerLink","/profile"],["mat-menu-item","",3,"click"],["mat-icon-button","","aria-label","Toggle menu",3,"click"]],template:function(t,e){if(t&1&&(r(0,"mat-toolbar",1),L(1,Ue,3,0,"button",2),r(2,"div",3),u(3),l(),r(4,"button",4)(5,"div",5),u(6),l()(),r(7,"mat-menu",null,0)(9,"button",6)(10,"mat-icon"),u(11,"person"),l(),r(12,"span"),u(13,"Profile"),l()(),r(14,"button",7),b("click",function(){return e.authService.logout()}),r(15,"mat-icon"),u(16,"logout"),l(),r(17,"span"),u(18,"Logout"),l()()()()),t&2){let n,o=bt(8);g(),O(e.layoutService.isMobile()?1:-1),g(2),$(" ",e.layoutService.pageTitle()," "),g(),Q("matMenuTriggerFor",o),g(2),$(" ",e.usersService.getAvatarInitials(((n=e.authService.currentUser())==null?null:n.name)??"")," ")}},dependencies:[at,xe,ve,ne,ae,st,rt,re,oe,ie,pe,me,de,he],styles:["[_nghost-%COMP%]{display:block;position:fixed;top:0;left:0;right:0;z-index:100}.sidenav-open[_nghost-%COMP%]{left:var(--sidenav-width)}[_nghost-%COMP%]{border-bottom:1px solid var(--color-light-grey)}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-title[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;letter-spacing:.025em;display:flex;align-items:center;gap:.5rem;line-height:0}"]})};var ke=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[R]})}return i})();var qe=["*"],Ze=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Ke=["unscopedContent"],Xe=["text"],Ye=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],$e=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Je=new U("ListOption"),ti=(()=>{class i{_elementRef=a(k);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),ei=(()=>{class i{_elementRef=a(k);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),ii=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),ye=(()=>{class i{_listOption=a(Je,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,hostVars:4,hostBindings:function(e,n){e&2&&_("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),ni=(()=>{class i extends ye{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275dir=x({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[y]})}return i})(),ai=(()=>{class i extends ye{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275dir=x({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[y]})}return i})(),oi=new U("MAT_LIST_CONFIG"),Ct=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=f(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(f(t))}_disabled=N(!1);_defaultOptions=a(oi,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,hostVars:1,hostBindings:function(e,n){e&2&&I("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),ri=(()=>{class i{_elementRef=a(k);_ngZone=a(q);_listBase=a(Ct,{optional:!0});_platform=a(z);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(t){this._explicitLines=tt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=f(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(f(t))}_disabled=N(!1);_subscriptions=new Mt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){a(Ht).load(Yt);let t=a(Xt,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Kt(this,this._ngZone,this._hostElement,this._platform,a(K)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(et(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=x({type:i,contentQueries:function(e,n,o){if(e&1&&A(o,ni,4)(o,ai,4),e&2){let c;h(c=p())&&(n._avatars=c),h(c=p())&&(n._icons=c)}},hostVars:4,hostBindings:function(e,n){e&2&&(I("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),_("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Ce=(()=>{class i extends ri{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=f(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&A(o,ei,5)(o,ti,5)(o,ii,5),e&2){let c;h(c=p())&&(n._lines=c),h(c=p())&&(n._titles=c),h(c=p())&&(n._meta=c)}},viewQuery:function(e,n){if(e&1&&Y(Ke,5)(Xe,5),e&2){let o;h(o=p())&&(n._unscopedContent=o.first),h(o=p())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(I("aria-current",n._getAriaCurrent()),_("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[y],ngContentSelectors:$e,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(v(Ye),d(0),r(1,"span",1),d(2,1),d(3,2),r(4,"span",2,0),b("cdkObserveContent",function(){return n._updateItemLines(!0)}),d(6,3),l()(),d(7,4),d(8,5),E(9,"div",3))},dependencies:[Gt],encapsulation:2,changeDetection:0})}return i})();var Me=(()=>{class i extends Ct{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[F([{provide:Ct,useExisting:i}]),y],ngContentSelectors:qe,decls:1,vars:0,template:function(e,n){e&1&&(v(),d(0))},styles:[Ze],encapsulation:2,changeDetection:0})}return i})();var De=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=T({type:i});static \u0275inj=S({imports:[Wt,Jt,te,R,ke]})}return i})();var ci=()=>({exact:!0}),li=(i,s)=>s.route;function di(i,s){if(i&1){let t=H();r(0,"a",9),b("click",function(){j(t);let n=C();return V(n.layout.isMobile()&&n.layout.close())}),r(1,"mat-icon",10),u(2),l(),u(3),l()}if(i&2){let t=s.$implicit;Q("routerLink",t.route)("routerLinkActiveOptions",Ft(4,ci)),g(2),At(t.matIcon),g(),$(" ",t.label," ")}}var ht=class i{layout=a(P);dialog=a(ge);navItems=[{label:"Dashboard",route:"/dashboard",matIcon:"dashboard"},{label:"Tasks",route:"/dashboard/tasks",matIcon:"short_text"},{label:"Analytics",route:"/dashboard/analytics",matIcon:"show_chart"},{label:"Team (Users)",route:"/dashboard/users",matIcon:"supervisor_account"}];openAddTaskDialog(){this.dialog.open(ue,{panelClass:"task-dialog",disableClose:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-sidenav"]],decls:15,vars:0,consts:[["routerLink","/",1,"logo-area"],[1,"logo-sq"],["src","icons/logo.svg","alt","Logo"],[1,"logo-name"],[1,"nav-items"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"routerLink","routerLinkActiveOptions"],[1,"sidebar-footer"],[1,"m-4","btn-primary","full-width",3,"click"],[1,"d-flex","align-items-center","justify-content-center"],["mat-list-item","","routerLinkActive","active-nav-item",1,"nav-item",3,"click","routerLink","routerLinkActiveOptions"],[1,"nav-icon"]],template:function(t,e){t&1&&(r(0,"mat-nav-list")(1,"a",0)(2,"div",1),E(3,"img",2),l(),r(4,"span",3),u(5,"Boardly"),l()(),r(6,"div",4),Lt(7,di,4,5,"a",5,li),l(),r(9,"div",6)(10,"button",7),b("click",function(){return e.openAddTaskDialog()}),r(11,"span",8)(12,"mat-icon",8),u(13,"add"),l(),u(14," New Task "),l()()()()),t&2&&(g(7),Ot(e.navItems))},dependencies:[at,Vt,De,Me,Ce,st,rt],styles:["[_nghost-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding:0;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:.2rem;display:flex;align-items:center;border:none;--mat-list-list-item-label-text-size: .75rem;--mat-list-list-item-label-text-weight: 500;--mat-list-list-item-label-text-color: #9a8070}[_nghost-%COMP%]   .nav-item.active-nav-item[_ngcontent-%COMP%]{background:var(--color-primary-active)!important;color:var(--color-primary)!important;--mat-list-list-item-label-text-color: var(--color-primary);--mat-list-list-item-label-text-weight: 700}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(button){background:var(--sidenav-item-color-hover)!important;color:var(--color-primary)!important}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]     .mdc-list-item__primary-text{display:flex;align-items:center;gap:.5rem}[_nghost-%COMP%]   .logo-area[_ngcontent-%COMP%]{padding:0 16px;height:var(--mat-toolbar-standard-height);border-bottom:1px solid var(--color-light-grey);display:flex;align-items:center;gap:9px;color:var(--color-primary);font-weight:700;font-size:1rem;line-height:1;text-decoration:none}[_nghost-%COMP%]   .nav-items[_ngcontent-%COMP%]{padding:.5rem;flex:1;display:flex;gap:2px;flex-direction:column}[_nghost-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{padding:1rem;border-top:1px solid #f0e9de}"]})};var Se=class i{layout=a(P);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-shell"]],decls:7,vars:2,consts:[[1,"app-container"],[1,"app-sidenav",3,"openedChange","mode","opened"],[1,"main-content"]],template:function(t,e){t&1&&(E(0,"app-header"),r(1,"mat-sidenav-container",0)(2,"mat-sidenav",1),b("openedChange",function(o){return e.layout.sidenavOpen.set(o)}),E(3,"app-sidenav"),l(),r(4,"mat-sidenav-content")(5,"main",2),E(6,"router-outlet"),l()()()),t&2&&(g(2),Q("mode",e.layout.isMobile()?"over":"side")("opened",e.layout.isMobile()?e.layout.sidenavOpen():!0))},dependencies:[Bt,fe,yt,be,lt,mt,ht],styles:[".app-container[_ngcontent-%COMP%]{height:100vh}mat-sidenav-container[_ngcontent-%COMP%]{--mat-sidenav-container-shape: 0}.app-sidenav[_ngcontent-%COMP%]{width:var(--sidenav-width);border-right:1px solid var(--color-light-grey)}.main-content[_ngcontent-%COMP%]{padding:calc(var(--mat-toolbar-standard-height) + 1.5rem) 1.5rem 1.5rem}"]})};export{Se as ShellComponent};
