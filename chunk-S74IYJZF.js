import{d as Dt,e as Ot,f as pe,g as Tt,h as It,j as He,l as ci,m as mi,n as di,o as ui}from"./chunk-UJ6CIWTW.js";import{a as Zt,c as pi}from"./chunk-MBQ47C3V.js";import{a as ai,b as ri,e as oi,f as si,h as li}from"./chunk-SODDWBK6.js";import{c as We,d as be,f as Jt,k as ye,l as ei,o as ti,r as ii,s as ni,t as ze,u as je,v as ve}from"./chunk-NEIQK6KX.js";import{a as fe,b as Xt,c as Qt}from"./chunk-RL2OLLDZ.js";import{$ as Kt,F as xt,G as wt,H as Et,I as Ft,J as Pt,L as Rt,N as w,O as At,P as Bt,Q as Lt,R as Nt,T as Vt,U as Ht,V as ge,W as Wt,Y as zt,Z as jt,_ as Yt,a as gt,aa as qt,ba as Gt,ea as Ut,f as X,fa as $t,g as ft,h as bt,k as Ne,r as Mt,t as j,u as Ct,v as kt,w as ue,x as St,y as Ve}from"./chunk-B3NDKEFL.js";import{m as yt,o as vt,x as he,y as _e}from"./chunk-4TKGLXVD.js";import{$b as de,B as Ze,Bb as re,C as $,Cb as pt,Db as f,E as Je,Eb as ht,Fb as u,Gb as G,Hb as B,Ib as oe,Jb as se,Kb as y,Lb as v,M as F,N,O as E,Oa as m,Pb as le,Rb as W,Sa as rt,Sb as ce,Ta as ot,Tb as d,U as et,Ub as M,V as Z,Va as ee,Vb as me,X as D,Xa as st,Ya as lt,Z as s,a as U,ab as O,bb as te,ca as P,cb as ie,d as b,da as R,ea as J,fb as ct,ga as V,gb as mt,ha as tt,hb as dt,j as Re,ka as C,la as it,lc as _t,n as Ae,nb as T,ob as S,pa as A,pb as x,qc as z,ra as nt,rb as ne,s as $e,sb as ae,sc as g,tb as _,tc as Le,ua as H,ub as l,va as at,vb as c,w as I,wb as k,x as q,xb as Be,yb as ut}from"./chunk-EOK4J5D5.js";import{a as L,b as Ue}from"./chunk-IONH7NRB.js";var hi=class n{searchSubject=new b;searchTerm=Zt(this.searchSubject.pipe(Ze(300),Je()),{initialValue:""});search(r){this.searchSubject.next(r)}clear(){this.searchSubject.next("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=et({token:n,factory:n.\u0275fac,providedIn:"root"})};var Q=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new b;constructor(r=!1,e,t=!0,i){this._multiple=r,this._emitChanges=t,this.compareWith=i,e&&e.length&&(r?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...r){this._verifyValueAssignment(r),r.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...r){this._verifyValueAssignment(r),r.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...r){this._verifyValueAssignment(r);let e=this.selected,t=new Set(r.map(a=>this._getConcreteValue(a)));r.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(r){return this.isSelected(r)?this.deselect(r):this.select(r)}clear(r=!0){this._unmarkAll();let e=this._hasQueuedChanges();return r&&this._emitChangeEvent(),e}isSelected(r){return this._selection.has(this._getConcreteValue(r))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(r){this._multiple&&this.selected&&this._selected.sort(r)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(r){r=this._getConcreteValue(r),this.isSelected(r)||(this._multiple||this._unmarkAll(),this.isSelected(r)||this._selection.add(r),this._emitChanges&&this._selectedToEmit.push(r))}_unmarkSelected(r){r=this._getConcreteValue(r),this.isSelected(r)&&(this._selection.delete(r),this._emitChanges&&this._deselectedToEmit.push(r))}_unmarkAll(){this.isEmpty()||this._selection.forEach(r=>this._unmarkSelected(r))}_verifyValueAssignment(r){r.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(r,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(r,t))return t;return r}else return r}};var vi=["trigger"],Mi=["panel"],Ci=[[["mat-select-trigger"]],"*"],ki=["mat-select-trigger","*"];function Si(n,r){if(n&1&&(l(0,"span",4),d(1),c()),n&2){let e=u();m(),M(e.placeholder)}}function xi(n,r){n&1&&B(0)}function wi(n,r){if(n&1&&(l(0,"span",11),d(1),c()),n&2){let e=u(2);m(),M(e.triggerValue)}}function Di(n,r){if(n&1&&(l(0,"span",5),S(1,xi,1,0)(2,wi,2,1,"span",11),c()),n&2){let e=u();m(),x(e.customTrigger?1:2)}}function Oi(n,r){if(n&1){let e=re();l(0,"div",12,1),f("keydown",function(i){P(e);let a=u();return R(a._handleKeydown(i))}),B(2,1),c()}if(n&2){let e=u();ce(e.panelClass),W("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),T("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ti=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(V);return()=>ye(n)}}),Ii=new D("MAT_SELECT_CONFIG"),Ei=new D("MatSelectTrigger"),Ye=class{source;value;constructor(r,e){this.source=r,this.value=e}},_i=(()=>{class n{_viewportRuler=s(We);_changeDetectorRef=s(z);_elementRef=s(H);_dir=s(he,{optional:!0});_idGenerator=s(ue);_renderer=s(ee);_parentFormField=s(qt,{optional:!0});ngControl=s(At,{self:!0,optional:!0});_liveAnnouncer=s(Mt);_defaultOptions=s(Ii,{optional:!0});_animationsDisabled=X();_popoverLocation;_initialized=new b;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Tt(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=It(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ye(this,e)}_scrollStrategyFactory=s(Ti);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new b;_errorStateTracker;stateChanges=new b;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=A(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(w.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=$e(()=>{let e=this.options;return e?e.changes.pipe(F(e),N(()=>I(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(N(()=>this.optionSelectionChanges))});openedChange=new C;_openedStream=this.openedChange.pipe(q(e=>e),Ae(()=>{}));_closedStream=this.openedChange.pipe(q(e=>!e),Ae(()=>{}));selectionChange=new C;valueChange=new C;constructor(){let e=s(gt),t=s(Nt,{optional:!0}),i=s(ge,{optional:!0}),a=s(new _t("tabindex"),{optional:!0}),o=s(ii,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ft(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Q(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(E(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(E(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(F(null),E(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe($(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Ve(this._trackedModal,"aria-owns",t),St(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ve(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!j(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;o.onKeydown(e);let h=this.selected;h&&p!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!j(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(p?h.select():h.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!j(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ze?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ct(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=I(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(E(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),I(...this.options.map(t=>t._stateChanges)).pipe(E(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=yt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&oe(a,Ei,5)(a,pe,5)(a,Ot,5),t&2){let o;y(o=v())&&(i.customTrigger=o.first),y(o=v())&&(i.options=o),y(o=v())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&se(vi,5)(Mi,5)(je,5),t&2){let a;y(a=v())&&(i.trigger=a.first),y(a=v())&&(i.panel=a.first),y(a=v())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&f("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(T("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),W("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",g],disableRipple:[2,"disableRipple","disableRipple",g],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Le(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",g],placeholder:"placeholder",required:[2,"required","required",g],multiple:[2,"multiple","multiple",g],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",g],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Le],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",g]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[de([{provide:Kt,useExisting:n},{provide:Dt,useExisting:n}]),nt],ngContentSelectors:ki,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(G(Ci),l(0,"div",2,0),f("click",function(){return i.open()}),l(3,"div",3),S(4,Si,2,1,"span",4)(5,Di,3,1,"span",5),c(),l(6,"div",6)(7,"div",7),J(),l(8,"svg",8),k(9,"path",9),c()()()(),mt(10,Oi,3,16,"ng-template",10),f("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(o){return i._handleOverlayKeydown(o)})),t&2){let a=le(1);m(3),T("id",i._valueId),m(),x(i.empty?4:5),m(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[ze,je],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var gi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=Z({imports:[ve,He,_e,be,fe,He]})}return n})();var fi=(n,r)=>r.value,Ri=(n,r)=>r._id;function Ai(n,r){if(n&1&&(l(0,"mat-option",11),d(1),c()),n&2){let e=r.$implicit;_("value",e.value),m(),M(e.label)}}function Bi(n,r){if(n&1&&(l(0,"mat-option",11),d(1),c()),n&2){let e=r.$implicit;_("value",e.value),m(),M(e.label)}}function Li(n,r){n&1&&(l(0,"span",22),d(1,"Me"),c())}function Ni(n,r){if(n&1&&(l(0,"mat-option",11),d(1),S(2,Li,2,0,"span",22),c()),n&2){let e,t=r.$implicit,i=u();_("value",t._id),m(),me(" ",t.name," "),m(),x(t._id===((e=i.authService.currentUser())==null?null:e._id)?2:-1)}}var Oe=class n{task;submitButtonText="Submit";formSubmit=new C;formCancel=new C;authService=s(Pt);today=new Date;taskForm;fb=s(Wt);usersService=s(ai);statusOptions=[{value:"todo",label:"To Do"},{value:"in_progress",label:"In Progress"},{value:"done",label:"Done"}];priorityOptions=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}];constructor(){}ngOnInit(){this.initForm(),this.usersService.loadUsers(!0)}initForm(){this.taskForm=this.fb.group({title:[this.task?.title||"",[w.required,w.minLength(3)]],description:[this.task?.description||"",[w.required]],status:[this.task?.status||"todo",[w.required]],priority:[this.task?.priority,[w.required]],dueDate:[this.task?.dueDate?new Date(this.task.dueDate+"T00:00:00"):null,[w.required]],assignee:[this.task?.assignee?._id||this.authService.currentUser()?._id,[w.required]],tags:[this.task?.tags||[]]}),this.task&&this.taskForm.markAllAsTouched()}onSubmit(){if(this.taskForm.valid){let r=L({},this.taskForm.value);if(r.dueDate instanceof Date){let e=r.dueDate;r.dueDate=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}this.formSubmit.emit(L({},r))}else this.taskForm.markAllAsTouched()}onCancel(){this.formCancel.emit()}getFieldError(r){let e=this.taskForm.get(r);if(e?.hasError("required"))return"This field is required";if(e?.hasError("minlength"))return`Minimum length is ${e.errors?.minlength.requiredLength}`;if(e?.hasError("email"))return"Invalid email format";if(r==="dueDate"){if(e?.hasError("matDatepickerMin"))return"Due date cannot be in the past";if(e?.hasError("matDatepickerMax"))return"Due date cannot be in the future"}return""}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-task-form"]],inputs:{task:"task",submitButtonText:"submitButtonText"},outputs:{formSubmit:"formSubmit",formCancel:"formCancel"},decls:58,vars:11,consts:[["dueDatePicker",""],[1,"task-form",3,"ngSubmit","formGroup"],[1,"field","d-flex","flex-column"],["for","title",1,"label"],["appearance","outline",1,"full-width"],["matInput","","formControlName","title","placeholder","Enter task title"],["for","description",1,"label"],["matInput","","formControlName","description","placeholder","Enter task description","rows","4"],[1,"form-row"],["for","status",1,"label"],["formControlName","status","placeholder","Status"],[3,"value"],["for","priority",1,"label"],["formControlName","priority","placeholder","Priority"],["for","dueDate",1,"label"],["matInput","","formControlName","dueDate","placeholder","MM/DD/YYYY","readonly","",3,"matDatepicker","min"],["matIconSuffix","",3,"for"],["for","assignee",1,"label"],["formControlName","assignee","placeholder","Assignee"],[1,"form-actions"],["mat-button","","type","button",3,"click"],["mat-button","","type","submit",1,"btn-primary",3,"disabled"],[1,"me-badge"]],template:function(e,t){if(e&1&&(l(0,"form",1),f("ngSubmit",function(){return t.onSubmit()}),l(1,"div",2)(2,"label",3),d(3,"Title"),c(),l(4,"mat-form-field",4),k(5,"input",5),l(6,"mat-error"),d(7),c()()(),l(8,"div",2)(9,"label",6),d(10,"Description"),c(),l(11,"mat-form-field",4),k(12,"textarea",7),l(13,"mat-error"),d(14),c()()(),l(15,"div",8)(16,"div",2)(17,"label",9),d(18,"Status"),c(),l(19,"mat-form-field",4)(20,"mat-select",10),ne(21,Ai,2,2,"mat-option",11,fi),c(),l(23,"mat-error"),d(24),c()()(),l(25,"div",2)(26,"label",12),d(27,"Priority"),c(),l(28,"mat-form-field",4)(29,"mat-select",13),ne(30,Bi,2,2,"mat-option",11,fi),c(),l(32,"mat-error"),d(33),c()()()(),l(34,"div",2)(35,"label",14),d(36,"Due Date"),c(),l(37,"mat-form-field",4),k(38,"input",15)(39,"mat-datepicker-toggle",16)(40,"mat-datepicker",null,0),l(42,"mat-error"),d(43),c()()(),l(44,"div",2)(45,"label",17),d(46,"Assignee"),c(),l(47,"mat-form-field",4)(48,"mat-select",18),ne(49,Ni,3,3,"mat-option",11,Ri),c(),l(51,"mat-error"),d(52),c()()(),l(53,"div",19)(54,"button",20),f("click",function(){return t.onCancel()}),d(55,"Cancel"),c(),l(56,"button",21),d(57,"Save"),c()()()),e&2){let i=le(41);_("formGroup",t.taskForm),m(7),M(t.getFieldError("title")),m(7),M(t.getFieldError("description")),m(7),ae(t.statusOptions),m(3),M(t.getFieldError("status")),m(6),ae(t.priorityOptions),m(3),M(t.getFieldError("priority")),m(5),_("matDatepicker",i)("min",t.today),m(),_("for",i),m(4),M(t.getFieldError("dueDate")),m(6),ae(t.usersService.users()),m(3),M(t.getFieldError("assignee")),m(4),_("disabled",t.taskForm.invalid)}},dependencies:[zt,Vt,Rt,Bt,Lt,ge,Ht,fe,Gt,jt,Yt,Qt,Xt,gi,_i,pe,$t,Ut,ui,ci,mi,di],styles:[".task-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;max-width:800px;background-color:var(--color-primary-contrast);border-radius:var(--radius-md)}.full-width[_ngcontent-%COMP%]{width:100%}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:640px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}.assignee-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;padding:1rem 1.5rem;border-radius:.5rem;background-color:var(--color-body-bg)}.assignee-title[_ngcontent-%COMP%]{margin:0 0 .5rem;font-weight:600;font-size:.9375rem;color:var(--mat-sys-on-surface-variant)}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.75rem}"]})};function Vi(n,r){if(n&1&&(l(0,"div",1),d(1),c()),n&2){let e=u();m(),me(" ",e.errorMessage()," ")}}function Hi(n,r){n&1&&(l(0,"div",2),k(1,"div",4),l(2,"p"),d(3,"Creating task..."),c()())}var bi=class n{taskService=s(pi);dialogRef=s(ri);isSubmitting=A(!1);errorMessage=A("");onFormSubmit(r){this.isSubmitting.set(!0),this.errorMessage.set(""),this.taskService.createTask(r).subscribe({next:()=>{this.dialogRef.close(!0)},error:e=>{console.error("Error creating task:",e),this.errorMessage.set("Failed to create task. Please try again."),this.isSubmitting.set(!1)},complete:()=>{this.isSubmitting.set(!1)}})}onFormCancel(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["app-task-add"]],decls:6,vars:3,consts:[["mat-dialog-title",""],[1,"error-banner"],[1,"loading-overlay"],[3,"formSubmit","formCancel","submitButtonText"],[1,"spinner"]],template:function(e,t){e&1&&(l(0,"h2",0),d(1,"Create New Task"),c(),l(2,"mat-dialog-content"),S(3,Vi,2,1,"div",1),S(4,Hi,4,0,"div",2),l(5,"app-task-form",3),f("formSubmit",function(a){return t.onFormSubmit(a)})("formCancel",function(){return t.onFormCancel()}),c()()),e&2&&(m(3),x(t.errorMessage()?3:-1),m(),x(t.isSubmitting()?4:-1),m(),_("submitButtonText","Create Task"))},dependencies:[Oe,li,oi,si],styles:[".task-add-container[_ngcontent-%COMP%]{padding:2rem}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#111827;margin:0 0 .5rem}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:1rem;margin:0}.error-banner[_ngcontent-%COMP%]{background-color:#fee2e2;color:#991b1b;padding:1rem;border-radius:.5rem;margin-bottom:1.5rem;border-left:4px solid #ef4444}.loading-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1000}.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:50px;height:50px;border:4px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite}.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin-top:1rem;font-size:1.125rem}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})};var Wi=["mat-menu-item",""],zi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ji=["mat-icon, [matMenuItemIcon]","*"];function Yi(n,r){n&1&&(J(),l(0,"svg",2),k(1,"polygon",3),c())}var Ki=["*"];function qi(n,r){if(n&1){let e=re();Be(0,"div",0),ht("click",function(){P(e);let i=u();return R(i.closed.emit("click"))})("animationstart",function(i){P(e);let a=u();return R(a._onAnimationStart(i.animationName))})("animationend",function(i){P(e);let a=u();return R(a._onAnimationDone(i.animationName))})("animationcancel",function(i){P(e);let a=u();return R(a._onAnimationDone(i.animationName))}),Be(1,"div",1),B(2),ut()()}if(n&2){let e=u();ce(e._classList),W("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),pt("id",e.panelId),T("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Xe=new D("MAT_MENU_PANEL"),Ge=(()=>{class n{_elementRef=s(H);_document=s(tt);_focusMonitor=s(Ne);_parentMenu=s(Xe,{optional:!0});_changeDetectorRef=s(z);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new b;_focused=new b;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(vt).load(wt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&f("click",function(o){return i._checkDisabled(o)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(T("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),W("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",g],disableRipple:[2,"disableRipple","disableRipple",g]},exportAs:["matMenuItem"],attrs:Wi,ngContentSelectors:ji,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(G(zi),B(0),l(1,"span",0),B(2,1),c(),k(3,"div",1),S(4,Yi,2,0,":svg:svg",2)),t&2&&(m(3),_("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),m(),x(i._triggersSubmenu?4:-1))},dependencies:[xt],encapsulation:2,changeDetection:0})}return n})();var Gi=new D("MatMenuContent");var Xi=new D("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),qe="_mat-menu-enter",Te="_mat-menu-exit",Ie=(()=>{class n{_elementRef=s(H);_changeDetectorRef=s(z);_injector=s(V);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=X();_allItems;_directDescendantItems=new at;_classList={};_panelAnimationState="void";_animationDone=new b;_isAnimating=A(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,i=L({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new C;close=this.closed;panelId=s(ue).getId("mat-menu-panel-");constructor(){let e=s(Xi);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new kt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(F(this._directDescendantItems),N(e=>I(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[a]&&!i[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(F(this._directDescendantItems),N(t=>I(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:j(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=rt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ue(L({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Te;(t||e===qe)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===qe||e===Te)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Te),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?qe:Te)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(F(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,a){if(t&1&&oe(a,Gi,5)(a,Ge,5)(a,Ge,4),t&2){let o;y(o=v())&&(i.lazyContent=o.first),y(o=v())&&(i._allItems=o),y(o=v())&&(i.items=o)}},viewQuery:function(t,i){if(t&1&&se(ot,5),t&2){let a;y(a=v())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(t,i){t&2&&T("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",g],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:g(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[de([{provide:Xe,useExisting:n}])],ngContentSelectors:Ki,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(G(),dt(0,qi,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),Qi=new D("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(V);return()=>ye(n)}});var Y=new WeakMap,Ui=(()=>{class n{_canHaveBackdrop;_element=s(H);_viewContainerRef=s(lt);_menuItemInstance=s(Ge,{optional:!0,self:!0});_dir=s(he,{optional:!0});_focusMonitor=s(Ne);_ngZone=s(it);_injector=s(V);_scrollStrategy=s(Qi);_changeDetectorRef=s(z);_animationsDisabled=X();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=U.EMPTY;_menuCloseSubscription=U.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(Xe,{optional:!0});this._parentMaterialMenu=t instanceof Ie?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Y.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Y.get(t);Y.set(t,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(t),o=a.getConfig(),p=o.positionStrategy;this._setPosition(t,p),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Ie&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(E(t.close)).subscribe(()=>{p.withLockedPosition(!1).reapplyLastPosition(),p.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Ie&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe($(1)).subscribe(()=>{t.detach(),Y.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Y.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ni(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Ie&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new ei({positionStrategy:ti(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",o=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,o)})})}_setPosition(e,t){let[i,a]=e.xPosition==="before"?["end","start"]:["start","end"],[o,p]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,Ee]=[o,p],[Fe,Pe]=[i,a],K=0;if(this._triggersSubmenu()){if(Pe=i=e.xPosition==="before"?"start":"end",a=Fe=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Qe=this._parentMaterialMenu.items.first;this._parentInnerPadding=Qe?Qe._getHostElement().offsetTop:0}K=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=o==="top"?"bottom":"top",Ee=p==="top"?"bottom":"top");t.withPositions([{originX:i,originY:h,overlayX:Fe,overlayY:o,offsetY:K},{originX:a,originY:h,overlayX:Pe,overlayY:o,offsetY:K},{originX:i,originY:Ee,overlayX:Fe,overlayY:p,offsetY:-K},{originX:a,originY:Ee,overlayX:Pe,overlayY:p,offsetY:-K}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Re(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(q(o=>this._menuOpen&&o!==this._menuItemInstance)):Re();return I(e,i,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Jt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Y.get(e)===this}_triggerIsAriaDisabled(){return g(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){st()};static \u0275dir=ie({type:n})}return n})(),La=(()=>{class n extends Ui{_cleanupTouchstart;_hoverSubscription=U.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new C;onMenuOpen=this.menuOpened;menuClosed=new C;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(ee);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{bt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ft(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ie({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&f("click",function(o){return i._handleClick(o)})("mousedown",function(o){return i._handleMousedown(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&T("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ct]})}return n})();var Na=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=Z({imports:[Et,ve,_e,be]})}return n})();export{hi as a,Ge as b,Ie as c,La as d,Na as e,_i as f,gi as g,Oe as h,bi as i};
