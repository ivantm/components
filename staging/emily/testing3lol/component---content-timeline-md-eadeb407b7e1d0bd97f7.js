(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{NC8T:function(e,n,t){"use strict";var i=t("UutA"),l=t("oXiK"),a=t("aOgs"),o=t("q1tI"),m=t.n(o),c=t("8gyx"),r=t("VhsB"),s=t("nkI/"),d=t("bWhc"),b=t("og4h"),p=t("sqpL"),g=Object(i.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function u(e){var n=e.items,t=e.depth;return m.a.createElement(g,{as:"ul",m:0,p:0},n.map((function(e){return m.a.createElement(l.Box,{as:"li",key:e.url,pl:t>0?3:0},m.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?m.a.createElement(u,{items:e.items,depth:t+1}):null)})))}u.defaultProps={depth:0};var T=u,h=Object(i.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),O=Object(i.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),j=Object(i.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),y=Object(i.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),f=Object(i.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,i=t.frontmatter,o=i.title,g=i.description,u=i.status,B=i.source,N=i.additionalContributors,k=void 0===N?[]:N;return m.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},m.a.createElement(c.a,{title:o,description:g}),m.a.createElement(r.b,null),m.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},m.a.createElement(l.Box,{display:["none",null,null,"block"]},m.a.createElement(d.a,null)),m.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},m.a.createElement(j,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},m.a.createElement(l.Heading,null,o)),t.tableOfContents.items?m.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:r.a+24,maxHeight:"calc(100vh - "+r.a+"px - 24px)"},m.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),m.a.createElement(T,{items:t.tableOfContents.items})):null,m.a.createElement(f,null,u||B?m.a.createElement(l.Flex,{mb:3,alignItems:"center"},u?m.a.createElement(p.a,{status:u}):null,m.a.createElement(l.Box,{mx:"auto"}),B?m.a.createElement(b.a,{href:B}):null):null,t.tableOfContents.items?m.a.createElement(l.Box,{display:["block",null,"none"],mb:3},m.a.createElement(l.Details,null,(function(e){var n=e.open;return m.a.createElement(m.a.Fragment,null,m.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},m.a.createElement(l.StyledOcticon,{icon:n?a.b:a.c,mr:2}),"Table of contents"),m.a.createElement(l.Box,{pt:1},m.a.createElement(T,{items:t.tableOfContents.items})))}))):null,n,m.a.createElement(s.a,{editUrl:t.editUrl,contributors:t.contributors.concat(k.map((function(e){return{login:e}})))})))))}},yoII:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return c}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var i=t("7ljp"),l=t("NC8T");var a={},o={_frontmatter:a},m=l.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(i.b)(m,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Timeline.Item component is used to display items on a vertical timeline, connected by Timeline.Badge elements."),Object(i.b)("h2",null,"Example with in-line links"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Timeline>\n  <Timeline.Item>\n    <Timeline.Badge>\n      <StyledOcticon icon={Flame} />\n    </Timeline.Badge>\n    <Timeline.Body>\n      <Link href="#" fontWeight="bold" color="gray.8" mr={1} muted>\n        Monalisa\n      </Link>\n      created one <Link href="#" fontWeight="bold" color="gray.8" mr={1} muted>\n        hot potato\n      </Link>\n      <Link href="#" color="gray.7" muted>\n        Just now\n      </Link>\n    </Timeline.Body>\n  </Timeline.Item>\n</Timeline>\n')),Object(i.b)("h2",null,"Default Color example"),Object(i.b)("p",null,"The default Timeline.Badge color is dark text on a light grey background."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Timeline>\n  <Timeline.Item>\n    <Timeline.Badge>\n      <StyledOcticon icon={Flame} />\n    </Timeline.Badge>\n    <Timeline.Body>Default badge color</Timeline.Body>\n  </Timeline.Item>\n</Timeline>\n")),Object(i.b)("h2",null,"Adding color to a Badge"),Object(i.b)("p",null,"To have color variants, use the ",Object(i.b)("inlineCode",{parentName:"p"},"bg")," prop on the ",Object(i.b)("inlineCode",{parentName:"p"},"Timeline.Badge"),". If an icon is being used, set the ",Object(i.b)("inlineCode",{parentName:"p"},"color")," prop\nof the child ",Object(i.b)("inlineCode",{parentName:"p"},"StyledOcticon")," if necessary."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Timeline>\n  <Timeline.Item>\n    <Timeline.Badge bg="red.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Red background used when closed events occur</Timeline.Body>\n  </Timeline.Item>\n  <Timeline.Item>\n    <Timeline.Badge bg="green.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Green background when opened or passed events occur</Timeline.Body>\n  </Timeline.Item>\n  <Timeline.Item>\n    <Timeline.Badge bg="purple.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Purple background used when pull requests are merged</Timeline.Body>\n  </Timeline.Item>\n  <Timeline.Item>\n    <Timeline.Badge bg="blue.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Blue background to indicate new events below</Timeline.Body>\n  </Timeline.Item>\n</Timeline>\n')),Object(i.b)("h2",null,"Condensed items"),Object(i.b)("p",null,"Timeline has a condensed prop that will reduce the vertical padding and remove the background from the badge item. These are most commonly used in commits. To condense a single item, remove the top or bottom padding with the ",Object(i.b)("inlineCode",{parentName:"p"},"pt={0}")," or ",Object(i.b)("inlineCode",{parentName:"p"},"pb={0}")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Timeline>\n  <Timeline.Item condensed>\n    <Timeline.Badge>\n      <StyledOcticon icon={GitCommit} />\n    </Timeline.Badge>\n    <Timeline.Body>This is the message of a condensed TimelineItem</Timeline.Body>\n  </Timeline.Item>\n  <Timeline.Item condensed>\n    <Timeline.Badge>\n      <StyledOcticon icon={GitCommit} />\n    </Timeline.Badge>\n    <Timeline.Body>This is the message of a condensed TimelineItem</Timeline.Body>\n  </Timeline.Item>\n</Timeline>\n")),Object(i.b)("h2",null,"Timeline Break"),Object(i.b)("p",null,"To create a visual break in the timeline, use Timeline.Break. This adds a horizontal bar across the timeline to show that something has disrupted it. Usually this happens when a close or merged event occurs."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Timeline>\n  <Timeline.Item>\n    <Timeline.Badge bg="red.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Red background used when closed events occur</Timeline.Body>\n  </Timeline.Item>\n  <Timeline.Break />\n  <Timeline.Item>\n    <Timeline.Badge bg="green.5">\n      <StyledOcticon icon={Flame} color="white" />\n    </Timeline.Badge>\n    <Timeline.Body>Green background when opened or passed events occur</Timeline.Body>\n  </Timeline.Item>\n</Timeline>\n')),Object(i.b)("h2",null,"System props"),Object(i.b)("p",null,"Timeline and Timeline.Item components get ",Object(i.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/emily/testing3lol/system-props"}),"System Props")," doc page for a full list of available props."),Object(i.b)("h2",null,"Component props"),Object(i.b)("h3",null,"Timeline"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"clipSidebar"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Hides the sidebar above the first Timeline.Item and below the last Timeline.Item.")))),Object(i.b)("h3",null,"Timeline.Item"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"condensed"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Reduces vertical padding and removes background from an item's badge.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-timeline-md-eadeb407b7e1d0bd97f7.js.map