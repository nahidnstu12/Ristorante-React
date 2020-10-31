(this["webpackJsonpreact-practise"]=this["webpackJsonpreact-practise"]||[]).push([[0],{147:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(99),t(27)),s=t(28),m=t(30),i=t(29),u=t(152),d=t(153),E=t(154),h=t(155),f=t(156),p=t(157),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},b="http://localhost:3005/",N=t(23);function v(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(g,null):n?r.a.createElement("h4",null,n):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("strong",null,a.name)),a.designation?r.a.createElement(f.a,null,r.a.createElement("em",null,a.designation)):null,r.a.createElement(p.a,null,a.description))))}var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMsg})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},M=t(158),O=t(159),k=t(160),w=t(10);function L(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(w.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(M.a,{body:!0,className:"ml-5"},r.a.createElement(h.a,{heading:!0},a.name))))}var S=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 mt-1",key:e.id},r.a.createElement(L,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.dishes.errMsg?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(w.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},j=t(161),D=t(162);function C(e){var a=e.leader;return r.a.createElement(N.Fade,{in:!0},r.a.createElement("div",{key:a.id,className:"col-12 mt-5"},r.a.createElement(j.a,{tag:"li"},r.a.createElement(j.a,{left:!0,middle:!0},r.a.createElement(j.a,{object:!0,src:b+a.image,alt:a.name})),r.a.createElement(j.a,{body:!0,className:"ml-5"},r.a.createElement(j.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description)))))}function F(e){var a=e.isLoading,t=e.errMess,n=e.leaders;return a?r.a.createElement(g,null):t?r.a.createElement("h4",null,t):r.a.createElement(N.Stagger,{in:!0},r.a.createElement(j.a,{list:!0},n))}var x=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement(C,{leader:e})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(w.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(D.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(F,{isLoading:e.leaders.isLoading,errMess:e.leaders.errMess,leaders:a}))))},T=t(31),A=t(163),I=t(164),R=t(165),q=t(166),_=t(8),P=function(e){return e&&e.length},H=function(e){return function(a){return!a||a.length<=e}},B=function(e){return function(a){return a&&a.length>=e}},U=function(e){return!isNaN(Number(e))},Y=function(e){return/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(e)},W=function(e){return/\S+@\S+\.\S+/.test(e)},G=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(T.a)(n)),n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){alert("Current State is:"+JSON.stringify(e)),this.props.resetFeedbackForm(),this.props.postFeedback(e.fname,e.lname,e.email,e.telnum,e.agree,e.contactType,e.message)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(w.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"italki_320941"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback"),r.a.createElement(_.Form,{onSubmit:function(a){return e.handleSubmit(a)},model:"feedback"},r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{md:2},"First Name"),r.a.createElement(R.a,{md:8},r.a.createElement(_.Control.text,{model:".fname",name:"fname",className:"form-control",placeholder:"First Name",validators:{required:P,minLength:B(3),maxLength:H(10)}}),r.a.createElement(_.Errors,{className:"text-danger",model:".fname",show:"touched",messages:{required:"Required\n",minLength:"Must be greater than 2 characters\n",maxLength:"Must be 10 characters or less\n"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(R.a,{md:8},r.a.createElement(_.Control.text,{model:".lname",id:"lastname",name:"lname",placeholder:"Last Name",className:"form-control",validators:{required:P,minLength:B(3),maxLength:H(10)}}),r.a.createElement(_.Errors,{className:"text-danger",model:".lname",show:"touched",messages:{required:"Required\n",minLength:"Must be greater than 2 characters\n",maxLength:"Must be 10 characters or less\n"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(R.a,{md:8},r.a.createElement(_.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:P,isNumber:U,isPhoneBD:Y}}),r.a.createElement(_.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required\n",isNumber:"Must be numbers\n",isPhoneBD:"Must be BD phone formate"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(R.a,{md:8},r.a.createElement(_.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:P,validEmail:W}}),r.a.createElement(_.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required\n",validEmail:"Invalid Email"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(R.a,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(I.a,{check:!0},r.a.createElement(_.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(R.a,{md:{size:3,offset:1}},r.a.createElement(_.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(R.a,{md:8},r.a.createElement(_.Control.textarea,{model:".message",id:"message",name:"message",rows:"6",className:"form-control",validators:{required:P,maxLength:H(200)}}),r.a.createElement(_.Errors,{className:"text-danger",model:".message",show:"touched",messages:{required:"Required",maxLength:"Must be 200 or less"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(R.a,{md:{size:10,offset:2}},r.a.createElement(q.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),K=t(167),z=t(168),J=t(169),$=t(170),Q=t(171),V=t(172),X=t(180),Z=t(173),ee=t(174),ae=t(175),te=t(176),ne=t(177),re=t(178),le=t(179),ce=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1,isModalTblOpen:!1},n.toggleNav=n.toggleNav.bind(Object(T.a)(n)),n.toggleModal=n.toggleModal.bind(Object(T.a)(n)),n.toggleModalTbl=n.toggleModalTbl.bind(Object(T.a)(n)),n}return Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"toggleModalTbl",value:function(){this.setState({isModalTblOpen:!this.state.isModalTblOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"handleReservation",value:function(e){this.toggleModalTbl()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(z.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(J.a,{onClick:this.toggleNav}),r.a.createElement($.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(Q.a,{navbar:!0,className:"ml-5"},r.a.createElement(V.a,null,r.a.createElement(w.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(V.a,null,r.a.createElement(w.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(V.a,null,r.a.createElement(w.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(V.a,null,r.a.createElement(w.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(Q.a,{navbar:!0,className:"ml-auto"},r.a.createElement(V.a,null,r.a.createElement(q.a,{outline:!0,onClick:this.toggleModalTbl},r.a.createElement("span",{className:"fa fa-utensils fa-lg"},"Reserve Table")))),r.a.createElement(Q.a,{navbar:!0,className:"mx-3"},r.a.createElement(V.a,null,r.a.createElement(q.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(X.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Login"),r.a.createElement(ee.a,null,r.a.createElement(ae.a,{onSubmit:this.handleLogin},r.a.createElement(te.a,null,r.a.createElement(I.a,{htmlFor:"username"},"Username"),r.a.createElement(ne.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a},required:!0})),r.a.createElement(te.a,null,r.a.createElement(I.a,{htmlFor:"password"},"Password"),r.a.createElement(ne.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a},required:!0})),r.a.createElement(te.a,{check:!0},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),r.a.createElement(q.a,{type:"submit",value:"submit",color:"primary"},"Login")))),r.a.createElement(X.a,{isOpen:this.state.isModalTblOpen,toggle:this.toggleModalTbl},r.a.createElement(Z.a,{toggle:this.toggleModalTbl},"Reserve Table"),r.a.createElement(ee.a,null,r.a.createElement(_.LocalForm,{onSubmit:function(a){return e.handleReservation(a)}},r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{md:3},"Number of Guests"),r.a.createElement(R.a,{md:8,className:"d-flex align-items-center"},r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"1")),r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"2")),r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"3")),r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"4")),r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"5")),r.a.createElement(te.a,{check:!0,className:"form-check-inline"},r.a.createElement(I.a,{check:!0},r.a.createElement(ne.a,{type:"radio",name:"radio1"}),"6")))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{md:3},"Section"),r.a.createElement(re.a,{className:"btn-group btn-group-toggle",md:8},r.a.createElement(I.a,{className:"btn btn-success"},"Non-Smoking",r.a.createElement(ne.a,{type:"radio",name:"options",checked:!0,value:"Non-Smoking"})),r.a.createElement(I.a,{className:"btn btn-danger"},"Smoking",r.a.createElement(ne.a,{type:"radio",name:"options",value:"Smoking"})))),r.a.createElement(A.a,{className:"form-row"},r.a.createElement(I.a,{md:3},"Date & Time"),r.a.createElement(R.a,{md:8,className:"d-flex"},r.a.createElement(ne.a,{type:"date",className:"form-control d-inline mr-2",placeholder:"Date"}),r.a.createElement(ne.a,{type:"time",className:"form-control d-inline",placeholder:"Time"}))),r.a.createElement(A.a,null,r.a.createElement(R.a,{md:3}),r.a.createElement(q.a,{color:"secondary",className:"mx-1 mt-3"},"Cancel"),r.a.createElement(q.a,{color:"primary",className:"mx-1 mt-3"},"Submit"))))),r.a.createElement(le.a,{style:{background:"#9575CD",Color:"floralwhite"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),t}(n.Component);var oe=function(e){return r.a.createElement("div",{className:"footer mt-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(w.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},se=function(e){return e&&e.length},me=function(e){return function(a){return!a||a.length<=e}};function ie(e){var a=e.dish;return null!=a?r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,a.name),r.a.createElement(p.a,null,a.description)))):r.a.createElement("div",null)}var ue=function(e){var a=e.comments,t=e.dishId,n=e.postComment;return null!=a?r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(N.Stagger,{in:!0},a.map((function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(de,{dishId:t,postComment:n})):r.a.createElement("div",null)},de=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.state={isModalOpen:!1},n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(X.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(Z.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(ee.a,null,r.a.createElement(_.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"rating",md:2},"Rating"),r.a.createElement(R.a,{md:10},r.a.createElement(_.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"name",md:2},"Your Name"),r.a.createElement(R.a,{md:10},r.a.createElement(_.Control.text,{model:".author",id:"name",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:se,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:me(15)}}),r.a.createElement(_.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(I.a,{htmlFor:"Comment",md:2},"Comment"),r.a.createElement(R.a,{md:10},r.a.createElement(_.Control.textarea,{model:".comment",id:"Comment",name:"comment",rows:"6",className:"form-control",validators:{required:se,maxLength:me(150)}}),r.a.createElement(_.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required",maxLength:"Must be 150 characters or less"}}))),r.a.createElement(A.a,{className:"form-group"},r.a.createElement(R.a,{md:{size:1,offset:2}},r.a.createElement(q.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component),Ee=function(e){return e.dishesLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.dishesErrMsg?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.errMess)))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(w.b,{to:"/menu"},"Menu")),r.a.createElement(k.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(ie,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(ue,{comments:e.commentList,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},he=t(11),fe=t(21),pe=function(){return{type:"LOAD_DISHES"}},ge=function(e){return{type:"FAIL_DISHES",payload:e}},be=function(e){return{type:"ADD_DISHES",payload:e}},Ne=function(){return{type:"PROMOS_LOADING"}},ve=function(e){return{type:"PROMOS_FAILED",payload:e}},ye=function(e){return{type:"ADD_PROMOS",payload:e}},Me=function(){return{type:"LEADER_LOADING"}},Oe=function(e){return{type:"LEADER_FAILED",payload:e}},ke=function(e){return{type:"ADD_LEADER",payload:e}},we=function(e){return{type:"COMMENTS_FAILED",payload:e}},Le=function(e){return{type:"ADD_COMMENTS",payload:e}},Se=function(e){return{type:"ADD_FEEDBACK",payload:e}},je=t(56),De=t(88),Ce=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchComment(),this.props.fetchPromos(),this.props.fetchDishes(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(ce,null),r.a.createElement(je.a,null,r.a.createElement(De.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(he.d,{location:this.props.location},r.a.createElement(he.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMsg:e.props.dishes.errMsg,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMsg:e.props.promotions.errMsg,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMsg:e.props.leaders.errMsg})}}),r.a.createElement(he.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(S,{dishes:e.props.dishes})}}),r.a.createElement(he.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(G,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(he.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(x,{leaders:e.props.leaders})}}),r.a.createElement(he.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(Ee,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMsg:e.props.dishes.errMsg,commentList:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),postComment:e.props.postComment,commentErrMsg:e.props.comments.errMsg})}}),r.a.createElement(he.a,{to:"/home"})))),r.a.createElement(oe,null))}}]),t}(n.Component),Fe=Object(he.g)(Object(fe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{fetchDishes:function(){return e((function(e){return e(pe()),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(be(a))})).catch((function(a){return e(ge(a.message))}))}))},resetFeedbackForm:function(){e(_.actions.reset("feedback"))},fetchComment:function(){return e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Le(a))})).catch((function(a){return e(we(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(Ne()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ye(a))})).catch((function(a){return e(ve(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Me()),fetch(b+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ke(a))})).catch((function(a){return e(Oe(a.message))}))}))},postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a,t,n,r,l,c,o){return e(function(e,a,t,n,r,l,c){return function(o){var s={firstname:e,lastname:a,email:t,tel:n,agree:r,contactType:l,message:c};return s.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return o(Se(e))})).catch((function(e){console.log("post Feedback",e.message),alert("Your Feedback could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,c,o))}}}))(Ce)),xe=(t(147),t(7)),Te=t(22),Ae=t(91),Ie=t(92),Re=t.n(Ie),qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_DISHES":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!0,errMsg:null,dishes:[]});case"FAIL_DISHES":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:a.payload});case"ADD_DISHES":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:null,dishes:a.payload});default:return e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMsg:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENT":return Object(xe.a)(Object(xe.a)({},e),{},{comments:e.comments.concat(a.payload)});case"COMMENTS_FAILED":return Object(xe.a)(Object(xe.a)({},e),{},{errMsg:a.payload,comments:[]});case"ADD_COMMENTS":return Object(xe.a)(Object(xe.a)({},e),{},{errMsg:null,comments:a.payload});default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PROMOS_LOADING":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!0,errMsg:null,promotions:[]});case"PROMOS_FAILED":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:a.payload});case"ADD_PROMOS":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:null,promotions:a.payload});default:return e}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LEADER_LOADING":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!0,errMsg:null,leaders:[]});case"LEADER_FAILED":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:a.payload});case"ADD_LEADER":return Object(xe.a)(Object(xe.a)({},e),{},{isLoading:!1,errMsg:null,leaders:a.payload});default:return e}},Be={fname:"",lname:"",telnum:"",email:"",agree:!1,contactType:"tel",message:""},Ue=Object(Te.createStore)(Object(Te.combineReducers)(Object(xe.a)({dishes:qe,comments:_e,promotions:Pe,leaders:He},Object(_.createForms)({feedback:Be}))),Object(Te.applyMiddleware)(Ae.a,Re.a)),Ye=function(){return r.a.createElement(fe.Provider,{store:Ue},r.a.createElement(w.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null))))};t(148),t(149),t(150),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports=t(151)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.49c36b9c.chunk.js.map