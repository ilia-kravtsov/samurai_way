"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[48],{4048:function(e,s,o){o.r(s),o.d(s,{default:function(){return oe}});var a=o(1413),r=o(5671),t=o(3144),i=o(136),n=o(5716),l=o(2791),c=o(885),p={profileInfoContainer:"ProfileInfo_profileInfoContainer__3JBvo",avaDescriptionBlock:"ProfileInfo_avaDescriptionBlock__nFqK5",avaBorderBlock:"ProfileInfo_avaBorderBlock__UzT6s",ava:"ProfileInfo_ava__uN7HF",borderDescriptionBLock:"ProfileInfo_borderDescriptionBLock__INpho",editInput:"ProfileInfo_editInput__2zRdy",name:"ProfileInfo_name__1ouk1",status:"ProfileInfo_status__n6g0e",statusBlock:"ProfileInfo_statusBlock__yR41M",formPersonInformation:"ProfileInfo_formPersonInformation__4GBm+",fadeIn:"ProfileInfo_fadeIn__Nm8Fc",formPersonFirst:"ProfileInfo_formPersonFirst__C-5tv",descriptionData:"ProfileInfo_descriptionData__H7flG",preparePostLI:"ProfileInfo_preparePostLI__ScdVb",formPersonSecond:"ProfileInfo_formPersonSecond__EQDMV",formPersonContacts:"ProfileInfo_formPersonContacts__p0w6m",preparePostHeader:"ProfileInfo_preparePostHeader__-c-JJ",formError:"ProfileInfo_formError__lt5rQ",changePhoto:"ProfileInfo_changePhoto__lX-RO",editContactRight:"ProfileInfo_editContactRight__4Mho3",lookForAJob:"ProfileInfo_lookForAJob__iVIvx",lookForAJobCheckbox:"ProfileInfo_lookForAJobCheckbox__czHww",aboutMeSkill:"ProfileInfo_aboutMeSkill__l9nBb",personInformationInput:"ProfileInfo_personInformationInput__gNrQA",textareaSkill:"ProfileInfo_textareaSkill__F3dyM",textareaEditMode:"ProfileInfo_textareaEditMode__FdVpe"},d=o(8814),u=o(5863),f=o(6139),m=o(704),x=o(8296),h=o(3329),P=o(1286),_=o(3400),v=o(184),g=function(e){var s=function(){e.personDataFlagToggle(!0)};return(0,v.jsx)("div",{className:p.borderDescriptionBLock,children:e.personDataFlag?(0,v.jsx)(C,{profile:e.profile,isOwner:e.isOwner,activateEditMode:s,onSubmit:function(s){e.saveProfileData(s)},initialValues:e.profile}):(0,v.jsx)(j,{profile:e.profile,isOwner:e.isOwner,activateEditMode:s})})},j=function(e){return(0,v.jsxs)("div",{className:p.formPersonInformation,children:[(0,v.jsxs)("div",{className:p.formPersonFirst,children:[(0,v.jsx)("h2",{className:p.preparePostHeader,children:"Information:"}),(0,v.jsxs)("div",{className:p.descriptionData,children:[(0,v.jsx)("span",{className:p.preparePostLI,children:"About me:"})," ",e.profile.aboutMe||"i'm the best"]}),(0,v.jsxs)("div",{className:p.descriptionData,children:[(0,v.jsx)("span",{className:p.preparePostLI,children:"Skills:"})," ",e.profile.lookingForAJobDescription||"i almost know React"]}),(0,v.jsxs)("div",{className:p.descriptionData,children:[(0,v.jsx)("span",{className:p.preparePostLI,children:"Looking for a job:"})," ",e.profile.lookingForAJob?"yes":"no"]})]}),(0,v.jsx)("div",{className:p.formPersonSecond,children:e.isOwner&&(0,v.jsx)(_.Z,{onClick:e.activateEditMode,style:{borderRadius:"5px"},color:"primary",children:(0,v.jsx)(P.Z,{})})})]})},C=(0,m.Z)({form:"profileData"})((function(e){e.profile;var s=e.error;return(0,v.jsxs)("form",{className:p.formPersonInformation,onSubmit:e.handleSubmit,children:[(0,v.jsxs)("div",{className:p.formPersonFirst,children:[(0,v.jsxs)("div",{className:p.aboutMeSkill,children:[(0,v.jsx)("span",{className:p.preparePostLI,children:"About me:"}),(0,v.jsx)("div",{className:p.personInformationInput,children:(0,v.jsx)(f.Z,{placeholder:"tell about yourself",component:u.II,validate:[x.C],name:"aboutMe"})})]}),(0,v.jsxs)("div",{className:p.aboutMeSkill,children:[(0,v.jsx)("span",{className:p.preparePostLI,children:"Skills:"}),(0,v.jsx)("div",{className:p.personInformationInput,children:(0,v.jsx)(f.Z,{placeholder:"your skills",component:u.II,validate:[x.C],name:"lookingForAJobDescription"})})]}),(0,v.jsxs)("div",{className:p.lookForAJob,children:[(0,v.jsx)("label",{htmlFor:"checkboxId",children:(0,v.jsx)("span",{className:p.preparePostLI,children:"Looking for a job:"})}),(0,v.jsx)(f.Z,{type:"checkbox",id:"checkboxId",component:"input",name:"lookingForAJob",className:p.lookForAJobCheckbox})]})]}),(0,v.jsx)("div",{className:p.formPersonSecond,children:s&&(0,v.jsx)("div",{className:p.formError,children:s})}),(0,v.jsx)("button",{children:(0,v.jsx)(h.Z,{style:{borderRadius:"5px",cursor:"pointer"},color:"primary"})})]})})),k=o(6520),I=o(2817),N=o(9373),b=o(8086),D=function(e){var s=(0,l.useState)(!1),o=(0,c.Z)(s,2),a=o[0],r=o[1],t=(0,l.useState)(e.status),i=(0,c.Z)(t,2),n=i[0],u=i[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);if(0===Object.keys(e.profile).length)return(0,v.jsx)(d.x,{});return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:p.profileInfoContainer,children:(0,v.jsxs)("div",{className:p.avaDescriptionBlock,children:[(0,v.jsxs)("div",{className:p.avaBorderBlock,children:[(0,v.jsx)("img",{src:e.profile.photos.large||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU",alt:"ava",className:p.ava}),e.isOwner&&(0,v.jsxs)("label",{htmlFor:"file",className:p.changePhoto,children:[(0,v.jsx)("input",{id:"file",type:"file",multiple:!0,style:{position:"fixed",top:"-100em"},onChange:function(s){var o;null!==(o=s.target.files)&&void 0!==o&&o.length&&e.savedPhoto(s.target.files[0])}}),(0,v.jsx)(k.Z,{title:"Change Photo",children:(0,v.jsx)(_.Z,{component:"span",children:(0,v.jsx)(b.Z,{})})})]})]}),(0,v.jsx)("div",{className:p.name,children:e.profile.fullName||"Simon"}),(0,v.jsxs)("section",{className:p.status,children:[(0,v.jsx)("span",{className:p.statusHeader,children:"Status: "}),a?(0,v.jsxs)("span",{className:p.statusBlock,children:[(0,v.jsx)(I.Z,{value:n,onChange:function(e){u(e.currentTarget.value)},className:p.editInput,variant:"standard",autoFocus:!0}),(0,v.jsx)(N.Z,{sx:{ml:"10px"},variant:"contained",onClick:function(){r(!1),e.updateStatusTC(n)},children:"Save"})]}):(0,v.jsxs)("span",{className:p.statusBlock,children:[e.status||"I haven't added my status yet",(0,v.jsx)(_.Z,{onClick:function(){r(!0)},style:{marginLeft:"20px",borderRadius:"5px"},color:"primary",children:(0,v.jsx)(P.Z,{})}),e.errorStatusFlag&&(0,v.jsx)("div",{children:e.errorStatusFlag})]})]})]})}),(0,v.jsx)(g,{profile:e.profile,isOwner:e.isOwner,saveProfileData:e.saveProfileData,personDataFlag:e.personDataFlag,personDataFlagToggle:e.personDataFlagToggle})]})},y=o(3899),w="MyPosts_postsContainer__DrlOo",Z="MyPosts_postsBlock__w0qW7",S="MyPosts_posts__U7DiB",F="MyPosts_postIcons__szCrN",B="MyPosts_btnPost__Ch9CD",T="MyPosts_addPostContainer__rwZuN",L="MyPosts_preparePostTextarea__cXkzO",M={postContainer:"Post_postContainer__nVajh",imgSpanContainer:"Post_imgSpanContainer__nWDsV",postMessage:"Post_postMessage__eyaPE",likeDisContainer:"Post_likeDisContainer__Cm6df",itemImg:"Post_itemImg__evI1G",anglePost:"Post_anglePost__0P6Lm",editPostBlock:"Post_editPostBlock__DYqA1"},A=o(8051),O=o(5806),R=o(7247),z=o(3746),J=o(8421),E=function(e){var s=(0,l.useState)(e.message),o=(0,c.Z)(s,2),a=o[0],r=o[1],t=(0,l.useState)(!1),i=(0,c.Z)(t,2),n=i[0],p=i[1];return(0,v.jsxs)("li",{className:M.postContainer,children:[(0,v.jsxs)("div",{className:M.imgSpanContainer,children:[(0,v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU",alt:"brad pit",className:M.itemImg}),(0,v.jsx)("span",{className:M.anglePost}),n?(0,v.jsxs)("span",{children:[(0,v.jsx)(I.Z,{value:a,onChange:function(e){return r(e.currentTarget.value)},variant:"outlined",autoFocus:!0,className:M.editPostBlock,multiline:!0}),(0,v.jsx)(N.Z,{sx:{ml:"10px"},variant:"contained",onClick:function(){a.trim()&&(e.saveNewPostTextCB(e.id,a),p(!1))},children:"Save"})]}):(0,v.jsx)("span",{className:M.postMessage,children:e.message})]}),(0,v.jsxs)("div",{className:M.likeDisContainer,children:[(0,v.jsx)(_.Z,{color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,v.jsx)(z.Z,{})}),(0,v.jsx)("span",{className:M.postNumbers,children:e.views}),(0,v.jsx)(_.Z,{color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,v.jsx)(J.Z,{})}),(0,v.jsx)("span",{className:M.postNumbers,children:e.comments}),(0,v.jsx)(_.Z,{onClick:function(){"secondary"===e.activeLikeColor?e.activeLikeColorCB(e.id,"primary"):e.activeLikeColorCB(e.id,"secondary")},color:e.activeLikeColor,className:M.activeIcon,sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,v.jsx)(A.Z,{})}),(0,v.jsx)("span",{className:M.postNumbers,children:e.likesCount}),(0,v.jsx)(_.Z,{onClick:function(){"secondary"===e.activeDisLikeColor?e.activeDisLikeColorCB(e.id,"primary"):e.activeDisLikeColorCB(e.id,"secondary")},color:e.activeDisLikeColor,sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,v.jsx)(O.Z,{})}),(0,v.jsx)("span",{className:M.postNumbers,children:e.disLikesCount}),(0,v.jsx)(_.Z,{color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},onClick:function(){return p(!0)},children:(0,v.jsx)(P.Z,{})}),(0,v.jsx)(_.Z,{onClick:function(){return e.delPost(e.id)},color:"primary",sx:{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.2)"},children:(0,v.jsx)(R.Z,{})})]})]})},q=o(9647),G=o(2419),V=o(2946),U=o(5764),H=o(3028),K=l.memo((function(e){var s=(0,q.u)(),o=(0,c.Z)(s,1)[0],a=e.postsData.map((function(s){return(0,v.jsx)(E,{id:s.id,message:s.message,likesCount:s.likesCount,disLikesCount:s.disLikesCount,views:s.views,activeLikeColor:s.activeLikeColor,activeDisLikeColor:s.activeDisLikeColor,activeLikeColorCB:e.activeLikeColorCB,activeDisLikeColorCB:e.activeDisLikeColorCB,comments:s.comments,delPost:e.delPost,saveNewPostTextCB:e.saveNewPostTextCB},s.id)})),r=l.createRef();return(0,v.jsx)("div",{className:w,children:(0,v.jsxs)("div",{className:Z,children:[(0,v.jsxs)("form",{className:T,children:[(0,v.jsx)(I.Z,{className:L,ref:r,value:e.newPostText,onChange:function(s){e.setNewPostText(s.currentTarget.value)},onKeyDown:function(s){"Enter"===s.key&&e.newPostText.trim()&&e.addPost(e.newPostText)},label:"write something",multiline:!0,minRows:4,maxRows:4}),(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)(U.Z,{color:"primary"}),(0,v.jsx)(H.Z,{color:"primary"}),(0,v.jsx)(V.Z,{color:"primary"}),(0,v.jsx)(b.Z,{color:"primary"}),(0,v.jsx)(_.Z,{className:B,onClick:function(){e.newPostText.trim()&&e.addPost(e.newPostText)},size:"medium",color:"primary",sx:{borderRadius:"5px"},children:(0,v.jsx)(G.Z,{})})]})]}),(0,v.jsx)("div",{className:S,children:(0,v.jsx)("ul",{ref:o,children:a})})]})})})),Q=o(364),W=(0,Q.$j)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{addPost:y.q2,delPost:y.r6,saveNewPostTextCB:y.RZ,setNewPostText:y.fK,activeLikeColorCB:y.Gz,activeDisLikeColorCB:y.xT})(K),X=function(e){return(0,v.jsxs)("div",{children:[(0,v.jsx)(D,{profile:e.profile,updateStatusTC:e.updateStatusTC,status:e.status,isOwner:e.isOwner,savedPhoto:e.savedPhotoTC,saveProfileData:function(s){e.saveProfileData(s)},personDataFlag:e.personDataFlag,personDataFlagToggle:e.personDataFlagToogle,errorStatusFlag:e.errorStatusFlag}),(0,v.jsx)(W,{})]})},Y=o(9271),$=o(7781),ee=o(2163),se=function(e){(0,i.Z)(o,e);var s=(0,n.Z)(o);function o(){return(0,r.Z)(this,o),s.apply(this,arguments)}return(0,t.Z)(o,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e="".concat(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.loginTC(e),this.props.getStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,o){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)(X,(0,a.Z)((0,a.Z)({},this.props),{},{status:this.props.status,profile:this.props.profile,updateStatusTC:this.props.updateStatusTC,isOwner:!this.props.match.params.userId,saveProfileData:this.props.saveProfileData,personDataFlagToogle:this.props.personDataFlagToogle}))}}]),o}(l.Component),oe=(0,$.qC)((0,Q.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth,fake:e.profilePage.fake,personDataFlag:e.profilePage.personDataFlag,errorStatusFlag:e.profilePage.errorStatusFlag}}),{loginTC:y.YJ,getStatusTC:y.GP,updateStatusTC:y.OG,savedPhotoTC:y.Ig,saveProfileData:y.xU,personDataFlagToogle:y.qn}),Y.EN,ee.D)(se)}}]);
//# sourceMappingURL=48.dc1e6a34.chunk.js.map