(this["webpackJsonpfood-policy"]=this["webpackJsonpfood-policy"]||[]).push([[0],{15:function(e,c,a){},17:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(10),r=a.n(t),i=(a(15),a(0));var l=function(){return Object(i.jsx)("div",{className:"header-sc",children:Object(i.jsx)("h1",{children:"Dashboard | Food Policy"})})},n=a(4),j=a(3),d=a(2);var b=function(e,c){var a=e.setParentCounter,t=Object(s.useState)({age:23,age_group:"16 to 65",totalHousehold:2,genderN:"male",ethnic:"malay",married:"notMarried",educationL:"spm",locality:"urban",ownership:"owned",centralDummy:"center",skill:"low skill"}),r=Object(n.a)(t,2),l=r[0],b=r[1];function o(e){var c=e.target,s=c.name,t=c.value;b((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))})),a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))}))}return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"title-for-card",children:" Please key in the demography "}),Object(i.jsxs)("div",{className:"card-demogrphy",children:[Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("label",{children:"Total Household :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",onChange:o,name:"totalHousehold",value:l.totalHousehold})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-2",children:[Object(i.jsx)("label",{children:"Gender :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{onChange:o,type:"radio",id:"male",name:"genderN",value:"male",checked:"male"===l.genderN}),Object(i.jsx)("label",{children:"Male"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"female",name:"genderN",value:"female",onChange:o,checked:"female"===l.genderN}),Object(i.jsx)("label",{children:"Female"})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-3",children:[Object(i.jsx)("label",{children:"Age Group :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"16to65",name:"age_group",value:"16 to 65",onChange:o,checked:"16 to 65"===l.age_group}),Object(i.jsx)("label",{children:"16 to 65"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:">65",name:"age_group",value:"more than 65",onChange:o,checked:"more than 65"===l.age_group}),Object(i.jsx)("label",{children:"more than 65"}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-3",children:[Object(i.jsx)("label",{children:"Ethnic :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"malay",name:"ethnic",value:"malay",onChange:o,checked:"malay"===l.ethnic}),Object(i.jsx)("label",{children:"Malay"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"chinese",name:"ethnic",value:"chinese",onChange:o,checked:"chinese"===l.ethnic}),Object(i.jsx)("label",{children:"Chinese"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"indian",name:"ethnic",value:"indian",onChange:o,checked:"indian"===l.ethnic}),Object(i.jsx)("label",{children:"Indian"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"others",name:"ethnic",value:"others",onChange:o,checked:"others"===l.ethnic}),Object(i.jsx)("label",{children:"Others"}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-2",children:[Object(i.jsx)("label",{children:"Marital Status :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"isMarried",onChange:o,name:"married",value:"isMarried",checked:"isMarried"===l.married}),Object(i.jsx)("label",{children:"Yes"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"notMarried",onChange:o,name:"married",value:"notMarried",checked:"notMarried"===l.married}),Object(i.jsx)("label",{children:"No"}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-3",children:[Object(i.jsx)("label",{children:"Education Level : "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"spm",name:"educationL",value:"spm",onChange:o,checked:"spm"===l.educationL}),Object(i.jsx)("label",{children:"SPM"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"diploma",name:"educationL",value:"diploma",onChange:o,checked:"diploma"===l.educationL}),Object(i.jsx)("label",{children:"Diploma "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"degree",name:"educationL",value:"degree",onChange:o,checked:"degree"===l.educationL}),Object(i.jsx)("label",{children:"Degree"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"other",name:"educationL",value:"other",onChange:o,checked:"other"===l.educationL}),Object(i.jsx)("label",{children:"Others"}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-2",children:[Object(i.jsx)("label",{children:"Locality :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"urban",name:"locality",value:"urban",onChange:o,checked:"urban"===l.locality}),Object(i.jsx)("label",{children:"Urban"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"rural",name:"locality",value:"rural",onChange:o,checked:"rural"===l.locality}),Object(i.jsx)("label",{children:"Rural "}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-2",children:[Object(i.jsx)("label",{htmlFor:"ownership",children:"Ownership :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"owned",name:"ownership",value:"owned",onChange:o,checked:"owned"===l.ownership}),Object(i.jsx)("label",{htmlFor:"urban",children:"Owned"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"rent",name:"ownership",value:"rent",onChange:o,checked:"rent"===l.ownership}),Object(i.jsx)("label",{htmlFor:"rural",children:"Rent "}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-3",children:[Object(i.jsx)("label",{htmlFor:"skill",children:"Skill :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"professional",name:"skill",value:"professional",onChange:o,checked:"professional"===l.skill}),Object(i.jsx)("label",{htmlFor:"Banglo",children:"Professional"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"low_skill",name:"skill",value:"low skill",onChange:o,checked:"low skill"===l.skill}),Object(i.jsx)("label",{htmlFor:"low_skill",children:"Low Skill "}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"card card-radiobtn-2",children:[Object(i.jsx)("label",{children:"Central Dummy :"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{onChange:o,type:"radio",id:"center",name:"centralDummy",value:"center",checked:"center"===l.centralDummy}),Object(i.jsx)("label",{children:"Center"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"radio",id:"other",name:"centralDummy",value:"other",onChange:o,checked:"other"===l.centralDummy}),Object(i.jsx)("label",{children:"Other"})]})]})]})})};var o=function(e,c){var a=e.setParentCounter,t=Object(s.useState)({rice:0,bread_cakes:0,freshmeat:0,freshfish:0,seafood:0,vegetables:0,others:0,fruits:0,price_rice:0,price_bread:0,price_freshfish:0,price_freshmeat:0,price_seafood:0,price_vegetable:0,price_fruits:0,price_others:0}),r=Object(n.a)(t,2),l=r[0],b=r[1];function o(e){var c=e.target,s=c.name,t=c.value;b((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))})),a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))}))}return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"grid-style-2",children:[Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:" Base Price Rice: "}),Object(i.jsx)("br",{}),"  ",Object(i.jsx)("input",{type:"text",name:"average_price_rice",value:"28.61"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Rice: ",l.rice/100*28.61+28.61," "]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"rice",value:l.rice,className:"slider",onChange:o})]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.rice," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:" Base Price Bread and Cakes:  "}),Object(i.jsx)("br",{})," RM ",Object(i.jsx)("input",Object(j.a)({type:"text",onChange:o,name:"price_bread",value:l.price_bread},"name","price_bread")),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" bread and cakes: RM ",l.price_bread," "]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"bread_cakes",value:l.bread_cakes,className:"slider",onChange:o}),"  "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.bread_cakes," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Fresh Meat: "})," ",Object(i.jsx)("br",{}),"  ",Object(i.jsx)("input",{type:"text",name:"average_fresh_meat",value:"20.26"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Fresh Meat: ",l.freshmeat/100*20.26+20.26," "]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"freshmeat",value:l.freshmeat,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.freshmeat," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Fresh Fish: "})," ",Object(i.jsx)("br",{}),"  ",Object(i.jsx)("input",{type:"text",name:"average_fresh_fish",value:"16.79"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Fresh Fish: ",l.freshfish/100*16.79+16.79," "]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"freshfish",value:l.freshfish,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.freshfish," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Fresh Seafood:"})," ",Object(i.jsx)("input",{type:"text",name:"average_fresh_seafood",value:"22.64"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Fresh Seafood: ",l.seafood/100*22.64+22.64," "]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"seafood",value:l.seafood,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.seafood," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Vegetables:"}),Object(i.jsx)("br",{})," ",Object(i.jsx)("input",{type:"text",name:"average_vegetables",value:"6.21"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Vegetables: ",l.vegetables/100*6.21+6.21," "]}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"vegetables",value:l.vegetables,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.vegetables," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Fruits:"})," ",Object(i.jsx)("input",{type:"text",name:"average_fruits",value:"6.20"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Fruits: ",l.fruits/100*6.2+6.2," "]}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"fruits",value:l.fruits,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.fruits," % "]})})]}),Object(i.jsxs)("div",{className:"card-2",children:[Object(i.jsx)("label",{children:"Base Price Others:"})," ",Object(i.jsx)("input",{type:"text",name:"average_fruits",value:"14280"}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:[" Others: ",l.others/100*14280+14280," "]}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{class:"value right",children:"-20"}),Object(i.jsxs)("div",{class:"slider-container",children:[Object(i.jsx)("span",{class:"bar",children:Object(i.jsx)("span",{class:"fill"})}),Object(i.jsx)("input",{type:"range",min:-20,max:30,name:"others",value:l.others,className:"slider",onChange:o})," "]}),Object(i.jsx)("div",{class:"value right",children:"30"})]}),Object(i.jsx)("div",{className:"diff-card",children:Object(i.jsxs)("label",{children:[" Difference Percentage: ",l.others," % "]})})]})]})})};var h=function(e){var c=e.setParentCounter,a=Object(s.useState)({income:2e3}),t=Object(n.a)(a,2),r=t[0],l=t[1];return Object(i.jsx)("div",{className:"income-grid",children:Object(i.jsxs)("div",{className:"card-income",children:[Object(i.jsx)("p",{children:"Please Enter your Income"}),Object(i.jsx)("input",{type:"text",onChange:function(e){var a=e.target,s=a.name,t=a.value;l((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))})),c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},s,t))}))},name:"income",value:r.income}),Object(i.jsx)("div",{})]})})},O=a(5),x=a(6),u=a(8),m=a(7),v=function(e){Object(u.a)(a,e);var c=Object(m.a)(a);function a(){var e;Object(O.a)(this,a);for(var s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return(e=c.call.apply(c,[this].concat(t))).onClick=function(){var c=e.props,a=c.label;(0,c.onClick)(a)},e}return Object(x.a)(a,[{key:"render",value:function(){var e=this.onClick,c=this.props,a=c.activeTab,s=c.label,t="tab-list-item";return a===s&&(t+=" tab-list-active"),Object(i.jsx)("li",{className:t,onClick:e,children:s})}}]),a}(s.Component),p=function(e){Object(u.a)(a,e);var c=Object(m.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=c.call(this,e)).onClickTabItem=function(e){s.setState({activeTab:e})},s.state={activeTab:s.props.children[0].props.label},s}return Object(x.a)(a,[{key:"render",value:function(){var e=this.onClickTabItem,c=this.props.children,a=this.state.activeTab;return Object(i.jsxs)("div",{className:"tabs",children:[Object(i.jsx)("ol",{className:"tab-list",children:c.map((function(c){var s=c.props.label;return Object(i.jsx)(v,{activeTab:a,label:s,onClick:e},s)}))}),Object(i.jsx)("div",{className:"tab-content",children:c.map((function(e){if(e.props.label===a)return e.props.children}))})]})}}]),a}(s.Component),f=a.p+"static/media/avatar.243f9d7f.jpg";var g=function(){var e,c,a,t,r,l,j,d,O,x,u,m,v=Object(s.useState)({rice:0,bread_cakes:0,freshmeat:0,freshfish:0,seafood:0,vegetables:0,fruits:0,others:0,age:23,age_group:"16 to 65",totalHousehold:"2",genderN:"male",ethnic:"malay",married:"notMarried",educationL:"spm",locality:"urban",ownership:"owned",skill:"professional",centralDummy:"center",income:2e3}),g=Object(n.a)(v,2),y=g[0],N=g[1],k=parseFloat(y.income),C=parseFloat(y.rice),_=parseFloat(y.bread_cakes),F=parseFloat(y.freshmeat),M=parseFloat(y.freshfish),P=parseFloat(y.seafood),w=parseFloat(y.vegetables),D=parseFloat(y.fruits),I=parseFloat(y.others),L=y.age_group,R=parseFloat(y.totalHousehold),B=y.genderN,S=y.ethnic,T=y.married,H=y.educationL,E=y.locality,G=y.ownership,A=y.skill,V=y.centralDummy;e=e=k<2848?"B40":k>2848&&k<6503?"M40":"T20";var J=("16 to 65"===L?(c=1,console.log(c)):c=0,"male"===B?(a=1,console.log(a)):a=0,r="isMarried"===T?1:0,l="urban"===E?1:0,t="malay"===S?1:0,"spm"===H?(j=1,d=0,O=0):"diploma"===H?(j=0,d=1,O=0):"degree"===H?(j=0,d=0,O=1):(j=0,d=0,O=0),x="owned"===G?1:0,u="low skill"===A?1:0,m="center"===V?1:0,a=parseInt(a),c=parseInt(c),r=parseInt(r),l=parseInt(l),j=parseInt(j),O=parseInt(O),d=parseInt(d),x=parseInt(x),u=parseInt(u),("B40"===e?668.64+-38.15*C+-8.26*F+-11.64*M+11.85*P+-17.84*D+104.26*w+-49.07*_+-15.13*I+.1103*k+23.64*c+-14.6*a+131.7*r+-7.96*t+9.59*l+107.18*R+28.55*O+28.74*x+20.52*u+18.38*m:"M40"===e?631.13+-104.14*C+1.22*F+4.88*M+1.28*P+38.19*D+126.18*w+-11.72*_+-31.48*I+.039*k+-28.98*c+-20.3*a+54.2683*r+-16.77*t+48.56*l+138.99*R+18.9469*O+36.76*x+-1.64*u+-42.45*m:1375.65+-137.86*C+2.08*F+8.09*M+-8.92*P+96.84*D+166.45*w+-23.28*_+-60.71*I+.0129*k+-121.39*c+-29.79*a+31.5471*r+-52.34*t+79.31*l+193.7*R+33.0565*O+80.73*x+.49*u+-38.28*m).toFixed(2));return Object(i.jsx)("div",{className:"content-sc",children:Object(i.jsxs)("div",{className:"grid-box",children:[Object(i.jsx)("div",{children:Object(i.jsxs)(p,{children:[Object(i.jsx)("div",{label:"Income Group",children:Object(i.jsx)(h,{setParentCounter:N})}),Object(i.jsx)("div",{label:"Demography",children:Object(i.jsx)("div",{className:"scroll",children:Object(i.jsx)("div",{className:"food-policy-container",children:Object(i.jsx)(b,{setParentCounter:N})})})}),Object(i.jsx)("div",{label:"Food Policy",children:Object(i.jsx)("div",{className:"scroll",children:Object(i.jsx)("div",{className:"food-policy-container",children:Object(i.jsx)(o,{setParentCounter:N})})})})]})}),Object(i.jsxs)("div",{className:"calculate",children:[Object(i.jsx)("div",{className:"total-expenditure-top"}),Object(i.jsx)("img",{className:"img",src:f,alt:"empty"}),Object(i.jsxs)("div",{className:"income-group",children:[Object(i.jsxs)("div",{children:["Income: RM ",y.income]}),Object(i.jsxs)("div",{children:["Income Group: ",e]})]}),Object(i.jsxs)("div",{className:"total-expenditure",children:[Object(i.jsxs)("div",{className:"summary-food",children:[Object(i.jsxs)("div",{children:[" Rice: RM ",C," "]}),Object(i.jsxs)("div",{children:[" Bread and Cakes: RM ",_," "]}),Object(i.jsxs)("div",{children:[" Fresh Meat: RM ",F," "]}),Object(i.jsxs)("div",{children:[" Fresh Fish: RM ",M," "]}),Object(i.jsxs)("div",{children:[" Fresh Seafood: RM ",P," "]}),Object(i.jsxs)("div",{children:[" Vegetables: RM ",w," "]}),Object(i.jsxs)("div",{children:[" Others: RM ",I," "]})]}),Object(i.jsx)("div",{className:"title-food-expenditure",children:" Total Food Expenditure: "}),Object(i.jsxs)("div",{className:"total-food-expenditure",children:[" RM: ",J," "]})]}),Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsxs)("div",{children:[" Total Household: ",R," "]}),Object(i.jsxs)("div",{children:[" Age Group: ",L," "]}),Object(i.jsxs)("div",{children:[" Gender: ",B," "]}),Object(i.jsxs)("div",{children:[" Ethnic: ",S," "]}),Object(i.jsxs)("div",{children:[" Marital Status: ",T," "]}),Object(i.jsxs)("div",{children:[" Education Level: ",H," "]}),Object(i.jsxs)("div",{children:[" Locality :  ",E," "]}),Object(i.jsxs)("div",{children:[" House Ownership: ",G," "]})]})]})]})})};var y=function(){return Object(i.jsxs)("div",{className:"container-sc",children:[Object(i.jsx)(l,{}),Object(i.jsx)(g,{}),Object(i.jsx)("div",{className:"footer",children:"Footer"})]})};r.a.render(Object(i.jsx)("div",{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9a0ea3d7.chunk.js.map