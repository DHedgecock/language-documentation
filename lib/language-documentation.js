'use babel';
import { CompositeDisposable } from 'atom';
import toggleDocblocks from './utils/toggle-docblocks';
import {
  markdownBold,
  markdownItalic,
  markdownInlineCodeBlock,
  markdownHeader,
  markdownList,
  markdownCodeBlock,
} from './grammar-patterns';

/**
 * For the JS grammar, it works to simply push this pattern into the rawPatterns:
 * `grammar.rawPatterns.unshift(docblockPattern);`
 * but Babel references the pattern in other patterns, so we need to replace the
 * original pattern.
 * @method hijackDocblockPattern
 * @access protected
 * @param {} grammar
 * @return {[type]}
 */
function injectPatterns(grammar) {
  // JS and Babel grammars use a comments object in the rawRepository
  if (
    !grammar.rawRepository ||
    !grammar.rawRepository.comments ||
    !grammar.rawRepository.comments.patterns
  ) { return; }

  // Find docblock repository
  grammar.rawRepository.comments.patterns.forEach(pattern => {
    if (
      pattern.name === 'comment.block.documentation.js' ||
      pattern.contentName === 'comment.block.documentation.js'
    ) {
      pattern.patterns = pattern.patterns || [];
      pattern.patterns.unshift(markdownCodeBlock);
      pattern.patterns.unshift(markdownList);
      pattern.patterns.unshift(markdownHeader);
      pattern.patterns.unshift(markdownInlineCodeBlock);
      pattern.patterns.unshift(markdownItalic);
      pattern.patterns.unshift(markdownBold);
    }
  });
}

export default {
  /**
   * Store workspace subscriptions so we can dispose of them in `deactivate`
   * @type {?Object}
   */
  subscriptions: null,

  // Atom Props
  // ---------------------------------------------------------------------------
  /**
   * Schema for project configs
   * @type {Object}
   */
  config: {
    autoFold: {
      type: 'boolean',
      default: true,
      title: 'Auto Fold On Open',
      description: 'When true, documentation blocks will be folded automatically for every file opened',
    },
  },

  // Hooks
  // ---------------------------------------------------------------------------
  /**
   * On activation of this package register our commands and observer grammar
   * loading to inject docblock patterns into any `js` scoped grammar.
   */
  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned
    // up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // ========================================================
    // Commands
    // ========================================================

    // Register commands to manually fold or unfold all docblocks
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'fold-docblocks:fold-all': () => toggleDocblocks('fold'),
      'fold-docblocks:unfold-all': () => toggleDocblocks('unfold'),
    }));

    // Observe all text editors, anytime a new editor is opened, conditionally
    // fold all docblocks
    atom.workspace.observeTextEditors(editor => {
      if (atom.config.get('language-documentation.autoFold')) {
        toggleDocblocks('fold', editor);
      }
    });

    // ========================================================
    // Grammar
    // ========================================================

    // Check all grammars for js scope
    atom.grammars.getGrammars().forEach(grammar => {
      if (!grammar.scopeName.includes('source.js')) { return; }
      injectPatterns(grammar);
    });

    // Observe grammar registry for added grammars that are js scoped
    atom.grammars.onDidAddGrammar(grammar => {
      if (!grammar.scopeName.includes('source.js')) { return; }
      injectPatterns(grammar);
    });
  },
  /**
   * Clean up package subscriptions.
   */
  deactivate() {
    this.subscriptions.dispose();
  },
};
