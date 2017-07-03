window.CRange = function (rootElementId,minValue,maxValue,startValue,callback,mycfg) {
    'use strict';
    this.cfg = {
        bgw:300,
        bgh:4,
        bgcolor:"#a2a2a2",
        vlcolor:"#a2a2a2",
        vlt:100,
        mvwh:16,
        mvr:8,
        mvbc:"#a2a2a2",
        dotwh:6,
        dotr:3,
        dotc:"#a2a2a2",
        lbbc:"#b1b1b1",
        lbc:"white",
    };
    //region elements

    this.root = document.getElementById(rootElementId);
    this.bg = document.createElement("div");
    this.vl = document.createElement("div");
    this.mv = document.createElement("div");
    this.dot = document.createElement("div");
    this.lb = document.createElement("div");
    // endregion

    //region create object

    this.minVlaue = minValue;
    this.maxValue = maxValue;
    this.startValue = startValue;
    this.callback = callback;
    this.vlcurrent = startValue;
    this.mycfg = mycfg?mycfg:{};
    //endregion

    this.prew = 0;
    this.lbw = null;
    this.w = 0;
    this.run = function () {
        this.init();
        this.setElements();
        this.addEvents();
    };
    this.init = function () {
        this.setcfg();
        window.CRange.attraction = this.root.id;
    };
    this.setcfg = function () {
        for(var name in this.mycfg){
            this.cfg[name] = this.mycfg[name];
        }
    };
    this.setElements = function () {
        this.setbg();
        this.setvl();
        this.setmv();
        this.setdot();
        this.setlb();
        this.callback(this.vlcurrent);
    };
    this.addEvents = function () {
        this.bgEvent();
        this.mvEvent();
        this.keyEvent();
    };
    //region setElements

    this.setbg = function () {
        this.root.appendChild(this.bg);
        this.bg.style.width = this.cfg.bgw + "px";
        this.bg.style.height = this.cfg.bgh + "px";
        this.bg.style.border = "1px solid " + this.cfg.bgcolor;
        this.bg.style.borderRadius = this.cfg.bgh / 2 + "px";
    };
    this.setvl = function () {
        this.bg.appendChild(this.vl);
        this.vl.style.position = "absolute";
        this.vl.style.height = this.cfg.bgh + "px";
        this.vl.style.backgroundColor = this.cfg.vlcolor;
        this.setvlw();
    };
    this.setvlw = function () {
        var _this = this;
        this.w = (this.vlcurrent-this.minVlaue)*this.cfg.bgw/(this.maxValue-this.minVlaue);
        if(this.w<0){
            this.w = 0;
        }
        else if(this.w>this.cfg.bgw){
            this.w = this.cfg.bgw;
        }
        var count = this.cfg.vlt/10;
        var step = (this.w - this.prew)/count;
        var c = this.prew;
        var change = function () {
            if(count>0){
                c +=step;
                _this.vl.style.width = c + "px";
                count--;
                setTimeout(change,10);
            }
            else{
                _this.prew = _this.w;
            }
        };
        setTimeout(change,10);
    };
    this.setmv = function () {
        this.vl.appendChild(this.mv);
        this.mv.style.position = "absolute";
        this.mv.style.width = this.mv.style.height = this.cfg.mvwh + "px";
        this.mv.style.border = "1px solid " + this.cfg.mvbc;
        this.mv.style.right = -(this.cfg.mvwh + 2)/2 + "px";
        this.mv.style.top = -(this.cfg.mvwh - this.cfg.bgh + 2)/2 + "px";
        this.mv.style.backgroundColor  = "white";
        this.mv.style.borderRadius = this.cfg.mvr + "px";
    };
    this.setdot = function () {
        this.mv.appendChild(this.dot);
        this.dot.style.position = "absolute";
        this.dot.style.width = this.dot.style.height = this.cfg.dotwh + "px";
        this.dot.style.backgroundColor  = this.cfg.dotc;
        this.dot.style.left = this.dot.style.top = (this.cfg.mvwh - this.cfg.dotwh)/2 + "px";
        this.dot.style.borderRadius = this.cfg.dotr + "px";
    };
    this.setlb = function () {
        this.mv.appendChild(this.lb);
        this.lb.style.position = "absolute";
        this.lb.style.padding = "1px 5px";
        this.lb.style.backgroundColor = this.cfg.lbbc;
        this.lb.style.color = this.cfg.lbc;
        this.lb.style.borderRadius = "3px";
        this.lb.style.fontSize = "10px";
        this.lb.style.top = -20 + "px";
        this.setlbl();
    };
    this.setlbl = function () {
        this.lb.innerText = this.vlcurrent;
        this.lbw = this.lb.clientWidth;
        if(this.lbw <= this.cfg.mvwh + 2){
            this.lb.style.left = 0 + "px";
        }
        else{
            this.lb.style.left = -(this.lbw - this.cfg.mvwh)/2 + "px";
        }
    };
    // endregion

    //region addEvents

    this.bgEvent = function () {
        var _this = this;
        var thisclick = function (e) {
            window.CRange.attraction = _this.root.id;
            _this.vlcurrent = Math.round((e.offsetX/_this.cfg.bgw)*(_this.maxValue - _this.minVlaue) + _this.minVlaue);
            if(_this.vlcurrent<_this.minVlaue){
                _this.vlcurrent = _this.minVlaue;
            }
            else if(_this.vlcurrent > _this.maxValue){
                _this.vlcurrent = _this.maxValue;
            }
            _this.setlbl();
            _this.setvlw();
            _this.callback(_this.vlcurrent);
        };
        this.bg.addEventListener("click",thisclick,false);
    };
    this.mvEvent = function () {
        var _this = this;
        var x;
        var thisw = this.w;
        var md = function (e) {
            x = e.clientX;
            thisw = _this.w;
            document.addEventListener("mousemove",mm,false);
            document.addEventListener("mouseup", mu, false);
        };
        var mm = function (e) {
            window.getSelection().removeAllRanges();
            var dx = e.clientX - x;
            _this.w  = thisw + dx;
            if(_this.w<0){
                _this.w = 0;
            }
            else if(_this.w > _this.cfg.bgw){
                _this.w = _this.cfg.bgw;
            }
            _this.prew = _this.w;
            _this.vlcurrent = Math.round((_this.w/_this.cfg.bgw)*(_this.maxValue - _this.minVlaue) + _this.minVlaue);
            if(_this.vlcurrent<_this.minVlaue){
                _this.vlcurrent = _this.minVlaue;
            }
            else if(_this.vlcurrent > _this.maxValue){
                _this.vlcurrent = _this.maxValue;
            }
            _this.vl.style.width = _this.w + "px";
            _this.setlbl();
            _this.callback(_this.vlcurrent);
        };
        var mu = function (e) {
            window.CRange.attraction = _this.root.id;
            thisw = _this.w;
            document.removeEventListener("mousemove", mm, false);
            document.removeEventListener("mouseup", mu, false);
        };
        this.mv.addEventListener("mousedown",md,false);
        this.mv.addEventListener("click",function (e) {
            e.stopPropagation();
        },false);
    };
    this.keyEvent = function () {
        var _this = this;
        var keydown = function (e) {
            if(window.CRange.attraction == _this.root.id){
                if(e.keyCode==38||e.keyCode==39){
                    _this.vlcurrent+=1;
                    if(_this.vlcurrent > _this.maxValue){
                        _this.vlcurrent = _this.maxValue;
                    }
                    _this.setlbl();
                    _this.w = (_this.vlcurrent-_this.minVlaue)*_this.cfg.bgw/(_this.maxValue-_this.minVlaue);
                    if(_this.w<0){
                        _this.w = 0;
                    }
                    else if(_this.w>_this.cfg.bgw){
                        _this.w = _this.cfg.bgw;
                    }
                    _this.vl.style.width = _this.w + "px";
                    _this.prew = _this.w;
                }
                else if(e.keyCode==37||e.keyCode==40){
                    _this.vlcurrent-=1;
                    if(_this.vlcurrent<_this.minVlaue){
                        _this.vlcurrent = _this.minVlaue;
                    }
                    _this.setlbl();
                    _this.w = (_this.vlcurrent-_this.minVlaue)*_this.cfg.bgw/(_this.maxValue-_this.minVlaue);
                    if(_this.w<0){
                        _this.w = 0;
                    }
                    else if(_this.w>_this.cfg.bgw){
                        _this.w = _this.cfg.bgw;
                    }
                    _this.vl.style.width = _this.w + "px";
                    _this.prew = _this.w;
                }
                _this.callback(_this.vlcurrent);
            }
        };
        document.addEventListener("keydown",keydown,false);
    };
    //endregion

};