# Changelog

## 0.3.3

Fix: The root node text cannot wrap.

## 0.3.2

Fix: 1.Fix the problem that the node style is not updated when the secondary node is dragged to other nodes or other nodes are dragged to the secondary node; 2.Fix the problem that when the actual content of the mind map is larger than the screen width and height, the excess part is not watermarked when exporting.

## 0.3.1

Fix: 1.The problem that deleting the background image does not take effect; 2.The problem that the connector runs above the root node when the node is dragged to the root node.

New: Add position and size settings for background image display. This setting is also supported for exported pictures.

## 0.3.0

Upgrade to plugin architecture, pull out some non-core functions as plugins, register as needed, and reduce the overall volume.

## 0.2.24

New: Node free drag is changed to configurable, the default is `false`, not open; Support add watermark.

## 0.2.23

New: Support register new theme.

## 0.2.22

optimization：The theme and structure pictures of the built-in `simple-mind-map` package are removed and replaced by user self-maintenance. The original pictures can be found in the `web/assets/img/` directory.

## 0.2.21

New: Support node horizontal line style.

## 0.2.20

fix：When the distance from the canvas to the upper left corner of the window is not 0, the node dragging will have an offset problem.

## 0.2.19

fix：When the node is not activated, pressing any key will trigger the problem of automatic focus.

## 0.2.18

optimization：Keyboard navigation algorithm for finding focus, supporting simple algorithm, region algorithm and shadow algorithm.

## 0.2.17

New：Keyboard navigation, that is, switch the active nodes through the direction keys; The node text content can be edited directly in the outline.

## 0.2.16

optimization：Mini map; drag performance.

## 0.2.15

optimization：Local file editing.

New：Double-click the image in the node to preview the large image.

## 0.2.14

optimization：Automatically expand when inserting child nodes.

fix：The error occurred when the mini map was closed.

## 0.2.13

fix：The child node is missing when collapsing state replication.

## 0.2.11

fix：Fix the problem that is lost when the child node collapses state replication.

New：Support mini map.

## 0.2.10

optimization：Focus immediately when you manually create a node.

fix：Connection style depth update problem.

New：Logical structure diagram and mind map add linear connection style and direct connection style.

## 0.2.9

New：Support the creation, opening and saving of local files on the computer.

## 0.2.8

fix：Xmind8 version file import failed.

New：Expanding to the specified level is supported.

## 0.2.7

fix：The root node adds multiple nodes to burst the stack.

New：Support import .xmind file.

## 0.2.6

New：The title tag is added when exporting svg.

## 0.2.5

fix：Bugs caused by node expansion and collapse.

New：Node supports custom line styles.

## 0.2.4

New：Nodes support multiple shapes.

## 0.2.3

fix：Shortcut key conflicts when editing node text; Right-click menu shortcut prompt error; Right-click menu shortcut prompt.

## 0.2.2

fix：The input string '/' conflicts with the shortcut key '/'.

## 0.2.1

New：Support export as pdf.

## 0.2.0

New：Classic4 theme；Support adding summary; Support free drag; Move Node Up, Move Node Down, Copy Node, Cut Node, Paste Node, One-click Organize Cloth Shortcut; Library packaging; Ctrl+left click to select multiple.

## 0.1.18

fix：The problem that the node icon cannot be deleted; The tool button is grayed out and can still be clicked.

## 0.1.17

New：Add read-only mode.

## 0.1.16

New：Node notes support markdown and rich text.

fix：Can't select text; Node annotations cannot hide problems after node activation; When editing text such as hyperlinks, notes, labels, etc., the return key and return key conflict with the shortcut key of mind map.

## 0.1.15

New：The status data supports saving the active status and view status (drag position, zoom value)；Support node drag.

## 0.1.14

fix：There are problems with setting topics when activating nodes.

## 0.1.13

New：Shortcut key function; Support export as json。

optimization：Some details.

## 0.1.12

New：Local storage；Right-click menu function, etc.

## 0.1.0

Complete basic functions.