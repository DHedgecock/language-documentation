'use babel';
import { CompositeDisposable } from 'atom';
import toggleDocblocks from './utils/toggle-docblocks';

export default {

  config: {
    autoFold: {
      type: 'boolean',
      default: true,
      title: 'Auto Fold On Open',
      description: 'When true, documentation blocks will be folded automatically for every file opened'
    }
  },

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned
    // up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'fold-docblocks:fold-all': () => toggleDocblocks('fold'),
      'fold-docblocks:unfold-all': () => toggleDocblocks('unfold'),
    }));

    atom.workspace.observeTextEditors(editor => {
      if (atom.config.get('language-documentation.autoFold')) {
        toggleDocblocks('fold', editor)
      }
    })
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
