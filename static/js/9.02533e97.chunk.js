(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(t,e,n){"use strict";n.r(e);n(202);var o,i,r,u=n(192),a=(n(193),n(199)),c=(n(226),n(328)),d=n(191),s=n(228),l=n(201),f=n(229),p=n(230),h=(n(231),n(1)),y=n.n(h),b=n(204),k=n(331),m=(o=b.d.bound,i=function(){function t(){Object(l.a)(this,t),Object(s.a)(this,"todos",r,this)}return Object(f.a)(t,[{key:"add",value:function(t){this.todos.push({key:Math.random(),title:t})}},{key:"remove",value:function(t){this.todos=this.todos.filter(function(e){return e.key!==t})}},{key:"reset",value:function(){this.todos=[]}},{key:"unfinishedTodoCount",get:function(){return this.todos.filter(function(t){return!t.finished}).length}}]),t}(),r=Object(p.a)(i.prototype,"todos",[b.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(p.a)(i.prototype,"unfinishedTodoCount",[b.e],Object.getOwnPropertyDescriptor(i.prototype,"unfinishedTodoCount"),i.prototype),Object(p.a)(i.prototype,"add",[o],Object.getOwnPropertyDescriptor(i.prototype,"add"),i.prototype),i),O=Object(k.a)(function(t){var e=Object(h.useState)(""),n=Object(d.a)(e,2),o=n[0],i=n[1];return y.a.createElement("div",null,y.a.createElement("p",null,"\u672a\u5b8c\u6210\u7684\u4efb\u52a1\u6570: ",t.todoList.unfinishedTodoCount),y.a.createElement(c.a,{value:o,onChange:function(t){return i(t.target.value)}}),y.a.createElement(a.a,{onClick:function(){return t.todoList.add(o)}},"Add"),y.a.createElement(a.a,{onClick:function(){return t.todoList.reset()}},"Reset"),y.a.createElement("ul",null,t.todoList.todos.map(function(e){return y.a.createElement(v,{todo:e,key:e.key.toString(),onRemove:function(e){return t.todoList.remove(e)}})})))}),v=Object(k.a)(function(t){var e=t.todo,n=t.onRemove;return y.a.createElement("li",null,y.a.createElement(u.a,{defaultChecked:e.finished,onClick:function(){return e.finished=!e.finished}}),e.title,y.a.createElement(a.a,{onClick:function(){return n(e.key)}},"Reset"))}),j=new m;j.todos.push({key:1,title:"\u5403\u996d\u996d",finished:!0},{key:2,title:"\u6253\u8c46\u8c46"}),e.default=function(){return y.a.createElement(O,{todoList:j})}}}]);
//# sourceMappingURL=9.02533e97.chunk.js.map