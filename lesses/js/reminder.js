try{
    if(Promise){}
}
catch (e){
    window.Promise = function(fn) {
        var state = "pending";
        var callbacks = [];
        var result = null;
        function res_rej(a,b,c) {
            if(state!=="pending"){
                return;
            }
            if(b&&b["then"]&&typeof b["then"] === 'function'){
                b["then"](resolve, reject);
                return;
            }
            state = a;
            result = b;
            callbacks.forEach(function (obj) {
                obj[c](result);
            });
        }
        function resolve(value) {
            res_rej("fulfilled",value,0);
        }
        function reject(reason) {
            res_rej("rejected",reason,1);
        }
        this.then = function (onFulfilled,onRejected) {
            return new Promise(function (resolve, reject) {
                switch (state){
                    case "pending":
                        callbacks.push([
                            function () {
                                resolve(onFulfilled(result));
                            },
                            function () {
                                reject(onRejected(result));
                            }
                        ]);
                        break;
                    case "fulfilled":
                        resolve(onFulfilled(result));
                        break;
                    case "rejected":
                        reject(onRejected(result));
                        break;
                }
            });
        };
        this.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        fn(resolve,reject);
    };
    Promise.resolve = function (value) {
        return new Promise(function(resolve) {
            resolve(value);
        });
    };
    Promise.reject = function (reason) {
        return new Promise(function(resolve, reject) {
            reject(reason);
        });
    };
    Promise.all = function (promises) {
        return new Promise(function(resolve, reject) {
            var count = 0;
            var values = [];
            for (var i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(function(value) {
                    values.push(value);
                    if (count === promises.length-1) {
                        resolve(values);
                    }
                    else{
                        count++;
                    }
                }, function(reason) {
                    reject(reason);
                });
            }
        });
    };
    Promise.race = function (promises) {
        return new Promise(function(resolve, reject) {
            for (var i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(function(value) {
                    resolve(value);
                }, function(reason) {
                    reject(reason);
                })
            }
        });
    };
}
(function () {
    // Ani 动画
    function extend(t,o) {
        for(var n in o){
            t[n]=o[n] ;
        }
    }
    function type(v) {
        return Object.prototype.toString.apply(v).replace("[object ","").replace("]","");
    }
    function each(v,f) {
        var t = type(v);
        if (t==="Array"||t==="NodeList") {
            for (var i=0;i<v.length;i++) {
                f(i,v[i]);
            }
        }
        else if(t==="Object"){
            for (var key in v) {
                f(key,v[key]);
            }
        }
        else if(t==="Number"){
            for (var i=0;i<v;i++) {
                f(i,v);
            }
        }
        else{
            throw new TypeError("该对象不支持遍历");
        }
    }
    String.prototype.inArray = function(arr){
        for(var i=0;i<arr.length;i++){
            if(this==arr[i]){
                return true;
            }
        }
        return false;
    }
    function Animation(selector) {
        if(type(selector)==="String"){
            this.els = document.querySelectorAll(selector);
            if(this.els.length===0){
                throw new Error("选择器未选到元素");
            }
        }
        else if(type(selector)==="Array"){
            this.els = selector;
        }
        else {
            this.els = [selector];
        }
        return this;
    }
    function animate(xs,ys,time,callback,self) {
        var changeArrs = [];
        for(var k1 in xs){
            var obj = {};
            for(var k2 in ys){
                if(k1==k2){
                    obj.p = k1;
                    obj.current = obj.x = xs[k1];
                    obj.y = ys[k2];
                    break;
                }
            }
            changeArrs.push(obj);
        }
        var exec = function (v,current,p) {
            if(p.inArray(["width","height","left","top","right","bottom","fontSize","marginLeft","marginTop","marginRight","marginBottom",
                    "paddingLeft","paddingTop","paddingRight","paddingBottom"])){
                v.style[p] = current + "px";
            }
            else if(p.inArray(["opacity"])){
                v.style[p] = current;
            }
            else{
                var tmp;
                if(p.inArray(["scaleX","scaleY"])){
                    tmp = p+"("+ current + ")";
                }
                else if(p.inArray(["translateX","translateY"])){
                    tmp = p+"("+ current + "px)";
                }
                else if(p.inArray(["rotate","skewX","skewY"])){
                    tmp = p+"("+ current + "deg)";
                }
                if(new RegExp(p).test(v.style.transform)){
                    v.style.transform = v.style.transform.replace(new RegExp(p+"[\\w\\W]+\\)"),tmp);
                }
                else{
                    v.style.transform += tmp;
                }
            }
        };
        function temp(resolve) {
            each(changeArrs,function (k,v) {
                var n = Math.ceil(time * 60 / 1000);
                var step = (v.y-v.x)/n;
                function change() {
                    n--;
                    v.current+=step;
                    if(n>0){
                        if(n===1){
                            v.current = v.y;
                        }
                        each(self.els,function (k3,v3) {
                            exec(v3,v.current,v.p);
                        });
                        requestAnimationFrame(change);
                    }
                    else{
                        if(k==changeArrs.length-1){
                            callback&&callback();
                            resolve();
                        }
                    }
                }
                requestAnimationFrame(change);
            });
        }
        if(self.Promise){
            self.Promise = self.Promise.then(function () {
                return new Promise(temp);
            });
        }
        else{
            self.Promise = new Promise(temp);
        }
        return self;
    }
    extend(Animation.prototype,{
        W:function (x,y,time,callback) {
            return animate({width:x},{width:y},time,callback,this);
        },
        H:function (x,y,time,callback) {
            return animate({height:x},{height:y},time,callback,this);
        },
        L:function (x,y,time,callback) {
            return animate({left:x},{left:y},time,callback,this);
        },
        T:function (x,y,time,callback) {
            return animate({top:x},{top:y},time,callback,this);
        },
        R:function (x,y,time,callback) {
            return animate({right:x},{right:y},time,callback,this);
        },
        B:function (x,y,time,callback) {
            return animate({bottom:x},{bottom:y},time,callback,this);
        },
        marginTop:function (x,y,time,callback) {
            return animate({marginTop:x},{marginTop:y},time,callback,this);
        },
        marginRight:function (x,y,time,callback) {
            return animate({marginRight:x},{marginRight:y},time,callback,this);
        },
        marginBottom:function (x,y,time,callback) {
            return animate({marginBottom:x},{marginBottom:y},time,callback,this);
        },
        marginLeft:function (x,y,time,callback) {
            return animate({marginLeft:x},{marginLeft:y},time,callback,this);
        },
        margin:function (m1,m2,time,callback) {
            return animate({
                marginTop:m1[0],
                marginRight:m1[1],
                marginBottom:m1[2],
                marginLeft:m1[3]
            },{
                marginTop:m2[0],
                marginRight:m2[1],
                marginBottom:m2[2],
                marginLeft:m2[3]
            },time,callback,this);
        },
        paddingTop:function (x,y,time,callback) {
            return animate({paddingTop:x},{paddingTop:y},time,callback,this);
        },
        paddingRight:function (x,y,time,callback) {
            return animate({paddingRight:x},{paddingRight:y},time,callback,this);
        },
        paddingBottom:function (x,y,time,callback) {
            return animate({paddingBottom:x},{paddingBottom:y},time,callback,this);
        },
        paddingLeft:function (x,y,time,callback) {
            return animate({paddingLeft:x},{paddingLeft:y},time,callback,this);
        },
        padding:function (p1,p2,time,callback) {
            return animate({
                paddingTop:p1[0],
                paddingRight:p1[1],
                paddingBottom:p1[2],
                paddingLeft:p1[3]
            },{
                paddingTop:p2[0],
                paddingRight:p2[1],
                paddingBottom:p2[2],
                paddingLeft:p2[3]
            },time,callback,this);
        },
        fontSize:function (x,y,time,callback) {
            return animate({fontSize:x},{fontSize:y},time,callback,this);
        },
        opacity:function (x,y,time,callback) {
            return animate({opacity:x},{opacity:y},time,callback,this);
        },
        scaleX:function (x,y,time,callback) {
            return animate({scaleX:x},{scaleX:y},time,callback,this);
        },
        scaleY:function (x,y,time,callback) {
            return animate({scaleY:x},{scaleY:y},time,callback,this);
        },
        translateX:function (x,y,time,callback) {
            return animate({translateX:x},{translateX:y},time,callback,this);
        },
        translateY:function (x,y,time,callback) {
            return animate({translateX:x},{translateX:y},time,callback,this);
        },
        rotate:function (x,y,time,callback) {
            return animate({rotate:x},{rotate:y},time,callback,this);
        },
        skewX:function (x,y,time,callback) {
            return animate({skewX:x},{skewX:y},time,callback,this);
        },
        skewY:function (x,y,time,callback) {
            return animate({skewY:x},{skewY:y},time,callback,this);
        },
        animate:function (xs,ys,time,callback) {
            return animate(xs,ys,time,callback,this);
        },
        translate:function (p1,p2,time,callback) {
            return animate({translateX:p1[0],translateY:p1[1]},{translateX:p2[0],translateY:p2[1]},time,callback,this);
        },
        scale:function (v1,v2,time,callback) {
            return animate({scaleX:v1[0],scaleY:v1[1]},{scaleX:v2[0],scaleY:v2[1]},time,callback,this);
        },
        skew:function (d1,d2,time,callback) {
            return animate({skewX:d1[0],skewY:d1[1]},{skewX:d2[0],skewY:d2[1]},time,callback,this);
        },
        rgba:function (arr1,arr2,time,callback) {
            var self = this;
            function temp(resolve) {
                var n = Math.ceil(time * 60 / 1000);
                var step = [];
                each(4,function (i,v) {
                    step.push((arr2[i]-arr1[i])/n);
                });
                var current = arr1;
                function change() {
                    n--;
                    each(4,function (i,v) {
                        current[i]+=step[i];
                    });
                    if(n>0){
                        if(n===1){
                            current = arr2;
                        }
                        each(self.els,function (k,v) {
                            v.style.backgroundColor = "rgba("+current[0]+","+current[1]+","+current[2]+","+current[3]+")";
                        });
                        requestAnimationFrame(change);
                    }
                    else{
                        callback&&callback();
                        resolve();
                    }
                }
                requestAnimationFrame(change);
            }
            if(this.Promise){
                this.Promise = this.Promise.then(function () {
                    return new Promise(temp);
                });
            }
            else{
                this.Promise = new Promise(temp);
            }
            return this;
        }
    });
    window.Ani = function (selector) {
        return new Animation(selector);
    };

    //Reminder
    var W = window.innerWidth;
    var H = window.innerHeight;
    function create(t,o) {
        var el = document.createElement(t);
        if(o){
            each(o,function (k,v) {
                el.setAttribute(k,v);
            });
        }
        return el;
    }
    function append(dom,arr) {
        if(type(arr)=="Array"){
            for(var i=0;i<arr.length;i++){
                dom.appendChild(arr[i]);
            }
        }
        else{
            dom.appendChild(arr);
        }
    }
    function remove(dom,arr) {
        function doRemove(p,c) {
            if(c.parentNode===p){
                p.removeChild(c);
            }
        }
        if(type(arr)=="Array"){
            for(var i=0;i<arr.length;i++){
                doRemove(dom,arr[i]);
            }
        }
        else{
            doRemove(dom,arr);
        }
    }
    function css(dom,obj) {
        each(obj,function (k,v) {
            dom.style[k] = v;
        });
    }
    function getEl(id) {
        return document.getElementById(id);
    }

    //default cfg
    var cfgs = [
        {
            mode:1, //模式
            text:"你的文字",
            color:"#4a4a4a",
            logo:"right",//使用哪张图片  warning,help,info,smile,cry,right,wrong
            backgroundColor:"white",
            opacity:1,
            borderWidth:1,
            borderColor:"#ccc",
            borderRadius:"0px",
            boxShadow:'0 3px 15px rgba(0, 0, 0, 0.4)',
            stayTime:2000,
            animationTime:200,
            rootPadding: '20px 80px',
            rootPaddingLeft:'40px',
            textMarginLeft:'40px',
        },
        {
            mode:13,
            title:"提示",
            text:"确认删除吗？",
            confirm:"确定",
            cancel:"取消",
            boxShadow:'0 3px 15px rgba(0, 0, 0, 0.4)',
            animationTime:200,
            callback:function () {}
        }];
    function modeCommon1(_cfg) {
        var root = getEl("ReminderMode1");
        root&&remove(document.body,root);
        root = create("div");
        root.id = "ReminderMode1";

        var cfg={};
        extend(cfg,cfgs[0]);
        _cfg && extend(cfg,_cfg);
        root.className = "mode1Root";
        css(root,{
            backgroundColor:cfg.backgroundColor,
            opacity:cfg.opacity,
            border:cfg.borderWidth + "px solid " + cfg.borderColor,
            borderRadius:cfg.borderRadius,
            boxShadow:cfg.boxShadow,
            padding:cfg.rootPadding,
            paddingLeft:cfg.rootPaddingLeft,
        });

        var textdiv = create("div");
        textdiv.className = "mode1Text";
        textdiv.innerText= cfg.text;
        css(textdiv,{
            color:cfg.color,
            marginLeft:cfg.textMarginLeft
        });
        if(cfg.logo.inArray(["warning","help","info","smile","cry","right","wrong"])){
            var imgdiv = create("div");
            imgdiv.className = cfg.logo + "C";
            append(root,[imgdiv,textdiv]);
        }
        else{
            append(root,[textdiv]);
        }
        css(root,{marginLeft:"10000px"});
        append(document.body,root);

        var rootW,rootH;
        rootW = root.clientWidth + cfg.borderWidth * 2;
        rootH = root.clientHeight + cfg.borderWidth * 2;


        function animateCommon1(x,y) {
            Ani(root).animate({marginLeft:x[0], top:x[1]},{marginLeft:y[0], top:y[1]},cfg.animationTime,function () {
                setTimeout(function () {
                    Ani(root).animate({marginLeft:y[0], top:y[1]},{marginLeft:x[0], top:x[1]},cfg.animationTime,function () {
                        remove(document.body,root);
                    });
                },cfg.stayTime);
            });
        }
        function animateCommon2(x,y) {
            Ani(root).scale([x[0],x[1]],[y[0],y[1]],cfg.animationTime,function () {
                setTimeout(function () {
                    Ani(root).scale([y[0],y[1]],[x[0],x[1]],cfg.animationTime,function () {
                        remove(document.body,root);
                    });
                },cfg.stayTime);
            });
        }
        function animateCommon3(x,y) {
            Ani(root).opacity(x,y,cfg.animationTime,function () {
                setTimeout(function () {
                    Ani(root).opacity(y,x,cfg.animationTime,function () {
                        remove(document.body,root);
                    });
                },cfg.stayTime);
            });
        }
        function animateCommon4() {
            var n = Math.ceil(cfg.animationTime / 50);
            var flag = true;
            var handle = Ani(root);
            function toggle() {
                if(flag){
                    handle.translateX(-5,5,50);
                }
                else{
                    handle.translateX(5,-5,50);
                }
                flag = !flag;
            }
            while (n>1){
                toggle();
                n--;
            }
            function callback() {
                    setTimeout(function () {
                        remove(document.body,root);
                    },cfg.stayTime);
            }
            if(flag){
                handle.translateX(-5,0,50,callback);
            }
            else{
                handle.translateX(5,0,50,callback);
            }
        }
        function animateCommon5(x,y) {
            Ani(root).animate({marginLeft:x[0], top:x[1]},{marginLeft:y[0], top:y[1]},cfg.animationTime,function () {
                setTimeout(function () {
                    remove(document.body,root);
                },cfg.stayTime);
            });
        }
        switch (cfg.mode){
            case 1:
                animateCommon1([-rootW/2,-rootH],[-rootW/2,0]);break;
            case 2:
                animateCommon1([-rootW-W/2,0],[-rootW/2,0]);break;
            case 3:
                animateCommon1([W/2,0],[-rootW/2,0]);break;
            case 4:
                animateCommon1([-rootW/2,H],[-rootW/2,0]);break;
            case 5:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:0,
                });
                animateCommon2([0.5,0.5],[1,1]);break;
            case 6:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:0,
                });
                animateCommon3(0,1);break;
            case 7:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:0,
                });
                animateCommon4();break;
            case 8:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:(H-rootH)/2+"px",
                });
                animateCommon2([0.5,0.5],[1,1]);break;
            case 9:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:(H-rootH)/2+"px",
                });
                animateCommon3(0,1);break;
            case 10:
                css(root,{
                    marginLeft:-rootW/2 + "px",
                    top:(H-rootH)/2+"px",
                });
                animateCommon4();break;
            case 11:
                animateCommon5([-rootW/2,H],[-rootW/2,H*0.7]);break;
        }
    }
    function modeCommon2(_cfg) {
        var mode2Wrapper = create("div",{id:"mode2Wrapper"});
        var mode2Root = create("div",{id:"mode2Root"});
        append(mode2Wrapper,mode2Root);
        var mode2Header = create("div",{"class":"mode2Header"});
        var mode2Body = create("div",{"class":"mode2Body"});
        var mode2Footer = create("div",{"class":"mode2Footer"});
        append(mode2Root,[mode2Header,mode2Body,mode2Footer]);
        var mode2Title = create("span",{"class":"mode2Title"});
        var mode2Close = create("span",{"class":"mode2Close"});
        var mode2OK = create("span",{"class":"mode2OK"});
        var mode2Cancel = create("span",{"class":"mode2Cancel"});
        append(mode2Header,[mode2Title,mode2Close]);
        append(mode2Footer,[mode2OK,mode2Cancel]);

        var cfg={};
        extend(cfg,cfgs[1]);
        _cfg && extend(cfg,_cfg);
        mode2Title.innerText = cfg.title;
        mode2Close.innerText = "×";
        mode2Body.innerText = cfg.text;
        mode2OK.innerText = cfg.confirm;
        mode2Cancel.innerText = cfg.cancel;
        css(mode2Root,{boxShadow:cfg.boxShadow});
        append(document.body,mode2Wrapper);

        function animateCommon1(x,y) {
            Ani(mode2Wrapper).rgba([0,0,0,0],[0,0,0,0.2],100,function () {
                css(mode2Root,{
                    display:"block",
                    transform:"translateY("+ x[0] + "px)",
                    opacity:x[0]
                });
                Ani(mode2Root).animate({translateY:x[0], opacity:x[1]},{translateY:y[0], opacity:y[1]},cfg.animationTime);
                mode2OK.onclick = mode2Close.onclick = mode2Cancel.onclick = function () {
                    var _this = this;
                    Ani(mode2Root).animate({translateY:y[0], opacity:y[1]},{translateY:x[0], opacity:x[1]},200,function () {
                        css(mode2Root,{display:"none"});
                        Ani(mode2Wrapper).rgba([0,0,0,0.2],[0,0,0,0],100,function () {
                            remove(document.body,mode2Wrapper);
                            if(_this===mode2OK){
                                cfg.callback&&cfg.callback();
                            }
                        })
                    });
                };
            });
        }
        switch (cfg.mode){
            case 12:
                animateCommon1([-30,0.5],[0,1]);break;
            case 2:
                animateCommon1([-rootW-W/2,0],[-rootW/2,0]);break;
        }
    }
    window.Reminder = function (_cfg) {
        switch (_cfg.mode){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                modeCommon1(_cfg);break;
            case 12:
                modeCommon2(_cfg);break;
            default:
                throw new TypeError("模式不正确!");break;
        }
    };
}());