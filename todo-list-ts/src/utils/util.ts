/**
 * 解析url传入的参数
 * @param {string} paramName 参数名称
 * @param {string} url url值
 * @returns {string[]} param参数值数组
 */
export const getUrlParamValue = (paramName: string, url: string): string[] => {
  let urls = decodeURI(url || window.location.href);
  let paramValue = [];
  var nIndex = urls.indexOf('?');
  if (nIndex >= 0) {
    let params = urls.substring(nIndex + 1).split('&');
    for (const param of params) {
      var valueIndex = param.indexOf('=');
      if (param.substring(0, valueIndex) === paramName) {
        paramValue.push(param.substring(valueIndex + 1).replace('#', '').replace('/', ''));
      }
    }
  }
  return paramValue;
}
