import{u as oe}from"./seventv.useChannelContext.3.0.14.js";import{t as O,r as P,u as p,b as ge,a as be,l as ne,n as je,m as dt,a9 as ut,a5 as ct}from"./seventv.useUserAgent.3.0.14.js";import{u as De,S as lt,C as mt}from"./seventv.CloseIcon.3.0.14.js";import{e as F,l as d,f as c,j as f,_ as x,aJ as ve,k as L,u as $,G as X,w as fe,s as E,q as de,F as z,m as ee,a as ue,at as Qe,aI as Me,A as ce,B as G,J as Le,x as K,Z as Te,H as Ge,aC as Xe,C as Ie,au as gt,aF as ht,aO as vt,y as ft,z as pt,n as Se,I as _t,d as yt,aB as bt,W as wt,aP as Ct}from"./seventv.index.3.0.14.js";import{u as Mt}from"./seventv.main.3.0.14.js";import{b as $e,e as Tt}from"./seventv.Transform.3.0.14.js";import{C as Be}from"./seventv.ChatMessage.3.0.14.js";import{u as Ke,U as $t}from"./seventv.UiConfirmPrompt.3.0.14.js";import{t as kt,a as Je,b as Ze,u as re,c as Ut,E as Dt}from"./seventv.Emote.3.0.14.js";import{g as J}from"./seventv.seventv.user.gql.3.0.14.js";import{a as et,d as Lt,b as Re}from"./seventv.StoreSubscribeButton.3.0.14.js";import{u as tt}from"./seventv.useChatEmotes.3.0.14.js";import{v as It}from"./seventv.v4.3.0.14.js";import{a as Ee}from"./seventv.useFloatContext.3.0.14.js";import{R as St}from"./seventv.ReactHooks.3.0.14.js";import{a as xt}from"./seventv.useModule.3.0.14.js";import{T as Pt,U as Ot}from"./seventv.UiDraggable.3.0.14.js";import{o as At}from"./seventv.index.3.0.143.js";function Bt(a){return a.kind==="LINK"}function Rt(a){return a.kind==="EMOTE"}function Et(a){return a.kind==="MENTION"}const Nt={ref:"tooltip",class:"seventv-tooltip","tooltip-type":"badge"},Ft=F({__name:"BadgeTooltip",props:{alt:{}},setup(a){return(t,e)=>(d(),c("div",Nt,[f("p",null,O(t.alt),1)],512))}});const Vt=x(Ft,[["__scopeId","data-v-bfbc76a7"]]),Wt={class:"seventv-chat-badge"},Ht=["srcset","alt"],Yt=F({__name:"Badge",props:{alt:{},type:{},badge:{}},setup(a){const t=a,e=P(""),n={twitch:l=>`${l.image1x} 1x, ${l.image2x} 2x, ${l.image4x} 4x`,app:l=>l.data.host.files.map((h,g)=>`https:${l.data.host.url}/${h.name} ${g+1}x`).join(", ")}[t.type](t.badge),r=P(),{show:s,hide:i}=ve(Vt,{alt:t.alt});function m(l){return l.kind==="BADGE"&&t.type==="app"}return m(t.badge)&&(e.value=t.badge.data.backgroundColor??""),(l,h)=>(d(),c("div",Wt,[f("img",{ref_key:"imgRef",ref:r,srcset:p(n),alt:l.alt,style:ge({backgroundColor:e.value}),onMouseenter:h[0]||(h[0]=g=>p(s)(r.value)),onMouseleave:h[1]||(h[1]=g=>p(i)())},null,44,Ht)]))}});const ke=x(Yt,[["__scopeId","data-v-5aff362b"]]),Ne=new WeakMap;function at(a){let t=Ne.get(a);return t||(t=be({isDarkTheme:1,primaryColorHex:null,useHighContrastColors:!0,showTimestamps:!1,showModerationIcons:!1,hovering:!1,pauseReason:new Set(["SCROLL"]),currentChannel:{},imageFormat:"WEBP",twitchBadgeSets:{},blockedUsers:new Set}),Ne.set(a,t)),t}const Fe=new WeakMap;function nt(a){let t=Fe.get(a);t||(t=be({TWITCH:{onShowViewerCard:()=>{}},YOUTUBE:{},KICK:{},UNKNOWN:{}}),Fe.set(a,t));function e(r,s,i){t&&(t[r][s]=i)}function n(r,s,i){if(!t||!r||!r.currentTarget||!s)return!1;const m=r.currentTarget.getBoundingClientRect();return t[a.platform].onShowViewerCard(s,0,i,m.bottom),!0}return{update:e,openViewerCard:n}}const qt=J`
	query ViewerCard(
		$channelID: ID!
		$channelIDStr: String!
		$channelLogin: String!
		$targetLogin: String!
		$isViewerBadgeCollectionEnabled: Boolean!
	) {
		activeTargetUser: user(login: $targetLogin) {
			id
		}
		targetUser: user(login: $targetLogin, lookupType: ALL) {
			id
			login
			bannerImageURL
			displayName
			displayBadges(channelID: $channelID) {
				...badge
				description
			}
			chatColor
			profileImageURL(width: 70)
			createdAt
			relationship(targetUserID: $channelID) {
				cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
					months
					daysRemaining
				}
				followedAt
				subscriptionBenefit {
					id
					tier
					purchasedWithPrime
					gift {
						isGift
					}
				}
			}
			isModerator(channelID: $channelIDStr)
			stream {
				id
				game {
					id
					displayName
				}
				viewersCount
			}
		}
		channelUser: user(login: $channelLogin) {
			id
			login
			displayName
			subscriptionProducts {
				...subProduct
			}
			self {
				banStatus {
					isPermanent
				}
				isModerator
			}
		}
		currentUser {
			login
			id
		}
		channelViewer(userLogin: $targetLogin, channelLogin: $channelLogin) {
			id
			earnedBadges @include(if: $isViewerBadgeCollectionEnabled) {
				...badge
				description
			}
		}
		channel(id: $channelID) {
			id
			moderationSettings {
				canAccessViewerCardModLogs
			}
		}
	}

	${kt}
	${Je}
`,zt=J`
	query ViewerCardModLogs($channelLogin: String!, $channelID: ID!, $targetID: ID!) {
		targetUser: user(id: $targetID) {
			id
			login
		}
		channelUser: user(login: $channelLogin) {
			id
			login
		}
		currentUser {
			login
			id
		}
		banStatus: chatRoomBanStatus(channelID: $channelID, userID: $targetID) {
			bannedUser {
				id
				login
				displayName
			}
			createdAt
			expiresAt
			isPermanent
			moderator {
				id
				login
				displayName
			}
			reason
		}

		viewerCardModLogs(channelID: $channelID, targetID: $targetID) {
			messages: messages(first: 1000) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					pageInfo {
						hasNextPage
					}
					count
				}
			}
			bans: targetedActions(first: 99, type: BAN) {
				...modLogsTargetedActionsResultFragment
			}
			timeouts: targetedActions(first: 99, type: TIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			unbans: targetedActions(first: 99, type: UNBAN) {
				...modLogsTargetedActionsResultFragment
			}
			untimeouts: targetedActions(first: 99, type: UNTIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			comments(first: 100) {
				... on ModLogsCommentConnection {
					edges {
						cursor
						node {
							id
							timestamp
							text
							channel {
								id
							}
							author {
								id
								login
								displayName
								chatColor
							}
						}
					}
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
				}
				... on ModLogsCommentsError {
					code
				}
				__typename
			}
		}
	}

	fragment modLogsTargetedActionsResultFragment on ModLogsTargetedActionsResult {
		__typename
		... on ModLogsTargetedActionsError {
			code
		}
		... on ModLogsTargetedActionsConnection {
			count
			pageInfo {
				hasNextPage
			}
			edges {
				cursor
				node {
					...modLogsTargetedActionFragment
				}
			}
		}
	}

	fragment modLogsTargetedActionFragment on ModLogsTargetedAction {
		id
		localizedLabel {
			fallbackString
			...modActionTokens
		}
		timestamp
		type
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}
`,jt=J`
	#import "twilight/features/message/fragments/message-sender/sender-fragment.gql"
	#import "twilight/features/moderation/moderation-actions/hooks/use-get-mod-actions/mod-action-tokens-fragment.gql"
	query ViewerCardModLogsMessagesBySender($channelID: ID!, $senderID: ID!, $cursor: Cursor) {
		logs: viewerCardModLogs(channelID: $channelID, targetID: $senderID) {
			messages(first: 50, after: $cursor) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					edges {
						...viewerCardModLogsMessagesEdgeFragment
					}
					pageInfo {
						hasNextPage
					}
				}
			}
		}
	}
	fragment viewerCardModLogsMessagesEdgeFragment on ViewerCardModLogsMessagesEdge {
		__typename
		node {
			...viewerCardModLogsCaughtMessageFragment
			...viewerCardModLogsChatMessageFragment
			...viewerCardModLogsModActionsMessageFragment
		}
		cursor
	}
	fragment viewerCardModLogsChatMessageFragment on ViewerCardModLogsChatMessage {
		id
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
				__typename
			}
			__typename
		}
		sentAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					#mention
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
	}
	fragment viewerCardModLogsCaughtMessageFragment on ViewerCardModLogsCaughtMessage {
		id
		status
		category
		sentAt
		resolvedAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
			}
			__typename
		}
		resolver {
			...sender
		}
		__typename
	}

	fragment viewerCardModLogsModActionsMessageFragment on ViewerCardModLogsModActionsMessage {
		timestamp
		content {
			fallbackString
			...modActionTokens
		}
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}

	fragment sender on User {
		id
		login
		displayName
		chatColor
		displayBadges {
			...badge
		}
	}

	${Je}
`,Qt=J`
	mutation createModComment($input: CreateModeratorCommentInput!) {
		createModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${Ze}
`;J`
	mutation deleteModeratorComment($input: DeleteModeratorCommentInput!) {
		deleteModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${Ze}
`;const Gt={},Xt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em",fill:"currentColor"},Kt=f("path",{d:"M96 0L63.9 44.9C58.8 52.1 56 60.8 56 69.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L96 0zM224 0L191.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L224 0zm95.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L352 0 319.9 44.9zM128 176V144H64v32 48H0V350.8l29.2 15.3 60-28.6 7.1-3.4 7 3.5L160 366.1l56.8-28.4 7.2-3.6 7.2 3.6L288 366.1l56.8-28.4 7-3.5 7 3.4 60 28.6L448 350.8V224H384V176 144H320v32 48H256V176 144H192v32 48H128V176zM448 386.9l-21.3 11.2-7.1 3.7-7.2-3.4-60.2-28.6-57 28.5-7.2 3.6-7.2-3.6L224 369.9l-56.8 28.4-7.2 3.6-7.2-3.6-57-28.5L35.7 398.4l-7.2 3.4-7.1-3.7L0 386.9V512H448V386.9z"},null,-1),Jt=[Kt];function Zt(a,t){return d(),c("svg",Xt,Jt)}const ea=x(Gt,[["render",Zt]]),ta={},aa={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},na=f("path",{d:"M39.8 263.8L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z"},null,-1),ra=[na];function sa(a,t){return d(),c("svg",aa,ra)}const oa=x(ta,[["render",sa]]);const ia={},da={class:"seventv-user-card-actions"};function ua(a,t){return d(),c("div",da)}const ca=x(ia,[["render",ua],["__scopeId","data-v-ac215262"]]),la=J`
	mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {
		banUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
				reason
			}
			error {
				code
				minTimeoutDurationSeconds
				maxTimeoutDurationSeconds
			}
		}
	}
`,ma=J`
	mutation Chat_UnbanUserFromChatRoom($input: UnbanUserFromChatRoomInput!) {
		unbanUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
			}
			error {
				code
			}
		}
	}
`,ga=J`
	mutation PinChatMessage($input: PinChatMessageInput!) {
		pinChatMessage(input: $input) {
			pinnedChatMessage {
				id
				pinnedMessage {
					id
				}
			}
			error {
				code
			}
		}
	}
`,ha=J`
	mutation ModUser($input: ModUserInput!) {
		result: modUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`,va=J`
	mutation UnmodUser($input: UnmodUserInput!) {
		result: unmodUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`;function xe(a,t){const e=Ke(a);function n(l,h){const g=re();return g?g.mutate({mutation:la,variables:{input:{channelID:a.id,bannedUserLogin:t,expiresIn:l,reason:h}}}):Promise.reject("Missing Apollo")}function r(){const l=re();return l?l.mutate({mutation:ma,variables:{input:{channelID:a.id,bannedUserLogin:t}}}):Promise.reject("Missing Apollo")}function s(l,h){const g=re();return g?g.mutate({mutation:ga,variables:{input:{channelID:a.id,messageID:l,durationSeconds:h,type:"MOD"}}}):Promise.reject("Missing Apollo")}function i(l,h){const g=re();return g?g.mutate({mutation:h?va:ha,variables:{input:{channelID:a.id,targetID:l}}}):Promise.reject("Missing Apollo")}function m(l){e.sendMessage(`/delete ${l}`)}return{banUserFromChat:n,unbanUserFromChat:r,pinChatMessage:s,deleteChatMessage:m,setUserModerator:i}}const fa={},pa={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},_a=f("g",null,[f("path",{"fill-rule":"evenodd",d:"M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 01-4.904-9.458l8.362 8.362A5.972 5.972 0 0110 16zm4.878-2.505a6 6 0 00-8.372-8.372l8.372 8.372z","clip-rule":"evenodd"})],-1),ya=[_a];function ba(a,t){return d(),c("svg",pa,ya)}const wa=x(fa,[["render",ba]]),Ca={},Ma={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Ta=f("g",null,[f("path",{d:"M12 2H8v1H3v2h14V3h-5V2zM4 7v9a2 2 0 002 2h8a2 2 0 002-2V7h-2v9H6V7H4z"}),f("path",{d:"M11 7H9v7h2V7z"})],-1),$a=[Ta];function ka(a,t){return d(),c("svg",Ma,$a)}const Ua=x(Ca,[["render",ka]]),Da={},La={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Ia=f("g",null,[f("path",{d:"M11 9.586V6H9v4.414l2.293 2.293 1.414-1.414L11 9.586z"}),f("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z","clip-rule":"evenodd"})],-1),Sa=[Ia];function xa(a,t){return d(),c("svg",La,Sa)}const Pa=x(Da,[["render",xa]]),Oa={class:"seventv-chat-mod-buttons"},Aa=F({__name:"ModIcons",props:{msg:{}},setup(a){var v,_,o,C;const t=a,e=oe(),{banUserFromChat:n,deleteChatMessage:r}=xe(e,((v=t.msg.author)==null?void 0:v.username)??""),s=P(),i=ve(`Ban ${((_=t.msg.author)==null?void 0:_.username)??"???"}`),m=P(),l=ve(`Timeout ${((o=t.msg.author)==null?void 0:o.username)??"???"}`),h=P(),g=ve(`Delete message by ${((C=t.msg.author)==null?void 0:C.username)??"???"}`);return(M,T)=>(d(),c("span",Oa,[M.msg.author&&!M.msg.author.isActor?(d(),c("span",{key:0,ref_key:"banRef",ref:s,onClick:T[0]||(T[0]=b=>p(n)(null)),onMouseenter:T[1]||(T[1]=b=>p(i).show(s.value)),onMouseleave:T[2]||(T[2]=b=>p(i).hide())},[L(wa)],544)):$("",!0),M.msg.author&&!M.msg.author.isActor?(d(),c("span",{key:1,ref_key:"timeoutRef",ref:m,onClick:T[3]||(T[3]=b=>p(n)("10m")),onMouseenter:T[4]||(T[4]=b=>p(l).show(m.value)),onMouseleave:T[5]||(T[5]=b=>p(l).hide())},[L(Pa)],544)):$("",!0),f("span",{ref_key:"deleteRef",ref:h,onClick:T[6]||(T[6]=b=>p(r)(M.msg.id)),onMouseenter:T[7]||(T[7]=b=>p(g).show(h.value)),onMouseleave:T[8]||(T[8]=b=>p(g).hide())},[L(Ua)],544)]))}});const Ba=x(Aa,[["__scopeId","data-v-071f3a4f"]]),Ra=["href"],Ea=F({__name:"MessageTokenLink",props:{token:{}},setup(a){return(t,e)=>(d(),c("a",{href:t.token.content.url,target:"_blank",class:"link-part"},O(t.token.content.displayText),9,Ra))}}),Na={class:"mention-token"},Fa={key:1},Va=F({__name:"MessageTokenMention",props:{token:{},msg:{}},setup(a){const t=a,e=X("chat.colored_mentions"),n=t.token.content.displayText.charAt(0)==="@",r=n?t.token.content.displayText.slice(1):t.token.content.displayText;return(s,i)=>{var m;return d(),c("span",Na,[p(e)?(d(),c("span",{key:0,style:ge({color:(m=s.token.content.user)==null?void 0:m.color})},[L(he,{user:s.token.content.user??{id:p(It)(),username:p(r).toLowerCase(),displayName:p(r),color:""},"as-mention":n,"hide-badges":!0},null,8,["user"])],4)):(d(),c("span",Fa,O(s.token.content.displayText),1))])}}});const Wa=x(Va,[["__scopeId","data-v-7bfbc3c4"]]),Ha={class:"seventv-chat-message-rich-embed"},Ya=["href"],qa={class:"seventv-chat-message-rich-embed-layout"},za={class:"seventv-chat-message-rich-embed-layout-thumbnail"},ja=["src"],Qa={class:"seventv-chat-message-rich-embed-layout-description"},Ga={class:"seventv-chat-message-rich-embed-layout-description-title"},Xa={key:0},Ka={class:"seventv-chat-message-rich-embed-layout-description-author"},Ja=F({__name:"RichEmbed",props:{richEmbed:{}},setup(a){return(t,e)=>(d(),c("div",Ha,[f("a",{href:t.richEmbed.request_url,target:"_blank",class:"seventv-chat-message-rich-embed-link"},[f("div",qa,[f("div",za,[f("img",{src:t.richEmbed.thumbnail_url,alt:"thumbnail"},null,8,ja)]),f("div",Qa,[f("div",null,[f("p",Ga,O(t.richEmbed.title),1)]),t.richEmbed.twitch_metadata.clip_metadata.id?(d(),c("div",Xa,[f("p",Ka," Clipped by "+O(t.richEmbed.author_name),1)])):$("",!0)])])],8,Ya)]))}});const Za=x(Ja,[["__scopeId","data-v-9f95cf92"]]),en=J`
	query ChatReplies($messageID: ID!, $channelID: ID!) {
		message(id: $messageID) {
			...messageFields
			replies {
				nodes {
					...messageFields
				}
				totalCount
			}
		}
	}

	${Ut}
`,tn={},an={fill:"currenColor",width:"1em",height:"1em",version:"1.1",viewBox:"0 0 16 16",x:"0px",y:"0px"},nn=f("g",null,[f("path",{d:"M5 6H7V8H5V6Z"}),f("path",{d:"M9 6H11V8H9V6Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 14L10 12H13C13.5523 12 14 11.5523 14 11V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H6L8 14ZM6.82843 10H4V4H12V10H9.17157L8 11.1716L6.82843 10Z"})],-1),rn=[nn];function sn(a,t){return d(),c("svg",an,rn)}const Pe=x(tn,[["render",sn]]),on={},dn={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},un=f("path",{d:"M8.5 5.5L7 4L2 9L7 14L8.5 12.5L6 10H10C12.2091 10 14 11.7909 14 14V16H16V14C16 10.6863 13.3137 8 10 8H6L8.5 5.5Z"},null,-1),cn=[un];function ln(a,t){return d(),c("svg",dn,cn)}const mn=x(on,[["render",ln]]),gn={class:"seventv-tray-header"},hn={class:"seventv-tray-icon seventv-reply"},vn={class:"seventv-tray-header-text"},fn={key:0},pn={key:1},_n={class:"seventv-tray-user-message-container"},yn=F({__name:"ReplyTray",props:{close:{type:Function},id:{},authorID:{},username:{},displayName:{},body:{},deleted:{type:Boolean}},setup(a){const t=a,e=P(null),n=P([]),r=oe(),s=tt(r),i=re();return fe(async()=>{if(!i)return;const m=await i.query({query:en,fetchPolicy:"no-cache",variables:{messageID:t.id,channelID:r.id}}).catch(l=>{ne.error("failed to fetch chat replies",l.message)});!m||!m.data||!m.data.message||(e.value=$e(m.data.message),n.value=[e.value,...m.data.message.replies.nodes.map(l=>$e(l))])}),(m,l)=>(d(),c(z,null,[f("div",gn,[f("div",hn,[n.value.length<=1?(d(),E(mn,{key:0})):(d(),E(Pe,{key:1}))]),f("div",vn,[n.value.length<=1&&m.authorID?(d(),c("span",fn,O(`Replying to @${m.displayName??m.username}:`),1)):(d(),c("span",pn," Thread "))]),f("div",{class:"seventv-tray-icon seventv-close",onClick:l[0]||(l[0]=h=>m.close())},[L(Pt)])]),L(et,null,{default:de(()=>[f("div",_n,[(d(!0),c(z,null,ee(n.value,h=>{var g;return d(),E(Ue,{key:h.id,msg:h,emotes:p(s).active,"force-timestamp":!0,as:"Reply",class:je(["thread-msg",{"is-root-msg":((g=e.value)==null?void 0:g.id)===h.id}])},null,8,["msg","emotes","class"])}),128))])]),_:1})],64))}});const bn=x(yn,[["__scopeId","data-v-3459cc07"]]),Ve=be(new Set);function We(a,t){const e=P({current:null}),n={parent:e.value,component:dt(a),props:t},r=ue(e.value,()=>{e.value.current?Ve.add(n):(Ve.delete(n),r())});return{$$typeof:St,key:null,ref:e.value,type:"seventv-tray-container",props:{}}}function wn(a){const t=a;return!!(t.id&&t.body)&&typeof t.deleted=="boolean"}function Cn(a){return{body:bn,inputValueOverride:"",sendButtonOverride:"reply",disableBits:!0,disablePaidPinnedChat:!0,disableChat:a.deleted,sendMessageHandler:{type:"reply",additionalMetadata:{reply:{parentMsgId:a.id,parentMessageBody:a.body,...a.authorID?{parentUid:a.authorID,parentUserLogin:a.username,parentDisplayName:a.displayName}:{}}}},type:"reply"}}function Mn(a,t){let e=null;switch(a){case"Reply":if(!wn(t))break;e=Cn(t)}return e}function Tn(a,t,e){const n=xt("chat-input");function r(){var i;!n.value||typeof((i=n.value.instance)==null?void 0:i.setTray)!="function"||n.value.instance.setTray(null)}function s(){var l;if(!n.value||typeof((l=n.value.instance)==null?void 0:l.setTray)!="function")return;const i={...t==null?void 0:t(),close:r};if(!i)return;const m=e??Mn(a,i);m&&n.value.instance.setTray({...m,header:m.header?We(m.header,i):void 0,body:m.body?We(m.body,i):void 0})}return{open:s,clear:r}}const $n={},kn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},Un=f("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},null,-1),Dn=[Un];function Ln(a,t){return d(),c("svg",kn,Dn)}const In=x($n,[["render",Ln]]),Sn={},xn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},Pn=f("path",{d:"M64 0H32V64H64 93.5L82.1 212.1C23.7 240.7 0 293 0 320v32H384V320c0-22.5-23.7-76.5-82.1-106.7L290.5 64H320h32V0H320 64zm96 480v32h64V480 384H160v96z"},null,-1),On=[Pn];function An(a,t){return d(),c("svg",xn,On)}const Bn=x(Sn,[["render",An]]),Rn={},En={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},Nn=f("path",{d:"M0 208L192 384h32V288h80c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176H224V32H192L0 208z"},null,-1),Fn=[Nn];function Vn(a,t){return d(),c("svg",En,Fn)}const Wn=x(Rn,[["render",Vn]]),Hn={class:"seventv-copied-message-toast-body"},Yn={key:0},qn=F({__name:"UiCopiedMessageToast",props:{message:{}},emits:["close"],setup(a,{emit:t}){const e=P();return At(e,()=>{t("close")}),(n,r)=>(d(),c("main",{ref_key:"copiedMessageToastRef",ref:e,class:"seventv-copied-message-toast"},[f("div",Hn,[n.message?(d(),c("p",Yn,O(n.message),1)):Qe(n.$slots,"default",{key:1},void 0,!0)])],512))}});const zn=x(qn,[["__scopeId","data-v-fbb0ba18"]]),jn={class:"seventv-chat-message-buttons"},Qn=F({__name:"UserMessageButtons",props:{msg:{}},emits:["pin"],setup(a,{emit:t}){const e=a,n=Tn("Reply",()=>{var C,M,T,b,B,W,N,A,V,Y,Q,u;return{id:((C=e.msg.parent)==null?void 0:C.id)??e.msg.id,body:((M=e.msg.parent)==null?void 0:M.body)??e.msg.body,deleted:((T=e.msg.parent)==null?void 0:T.deleted)??e.msg.moderation.deleted,...((b=e.msg.parent)==null?void 0:b.author)??e.msg.author?{authorID:((B=e.msg.parent)==null?void 0:B.uid)??((W=e.msg.author)==null?void 0:W.id),username:((A=(N=e.msg.parent)==null?void 0:N.author)==null?void 0:A.username)??((V=e.msg.author)==null?void 0:V.username),displayName:((Q=(Y=e.msg.parent)==null?void 0:Y.author)==null?void 0:Q.displayName)??((u=e.msg.author)==null?void 0:u.displayName)}:{}}}),r=X("chat.copy_icon_toggle"),s=P(!1),i=P(),m=Ee(i,{enabled:()=>s.value,middleware:[Me({padding:8})]});function l(){s.value||(navigator.clipboard.writeText(e.msg.body),s.value=!0,Ge(()=>{s.value=!1},1e3))}const h=P(!1),g=P(),v=Ee(g,{enabled:()=>h.value,middleware:[Me({padding:8})]});function _(){n.open()}function o(C){C==="yes"&&t("pin")}return(C,M)=>{const T=ce("tooltip");return d(),c(z,null,[f("div",jn,[p(r)&&!C.msg.moderation.deleted?G((d(),c("div",{key:0,ref_key:"copyButtonRef",ref:i,class:"seventv-button",onClick:M[0]||(M[0]=b=>l())},[L(In)])),[[T,"Copy"]]):$("",!0),C.msg.pinnable&&!C.msg.moderation.deleted?G((d(),c("div",{key:1,ref_key:"pinButtonRef",ref:g,class:"seventv-button",onClick:M[1]||(M[1]=b=>h.value=!0)},[L(Bn)])),[[T,"Pin"]]):$("",!0),G((d(),c("div",{class:"seventv-button",onClick:_},[(d(),E(Le(C.msg.parent?Pe:Wn)))])),[[T,"Reply"]])]),s.value&&p(m)?(d(),E(Te,{key:0,to:p(m)},[L(zn,{title:"Message Copied",onClose:M[2]||(M[2]=b=>s.value=!1)},{default:de(()=>[K(" Message from "),C.msg.author?(d(),E(he,{key:0,user:C.msg.author},null,8,["user"])):$("",!0),K(" has been copied ")]),_:1})],8,["to"])):$("",!0),h.value&&p(v)?(d(),E(Te,{key:1,to:p(v)},[L($t,{title:"Pin Message?",choices:["yes","no"],onClose:M[3]||(M[3]=b=>h.value=!1),onAnswer:M[4]||(M[4]=b=>o(b))},{default:de(()=>[K(" Are you sure you want to pin this message by "),C.msg.author?(d(),E(he,{key:0,user:C.msg.author},null,8,["user"])):$("",!0),K("? ")]),_:1})],8,["to"])):$("",!0)],64)}}});const Gn=x(Qn,[["__scopeId","data-v-292d3e55"]]);function H(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function Xn(a,t,e){var n;H(1,arguments);var r;return Kn(t)?r=t:e=t,new Intl.DateTimeFormat((n=e)===null||n===void 0?void 0:n.locale,r).format(a)}function Kn(a){return a!==void 0&&!("locale"in a)}function Oe(a,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e.length>=t?a.apply(null,e.slice(0,t).reverse()):function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return Oe(a,t,e.concat(r))}}const Jn=Oe(Xn,3),Zn=["msg-id","state","data-highlight-style"],er=["data-highlight-label"],tr={key:1,class:"seventv-chat-message-timestamp"},ar={key:4},nr={class:"seventv-chat-message-body"},rr={key:0,class:"text-token"},sr={key:1},or={key:0,class:"seventv-chat-message-moderated"},ir={key:1,class:"seventv-chat-message-moderated"},dr=F({__name:"UserMessage",props:{msg:{},as:{default:"Chat"},highlight:{},emotes:{},chatters:{},isModerator:{type:Boolean},hideAuthor:{type:Boolean},hideModeration:{type:Boolean},hideModIcons:{type:Boolean},hideDeletionState:{type:Boolean},showButtons:{type:Boolean},forceTimestamp:{type:Boolean}},setup(a){var Q;const t=a,e=ut(t,"msg"),n=P(),r=oe(),s=at(r),{openViewerCard:i}=nt(r),{pinChatMessage:m}=xe(r,((Q=e.value.author)==null?void 0:Q.username)??""),l=X("chat.emote_scale"),h=X("chat.slash_me_style"),g=X("highlights.display_style"),v=X("highlights.opacity"),_=X("chat.timestamp_with_seconds"),o=X("chat.show_emote_modifiers"),C=X("chat.timestamp_format"),M=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language??"en",T=t.msg.author?De(t.msg.author.id):{emotes:{}},b=P(""),B=t.msg.getTokenizer(),W=P([]);function N(){if(!B)return;const u=B.tokenize({chatterMap:t.chatters??{},emoteMap:t.emotes??{},localEmoteMap:{...T.emotes,...t.msg.nativeEmotes},showModifiers:o.value}),y=[],D=t.msg.body;let w=0;for(const S of u){const k=S.range[0],R=S.range[1],q=D.substring(w,k);q&&y.push(q),y.push(S),w=R+1}const I=D.substring(w);I&&y.push(I),W.value=y}function A(){var u;(u=m(e.value.id,1200))==null||u.catch(y=>ne.error("failed to pin chat message",y))}ue(()=>[T.emotes,t.msg.nativeEmotes],()=>N(),{immediate:!0}),t.msg.historical&&Ge(fe(()=>{N()}),1e4);function V(u){if(Et(u))return Wa;if(Bt(u))return Ea}const Y=()=>{switch(C.value){case"infer":return;case"12":return!0;case"24":return!1}};return fe(()=>{!e.value||!n.value||(e.value.highlight&&(n.value.style.setProperty("--seventv-highlight-color",e.value.highlight.color),n.value.style.setProperty("--seventv-highlight-dim-color",e.value.highlight.color.concat(lt(v.value/100)))),(s.showTimestamps||e.value.historical||t.forceTimestamp)&&(b.value=Jn({locale:M},{localeMatcher:"lookup",hour:"2-digit",minute:"2-digit",second:_.value?"numeric":void 0,hour12:Y()},t.msg.timestamp)))}),(u,y)=>{var D;return d(),c("span",{ref_key:"msgEl",ref:n,class:je(["seventv-user-message",{deleted:!u.hideDeletionState&&(e.value.moderation.banned||e.value.moderation.deleted),"has-mention":u.as=="Chat"&&e.value.mentions.has("#actor"),"has-highlight":u.as=="Chat"&&e.value.highlight}]),"msg-id":e.value.id,state:e.value.deliveryState,style:ge({"font-style":e.value.slashMe&&p(h)&1?"italic":"",color:e.value.slashMe&&p(h)&2?(D=e.value.author)==null?void 0:D.color:""}),"data-highlight-style":p(g)},[e.value.highlight?(d(),c("div",{key:0,class:"seventv-chat-message-highlight-label","data-highlight-label":e.value.highlight.label},null,8,er)):$("",!0),p(s).showTimestamps||e.value.historical||u.forceTimestamp?(d(),c("span",tr,O(b.value),1)):$("",!0),p(r).actor.roles.has("MODERATOR")&&p(s).showModerationIcons&&!u.hideModIcons?(d(),E(Ba,{key:2,msg:e.value},null,8,["msg"])):$("",!0),e.value.author&&!u.hideAuthor?(d(),E(he,{key:3,user:e.value.author,badges:e.value.badges,"msg-id":e.value.sym,onOpenNativeCard:y[0]||(y[0]=w=>p(i)(w,e.value.author.username,e.value.id))},null,8,["user","badges","msg-id"])):$("",!0),u.hideAuthor?$("",!0):(d(),c("span",ar,O(e.value.slashMe?" ":": "),1)),f("span",nr,[(d(!0),c(z,null,ee(W.value,(w,I)=>(d(),c(z,{key:I},[typeof w=="string"?(d(),c("span",rr,O(w),1)):p(Rt)(w)?(d(),c("span",sr,[L(Dt,{class:"emote-token",emote:w.content.emote,format:p(s).imageFormat,overlaid:w.content.overlaid,clickable:!0,scale:Number(p(l))},null,8,["emote","format","overlaid","scale"]),w.content?(d(),c("span",{key:0,style:ge({color:w.content.cheerColor})},O(w.content.cheerAmount),5)):$("",!0)])):(d(),E(Le(V(w)),ct(Xe({key:2},{token:w,msg:e.value})),null,16))],64))),128))]),e.value.richEmbed.request_url?(d(),E(Za,{key:5,"rich-embed":e.value.richEmbed},null,8,["rich-embed"])):$("",!0),!u.hideModeration&&(e.value.moderation.banned||e.value.moderation.deleted)?(d(),c(z,{key:6},[e.value.moderation.banned?(d(),c("span",or,O(e.value.moderation.banDuration?`Timed out (${e.value.moderation.banDuration}s)`:"Permanently Banned"),1)):(d(),c("span",ir,"Deleted"))],64)):$("",!0),L(Gn,{msg:e.value,onPin:y[1]||(y[1]=w=>A())},null,8,["msg"])],14,Zn)}}});const Ue=x(dr,[["__scopeId","data-v-82270c68"]]),ur={class:"seventv-chat-message-container"},cr={class:"seventv-chat-message-background",tabindex:"0"},lr={key:0,class:"seventv-reply-part"},mr={class:"seventv-chat-reply-icon"},gr={class:"seventv-reply-message-part"},hr=F({__name:"0.NormalMessage",props:{msg:{},msgData:{}},setup(a){return(t,e)=>{const n=ce("tooltip");return d(),c("div",ur,[f("div",cr,[t.msgData.reply?(d(),c("div",lr,[f("div",mr,[L(Pe)]),G((d(),c("div",gr,[K(O(`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`),1)])),[[n,`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`]])])):$("",!0),Qe(t.$slots,"default",{},void 0,!0)])])}}});const vr=x(hr,[["__scopeId","data-v-81315227"]]),rt=a=>(ft("data-v-27de22bc"),a=a(),pt(),a),fr={key:0,class:"seventv-user-card-message-timeline"},pr=["timeline-id"],_r=rt(()=>f("div",{selector:"date-boundary"},null,-1)),yr=rt(()=>f("div",{selector:"date-boundary"},null,-1)),br={class:"seventv-user-card-message-timeline-list"},wr={key:1,class:"seventv-user-card-message-timeline-empty"},Cr={key:2,class:"seventv-user-card-mod-comment-input-container"},Mr=["placeholder","onKeydown"],Tr=F({__name:"UserCardMessageList",props:{activeTab:{},target:{},timeline:{},scroller:{}},emits:["add-mod-comment"],setup(a,{emit:t}){const e=a,{t:n}=Ie(),r=oe(),s=tt(r),i=gt(!0,10),m=re(),l=P("");function h(){var v;(v=e.scroller)!=null&&v.container&&e.scroller.container.scrollTo({top:e.scroller.container.scrollHeight})}async function g(){var o;if(!l.value||!m)return;const v=l.value;l.value="";const _=await m.mutate({mutation:Qt,variables:{input:{channelID:r.id,targetID:e.target.id,text:v}}}).catch(C=>ne.error("failed to add mod comment",C));!_||!_.data||!_.data.createModeratorComment||(t("add-mod-comment",(o=_.data)==null?void 0:o.createModeratorComment.comment),Se(h))}return ue(()=>e.activeTab,()=>{i.value=!1,setTimeout(()=>{h()},10)}),ue(e.timeline,()=>{var v;!((v=e.scroller)!=null&&v.container)||e.scroller.container.scrollTop!==0||h()}),(v,_)=>p(i)?(d(),c("div",fr,[Object.keys(e.timeline).length?(d(!0),c(z,{key:0},ee(Object.entries(e.timeline).reverse(),([o,C])=>(d(),c("section",{key:o,"timeline-id":o},[_r,f("label",null,O(o),1),yr,f("div",br,[(d(!0),c(z,null,ee(C,M=>(d(),c(z,{key:M.sym},[M.instance&&M.instance!==vr?(d(),E(Le(M.instance),Xe({key:0},M.componentProps,{msg:M}),{default:de(()=>[L(Ue,{msg:M,emotes:p(s).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"])]),_:2},1040,["msg"])):(d(),E(Ue,{key:1,msg:M,emotes:p(s).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"]))],64))),128))])],8,pr))),128)):(d(),c("div",wr,[f("p",null,O(p(n)(`user_card.no_${v.activeTab}`,{user:v.target.displayName})),1)])),v.activeTab==="comments"?(d(),c("div",Cr,[G(f("input",{id:"seventv-user-card-mod-comment-input","onUpdate:modelValue":_[0]||(_[0]=o=>l.value=o),placeholder:p(n)("user_card.add_comment_input_placeholder"),onKeydown:vt(g,["enter"])},null,40,Mr),[[ht,l.value]])])):$("",!0)])):$("",!0)}});const $r=x(Tr,[["__scopeId","data-v-27de22bc"]]),kr={mlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ur={key:0,d:"M408 56L384 80c37.3 37.3 74.7 74.7 112 112c8-8 16-16 24-24l56 56c-37.5 37.5-74.9 74.9-112.4 112.4c59.1 45.9 118.2 91.7 177.3 137.6c-9.8 12.6-19.6 25.3-29.4 37.9C407.9 353.9 204.5 195.9 1 38C10.8 25.3 20.6 12.7 30.4 .1c60.3 46.8 120.7 93.7 181 140.5C258.3 93.7 305.1 46.9 352 0c18.7 18.7 37.3 37.3 56 56zM288 176l-13.5 13.5c40.3 31.3 80.7 62.7 121 94C359.7 247.7 323.8 211.8 288 176zm-9.4 166.7c5.8 5.7 11.6 11.5 17.4 17.3c-50.7 50.7-101.3 101.3-152 152c-26.7-26.7-53.3-53.3-80-80c50.7-50.7 101.3-101.3 152-152c5.8 5.8 11.6 11.6 17.4 17.4c3.3-3.3 6.5-6.5 9.8-9.8c16.9 13.3 33.8 26.6 50.6 39.9c-5.1 5.1-10.1 10.1-15.2 15.2z"},Dr={key:1,d:"M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z"},Lr=F({__name:"GavelIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(d(),c("svg",kr,[t.slashed?(d(),c("path",Ur)):(d(),c("path",Dr))]))}}),Ir={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Sr={key:0,d:"M496.8 363l124.1 96.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 77.8 60.4L308.4 4.5 320 0l11.6 4.5L539.1 85l19.2 7.4 1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-7.2 16.5-15.6 32.9-25.3 49zM170.4 109.5L458.6 333.3c7.4-12.6 13.9-25.5 19.5-38.5C505 232.9 512.9 169.5 512 126L320 51.5l-149.6 58zm-8.5 185.2c28.2 64.9 77 127.7 158.1 164.8c30-13.7 55.6-31 77.3-50.5l38.2 30.1c-28.1 26.5-62 49.7-102.8 67.3L320 512l-12.7-5.5c-98.4-42.6-156.7-117.3-189.4-192.6c-23.5-54.1-34.1-109-37-154.2l53.3 42c5.2 29.5 13.9 61.5 27.7 93z"},xr={key:1,d:"M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5zM256 68.7l0 0L432 137c-.5 40.9-8.8 96.8-32.6 151.5c-26.2 60.3-70.6 118-143.5 153.5V68.7z"},Pr=F({__name:"ShieldIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(d(),c("svg",Ir,[t.slashed?(d(),c("path",Sr)):(d(),c("path",xr))]))}}),Or={class:"seventv-user-card-mod"},Ar=["is-banned"],Br={class:"seventv-user-card-mod-timeout-options"},Rr=["onClick"],Er=["is-mod"],Nr=F({__name:"UserCardMod",props:{target:{},ban:{},isModerator:{type:Boolean}},emits:["victim-banned","victim-unbanned","victim-modded","victim-unmodded"],setup(a,{emit:t}){const e=a,{t:n}=Ie(),r=oe(),s=xe(r,e.target.username);async function i(g){var _,o,C;const v=await s.banUserFromChat(g).catch(()=>{});!v||(_=v.errors)!=null&&_.length||!((o=v.data)!=null&&o.banUserFromChatRoom.ban)||t("victim-banned",(C=v.data)==null?void 0:C.banUserFromChatRoom.ban)}async function m(){var v;const g=await s.unbanUserFromChat().catch(()=>{});!g||(v=g.errors)!=null&&v.length||t("victim-unbanned")}async function l(g){var _;const v=await s.setUserModerator(e.target.id,g).catch(()=>{});!v||(_=v.errors)!=null&&_.length||t(g?"victim-unmodded":"victim-modded")}const h=["1s","30s","1m","10m","30m","1h","4h","12h","1d","7d","14d"];return(g,v)=>{const _=ce("tooltip");return d(),c("div",Or,[f("div",{class:"seventv-user-card-mod-side seventv-user-card-mod-ban","is-banned":g.ban?"1":"0"},[G(L(Lr,{slashed:!!g.ban,onClick:v[0]||(v[0]=o=>g.ban?m():i(""))},null,8,["slashed"]),[[_,g.ban?p(n)("user_card.unban_button"):p(n)("user_card.ban_button")]])],8,Ar),G(f("div",Br,[(d(),c(z,null,ee(h,o=>G(f("button",{key:o,onClick:C=>i(o)},[K(O(o),1)],8,Rr),[[_,p(n)("user_card.timeout_button",{duration:o})]])),64))],512),[[_t,!g.ban]]),p(r).actor.roles.has("BROADCASTER")?(d(),c("div",{key:0,class:"seventv-user-card-mod-side seventv-user-card-mod-moderator","is-mod":g.isModerator?"1":"0"},[G(L(Pr,{slashed:g.isModerator,onClick:v[1]||(v[1]=o=>l(!!g.isModerator))},null,8,["slashed"]),[[_,g.isModerator?p(n)("user_card.unmod_button"):p(n)("user_card.mod_button")]])],8,Er)):$("",!0)])}}});const Fr=x(Nr,[["__scopeId","data-v-251f4df5"]]),Vr={class:"seventv-user-card-tabs"},Wr=["selected","onClick"],Hr=F({__name:"UserCardTabs",props:{activeTab:{},messageCount:{},timeoutCount:{},banCount:{},commentCount:{}},emits:["switch"],setup(a,{emit:t}){const e=a,n=yt(()=>[{id:"messages",label:"Messages",count:e.messageCount,maxCount:1e3},{id:"timeouts",label:"Timeouts",count:e.timeoutCount,maxCount:99},{id:"bans",label:"Bans",count:e.banCount,maxCount:99},{id:"comments",label:"Comments",count:e.commentCount,maxCount:10}]);function r(s,i){return s>=i?i.toString()+"+":s.toString()}return(s,i)=>(d(),c("div",Vr,[(d(!0),c(z,null,ee(n.value,m=>(d(),c("button",{key:m.label,selected:s.activeTab===m.id,onClick:l=>t("switch",m.id)},[K(O(r(m.count,m.maxCount))+" ",1),f("p",null,O(m.label),1)],8,Wr))),128))]))}});const Yr=x(Hr,[["__scopeId","data-v-22801492"]]),qr={class:"seventv-basic-system-message"},zr=F({__name:"BasicSystemMessage",props:{text:{}},setup(a){return(t,e)=>(d(),c("span",qr,O(t.text),1))}});const jr=x(zr,[["__scopeId","data-v-0218c5a7"]]);function pe(a){return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(a)}function Qr(a){return H(1,arguments),a instanceof Date||pe(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Z(a){H(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||pe(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Gr(a){if(H(1,arguments),!Qr(a)&&typeof a!="number")return!1;var t=Z(a);return!isNaN(Number(t))}function se(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Xr(a,t){H(2,arguments);var e=Z(a).getTime(),n=se(t);return new Date(e+n)}function Kr(a,t){H(2,arguments);var e=se(t);return Xr(a,-e)}var Jr=864e5;function Zr(a){H(1,arguments);var t=Z(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),r=e-n;return Math.floor(r/Jr)+1}function _e(a){H(1,arguments);var t=1,e=Z(a),n=e.getUTCDay(),r=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function st(a){H(1,arguments);var t=Z(a),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var r=_e(n),s=new Date(0);s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0);var i=_e(s);return t.getTime()>=r.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function es(a){H(1,arguments);var t=st(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=_e(e);return n}var ts=6048e5;function as(a){H(1,arguments);var t=Z(a),e=_e(t).getTime()-es(t).getTime();return Math.round(e/ts)+1}var ns={};function we(){return ns}function ye(a,t){var e,n,r,s,i,m,l,h;H(1,arguments);var g=we(),v=se((e=(n=(r=(s=t==null?void 0:t.weekStartsOn)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&r!==void 0?r:g.weekStartsOn)!==null&&n!==void 0?n:(l=g.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&e!==void 0?e:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=Z(a),o=_.getUTCDay(),C=(o<v?7:0)+o-v;return _.setUTCDate(_.getUTCDate()-C),_.setUTCHours(0,0,0,0),_}function ot(a,t){var e,n,r,s,i,m,l,h;H(1,arguments);var g=Z(a),v=g.getUTCFullYear(),_=we(),o=se((e=(n=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&r!==void 0?r:_.firstWeekContainsDate)!==null&&n!==void 0?n:(l=_.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(o>=1&&o<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var C=new Date(0);C.setUTCFullYear(v+1,0,o),C.setUTCHours(0,0,0,0);var M=ye(C,t),T=new Date(0);T.setUTCFullYear(v,0,o),T.setUTCHours(0,0,0,0);var b=ye(T,t);return g.getTime()>=M.getTime()?v+1:g.getTime()>=b.getTime()?v:v-1}function rs(a,t){var e,n,r,s,i,m,l,h;H(1,arguments);var g=we(),v=se((e=(n=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&r!==void 0?r:g.firstWeekContainsDate)!==null&&n!==void 0?n:(l=g.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1),_=ot(a,t),o=new Date(0);o.setUTCFullYear(_,0,v),o.setUTCHours(0,0,0,0);var C=ye(o,t);return C}var ss=6048e5;function os(a,t){H(1,arguments);var e=Z(a),n=ye(e,t).getTime()-rs(e,t).getTime();return Math.round(n/ss)+1}function U(a,t){for(var e=a<0?"-":"",n=Math.abs(a).toString();n.length<t;)n="0"+n;return e+n}var is={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return U(e==="yy"?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):U(n+1,2)},d:function(t,e){return U(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return U(t.getUTCHours()%12||12,e.length)},H:function(t,e){return U(t.getUTCHours(),e.length)},m:function(t,e){return U(t.getUTCMinutes(),e.length)},s:function(t,e){return U(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),s=Math.floor(r*Math.pow(10,n-3));return U(s,e.length)}};const te=is;var ie={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ds={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var r=t.getUTCFullYear(),s=r>0?r:1-r;return n.ordinalNumber(s,{unit:"year"})}return te.y(t,e)},Y:function(t,e,n,r){var s=ot(t,r),i=s>0?s:1-s;if(e==="YY"){var m=i%100;return U(m,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):U(i,e.length)},R:function(t,e){var n=st(t);return U(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return U(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return te.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var s=os(t,r);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):U(s,e.length)},I:function(t,e,n){var r=as(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):te.d(t,e)},D:function(t,e,n){var r=Zr(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var s=t.getUTCDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var s=t.getUTCDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return U(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return U(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),s=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r=t.getUTCHours(),s;switch(r===12?s=ie.noon:r===0?s=ie.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r=t.getUTCHours(),s;switch(r>=17?s=ie.evening:r>=12?s=ie.afternoon:r>=4?s=ie.morning:s=ie.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return te.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):te.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):te.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):te.s(t,e)},S:function(t,e){return te.S(t,e)},X:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ye(i);case"XXXX":case"XX":return ae(i);case"XXXXX":case"XXX":default:return ae(i,":")}},x:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"x":return Ye(i);case"xxxx":case"xx":return ae(i);case"xxxxx":case"xxx":default:return ae(i,":")}},O:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+He(i,":");case"OOOO":default:return"GMT"+ae(i,":")}},z:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+He(i,":");case"zzzz":default:return"GMT"+ae(i,":")}},t:function(t,e,n,r){var s=r._originalDate||t,i=Math.floor(s.getTime()/1e3);return U(i,e.length)},T:function(t,e,n,r){var s=r._originalDate||t,i=s.getTime();return U(i,e.length)}};function He(a,t){var e=a>0?"-":"+",n=Math.abs(a),r=Math.floor(n/60),s=n%60;if(s===0)return e+String(r);var i=t||"";return e+String(r)+i+U(s,2)}function Ye(a,t){if(a%60===0){var e=a>0?"-":"+";return e+U(Math.abs(a)/60,2)}return ae(a,t)}function ae(a,t){var e=t||"",n=a>0?"-":"+",r=Math.abs(a),s=U(Math.floor(r/60),2),i=U(r%60,2);return n+s+e+i}const us=ds;var qe=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},it=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},cs=function(t,e){var n=t.match(/(P+)(p+)?/)||[],r=n[1],s=n[2];if(!s)return qe(t,e);var i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",qe(r,e)).replace("{{time}}",it(s,e))},ls={p:it,P:cs};const ms=ls;function gs(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var hs=["D","DD"],vs=["YY","YYYY"];function fs(a){return hs.indexOf(a)!==-1}function ps(a){return vs.indexOf(a)!==-1}function ze(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ys=function(t,e,n){var r,s=_s[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const bs=ys;function Ce(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,n=a.formats[e]||a.formats[a.defaultWidth];return n}}var ws={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Cs={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ms={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ts={date:Ce({formats:ws,defaultWidth:"full"}),time:Ce({formats:Cs,defaultWidth:"full"}),dateTime:Ce({formats:Ms,defaultWidth:"full"})};const $s=Ts;var ks={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Us=function(t,e,n,r){return ks[t]};const Ds=Us;function le(a){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",r;if(n==="formatting"&&a.formattingValues){var s=a.defaultFormattingWidth||a.defaultWidth,i=e!=null&&e.width?String(e.width):s;r=a.formattingValues[i]||a.formattingValues[s]}else{var m=a.defaultWidth,l=e!=null&&e.width?String(e.width):a.defaultWidth;r=a.values[l]||a.values[m]}var h=a.argumentCallback?a.argumentCallback(t):t;return r[h]}}var Ls={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Is={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ss={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xs={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ps={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Os={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},As=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Bs={ordinalNumber:As,era:le({values:Ls,defaultWidth:"wide"}),quarter:le({values:Is,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:le({values:Ss,defaultWidth:"wide"}),day:le({values:xs,defaultWidth:"wide"}),dayPeriod:le({values:Ps,defaultWidth:"wide",formattingValues:Os,defaultFormattingWidth:"wide"})};const Rs=Bs;function me(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,r=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],s=t.match(r);if(!s)return null;var i=s[0],m=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(m)?Ns(m,function(v){return v.test(i)}):Es(m,function(v){return v.test(i)}),h;h=a.valueCallback?a.valueCallback(l):l,h=e.valueCallback?e.valueCallback(h):h;var g=t.slice(i.length);return{value:h,rest:g}}}function Es(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function Ns(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function Fs(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;var r=n[0],s=t.match(a.parsePattern);if(!s)return null;var i=a.valueCallback?a.valueCallback(s[0]):s[0];i=e.valueCallback?e.valueCallback(i):i;var m=t.slice(r.length);return{value:i,rest:m}}}var Vs=/^(\d+)(th|st|nd|rd)?/i,Ws=/\d+/i,Hs={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ys={any:[/^b/i,/^(a|c)/i]},qs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zs={any:[/1/i,/2/i,/3/i,/4/i]},js={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qs={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gs={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xs={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ks={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Js={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Zs={ordinalNumber:Fs({matchPattern:Vs,parsePattern:Ws,valueCallback:function(t){return parseInt(t,10)}}),era:me({matchPatterns:Hs,defaultMatchWidth:"wide",parsePatterns:Ys,defaultParseWidth:"any"}),quarter:me({matchPatterns:qs,defaultMatchWidth:"wide",parsePatterns:zs,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:me({matchPatterns:js,defaultMatchWidth:"wide",parsePatterns:Qs,defaultParseWidth:"any"}),day:me({matchPatterns:Gs,defaultMatchWidth:"wide",parsePatterns:Xs,defaultParseWidth:"any"}),dayPeriod:me({matchPatterns:Ks,defaultMatchWidth:"any",parsePatterns:Js,defaultParseWidth:"any"})};const eo=Zs;var to={code:"en-US",formatDistance:bs,formatLong:$s,formatRelative:Ds,localize:Rs,match:eo,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ao=to;var no=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ro=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,so=/^'([^]*?)'?$/,oo=/''/g,io=/[a-zA-Z]/;function uo(a,t,e){var n,r,s,i,m,l,h,g,v,_,o,C,M,T,b,B,W,N;H(2,arguments);var A=String(t),V=we(),Y=(n=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:V.locale)!==null&&n!==void 0?n:ao,Q=se((s=(i=(m=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(h=e.locale)===null||h===void 0||(g=h.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:V.firstWeekContainsDate)!==null&&i!==void 0?i:(v=V.locale)===null||v===void 0||(_=v.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(Q>=1&&Q<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=se((o=(C=(M=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(b=e.locale)===null||b===void 0||(B=b.options)===null||B===void 0?void 0:B.weekStartsOn)!==null&&M!==void 0?M:V.weekStartsOn)!==null&&C!==void 0?C:(W=V.locale)===null||W===void 0||(N=W.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&o!==void 0?o:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Y.localize)throw new RangeError("locale must contain localize property");if(!Y.formatLong)throw new RangeError("locale must contain formatLong property");var y=Z(a);if(!Gr(y))throw new RangeError("Invalid time value");var D=gs(y),w=Kr(y,D),I={firstWeekContainsDate:Q,weekStartsOn:u,locale:Y,_originalDate:y},S=A.match(ro).map(function(k){var R=k[0];if(R==="p"||R==="P"){var q=ms[R];return q(k,Y.formatLong)}return k}).join("").match(no).map(function(k){if(k==="''")return"'";var R=k[0];if(R==="'")return co(k);var q=us[R];if(q)return!(e!=null&&e.useAdditionalWeekYearTokens)&&ps(k)&&ze(k,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&fs(k)&&ze(k,t,String(a)),q(w,k,Y.localize,I);if(R.match(io))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return k}).join("");return S}function co(a){var t=a.match(so);return t?t[1].replace(oo,"'"):a}const lo=Oe(uo,2),mo={class:"seventv-user-card-container"},go={class:"seventv-user-card-header"},ho={class:"seventv-user-card-menuactions"},vo={class:"seventv-user-card-avatar"},fo=["src"],po={class:"seventv-user-card-usertag-container"},_o=["href"],yo=["data-seventv-paint-id"],bo={class:"seventv-user-card-badges"},wo={class:"seventv-user-card-interactive"},Co={class:"seventv-user-card-metrics"},Mo={key:0},To={key:1},$o={key:2},ko={key:3},Uo=["show-tabs"],Do=F({__name:"UserCard",props:{target:{}},emits:["close","mount-handle"],setup(a,{emit:t}){const e=a,n=oe(),r=Ke(n),{identity:s}=bt(Mt()),i=De(e.target.id),m=nt(n),l=re(),{t:h}=Ie(),g=P(),v=P(),_=P(null),o=be({activeTab:"messages",canActorAccessLogs:!1,ban:null,paint:null,targetUser:{id:e.target.id,username:e.target.username,displayName:e.target.displayName,bannerURL:"",avatarURL:"",createdAt:"",isModerator:!1,color:"",badges:[],relationship:{followedAt:"",subscription:{isSubscribed:!1,tier:"",months:0}}},stream:{live:!1,game:"",viewCount:0},messageCursors:new WeakMap,timelines:{messages:{},bans:{},timeouts:{},comments:{}},count:{messages:0,bans:0,timeouts:0,comments:0}});function C(){return o.timelines[o.activeTab]}async function M(u){var I;if(!o.targetUser||!l||o.activeTab!=="messages")return[];const y=u?o.messageCursors.get(u):void 0,D=await l.query({query:jt,variables:{channelID:n.id,senderID:o.targetUser.id,cursor:y}}).catch(S=>Promise.reject(S));if(!D||(I=D.errors)!=null&&I.length||!Array.isArray(D.data.logs.messages.edges))return[];const w=[];for(const S of D.data.logs.messages.edges){if(!S.node)continue;const k=$e(S.node);w.push(k),o.messageCursors.set(k,S.cursor)}return w}async function T(){var w;if(!o.targetUser||!l)return;const u=await l.query({query:zt,variables:{channelLogin:n.username,channelID:n.id,targetID:o.targetUser.id}}).catch(I=>Promise.reject(I));if(!u||(w=u.errors)!=null&&w.length||!u.data.channelUser)return;o.count.messages=u.data.viewerCardModLogs.messages.count??0,o.count.bans=u.data.viewerCardModLogs.bans.count??0,o.count.timeouts=u.data.viewerCardModLogs.timeouts.count??0,o.count.comments=u.data.viewerCardModLogs.comments.edges.length??0,o.ban=u.data.banStatus;const y=u.data.viewerCardModLogs.timeouts.edges,D=u.data.viewerCardModLogs.bans.edges;for(const[I,S]of[["timeouts",y],["bans",D]]){const k=[];for(const R of S){const q=new Be(R.node.id).setComponent(jr,{text:R.node.localizedLabel.localizedStringFragments.map(j=>"text"in j.token?j.token.text:j.token.login).join("")});q.setTimestamp(Date.parse(R.node.timestamp)),k.push(q)}N(k,I)}for(const I of u.data.viewerCardModLogs.comments.edges)b(I.node)}function b(u){const y=new Be(u.id);y.setAuthor({id:u.author.id,username:u.author.login,displayName:u.author.displayName,color:u.author.chatColor}),y.setTimestamp(Date.parse(u.timestamp)),y.body=u.text,N([y],"comments")}function B(){if(!g.value||!g.value.container||g.value.container.scrollTop>0)return;const y=W(new Date(Math.min(...Object.keys(o.timelines.messages).map(I=>Date.parse(I)||1/0))));if(!y)return;const D=o.timelines.messages[y];if(!D)return;const w=D[0];w&&(A(1),M(w).then(I=>{I.length&&N(I)}).catch(I=>{ne.error("Failed to fetch more messages",I)}))}function W(u){return`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`}function N(u,y="messages"){const D=o.timelines[y],w=r.find(S=>!!S.author&&S.author.id===e.target.id,!0),I=new Set(w.map(S=>S.id));for(const S of u){if(!S.timestamp)continue;const k=I.has(S.id)?"LIVE":W(new Date(S.timestamp));if(!D[k])D[k]=[];else if(D[k].find(R=>R.id===S.id))continue;D[k].unshift(S),D[k].sort((R,q)=>R.timestamp-q.timestamp)}}function A(u){!g.value||!g.value.container||g.value.container.scrollTo({top:u})}function V(u){!o.targetUser.username||!m.openViewerCard(u,o.targetUser.username,"")||t("close")}function Y(){return window.location.origin+"/"+e.target.username}function Q(u){return u?lo("PPP")(new Date(u)):""}return fe(async()=>{if(l){l.query({query:qt,variables:{channelID:n.id,channelIDStr:n.id,channelLogin:n.username,targetLogin:e.target.username,withStandardGifting:!1,isViewerBadgeCollectionEnabled:!0}}).then(async u=>{var y,D,w,I,S,k,R,q;if(u.data.channel&&(o.canActorAccessLogs=((y=u.data.channel.moderationSettings)==null?void 0:y.canAccessViewerCardModLogs)??!1),u.data.targetUser){if(o.targetUser.id=u.data.targetUser.id,o.targetUser.username=u.data.targetUser.login,o.targetUser.displayName=u.data.targetUser.displayName,o.targetUser.avatarURL=u.data.targetUser.profileImageURL,o.targetUser.bannerURL=u.data.targetUser.bannerImageURL??"",o.targetUser.color=u.data.targetUser.chatColor,o.targetUser.relationship.followedAt=Q((D=u.data.targetUser.relationship)==null?void 0:D.followedAt),o.targetUser.createdAt=Q(u.data.targetUser.createdAt),o.targetUser.relationship.subscription.months=((I=(w=u.data.targetUser.relationship)==null?void 0:w.cumulativeTenure)==null?void 0:I.months)??0,(S=u.data.targetUser.relationship)!=null&&S.subscriptionBenefit&&(o.targetUser.relationship.subscription.isSubscribed=!0,o.targetUser.relationship.subscription.tier=(k=u.data.targetUser.relationship)==null?void 0:k.subscriptionBenefit.tier),u.data.targetUser.stream&&(o.stream.live=!0,o.stream.game=((R=u.data.targetUser.stream.game)==null?void 0:R.displayName)??"",o.stream.viewCount=u.data.targetUser.stream.viewersCount),o.targetUser.badges.length=0,o.targetUser.isModerator=u.data.targetUser.isModerator||u.data.targetUser.id===n.id,u.data.channelViewer&&((q=u.data.channelViewer.earnedBadges)!=null&&q.length))for(let j=0;j<u.data.channelViewer.earnedBadges.length;j++){const Ae=Tt(u.data.channelViewer.earnedBadges[j]);Ae&&(o.targetUser.badges[j]=Ae)}for(const j of i.badges.values())o.targetUser.badges.push(j)}o.targetUser&&(o.canActorAccessLogs||s.value&&o.targetUser.id===s.value.id)&&(N(await M().catch(j=>ne.error("failed to fetch message logs",j))??[]),T().catch(j=>ne.error("failed to fetch moderator data",j)))}).catch(u=>ne.error("failed to query user card",u));for(const u of i.paints.values()){o.paint=u;break}}}),ue(()=>[o.targetUser.bannerURL,o.targetUser.color],([u,y])=>{_.value&&(_.value.style.setProperty("--seventv-user-card-banner-url",`url(${u})`),_.value.style.setProperty("--seventv-user-card-color",y))}),wt(async()=>{v.value&&t("mount-handle",v.value),N(r.find(u=>!!u.author&&u.author.id===e.target.id,!0)),Se(()=>{!g.value||!g.value.container||A(g.value.container.scrollHeight)})}),(u,y)=>{const D=ce("tooltip");return d(),c("main",mo,[f("div",{ref_key:"cardRef",ref:_,class:"seventv-user-card"},[f("div",go,[f("div",{ref_key:"dragHandle",ref:v,class:"seventv-user-card-identity"},[f("div",ho,[G(L(Lt,{onClick:V},null,512),[[D,p(h)("user_card.native")]]),L(mt,{class:"close-button",onClick:y[0]||(y[0]=w=>t("close"))})]),f("div",vo,[o.targetUser.avatarURL?(d(),c("img",{key:0,src:o.targetUser.avatarURL},null,8,fo)):$("",!0)]),f("div",po,[f("a",{href:Y(),target:"_blank",class:"seventv-user-card-usertag"},[L(he,{user:o.targetUser,"hide-badges":!0,clickable:!1},null,8,["user"])],8,_o)]),o.paint?(d(),c("span",{key:0,class:"seventv-user-card-paint seventv-painted-content seventv-paint","data-seventv-paint-id":o.paint.id},[f("p",null,O(o.paint.data.name),1)],8,yo)):$("",!0),f("div",bo,[(d(!0),c(z,null,ee(o.targetUser.badges,w=>(d(),E(ke,{key:w.id,badge:w,alt:w.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])],512),f("div",wo,[f("div",Co,[o.targetUser.createdAt?(d(),c("p",Mo,[L(ea),K(" "+O(p(h)("user_card.account_created_date",{date:o.targetUser.createdAt})),1)])):$("",!0),o.targetUser.relationship.followedAt?(d(),c("p",To,[L(oa),K(" "+O(p(h)("user_card.following_since_date",{date:o.targetUser.relationship.followedAt})),1)])):$("",!0),o.targetUser.relationship.subscription.isSubscribed?(d(),c("p",$o,[L(Re),K(" "+O(`${p(h)("user_card.subscription_tier",{tier:o.targetUser.relationship.subscription.tier[0]})} -
							${p(h)("user_card.subscription_length",{length:o.targetUser.relationship.subscription.months})}`),1)])):o.targetUser.relationship.subscription.months?(d(),c("p",ko,[L(Re),K(" "+O(p(h)("user_card.previously_subscription_length",{length:o.targetUser.relationship.subscription.months})),1)])):$("",!0)]),L(ca),p(n).actor.roles.has("MODERATOR")&&!o.targetUser.isModerator||p(n).actor.roles.has("BROADCASTER")?(d(),E(Fr,{key:0,target:o.targetUser,ban:o.ban,"is-moderator":o.targetUser.isModerator,onVictimBanned:y[1]||(y[1]=w=>o.ban=w),onVictimUnbanned:y[2]||(y[2]=w=>o.ban=null),onVictimModded:y[3]||(y[3]=w=>o.targetUser.isModerator=!0),onVictimUnmodded:y[4]||(y[4]=w=>o.targetUser.isModerator=!1)},null,8,["target","ban","is-moderator"])):$("",!0)])]),f("div",{class:"seventv-user-card-data","show-tabs":p(n).actor.roles.has("MODERATOR")},[p(n).actor.roles.has("MODERATOR")?(d(),E(Yr,{key:0,"active-tab":o.activeTab,"message-count":o.count.messages,"ban-count":o.count.bans,"timeout-count":o.count.timeouts,"comment-count":o.count.comments,onSwitch:y[5]||(y[5]=w=>o.activeTab=w)},null,8,["active-tab","message-count","ban-count","timeout-count","comment-count"])):$("",!0),L(et,{ref_key:"scroller",ref:g,onContainerScroll:B},{default:de(()=>[L($r,{"active-tab":o.activeTab,target:o.targetUser,timeline:C(),scroller:g.value,onAddModComment:b},null,8,["active-tab","target","timeline","scroller"])]),_:1},512)],8,Uo)],512)])}}});const Lo=x(Do,[["__scopeId","data-v-ecbf26f5"]]),Io={key:0,class:"seventv-chat-user-badge-list"},So={key:0},xo={key:1},Po=F({__name:"UserTag",props:{user:{},msgId:{},asMention:{type:Boolean},hideBadges:{type:Boolean},clickable:{type:Boolean,default:!0},badges:{}},emits:["open-native-card"],setup(a,{emit:t}){const e=a,n=oe(),r=at(n),s=De(e.user.id),i=X("vanity.nametag_paints"),m=X("chat.user_card"),l=P([]),h=P(),g=P(!1),v=P(),_=P(null),o=P([]);function C(b){if(e.clickable){if(!m.value){t("open-native-card",b);return}g.value=!g.value}}if(e.badges&&r.twitchBadgeSets)for(const[b,B]of Object.entries(e.badges)){const W=b,N=B;for(const A of[r.twitchBadgeSets.channelsBySet,r.twitchBadgeSets.globalsBySet]){if(!A)continue;const V=A.get(W);if(!V)continue;const Y=V.get(N);if(Y){l.value.push(Y);break}}}const M=Date.now(),T=ue([s.paints,s.badges],([b,B])=>{if(e.msgId&&e.user.lastMsgId&&e.msgId!==e.user.lastMsgId&&Date.now()-M>5e3){Se(()=>T());return}_.value=i.value&&b&&b.size?b.values().next().value:null,o.value=[...B.values()]},{immediate:!0});return(b,B)=>{const W=ce("cosmetic-paint"),N=ce("tooltip");return d(),c(z,null,[b.user&&b.user.displayName?(d(),c("div",{key:0,ref_key:"tagRef",ref:h,class:"seventv-chat-user",style:ge({color:b.user.color})},[!b.hideBadges&&(l.value.length||p(s).badges.size)?(d(),c("span",Io,[(d(!0),c(z,null,ee(l.value,A=>(d(),E(ke,{key:A.id,badge:A,alt:A.title,type:"twitch",onClick:B[0]||(B[0]=V=>C(V))},null,8,["badge","alt"]))),128)),(d(!0),c(z,null,ee(o.value,A=>(d(),E(ke,{key:A.id,badge:A,alt:A.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])):$("",!0),G((d(),c("span",{class:"seventv-chat-user-username",onClick:B[1]||(B[1]=A=>C(A))},[G((d(),c("span",null,[b.asMention?(d(),c("span",So,"@")):$("",!0),f("span",null,O(b.user.displayName),1),b.user.intl?(d(),c("span",xo," ("+O(b.user.username)+")",1)):$("",!0)])),[[W,_.value?_.value.id:null]])])),[[N,_.value&&_.value.data?`Paint: ${_.value.data.name}`:""]])],4)):$("",!0),g.value&&h.value?(d(),E(Te,{key:1,to:"#seventv-float-context"},[L(Ot,{class:"seventv-user-card-float",handle:v.value,"initial-anchor":h.value,"initial-middleware":[p(Me)({mainAxis:!0,crossAxis:!0}),p(Ct)()],once:!0},{default:de(()=>[L(Lo,{target:e.user,onClose:B[2]||(B[2]=A=>g.value=!1),onMountHandle:B[3]||(B[3]=A=>v.value=A)},null,8,["target"])]),_:1},8,["handle","initial-anchor","initial-middleware"])])):$("",!0)],64)}}});const he=x(Po,[["__scopeId","data-v-6cbf31b5"]]);export{jr as B,Rt as I,Ue as U,vr as _,he as a,xe as b,nt as c,Z as d,se as e,pe as f,gs as g,Oe as h,ao as i,we as j,ke as k,H as r,Ve as t,at as u};
