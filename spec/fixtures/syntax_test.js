// SYNTAX TEST 'source.js.jsx'

/**
// <- comment.block.documentation punctuation.definition.comment
 * Documentation Test
// ^^^^^^^^^^^^^      comment.block.documentation
//               ^^^^ comment.block.documentation
 * `'t'` `.` `/` `()`
// ^^^^^              markup.raw.inline.code.block
//       ^^^          markup.raw.inline.code.block
//           ^^^      markup.raw.inline.code.block
//               ^^^^ markup.raw.inline.code.block
 * _'t'_ _._ _/_ _()_
// ^^^^^             markup.italic
//       ^^^         markup.italic
//           ^^^     markup.italic
//               ^^^ markup.italic
 * Bold **test** text
// ^^^^               comment.block.documentation
//      ^^            punctuation.definition.begin.bold.gfm
//        ^^^^        markup.bold
//            ^^      punctuation.definition.end.bold.gfm
//      ^^^^^^^^     markup.bold.gfm
//               ^^^^ comment.block.documentation
 * ## Markdown Header
// ^^^^^^^^^^^^^^^^^^ entity.heading.gfm
// ^^                 markup.heading.marker
//    ^^^^^^^^^^^^^^^ markup.heading.gfm
 *
 * An inline tag {@tutorial tutorialID}
 * //               ^                      meta.brace.curly
 * //                ^^^^^^^^^             storage.type.class
 * //                          ^^^^^^^^^^  string
 * //                                    ^ meta.brace.curly
 * //               ^^^^^^^^^^^^^^^^^^^^^^ meta.tag.inline
 * A text spec inline tag [Link Text]{@tutorial tutorialID}
 * //                        ^^^^^^^^^^^                       string.linktext
 * //                                   ^                      meta.brace.curly
 * //                                    ^^^^^^^^^             storage.type.class
 * //                                              ^^^^^^^^^^  string
 * //                                                        ^ meta.brace.curly
 * //                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.inline
 * @method methodName
 * // <- comment.block.documentation.punctuation
 * // ^^^^^^^            entity.tag.doc storage.type.class.doc
 * //         ^^^^^^^^^^ entity.tag.doc description.doc
 * @protected
 * @param {type} name  Description
 * // ^^^^^^                          entity.tag storage.type.class
 * //        ^^^^^^                   entity.tag entity.type entity.name.type.instance
 * //               ^^^^              entity.tag entity.type variable.name
 * //                     ^^^^^^^^^^^ entity.tag description
 * @param {type}  name  Description
 * // ^^^^^^                           entity.tag storage.type.class
 * //        ^^^^^^                    entity.tag entity.type entity.name.type.instance
 * //                ^^^^              entity.tag entity.type variable.name
 * //                      ^^^^^^^^^^^ entity.tag description
 * @returns {Promise} Ajax call
 * // ^^^^^^^^                     entity.tag storage.type.class
 * //          ^^^^^^^^^           entity.tag entity.name.type.instance
 * //                    ^^^^^^^^^ entity.tag description
 * @return {Promise} Ajax call
 * // ^^^^^^^                     entity.tag storage.type.class
 * //         ^^^^^^^^^           entity.tag entity.name.type.instance
 * //                   ^^^^^^^^^ entity.tag description
 */
