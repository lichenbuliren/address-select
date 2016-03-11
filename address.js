/**
 * 地区省份联动插件
 * @author lichenbuliren
 * @repository https://github.com/lichenbuliren/address-select
 * @date 2016-03-09
 * @email lichenbuliren@gmail.com
 */
(function(){
    'use strict'

    // var address = new MZAddress('container',{

    // });

    /**
     * 最多四个层级的地址库
     * 每个地址库的数据接口可能不一致，需要可配置
     * 每个数据层级支持自定义命名空间，默认使用select的name属性作为命名空间
     * 支持本地 json 文件数据作为数据源
     * 可自定义 class 类名
     * 支持各种回调事件
     */

    // jquery or zepto
    var $;
    /*=========================
    MZAddress
    =========================*/

    var MZAddress = function(container,params){
        var _this = this;
        // 默认属性选项
        var defaults = {
            // 全局数据命名空间
            globalNameSpace: 'MZAddress',
            provinceNameSpace: 'province',
            cityNameSpace: 'city',
            countyNameSpace: 'county',
            townNameSpace: 'town',
            // 默认容器class
            containerClass: 'mzaddress',
            // 省份
            provinceClass: 'mzaddress-province',
            // 城市
            cityClass: 'mzaddress-city',
            // 乡
            countyClass: 'mzaddress-county',
            // 镇
            townClass: 'mzaddress-town',

            // callbacks
            // onInit: function(MZAddress){},
            // onSelectChangeBegin: function(MZAddress){},
            // onSelectChangeEnd: function(MZAddress){}
        };


        // 缓存jquery对象
        _this.dom = {};
        _this.api = {};
        _this.settings = {};

        // 合并配置选项
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            } else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }

        _this.version = '1.0.0';
        _this.settings = params;

        /*=========================
          Dom Library
          ===========================*/
        if (typeof $ === 'undefined') {
            $ = window.Zepto || window.jQuery;
            if (!$) return;
        }
        // Export it to Swiper instance
        _this.$ = $;
        _this.dom.$container = $(container);
        if(_this.dom.$container.length === 0){
            return;
        }

        if(_this.dom.$container.length > 1){
            _this.dom.$container.each(function(index, el) {
                new MZAddress(this,_this.settings);
            });
            return;
        }

        // 入口
        _this.init = function(callbacks){

            _this.initModule();


            _this.attachEvents();
        };

        _this.initModule = function(callbacks){
            var $container = $(container);
            _this.dom.$container = $container;
            _this.dom.$province = $container.find('.' + _this.settings.provinceClass);
            _this.dom.$city = $container.find('.' + _this.settings.cityClass);
            _this.dom.$county = $container.find('.' + _this.settings.countyClass);
            _this.dom.$town = $container.find('.' + _this.settings.townClass);

            // 全局数据对象
            // 初始化本地数据
            window[_this.settings.globalNameSpace] = window[_this.settings.globalNameSpace] || {};

            // 设置命名空间和接口API信息
            for (key in _this.dom) {
                if (_this.dom.hasOwnProperty(key) && _this.dom[key].length > 0) {
                    var namespace = _this.dom[key].data('namespace'),
                        dataUrl = _this.dom[key].data('url');
                    window[_this.settings.globalNameSpace][namespace] = window[_this.settings.globalNameSpace][namespace] || {};
                    _this.api[namespace][url] = dataUrl;
                }
            }
        }

        // 事件绑定
        _this.attachEvents = function(){

            console.log('绑定事件');
        };

        _this.init();
        // 返回一个MZAddress实例
        return _this;
    };

    window.MZAddress = MZAddress;
}());

// 'use strict';
// module.exports = window.MZAddress || module.MZAddress;;