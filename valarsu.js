// valarsu.js
/**
* 实现事件代理
* element: 代理元素
* eventType: 事件类型
* selector: 被代理元素
* fn: 回调函数
* 注意: 如果当前事件不是被代理元素，那么就向上寻找其父级元素
*/
function valarsu(element, eventType, selector, fn) {
	element.addEventListener(eventType, e => {
		let el = e.target
		while (!el.matches(selector)) {
			if (element === el) {
				el = null
				break
			}
			el = el.parentNode
		}
		el && fn.call(el, e, el)
	})
	return element
}

module.exports = valarsu()