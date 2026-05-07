import{b as ht,e as _t,f as gt,g as ft,h as bt,i as Mt}from"./chunk-LJZXBGPB.js";import{a as $e,b as et}from"./chunk-SJNXKAE5.js";import{a as ot,b as at}from"./chunk-EYJKYN2A.js";import{c as tt,d as nt,e as it}from"./chunk-HBTGBUYY.js";import{a as pt}from"./chunk-EN2BR5BC.js";import{a as Je}from"./chunk-GSY3GDBR.js";import{G as Ye,H as Ve,I as We,K as Qe,M as Ue,Q as Ke,T as Ge,Y as qe,da as Ze,g as G,h as Fe,ha as rt,i as Be,ja as st,l as q,oa as lt,pa as mt,sa as ut,u as Le,w as He,wa as ct,x as je,za as dt}from"./chunk-FBOGVW7V.js";import{$a as Ce,B as ie,Bc as Ne,C as oe,Ca as d,Da as he,Db as K,E as ae,Ea as _e,Eb as Te,Fb as _,Ga as ge,Ia as fe,Ja as be,Jb as Re,Kb as Ee,Kc as Xe,Lb as Ae,Lc as ze,M as P,N as X,Na as C,Nb as Oe,O as re,Oa as Me,Pa as z,Sa as ye,U as se,Ua as ve,V as le,X as M,Z as r,_a as x,a as D,ab as xe,ba as y,ca as v,cc as O,d as c,da as me,dc as g,fa as S,fb as E,ga as ue,gb as s,hb as l,ib as W,j as V,ja as T,jb as Q,ka as ce,kb as we,nb as ke,oa as de,ob as De,pb as p,qb as Ie,rb as h,sb as U,ta as R,tb as A,ua as pe,ub as Pe,vb as Se,w as I,wb as w,x as ne,xb as k}from"./chunk-EPXM3Q2M.js";import{a as Y,b as te}from"./chunk-IONH7NRB.js";var yt=class o{boardService=r(Qe);dialogRef=r(ht);boardName="";submit(){let m=this.boardName.trim();m&&this.boardService.createBoard(m).subscribe(()=>this.dialogRef.close())}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-board-add"]],decls:17,vars:2,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-icon-button","","mat-dialog-close",""],[1,"field","d-flex","flex-column"],["for","boardName",1,"label"],["appearance","outline","subscriptSizing","dynamic",1,"full-width"],["matInput","","id","boardName","cdkFocusInitial","",3,"ngModelChange","keyup.enter","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-button","","type","submit",1,"btn-primary",3,"click","disabled"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"span"),_(2,"New Board"),l(),s(3,"button",1)(4,"mat-icon"),_(5,"close"),l()()(),s(6,"mat-dialog-content")(7,"div",2)(8,"label",3),_(9,"Board name"),l(),s(10,"mat-form-field",4)(11,"input",5),Ae("ngModelChange",function(i){return Ee(t.boardName,i)||(t.boardName=i),i}),p("keyup.enter",function(){return t.submit()}),l()()()(),s(12,"mat-dialog-actions",6)(13,"button",7),_(14,"Cancel"),l(),s(15,"button",8),p("click",function(){return t.submit()}),_(16,"Create"),l()()),e&2&&(d(11),Re("ngModel",t.boardName),d(4),E("disabled",!t.boardName.trim()))},dependencies:[Mt,_t,gt,bt,ft,it,nt,tt,Je,Ze,et,$e,qe,Ue,Ke,Ge,at,ot],encapsulation:2})};var Ct=class o{searchSubject=new c;searchTerm=pt(this.searchSubject.pipe(ie(300),ae()),{initialValue:""});search(m){this.searchSubject.next(m)}clear(){this.searchSubject.next("")}static \u0275fac=function(e){return new(e||o)};static \u0275prov=se({token:o,factory:o.\u0275fac,providedIn:"root"})};var Tt=["mat-menu-item",""],Rt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Et=["mat-icon, [matMenuItemIcon]","*"];function At(o,m){o&1&&(me(),s(0,"svg",2),W(1,"polygon",3),l())}var Ot=["*"];function Ft(o,m){if(o&1){let e=ke();Q(0,"div",0),Ie("click",function(){y(e);let n=h();return v(n.closed.emit("click"))})("animationstart",function(n){y(e);let i=h();return v(i._onAnimationStart(n.animationName))})("animationend",function(n){y(e);let i=h();return v(i._onAnimationDone(n.animationName))})("animationcancel",function(n){y(e);let i=h();return v(i._onAnimationDone(n.animationName))}),Q(1,"div",1),A(2),we()()}if(o&2){let e=h();Te(e._classList),K("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),De("id",e.panelId),x("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var $=new M("MAT_MENU_PANEL"),J=(()=>{class o{_elementRef=r(R);_document=r(ue);_focusMonitor=r(q);_parentMenu=r($,{optional:!0});_changeDetectorRef=r(O);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new c;_focused=new c;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(Ne).load(Ve),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=C({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&p("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(x("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),K("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",g],disableRipple:[2,"disableRipple","disableRipple",g]},exportAs:["matMenuItem"],attrs:Tt,ngContentSelectors:Et,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(U(Rt),A(0),s(1,"span",0),A(2,1),l(),W(3,"div",1),Ce(4,At,2,0,":svg:svg",2)),t&2&&(d(3),E("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),d(),xe(n._triggersSubmenu?4:-1))},dependencies:[Ye],encapsulation:2,changeDetection:0})}return o})();var Bt=new M("MatMenuContent");var Nt=new M("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Z="_mat-menu-enter",F="_mat-menu-exit",B=(()=>{class o{_elementRef=r(R);_changeDetectorRef=r(O);_injector=r(S);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=G();_allItems;_directDescendantItems=new pe;_classList={};_panelAnimationState="void";_animationDone=new c;_isAnimating=de(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=Y({},this._classList);t&&t.length&&t.split(" ").forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new T;close=this.closed;panelId=r(je).getId("mat-menu-panel-");constructor(){let e=r(Nt);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new He(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(P(this._directDescendantItems),X(e=>I(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(P(this._directDescendantItems),X(t=>I(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Le(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=he(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=te(Y({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===F;(t||e===Z)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Z||e===F)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(F),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Z:F)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(P(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=C({type:o,selectors:[["mat-menu"]],contentQueries:function(t,n,i){if(t&1&&Pe(i,Bt,5)(i,J,5)(i,J,4),t&2){let a;w(a=k())&&(n.lazyContent=a.first),w(a=k())&&(n._allItems=a),w(a=k())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&Se(_e,5),t&2){let i;w(i=k())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&x("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",g],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:g(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Oe([{provide:$,useExisting:o}])],ngContentSelectors:Ot,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(U(),ve(0,Ft,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return o})(),Lt=new M("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=r(S);return()=>lt(o)}});var f=new WeakMap,Ht=(()=>{class o{_canHaveBackdrop;_element=r(R);_viewContainerRef=r(be);_menuItemInstance=r(J,{optional:!0,self:!0});_dir=r(Xe,{optional:!0});_focusMonitor=r(q);_ngZone=r(ce);_injector=r(S);_scrollStrategy=r(Lt);_changeDetectorRef=r(O);_animationsDisabled=G();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=D.EMPTY;_menuCloseSubscription=D.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=r($,{optional:!0});this._parentMaterialMenu=t instanceof B?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&f.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=f.get(t);f.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),a=i.getConfig(),u=a.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof B&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(re(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof B&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(oe(1)).subscribe(()=>{t.detach(),f.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&f.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ct(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof B&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new mt({positionStrategy:ut(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(i,a)})})}_setPosition(e,t){let[n,i]=e.xPosition==="before"?["end","start"]:["start","end"],[a,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[N,L]=[a,u],[H,j]=[n,i],b=0;if(this._triggersSubmenu()){if(j=n=e.xPosition==="before"?"start":"end",i=H=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ee=this._parentMaterialMenu.items.first;this._parentInnerPadding=ee?ee._getHostElement().offsetTop:0}b=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(N=a==="top"?"bottom":"top",L=u==="top"?"bottom":"top");t.withPositions([{originX:n,originY:N,overlayX:H,overlayY:a,offsetY:b},{originX:i,originY:N,overlayX:j,overlayY:a,offsetY:b},{originX:n,originY:L,overlayX:H,overlayY:u,offsetY:-b},{originX:i,originY:L,overlayX:j,overlayY:u,offsetY:-b}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:V(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ne(a=>this._menuOpen&&a!==this._menuItemInstance)):V();return I(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new st(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return f.get(e)===this}_triggerIsAriaDisabled(){return g(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){fe()};static \u0275dir=z({type:o})}return o})(),Nn=(()=>{class o extends Ht{_cleanupTouchstart;_hoverSubscription=D.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new T;onMenuOpen=this.menuOpened;menuClosed=new T;onMenuClose=this.menuClosed;constructor(){super(!0);let e=r(ge);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Be(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Fe(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||o)};static \u0275dir=z({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&p("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&x("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ye]})}return o})();var Ln=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Me({type:o});static \u0275inj=le({imports:[We,dt,ze,rt]})}return o})();export{Ct as a,J as b,B as c,Nn as d,Ln as e,yt as f};
