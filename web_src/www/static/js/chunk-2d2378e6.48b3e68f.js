(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2378e6"],{fc2e:function(t,e,a){"use strict";a.r(e);var n=a("d354"),r={data:function(){return{total:0,page:1,perPage:10,recordList:[]}},watch:{page:function(){this.getrecordList()}},mounted:function(){this.getrecordList()},methods:{getrecordList:function(){var t=this;(function(t){return Object(n.a)({url:"/admin/conference/history",method:"post",data:t})})({page:this.page-1,perPage:this.perPage}).then((function(e){t.total=e.count,t.recordList=e.items}))}}},o=a("2877"),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container_meetIndex"},[a("div",{staticClass:"meetIndex_body Table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.recordList,stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"roomName",label:"会议室名称"}}),a("el-table-column",{attrs:{prop:"maxParticipants",label:"最大参会人数"}}),a("el-table-column",{attrs:{label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(t._f("comverTime")(e.row.ctime,"YYYY-MM-DD HH:mm:ss")))])]}}])}),a("el-table-column",{attrs:{label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(t._f("comverTime")(e.row.etime,"YYYY-MM-DD HH:mm:ss")))])]}}])})],1)],1),a("div",{staticClass:"meetIndex_footer pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.perPage,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)])}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=chunk-2d2378e6.48b3e68f.js.map