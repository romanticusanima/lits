
(function($,Edge,compId){var _=null,y=true,n=false,x2='3.0.0.322',e54='${_key_f}',a='Base State',e51='${_key_l}',e52='${_key_a}',s='style',i='none',x27='visible',e26='${_cover}',e50='${_ea_symbol7}',e34='${_ea_text}',lf='left',e37='${_ea_symbol10}',e46='${_ea_symbol4}',e39='${_key_s}',bg='background-color',x29='@@0@@% @@1@@%',x9='rgba(255,255,255,1)',x13='600',e49='${_key_i}',ov='overflow',xc='rgba(0,0,0,1)',x25='stage',zy='scaleY',t='transform',x35='rgba(255,255,255,0.00)',e33='${_ea_cursor}',x4='rgba(0,0,0,0)',x11='35',e38='${_ea_symbol9}',e44='${_key_o}',zx='scaleX',e58='${_key_c}',x='text',e57='${_key_g}',e28='${_ea_logo}',m='rect',e47='${_ea_symbol12}',x56='rgba(41,128,185,0.00)',h='height',x1='3.0.0',e41='${_key_t}',e55='${_Stage}',e53='${_key_enter}',bsz='background-size',e32='${_ea_symbol2}',e45='${_ea_symbol11}',p='px',o='opacity',e59='${_ea_symbol8}',e42='${_key_space}',e40='${_ea_symbol6}',c='color',x12='Arial, Helvetica, sans-serif',g='image',e43='${_ea_cont}',e30='${_ea_symbol3}',e36='${_ea_symbol5}',fs='font-size',dt='Default Timeline',w='width',x3='rgba(192,192,192,1)',ql='linear',x31='rgba(255,255,255,1.00)',e48='${_ea_symbol1}',ff='font-family',tp='top';var im='/images/';var g8='key_enter4.png',g5='logo.png',g7='key1.png',g6='key_space.png';var s22="a",s15="g",s23="f",s16="i",s14="o",s21="t",s18="I",s17="c",s10="L",s20="S",s19="T",s24="_";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'ea_cont',t:m,r:['77px','117px','192px','69px','auto','auto'],f:[x3],s:[0,xc,i],c:[{id:'ea_logo',t:g,r:['0px','0px','192px','69px','auto','auto'],o:1,f:[x4,im+g5,'0px','0px']},{id:'key_space',t:g,r:['34px','57px','11px','11px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'key_t',t:g,r:['45px','22px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_s',t:g,r:['10px','33px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_a',t:g,r:['-2px','33px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_enter',t:g,r:['172px','46px','11px','11px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'key_f',t:g,r:['34px','33px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_c',t:g,r:['42px','45px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_i',t:g,r:['85px','22px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_g',t:g,r:['58px','33px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_o',t:g,r:['97px','22px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'key_l',t:g,r:['97px','34px','11px','11px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'cover',t:m,r:['0px','0px','96%','579.7%','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]}]},{id:'ea_sound',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:['/media/logo2.mp3']},{id:'ea_text',t:m,r:['200px','0px','200px','69px','auto','auto'],f:[x9],s:[1,"rgb(0, 0, 0)",i],c:[{id:'ea_symbol1',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s10,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol2',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s14,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol3',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s15,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol4',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s16,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol5',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s17,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol6',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s18,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol7',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s19,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol8',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s20,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol9',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s21,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol10',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s22,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol11',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s23,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_symbol12',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s23,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]},{id:'ea_cursor',t:x,r:['8px','20px','auto','auto','auto','auto'],text:s24,n:[x12,x11,"rgba(146,146,146,1.00)",x13,i,""]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4201,a:n,l:{"animation_in":100,"animation_out":3474},tt:[{id:"eid272",tr:[function(e,d){this.eMA(e,d);},['play','${_ea_sound}',[]],""],p:100}]}}}};var S1=symbols[x25];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e26).P(h,100,_,_,"%").P(o,0,_,_,"").P(w,96,_,_,"%");A1.A(e28).P(tp,0).P(o,1,_,_,"").P(lf,0,_,_,p);A1.A(e30).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.1,0).T(0.44,1,0.017,ql).P(lf,40,_,_,p).T(0.44,40).P(fs,28).T(0.1,28);A1.A(e32).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.1,0).T(0.27,1,0.02,ql).P(lf,24,_,_,p).T(0.27,24).P(fs,28).T(0.1,28);A1.A(e33).P(tp,20).P("font-weight",600,_,_,"").P(ff,x12).P(c,x31,c).T(4.201,x31).P(o,0).T(0.1,1,0.001,ql).T(0.12,1).T(3.182,0,0.275).P(lf,30,_,_,p).T(0.12,30).T(0.27,50).T(0.457,56).T(0.63,72,_,_,82).T(0.798,84).T(1.055,89,_,_,99).T(1.293,105).T(1.518,117,_,_,127).T(1.775,136).T(1.988,145,_,_,155).T(2.263,162).T(2.538,175,_,_,185).T(2.773,187).T(3.182,197,_,_,197).P(fs,28).T(0.1,28);A1.A(e34).P(ov,x27).P("border-width",1).P("border-style",i).P(w,230).P(bg,x35,c).T(0.1,x35).P(o,1,_,_,"").T(3.474,0,0.726,ql).P(lf,200,_,_,p).T(0.101,220,3.36).T(3.474,200,0.724);A1.A(e36).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(0.78,1,0.018,ql).P(lf,65,_,_,p).T(0.78,65).P(fs,28).T(0.1,28);A1.A(e37).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(2.52,1,0.018,ql).P(lf,79,_,_,p).T(2.52,155,0.018).P(fs,28).T(0.1,28);A1.A(e38).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(2.245,1,0.018,ql).P(lf,79,_,_,p).T(2.245,144,0.018).P(fs,28).T(0.1,28);A1.A(e39).P(tp,33).P(h,11).P(lf,10).P(w,11).P(zx,1,t,_,"").T(1.97,1.1,0.17,ql).T(2.14,1,0.105).P(o,0).T(1.97,1,0.17).T(3.68,0,0.107).P(zy,1,t).T(1.97,1.1,0.17).T(2.14,1,0.105);A1.A(e40).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(1.275,1,0.018,ql).P(lf,79,_,_,p).T(1.275,89,0.018).P(fs,28).T(0.1,28);A1.A(e41).P(tp,22).P(h,11).P(lf,45).P(w,11).P(zx,1,t,_,"").T(1.5,1.1,0.17,ql).T(1.67,1,0.105).T(2.245,1.1,0.17).T(2.415,1,0.105).P(o,0).T(1.5,1,0.17).T(2.245,1,0.17,_,0).T(3.635,0,0.045).T(3.77,0,0.09,_,1).P(zy,1,t).T(1.5,1.1,0.17).T(1.67,1,0.105).T(2.245,1.1,0.17).T(2.415,1,0.105);A1.A(e42).P(tp,57).P(h,11).P(lf,34).P(w,74).P(zx,1,t,_,"").T(1,1.1,0.17,ql).T(1.17,1,0.105).T(1.695,1.1,0.17).T(1.865,1,0.105).P(o,0).T(1,1,0.17).T(1.695,1,0.17,_,0).T(3.725,0,0.09).P(zy,1,t).T(1,1.1,0.17).T(1.17,1,0.105).T(1.695,1.1,0.17).T(1.865,1,0.105);A1.A(e43).P(h,69).P(tp,0).T(4.201,0).P(zy,1,t,_,"").T(0.1,1.2,3.357,ql).T(3.474,1.03,0.727).P(zx,1,t).T(0.1,1.2,3.357).T(3.474,1,0.727).P(bg,x31,c).T(3.233,x31).T(4.201,x31).P(lf,0,_,_,p).T(4.201,0).P(w,192).T(4.201,192);A1.A(e44).P(tp,22).P(h,11).P(lf,97).P(w,11).P(zx,1,t,_,"").T(0.27,1.1,0.17,ql).T(0.44,1,0.105).P(o,0).T(0.27,1,0.17).T(0.545,1).T(4.04,0,0.086).P(zy,1,t).T(0.27,1.1,0.17).T(0.44,1,0.105);A1.A(e45).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(2.755,1,0.018,ql).P(lf,79,_,_,p).T(2.755,173,0.018).P(fs,28).T(0.1,28);A1.A(e46).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(0.61,1,0.02,ql).P(lf,57,_,_,p).T(0.61,57).P(fs,28).T(0.1,28);A1.A(e47).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(3.03,1,0.018,ql).P(lf,79,_,_,p).T(3.03,184,0.018).P(fs,28).T(0.1,28);A1.A(e48).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(lf,8,_,_,p).P(c,x31,c).T(4.201,x31).P(o,0,_,_,"").T(0.1,1,0.001,ql).T(0.12,1).P(fs,28,_,_,p).T(0.1,28);A1.A(e49).P(tp,22).P(h,11).P(lf,85).P(w,11).P(zx,1,t,_,"").T(0.61,1.1,0.17,ql).T(0.78,1,0.105).T(1.275,1.1,0.17).T(1.445,1,0.105).P(o,0).T(0.61,1,0.17).T(0.885,1).T(1.275,1,0.17,_,0).T(1.55,1).T(3.86,0,0.09).P(zy,1,t).T(0.61,1.1,0.17).T(0.78,1,0.105).T(1.275,1.1,0.17).T(1.445,1,0.105);A1.A(e50).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(1.5,1,0.018,ql).P(lf,79,_,_,p).T(1.5,97,0.018).P(fs,28).T(0.1,28);A1.A(e51).P(tp,34).P(h,11).P(bsz,[99.9,99.9],_,x29).P(lf,97).P(w,11).P(zx,1,t,_,"").T(0.1,1.1,0.17,ql).T(0.27,1,0.105).P(o,0).T(0.1,1,0.17).T(0.375,1).T(4.126,0,0.075).P(zy,1,t).T(0.1,1.1,0.17).T(0.27,1,0.105);A1.A(e52).P(tp,33).P(h,11).P(lf,-2).P(w,11).P(zx,1,t,_,"").T(2.52,1.1,0.17,ql).T(2.69,1,0.105).P(o,0).T(2.52,1,0.17).T(3.59,0,0.109).P(zy,1,t).T(2.52,1.1,0.17).T(2.69,1,0.105);A1.A(e53).P(tp,45).P(h,25).P(lf,172).P(w,12).P(zx,1,t,_,"").T(3.182,1.1,0.17,ql).T(3.352,1,0.105).P(o,0).T(3.182,1,0.17).T(3.352,1).T(3.5,0,0.09).P(zy,1,t).T(3.182,1.1,0.17).T(3.352,1,0.105);A1.A(e54).P(tp,33).P(h,11).P(lf,34).P(w,11).P(zx,1,t,_,"").T(2.755,1.1,0.17,ql).T(2.925,1,0.105).T(3.03,1.1,0.17).T(3.2,1,0.105).P(o,0).T(2.755,1,0.17).T(3.03,1,0.17,_,0).T(3.545,0,0.09).P(zy,1,t).T(2.755,1.1,0.17).T(2.925,1,0.105).T(3.03,1.1,0.17).T(3.2,1,0.105);A1.A(e55).P(ov,x27).P(h,69).P("background-image",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],"gradient").P(w,192).P(bg,x56,c).T(0.1,x56);A1.A(e57).P(tp,33).P(h,11).P(lf,58).P(w,11).P(zx,1,t,_,"").T(0.44,1.1,0.17,ql).T(0.61,1,0.105).P(o,0).T(0.44,1,0.17).T(0.715,1).T(3.945,0,0.095).P(zy,1,t).T(0.44,1.1,0.17).T(0.61,1,0.105);A1.A(e58).P(tp,45).P(h,11).P(w,11).P(zx,1,t,_,"").T(0.78,1.1,0.17,ql).T(0.95,1,0.105).P(o,0).T(0.78,1,0.17).T(3.815,0,0.085).P(lf,34,_,_,p).T(2.025,34).P(zy,1,t,_,"").T(0.78,1.1,0.17).T(0.95,1,0.105);A1.A(e59).P(tp,20).P(ff,x12).P("font-weight",600,_,_,"").P(c,x31,c).T(4.201,x31).P(o,0).T(0.101,0).T(1.97,1,0.018,ql).P(lf,79,_,_,p).T(1.97,124,0.018).P(fs,28).T(0.1,28);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"ea_stage");