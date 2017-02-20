/**
 * Utility to fold or unfold all documentation code blocks for an editor.
 * @method exports
 * @param {string} state  Either `fold` or `unfold`
 * @param {[type]} editor Editor reference for folding all blocks on file open
 */
module.exports = (state, editor) => {
  let lastBufferRow, foldableDocBlocks;
  editor = editor || atom.workspace.getActiveTextEditor();

  if (!editor) { return; } // Just in case

  lastBufferRow = editor.getLastBufferRow();
  foldableDocBlocks = [];

  // Get all docblock comment start rows
  for (let i = 0; i < lastBufferRow; i++) {
    let rowText;

    // Make sure row is foldable
    if (editor.isFoldableAtBufferRow(i)) {
      rowText = editor.lineTextForBufferRow(i);

      // Regex to check if this is a docblock
      if (/(\s)*?\/\*\*/.test(rowText)) {
        if (state === 'fold' && !editor.isFoldedAtBufferRow(i)) {
          editor.foldBufferRow(i);
        } else if (state === 'unfold' && editor.isFoldedAtBufferRow(i)) {
          editor.unfoldBufferRow(i);
        }
      }
    }
  }
}
