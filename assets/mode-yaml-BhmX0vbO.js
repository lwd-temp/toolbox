var A={exports:{}};(function(S,O){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(c,m,y){y.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(c,m,y){var p=c("../lib/dom"),v=c("../lib/lang"),l=c("../lib/event"),d=c("./searchbox-css"),a=c("../keyboard/hash_handler").HashHandler,s=c("../lib/keys"),t=c("../config").nls,r=999;p.importCssString(d,"ace_searchbox",!1);var i=function(){function e(n,o,f){this.activeInput;var g=p.createElement("div");p.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:t("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},t("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:t("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},t("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},t("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:t("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:t("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:t("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:t("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:t("Search In Selection")},"S"]]],g),this.element=g.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(n),p.importCssString(d,"ace_searchbox",n.container)}return e.prototype.setEditor=function(n){n.searchBox=this,n.renderer.scroller.appendChild(this.element),this.editor=n},e.prototype.setSession=function(n){this.searchRange=null,this.$syncOptions(!0)},e.prototype.$initElements=function(n){this.searchBox=n.querySelector(".ace_search_form"),this.replaceBox=n.querySelector(".ace_replace_form"),this.searchOption=n.querySelector("[action=searchInSelection]"),this.replaceOption=n.querySelector("[action=toggleReplace]"),this.regExpOption=n.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=n.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=n.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=n.querySelector(".ace_search_counter")},e.prototype.$init=function(){var n=this.element;this.$initElements(n);var o=this;l.addListener(n,"mousedown",function(f){setTimeout(function(){o.activeInput.focus()},0),l.stopPropagation(f)}),l.addListener(n,"click",function(f){var g=f.target||f.srcElement,u=g.getAttribute("action");u&&o[u]?o[u]():o.$searchBarKb.commands[u]&&o.$searchBarKb.commands[u].exec(o),l.stopPropagation(f)}),l.addCommandKeyListener(n,function(f,g,u){var b=s.keyCodeToString(u),k=o.$searchBarKb.findKeyCommand(g,b);k&&k.exec&&(k.exec(o),l.stopEvent(f))}),this.$onChange=v.delayedCall(function(){o.find(!1,!1)}),l.addListener(this.searchInput,"input",function(){o.$onChange.schedule(20)}),l.addListener(this.searchInput,"focus",function(){o.activeInput=o.searchInput,o.searchInput.value&&o.highlight()}),l.addListener(this.replaceInput,"focus",function(){o.activeInput=o.replaceInput,o.searchInput.value&&o.highlight()})},e.prototype.setSearchRange=function(n){this.searchRange=n,n?this.searchRangeMarker=this.editor.session.addMarker(n,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},e.prototype.$syncOptions=function(n){p.setCssClass(this.replaceOption,"checked",this.searchRange),p.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",p.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),p.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),p.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var o=this.editor.getReadOnly();this.replaceOption.style.display=o?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!o?"":"none",this.find(!1,!1,n)},e.prototype.highlight=function(n){this.editor.session.highlight(n||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},e.prototype.find=function(n,o,f){var g=this.editor.find(this.searchInput.value,{skipCurrent:n,backwards:o,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:f,range:this.searchRange}),u=!g&&this.searchInput.value;p.setCssClass(this.searchBox,"ace_nomatch",u),this.editor._emit("findSearchBox",{match:!u}),this.highlight(),this.updateCounter()},e.prototype.updateCounter=function(){var n=this.editor,o=n.$search.$options.re,f=o.unicode,g=0,u=0;if(o){var b=this.searchRange?n.session.getTextRange(this.searchRange):n.getValue(),k=n.session.doc.positionToIndex(n.selection.anchor);this.searchRange&&(k-=n.session.doc.positionToIndex(this.searchRange.start));for(var _=o.lastIndex=0,R;(R=o.exec(b))&&(g++,_=R.index,_<=k&&u++,!(g>r||!R[0]&&(o.lastIndex=_+=v.skipEmptyMatch(b,_,f),_>=b.length))););}this.searchCounter.textContent=t("$0 of $1",[u,g>r?r+"+":g])},e.prototype.findNext=function(){this.find(!0,!1)},e.prototype.findPrev=function(){this.find(!0,!0)},e.prototype.findAll=function(){var n=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),o=!n&&this.searchInput.value;p.setCssClass(this.searchBox,"ace_nomatch",o),this.editor._emit("findSearchBox",{match:!o}),this.highlight(),this.hide()},e.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},e.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},e.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},e.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},e.prototype.show=function(n,o){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=o,n&&(this.searchInput.value=n),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},e.prototype.isFocused=function(){var n=document.activeElement;return n==this.searchInput||n==this.replaceInput},e}(),h=new a;h.bindKeys({"Ctrl-f|Command-f":function(e){var n=e.isReplace=!e.isReplace;e.replaceBox.style.display=n?"":"none",e.replaceOption.checked=!1,e.$syncOptions(),e.searchInput.focus()},"Ctrl-H|Command-Option-F":function(e){e.editor.getReadOnly()||(e.replaceOption.checked=!0,e.$syncOptions(),e.replaceInput.focus())},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout(function(){e.hide()})},Return:function(e){e.activeInput==e.replaceInput&&e.replace(),e.findNext()},"Shift-Return":function(e){e.activeInput==e.replaceInput&&e.replace(),e.findPrev()},"Alt-Return":function(e){e.activeInput==e.replaceInput&&e.replaceAll(),e.findAll()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}}),h.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked,e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked,e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked,e.$syncOptions()}},{name:"toggleReplace",exec:function(e){e.replaceOption.checked=!e.replaceOption.checked,e.$syncOptions()}},{name:"searchInSelection",exec:function(e){e.searchOption.checked=!e.searchRange,e.setSearchRange(e.searchOption.checked&&e.editor.getSelectionRange()),e.$syncOptions()}}]);var x=new a([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}]);i.prototype.$searchBarKb=h,i.prototype.$closeSearchBarKb=x,m.SearchBox=i,m.Search=function(e,n){var o=e.searchBox||new i(e);o.show(e.session.getTextRange(),n)}}),function(){ace.require(["ace/ext/searchbox"],function(c){S&&(S.exports=c)})}()})(A);var C={exports:{}};(function(S,O){ace.define("ace/mode/yaml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,m,y){var p=c("../lib/oop"),v=c("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"list.markup",regex:/^(?:-{3}|\.{3})\s*(?=#|$)/},{token:"list.markup",regex:/^\s*[\-?](?:$|\s)/},{token:"constant",regex:"!![\\w//]+"},{token:"constant.language",regex:"[&\\*][a-zA-Z0-9-_]+"},{token:["meta.tag","keyword"],regex:/^(\s*\w[^\s:]*?)(:(?=\s|$))/},{token:["meta.tag","keyword"],regex:/(\w[^\s:]*?)(\s*:(?=\s|$))/},{token:"keyword.operator",regex:"<<\\w*:\\w*"},{token:"keyword.operator",regex:"-\\s*(?=[{])"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:/[|>][-+\d]*(?:$|\s+(?:$|#))/,onMatch:function(d,a,s,t){t=t.replace(/ #.*/,"");var r=/^ *((:\s*)?-(\s*[^|>])?)?/.exec(t)[0].replace(/\S\s*$/,"").length,i=parseInt(/\d+[\s+-]*$/.exec(t));return i?(r+=i-1,this.next="mlString"):this.next="mlStringPre",s.length?(s[0]=this.next,s[1]=r):(s.push(this.next),s.push(r)),this.token},next:"mlString"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)$/},{token:"constant.numeric",regex:/[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/},{token:"constant.language.boolean",regex:"\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:/[^\s,:\[\]\{\}]+/}],mlStringPre:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(d,a,s){var t=s[1];return t>=d.length?(this.next="start",s.shift(),s.shift()):(s[1]=d.length-1,this.next=s[0]="mlString"),this.token},next:"mlString"},{defaultToken:"string"}],mlString:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(d,a,s){var t=s[1];return t>=d.length?(this.next="start",s.splice(0)):this.next="mlString",this.token},next:"mlString"},{token:"string",regex:".+"}]},this.normalizeRules()};p.inherits(l,v),m.YamlHighlightRules=l}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,m,y){var p=c("../range").Range,v=function(){};(function(){this.checkOutdent=function(l,d){return/^\s+$/.test(l)?/^\s*\}/.test(d):!1},this.autoOutdent=function(l,d){var a=l.getLine(d),s=a.match(/^(\s*\})/);if(!s)return 0;var t=s[1].length,r=l.findMatchingBracket({row:d,column:t});if(!r||r.row==d)return 0;var i=this.$getIndent(l.getLine(r.row));l.replace(new p(d,0,d,t-1),i)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(v.prototype),m.MatchingBraceOutdent=v}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(c,m,y){var p=c("../../lib/oop"),v=c("./fold_mode").FoldMode,l=c("../../range").Range,d=m.FoldMode=function(){};p.inherits(d,v),(function(){this.commentBlock=function(a,s){var t=/\S/,r=a.getLine(s),i=r.search(t);if(!(i==-1||r[i]!="#")){for(var h=r.length,x=a.getLength(),e=s,n=s;++s<x;){r=a.getLine(s);var o=r.search(t);if(o!=-1){if(r[o]!="#")break;n=s}}if(n>e){var f=a.getLine(n).length;return new l(e,h,n,f)}}},this.getFoldWidgetRange=function(a,s,t){var r=this.indentationBlock(a,t);if(r||(r=this.commentBlock(a,t),r))return r},this.getFoldWidget=function(a,s,t){var r=a.getLine(t),i=r.search(/\S/),h=a.getLine(t+1),x=a.getLine(t-1),e=x.search(/\S/),n=h.search(/\S/);if(i==-1)return a.foldWidgets[t-1]=e!=-1&&e<n?"start":"","";if(e==-1){if(i==n&&r[i]=="#"&&h[i]=="#")return a.foldWidgets[t-1]="",a.foldWidgets[t+1]="","start"}else if(e==i&&r[i]=="#"&&x[i]=="#"&&a.getLine(t-2).search(/\S/)==-1)return a.foldWidgets[t-1]="start",a.foldWidgets[t+1]="","";return e!=-1&&e<i?a.foldWidgets[t-1]="start":a.foldWidgets[t-1]="",i<n?"start":""}}).call(d.prototype)}),ace.define("ace/mode/folding/yaml",["require","exports","module","ace/lib/oop","ace/mode/folding/coffee","ace/range"],function(c,m,y){var p=c("../../lib/oop"),v=c("./coffee").FoldMode,l=c("../../range").Range,d=m.FoldMode=function(){};p.inherits(d,v),(function(){this.getFoldWidgetRange=function(a,s,t){var r=/\S/,i=a.getLine(t),h=i.search(r),x=i[h]==="#",e=i[h]==="-";if(h!=-1){var n=i.length,o=a.getLength(),f=t,g=t;if(x){var u=this.commentBlock(a,t);if(u)return u}else if(e){var u=this.indentationBlock(a,t);if(u)return u}else for(;++t<o;){var i=a.getLine(t),b=i.search(r);if(b!=-1){if(b<=h&&i[h]!=="-"){var k=a.getTokenAt(t,0);if(!k||k.type!=="string")break}g=t}}if(g>f){var _=a.getLine(g).length;return new l(f,n,g,_)}}},this.getFoldWidget=function(a,s,t){var r=a.getLine(t),i=r.search(/\S/),h=a.getLine(t+1),x=a.getLine(t-1),e=x.search(/\S/),n=h.search(/\S/),o=r[i]==="-";if(i==-1)return a.foldWidgets[t-1]=e!=-1&&e<n?"start":"","";if(e==-1){if(i==n&&r[i]=="#"&&h[i]=="#")return a.foldWidgets[t-1]="",a.foldWidgets[t+1]="","start"}else if(e==i&&r[i]=="#"&&x[i]=="#"&&a.getLine(t-2).search(/\S/)==-1)return a.foldWidgets[t-1]="start",a.foldWidgets[t+1]="","";return e!=-1&&e<i||e!=-1&&e==i&&o?a.foldWidgets[t-1]="start":a.foldWidgets[t-1]="",i<n?"start":""}}).call(d.prototype)}),ace.define("ace/mode/yaml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/yaml_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/yaml","ace/worker/worker_client"],function(c,m,y){var p=c("../lib/oop"),v=c("./text").Mode,l=c("./yaml_highlight_rules").YamlHighlightRules,d=c("./matching_brace_outdent").MatchingBraceOutdent,a=c("./folding/yaml").FoldMode,s=c("../worker/worker_client").WorkerClient,t=function(){this.HighlightRules=l,this.$outdent=new d,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};p.inherits(t,v),(function(){this.lineCommentStart=["#"],this.getNextLineIndent=function(r,i,h){var x=this.$getIndent(i);if(r=="start"){var e=i.match(/^.*[\{\(\[]\s*$/);e&&(x+=h)}return x},this.checkOutdent=function(r,i,h){return this.$outdent.checkOutdent(i,h)},this.autoOutdent=function(r,i,h){this.$outdent.autoOutdent(i,h)},this.createWorker=function(r){var i=new s(["ace"],"ace/mode/yaml_worker","YamlWorker");return i.attachToDocument(r.getDocument()),i.on("annotate",function(h){r.setAnnotations(h.data)}),i.on("terminate",function(){r.clearAnnotations()}),i},this.$id="ace/mode/yaml"}).call(t.prototype),m.Mode=t}),function(){ace.require(["ace/mode/yaml"],function(c){S&&(S.exports=c)})}()})(C);
//# sourceMappingURL=mode-yaml-BhmX0vbO.js.map