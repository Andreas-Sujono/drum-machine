(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cymbal.071d9eb7.wav"},function(e,a,t){e.exports=t.p+"static/media/openHiHat.cdfc6c02.wav"},function(e,a,t){e.exports=t.p+"static/media/closeHiHat.df52b6bf.wav"},function(e,a,t){e.exports=t.p+"static/media/clap.610f0942.mp3"},function(e,a,t){e.exports=t.p+"static/media/snare3.39370c35.wav"},function(e,a,t){e.exports=t.p+"static/media/snare4.36b20edd.wav"},function(e,a,t){e.exports=t.p+"static/media/kickBass.5524e136.mp3"},function(e,a,t){e.exports=t.p+"static/media/snare1.c2b209c2.wav"},function(e,a,t){e.exports=t.p+"static/media/snare2.862a0e41.wav"},function(e,a,t){e.exports=t.p+"static/media/Zedd-Daisy.b5f21336.mp3"},function(e,a,t){e.exports=t.p+"static/media/Zedd-Papercut.ade60bd2.mp3"},function(e,a,t){e.exports=t.p+"static/media/Zedd-Illusion.244409ac.mp3"},function(e,a,t){e.exports=t.p+"static/media/Sabrina Carpenter - Why.3f05d22d.mp3"},function(e,a,t){e.exports=t.p+"static/media/Imagine Dragons - Whatever It Takes.6b953b75.mp3"},,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),o=t(3),l=t.n(o),c=t(4),u=t(5),r=t(21),i=t(6),d=t(1),m=t(22),p=t(7),f=t.n(p),h=t(8),y=t.n(h),v=t(9),E=t.n(v),b=t(10),N=t.n(b),k=t(11),g=t.n(k),S=t(12),w=t.n(S),x=t(13),C=t.n(x),P=t(14),j=t.n(P),O=t(15),H=t.n(O),B=t(16),I=t.n(B),D=t(17),V=t.n(D),Z=t(18),W=t.n(Z),A=t(19),F=t.n(A),J=t(20),M=t.n(J),q={sound1:"cymbal",sound2:"open Hi Hat",sound3:"close Hi Hat",sound4:"clap",sound5:"snare3",sound6:"snare4",sound7:"kick bass",sound8:"snare1",sound9:"snare2"},z=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(r.a)(this,Object(i.a)(a).call(this))).state={play:!0,song:"song1",display:"",volume:80},e.playSound=e.playSound.bind(Object(d.a)(e)),e.shorcutPlay=e.shorcutPlay.bind(Object(d.a)(e)),e.handleVolume=e.handleVolume.bind(Object(d.a)(e)),e.handlePlay=e.handlePlay.bind(Object(d.a)(e)),e.handlePause=e.handlePause.bind(Object(d.a)(e)),e.handleNext=e.handleNext.bind(Object(d.a)(e)),e}return Object(m.a)(a,e),Object(u.a)(a,[{key:"playSound",value:function(e){this.state.play&&(console.log(this.refs[e]),this.refs[e].play(),this.setState({display:q[e]}),this.refs[e].volume=this.state.volume/100),this.refs.focusButton.focus()}},{key:"shorcutPlay",value:function(e){this.state.play&&("q"==e.key&&(this.refs.sound1.load(),this.refs.sound1.play(),this.setState({display:q.sound1}),this.refs.sound1.volume=this.state.volume/100),"w"==e.key&&(this.refs.sound2.load(),this.refs.sound2.play(),this.setState({display:q.sound2}),this.refs.sound2.volume=this.state.volume/100),"e"==e.key&&(this.refs.sound3.load(),this.refs.sound3.play(),this.setState({display:q.sound3}),this.refs.sound3.volume=this.state.volume/100),"a"==e.key&&(this.refs.sound4.load(),this.refs.sound4.play(),this.setState({display:q.sound4}),this.refs.sound4.volume=this.state.volume/100),"s"==e.key&&(this.refs.sound5.load(),this.refs.sound5.play(),this.setState({display:q.sound5}),this.refs.sound5.volume=this.state.volume/100),"d"==e.key&&(this.refs.sound6.load(),this.refs.sound6.play(),this.setState({display:q.sound6}),this.refs.sound6.volume=this.state.volume/100),"z"==e.key&&(this.refs.sound7.load(),this.refs.sound7.play(),this.setState({display:q.sound7}),this.refs.sound7.volume=this.state.volume/100),"x"==e.key&&(this.refs.sound8.load(),this.refs.sound8.play(),this.setState({display:q.sound8}),this.refs.sound8.volume=this.state.volume/100),"c"==e.key&&(this.refs.sound9.load(),this.refs.sound9.play(),this.setState({display:q.sound9}),this.refs.sound9.volume=this.state.volume/100))}},{key:"handleVolume",value:function(e){this.setState({volume:parseInt(e.target.value)})}},{key:"handlePlay",value:function(){this.refs[this.state.song].play()}},{key:"handlePause",value:function(){this.refs[this.state.song].pause()}},{key:"handleNext",value:function(){this.refs[this.state.song].load();var e=Math.floor(5*Math.random()+1),a="song".concat(e);this.refs[a].volume=this.state.volume/100,this.refs[a].play(),this.setState({song:a})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("button",{autoFocus:!0,onKeyDown:this.shorcutPlay,ref:"focusButton",id:"focusButton"}," focus "),n.a.createElement("div",{className:"box row container",tabIndex:"-1",onFocus:function(){return e.refs.focusButton.focus()}},n.a.createElement("div",{className:"side-left row col-8 "},n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound1")},value:"Cymbal"}," Q "),n.a.createElement("button",{className:"col-4",onClick:function(){return e.playSound("sound2")}}," W "),n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound3")}}," E "),n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound4")}}," A "),n.a.createElement("button",{className:"col-4",onClick:function(){return e.playSound("sound5")}}," S"),n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound6")}},"  D"),n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound7")}}," Z "),n.a.createElement("button",{className:"col-4",onClick:function(){return e.playSound("sound8")}}," X"),n.a.createElement("button",{className:"col-3",onClick:function(){return e.playSound("sound9")}}," C")),n.a.createElement("div",{className:"side-right row col"},n.a.createElement("div",{className:"power "},n.a.createElement("span",null,"Power"),n.a.createElement("div",{className:"power-back",onClick:function(){return e.setState((function(e){return{play:!e.play}}))}},this.state.play?n.a.createElement("div",{className:"on"}," "):n.a.createElement("div",{className:"off"}," "))),n.a.createElement("div",{className:"display"},n.a.createElement("span",null," ",this.state.display)),n.a.createElement("div",{className:"volume"},n.a.createElement("input",{type:"range",min:"0",max:"100",value:this.state.volume,onChange:this.handleVolume})),n.a.createElement("div",{className:"playSong"},n.a.createElement("button",{onClick:function(){return e.handleNext()}}," Play a Song "),n.a.createElement("div",{className:"control"},n.a.createElement("span",{onClick:this.handlePlay}," ",n.a.createElement("i",{className:"fa fa-play"})," "),n.a.createElement("span",{onClick:this.handlePause}," ",n.a.createElement("i",{className:"fa fa-pause"})," "),n.a.createElement("span",{onClick:this.handleNext}," ",n.a.createElement("i",{className:"fa fa-forward"})," "))))),n.a.createElement("div",{className:"sound row"},n.a.createElement("audio",{controls:!0,className:"sound1 col-4",ref:"sound1"},n.a.createElement("source",{src:f.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound2 col-4",ref:"sound2"},n.a.createElement("source",{src:y.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound3 col-4",ref:"sound3"},n.a.createElement("source",{src:E.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound4 col-4",ref:"sound4"},n.a.createElement("source",{src:N.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"sound5 col-4",ref:"sound5"},n.a.createElement("source",{src:g.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound6 col-4",ref:"sound6"},n.a.createElement("source",{src:w.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound7 col-4",ref:"sound7"},n.a.createElement("source",{src:C.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"sound8 col-4",ref:"sound8"},n.a.createElement("source",{src:j.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"sound9 col-4",ref:"sound9"},n.a.createElement("source",{src:H.a,type:"audio/wav"})),n.a.createElement("audio",{controls:!0,className:"song1 col-4",ref:"song1"},n.a.createElement("source",{src:I.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"song2 col-4",ref:"song2"},n.a.createElement("source",{src:V.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"song3 col-4",ref:"song3"},n.a.createElement("source",{src:W.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"song4 col-4",ref:"song4"},n.a.createElement("source",{src:F.a,type:"audio/mpeg"})),n.a.createElement("audio",{controls:!0,className:"song5 col-4",ref:"song5"},n.a.createElement("source",{src:M.a,type:"audio/mpeg"}))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",null," Created and Designed By: "),n.a.createElement("div",{style:{color:"lightblue"}}," Andreas Sujono ")))}}]),a}(s.Component);t(28);l.a.render(n.a.createElement(z,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ea461cb3.chunk.js.map