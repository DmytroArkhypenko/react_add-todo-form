(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=a(6),l=a(9),c=a(2),u=a(3),m=a(5),d=a(4),h=(a(15),a(16),a(17),a(18),function(e){var t=e.user;return r.a.createElement("div",null,t.name)});h.defaultProps={user:{}};var p=function(e){var t=e.todo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"border"},r.a.createElement("input",{type:"checkbox",defaultChecked:t.completed}),r.a.createElement("div",null,t.title),r.a.createElement(h,{user:t.user})))};p.defaultProps={todo:{}};var b=function(e){var t=e.todos;return r.a.createElement("div",{className:"todoList"},r.a.createElement("h3",{className:"header"},"Todo List"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{todo:e}))}))))};b.defaultProps={todos:[]};var f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],E=a(1),y=(a(19),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todoTitle:"",userId:"",titleError:"",userError:"",tooLongError:"",counter:0},e.validate=function(){e.setState((function(t){t.userId&&e.setState({userError:""}),t.todoTitle&&e.setState({titleError:""}),t.todoTitle.length<=50&&e.setState({tooLongError:""})}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r)),e.validate()},e.submitionEvent=function(t){t.preventDefault();var a=e.state,n=a.todoTitle,r=a.userId,o=a.counter,s=e.props,i=s.addnewTodo,l=s.users;if(r)if(n)if(n.length>50)e.setState({tooLongError:"Input less then 50 symbols!"});else{e.setState({counter:o+1}),i({userId:l.find((function(e){return e.name===r})).id,id:o,title:n,completed:!1}),e.setState({todoTitle:"",userId:"",titleError:"",userError:"",tooLongError:""})}else e.setState({titleError:"Please enter the title!"});else e.setState({userError:"Please choose a user!"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todoTitle,a=e.userId,n=e.titleError,o=e.userError,s=e.tooLongError,i=this.props.users;return r.a.createElement("div",{className:"Form"},r.a.createElement("h3",{className:"header"},"Input form"),r.a.createElement("form",{onSubmit:this.submitionEvent},r.a.createElement("label",{className:"field",htmlFor:"userId"},"Select user who has to complete the task"),r.a.createElement("br",null),r.a.createElement("select",{className:"field",name:"userId",value:a,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select"),i.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("p",null,r.a.createElement("p",{className:"field"},r.a.createElement("label",{htmlFor:"todoTitle"},"Name a todo"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"todoTitle",label:"todo name",value:t,onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("span",{className:"field error"},n,s,o)),r.a.createElement("p",{className:"button"},r.a.createElement("button",{type:"submit"},"Add"))))}}]),a}(n.Component));y.defaultProps={users:[],todos:[]};var v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={listOfTodos:g},e.addnewTodo=function(t){e.setState((function(e){return{listOfTodos:[].concat(Object(l.a)(e.listOfTodos),[t])}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.listOfTodos;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"general-info"},r.a.createElement("h3",{className:"header"},"General Info"),r.a.createElement("p",{className:"field"},r.a.createElement("span",null,"People got "),e.length,r.a.createElement("span",null," todos")),r.a.createElement("p",{className:"field"},r.a.createElement("span",null,"Amount of users is "),f.length)),r.a.createElement(y,{addnewTodo:this.addnewTodo,users:f,todos:g}),r.a.createElement(b,{todos:e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:f.find((function(t){return t.id===e.userId}))})}))}))}}]),a}(n.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.feb21e1a.chunk.js.map