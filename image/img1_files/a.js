var ibse_rqtp='';var ibse_tp='';var ibse_rqdt=''
var ibse_ct='';var ibse_uq_id='';var ibse_name='';var ibse_mobile='';var ibse_email='';var ibse_vc='';var source='';function set_ajax_object()
{try
{ibse_ajax=new XMLHttpRequest();}
catch(e)
{try
{ibse_ajax=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e)
{try
{ibse_ajax=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e)
{alert("Your browser broke!");return false;}}}
return ibse_ajax;}
function sendSmsEmail(page,lognm,xmlid,docid)
{if(docid==''&&$('#selDoc')&&$('#selDocFlag').val()=='1'){docid=$('#selDoc').val();}
var ibse_name="";var ibse_mobile="";var ibse_email="";if(page=="bestdeal"){if(ibse_name==''&&ibse_mobile==''&&ibse_email=='')
{ibse_name=document.getElementById('bd_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_name').value=ibse_name;ibse_mobile=$("#best_deal_div #bd_mobile").val();ibse_mobile=ibse_mobile.replace(/^\s+|\s+$/g,"");document.getElementById('bd_mobile').value=ibse_mobile;ibse_email=document.getElementById('bd_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_email').value=ibse_email;}}
else if(page=="bdfrm"){ibse_name=document.getElementById('bd_name_frm').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_name_frm').value=ibse_name;ibse_mobile=document.getElementById('bd_mobile_frm').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_mobile_frm').value=ibse_mobile;}
else{ibse_name=document.getElementById('ibse_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_name').value=ibse_name;ibse_mobile=document.getElementById('ibse_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_mobile').value=ibse_mobile;ibse_email=document.getElementById('ibse_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_email').value=ibse_email;}
type=document.search.type.value;searchterm=(bd_parent!=''&&(page=="bestdeal"||page=="bdfrm"))?bd_parent:document.search.searchterm.value.replace(/^\s+|\s+$/g,"");smsuniqueid=document.search.smsuniqueid.value;if(document.getElementById('source').value!="")
{source=document.getElementById('source').value;}
if(!$('#ibse_vcodelft').is(':visible')&&!$('#ibse_vcodert').is(':visible'))
{if(page=="bestdeal"||page=="bdfrm")
{if(validate_smsbestdeal(ibse_name,ibse_mobile,ibse_email))
{$('#ibse_name').removeAttr("id");$('#ibse_mobile').removeAttr("id");$('#ibse_email').removeAttr("id");closeDiv('best_deal_div');ibse_name=(ibse_name.search(/e.g/i)!=-1)?"User":ibse_name;get_ajax_response(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid);}}
else if(validate_smsemail(ibse_name,ibse_mobile,ibse_email)){$('#ibse_name').removeAttr("id");$('#ibse_mobile').removeAttr("id");$('#ibse_email').removeAttr("id");get_ajax_response(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid);}}
else
{var ibse_vcodelft=document.getElementById('ibse_vcodelft').value;var ibse_vcodert=document.getElementById('ibse_vcodert').value;var ibse_vcode=ibse_vcodelft+'-'+ibse_vcodert;if(ibse_vcode=="-")
{alert("Please Enter Verification Code.");document.getElementById('ibse_vcodelft').focus();return false;}
ibse_name=(ibse_name.search(/e.g/i)!=-1)?"User":ibse_name;get_ajax_response(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,docid);}}
function sendSmsEmail_detail(page,lognm,xmlid,pg_stat,docid)
{if(docid==undefined){docid='';}
if(docid==''&&$('#selDocDt')&&$('#selDocFlagDt').val()=='1'){docid=$('#selDocDt').val();}
var ibse_name="";var ibse_mobile="";var ibse_email="";if(pg_stat=="")
{var chk=document.getElementsByName('cat_chkbox');var hsChecked=false;count=0;for(var z=0;z<chk.length;z++)
{if(chk[z].checked==true)
{count++;hsChecked=true;}}
hsChecked=(chk.length==1)?true:hsChecked;if(hsChecked==false)
{alert("Please select at least one category.");return false;}
if($('#single_catid').length>0&&$('#single_catid').val()!='')
{var catstrarr=$('#single_catid').val().split("##");category_id=catstrarr[0];category_name=catstrarr[1];}
if(category_id==""||category_id=="undefined")
{alert("Please Select any category.");return false;}}
if(page=="bestdeal"){if(ibse_name==''&&ibse_mobile==''&&ibse_email=='')
{ibse_name=document.getElementById('bd_name_detail').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_name_detail').value=ibse_name;ibse_mobile=document.getElementById('bd_mobile_detail').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_mobile_detail').value=ibse_mobile;ibse_email=document.getElementById('bd_email_detail').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_email_detail').value=ibse_email;}}
type=document.search.type.value;searchterm=(bd_parent!=''&&(page=="bestdeal"||page=="bdfrm"))?bd_parent:document.search.searchterm.value.replace(/^\s+|\s+$/g,"");smsuniqueid=document.search.smsuniqueid.value;if(page=="c2l")
{if(pg_stat=='dnd')
{ibse_name=document.getElementById('cname').value.replace(/^\s+|\s+$/g,"");document.getElementById('cname').value=ibse_name;ibse_mobile=document.getElementById('cmobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('cmobile').value=ibse_mobile;ibse_email=document.getElementById('cemail').value.replace(/^\s+|\s+$/g,"");document.getElementById('cemail').value=ibse_email;}
else if(ibse_mobile==''&&ibse_email==''&&pg_stat!='dnd')
{ibse_name=document.getElementById('c2l_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('c2l_name').value=ibse_name;ibse_mobile=document.getElementById('c2l_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('c2l_mobile').value=ibse_mobile;ibse_email=document.getElementById('c2l_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('c2l_email').value=ibse_email;}
type=1;}
if(document.getElementById('source').value!="")
{source=document.getElementById('source').value;}
if(!$('#ibse_vcodelft').is(':visible')&&!$('#ibse_vcodert').is(':visible'))
{if(page=="bestdeal"||page=="bdfrm")
{if(validate_smsbestdeal(ibse_name,ibse_mobile,ibse_email))
{closeDiv('best_deal_detail_div');ibse_name=(ibse_name.search(/Your/i)!=-1)?"User":ibse_name;get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',pg_stat,'',docid);}}
else if(page=="c2l")
{if(!$('#ibse_vcodelft').is(':visible')&&!$('#ibse_vcodert').is(':visible'))
{if(validate_mobileemail(ibse_mobile,ibse_email)){get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',pg_stat);}}
else
{var vcodelft=$('#ibse_vcodelft').val();var vcodelft=$('#ibse_vcodert').val();var ibse_vcode=vcodelft+'-'+vcodert;if(ibse_vcode=="-")
{alert("Please Enter Verification Code.");$('#ibse_vcodelft').val('');$('#ibse_vcodert').val('');$('#ibse_vcodelft').focus();return false;}
ibse_name=(ibse_name.search(/e.g/i)!=-1)?"User":ibse_name;get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,pg_stat);}}
else if(validate_smsemail(ibse_name,ibse_mobile,ibse_email)){get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',pg_stat);}}
else
{var ibse_vcodelft=document.getElementById('ibse_vcodelft').value;var ibse_vcodert=document.getElementById('ibse_vcodert').value;var ibse_vcode=ibse_vcodelft+'-'+ibse_vcodert;if(ibse_vcode=="-")
{alert("Please Enter Verification Code.");$('#ibse_vcodelft').value('');$('#ibse_vcodert').value('');$('#ibse_vcodelft').focus();return false;}
ibse_name=(ibse_name.search(/Your/i)!=-1)?"User":ibse_name;get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,pg_stat,'',docid);}}
function setCookie(c_name,value,exdays)
{var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value;}
function get_ajax_response(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,docid,resend)
{var resend=(resend===undefined)?0:resend;$('#smstext_bd').html('');$('#bdcls').addClass('');var ibse_ajax=set_ajax_object();var params="rqtp="+ibse_rqtp+"&tp="+ibse_tp+"&did="+ibse_rqdt+"&ct="+ibse_ct+"&uq_id="+ibse_uq_id+"&vc="+ibse_vc+"&mb="+ibse_mobile+"&em="+ibse_email+"&nm="+ibse_name+"&logmob="+lognm+"&xmlid="+xmlid;params=encodeURI(params);if(document.getElementById('smssuccess1'))
{document.getElementById('smssuccess1').innerHTML="";}
if(document.getElementById('smssuccess'))
{document.getElementById('smssuccess').innerHTML="";}
ibse_ajax.onreadystatechange=function(){if(ibse_ajax.readyState!=4)
{}
else if(ibse_ajax.readyState==4)
{document.cookie=escape('BDprofile')+"="+escape(1)+";  path=/; domain="+cookieondomain;if(page=="bestdeal"||page=="bdfrm")
{if(ibse_ajax.responseText.search(/Verification/i)!=-1)
{var dndresp=ibse_ajax.responseText.split("|##|");var bddn=dndresp[1].split("|@|");if(dndresp['0']==1){openDiv('best_deal_dnd','');document.getElementById('infomiddlednd').innerHTML='<font color="red">Incorrect Verification Code.</font>';}
else{openDiv('best_deal_dnd','');}
document.getElementById('bddnd').innerHTML=bddn[0];}
else
{closeDiv('best_deal_dnd','');var expbdresp1=ibse_ajax.responseText.split("|@|");var expbdresp=expbdresp1[1].split("|~|");console.log("data layer submition ->",dlayr);window.dataLayer.push({event:'bdButtonSubmitEvent',bdtext:dlayr.bdtext,bdpage:dlayr.bdpage,ncatid:dlayr.nid,b2b:0,wap:7,companyname:dlayr.bname,verified:dlayr.verified,pstatus:dlayr.pstatus,docid:dlayr.docid,position:dlayr.position,});if(expbdresp[1]==1)
{$('#bdsrcname').html(ibse_name);$('#bdsrcmob').html(ibse_mobile);openDiv('best_deal_resp','');document.cookie="bdsuccess = 1"+"; path=/ ;domain="+cookieondomain;document.cookie="bdcheck = 2"+";  path=/ ;domain="+cookieondomain;document.cookie="bdp = 3"+";  path=/ ;domain="+cookieondomain;document.cookie="bdpdet = 3"+"; path=/ ;domain="+cookieondomain;loginUser(ibse_name,ibse_mobile,ibse_email,1);$("#vendors").show();$('#smstext_bd').html('SMS has been successfully sent to Mobile No.');$('#bdcls').addClass('send_mark');}
else
{$('#bdsrcname1').html(ibse_name);$('#bdsrcmob1').html(ibse_mobile);if(expbdresp[1]==3)
{document.getElementById('smssuccess').innerHTML=expbdresp1[0];round_popup();openDiv('smssuccess','');}
else
{openDiv('best_deal_resp_maxlimit','');}
document.cookie="bdsuccess = 0"+";  path=/";$("#vendors").hide();$('#smstext1').html('SMS not sent to Mobile No.');$('#bdcls1').addClass('wn');}}}
else
{var smsemail=ibse_ajax.responseText.split("|@|");sm=smsemail[1].split('|~|');if(sm[1]==1||sm[1]==2)
{if(smsemailsource!='')
{smsSubmitTrack();}
if(sm[1]!=2)
{loginUser(ibse_name,ibse_mobile,ibse_email,1);}}
if(sm[1]==2)
{closeDiv('gtnf');document.getElementById('smssuccess1').innerHTML=smsemail[0];round_popup();openDiv('smssuccess1','',smsemailsource);var c2l_type=document.getElementById('c2l_type').value;if(c2l_type=='c2l_s')
{_ct('c2l_s','detail');}
else
{_ct('c2l_m','detail');}}
else
{closeDiv('gtnf');if(document.getElementById('smssuccess')){closeDiv('smssuccess');}
document.getElementById('smssuccess').innerHTML=smsemail[0];round_popup();openDiv('smssuccess','',smsemailsource);var final_msg=smsemail[0].indexOf('tick');var newuserflag=getCookie('new_user');if(final_msg!=-1&&newuserflag!=1)
{setTimeout("pageReload();",3000);}
if(final_msg!=-1&&newuserflag==1)
{closeDiv('smssuccess');$("#Nname").val(ibse_name);$("#Nphn").val(ibse_mobile);$("#Nemail").val(ibse_email);openDiv('newuserpass');}}}}};ibse_vcode=ibse_vcode?ibse_vcode:0;searchterm=searchterm.replace("&","*amp*");searchterm=searchterm.replace("-","*hyp*");var nm=ibse_name.indexOf("e.g.");var eml=ibse_email.indexOf("e.g.");if(nm!=-1)
{ibse_name="User";}
if(eml==0)
{ibse_email="";}
if(document.getElementById('paid_stat'))
var paid=document.getElementById('paid_stat').value;else
var paid=0;var usermoz=false;if(navigator.userAgent.match(/Firefox\/3/i)&&navigator.userAgent.match(/mozilla/i)){usermoz=true;}
var numberMaskingFlag=$('input[name="callpref"]:checked').val();if(numberMaskingFlag==undefined)
{numberMaskingFlag=document.getElementById('number_masking').value;}
var show_optin=document.getElementById('show_optin').value;var catbdid='';if(xmlid!=''&&(page=="bestdeal"||page=="bdfrm")&&$('#catid').val()!='')
{var catbdidarr=$('#catid').val().split(",");catbdid=(bd_parent_id!='')?bd_parent_id:catbdidarr[0];}
ibse_ajax.open("GET",DOMAIN+"webmain/smsEmail.php?name="+ibse_name+"&mobile="+ibse_mobile+"&email="+ibse_email+"&source="+source+"&type="+type+"&searchterm="+encodeURIComponent(searchterm)+"&smsid="+smsuniqueid+"&vcode="+ibse_vcode+"&page="+page+"&logmob="+lognm+"&xmlid="+xmlid+"&docid="+docid+"&paid="+paid+"&citym="+autoValue+"&resend="+resend+"&bdtype="+$('#bdtype').val()+"&numberMaskingFlag="+numberMaskingFlag+"&show_optin="+show_optin+"&category_id="+catbdid,usermoz);ibse_ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");ibse_ajax.setRequestHeader("Content-length",params.length);ibse_ajax.setRequestHeader("Connection","close");ibse_ajax.send(params);}
function get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,pg_stat,resend,docid)
{var resend=(resend===undefined)?0:resend;$('#smstext_bd').html('');$('#bdcls').addClass('');var ibse_ajax=set_ajax_object();var params="rqtp="+ibse_rqtp+"&tp="+ibse_tp+"&did="+ibse_rqdt+"&ct="+ibse_ct+"&uq_id="+ibse_uq_id+"&vc="+ibse_vc+"&mb="+ibse_mobile+"&em="+ibse_email+"&nm="+ibse_name+"&logmob="+lognm+"&xmlid="+xmlid;params=encodeURI(params);document.getElementById('smssuccess').innerHTML="";ibse_ajax.onreadystatechange=function(){if(ibse_ajax.readyState!=4)
{}
else if(ibse_ajax.readyState==4)
{if(page=="bestdeal"||page=="bdfrm")
{if(ibse_ajax.responseText.search(/Verification/i)!=-1)
{var dndresp=ibse_ajax.responseText.split("|##|");var bddn=dndresp[1].split("|@|");if(dndresp['0']==1){openDiv('best_deal_dnd','');document.getElementById('infomiddlednd').innerHTML='<font color="red">Incorrect Verification Code.</font>';}
else{openDiv('best_deal_dnd','');}
document.getElementById('bddnd').innerHTML=bddn[0];}
else
{closeDiv('best_deal_dnd','');var expbdresp1=ibse_ajax.responseText.split("|@|");var expbdresp=expbdresp1[1].split("|~|");document.getElementById('bdmsg_dtl').innerHTML=expbdresp1[0];console.log(expbdresp,"00000",category_id);console.log("data layer submition Details ->",dlayr);if(dlayr){dlayr.nid=category_id
window.dataLayer.push({event:'bdButtonSubmitEvent',bdtext:dlayr.bdtext,bdpage:dlayr.bdpage,ncatid:dlayr.nid,b2b:0,wap:7,companyname:dlayr.bname,verified:dlayr.verified,pstatus:dlayr.pstatus,docid:dlayr.docid,position:dlayr.position,});}
if(expbdresp[1]==1)
{$('#bdsrcname').html(ibse_name);$('#bdsrcmob').html(ibse_mobile);openDiv('best_deal_resp','');document.cookie="bdsuccess = 1"+"; path=/ ;domain="+cookieondomain;document.cookie="bdcheck = 2"+";  path=/ ;domain="+cookieondomain;document.cookie="bdp = 3"+";  path=/ ;domain="+cookieondomain;document.cookie="bdpdet = 3"+"; path=/ ;domain="+cookieondomain;loginUser(ibse_name,ibse_mobile,ibse_email,1);$("#vendors").show();$('#smstext_bd').html('SMS has been successfully sent to Mobile No.');$('#bdcls').addClass('send_mark');document.getElementById('max_limit_dtl').innerHTML="Alternatively you could call these vendors and negotiate.";}
else
{$('#bdsrcname1').html(ibse_name);$('#bdsrcmob1').html(ibse_mobile);if(expbdresp[1]==3)
{document.getElementById('smssuccess').innerHTML=expbdresp1[0];round_popup();openDiv('smssuccess','');}
else
{openDiv('best_deal_resp_maxlimit','');}
document.cookie="bdsuccess = 0"+";  path=/";$('#smstext1').html('SMS not sent to Mobile No.')
$('#bdcls1').addClass('wn');}}}
else
{var smsemail=ibse_ajax.responseText.split("|@|");sm=smsemail[1].split('|~|');if(sm[1]==1){loginUser(ibse_name,ibse_mobile,ibse_email,1);}
if(document.getElementById('smssuccess1'))
{closeDiv('smssuccess1');}
if(document.getElementById('smssuccess'))
{closeDiv('smssuccess');}
document.getElementById('smssuccess').innerHTML=smsemail[0];round_popup();openDiv('smssuccess','');var final_msg=smsemail[0].indexOf('tick');var newuserflag=getCookie('new_user');if(final_msg!=-1&&newuserflag!=1)
{setTimeout("pageReload();",3000);}
if(final_msg!=-1&&newuserflag==1)
{closeDiv('smssuccess');$("#Nname").val(ibse_name);$("#Nphn").val(ibse_mobile);$("#Nemail").val(ibse_email);openDiv('newuserpass');}}}};ibse_vcode=ibse_vcode?ibse_vcode:0;searchterm=searchterm.replace("&","*amp*");searchterm=searchterm.replace("-","*hyp*");var nm=ibse_name.indexOf("e.g.");var eml=ibse_email.indexOf("e.g.");if(nm!=-1)
{ibse_name="User";}
if(eml==0)
{ibse_email="";}
category_name=escape(unescape(category_name));if(pg_stat=='c2l_one')
{category_id=document.getElementById('category_id').value;category_name=document.getElementById('category_name').value;category_name=escape(unescape(category_name));}
area=(document.getElementById('where').value!='')?document.getElementById('where').value:document.getElementById('whr').value;area=area.replace("-","$|$");var usermoz1=false;if(navigator.userAgent.match(/Firefox\/3/i)&&navigator.userAgent.match(/mozilla/i)){usermoz1=true;}
ibse_email=(ibse_email=="Your Email Id (optional)")?"":ibse_email;var sarea=$('#srcharea').val();var srcharea=(page=="bestdeal"||page=="bdfrm")?sarea:'';if(page=="bestdeal"||page=="bdfrm")
{var numberMaskingFlag=$('input[name="callflag"]:checked').val();}else
{var numberMaskingFlag=$('input[name="callflagc2l"]:checked').val();}
if(numberMaskingFlag==undefined)
{numberMaskingFlag=document.getElementById('number_masking').value;}
var show_optin=document.getElementById('show_optin').value;ibse_ajax.open("GET",DOMAIN+"webmain/smsEmail.php?name="+ibse_name+"&mobile="+ibse_mobile+"&email="+ibse_email+"&source="+source+"&type="+type+"&searchterm="+encodeURIComponent(searchterm)+"&smsid="+smsuniqueid+"&vcode="+ibse_vcode+"&page="+page+"&logmob="+lognm+"&xmlid="+xmlid+"&from=detail&category_id="+category_id+"&category_name="+category_name+"&area="+area+"&pg_stat="+pg_stat+"&citym="+autoValue+"&resend="+resend+"&bdtype="+$('#bdtype').val()+"&srcharea="+srcharea+"&docid="+docid+"&numberMaskingFlag="+numberMaskingFlag+"&show_optin="+show_optin,usermoz1);ibse_ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");ibse_ajax.setRequestHeader("Content-length",params.length);ibse_ajax.setRequestHeader("Connection","close");ibse_ajax.send(params);}
function validate_smsbestdeal(ibse_name,ibse_mobile,ibse_email)
{if(ibse_name==''||ibse_name=='e.g Ravi Verma')
{alert("Please enter your name.");$('#bd_name').focus();$('#bd_name_detail').focus();return false;}
if((ibse_name!='')&&(!isValid(ibse_name,'name')))
{alert("Please enter a valid name.");$('#bd_name').focus();$('#bd_name_detail').focus();return false;}
if(ibse_mobile==''||ibse_mobile=='e.g 9867045061')
{alert("Please enter your Mobile Number.");$('#bd_mobile').focus();$('#bd_mobile_detail').focus();return false;}
if(ibse_mobile!='')
{var alert_msg=mobile_validation(ibse_mobile);if(alert_msg!="valid")
{alert(alert_msg);$('#bd_mobile').focus();$('#bd_mobile_detail').focus();return false;}}
if(ibse_email!='e.g. abc@xyz.com'&&ibse_email!='Your Email Id (optional)')
{if(!isValid(ibse_email,'email')||(ibse_email=="abc@xyz.com"))
{alert("Please enter a valid Email id.");$('#bd_email').focus();$('#bd_email_detail').focus();return false;}}
return true;}
function validate_smsemail(ibse_name,ibse_mobile,ibse_email)
{if(ibse_name=='')
{alert("Please enter your name.");$('#bd_name').focus();$('#ibse_name').focus();return false;}
if((ibse_name!='')&&(!isValid(ibse_name,'name')))
{alert("Please enter a valid name.");$('#bd_name').focus();$('#ibse_name').focus();return false;}
if(ibse_email==''&&ibse_mobile=='')
{alert("Please enter your Email Address or Mobile Number.");$('#bd_mobile').focus();$('#ibse_mobile').focus();return false;}
if(ibse_mobile!='')
{var alert_msg=mobile_validation(ibse_mobile);if(alert_msg!="valid")
{alert(alert_msg);$('#bd_mobile').focus();$('#ibse_mobile').focus();return false;}}
if(ibse_email!='')
{if(!isValid(ibse_email,'email'))
{alert("Please enter a valid Email address.");$('#bd_email').focus();$('#ibse_email').focus();return false;}}
return true;}
function validate_mobileemail(ibse_mobile,ibse_email)
{if(ibse_mobile=='')
{alert("Please enter your Mobile Number.");document.getElementById('c2l_mobile').focus();return false;}
if(ibse_mobile!='')
{var alert_msg=mobile_validation(ibse_mobile);if(alert_msg!="valid")
{alert(alert_msg);document.getElementById('c2l_mobile').focus();return false;}}
if(ibse_email!='e.g. abc@xyz.com'&&ibse_email!='Your Email Id (optional)')
{if(!isValid(ibse_email,'email')||(ibse_email=="abc@xyz.com"))
{alert("Please enter a valid Email id.");document.getElementById('c2l_email').focus();return false;}}
return true;}
function isValid(value,type)
{var str=$.trim(value);switch(type)
{case'name':return/^[a-zA-Z]+([.]{0,1}[ ]{0,1}[a-zA-Z]+)*$/.test(str);case'alpha':return/^[A-Za-z]*$/.test(str);case'numeric':return/^[0-9]*$/.test(str);case'email':return/^(([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,7}){0,1}$/.test(str);}}
function snfemail()
{var email=$("#snfemail").val();var list=$("#snflt").val();if(validateSNF(email,list))
{type=document.search.type.value;searchterm=document.search.searchterm.value.replace(/^\s+|\s+$/g,"");snf_insert(email,list,type,searchterm);}}
function snf_insert(email,list,type,searchterm)
{product="";company="";if(type==1)
{product=searchterm;}
else
{if(getCookie('inweb_org')!='')
{company=getCookie('inweb_org');}
else if(getCookie('inweb_what')!='')
{company=getCookie('inweb_what');}
else
{company=searchterm;}}
city=document.index.city.value;locate=document.index.where.value;var xmlhttp=set_ajax_object();xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText=="true")
{openDiv("snfres","");}}}
xmlhttp.open("POST",DOMAIN+"functions/searchnotfound.php?company="+company+"&product="+product+"&email="+email+"&suggestion="+list+"&locate="+locate+"&city="+city+"&module=2",true);xmlhttp.send();}
function validateSNF(email,list)
{if(list==""||list=="Listing Information")
{document.getElementById("snfer").innerHTML="<font color='#ff0000'>Enter Required Listing</font>";document.getElementById("snflt").focus();return false;}
else
{document.getElementById("snfer").innerHTML="";}
if(!isValid(email,'email'))
{document.getElementById("snferror").innerHTML="<font color='#ff0000'>Enter Valid Email Id</font>";document.getElementById("snfemail").focus();return false;}
else
{document.getElementById("snferror").innerHTML="";return true;}}
function Nrefresh()
{str=location.href;loc1=str.substr(-2);if(loc1=='tab=1'){Nhref=str.replace(str.substr(-2),'');window.location=Nhref;}
else{location.reload(true);}}function smsSubmitTrack()
{switch(smsemailsource)
{case't':trackEvent('S_Mobile/Email-TR','S_Send_to_Mobile/Email-TR','TR-Submit');break;case'r':trackEvent('S_Mobile/Email-LP','S_Send_to_Mobile/Email-LP','LP-Submit');break;case'd':trackEvent('S_Mobile/Email-DP','S_Send_to_Mobile/Email-DP','DP-Submit');break;default:break;}}
function sendSmsEmail_rslfilter(page,lognm,xmlid,docid,pg_stat)
{var ibse_name="";var ibse_mobile="";var ibse_email="";if(pg_stat=="")
{var chk=document.getElementsByName('cat_chkbox');var hsChecked=false;count=0;for(var z=0;z<chk.length;z++)
{if(chk[z].checked==true)
{count++;hsChecked=true;}}
hsChecked=(chk.length==1)?true:hsChecked;if(hsChecked==false)
{alert("Please select at least one category.");return false;}
if(category_id==""||category_id=="undefined")
{alert("Please Select any category.");return false;}}
if(page=="bestdeal"){if(ibse_name==''&&ibse_mobile==''&&ibse_email=='')
{ibse_name=document.getElementById('bd_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_name').value=ibse_name;ibse_mobile=document.getElementById('bd_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_mobile').value=ibse_mobile;ibse_email=document.getElementById('bd_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_email').value=ibse_email;}}
else if(page=="bdfrm"){ibse_name=document.getElementById('bd_name_frm').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_name_frm').value=ibse_name;ibse_mobile=document.getElementById('bd_mobile_frm').value.replace(/^\s+|\s+$/g,"");document.getElementById('bd_mobile_frm').value=ibse_mobile;}
else{ibse_name=document.getElementById('ibse_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_name').value=ibse_name;ibse_mobile=document.getElementById('ibse_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_mobile').value=ibse_mobile;ibse_email=document.getElementById('ibse_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_email').value=ibse_email;}
type=document.search.type.value;searchterm=document.search.searchterm.value.replace(/^\s+|\s+$/g,"");smsuniqueid=document.search.smsuniqueid.value;if(document.getElementById('source').value!="")
{source=document.getElementById('source').value;}
if(!$('#ibse_vcode_detail').is(':visible'))
{if(page=="bestdeal"||page=="bdfrm")
{if(validate_smsbestdeal(ibse_name,ibse_mobile,ibse_email))
{closeDiv('best_deal_div');ibse_name=(ibse_name.search(/e.g/i)!=-1)?"User":ibse_name;get_ajax_response_rslfilter(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid,pg_stat);}}
else if(validate_smsemail(ibse_name,ibse_mobile,ibse_email)){get_ajax_response_rslfilter(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid,pg_stat);}}
else
{var ibse_vcode=document.getElementById('ibse_vcode_detail').value;if(ibse_vcode=="")
{alert("Please Enter Verification Code.");document.getElementById('ibse_vcode_detail').focus();return false;}
ibse_name=(ibse_name.search(/e.g/i)!=-1)?"User":ibse_name;get_ajax_response_rslfilter(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,docid,pg_stat);}}
function get_ajax_response_rslfilter(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,ibse_vcode,docid,pg_stat,resend)
{var resend=(resend===undefined)?0:resend;$('#smstext_bd').html('');$('#bdcls').addClass('');var ibse_ajax=set_ajax_object();var params="rqtp="+ibse_rqtp+"&tp="+ibse_tp+"&did="+ibse_rqdt+"&ct="+ibse_ct+"&uq_id="+ibse_uq_id+"&vc="+ibse_vc+"&mb="+ibse_mobile+"&em="+ibse_email+"&nm="+ibse_name+"&logmob="+lognm+"&xmlid="+xmlid;params=encodeURI(params);document.getElementById('smssuccess').innerHTML="";ibse_ajax.onreadystatechange=function(){if(ibse_ajax.readyState!=4)
{}
else if(ibse_ajax.readyState==4)
{if(page=="bestdeal"||page=="bdfrm")
{if(ibse_ajax.responseText.search(/Verification/i)!=-1)
{var dndresp=ibse_ajax.responseText.split("|##|");var bddn=dndresp[1].split("|@|");if(dndresp['0']==1){openDiv('best_deal_dnd','');document.getElementById('infomiddlednd').innerHTML='<font color="red">Incorrect Verification Code.</font>';}
else{openDiv('best_deal_dnd','');}
document.getElementById('bddnd').innerHTML=bddn[0];}
else
{closeDiv('best_deal_dnd','');var expbdresp1=ibse_ajax.responseText.split("|@|");var expbdresp=expbdresp1[1].split("|~|");if(expbdresp[1]==1)
{$('#bdsrcname').html(ibse_name);$('#bdsrcmob').html(ibse_mobile);openDiv('best_deal_resp','');document.cookie="bdsuccess = 1"+"; path=/ ;domain="+cookieondomain;document.cookie="bdcheck = 2"+";  path=/ ;domain="+cookieondomain;document.cookie="bdp = 3"+";  path=/ ;domain="+cookieondomain;document.cookie="bdpdet = 3"+"; path=/ ;domain="+cookieondomain;loginUser(ibse_name,ibse_mobile,ibse_email,1);$("#vendors").show();$('#smstext_bd').html('SMS has been successfully sent to Mobile No.');$('#bdcls').addClass('send_mark');}
else
{$('#bdsrcname1').html(ibse_name);$('#bdsrcmob1').html(ibse_mobile);if(expbdresp[1]==3)
{document.getElementById('smssuccess').innerHTML=expbdresp1[0];round_popup();openDiv('smssuccess','');}
else
{openDiv('best_deal_resp_maxlimit','');}
document.cookie="bdsuccess = 0"+";  path=/";$('#smstext1').html('SMS not sent to Mobile No.')
$('#bdcls1').addClass('wn');}}}
else
{var smsemail=ibse_ajax.responseText.split("|@|");sm=smsemail[1].split('|~|');if(sm[1]==1){loginUser(ibse_name,ibse_mobile,ibse_email,1);}
if(document.getElementById('smssuccess1'))
{closeDiv('smssuccess1');}
if(document.getElementById('smssuccess'))
{closeDiv('smssuccess');}
document.getElementById('smssuccess').innerHTML=smsemail[0];round_popup();openDiv('smssuccess','');var final_msg=smsemail[0].indexOf('tick');var newuserflag=getCookie('new_user');if(final_msg!=-1&&newuserflag!=1)
{setTimeout("pageReload();",3000);}
if(final_msg!=-1&&newuserflag==1)
{closeDiv('smssuccess');$("#Nname").val(ibse_name);$("#Nphn").val(ibse_mobile);$("#Nemail").val(ibse_email);openDiv('newuserpass');}}}};ibse_vcode=ibse_vcode?ibse_vcode:0;searchterm=searchterm.replace("&","*amp*");searchterm=searchterm.replace("-","*hyp*");var nm=ibse_name.indexOf("e.g.");var eml=ibse_email.indexOf("e.g.");if(nm!=-1)
{ibse_name="User";}
if(eml==0)
{ibse_email="";}
category_name=escape(unescape(category_name));if(pg_stat=='c2l_one')
{category_id=document.getElementById('category_id').value;category_name=document.getElementById('category_name').value;category_name=escape(unescape(category_name));}
area=document.getElementById('where').value;area=area.replace("-","$|$");ibse_email=(ibse_email=="Your Email Id (optional)")?"":ibse_email;ibse_ajax.open("GET",DOMAIN+"webmain/smsEmail.php?name="+ibse_name+"&mobile="+ibse_mobile+"&email="+ibse_email+"&source="+source+"&type="+type+"&searchterm="+encodeURIComponent(searchterm)+"&smsid="+smsuniqueid+"&vcode="+ibse_vcode+"&page="+page+"&logmob="+lognm+"&xmlid="+xmlid+"&from=detail&category_id="+category_id+"&category_name="+category_name+"&area="+area+"&pg_stat="+pg_stat+"&rsl_pg=filcat&resend="+resend+"&bdtype="+$('#bdtype').val(),true);ibse_ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");ibse_ajax.setRequestHeader("Content-length",params.length);ibse_ajax.setRequestHeader("Connection","close");ibse_ajax.send(params);}
function ndncResendVcode(page,lognm,xmlid,docid){var resend=1;var ibse_name="";var ibse_mobile="";var ibse_email="";ibse_name=document.getElementById('ibse_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_name').value=ibse_name;ibse_mobile=document.getElementById('ibse_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_mobile').value=ibse_mobile;ibse_email=document.getElementById('ibse_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_email').value=ibse_email;type=document.search.type.value;searchterm=(bd_parent!=''&&(page=="bestdeal"||page=="bdfrm"))?bd_parent:document.search.searchterm.value.replace(/^\s+|\s+$/g,"");get_ajax_response(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid,resend);}
function ndncResendsendSmsEmail_rslfilter(page,lognm,xmlid,pg_stat){var resend=1;var ibse_name="";var ibse_mobile="";var ibse_email="";ibse_name=document.getElementById('ibse_name').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_name').value=ibse_name;ibse_mobile=document.getElementById('ibse_mobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_mobile').value=ibse_mobile;ibse_email=document.getElementById('ibse_email').value.replace(/^\s+|\s+$/g,"");document.getElementById('ibse_email').value=ibse_email;type=document.search.type.value;searchterm=(bd_parent!=''&&(page=="bestdeal"||page=="bdfrm"))?bd_parent:document.search.searchterm.value.replace(/^\s+|\s+$/g,"");get_ajax_response_rslfilter(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',docid,pg_stat,resend);}
function ndncResendsendSmsEmail_detail(page,lognm,xmlid,pg_stat){var resend=1;var ibse_name="";var ibse_mobile="";var ibse_email="";searchterm=(bd_parent!=''&&(page=="bestdeal"||page=="bdfrm"))?bd_parent:document.search.searchterm.value.replace(/^\s+|\s+$/g,"");ibse_name=document.getElementById('cname').value.replace(/^\s+|\s+$/g,"");document.getElementById('cname').value=ibse_name;ibse_mobile=document.getElementById('cmobile').value.replace(/^\s+|\s+$/g,"");document.getElementById('cmobile').value=ibse_mobile;ibse_email=document.getElementById('cemail').value.replace(/^\s+|\s+$/g,"");document.getElementById('cemail').value=ibse_email;type=1;get_ajax_response_detail(xmlid,lognm,ibse_name,ibse_mobile,ibse_email,type,searchterm,page,'',pg_stat,resend);}
function pageReload()
{var url=location.href;url=url.replace(/\&tab=1$/,'');url=url.replace('&tab=gallery','');if(window.event){window.event.returnValue=false;window.location=url;return false;}else{window.location=url;}}