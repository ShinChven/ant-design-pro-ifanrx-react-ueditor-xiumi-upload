import ReactUeditor from "ifanrx-react-ueditor";

// 声明 UEditor 部署路径
window.UE_PATH = './plugins/ueditor'

/**
 * 重载 ifanrx-react-ueditor 以加载秀米插件
 */
class UEditor extends ReactUeditor {

  /**
   * 重载 initEditor 函数，增加添加秀米插件的代码
   */
  initEditor = () => {
    // console.log('init');
    // super.initEditor()
    const {config, plugins, onChange, value, getRef, onReady} = this.props

    if (plugins && Array.isArray(plugins)) {
      plugins.forEach(plugin => {
        if (typeof plugin === 'string') {
          return this.registerInternalPlugin(plugin)
        } else {
          return this.registerPlugin(plugin)
        }
      })
    }

    // 即将废弃
    this.state.extendControls.forEach(control => {
      window.UE.registerUI(this.getRegisterUIName(control.name), (editor, uiName) => {
        return new window.UE.ui.Button({
          name: uiName,
          title: control.menuText,
          cssRules: control.cssRules ? control.cssRules : '',
          onclick: () => {
            this.setState({[this.getVisibleName(control.name)]: true})
          },
        })
      }, undefined, this.containerID)
    });

    // todo 加载秀米插件
    window.UE.registerUI('xiumi', function (editor, uiName) {
      return new UE.ui.Button({
        name: 'xiumi-connect',
        title: '秀米编辑器',
        onclick: function () {
          const dialog = new UE.ui.Dialog({
            iframeUrl: `${window.UE_PATH}/xiumi-ue-dialog-v5.html`,
            editor: editor,
            name: 'xiumi-connect',
            title: "秀米编辑器",
            cssRules: "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
          });
          dialog.render();
          dialog.open();
        }
      });
    },undefined,this.containerID);

    this.ueditor = config ? window.UE.getEditor(this.containerID, config) : window.UE.getEditor(this.containerID)
    this.ueditor._react_ref = this;

    getRef && getRef(this.ueditor);
    this.ueditor.ready(() => {
      this.ueditor.addListener('contentChange', () => {
        // 由 componentWillReceiveProps 导致的 contentChange 不需要通知父组件
        if (this.isContentChangedByWillReceiveProps) {
          this.isContentChangedByWillReceiveProps = false
        } else {
          this.content = this.ueditor.getContent();
          onChange && onChange(this.content)
        }
      });

      this.ueditor.addListener('afterpaste', () => {
        this.handlePasteImage()
      });

      if (this.isContentChangedByWillReceiveProps) {
        this.isContentChangedByWillReceiveProps = false;
        this.ueditor.setContent(this.content)
      } else {
        this.ueditor.setContent(value)
      }

      onReady && onReady()
    })
  }
}

export default UEditor;
