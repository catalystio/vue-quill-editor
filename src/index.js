
/*
* Vue-Quill-Editor index.js
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-quill-editor
*/

import Quill from 'quill'
import quillEditor from './editor.vue'

quillEditor.install = function(app) {
  app.component(quillEditor.name, quillEditor)
}

const VueQuillEditor = { Quill, quillEditor }
export default VueQuillEditor
export { Quill, quillEditor }
