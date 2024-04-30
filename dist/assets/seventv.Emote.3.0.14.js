import{a as Q,f as j,i as q}from"./seventv.Transform.3.0.14.js";import{e as M,w as Z,a as B,l as s,f as a,j as i,k as I,u as r,y as J,z as X,_ as R,G as H,H as Y,s as F,x as P,F as N,m as V,aJ as K,q as ee,aI as te,aP as oe,Z as se}from"./seventv.index.3.0.14.js";import{r as m,a as z,l as ae,t as h,u as E,b as D,n as O}from"./seventv.useUserAgent.3.0.14.js";import{g as T,a as ie,u as ne}from"./seventv.seventv.user.gql.3.0.14.js";import{O as re}from"./seventv.OpenLinkIcon.3.0.14.js";import{u as le}from"./seventv.index.3.0.142.js";import{D as me}from"./seventv.CloseIcon.3.0.14.js";import{a as de}from"./seventv.useChatEmotes.3.0.14.js";import{_ as ce}from"./seventv.StoreSubscribeButton.3.0.14.js";import{U as ue}from"./seventv.UiFloating.3.0.14.js";function pe(){return"__APOLLO_CLIENT__"in window?__APOLLO_CLIENT__??null:null}const G=T`
	fragment badge on Badge {
		id
		setID
		version
		title
		image1x: imageURL(size: NORMAL)
		image2x: imageURL(size: DOUBLE)
		image4x: imageURL(size: QUADRUPLE)
		clickAction
		clickURL
	}
`,_e=T`
	fragment messageSender on User {
		id
		login
		chatColor
		displayName
		displayBadges(channelID: $channelID) {
			...badge
		}
		__typename
	}

	${G}
`,vt=T`
	fragment messageFields on Message {
		id
		deletedAt
		sentAt
		content {
			...messageContent
		}
		sender {
			...messageSender
		}
		__typename
	}

	fragment messageContent on MessageContent {
		text
		fragments {
			...messageParticle
		}
		__typename
	}
	fragment messageParticle on MessageFragment {
		text
		content {
			... on CheermoteToken {
				...cheermoteFragment
			}
			... on Emote {
				...emoteFragment
			}
			... on User {
				...mentionFragment
			}
			... on AutoMod {
				...automodFragment
			}
			__typename
		}
		__typename
	}
	fragment cheermoteFragment on CheermoteToken {
		bitsAmount
		prefix
		tier
		__typename
	}
	fragment emoteFragment on Emote {
		emoteID: id
		setID
		token
		__typename
	}
	fragment mentionFragment on User {
		id
		login
		displayName
		__typename
	}
	fragment automodFragment on AutoMod {
		topics {
			type
			weight
			__typename
		}
		__typename
	}

	${_e}
	${G}
`,he=T`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;T`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;const fe=T`
	fragment subProduct on SubscriptionProduct {
		id
		url
		price
		name
		tier
		interval {
			unit
		}
		state
		emotes {
			id
			setID
			token
		}
		offers {
			id
			tplr
			platform
			eligibility {
				benefitsStartAt
				isEligible
			}
			giftType
			listing {
				chargeModel {
					internal {
						previewPrice {
							id
							currency
							exponent
							price
							total
							discount {
								price
								total
							}
						}
						plan {
							interval {
								duration
								unit
							}
						}
					}
				}
			}
			promotion {
				id
				name
				promoDisplay {
					discountPercent
					discountType
				}
				priority
			}
			quantity {
				min
				max
			}
		}
		emoteModifiers {
			...subscriptionProductEmoteModifier
		}
		self {
			cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
				months
			}
			benefit {
				id
				tier
			}
		}
		owner {
			id
			displayName
			login
			subscriptionProducts {
				id
				tier
				url
				price
				emotes {
					id
					token
				}
				emoteModifiers {
					...subscriptionProductEmoteModifier
				}
			}
			stream {
				id
				type
			}
		}
	}

	fragment subscriptionProductEmoteModifier on EmoteModifier {
		code
		name
	}
`,gt=T`
	fragment modComment on ModLogsComment {
		id
		timestamp
		text
		author {
			...modCommentUser
		}
		channel {
			...modCommentUser
		}
		target {
			...modCommentUser
		}
	}

	fragment modCommentUser on User {
		id
		login
		displayName
		chatColor
	}
`,ve=ie`
	query EmoteCard($emoteID: ID!, $octaneEnabled: Boolean!, $artistEnabled: Boolean!) {
		emote(id: $emoteID) {
			id
			type
			subscriptionTier @include(if: $octaneEnabled)
			token
			setID
			artist @include(if: $artistEnabled) {
				id
				login
				displayName
				profileImageURL(width: 70)
			}
			owner {
				id
				login
				displayName
				profileImageURL(width: 70)
				channel {
					id
					localEmoteSets {
						id
						emotes {
							id
							token
						}
					}
				}
				stream {
					id
					type
				}
				self {
					follower {
						followedAt
					}
					subscriptionBenefit {
						id
						tier
					}
				}
				subscriptionProducts {
					id
					displayName
					tier
					name
					url
					emotes {
						id
						token
					}
					priceInfo {
						id
						currency
						price
					}
				}
			}
			subscriptionProduct @skip(if: $octaneEnabled) {
				...subProduct
			}
			subscriptionSummaries @include(if: $octaneEnabled) {
				...subSummary
			}
			bitsBadgeTierSummary {
				threshold
				self {
					isUnlocked
					numberOfBitsUntilUnlock
				}
			}
			type
		}
	}

	${fe}
	${he}
`,W=f=>(J("data-v-08828b10"),f=f(),X(),f),ge={class:"seventv-emote-card-container"},ye={class:"seventv-emote-card"},be={class:"seventv-emote-card-image"},ke=["srcset"],we={class:"seventv-emote-card-display"},Ee={class:"seventv-emote-card-title"},$e={key:0,class:"seventv-emote-card-title-link"},Se=["href"],Te={class:"seventv-emote-card-subtitle"},Ce=["href"],Le=["src"],Ue={key:1,class:"seventv-emote-card-data seventv-emote-card-actor"},Ie=W(()=>i("p",null,"Added by",-1)),Me={class:"seventv-emote-card-user"},Ae=["src"],Pe={key:2,class:"seventv-emote-card-data"},Fe=W(()=>i("p",null,"Added on",-1)),Ne=M({__name:"EmoteCard",props:{emote:{},size:{}},setup(f){var k;const e=f,p=m(((k=e.emote.data)==null?void 0:k.host)??null),y=m(""),l=z(b()),u=z(b()),C=m(""),$=m(""),v=m(null);function b(){return{id:"",username:"",displayName:"",avatarURL:"",url:""}}return Z(async()=>{var _,w;if(e.emote.provider==="PLATFORM"){const g=pe();if(!g)return;const n=await g.query({query:ve,variables:{emoteID:e.emote.id,artistEnabled:!0,octaneEnabled:!0}}).catch(t=>ae.error("failed to fetch emote card",t));if(!n)return;const{emote:d}=n.data;if(!d)return;const S=Q(d);p.value=S.host,d.owner&&(l.id=d.owner.id,l.username=d.owner.login,l.displayName=d.owner.displayName,l.avatarURL=d.owner.profileImageURL,l.url=`https://twitch.tv/${(_=d.owner)==null?void 0:_.login}`),C.value=((w=d.subscriptionTier)==null?void 0:w.split("_").join(" "))??d.type}else if(e.emote.provider==="7TV"){const{result:g}=le(ne,{id:e.emote.actor_id??""},()=>({enabled:!!e.emote.actor_id}));B(g,n=>{n!=null&&n.user&&(u.id=n==null?void 0:n.user.id,u.username=n==null?void 0:n.user.username,u.displayName=n==null?void 0:n.user.display_name,u.avatarURL=n==null?void 0:n.user.avatar_url)},{immediate:!0}),$.value=new Date(e.emote.timestamp??0).toLocaleDateString(),v.value=`//7tv.app/emotes/${e.emote.id}`}else e.emote.provider==="BTTV"?v.value=`//betterttv.com/emotes/${e.emote.id}`:e.emote.provider==="FFZ"&&(v.value=`//frankerfacez.com/emoticon/${e.emote.id}`)}),B(p,_=>{!_||!_.files.length||(y.value=j(e.size[0],e.size[1],_,e.emote.provider))},{immediate:!0}),(_,w)=>(s(),a("main",ge,[i("div",ye,[i("div",be,[i("img",{srcset:y.value,style:{}},null,8,ke)]),i("div",we,[i("div",null,[i("h3",Ee,[i("span",null,h(_.emote.name),1),v.value?(s(),a("span",$e,[i("a",{href:v.value,target:"_blank"},[I(re)],8,Se)])):r("",!0)]),i("p",Te,h(C.value),1),l.id?(s(),a("a",{key:0,class:"seventv-emote-card-user",href:l.url,target:"_blank"},[i("img",{src:l.avatarURL},null,8,Le),i("span",null,h(l.displayName),1)],8,Ce)):r("",!0),u.id?(s(),a("div",Ue,[Ie,i("p",Me,[i("img",{src:u.avatarURL},null,8,Ae),i("span",null,h(u.displayName),1)])])):r("",!0),$.value?(s(),a("div",Pe,[Fe,i("span",null,h($.value),1)])):r("",!0)])])])]))}});const De=R(Ne,[["__scopeId","data-v-08828b10"]]),Re={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},Be=["xlink:href"],x=M({__name:"SingleEmoji",props:{id:{}},setup(f){return(e,p)=>(s(),a("svg",Re,[i("use",{"xlink:href":"#"+e.id},null,8,Be)]))}}),ze={key:0,ref:"tooltip",class:"seventv-tooltip-compact","tooltip-type":"emote"},Oe={key:1,ref:"tooltip",class:"seventv-tooltip","tooltip-type":"emote"},je=["src","srcset","alt"],qe={class:"details"},He={class:"emote-name"},Ve={key:2,class:"alias-label"},Ge={key:3,class:"creator-label"},We={class:"scope-labels"},xe={key:0,class:"label-global"},Qe={key:1,class:"label-subscriber"},Ze={key:2,class:"label-channel"},Je={key:3,class:"label-sub-feature"},Xe={key:4,class:"label-sub-feature"},Ye={key:4},Ke={key:5,class:"divider"},et={key:6,class:"zero-width-label"},tt=["srcset"],ot=M({__name:"EmoteTooltip",props:{emote:{},initSrc:{},overlaid:{},height:{},width:{}},setup(f){var d,S,t;const e=f,p=H("ui.compact_tooltips"),y=m("");e.emote&&e.emote.data&&e.emote.data.host.srcset&&Y(()=>{y.value=j(e.height,e.width,e.emote.data.host,e.emote.provider)},90);const l=m(e.overlaid??{}),u=m(Object.keys(l.value).length>0),C=`${e.width*3}px`,$=`${e.height*3}px`,v=e.emote.scope==="GLOBAL",b=e.emote.scope==="SUB",k=e.emote.scope==="CHANNEL",_=e.emote.scope==="PERSONAL",w=(e.emote.flags||0)!==0,g=m(null);if(e.emote.unicode){const{emojiByCode:o}=de();g.value=o.get(e.emote.unicode)??null}const n=m("inherit");return(t=(S=(d=e.emote.data)==null?void 0:d.owner)==null?void 0:S.style)!=null&&t.color&&(n.value=me(e.emote.data.owner.style.color)),(o,A)=>{var c,U;return E(p)?(s(),a("div",ze,[i("p",null,h(o.emote.name),1)],512)):(s(),a("div",Oe,[o.emote.provider!=="EMOJI"?(s(),a("img",{key:0,ref:"imgRef",class:"tooltip-emote",src:o.initSrc,srcset:y.value,alt:o.emote.name,sizes:"auto",style:D({width:C,height:$})},null,12,je)):(s(),F(x,{key:1,id:o.emote.id,class:"tooltip-emoji"},null,8,["id"])),i("div",qe,[i("h3",He,h(o.emote.name),1),I(ce,{class:"logo",provider:o.emote.provider},null,8,["provider"])]),o.emote.data&&o.emote.data.name!==o.emote.name?(s(),a("div",Ve,[P(" aka "),i("span",null,h((c=o.emote.data)==null?void 0:c.name),1)])):r("",!0),(U=o.emote.data)!=null&&U.owner?(s(),a("div",Ge,[P(" by "),i("span",{class:"creator-name",style:D({color:n.value})},h(o.emote.data.owner.display_name),5)])):r("",!0),i("div",We,[v?(s(),a("div",xe,"Global Emote")):r("",!0),b?(s(),a("div",Qe,"Subscriber Emote")):r("",!0),k?(s(),a("div",Ze,"Channel Emote")):r("",!0),_?(s(),a("div",Je,"Personal Emote")):r("",!0),w?(s(),a("div",Xe,"Zero-Width")):r("",!0)]),g.value?(s(),a("div",Ye,[i("div",null,"Emoji - "+h(g.value.group),1)])):r("",!0),u.value?(s(),a("div",Ke)):r("",!0),u.value?(s(),a("div",et,[(s(!0),a(N,null,V(l.value,L=>(s(),a("div",{key:L.id,class:"zero-width-emote"},[L.data?(s(),a("img",{key:0,class:"overlaid-emote-icon",srcset:L.data.host.srcset??E(q)(L.data.host,L.provider)},null,8,tt)):r("",!0),P(" — "),i("span",null,h(L.name),1)]))),128))])):r("",!0)],512))}}});const st=R(ot,[["__scopeId","data-v-1d4829d1"]]),at=["srcset","alt"],it=["srcset","alt"],nt=M({__name:"Emote",props:{emote:{},clickable:{type:Boolean},format:{},overlaid:{},unload:{type:Boolean,default:!1},scale:{default:1}},emits:["emote-click"],setup(f,{emit:e}){const p=f,y=H("general.blur_unlisted_emotes"),l=m(),u=m(!1),C=m([0,0]),$=m(),v=m(""),b=m(0),k=m(0),_=t=>{if(!(t.target instanceof HTMLImageElement))return;const o=t.target;b.value=Math.round(o.naturalWidth/p.scale),k.value=Math.round(o.naturalHeight/p.scale),v.value=o.currentSrc,$.value=o};function w(t){var o;return(o=t.data)!=null&&o.host?p.scale!=1||!t.data.host.srcset?q(t.data.host,t.provider,void 0,2,p.scale):t.data.host.srcset:""}function g(t){p.clickable&&(u.value=!0,C.value=[t.clientX,t.clientY])}function n(){d(l.value)}const{show:d,hide:S}=K(st,{emote:p.emote,initSrc:v,overlaid:p.overlaid,width:b,height:k});return(t,o)=>{var A;return s(),a("div",{ref_key:"boxRef",ref:l,class:"seventv-emote-box"},[!t.emote.unicode&&t.emote.data&&t.emote.data.host?(s(),a("img",{key:0,class:O(["seventv-chat-emote",{blur:E(y)&&((A=t.emote.data)==null?void 0:A.listed)===!1}]),srcset:t.unload?"":w(t.emote),alt:t.emote.name,loading:"lazy",decoding:"async",onLoad:_,onMouseenter:n,onMouseleave:o[0]||(o[0]=c=>E(S)()),onClick:o[1]||(o[1]=c=>[g(c),e("emote-click",c,t.emote)])},null,42,at)):!t.unload&&t.emote.id?(s(),F(x,{key:1,id:t.emote.id,ref_key:"boxRef",ref:l,alt:t.emote.name,class:"seventv-chat-emote seventv-emoji",style:D({width:`${t.scale*2}rem`,height:`${t.scale*2}rem`}),onMouseenter:n,onMouseleave:o[2]||(o[2]=c=>E(S)())},null,8,["id","alt","style"])):r("",!0),(s(!0),a(N,null,V(t.overlaid,c=>{var U;return s(),a(N,{key:c.id},[c.data&&c.data.host?(s(),a("img",{key:0,class:O(["seventv-chat-emote zero-width-emote",{blur:E(y)&&((U=c.data)==null?void 0:U.listed)===!1}]),srcset:w(c),alt:" "+c.name},null,10,it)):r("",!0)],64)}),128)),u.value?(s(),F(se,{key:2,to:"#seventv-message-container"},[I(ue,{class:"seventv-emote-card-float",anchor:l.value,placement:"right-end",middleware:[E(te)({mainAxis:!0,crossAxis:!0}),E(oe)()],once:!0,"emit-clickout":!0,onClickout:o[3]||(o[3]=c=>u.value=!1)},{default:ee(()=>[I(De,{emote:t.emote,size:[b.value,k.value]},null,8,["emote","size"])]),_:1},8,["anchor","middleware"])])):r("",!0)],512)}}});const yt=R(nt,[["__scopeId","data-v-86a651bd"]]);export{yt as E,x as _,G as a,gt as b,vt as c,fe as t,pe as u};
