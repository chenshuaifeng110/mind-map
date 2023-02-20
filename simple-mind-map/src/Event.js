import EventEmitter from 'eventemitter3'

//  事件类
class Event extends EventEmitter {
  //  构造函数
  constructor(opt = {}) {
    super()
    this.opt = opt
    this.mindMap = opt.mindMap
    this.isLeftMousedown = false
    this.mousedownPos = {
      x: 0,
      y: 0
    }
    this.mousemovePos = {
      x: 0,
      y: 0
    }
    this.mousemoveOffset = {
      x: 0,
      y: 0
    }
    this.bindFn()
    this.bind()
  }

  //  绑定函数上下文
  bindFn() {
    this.onDrawClick = this.onDrawClick.bind(this)
    this.onMousedown = this.onMousedown.bind(this)
    this.onMousemove = this.onMousemove.bind(this)
    this.onMouseup = this.onMouseup.bind(this)
    this.onMousewheel = this.onMousewheel.bind(this)
    this.onContextmenu = this.onContextmenu.bind(this)
    this.onSvgMousedown = this.onSvgMousedown.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
  }

  //  绑定事件
  bind() {
    this.mindMap.svg.on('click', this.onDrawClick)
    this.mindMap.el.addEventListener('mousedown', this.onMousedown)
    this.mindMap.svg.on('mousedown', this.onSvgMousedown)
    window.addEventListener('mousemove', this.onMousemove)
    window.addEventListener('mouseup', this.onMouseup)
    // 兼容火狐浏览器
    if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
      this.mindMap.el.addEventListener('DOMMouseScroll', this.onMousewheel)
    } else {
      this.mindMap.el.addEventListener('mousewheel', this.onMousewheel)
    }
    this.mindMap.svg.on('contextmenu', this.onContextmenu)
    window.addEventListener('keyup', this.onKeyup)
  }

  //  解绑事件
  unbind() {
    this.mindMap.svg.off('click', this.onDrawClick)
    this.mindMap.el.removeEventListener('mousedown', this.onMousedown)
    window.removeEventListener('mousemove', this.onMousemove)
    window.removeEventListener('mouseup', this.onMouseup)
    this.mindMap.el.removeEventListener('mousewheel', this.onMousewheel)
    this.mindMap.svg.off('contextmenu', this.onContextmenu)
    window.removeEventListener('keyup', this.onKeyup)
  }

  //   画布的单击事件
  onDrawClick(e) {
    this.emit('draw_click', e)
  }

  //   svg画布的鼠标按下事件
  onSvgMousedown(e) {
    this.emit('svg_mousedown', e)
  }

  //  鼠标按下事件
  onMousedown(e) {
    // e.preventDefault()
    // 鼠标左键
    if (e.which === 1) {
      this.isLeftMousedown = true
    }
    this.mousedownPos.x = e.clientX
    this.mousedownPos.y = e.clientY
    this.emit('mousedown', e, this)
  }

  //  鼠标移动事件
  onMousemove(e) {
    // e.preventDefault()
    this.mousemovePos.x = e.clientX
    this.mousemovePos.y = e.clientY
    this.mousemoveOffset.x = e.clientX - this.mousedownPos.x
    this.mousemoveOffset.y = e.clientY - this.mousedownPos.y
    this.emit('mousemove', e, this)
    if (this.isLeftMousedown) {
      this.emit('drag', e, this)
    }
  }

  //  鼠标松开事件
  onMouseup(e) {
    this.isLeftMousedown = false
    this.emit('mouseup', e, this)
  }

  //  鼠标滚动
  onMousewheel(e) {
    e.stopPropagation()
    e.preventDefault()
    let dir
    if ((e.wheelDeltaY || e.detail) > 0) {
      dir = 'up'
    } else {
      dir = 'down'
    }
    this.emit('mousewheel', e, dir, this)
  }

  //  鼠标右键菜单事件
  onContextmenu(e) {
    e.preventDefault()
    this.emit('contextmenu', e)
  }

  //  按键松开事件
  onKeyup(e) {
    this.emit('keyup', e)
  }
}

export default Event
