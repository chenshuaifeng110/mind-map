import { getStrWithBrFromHtml } from './utils'

//  节点文字编辑类
export default class TextEdit {
  //  构造函数
  constructor(renderer) {
    this.renderer = renderer
    this.mindMap = renderer.mindMap
    // 文本编辑框
    this.textEditNode = null
    // 文本编辑框是否显示
    this.showTextEdit = false
    this.bindEvent()
  }

  //  事件
  bindEvent() {
    this.show = this.show.bind(this)
    // 节点双击事件
    this.mindMap.on('node_dblclick', this.show)
    // 点击事件
    this.mindMap.on('draw_click', () => {
      // 隐藏文本编辑框
      this.hideEditTextBox()
    })
    // 展开收缩按钮点击事件
    this.mindMap.on('expand_btn_click', () => {
      this.hideEditTextBox()
    })
    // 节点激活前事件
    this.mindMap.on('before_node_active', () => {
      this.hideEditTextBox()
    })
    // 注册编辑快捷键
    this.mindMap.keyCommand.addShortcut('F2', () => {
      if (this.renderer.activeNodeList.length <= 0) {
        return
      }
      this.show(this.renderer.activeNodeList[0])
    })
  }

  //  注册临时快捷键
  registerTmpShortcut() {
    // 注册回车快捷键
    this.mindMap.keyCommand.addShortcut('Enter', () => {
      this.hideEditTextBox()
    })
  }

  //  显示文本编辑框
  show(node) {
    this.showEditTextBox(node, node._textData.node.node.getBoundingClientRect())
  }

  //  显示文本编辑框
  showEditTextBox(node, rect) {
    this.mindMap.emit('before_show_text_edit')
    this.registerTmpShortcut()
    if (!this.textEditNode) {
      this.textEditNode = document.createElement('div')
      this.textEditNode.style.cssText = `position:fixed;box-sizing: border-box;background-color:#fff;box-shadow: 0 0 20px rgba(0,0,0,.5);padding: 3px 5px;margin-left: -5px;margin-top: -3px;outline: none;`
      this.textEditNode.setAttribute('contenteditable', true)
      this.textEditNode.addEventListener('keyup', e => {
        e.stopPropagation()
      })
      document.body.appendChild(this.textEditNode)
    }
    node.style.domText(this.textEditNode, this.mindMap.view.scale)
    this.textEditNode.innerHTML = node.nodeData.data.text
      .split(/\n/gim)
      .join('<br>')
    this.textEditNode.style.minWidth = rect.width + 10 + 'px'
    this.textEditNode.style.minHeight = rect.height + 6 + 'px'
    this.textEditNode.style.left = rect.left + 'px'
    this.textEditNode.style.top = rect.top + 'px'
    this.textEditNode.style.display = 'block'
    this.showTextEdit = true
    // 选中文本
    this.selectNodeText()
  }

  //  选中文本
  selectNodeText() {
    let selection = window.getSelection()
    let range = document.createRange()
    range.selectNodeContents(this.textEditNode)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  //  隐藏文本编辑框
  hideEditTextBox() {
    if (!this.showTextEdit) {
      return
    }
    this.renderer.activeNodeList.forEach(node => {
      let str = getStrWithBrFromHtml(this.textEditNode.innerHTML)
      this.mindMap.execCommand('SET_NODE_TEXT', node, str)
      if (node.isGeneralization) {
        // 概要节点
        node.generalizationBelongNode.updateGeneralization()
      }
      this.mindMap.render()
    })
    this.mindMap.emit(
      'hide_text_edit',
      this.textEditNode,
      this.renderer.activeNodeList
    )
    this.textEditNode.style.display = 'none'
    this.textEditNode.innerHTML = ''
    this.textEditNode.style.fontFamily = 'inherit'
    this.textEditNode.style.fontSize = 'inherit'
    this.textEditNode.style.fontWeight = 'normal'
    this.showTextEdit = false
  }
}
