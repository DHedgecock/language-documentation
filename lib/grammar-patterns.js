
// Markdown
// ---------------------------------------------------------------------------

/**
 * Captures the asterisk at the start of a jsdoc line. Used for multi-line
 * elements.
 */
const guardRail = {
  name: 'comment.block.documentation.punctuation.js',
  match: '^(\\s*(\\*)\\s{1})',
};

/**
 * Captures markdown **bold** elements.
 * NOTE: must be included before italic pattern because of single
 * asterisk/understar pattern: *italic*
 * @type {Object}
 */
const markdownBold = {
  name: 'markup.bold.gfm',
  match: '(__|\\*\\*)(?!\/).+?(\\1)',
  captures: {
    1: { name: 'punctuation.definition.begin.bold.gfm' },
    2: { name: 'punctuation.definition.end.bold.gfm' },
  },
};

/**
 * Caputres markdown italic elements with _ or *
 * @type {Object}
 */
const markdownItalic = {
  name: 'markup.italic.gfm',
  match: '(_).+?(\\1)',
  captures: {
    1: { name: 'punctuation.definition.begin.italic.gfm' },
    2: { name: 'punctuation.definition.end.italic.gfm' },
  },
};

/**
 * Captures markdown inline code blocks with single backticks
 * @type {Object}
 */
const markdownInlineCodeBlock = {
  name: 'markup.raw.inline.code.block.gfm',
  match: '(`).+?(\\1)',
  captures: {
    1: { name: 'punctuation.begin.inline.code.block.gfm' },
    2: { name: 'punctuation.end.inline.code.block.gfm' },
  },
};

/**
 * Captures markdown headers, eg:
 * # Some markdown header
 */
const markdownHeader = {
  name: 'entity.heading.gfm.jsdoc',
  match: '^\\s*(\\*)?\\s?(#{1,6})\\s(.*)$',
  captures: {
    1: { name: 'comment.block.documentation.punctuation.jsdoc' },
    2: { name: 'markup.heading.marker.gfm.jsdoc' },
    3: { name: 'markup.heading.gfm.jsdoc' },
  },
};

/**
 * Captures markdown lists. Capture includes line start to prevent
 * incorrect mid-line captures. Ending whitespace match in begin prevents tables
 * like ' * ---' from matching.
 */
const markdownList = {
  name: 'entity.list.gfm.js',
  begin: '^\\s*(\\*)\\s{0,3}(\\*|\\+|\\-|\\d\\.)\\s',
  end: '$',
  captures: {
    1: { name: 'comment.block.documentation.punctuation.js' },
    2: { name: 'markup.variable.list.marker.gfm.js' },
  },
  patterns: [markdownBold, markdownItalic, markdownInlineCodeBlock],
};

/**
 * Captures markdown fenced code blocks
 */
const markdownCodeBlock = {
  name: 'markup.raw.code.block.gfm',
  begin: '(`{3})(\\w*)?',
  end: '(\\1)',
  beginCaptures: {
    1: { name: 'punctuation.begin.code.block.gfm' },
    2: { name: 'entity.name.tag.gfm' },
  },
  endCaptures: {
    1: { name: 'punctuation.end.code.block.gfm' },
  },
  patterns: [guardRail],
};

// Type Definitions
// ---------------------------------------------------------------------------
// const primitiveTypes = {
//   match: '\\b(null|undefined|boolean|string|number)\\b',
//   captures: {
//     1: { name: 'support.type.builtin.primitive.jsdoc' },
//   },
// };

// Type definition w/out a name
// const typeDefinition = {
//   name: 'entity.name.type.instance.jsdoc',
//   begin: '{',
//   end: '}',
//   captures: {
//     0: { name: 'meta.brace.curly.jsdoc' },
//   },
//   patterns: [primitiveTypes],
// };

// Type def with a name
// const namedTypeDefinition = {
//   name: 'entity.name.type.instance.jsdoc',
//   begin: '{',
//   end: '(})\\s+(\\S*)',
//   beginCaptures: {
//     0: { name: 'meta.brace.curly.jsdoc' },
//   },
//   endCaptures: {
//     0: { name: 'meta.brace.curly.jsdoc' },
//     1: { name: 'entity.name.type.instance.jsdoc' },
//   },
//   patterns: [primitiveTypes],
// };

// Block Tags
// ---------------------------------------------------------------------------

// End of begin: (?=({[^{}]+}))
// const namedTypeTag = {
//   name: 'entity.tag.jsdoc',
//   begin: '^[\\s*]*(@(arg|argument|class|constant|constructor|constructs|const|function|func|kind|member|method|mixin|namespace|param|var)\\b)',
//   end: '$',
//   beginCaptures: {
//     1: { name: 'storage.type.class.NAMED.jsdoc' },
//   },
//   patterns: [namedTypeDefinition],
// };

// Matches tags with types, but not names @return {null} Description
// const typedTag = {
//   name: 'entity.tag.jsdoc',
//   begin: '^[\\s*]*(@(enum|exception|implements|returns|return|throws|type)\\b)',
//   end: '$',
//   beginCaptures: {
//     1: { name: 'storage.type.class.jsdoc' },
//   },
//   patterns: [typeDefinition],
// };

// Matches a plain @tag with any text after
// const tag = {
//   name: 'entity.tag.jsdoc',
//   match: '^[\\s*]*(@\\w*)(.*)$',
//   captures: {
//     1: { name: 'storage.type.class.jsdoc' },
//   },
// };

// Inline Tags
// ---------------------------------------------------------------------------

/**
 * INLINE TAGS
 * JSDOC has inline tags {@link} and {@tutorial} for creating cross links to other
 * places in your documentation. See:
 * http://usejsdoc.org/tags-inline-link.html
 * http://usejsdoc.org/tags-inline-tutorial.html
 * This pattern matches an optional set of opening brackets, (which is the text
 * for a link), followed by a set of curly braces.
 */
// const inlineTag = {
//   name: 'meta.tag.inline.jsdoc',
//   begin: '(\\[(?:([^\\[\\]]+)]))?({)(?=@)',
//   end: '(})',
//   beginCaptures: {
//     1: { name: 'string.linktext.jsdoc' },
//     3: { name: 'meta.brace.curly.jsdoc' },
//   },
//   endCaptures: {
//     1: { name: 'meta.brace.curly.jsdoc' },
//   },
//   patterns: [
//     {
//       match: '(@(linkcode|linkplain|link|tutorial))\\b([^}]*)',
//       captures: {
//         1: { name: 'storage.type.class.jsdoc' },
//         3: { name: 'string.jsdoc' },
//       },
//     },
//   ],
// };

// Master Docblock Pattern
// ---------------------------------------------------------------------------

/**
 * Docblock Documentation Block Pattern
 */
// const docblock = {
//   contentName: 'comment.block.documentation.js',
//   begin: '\\s*((\/\\*\\*))(?!\/|\\*)',
//   end: '(\\s*(\\*\/))',
//   captures: {
//     1: { name: 'comment.block.documentation.test.js' },
//     2: { name: 'punctuation.definition.comment.test.js' }
//   },
//   patterns: [ namedTypeTag, typedTag, tag, inlineTag ]
// }

// Exports
// ---------------------------------------------------------------------------
module.exports.markdownBold = markdownBold;
module.exports.markdownItalic = markdownItalic;
module.exports.markdownInlineCodeBlock = markdownInlineCodeBlock;

module.exports.markdownHeader = markdownHeader;
module.exports.markdownList = markdownList;
module.exports.markdownCodeBlock = markdownCodeBlock;
