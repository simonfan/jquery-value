//     jquery-value
//     (c) simonfan
//     jquery-value is licensed under the MIT terms.

define(["require","exports","module","jquery","./__jquery-value/get","./__jquery-value/set"],function(e,t,n){var r=e("jquery"),i=e("./__jquery-value/get"),s=e("./__jquery-value/set"),o=n.exports=function(t,n){if(arguments.length===1)return i(t);if(arguments.length===2)return s(t,n)};r.prototype.value=function(t){return arguments.length===0?o(this):o(this,t)}});