(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ed9336e8"],{"281f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var o=n("d354"),a=function(){return Object(o.a)({url:"/admin/passport/info",method:"post"})},i=function(t){return Object(o.a)({url:"/admin/passport/modify",method:"post",data:t})}},"2dac":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return l}));var o=n("d354"),a=function(t){return Object(o.a)({url:"/admin/room/create",method:"post",data:t})},i=function(t){return Object(o.a)({url:"/admin/room/list",method:"post",data:t})},r=function(t){return Object(o.a)({url:"/admin/room/delete",method:"post",data:t})},c=function(t){return Object(o.a)({url:"/admin/room/info",method:"post",data:t})},s=function(t){return Object(o.a)({url:"/admin/room/modify",method:"post",data:t})},l=function(t){return Object(o.a)({url:"/admin/room/token",method:"post",data:t})}},6100:function(t,e,n){"use strict";n.r(e);var o=(n("99af"),n("2dac")),a=n("281f"),i={data:function(){return{dialogVisible:!1,total:0,page:1,perPage:10,compereToken:"",meetLists:[],linkData:{compereUrl:"",commonUrl:""}}},computed:{resolution:function(){return function(t){return 360==t?"流畅":480==t?"标清":"高清"}}},watch:{page:function(){this.getMeetList()}},mounted:function(){this.getUserInfo(),this.getMeetList()},methods:{handleSuccess:function(){this.$message({message:"复制成功",type:"success"})},meetLink:function(t){var e=this;Object(o.f)({roomName:t.roomName}).then((function(n){e.compereToken=n.token,e.linkData={compereUrl:"".concat(location.origin,"/admin/meetRoom.html/#/?rn=").concat(t.roomName,"&jwt=").concat(n.token),commonUrl:"".concat(location.origin,"/admin/meetRoom.html/#/?rn=").concat(t.roomName)},e.dialogVisible=!0}))},startMeet:function(t){var e=this;Object(o.f)({roomName:t.roomName}).then((function(n){e.compereToken=n.token,window.open("".concat(location.origin,"/admin/meetRoom.html/#/?rn=").concat(t.roomName,"&jwt=").concat(n.token))}))},getUserInfo:function(){var t=this;Object(a.b)().then((function(e){t.$store.dispatch("user/getUserInfo",e)}))},getMeetList:function(){var t=this;Object(o.e)({page:this.page-1,perPage:this.perPage}).then((function(e){t.total=e.count,t.meetLists=e.items}))},delMeet:function(t){var e=this;this.$confirm("确认删除吗？","提示").then((function(){Object(o.b)({id:t.id}).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getMeetList()}))})).catch((function(){}))},meetAdd:function(){this.$router.push("/editMeet")},getMeetToken:function(t){}}},r=n("2877"),c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container_meetIndex"},[n("div",{staticClass:"meetIndex_header"},[n("div",{staticClass:"btn_suc",on:{click:t.meetAdd}},[n("i",{staticClass:"iconfont iconadd"}),t._v(" 创建 ")])]),n("div",{staticClass:"meetIndex_body Table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.meetLists,stripe:""}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"roomName",label:"会议室名称",width:"100"}}),n("el-table-column",{attrs:{prop:"roomConfig.subject",label:"会议主题",width:"100"}}),n("el-table-column",{attrs:{label:"清晰度"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.resolution(e.row.roomConfig.resolution)))]}}])}),n("el-table-column",{attrs:{prop:"participantLimits",label:"参会人数"}}),n("el-table-column",{attrs:{prop:"roomConfig.lockPassword",label:"密码"}}),n("el-table-column",{attrs:{label:"参会链接"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"meetLink",on:{click:function(n){return t.meetLink(e.row)}}},[t._v("查看")])]}}])}),n("el-table-column",{attrs:{label:"更新时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(" "+t._s(t._f("comverTime")(e.row.ctime,"YYYY-MM-DD HH:mm:ss"))+" ")])]}}])}),n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"suc_Col operation",on:{click:function(n){return t.startMeet(e.row)}}},[n("i",{staticClass:"iconfont iconshexiangtou"})]),n("router-link",{staticClass:"suc_Col operation",attrs:{to:{path:"/editMeet",query:{id:e.row.id}}}},[n("i",{staticClass:"iconfont iconedit"})]),n("span",{staticClass:"del_Col operation",on:{click:function(n){return t.delMeet(e.row)}}},[n("i",{staticClass:"iconfont icondelete"})])]}}])})],1)],1),n("div",{staticClass:"meetIndex_footer pagination"},[n("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.perPage,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1),n("el-dialog",{staticClass:"meetLink_dialog",attrs:{title:"会议室链接",visible:t.dialogVisible,width:"100%",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"linkData",attrs:{model:t.linkData}},[n("el-form-item",{staticClass:"linkInput",attrs:{label:"主持人链接:","label-width":"90px"}},[n("el-input",{attrs:{readonly:!0},model:{value:t.linkData.compereUrl,callback:function(e){t.$set(t.linkData,"compereUrl",e)},expression:"linkData.compereUrl"}}),n("i",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.linkData.compereUrl,expression:"linkData.compereUrl"}],staticClass:"iconfont iconfuzhi copy",on:{success:t.handleSuccess}})],1),n("el-form-item",{staticClass:"linkInput",attrs:{label:"参会者链接:","label-width":"90px"}},[n("el-input",{attrs:{readonly:!0},model:{value:t.linkData.commonUrl,callback:function(e){t.$set(t.linkData,"commonUrl",e)},expression:"linkData.commonUrl"}}),n("i",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.linkData.commonUrl,expression:"linkData.commonUrl"}],staticClass:"iconfont iconfuzhi copy",on:{success:t.handleSuccess}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports},"99af":function(t,e,n){"use strict";var o=n("23e7"),a=n("d039"),i=n("e8b5"),r=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),m=n("b622"),f=n("2d00"),p=m("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=f>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),k=d("concat"),v=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!g||!k},{concat:function(t){var e,n,o,a,i,r=c(this),d=u(r,0),m=0;for(e=-1,o=arguments.length;e<o;e++)if(v(i=-1===e?r:arguments[e])){if(m+(a=s(i.length))>b)throw TypeError(h);for(n=0;n<a;n++,m++)n in i&&l(d,m,i[n])}else{if(m>=b)throw TypeError(h);l(d,m++,i)}return d.length=m,d}})}}]);
//# sourceMappingURL=chunk-ed9336e8.cd03dd10.js.map