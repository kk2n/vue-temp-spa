 import _ from 'underscore'
 import config from './config'
 import __ from './util'
/*
 ===================================
 用__._代理‘_’
 =================================
 */
__._ = _;
/*
 ===================================
 用__.ajax全局代理axios
 =================================
 */
__.ajax = config.ajaxConfig;

export default __;
