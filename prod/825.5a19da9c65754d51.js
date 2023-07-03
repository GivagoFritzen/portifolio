"use strict";(self.webpackChunkportifolio=self.webpackChunkportifolio||[]).push([[825],{2825:(f,d,a)=>{a.r(d),a.d(d,{SpaceGameModule:()=>C});const n={x:window.innerWidth/2,y:window.innerHeight/2,speed:18,height:73,width:43,imgSrc:"../../../../assets/game/spaceship.svg"},c={height:window.innerHeight,width:window.innerWidth};var e=a(8274),h=a(5479),g=a(385);let l=(()=>{class i{constructor(t,o){this.router=t,this.renderer=o,this.canvasName="canvasSpaceGame",this.headerSize=65,this.frameNumber=0,this.showGameOver=!1,this.playerImg=new Image,this.obstacleImg=new Image,this.obstacles=[],this.resetGame=()=>{n.x=window.innerWidth/2,n.y=window.innerHeight/2,this.obstacles=[],clearInterval(this.gameLoop),this.cleanGround(),this.showGameOver=!1,this.startGameLoop()},this.goHome=()=>{this.router.navigateByUrl("")},null==localStorage.getItem("Secret")&&this.goHome()}ngAfterViewInit(){const t=this.renderer.createElement("canvas");t.setAttribute("id",this.canvasName),document.body.appendChild(t),this.ctx=t.getContext("2d"),this.ctx.canvas.width=window.innerWidth,this.ctx.canvas.height=window.innerHeight,this.loadAssets(),this.startGameLoop()}ngOnDestroy(){clearInterval(this.gameLoop);const t=document.getElementById(this.canvasName);t&&t.remove()}onKeydownHandler(t){this.movePlayer(t,"keydown")}moveLeft(){0===n.x||n.x<0?n.x=0:n.x-=n.speed}moveRight(){n.x+n.width===c.width||n.x+n.width>c.width?n.x=c.width-n.width:n.x+=n.speed}moveUp(){n.y===0+this.headerSize||n.y<this.headerSize?n.y=this.headerSize:n.y-=n.speed}moveDown(){n.y+n.height===c.height||n.y+n.height>c.height?n.y=c.height-n.height:n.y+=n.speed}startGameLoop(){this.gameLoop=setInterval(()=>{this.showGameOver||(this.frameNumber+=1,this.cleanGround(),this.createObstacles(),this.moveObstacles(),this.drawPlayer())},10)}loadAssets(){this.playerImg.src=n.imgSrc,this.obstacleImg.src="../../../../assets/game/star.svg"}drawPlayer(){this.ctx.drawImage(this.playerImg,n.x,n.y,n.width,n.height)}movePlayer(t,o){"keydown"===o&&("ArrowLeft"===t.key||"A"===t.key||"a"===t.key?this.moveLeft():"ArrowRight"===t.key||"D"===t.key||"d"===t.key?this.moveRight():"ArrowUp"===t.key||"W"===t.key||"w"===t.key?this.moveUp():("ArrowDown"===t.key||"S"===t.key||"s"===t.key)&&this.moveDown())}everyInterval(t){return this.frameNumber/t%1==0}createObstacles(){if(1===this.frameNumber||this.everyInterval(45)){const t=Math.random()<.5,o={x:t?Math.floor(Math.random()*window.innerWidth):0,y:t?0:Math.floor(Math.random()*window.innerHeight),speed:Math.floor(4*Math.random())+1,height:50,width:55,fallAxisY:t};window.innerWidth<=768&&(o.width/=2,o.height/=2),this.obstacles.push(o)}}moveObstacles(){this.obstacles.forEach((t,o)=>{t.fallAxisY?t.y+=t.speed:t.x+=t.speed,this.ctx.drawImage(this.obstacleImg,t.x,t.y,t.width,t.height),this.detectCrash(t)&&(this.showGameOver=!0),t.y>c.height&&this.obstacles.splice(o,1)})}detectCrash(t){return!(n.y+n.height<t.y||n.y>t.y+t.height||n.x+n.width<t.x||n.x>t.x+t.width)}cleanGround(){this.ctx.clearRect(0,0,c.width,c.height)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(e.Qsj))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-space-game"]],hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(M){return o.onKeydownHandler(M)},!1,e.evT)},decls:12,vars:3,consts:[["title","modal.game-over","buttonText","modal.home",3,"show","functionToCloseModal","functionToOkButtonModal"],[1,"directional"],[1,"crossTop",3,"click"],[1,"triangle"],[1,"crossBottom",3,"click"],[1,"crossLeft",3,"click"],[1,"crossRight",3,"click"],[1,"circle"]],template:function(t,o){1&t&&(e._UZ(0,"modal",0),e.TgZ(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.moveUp()}),e._UZ(3,"div",3),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.moveDown()}),e._UZ(5,"div",3),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.moveLeft()}),e._UZ(7,"div",3),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return o.moveRight()}),e._UZ(9,"div",3),e.qZA(),e.TgZ(10,"div"),e._UZ(11,"div",7),e.qZA()()),2&t&&e.Q6J("show",o.showGameOver)("functionToCloseModal",o.resetGame)("functionToOkButtonModal",o.goHome)},dependencies:[g.z],styles:[".joystick[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-around}.joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:flex;flex-direction:column;transform:translateY(10px)}.joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:white;border:none;border-radius:16px;color:#000;font-size:15px;font-weight:700;height:25px;width:90px}@media only screen and (min-width: 700px){.joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:17px;width:100px}}.joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   #button-linkedin[_ngcontent-%COMP%]{transform:translateY(10px)}.joystick[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   #button-github[_ngcontent-%COMP%]{transform:translateY(20px)}.joystick[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:100%;color:#fff;font-weight:700;height:30px;width:30px}@media only screen and (min-width: 700px){.joystick[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px;width:40px}}.joystick[_ngcontent-%COMP%]   #button-a[_ngcontent-%COMP%]{background-color:green}.joystick[_ngcontent-%COMP%]   #button-b[_ngcontent-%COMP%]{background-color:orange;transform:translate(5px,35px)}@media only screen and (min-width: 425px){.joystick[_ngcontent-%COMP%]   #button-b[_ngcontent-%COMP%]{transform:translate(15px,45px)}}.joystick[_ngcontent-%COMP%]   #button-b[_ngcontent-%COMP%]:active{box-shadow:0 0 #666;transform:translate(5px,38px)}@media only screen and (min-width: 425px){.joystick[_ngcontent-%COMP%]   #button-b[_ngcontent-%COMP%]:active{transform:translate(15px,45px)}}.joystick[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .joystick[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:0 3px #555}.joystick[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{box-shadow:0 0 #666;transform:translateY(3px)}.directional[_ngcontent-%COMP%]{width:50px;padding-left:15px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]{padding-left:0}}.directional[_ngcontent-%COMP%] > button[_ngcontent-%COMP%], .directional[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-items:center;background-color:#fff;border-radius:15%;display:flex;height:25px;justify-content:center;position:absolute;width:25px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%] > button[_ngcontent-%COMP%], .directional[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:35px;width:35px}}.directional[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{border-top:10px solid transparent;border-right:20px solid rgb(201,201,201);border-bottom:10px solid transparent;height:0;width:0}.directional[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#c9c9c9;border-radius:50%;width:20px;height:20px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{height:25px;width:25px}}.directional[_ngcontent-%COMP%]   .crossTop[_ngcontent-%COMP%]{margin-top:-25px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]   .crossTop[_ngcontent-%COMP%]{margin-top:-30px}}.directional[_ngcontent-%COMP%]   .crossTop[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{transform:rotate(90deg)}.directional[_ngcontent-%COMP%]   .crossBottom[_ngcontent-%COMP%]{margin-top:25px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]   .crossBottom[_ngcontent-%COMP%]{margin-top:30px}}.directional[_ngcontent-%COMP%]   .crossBottom[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{transform:rotate(270deg)}.directional[_ngcontent-%COMP%]   .crossLeft[_ngcontent-%COMP%]{margin-left:-25px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]   .crossLeft[_ngcontent-%COMP%]{margin-left:-30px}}.directional[_ngcontent-%COMP%]   .crossRight[_ngcontent-%COMP%]{margin-left:25px}@media only screen and (min-width: 700px){.directional[_ngcontent-%COMP%]   .crossRight[_ngcontent-%COMP%]{margin-left:30px}}.directional[_ngcontent-%COMP%]   .crossRight[_ngcontent-%COMP%] > .triangle[_ngcontent-%COMP%]{transform:rotate(180deg)}canvas[_ngcontent-%COMP%]{background-image:url(bg_space_seamless.5bb553c6473644ed.png);background-color:#090a0f;left:0;position:fixed;top:0}.directional[_ngcontent-%COMP%]{bottom:85px;left:45px;position:fixed;z-index:1}@media only screen and (min-width: 769px){.directional[_ngcontent-%COMP%]{display:none}}"]}),i})();var m=a(6515),p=a(6895);let C=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,m.aw,h.Bz.forChild([{path:"",component:l}])]}),i})()}}]);