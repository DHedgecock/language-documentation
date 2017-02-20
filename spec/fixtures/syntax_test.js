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
 * @method methodName
 // <- comment.block.documentation.punctuation
// ^^^^^^^            entity.tag.doc storage.type.class.doc
//         ^^^^^^^^^^ entity.tag.doc description.doc
 * @protected
 * @param {type} name  Description
// ^^^^^^                          entity.tag storage.type.class
//        ^^^^^^                   entity.tag entity.type entity.name.type.instance
//               ^^^^              entity.tag entity.type variable.name
//                     ^^^^^^^^^^^ entity.tag description
 * @param {type}  name  Description
// ^^^^^^                           entity.tag storage.type.class
//        ^^^^^^                    entity.tag entity.type entity.name.type.instance
//                ^^^^              entity.tag entity.type variable.name
//                      ^^^^^^^^^^^ entity.tag description
 * @returns {Promise} Ajax call
// ^^^^^^^^                     entity.tag storage.type.class
//          ^^^^^^^^^           entity.tag entity.name.type.instance
//                    ^^^^^^^^^ entity.tag description
 * @return {Promise} Ajax call
// ^^^^^^^                     entity.tag storage.type.class
//         ^^^^^^^^^           entity.tag entity.name.type.instance
//                   ^^^^^^^^^ entity.tag description
 */
