define('common/openApp', ['lib/zepto'], function($) {
    var ua = navigator.userAgent;
    var s = ua.match(/OS\s([\d_\.]+)/);
    //判断版本"OS 9_1"
    var version = s && s[1] ? +s[1].split('_')[0] : 0;
    // 应用宝下载链接
    var downloadLink = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.xin.dbm';
    var options = {
        uLinks: '//app.dabanma.com' + location.pathname + location.search,
        fail: function() {
            location.href = downloadLink;
        }
    }

    function init(opts) {
        options = $.extend({}, options, opts);
    }

    function open(opts) {
        if (!opts) opts = options;
        if (version >= 9) {
            location.href = opts.uLinks || options.uLinks;
        } else {
            opts.fail ? opts.fail() : options.fail();
        }
    }

    // @hack 针对ios9以上的机型如果未安装车伯乐app的情况下跳转应用宝
    if (version >= 9 && location.hostname.indexOf('app.dabanma.com') !== -1) {
        location.href = downloadLink;
    }

    return {
        init: init,
        open: open
    }
})