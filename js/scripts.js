var l=[[{lineName:"Salary"},{lineName:"Interest Income"}],[{lineName:"Insurance Premium"},{lineName:"Housing Loan Interest"},{lineName:"Education Expences"}]];function n(n){return function(e,a){return a%2?n[e]:e}}$(function(){o()});var a={minimumFractionDigits:2,maximumFractionDigits:2};function f(e){return document.getElementById(e)}function m(e){return document.getElementsByClassName(e)}function t(e){return/^\d*\.?\d*$/.test(e)}function s(e){if(!t(e)){var a=e;e="";for(var n=0;n<a.length;n++){e+=t(a.charAt(n))?a.charAt(n):""}}if(e==""){e="0.00"}return e}function v(e){return Number(e).toLocaleString("en",a)}function i(e,a,n,t,r){var i=false;for(var u=0;u<l[0].length;u++){if(l[0][u].id==e){l[0][u].fm=a;l[0][u].sm=n;l[0][u].tm=t;l[0][u].rs=r;i=true;break}}if(i==false){for(var u=0;u<l[1].length;u++){if(l[1][u].id==e){l[1][u].fm=a;l[1][u].sm=n;l[1][u].tm=t;l[1][u].rs=r;break}}}}function oce(e){var a=s(f("fm-"+e).value);var n=s(f("sm-"+e).value);var t=s(f("tm-"+e).value);var r=parseFloat(a)+parseFloat(n)+parseFloat(t);f("fm-"+e).value=v(a);f("sm-"+e).value=v(n);f("tm-"+e).value=v(t);f("rs-"+e).value=v(r);i(e,v(a),v(n),v(t),v(r));u()}function u(){var e=0,a=0;var n=m("rs-table-success");for(var t=0;t<n.length;t++){e+=parseFloat(s(n[t].value))}var r=m("rs-table-warning");for(var t=0;t<r.length;t++){a+=parseFloat(s(r[t].value))}var i=parseFloat(s(f("personalRelief").value));f("totalIncome").value=v(e);f("totalExpenses").value=v(a);var u=a>3e5?3e5:a;f("exDeduction").value=v(u);var l=e-(i+u);if(l<=0){f("taxableIncome").value="0.00";f("tax").value="0.00"}else{f("taxableIncome").value=v(l);var o=0;for(var t=0;t<3;t++){o+=l/100*6;l-=75e4;if(l<=0){break}}f("tax").value=v(o)}}$(document).ready(function(){$("#addRowSave").click(function(){var e={};e.lineName=f("add-row-lable").value;e.fm="0.00";e.sm="0.00";e.tm="0.00";if(f("add-row-type").value=="I"){l[0].push(e)}else{l[1].push(e)}o()})});function rr(e){var a=false;for(var n=0;n<l[0].length;n++){if(l[0][n].id==e){l[0].splice(n,1);a=true;break}}if(a==false){for(var n=0;n<l[1].length;n++){if(l[1][n].id==e){l[1].splice(n,1);break}}}o();u();}function o(){var a=$('script[data-template="row"]').text().split(/\$\{(.+?)\}/g);$("#itembody").empty();$("#itembody").append(l[0].map(function(e){e=c(e,"table-success");return a.map(n(e)).join("")}));$("#itembody").append(l[1].map(function(e){e=c(e,"table-warning");return a.map(n(e)).join("")}))}function c(e,a){e.trclass=a;if(e.fm===undefined){e.fm="0.00"}if(e.sm===undefined){e.sm="0.00"}if(e.tm===undefined){e.tm="0.00"}if(e.rs===undefined){e.rs="0.00"}e.id=Math.random()*9999999;return e}
