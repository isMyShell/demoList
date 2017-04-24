/**
 * public download app bar
 * depend on Zepto.js
 */
;
(function($) {
    var AppDownBar = function(options) {
        options = options || {};

        this.appSrc = options.appSrc || ""; // 跳转到APP的约定地址
        this.appPro = options.appPro || "baoku"; // APP约定地址
        this.qqApp = options.qqApp || "https://static.51kupai.com/app/download.html"; // 应用宝链接地址
        this.downHref = options.downHref || "https://static.51kupai.com/app/download.html"; // APP下载地址
        this.isPaddingBtm = options.isPaddingBtm == undefined ? true : options.isPaddingBtm; // true or false 是否给body增加底部内边距
		
		var channel = pageAppCommon.getQueryString('channel');
		
		if(this.qqApp == 'https://static.51kupai.com/app/download.html' && channel != ''){
			this.qqApp += '?channel=' + channel;
		}
		
		if(this.downHref == 'https://static.51kupai.com/app/download.html' && channel != ''){
			this.downHref += '?channel=' + channel;
		}
		
		this.init();
    };

    function wxPop() {
        var _html = "";

        function closePop() {
            $(this).remove();
        };

        var _div = $("<div></div>");
        var _html = _div.attr("style", "position: fixed;top: 0;left: 0;height: 100%;width: 100%;background: rgba(0,0,0,0.7) url(/mobile/images/note_baoku.png?static_version=1469761759) right 0 no-repeat;background-size: 100% auto;-moz-background-size: 100% auto;-webkit-background-size: 100% auto;-ms-background-size: 100% auto;-o-background-size: 100% auto;z-index: 2147483647;").on("click", function() {
            $(this).remove();
        });

        $("body").append(_html);
    };

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    };

    var viewPort = function(pro) {
        var u = navigator.userAgent.toLowerCase();

        return {
            isApp: u.indexOf(pro) > -1,
            isWeixin: u.indexOf('micromessenger') > -1,
            isWeibo: u.indexOf('weibo') > -1, //微博
            isQQ: u.indexOf('qq') > -1, // QQ
            trident: u.indexOf('trident') > -1, //IE内核
            presto: u.indexOf('presto') > -1, //opera内核
            webKit: u.indexOf('applewebkit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') == -1, //火狐内核
            mobile: !!u.match(/applewebkit.*mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), //ios终端
            android: u.indexOf('android') > -1 || u.indexOf('linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iphone') > -1 || u.indexOf('ipod') > -1 || u.indexOf('mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('ipad') > -1, //是否iPad
            webApp: u.indexOf('safari') == -1 //是否web应该程序，没有头部与底部
        };
    };

    /**
     * [getBrowserInfo 获取应用的版本]
     * @return {[type]} [description]
     */
    function getBrowserInfo() {
        var agent = navigator.userAgent.toLowerCase();
        var regStr_baohu = /baoku\/[\d.]+/gi;
        if (agent.indexOf("baoku") > 0) {
            return agent.match(regStr_baohu);
        }
    }

    AppDownBar.prototype = {
        init: function() {
            var _this = this;
            var vPort = viewPort(_this.appPro);

            if (vPort.isApp) {
                /*var browser = getBrowserInfo() ;
                var verinfo = (browser+"").replace(/[^0-9.]/ig,""); 
                verinfo = parseInt(verinfo.replace(/\./g, ""));

                if(verinfo >= 12) {
                    location.href = _this.appSrc;
                }*/
            } else {
                _this.addBtm();
                _this.makeTemplate();
            }
        },
        addBtm: function() {
            if (this.isPaddingBtm) {
                $("body").css("padding-bottom", "4.063rem");
            }
        },
        makeTemplate: function() {
            var _html = "";
			
            var _div = $('<div class="downbar"></div>');
            _div.attr("style", "position:fixed;left:0;bottom:0;width:100%;background:rgba(0, 0, 0, 0.7);padding:0.48rem 0.64rem;z-index:999;");
            _div.append('<img src="//static.51kupai.com/mobile/images/logo-kupai.png" style="float:left;width:1.973rem;height:1.973rem;">');

            var _a = $("<a></a>");
            _a.attr("style", "float:right;color:#fff;background:#0094ff;height:1.76rem;width:4.8rem;margin-top:0.107rem;text-align:center;line-height:1.76rem;font-size:0.8rem;border-radius:0.213rem;-webkit-border-radius:0.213rem;-moz-border-radius:0.213rem;-o-border-radius:0.213rem;");
            _a.html("立即下载");

            if (this.appSrc) {
                this.btnAction(_a); // 处理按钮的行为和展示
            } else {
                _a.attr("href", this.qqApp);
                this.track(_a);
            }

            _div.append(_a);

            _html += '<dl style="margin-left:2.4rem;margin-top:0.12rem;">\
                            <dt style="font-size:0.907rem;color:#fff;line-height:1;">库拍</dt>\
                            <dd style="margin-top:0.213rem;font-size:0.693rem;color:#fff;line-height:1;">玩赚艺术</dd>\
                        </dl>\
                    </div>';
            _div.append(_html);

            $("body").append(_div);
        },
        btnAction: function(ele) {
            var _this = this;

            if (ele) {
                var vPort = viewPort(_this.appPro);
                var _inWx = getQueryString("isappinstalled");

                if ((vPort.isWeixin || vPort.isWeibo || vPort.isQQ) && parseInt(_inWx, 10)) {
                    ele.html("立即打开");
                    ele.attr("href", "javascript:void(0)");
                    ele.on("click", function() {
                        wxPop();
                    });

                    return;
                };

                if ((vPort.isWeixin || vPort.isWeibo || vPort.isQQ) && !parseInt(_inWx, 10)) {
                    ele.html("立即下载");
                    ele.attr("href", _this.qqApp);
                    _this.track(ele);

                    return;
                };

                if ((vPort.android || vPort.iPhone) && !vPort.isApp) {
                    _this.openLocal(ele);
                    return;
                };

                if (!vPort.mobile) {
                    ele.html("立即下载");
                    ele.attr("href", _this.qqApp);
                    _this.track(ele);
                };
            }
        },
        openApp: function(ele) {
            var isInstalled;
            var _this = this;
            var _iframe = document.createElement("iframe");
            var t = 1000;
            var hasApp = true;
            var _inWx = getQueryString("isappinstalled");

            _iframe.src = _this.appSrc;
            _iframe.style.display = "none";

            setTimeout(function() {
                if (hasApp) {
                    ele.html("立即打开");
                    ele.attr("href", _this.appSrc);
                } else {
                    ele.html("立即下载");
                    ele.attr("href", _this.downHref);
                    _this.track(ele);
                }
            }, 2000);

            var _t1 = new Date().getTime();
            document.body.appendChild(_iframe);

            setTimeout(function() {
                var _t2 = new Date().getTime();

                if (!_t1 || _t2 - _t1 < t + 100) {
                    hasApp = false;
                }
            }, t);

            setTimeout(function() {
                document.body.removeChild(_iframe);
            }, 2000);
        },
        openLocal: function(ele) {
            var _inWx = getQueryString("isappinstalled");
            var _this = this;
            var hasApp = true;

            if (parseInt(_inWx, 10)) {
                ele.html("立即打开");
                ele.attr("href", _this.appSrc);
            } else {
                hasApp = false;
                ele.html("立即下载");
                ele.attr("href", _this.downHref);
                _this.track(ele);
                _this.openApp(ele);
            }

            if (hasApp) {
                setTimeout(function() {
                    top.location.href = _this.appSrc;
                }, 50);
            }
        },
        track: function(ele) {
            var vPort = viewPort();
            var key = "other";
            var _this = this;

            if (vPort.ios) {
                key = "ios";
            }
            if (vPort.android) {
                key = "android";
            }

            if (typeof _wm != 'undefined') {
                ele.off("click").on("click", function() {
                    _wm.push(["_trackevent", key, "download"]);

                    if (!vPort.mobile) {
                        _this.popQrCode();

                        return false;
                    }
                });
            }
        },
        popQrCode: function() {
            var _div = $("<div></div>");
            _div.css({
                "position": "fixed",
                "top": 0,
                "left": 0,
                "width": "100%",
                "height": "100%",
                "z-index": 9999,
                "padding-top": "2rem",
                "background": "rgba(0,0,0,0.7)"
            });
            var _wrap = $("<div></div>");
            _wrap.css({
                "width": "11.25rem",
                "margin": "0 auto",
                "background": "#ededed",
                "position": "relative"
            });
            var _close = $("<span></span>");
            _close.css({
                "position": "absolute",
                "width": "1.875rem",
                "height": "1.875rem",
                "display": "block",
                "cursor": "pointer",
                "top": 0,
                "right": "-1.875rem",
                "z-index": 9999,
                "background": "#000 url(//img.51kupai.com/pic/28-28-a956bc8925fb1e02829dd32036c45c99/0) center center no-repeat",
                "background-size": "0.875rem 0.875rem"
            });
            _close.on("click", function() {
                $(this).parent().parent().remove();
            });

            var _con = '<p style="width:100%;padding:0.938rem;background:#fff;"><img src="//img.51kupai.com/pic/304-304-6dd6b4bbb11c7bad8a40fae018481d59/0" style="width:100%;"></p><p style="font-size:0.688rem;line-height:1;color:#000;padding:0.594rem 0;text-align:center;">扫一扫二维码，下载库拍APP</p>';
            _wrap.append(_close);
            _wrap.append(_con);
            _div.html(_wrap);

            $("body").append(_div);
        }
    };

    window.AppDownBar = function(options) {
        return new AppDownBar(options);
    };

})(Zepto);