"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[445],{5445:function(s,t,e){e.r(t),e.d(t,{default:function(){return os}});var a=e(1413),i=e(5671),n=e(3144),o=e(136),r=e(5716),l=e(2791),c={},u="ProfileInfo_avaContainer__lOiiw",d="ProfileInfo_avaDescrBlock__ah0mf",p="ProfileInfo_avaBorderBlock__x+YCT",h="ProfileInfo_ava__VB5Zl",f="ProfileInfo_borderDescriptionBLock__gjtUO",x="ProfileInfo_editInput__L1ZNO",_="ProfileInfo_status__F1IVg",m="ProfileInfo_statusBlock__4TWAM",j=e(8814),v=e(885),P=e(9373),C=e(3400),g=e(1286),k=e(184),N=function(s){var t=(0,l.useState)(!1),e=(0,v.Z)(t,2),a=e[0],i=e[1],n=(0,l.useState)(s.status),o=(0,v.Z)(n,2),r=o[0],c=o[1];(0,l.useEffect)((function(){c(s.status)}),[s.status]);return(0,k.jsxs)("div",{className:f,children:[(0,k.jsx)("div",{className:_,children:"Status:"}),a?(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)("input",{value:r,onChange:function(s){c(s.currentTarget.value)},className:x,autoFocus:!0}),(0,k.jsx)(P.Z,{sx:{ml:"10px"},variant:"contained",onClick:function(){i(!1),s.updateStatusTC(r)},children:"Save"})]}):(0,k.jsxs)("div",{className:m,children:[s.status||"I haven't added my status yet",(0,k.jsx)(C.Z,{onClick:function(){i(!0)},style:{marginLeft:"20px",boxShadow:"1px 0 5px 0 rgba(0, 0, 0, 0.2)"},color:"primary",children:(0,k.jsx)(g.Z,{})})]})]})},Z=function(s){return 0===Object.keys(s.profile).length?(0,k.jsx)(j.x,{}):(0,k.jsx)("div",{children:(0,k.jsx)("div",{className:u,children:(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)("div",{className:p,children:(0,k.jsx)("img",{src:s.profile.photos.large||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU",alt:"ava",className:h})}),(0,k.jsx)(N,{status:s.status,updateStatusTC:s.updateStatusTC})]})})})},b=e(5127),y="MyPosts_postsContainer__+a-fc",S="MyPosts_postsBlock__+QrrQ",L="MyPosts_posts__PGtgV",I="MyPosts_btnPost__N4vLV",T="MyPosts_addPostContainer__PJUUk",D="MyPosts_title__gAaBj",M="MyPosts_textarea__rpvkR",w="Post_postContainer__bqPb0",z="Post_imgSpanContainer__gVGtm",A="Post_postMessage__WLyIK",V="Post_likeDisContainer__0VF8p",B="Post_itemImg__p73pQ",H="Post_likes__iIUFs",U="Post_anglePost__mlR4e",G=e(8051),q=e(5806),O=e(7247),F=function(s){return(0,k.jsxs)("li",{className:w,children:[(0,k.jsxs)("div",{className:z,children:[(0,k.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU",alt:"brad pit",className:B}),(0,k.jsx)("span",{className:U}),(0,k.jsx)("span",{className:A,children:s.message})]}),(0,k.jsxs)("div",{className:V,children:[(0,k.jsx)(C.Z,{onClick:function(){s.onLikeHandler(s.id)},color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,k.jsx)(G.Z,{})}),(0,k.jsx)("span",{className:H,children:s.likesCount}),(0,k.jsx)(C.Z,{onClick:function(){s.onDisLikeHandler(s.id)},color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,k.jsx)(q.Z,{})}),(0,k.jsx)("span",{className:H,children:s.disLikesCount}),(0,k.jsx)(C.Z,{onClick:function(){s.delPost(s.id)},color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,k.jsx)(O.Z,{})})]})]})},K=e(9647),R=e(6139),E=e(1232),Q=e(8296),J=e(2925),W=l.memo((function(s){var t=(0,K.u)(),e=(0,v.Z)(t,1)[0],a=s.postsData.map((function(t){return(0,k.jsx)(F,{id:t.id,message:t.message,likesCount:t.likesCount,disLikesCount:t.disLikesCount,onLikeHandler:s.onLikeHandler,onDisLikeHandler:s.onDisLikeHandler,delPost:s.delPost},t.id)}));return(0,k.jsx)("div",{className:y,children:(0,k.jsxs)("div",{className:S,children:[(0,k.jsx)("h3",{className:D,children:"My Posts"}),(0,k.jsx)($,{onSubmit:function(t){s.addPost(t.profileTextarea)}}),(0,k.jsx)("div",{className:L,children:(0,k.jsx)("ul",{ref:e,children:a})})]})})})),Y=(0,Q.D)(10),$=(0,E.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,k.jsxs)("form",{className:T,onSubmit:s.handleSubmit,children:[(0,k.jsx)(R.Z,{name:"profileTextarea",className:M,placeholder:"Add your post",component:J.gx,validate:[Q.C,Y]}),(0,k.jsx)("button",{className:I,children:"+"})]})})),X=e(364),ss=(0,X.$j)((function(s){return{postsData:s.profilePage.postsData}}),{addPost:b.q2,onLikeHandler:b.aj,onDisLikeHandler:b.Bu,delPost:b.r6})(W),ts=function(s){return(0,k.jsxs)("div",{className:c.container,children:[(0,k.jsx)(Z,{profile:s.profile,updateStatusTC:s.updateStatusTC,status:s.status}),(0,k.jsx)(ss,{})]})},es=e(9271),as=e(7781),is=e(2163),ns=function(s){(0,o.Z)(e,s);var t=(0,r.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||(s="".concat(this.props.authorizedUserId)),this.props.loginTC(s),this.props.getStatusTC(s)}},{key:"render",value:function(){return(0,k.jsx)(ts,(0,a.Z)((0,a.Z)({},this.props),{},{status:this.props.status,profile:this.props.profile,updateStatusTC:this.props.updateStatusTC}))}}]),e}(l.Component),os=(0,as.qC)((0,X.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.id,isAuth:s.auth.isAuth,fake:s.profilePage.fake}}),{loginTC:b.YJ,getStatusTC:b.GP,updateStatusTC:b.OG}),es.EN,is.D)(ns)},1286:function(s,t,e){var a=e(1941);t.Z=void 0;var i=a(e(5649)),n=e(184),o=(0,i.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o},5806:function(s,t,e){var a=e(1941);t.Z=void 0;var i=a(e(5649)),n=e(184),o=(0,i.default)((0,n.jsx)("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt");t.Z=o},8051:function(s,t,e){var a=e(1941);t.Z=void 0;var i=a(e(5649)),n=e(184),o=(0,i.default)((0,n.jsx)("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt");t.Z=o}}]);
//# sourceMappingURL=445.93f10264.chunk.js.map