## 2.0.0 (3/23/17)
Version 2 directly injects patterns specified using JS objects instead of a JSON file.
This makes maintenance of the patterns much easier. Patterns for JSDoc have been
removed because Babel currently has pretty good support for them and they're
unnecessary unless these patterns become better (which they're not right now). No
changes should be required to update to v2.

## 1.1.0 (2/20/17)
Added:
- Configurable auto close docblocks on file open

Fixed:
- Patterns for inline code blocks, italics, @return vs @returns and param whitespace

## 1.0.1 (1/24/17)
Fixed:
- Inline code blocks not matching for strings starting with `.` or `/`

## 1.0.0 - First Release (1/21/17)
- Grammar for JS Documentation Comment Blocks Created 🎉
