define(["require","exports","module","jquery"],function(e,t,n){var r=e("jquery"),i={"default":function(t){return t.val()},DIV:function(t){return t.html()},INPUT:function(t){var n=t.prop("type");return n==="checkbox"?t.filter(":checked").map(function(){return r(this).val()}).get():n==="radio"?t.filter(":checked").val():t.val()}};n.exports=function(t){var n=t.prop("tagName"),n=t.prop("tagName"),r=i[n]||i["default"];return r(t)}});