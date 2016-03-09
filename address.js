/**
 * 地区省份联动插件
 * @author lichenbuliren
 * @date 2016-03-09
 * @email lichenbuliren@gmail.com
 */
(function(factory){
    if(typeof define === 'function' && define.amd){
        define(['jquery'],factory);
    }else{
        factory(window.jQuery || window.Zepto || window.$);
    }
}(function($){
    /**
     * 主要功能：
     * 1、可配置地区组件下的『provice,city,xxx』等
     * 2、支持本地『json』、『api』调用两种模式
     * 3、提供丰富的回调接口：onInit、onSelectChangeBegin、onSelectChange、onSelectChangeEnd
     */

    var mzAddress = function(opts){
        dom: {},
        api: {}
    };
}));