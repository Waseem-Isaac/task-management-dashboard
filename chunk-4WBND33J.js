import{a as be,b as Ae,e as Ie,f as Re,g as Te,h as Be}from"./chunk-TNA5JN6U.js";import{A as F,L as Ee,M as Ce,P as Se,T as we,Y as Fe,Z as De,c as ve,ca as W,d as ye,da as Pe,ea as He,f as q,fa as G,ga as Oe,j as Z,ja as Ne,n as xe,oa as Le,qa as je,r as Me,ta as Ve,w as B}from"./chunk-F6VJE22W.js";import{j as b,o as ke,w as U,y as v}from"./chunk-J7TADXZS.js";import{Cb as he,Db as fe,Eb as g,Gb as O,Kb as _e,Lb as N,Mb as L,O as ee,Pa as A,Sb as T,Ta as P,U as w,Ua as se,Ub as j,V as c,Va as re,Wa as H,Wb as V,X as k,Z as s,ac as pe,bb as E,ca as te,cb as d,d as l,da as ie,db as u,ga as x,gb as oe,h as Y,ha as D,hb as le,j as J,kb as ce,la as p,ob as I,pb as de,qa as ne,qb as me,ra as ae,rc as ge,tc as z,ua as M,vb as R,wb as C,xb as ue}from"./chunk-BLS3HVHZ.js";import{a as _}from"./chunk-IONH7NRB.js";var $=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=d({type:n});static \u0275inj=c({imports:[xe,Te,v]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ke={passive:!0},ze=(()=>{class n{_platform=s(b);_ngZone=s(p);_renderer=s(re).createRenderer(null,null);_styleLoader=s(ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Y;this._styleLoader.load(Ge);let t=Z(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new l,r="cdk-text-field-autofilled",o=f=>{f.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:f.target,isAutofilled:!0}))):f.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:f.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",o,Ke)));return this._monitoredElements.set(t,{subject:a,unlisten:m}),a}stopMonitoring(e){let t=Z(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=d({type:n});static \u0275inj=c({})}return n})();var $e=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Xe=new k("MAT_INPUT_CONFIG"),Kt=(()=>{class n{_elementRef=s(M);_platform=s(b);ngControl=s(Ce,{optional:!0,self:!0});_autofillMonitor=s(ze);_ngZone=s(p);_formField=s(Re,{optional:!0});_renderer=s(H);_uid=s(B).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Xe,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new l;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=F(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ee.required)??!1}set required(e){this._required=F(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&U().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=F(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>U().has(e));constructor(){let e=s(Se,{optional:!0}),t=s(we,{optional:!0}),i=s(be),a=s(Be,{optional:!0,self:!0}),r=this._elementRef.nativeElement,o=r.nodeName.toLowerCase();a?ce(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ae(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=o==="select",this._isTextarea=o==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ne(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){$e.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=u({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&g("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(fe("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),I("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),T("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",z]},exportAs:["matInput"],features:[pe([{provide:Ie,useExisting:n}]),ae]})}return n})(),$t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=d({type:n});static \u0275inj=c({imports:[$,$,qe,v]})}return n})();function Qe(n,h){if(n&1){let e=he();R(0,"div",1)(1,"button",2),g("click",function(){te(e);let i=O();return ie(i.action())}),j(2),C()()}if(n&2){let e=O();A(2),V(" ",e.data.action," ")}}var Ye=["label"];function Je(n,h){}var et=Math.pow(2,31)-1,S=class{_overlayRef;instance;containerInstance;_afterDismissed=new l;_afterOpened=new l;_onAction=new l;_durationTimeoutId;_dismissedByAction=!1;constructor(h,e){this._overlayRef=e,this.containerInstance=h,h._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(h){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(h,et))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ze=new k("MatSnackBarData"),y=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},tt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=u({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),it=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=u({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=u({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Ue=(()=>{class n{snackBarRef=s(S);data=s(Ze);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(R(0,"div",0),j(1),C(),de(2,Qe,3,1,"div",1)),t&2&&(A(),V(" ",i.data.message,`
`),A(),me(i.hasAction?2:-1))},dependencies:[Fe,tt,it,nt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),X="_mat-snack-bar-enter",Q="_mat-snack-bar-exit",at=(()=>{class n extends He{_ngZone=s(p);_elementRef=s(M);_changeDetectorRef=s(ge);_platform=s(b);_animationsDisabled=q();snackBarConfig=s(y);_document=s(D);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(x);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new l;_onExit=new l;_onEnter=new l;_animationState="void";_live;_label;_role;_liveElementId=s(B).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Q?this._completeExit():e===X&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?P(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(X)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(X)},200)))}exit(){return this._destroyed?J(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?P(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Q)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Q),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a="mdc-snackbar__label";i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute("aria-owns");this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=E({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&_e(G,7)(Ye,7),t&2){let a;N(a=L())&&(i._portalOutlet=a.first),N(a=L())&&(i._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&g("animationend",function(r){return i.onAnimationEnd(r.animationName)})("animationcancel",function(r){return i.onAnimationEnd(r.animationName)}),t&2&&T("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[oe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(R(0,"div",1)(1,"div",2,0)(3,"div",3),le(4,Je,0,0,"ng-template",4),C(),ue(5,"div"),C()()),t&2&&(A(5),I("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[G],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),st=new k("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new y}),rt=(()=>{class n{_live=s(Me);_injector=s(x);_breakpointObserver=s(ve);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(st);_animationsDisabled=q();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ue;snackBarContainerComponent=at;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let a=_(_({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=x.create({parent:i||this._injector,providers:[{provide:y,useValue:t}]}),r=new W(this.snackBarContainerComponent,t.viewContainerRef,a),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let i=_(_(_({},new y),this._defaultConfig),t),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),o=new S(r,a);if(e instanceof se){let m=new Pe(e,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(m)}else{let m=this._createInjector(i,o),f=new W(e,void 0,m),We=r.attachComponentPortal(f);o.instance=We.instance}return this._breakpointObserver.observe(ye.HandsetPortrait).pipe(ee(a.detachments())).subscribe(m=>{a.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ne;t.direction=e.direction;let i=Le(this._injector),a=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,o=!r&&e.horizontalPosition!=="center";return r?i.left("0"):o?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,je(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return x.create({parent:i||this._injector,providers:[{provide:S,useValue:t},{provide:Ze,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=d({type:n});static \u0275inj=c({providers:[rt],imports:[Ve,Oe,De,Ue,v]})}return n})();export{$ as a,Kt as b,$t as c,rt as d,_i as e};
