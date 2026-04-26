import{b as C,f as k}from"./chunk-DLWIRV3I.js";import{A as O,B as V,C as H,b as E,d as p,f as j,g as I,i as P,j as N,k as T,l as D,n as F,o as R,p as A,q as z,t as L,u as W,w as B,x as q,y as G}from"./chunk-RHSYMG56.js";import{X as ue,i as de}from"./chunk-673N66RW.js";import{Ab as y,Cc as pe,Db as x,Fb as w,Jb as ne,Kb as ae,Lb as oe,Oa as a,Pb as se,Qb as S,Rb as me,Sb as le,Tb as o,Ub as u,V as X,X as Y,Z as d,ab as h,bb as te,ea as U,fa as ee,fc as ce,gb as ie,nb as g,ob as b,pa as f,pb as v,tb as c,tc as M,ua as re,ub as t,vb as n,wb as l}from"./chunk-YRYBCETR.js";import"./chunk-IONH7NRB.js";var be=["determinateSpinner"];function ve(i,m){if(i&1&&(U(),t(0,"svg",11),l(1,"circle",12),n()),i&2){let e=w();g("viewBox",e._viewBox()),a(),S("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),g("r",e._circleRadius())}}var xe=new Y("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ge})}),ge=100,we=10,J=(()=>{class i{_elementRef=d(re);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=d(xe),r=de(),s=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=s.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&s.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ge;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-we)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=h({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,s){if(r&1&&ne(be,5),r&2){let _;ae(_=oe())&&(s._determinateCircle=_.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,s){r&2&&(g("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",s.mode==="determinate"?s.value:null)("mode",s.mode),le("mat-"+s.color),S("width",s.diameter,"px")("height",s.diameter,"px")("--mat-progress-spinner-size",s.diameter+"px")("--mat-progress-spinner-active-indicator-width",s.diameter+"px"),me("_mat-animation-noopable",s._noopAnimations)("mdc-circular-progress--indeterminate",s.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",M],diameter:[2,"diameter","diameter",M],strokeWidth:[2,"strokeWidth","strokeWidth",M]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,s){if(r&1&&(ie(0,ve,2,8,"ng-template",null,0,ce),t(2,"div",2,1),U(),t(4,"svg",3),l(5,"circle",4),n()(),ee(),t(6,"div",5)(7,"div",6)(8,"div",7),y(9,8),n(),t(10,"div",9),y(11,8),n(),t(12,"div",10),y(13,8),n()()()),r&2){let _=se(1);a(4),g("viewBox",s._viewBox()),a(),S("stroke-dasharray",s._strokeCircumference(),"px")("stroke-dashoffset",s._strokeDashOffset(),"px")("stroke-width",s._circleStrokeWidth(),"%"),g("r",s._circleRadius()),a(4),c("ngTemplateOutlet",_),a(2),c("ngTemplateOutlet",_),a(2),c("ngTemplateOutlet",_)}},dependencies:[pe],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Q=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=te({type:i});static \u0275inj=X({imports:[ue]})}return i})();function Ee(i,m){if(i&1&&(t(0,"div",2),o(1),n()),i&2){let e=w();a(),u(e.errorMessage())}}function je(i,m){i&1&&(l(0,"mat-spinner",10),o(1," Signing in... "))}function Ie(i,m){i&1&&o(0," Sign In ")}var $=class i{authService=d(k);router=d(C);fb=d(D);isSubmitting=f(!1);errorMessage=f("");showPassword=f(!1);form=this.fb.group({email:["",[p.required,p.email]],password:["",[p.required,p.minLength(6)]]});getFieldError(m){let e=this.form.get(m);return e?.touched?e.hasError("required")?"This field is required":e.hasError("email")?"Invalid email format":e.hasError("minlength")?`Minimum ${e.errors?.minlength.requiredLength} characters`:"":""}onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.isSubmitting.set(!0),this.errorMessage.set("");let{email:m,password:e}=this.form.value;this.authService.login(m,e).subscribe({next:()=>this.router.navigate(["/dashboard"]),error:r=>{this.errorMessage.set(r?.error?.message??"Invalid credentials. Please try again."),this.isSubmitting.set(!1)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-login"]],decls:25,vars:9,consts:[[1,"title"],[1,"subtitle"],["role","alert",1,"error-banner"],["novalidate","",1,"fields",3,"ngSubmit","formGroup"],["appearance","outline",1,"field","full-width"],["matInput","","formControlName","email","type","email","placeholder","you@example.com","autocomplete","email"],["matInput","","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","current-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[1,"spacer"],["type","submit",1,"btn-primary","submit-btn",3,"disabled"],["diameter","18"]],template:function(e,r){e&1&&(t(0,"h1",0),o(1,"Welcome back"),n(),t(2,"p",1),o(3,"Sign in to your account"),n(),b(4,Ee,2,1,"div",2),t(5,"form",3),x("ngSubmit",function(){return r.onSubmit()}),t(6,"mat-form-field",4)(7,"mat-label"),o(8,"Email"),n(),l(9,"input",5),t(10,"mat-error"),o(11),n()(),t(12,"mat-form-field",4)(13,"mat-label"),o(14,"Password"),n(),l(15,"input",6),t(16,"button",7),x("click",function(){return r.showPassword.set(!r.showPassword())}),t(17,"mat-icon"),o(18),n()(),t(19,"mat-error"),o(20),n()(),l(21,"div",8),t(22,"button",9),b(23,je,2,0)(24,Ie,1,0),n()()),e&2&&(a(4),v(r.errorMessage()?4:-1),a(),c("formGroup",r.form),a(6),u(r.getFieldError("email")),a(4),c("type",r.showPassword()?"text":"password"),a(),g("aria-label",r.showPassword()?"Hide password":"Show password"),a(2),u(r.showPassword()?"visibility_off":"visibility"),a(2),u(r.getFieldError("password")),a(2),c("disabled",r.isSubmitting()),a(),v(r.isSubmitting()?23:24))},dependencies:[F,P,E,j,I,T,N,W,L,R,A,z,q,B,O,G,H,V,Q,J],encapsulation:2})};function Pe(i,m){if(i&1&&(t(0,"div",2),o(1),n()),i&2){let e=w();a(),u(e.errorMessage())}}function Ne(i,m){i&1&&(l(0,"mat-spinner",10),o(1," Creating account... "))}function Te(i,m){i&1&&o(0," Create Account ")}var K=class i{authService=d(k);router=d(C);fb=d(D);isSubmitting=f(!1);errorMessage=f("");showPassword=f(!1);form=this.fb.group({name:["",[p.required,p.minLength(3)]],email:["",[p.required,p.email]],password:["",[p.required,p.minLength(6)]]});getFieldError(m){let e=this.form.get(m);return e?.touched?e.hasError("required")?"This field is required":e.hasError("email")?"Invalid email format":e.hasError("minlength")?`Minimum ${e.errors?.minlength.requiredLength} characters`:"":""}onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.isSubmitting.set(!0),this.errorMessage.set("");let{name:m,email:e,password:r}=this.form.value;this.authService.register(m,e,r).subscribe({next:()=>this.router.navigate(["/dashboard"]),error:s=>{this.errorMessage.set(s?.error?.message??"Registration failed. Please try again."),this.isSubmitting.set(!1)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-register"]],decls:30,vars:10,consts:[[1,"title"],[1,"subtitle"],["role","alert",1,"error-banner"],["novalidate","",1,"fields",3,"ngSubmit","formGroup"],["appearance","outline",1,"field","full-width"],["matInput","","formControlName","name","placeholder","e.g. Jane Doe","autocomplete","name"],["matInput","","formControlName","email","type","email","placeholder","you@example.com","autocomplete","email"],["matInput","","formControlName","password","placeholder","Min. 6 characters","autocomplete","new-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["type","submit",1,"btn-secondary","submit-btn",3,"disabled"],["diameter","18"]],template:function(e,r){e&1&&(t(0,"h1",0),o(1,"Create an account"),n(),t(2,"p",1),o(3,"Get started today \u2014 it's free"),n(),b(4,Pe,2,1,"div",2),t(5,"form",3),x("ngSubmit",function(){return r.onSubmit()}),t(6,"mat-form-field",4)(7,"mat-label"),o(8,"Full Name"),n(),l(9,"input",5),t(10,"mat-error"),o(11),n()(),t(12,"mat-form-field",4)(13,"mat-label"),o(14,"Email"),n(),l(15,"input",6),t(16,"mat-error"),o(17),n()(),t(18,"mat-form-field",4)(19,"mat-label"),o(20,"Password"),n(),l(21,"input",7),t(22,"button",8),x("click",function(){return r.showPassword.set(!r.showPassword())}),t(23,"mat-icon"),o(24),n()(),t(25,"mat-error"),o(26),n()(),t(27,"button",9),b(28,Ne,2,0)(29,Te,1,0),n()()),e&2&&(a(4),v(r.errorMessage()?4:-1),a(),c("formGroup",r.form),a(6),u(r.getFieldError("name")),a(6),u(r.getFieldError("email")),a(4),c("type",r.showPassword()?"text":"password"),a(),g("aria-label",r.showPassword()?"Hide password":"Show password"),a(2),u(r.showPassword()?"visibility_off":"visibility"),a(2),u(r.getFieldError("password")),a(),c("disabled",r.isSubmitting()),a(),v(r.isSubmitting()?28:29))},dependencies:[F,P,E,j,I,T,N,W,L,R,A,z,q,B,O,G,H,V,Q,J],encapsulation:2})};var _e=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-join"]],decls:15,vars:0,consts:[[1,"join-page"],[1,"join-page__header"],[1,"logo-lockup"],[1,"logo-icon"],["src","icons/logo.svg","alt",""],[1,"logo-name"],[1,"header-sub","m-0"],[1,"join-page__cards"],[1,"card"],[1,"join-page__divider"],[1,"divider-label"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),l(4,"img",4),n(),t(5,"span",5),o(6,"Task Manager"),n()(),t(7,"p",6),o(8,"Organize your work, one task at a time"),n()(),t(9,"div",7),l(10,"app-login",8),t(11,"div",9)(12,"span",10),o(13,"or"),n()(),l(14,"app-register",8),n()())},dependencies:[$,K],styles:[`.join-page:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(100,116,139,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(100,116,139,.06) 1px,transparent 1px);background-size:32px 32px;pointer-events:none}.join-page{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:var(--color-body-bg);background-image:radial-gradient(ellipse 70% 60% at 20% 10%,rgba(59,130,246,.12) 0%,transparent 70%),radial-gradient(ellipse 60% 50% at 85% 80%,rgba(99,102,241,.1) 0%,transparent 65%),radial-gradient(ellipse 50% 40% at 60% 40%,rgba(14,165,233,.07) 0%,transparent 60%)}.join-page__header{display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:2rem;position:relative;z-index:1}.join-page__header .logo-lockup{display:flex;align-items:center;gap:10px}.join-page__header .logo-name{font-size:1.5rem;font-weight:600;color:#0f172a;letter-spacing:-.4px}.join-page__header .header-sub{font-size:1rem;color:#64748b;font-weight:400;letter-spacing:.01em}.join-page__cards{display:flex;align-items:stretch;gap:0;position:relative;z-index:1;width:100%;max-width:720px;background:#fff;border-radius:var(--radius-lg);box-shadow:0 1px 3px #0000000f,0 8px 32px #00000014,0 24px 64px #2563eb0f;overflow:hidden;border:1px solid rgba(226,232,240,.8)}@media(max-width:768px){.join-page__cards{flex-direction:column;align-items:center}}.join-page__divider{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 4px;flex-shrink:0;position:relative}.join-page__divider:before{content:"";position:absolute;top:0;bottom:0;left:50%;width:1px;background:linear-gradient(to bottom,transparent,#e2e8f0 20%,#e2e8f0 80%,transparent)}.join-page__divider .divider-label{background:#fff;font-size:11px;font-weight:600;color:#94a3b8;letter-spacing:.08em;padding:6px 4px;text-transform:uppercase;position:relative;z-index:1}app-join app-login.card,app-join app-register.card{flex:1;padding:2.25rem 2rem;display:flex;flex-direction:column}app-join app-login.card .title,app-join app-register.card .title{font-size:21px;font-weight:600;color:var(--color-dark);letter-spacing:-.3px;margin-bottom:4px}app-join app-login.card .subtitle,app-join app-register.card .subtitle{font-size:13px;color:var(--color-neutral);margin-bottom:2.5rem;font-weight:400}app-join app-login.card .fields,app-join app-register.card .fields{display:flex;flex-direction:column;gap:14px;flex:1}app-join app-login.card .fields .field,app-join app-register.card .fields .field{display:flex;flex-direction:column;gap:5px}app-join app-login.card .full-width,app-join app-register.card .full-width{width:100%}app-join app-login.card .submit-btn,app-join app-register.card .submit-btn{height:56px;font-size:1rem;font-weight:700}app-join app-login.card .error-banner,app-join app-register.card .error-banner{background:var(--color-badge-risk);color:var(--color-danger);border-radius:var(--radius-md);padding:.625rem .875rem;font-size:.875rem;margin-bottom:1rem}app-join app-login .spacer,app-join app-register .spacer{flex:1}
`],encapsulation:2})};export{_e as JoinComponent};
