(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4iCx":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"dialog-wrapper",attrs:{title:"节点配置",visible:e.dialogVisible,"before-close":e.modelClose,width:"433px",center:!0,"show-close":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"frontFrom",staticClass:"demo-ruleForm",attrs:{model:e.frontFrom,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"ip",prop:"ip"}},[a("el-input",{model:{value:e.frontFrom.ip,callback:function(t){e.$set(e.frontFrom,"ip",t)},expression:"frontFrom.ip"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"前置端口",prop:"port"}},[a("el-input",{model:{value:e.frontFrom.port,callback:function(t){e.$set(e.frontFrom,"port",t)},expression:"frontFrom.port"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"所属机构",prop:"company"}},[a("el-input",{model:{value:e.frontFrom.company,callback:function(t){e.$set(e.frontFrom,"company",t)},expression:"frontFrom.company"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.closeVisible?a("el-button",{on:{click:e.modelClose}},[e._v("取 消")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("frontFrom")}}},[e._v("确 定")])],1)])],1)},o=[];n._withStripped=!0,a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"8ymZ":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-content-head",{attrs:{headTitle:"节点管理"},on:{changGroup:e.changGroup}}),e._v(" "),a("div",{staticClass:"module-wrapper"},[a("h3",{staticStyle:{padding:"20px 0 0 40px"}},[e._v("前置列表")]),e._v(" "),a("div",{staticClass:"search-part",staticStyle:{"padding-top":"20px"}},[e.disabled?e._e():a("div",{staticClass:"search-part-left"},[a("el-button",{staticClass:"search-part-left-btn",attrs:{type:"primary"},on:{click:e.createFront}},[e._v("新增节点前置")])],1)]),e._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"search-table-content",attrs:{data:e.frontData}},[e._l(e.frontHead,function(t){return a("el-table-column",{key:t.enName,attrs:{label:t.name,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(n){return["frontIp"!=t.enName?a("span",[e._v(e._s(n.row[t.enName]))]):a("span",[a("router-link",{staticClass:"link",attrs:{to:{path:"hostDetail",query:{nodeIp:n.row.frontIp,nodeId:n.row.frontId}}}},[e._v(e._s(n.row[t.enName]))])],1)]}}],null,!0)})}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{class:{grayColor:e.disabled},attrs:{disabled:e.disabled,type:"text",size:"small"},on:{click:function(a){return e.deletedFront(t.row)}}},[e._v("删除")])]}}])})],2),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total > 10"}],staticClass:"page",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),e._v(" "),a("div",{staticClass:"module-wrapper",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"search-table"},[a("h3",{staticStyle:{padding:"20px 0 8px 0"}},[e._v("节点列表")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingNodes,expression:"loadingNodes"}],staticClass:"search-table-content",attrs:{data:e.nodeData}},e._l(e.nodeHead,function(t){return a("el-table-column",{key:t.enName,attrs:{label:t.name,"show-overflow-tooltip":"",width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[["nodeActive"===t.enName?a("span",[a("i",{staticClass:"wbs-icon-radio font-6",style:{color:e.textColor(n.row[t.enName])}}),e._v(" "+e._s(e.nodesStatus(n.row[t.enName]))+"\n                        ")]):a("span",[e._v(e._s(n.row[t.enName]))])]]}}],null,!0)})}),1),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.nodetotal>10,expression:"nodetotal > 10"}],staticClass:"page",attrs:{"current-page":e.nodecurrentPage,"page-sizes":[10,20,30,50],"page-size":e.nodepageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.nodetotal},on:{"size-change":e.nodeSizeChange,"current-change":e.nodeCurrentChange}}),e._v(" "),e.frontShow?a("v-setFront",{attrs:{show:e.frontShow,showClose:!0},on:{close:e.close}}):e._e()],1)])],1)},o=[];n._withStripped=!0,a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},BaHC:function(e,t,a){"use strict";a.r(t);var n=a("t+CX"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t.default=o.a},DQ30:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("qse9")),o=a("mHBk"),r=(a("DgvE"),l(a("p5Bo"))),i=l(a("cNqd")),s=l(a("9e9m"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={name:"node",components:{"v-content-head":n.default,"v-setFront":i.default},watch:{$route:function(){this.urlQuery=this.$root.$route.query}},data:function(){return{frontShow:!1,nodeName:"",nodes:[],frontData:[],currentPage:1,pageSize:10,nodecurrentPage:1,nodepageSize:10,total:0,nodetotal:0,loading:!1,nodesLoading:!1,nodesDialogVisible:!1,nodesDialogTitle:"",nodesDialogOptions:{},frontId:null,loadingNodes:!1,frontHead:[{enName:"frontId",name:"前置编号"},{enName:"frontIp",name:"ip"},{enName:"frontPort",name:"前置端口"},{enName:"agency",name:"所属机构"},{enName:"createTime",name:"创建时间"},{enName:"modifyTime",name:"修改时间"}],nodeHead:[{enName:"nodeId",name:"节点Id",width:""},{enName:"blockNumber",name:"块高",width:180},{enName:"pbftView",name:"pbftView",width:180},{enName:"nodeActive",name:"状态",width:150}],nodeData:[],urlQuery:this.$root.$route.query,disabled:!1}},mounted:function(){"admin"===localStorage.getItem("root")?this.disabled=!1:this.disabled=!0,this.getFrontTable(),this.getNodeTable()},methods:{changGroup:function(){this.getFrontTable(),this.getNodeTable()},search:function(){this.getFrontTable()},getFrontTable:function(){var e=this,t={frontId:this.frontId};(0,o.getFronts)(t).then(function(t){0===t.data.code?(e.total=t.data.totalCount,e.frontData=t.data.data||[],e.loading=!1,e.getNodeTable()):(e.loading=!1,e.$message({message:r.default.errCode[t.data.code].cn,type:"error",duration:2e3}))}).catch(function(t){e.loading=!1,e.$message({message:"查询失败！",type:"error",duration:2e3})})},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getFrontTable()},handleCurrentChange:function(e){this.currentPage=e,this.getFrontTable()},nodeSizeChange:function(e){this.nodepageSize=e,this.nodecurrentPage=1,this.getNodeTable()},nodeCurrentChange:function(e){this.nodecurrentPage=e,this.getNodeTable()},textColor:function(e){var t="";switch(e){case 1:t="#58cb7d";break;case 2:t="#ed5454"}return t},nodesStatus:function(e){var t="";switch(e){case 1:t="运行";break;case 2:t="异常"}return t},createFront:function(){this.frontShow=!0},deleteNodes:function(e,t){this.nodesDialogOptions={type:t,data:e},this.nodesDialogVisible=!0,this.nodesDialogTitle="删除节点"},close:function(e){this.frontShow=!1,s.default.$emit("addFront"),this.getFrontTable()},showDetail:function(e){2!==e.nodeType&&this.$router.push({path:"hostDetail",query:{nodeIp:e.nodeIp,nodeId:e.nodeId}})},deletedFront:function(e){var t=this;this.$confirm("确认删除？").then(function(a){(0,o.deleteFront)(e.frontId).then(function(e){0===e.data.code?(s.default.$emit("deleteFront"),t.getFrontTable()):t.$message({message:r.default.errCode[e.data.code].cn,type:"error",duration:2e3})}).catch(function(e){t.$message({message:"系统错误",type:"error",duration:2e3})})}).catch(function(e){})},getNodeTable:function(){var e=this;this.loadingNodes=!0;var t={groupId:localStorage.getItem("groupId"),pageNumber:this.nodecurrentPage,pageSize:this.nodepageSize};(0,o.getNodeList)(t,{}).then(function(t){e.loadingNodes=!1,0===t.data.code?(e.nodetotal=t.data.totalCount,e.nodeData=t.data.data||[],e.nodeData.forEach(function(e,t){0===e.status?e.value="运行":1===e.status&&(e.value="异常")})):(e.nodeData=[],e.$message({message:r.default.errCode[t.data.code].cn,type:"error",duration:2e3}))}).catch(function(t){e.nodeData=[],e.$message({message:"查询失败！",type:"error",duration:2e3})})}}}},U3a8:function(e,t,a){"use strict";a.r(t);var n=a("8ymZ"),o=a("dS0C");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("UXI7");var i=a("KHd+"),s=Object(i.a)(o.default,n.a,n.b,!1,null,"839e75ce",null);s.options.__file="src/views/front/front.vue",t.default=s.exports},UXI7:function(e,t,a){"use strict";var n=a("l+WY");a.n(n).a},cNqd:function(e,t,a){"use strict";a.r(t);var n=a("4iCx"),o=a("BaHC");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);var i=a("KHd+"),s=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);s.options.__file="src/views/index/dialog/setFront.vue",t.default=s.exports},dS0C:function(e,t,a){"use strict";a.r(t);var n=a("DQ30"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t.default=o.a},"l+WY":function(e,t,a){var n=a("lHTT");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("8857febe",n,!1,{})},lHTT:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'\n.module-wrapper[data-v-839e75ce] {\r\n    height: 100%;\n}\n.search-part[data-v-839e75ce] {\r\n    padding: 30px 41px 18px 42px;\r\n    overflow: hidden;\n}\n.search-part[data-v-839e75ce]::after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\n}\n.search-part-left[data-v-839e75ce] {\r\n    float: left;\n}\n.search-part-left-btn[data-v-839e75ce] {\r\n    border-radius: 20px;\n}\n.search-part-right[data-v-839e75ce] {\r\n    float: right;\n}\n.search-table[data-v-839e75ce] {\r\n    padding: 0 40px 0 41px;\n}\n.search-table-content[data-v-839e75ce] {\r\n    width: 100%;\n}\n.search-table-content[data-v-839e75ce] td,\r\n.search-table-content[data-v-839e75ce] th {\r\n    padding: 8px 0;\r\n    font-size: 12px;\n}\r\n/* .search-table-content>>>th {\r\n    color: #8598b0;\r\n}\r\n.search-table-content>>>td {\r\n    color: #737a86;\r\n} */\n.search-table-detail[data-v-839e75ce] {\r\n    width: 91%;\r\n    float: right;\n}\n.search-table-detail[data-v-839e75ce] td,\r\n.search-table-detail[data-v-839e75ce] th {\r\n    color: #737a86;\n}\n.input-with-select[data-v-839e75ce] .el-input__inner {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border: 1px solid #eaedf3;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-839e75ce] .el-input-group__append {\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-839e75ce] .el-button {\r\n    border: 1px solid #20D4D9;\r\n    border-radius: inherit;\r\n    background: #20D4D9;\r\n    color: #fff;\n}\n.grayColor[data-v-839e75ce]{\r\n    color: #666 !important\n}\r\n',""])},"t+CX":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a("mHBk"),r=a("p5Bo"),i=(n=r)&&n.__esModule?n:{default:n};t.default={name:"setFront",props:["show","showClose"],data:function(){return{dialogVisible:this.show,closeVisible:this.showClose||!1,frontFrom:{ip:"",port:"",company:""},rules:{ip:[{required:!0,message:"请输入ip名称",trigger:"blur"},{pattern:/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,message:"ip不符合规则",trigger:"blur"}],port:[{required:!0,message:"请输入端口名称",trigger:"blur"},{min:1,max:12,message:"长度在 1 到 12 个数字",trigger:"blur"},{pattern:/^[0-9]*[1-9][0-9]*$/,message:"端口不符合规则",trigger:"blur"}],company:[{required:!0,message:"请输入机构名称",trigger:"blur"},{min:1,max:16,message:"长度在 1 到 16 位",trigger:"blur"},{pattern:/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,20}$/,message:"机构名称请输入中文、英文和数字",trigger:"blur"}]}}},methods:{submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.setFront()})},setFront:function(){var e=this,t={frontIp:this.frontFrom.ip,frontPort:this.frontFrom.port,agency:this.frontFrom.company};(0,o.addFront)(t).then(function(t){0===t.data.code?(e.$message({message:"添加前置成功",type:"success"}),e.$emit("close")):e.$message({message:i.default.errCode[t.data.code].cn||"添加前置失败",type:"error"})}).catch(function(t){e.$message({message:"系统错误",type:"error"})})},modelClose:function(){this.$emit("close")}}}}}]);