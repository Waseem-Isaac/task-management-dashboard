import{a as oi}from"./chunk-SSSHIUHS.js";import{d as wt,e as Ot,f as ue,g as Dt,h as Tt,i as Ve,k as di,l as ui,m as pi,n as hi}from"./chunk-VK5PB7YA.js";import{a as ai,c as _i}from"./chunk-G2QBHON2.js";import{a as ri,b as si,e as li,f as ci,h as mi}from"./chunk-VYNS3WEU.js";import{a as fe,b as Gt,c as Xt,d as ii,e as ni}from"./chunk-4WBND33J.js";import{a as _t,b as Et,c as jt,d as Wt,e as Yt,f as Kt,g as qt}from"./chunk-TNA5JN6U.js";import{E as St,F as xt,G as It,H as Ft,J as Pt,L as k,M as Rt,N as At,O as Bt,P as Lt,R as Nt,S as Vt,T as _e,U as Ht,W as zt,Y as Ut,Z as Qt,aa as He,ba as ge,da as $t,f as X,g as ft,h as gt,ia as be,ja as Zt,k as Le,ma as Jt,pa as ei,qa as ti,r as vt,ra as ze,sa as je,t as W,ta as ye,u as Mt,v as Ct,w as de,x as kt,y as Ne}from"./chunk-F6VJE22W.js";import{m as bt,o as yt,x as pe,y as he}from"./chunk-J7TADXZS.js";import{B as $e,C as Q,Cb as ae,Db as ut,E as Ze,Eb as g,Fb as pt,Gb as u,Hb as G,Ib as B,Jb as re,Kb as oe,Lb as b,M as F,Mb as y,N,O as E,Pa as m,Qb as se,Sb as z,Ta as at,Tb as le,U as Je,Ua as rt,Ub as d,V as $,Vb as v,Wa as J,Wb as ce,X as O,Ya as ot,Z as o,Za as st,a as U,ac as me,bb as D,ca as P,cb as ee,d as S,da as R,db as te,ea as Z,ga as V,gb as lt,ha as et,hb as ct,ib as mt,j as Pe,ka as M,la as tt,mc as ht,n as Re,ob as T,pa as A,pb as x,qb as w,ra as it,rc as j,s as Qe,sb as ie,tb as ne,tc as f,ua as H,ub as _,uc as Be,va as nt,vb as s,w as I,wb as c,x as q,xb as C,yb as Ae,zb as dt}from"./chunk-BLS3HVHZ.js";import{a as L,b as Ue}from"./chunk-IONH7NRB.js";var fi=class n{searchSubject=new S;searchTerm=ai(this.searchSubject.pipe($e(300),Ze()),{initialValue:""});search(l){this.searchSubject.next(l)}clear(){this.searchSubject.next("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Je({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ci=["trigger"],ki=["panel"],Si=[[["mat-select-trigger"]],"*"],xi=["mat-select-trigger","*"];function wi(n,l){if(n&1&&(s(0,"span",4),d(1),c()),n&2){let e=u();m(),v(e.placeholder)}}function Oi(n,l){n&1&&B(0)}function Di(n,l){if(n&1&&(s(0,"span",11),d(1),c()),n&2){let e=u(2);m(),v(e.triggerValue)}}function Ti(n,l){if(n&1&&(s(0,"span",5),x(1,Oi,1,0)(2,Di,2,1,"span",11),c()),n&2){let e=u();m(),w(e.customTrigger?1:2)}}function Ii(n,l){if(n&1){let e=ae();s(0,"div",12,1),g("keydown",function(i){P(e);let a=u();return R(a._handleKeydown(i))}),B(2,1),c()}if(n&2){let e=u();le(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),T("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ei=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=o(V);return()=>be(n)}}),Fi=new O("MAT_SELECT_CONFIG"),Pi=new O("MatSelectTrigger"),We=class{source;value;constructor(l,e){this.source=l,this.value=e}},gi=(()=>{class n{_viewportRuler=o(He);_changeDetectorRef=o(j);_elementRef=o(H);_dir=o(pe,{optional:!0});_idGenerator=o(de);_renderer=o(J);_parentFormField=o(Kt,{optional:!0});ngControl=o(Rt,{self:!0,optional:!0});_liveAnnouncer=o(vt);_defaultOptions=o(Fi,{optional:!0});_animationsDisabled=X();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Dt(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Tt(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new We(this,e)}_scrollStrategyFactory=o(Ei);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=A(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(k.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Qe(()=>{let e=this.options;return e?e.changes.pipe(F(e),N(()=>I(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(N(()=>this.optionSelectionChanges))});openedChange=new M;_openedStream=this.openedChange.pipe(q(e=>e),Re(()=>{}));_closedStream=this.openedChange.pipe(q(e=>!e),Re(()=>{}));selectionChange=new M;valueChange=new M;constructor(){let e=o(_t),t=o(Lt,{optional:!0}),i=o(_e,{optional:!0}),a=o(new ht("tabindex"),{optional:!0}),r=o(ei,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Et(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new oi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(E(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(E(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(F(null),E(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Q(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Ne(this._trackedModal,"aria-owns",t),kt(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ne(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!W(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;r.onKeydown(e);let h=this.selected;h&&p!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!W(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(p?h.select():h.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!W(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ze?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Mt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=I(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(E(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),I(...this.options.map(t=>t._stateChanges)).pipe(E(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=bt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&re(a,Pi,5)(a,ue,5)(a,Ot,5),t&2){let r;b(r=y())&&(i.customTrigger=r.first),b(r=y())&&(i.options=r),b(r=y())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&oe(Ci,5)(ki,5)(je,5),t&2){let a;b(a=y())&&(i.trigger=a.first),b(a=y())&&(i.panel=a.first),b(a=y())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&g("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(T("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),z("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Be(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",f],placeholder:"placeholder",required:[2,"required","required",f],multiple:[2,"multiple","multiple",f],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",f],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Be],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",f]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[me([{provide:Yt,useExisting:n},{provide:wt,useExisting:n}]),it],ngContentSelectors:xi,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(G(Si),s(0,"div",2,0),g("click",function(){return i.open()}),s(3,"div",3),x(4,wi,2,1,"span",4)(5,Ti,3,1,"span",5),c(),s(6,"div",6)(7,"div",7),Z(),s(8,"svg",8),C(9,"path",9),c()()()(),ct(10,Ii,3,16,"ng-template",10),g("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=se(1);m(3),T("id",i._valueId),m(),w(i.empty?4:5),m(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[ze,je],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform-origin: top center;
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: bottom center;
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ee({type:n});static \u0275inj=$({imports:[ye,Ve,he,ge,fe,Ve]})}return n})();var yi=(n,l)=>l.value,Bi=(n,l)=>l._id;function Li(n,l){if(n&1&&(s(0,"mat-option",11),d(1),c()),n&2){let e=l.$implicit;_("value",e.value),m(),v(e.label)}}function Ni(n,l){if(n&1&&(s(0,"mat-option",11),d(1),c()),n&2){let e=l.$implicit;_("value",e.value),m(),v(e.label)}}function Vi(n,l){n&1&&(s(0,"span",22),d(1,"Me"),c())}function Hi(n,l){if(n&1&&(s(0,"mat-option",11),d(1),x(2,Vi,2,0,"span",22),c()),n&2){let e,t=l.$implicit,i=u();_("value",t._id),m(),ce(" ",t.name," "),m(),w(t._id===((e=i.authService.currentUser())==null?null:e._id)?2:-1)}}var Oe=class n{task;submitButtonText="Submit";formSubmit=new M;formCancel=new M;authService=o(Ft);today=new Date;taskForm;fb=o(Ht);usersService=o(ri);statusOptions=[{value:"todo",label:"To Do"},{value:"in_progress",label:"In Progress"},{value:"done",label:"Done"}];priorityOptions=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}];constructor(){}ngOnInit(){this.initForm(),this.usersService.loadUsers(!0)}initForm(){this.taskForm=this.fb.group({title:[this.task?.title||"",[k.required,k.minLength(3)]],description:[this.task?.description||"",[k.required]],status:[this.task?.status||"todo",[k.required]],priority:[this.task?.priority,[k.required]],dueDate:[this.task?.dueDate?new Date(this.task.dueDate+"T00:00:00"):null,[k.required]],assignee:[this.task?.assignee?._id||this.authService.currentUser()?._id,[k.required]],reporter:[this.task?.reporter?._id||this.authService.currentUser()?._id,[k.required]],tags:[this.task?.tags||[]]}),this.task&&this.taskForm.markAllAsTouched()}onSubmit(){if(this.taskForm.valid){let l=L({},this.taskForm.value);if(l.dueDate instanceof Date){let e=l.dueDate;l.dueDate=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}this.formSubmit.emit(L({},l))}else this.taskForm.markAllAsTouched()}onCancel(){this.formCancel.emit()}getFieldError(l){let e=this.taskForm.get(l);if(e?.hasError("required"))return"This field is required";if(e?.hasError("minlength"))return`Minimum length is ${e.errors?.minlength.requiredLength}`;if(e?.hasError("email"))return"Invalid email format";if(l==="dueDate"){if(e?.hasError("matDatepickerMin"))return"Due date cannot be in the past";if(e?.hasError("matDatepickerMax"))return"Due date cannot be in the future"}return""}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-task-form"]],inputs:{task:"task",submitButtonText:"submitButtonText"},outputs:{formSubmit:"formSubmit",formCancel:"formCancel"},decls:58,vars:11,consts:[["dueDatePicker",""],[1,"task-form",3,"ngSubmit","formGroup"],[1,"field","d-flex","flex-column"],["for","title",1,"label"],["appearance","outline",1,"full-width"],["matInput","","formControlName","title","placeholder","Enter task title"],["for","description",1,"label"],["matInput","","formControlName","description","placeholder","Enter task description","rows","4"],[1,"form-row"],["for","status",1,"label"],["formControlName","status","placeholder","Status"],[3,"value"],["for","priority",1,"label"],["formControlName","priority","placeholder","Priority"],["for","dueDate",1,"label"],["matInput","","formControlName","dueDate","placeholder","MM/DD/YYYY","readonly","",3,"matDatepicker","min"],["matIconSuffix","",3,"for"],["for","assignee",1,"label"],["formControlName","assignee","placeholder","Assignee"],[1,"form-actions"],["mat-button","","type","button",3,"click"],["mat-button","","type","submit",1,"btn-primary",3,"disabled"],[1,"me-badge"]],template:function(e,t){if(e&1&&(s(0,"form",1),g("ngSubmit",function(){return t.onSubmit()}),s(1,"div",2)(2,"label",3),d(3,"Title"),c(),s(4,"mat-form-field",4),C(5,"input",5),s(6,"mat-error"),d(7),c()()(),s(8,"div",2)(9,"label",6),d(10,"Description"),c(),s(11,"mat-form-field",4),C(12,"textarea",7),s(13,"mat-error"),d(14),c()()(),s(15,"div",8)(16,"div",2)(17,"label",9),d(18,"Status"),c(),s(19,"mat-form-field",4)(20,"mat-select",10),ie(21,Li,2,2,"mat-option",11,yi),c(),s(23,"mat-error"),d(24),c()()(),s(25,"div",2)(26,"label",12),d(27,"Priority"),c(),s(28,"mat-form-field",4)(29,"mat-select",13),ie(30,Ni,2,2,"mat-option",11,yi),c(),s(32,"mat-error"),d(33),c()()()(),s(34,"div",2)(35,"label",14),d(36,"Due Date"),c(),s(37,"mat-form-field",4),C(38,"input",15)(39,"mat-datepicker-toggle",16)(40,"mat-datepicker",null,0),s(42,"mat-error"),d(43),c()()(),s(44,"div",2)(45,"label",17),d(46,"Assignee"),c(),s(47,"mat-form-field",4)(48,"mat-select",18),ie(49,Hi,3,3,"mat-option",11,Bi),c(),s(51,"mat-error"),d(52),c()()(),s(53,"div",19)(54,"button",20),g("click",function(){return t.onCancel()}),d(55,"Cancel"),c(),s(56,"button",21),d(57,"Save"),c()()()),e&2){let i=se(41);_("formGroup",t.taskForm),m(7),v(t.getFieldError("title")),m(7),v(t.getFieldError("description")),m(7),ne(t.statusOptions),m(3),v(t.getFieldError("status")),m(6),ne(t.priorityOptions),m(3),v(t.getFieldError("priority")),m(5),_("matDatepicker",i)("min",t.today),m(),_("for",i),m(4),v(t.getFieldError("dueDate")),m(6),ne(t.usersService.users()),m(3),v(t.getFieldError("assignee")),m(4),_("disabled",t.taskForm.invalid)}},dependencies:[zt,Nt,Pt,At,Bt,_e,Vt,fe,qt,jt,Wt,Xt,Gt,bi,gi,ue,Qt,Ut,hi,di,ui,pi],styles:[".task-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;max-width:800px;background-color:var(--color-primary-contrast);border-radius:var(--radius-md)}.full-width[_ngcontent-%COMP%]{width:100%}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:640px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}.assignee-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding:1rem 1.5rem;border-radius:.5rem;background-color:var(--color-body-bg)}.assignee-title[_ngcontent-%COMP%]{margin:0 0 .5rem;font-weight:600;font-size:.9375rem;color:var(--mat-sys-on-surface-variant)}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.75rem}"]})};function zi(n,l){if(n&1&&(s(0,"div",1),d(1),c()),n&2){let e=u();m(),ce(" ",e.errorMessage()," ")}}function ji(n,l){n&1&&(s(0,"div",2),C(1,"div",4),s(2,"p"),d(3,"Creating task..."),c()())}var vi=class n{taskService=o(_i);dialogRef=o(si);snackbar=o(ii);isSubmitting=A(!1);errorMessage=A("");onFormSubmit(l){this.isSubmitting.set(!0),this.errorMessage.set(""),this.taskService.createTask(l).subscribe({next:()=>{this.dialogRef.close(!0),this.snackbar.open("Task created successfully!","",{duration:3e3,panelClass:["snackbar-success"],horizontalPosition:"center",verticalPosition:"top"})},error:e=>{console.error("Error creating task:",e),this.errorMessage.set("Failed to create task. Please try again."),this.snackbar.open("Failed to create task. Please try again.","",{duration:3e3,panelClass:["snackbar-error"],horizontalPosition:"center",verticalPosition:"top"}),this.isSubmitting.set(!1)},complete:()=>{this.isSubmitting.set(!1)}})}onFormCancel(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-task-add"]],decls:6,vars:3,consts:[["mat-dialog-title",""],[1,"error-banner"],[1,"loading-overlay"],[3,"formSubmit","formCancel","submitButtonText"],[1,"spinner"]],template:function(e,t){e&1&&(s(0,"h2",0),d(1,"Create New Task"),c(),s(2,"mat-dialog-content"),x(3,zi,2,1,"div",1),x(4,ji,4,0,"div",2),s(5,"app-task-form",3),g("formSubmit",function(a){return t.onFormSubmit(a)})("formCancel",function(){return t.onFormCancel()}),c()()),e&2&&(m(3),w(t.errorMessage()?3:-1),m(),w(t.isSubmitting()?4:-1),m(),_("submitButtonText","Create Task"))},dependencies:[Oe,mi,li,ci,ni],styles:[".task-add-container[_ngcontent-%COMP%]{padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#111827;margin:0 0 .5rem}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:1rem;margin:0}.error-banner[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;border-left:4px solid #ef4444}.loading-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1000}.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:50px;height:50px;border:4px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin-top:1rem;font-size:1.125rem}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})};var Wi=["mat-menu-item",""],Yi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ki=["mat-icon, [matMenuItemIcon]","*"];function qi(n,l){n&1&&(Z(),s(0,"svg",2),C(1,"polygon",3),c())}var Gi=["*"];function Xi(n,l){if(n&1){let e=ae();Ae(0,"div",0),pt("click",function(){P(e);let i=u();return R(i.closed.emit("click"))})("animationstart",function(i){P(e);let a=u();return R(a._onAnimationStart(i.animationName))})("animationend",function(i){P(e);let a=u();return R(a._onAnimationDone(i.animationName))})("animationcancel",function(i){P(e);let a=u();return R(a._onAnimationDone(i.animationName))}),Ae(1,"div",1),B(2),dt()()}if(n&2){let e=u();le(e._classList),z("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),ut("id",e.panelId),T("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ge=new O("MAT_MENU_PANEL"),qe=(()=>{class n{_elementRef=o(H);_document=o(et);_focusMonitor=o(Le);_parentMenu=o(Ge,{optional:!0});_changeDetectorRef=o(j);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new S;_focused=new S;_highlighted=!1;_triggersSubmenu=!1;constructor(){o(yt).load(xt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&g("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(T("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),z("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f]},exportAs:["matMenuItem"],attrs:Wi,ngContentSelectors:Ki,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(G(Yi),B(0),s(1,"span",0),B(2,1),c(),C(3,"div",1),x(4,qi,2,0,":svg:svg",2)),t&2&&(m(3),_("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),m(),w(i._triggersSubmenu?4:-1))},dependencies:[St],encapsulation:2,changeDetection:0})}return n})();var Ui=new O("MatMenuContent");var Qi=new O("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ke="_mat-menu-enter",De="_mat-menu-exit",Te=(()=>{class n{_elementRef=o(H);_changeDetectorRef=o(j);_injector=o(V);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=X();_allItems;_directDescendantItems=new nt;_classList={};_panelAnimationState="void";_animationDone=new S;_isAnimating=A(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,i=L({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new M;close=this.closed;panelId=o(de).getId("mat-menu-panel-");constructor(){let e=o(Qi);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(F(this._directDescendantItems),N(e=>I(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[a]&&!i[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(F(this._directDescendantItems),N(t=>I(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:W(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=at(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ue(L({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===De;(t||e===Ke)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Ke||e===De)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(De),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Ke:De)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(F(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,a){if(t&1&&re(a,Ui,5)(a,qe,5)(a,qe,4),t&2){let r;b(r=y())&&(i.lazyContent=r.first),b(r=y())&&(i._allItems=r),b(r=y())&&(i.items=r)}},viewQuery:function(t,i){if(t&1&&oe(rt,5),t&2){let a;b(a=y())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(t,i){t&2&&T("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",f],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:f(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[me([{provide:Ge,useExisting:n}])],ngContentSelectors:Gi,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(G(),mt(0,Xi,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),$i=new O("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=o(V);return()=>be(n)}});var Y=new WeakMap,Zi=(()=>{class n{_canHaveBackdrop;_element=o(H);_viewContainerRef=o(st);_menuItemInstance=o(qe,{optional:!0,self:!0});_dir=o(pe,{optional:!0});_focusMonitor=o(Le);_ngZone=o(tt);_injector=o(V);_scrollStrategy=o($i);_changeDetectorRef=o(j);_animationsDisabled=X();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=U.EMPTY;_menuCloseSubscription=U.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=o(Ge,{optional:!0});this._parentMaterialMenu=t instanceof Te?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Y.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Y.get(t);Y.set(t,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(t),r=a.getConfig(),p=r.positionStrategy;this._setPosition(t,p),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Te&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(E(t.close)).subscribe(()=>{p.withLockedPosition(!1).reapplyLastPosition(),p.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Te&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Q(1)).subscribe(()=>{t.detach(),Y.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Y.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ti(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Te&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new Zt({positionStrategy:Jt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,r)})})}_setPosition(e,t){let[i,a]=e.xPosition==="before"?["end","start"]:["start","end"],[r,p]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,Ie]=[r,p],[Ee,Fe]=[i,a],K=0;if(this._triggersSubmenu()){if(Fe=i=e.xPosition==="before"?"start":"end",a=Ee=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Xe=this._parentMaterialMenu.items.first;this._parentInnerPadding=Xe?Xe._getHostElement().offsetTop:0}K=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=r==="top"?"bottom":"top",Ie=p==="top"?"bottom":"top");t.withPositions([{originX:i,originY:h,overlayX:Ee,overlayY:r,offsetY:K},{originX:a,originY:h,overlayX:Fe,overlayY:r,offsetY:K},{originX:i,originY:Ie,overlayX:Ee,overlayY:p,offsetY:-K},{originX:a,originY:Ie,overlayX:Fe,overlayY:p,offsetY:-K}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Pe(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(q(r=>this._menuOpen&&r!==this._menuItemInstance)):Pe();return I(e,i,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new $t(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Y.get(e)===this}_triggerIsAriaDisabled(){return f(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){ot()};static \u0275dir=te({type:n})}return n})(),Aa=(()=>{class n extends Zi{_cleanupTouchstart;_hoverSubscription=U.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new M;onMenuOpen=this.menuOpened;menuClosed=new M;onMenuClose=this.menuClosed;constructor(){super(!0);let e=o(J);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{gt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ft(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&g("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&T("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[lt]})}return n})();var Ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ee({type:n});static \u0275inj=$({imports:[It,ye,he,ge]})}return n})();export{fi as a,qe as b,Te as c,Aa as d,Ba as e,gi as f,bi as g,Oe as h,vi as i};
