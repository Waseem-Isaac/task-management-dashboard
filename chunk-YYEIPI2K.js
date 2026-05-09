import{b as _t,e as ft,f as bt,g as vt,h as yt,i as Mt}from"./chunk-EN4M2LUC.js";import{a as nt,b as it}from"./chunk-246I7AD7.js";import{c as ot,d as rt,e as at}from"./chunk-YLWIDSCZ.js";import{a as tt}from"./chunk-GJXKZFMG.js";import{a as st,b as lt}from"./chunk-5QAXA3ML.js";import{G as ze,H as Ue,I as Qe,K as Ke,M as Ge,Q as Ze,T as $e,Y as Je,da as et,g as J,h as je,ha as mt,i as Le,ja as ut,l as ee,oa as ct,pa as dt,sa as pt,u as Ye,w as Ve,wa as ht,x as Xe,za as gt}from"./chunk-BRQCFWI3.js";import{$ as D,$a as Pe,Ba as xe,Cb as Ne,D as O,E as U,F as me,Fa as k,Ga as De,Ha as we,I as q,Ib as N,Jb as f,K as ue,L as ce,M as y,Ma as F,Na as u,O as a,Oa as c,Pa as K,Q as M,Qa as G,R as C,Ra as ke,S as de,U as x,Ua as Ie,V as pe,Va as Se,W,Wa as h,X as E,Xa as Re,Y as he,Ya as g,Za as Z,_a as B,a as P,ab as Te,bb as I,c as d,cb as S,da as A,ea as ge,i as z,ib as $,jb as Oe,jc as He,kb as _,la as p,ma as _e,na as fe,ob as Ee,pa as be,pb as Ae,q as T,qb as Fe,r as re,ra as ve,sa as ye,sc as qe,tb as Be,tc as We,u as ae,ua as w,v as se,va as Me,wa as Q,x as le,za as Ce}from"./chunk-Z3XJ2XXR.js";import{a as R,b as X}from"./chunk-DS6P5DKD.js";var Ct=class o{boardService=a(Ke);dialogRef=a(_t);boardName="";submit(){let s=this.boardName.trim();s&&this.boardService.createBoard(s).subscribe(()=>this.dialogRef.close(!0))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=w({type:o,selectors:[["app-board-add"]],decls:17,vars:2,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-icon-button","","mat-dialog-close",""],[1,"field","d-flex","flex-column"],["for","boardName",1,"label"],["appearance","outline","subscriptSizing","dynamic",1,"full-width"],["matInput","","id","boardName","cdkFocusInitial","",3,"ngModelChange","keyup.enter","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","type","submit",1,"btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(u(0,"div",0)(1,"span"),_(2,"New Board"),c(),u(3,"button",1)(4,"mat-icon"),_(5,"close"),c()()(),u(6,"mat-dialog-content")(7,"div",2)(8,"label",3),_(9,"Board name"),c(),u(10,"mat-form-field",4)(11,"input",5),Fe("ngModelChange",function(i){return Ae(t.boardName,i)||(t.boardName=i),i}),h("keyup.enter",function(){return t.submit()}),c()()()(),u(12,"mat-dialog-actions",6)(13,"button",7),_(14,"Cancel"),c(),u(15,"button",8),h("click",function(){return t.submit()}),_(16,"Create"),c()()),e&2&&(p(11),Ee("ngModel",t.boardName),p(4),F("disabled",!t.boardName.trim()))},dependencies:[Mt,ft,bt,yt,vt,at,rt,ot,tt,et,it,nt,Je,Ge,Ze,$e,lt,st],encapsulation:2})};function Dt(o,s){let t=!s?.manualCleanup?s?.injector?.get(W)??a(W):null,n=St(s?.equal),i;s?.requireSync?i=D({kind:0},{equal:n}):i=D({kind:1,value:s?.initialValue},{equal:n});let r,l=o.subscribe({next:m=>i.set({kind:1,value:m}),error:m=>{i.set({kind:2,error:m}),r?.()},complete:()=>{r?.()}});if(s?.requireSync&&i().kind===0)throw new q(601,!1);return r=t?.onDestroy(l.unsubscribe.bind(l)),Ne(()=>{let m=i();switch(m.kind){case 1:return m.value;case 2:throw m.error;case 0:throw new q(601,!1)}},{equal:s?.equal})}function St(o=Object.is){return(s,e)=>s.kind===1&&e.kind===1&&o(s.value,e.value)}var wt=class o{searchSubject=new d;searchTerm=Dt(this.searchSubject.pipe(ae(300),le()),{initialValue:""});search(s){this.searchSubject.next(s)}clear(){this.searchSubject.next("")}static \u0275fac=function(e){return new(e||o)};static \u0275prov=ue({token:o,factory:o.\u0275fac,providedIn:"root"})};var At=["mat-menu-item",""],Ft=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bt=["mat-icon, [matMenuItemIcon]","*"];function Nt(o,s){o&1&&(de(),u(0,"svg",2),K(1,"polygon",3),c())}var jt=["*"];function Lt(o,s){if(o&1){let e=Ie();G(0,"div",0),Re("click",function(){M(e);let n=g();return C(n.closed.emit("click"))})("animationstart",function(n){M(e);let i=g();return C(i._onAnimationStart(n.animationName))})("animationend",function(n){M(e);let i=g();return C(i._onAnimationDone(n.animationName))})("animationcancel",function(n){M(e);let i=g();return C(i._onAnimationDone(n.animationName))}),G(1,"div",1),B(2),ke()()}if(o&2){let e=g();Oe(e._classList),$("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Se("id",e.panelId),k("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var ie=new y("MAT_MENU_PANEL"),ne=(()=>{class o{_elementRef=a(A);_document=a(pe);_focusMonitor=a(ee);_parentMenu=a(ie,{optional:!0});_changeDetectorRef=a(N);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new d;_focused=new d;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(He).load(Ue),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&h("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(k("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),$("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f]},exportAs:["matMenuItem"],attrs:At,ngContentSelectors:Bt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Z(Ft),B(0),u(1,"span",0),B(2,1),c(),K(3,"div",1),De(4,Nt,2,0,":svg:svg",2)),t&2&&(p(3),F("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),p(),we(n._triggersSubmenu?4:-1))},dependencies:[ze],encapsulation:2,changeDetection:0})}return o})();var Ht=new y("MatMenuContent");var Yt=new y("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),te="_mat-menu-enter",j="_mat-menu-exit",L=(()=>{class o{_elementRef=a(A);_changeDetectorRef=a(N);_injector=a(x);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=J();_allItems;_directDescendantItems=new ge;_classList={};_panelAnimationState="void";_animationDone=new d;_isAnimating=D(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=R({},this._classList);t&&t.length&&t.split(" ").forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new E;close=this.closed;panelId=a(Xe).getId("mat-menu-panel-");constructor(){let e=a(Yt);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ve(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(O(this._directDescendantItems),U(e=>T(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(O(this._directDescendantItems),U(t=>T(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ye(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=_e(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=X(R({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===j;(t||e===te)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===te||e===j)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(j),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?te:j)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(O(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-menu"]],contentQueries:function(t,n,i){if(t&1&&Pe(i,Ht,5)(i,ne,5)(i,ne,4),t&2){let r;I(r=S())&&(n.lazyContent=r.first),I(r=S())&&(n._allItems=r),I(r=S())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&Te(fe,5),t&2){let i;I(i=S())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&k("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",f],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:f(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Be([{provide:ie,useExisting:o}])],ngContentSelectors:jt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Z(),xe(0,Lt,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return o})(),Vt=new y("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=a(x);return()=>ct(o)}});var b=new WeakMap,Xt=(()=>{class o{_canHaveBackdrop;_element=a(A);_viewContainerRef=a(ye);_menuItemInstance=a(ne,{optional:!0,self:!0});_dir=a(qe,{optional:!0});_focusMonitor=a(ee);_ngZone=a(he);_injector=a(x);_scrollStrategy=a(Vt);_changeDetectorRef=a(N);_animationsDisabled=J();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=P.EMPTY;_menuCloseSubscription=P.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(ie,{optional:!0});this._parentMaterialMenu=t instanceof L?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&b.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=b.get(t);b.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),r=i.getConfig(),l=r.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof L&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(me(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof L&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(se(1)).subscribe(()=>{t.detach(),b.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&b.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ht(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof L&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new dt({positionStrategy:pt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(i,r)})})}_setPosition(e,t){let[n,i]=e.xPosition==="before"?["end","start"]:["start","end"],[r,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[m,H]=[r,l],[Y,V]=[n,i],v=0;if(this._triggersSubmenu()){if(V=n=e.xPosition==="before"?"start":"end",i=Y=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let oe=this._parentMaterialMenu.items.first;this._parentInnerPadding=oe?oe._getHostElement().offsetTop:0}v=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=r==="top"?"bottom":"top",H=l==="top"?"bottom":"top");t.withPositions([{originX:n,originY:m,overlayX:Y,overlayY:r,offsetY:v},{originX:i,originY:m,overlayX:V,overlayY:r,offsetY:v},{originX:n,originY:H,overlayX:Y,overlayY:l,offsetY:-v},{originX:i,originY:H,overlayX:V,overlayY:l,offsetY:-v}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:z(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(re(r=>this._menuOpen&&r!==this._menuItemInstance)):z();return T(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ut(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return b.get(e)===this}_triggerIsAriaDisabled(){return f(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ve()};static \u0275dir=Q({type:o})}return o})(),Jn=(()=>{class o extends Xt{_cleanupTouchstart;_hoverSubscription=P.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new E;onMenuOpen=this.menuOpened;menuClosed=new E;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(be);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Le(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){je(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||o)};static \u0275dir=Q({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&h("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&k("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ce]})}return o})();var ei=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Me({type:o});static \u0275inj=ce({imports:[Qe,gt,We,mt]})}return o})();export{Dt as a,wt as b,ne as c,L as d,Jn as e,ei as f,Ct as g};
