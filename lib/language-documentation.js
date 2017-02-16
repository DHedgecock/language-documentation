'use babel';

export default {

  activate(state) {
    console.log('language doc activate');
    atom.workspace.observeTextEditors(editor => {
      console.log('subscribe to editor');
      this.toggleDocBlockFolds()
      // editor.onDidChangeTitle(() => this.toggleDocBlockFolds());
    })

  },

  deactivate() {
  },

  toggleDocBlockFolds(state) {
    let editor = atom.workspace.getActiveTextEditor();
    let lastBufferRow = editor.getLastBufferRow();
    let foldableDocBlocks = [];

    console.log('toggle doc block folds');
    // console.log(lastBufferRow);
    // console.log(editor);

    // Get all docblock comment start rows
    for (let i = 0; i < lastBufferRow; i++) {
      let rowText;
      // console.log('begin row test: ', i);
      // console.log(editor.lineTextForBufferRow(i));
      // Make sure row is foldable

      if (editor.isFoldableAtBufferRow(i)) {
        // console.log('isfoldable');
        rowText = editor.lineTextForBufferRow(i);

        if (/(\s)*?\/\*\*/.test(rowText)) {
          console.log('fold row: ', i, rowText);
          editor.foldBufferRow(i)
        }
      }
    }
  }
};
