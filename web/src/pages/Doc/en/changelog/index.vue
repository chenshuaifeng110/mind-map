<template>
  <div>
    <h1>Changelog</h1>
<h2>0.3.3</h2>
<p>Fix: The root node text cannot wrap.</p>
<h2>0.3.2</h2>
<p>Fix: 1.Fix the problem that the node style is not updated when the secondary node is dragged to other nodes or other nodes are dragged to the secondary node; 2.Fix the problem that when the actual content of the mind map is larger than the screen width and height, the excess part is not watermarked when exporting.</p>
<h2>0.3.1</h2>
<p>Fix: 1.The problem that deleting the background image does not take effect; 2.The problem that the connector runs above the root node when the node is dragged to the root node.</p>
<p>New: Add position and size settings for background image display. This setting is also supported for exported pictures.</p>
<h2>0.3.0</h2>
<p>Upgrade to plugin architecture, pull out some non-core functions as plugins, register as needed, and reduce the overall volume.</p>
<h2>0.2.24</h2>
<p>New: Node free drag is changed to configurable, the default is <code>false</code>, not open; Support add watermark.</p>
<h2>0.2.23</h2>
<p>New: Support register new theme.</p>
<h2>0.2.22</h2>
<p>optimization：The theme and structure pictures of the built-in <code>simple-mind-map</code> package are removed and replaced by user self-maintenance. The original pictures can be found in the <code>web/assets/img/</code> directory.</p>
<h2>0.2.21</h2>
<p>New: Support node horizontal line style.</p>
<h2>0.2.20</h2>
<p>fix：When the distance from the canvas to the upper left corner of the window is not 0, the node dragging will have an offset problem.</p>
<h2>0.2.19</h2>
<p>fix：When the node is not activated, pressing any key will trigger the problem of automatic focus.</p>
<h2>0.2.18</h2>
<p>optimization：Keyboard navigation algorithm for finding focus, supporting simple algorithm, region algorithm and shadow algorithm.</p>
<h2>0.2.17</h2>
<p>New：Keyboard navigation, that is, switch the active nodes through the direction keys; The node text content can be edited directly in the outline.</p>
<h2>0.2.16</h2>
<p>optimization：Mini map; drag performance.</p>
<h2>0.2.15</h2>
<p>optimization：Local file editing.</p>
<p>New：Double-click the image in the node to preview the large image.</p>
<h2>0.2.14</h2>
<p>optimization：Automatically expand when inserting child nodes.</p>
<p>fix：The error occurred when the mini map was closed.</p>
<h2>0.2.13</h2>
<p>fix：The child node is missing when collapsing state replication.</p>
<h2>0.2.11</h2>
<p>fix：Fix the problem that is lost when the child node collapses state replication.</p>
<p>New：Support mini map.</p>
<h2>0.2.10</h2>
<p>optimization：Focus immediately when you manually create a node.</p>
<p>fix：Connection style depth update problem.</p>
<p>New：Logical structure diagram and mind map add linear connection style and direct connection style.</p>
<h2>0.2.9</h2>
<p>New：Support the creation, opening and saving of local files on the computer.</p>
<h2>0.2.8</h2>
<p>fix：Xmind8 version file import failed.</p>
<p>New：Expanding to the specified level is supported.</p>
<h2>0.2.7</h2>
<p>fix：The root node adds multiple nodes to burst the stack.</p>
<p>New：Support import .xmind file.</p>
<h2>0.2.6</h2>
<p>New：The title tag is added when exporting svg.</p>
<h2>0.2.5</h2>
<p>fix：Bugs caused by node expansion and collapse.</p>
<p>New：Node supports custom line styles.</p>
<h2>0.2.4</h2>
<p>New：Nodes support multiple shapes.</p>
<h2>0.2.3</h2>
<p>fix：Shortcut key conflicts when editing node text; Right-click menu shortcut prompt error; Right-click menu shortcut prompt.</p>
<h2>0.2.2</h2>
<p>fix：The input string '/' conflicts with the shortcut key '/'.</p>
<h2>0.2.1</h2>
<p>New：Support export as pdf.</p>
<h2>0.2.0</h2>
<p>New：Classic4 theme；Support adding summary; Support free drag; Move Node Up, Move Node Down, Copy Node, Cut Node, Paste Node, One-click Organize Cloth Shortcut; Library packaging; Ctrl+left click to select multiple.</p>
<h2>0.1.18</h2>
<p>fix：The problem that the node icon cannot be deleted; The tool button is grayed out and can still be clicked.</p>
<h2>0.1.17</h2>
<p>New：Add read-only mode.</p>
<h2>0.1.16</h2>
<p>New：Node notes support markdown and rich text.</p>
<p>fix：Can't select text; Node annotations cannot hide problems after node activation; When editing text such as hyperlinks, notes, labels, etc., the return key and return key conflict with the shortcut key of mind map.</p>
<h2>0.1.15</h2>
<p>New：The status data supports saving the active status and view status (drag position, zoom value)；Support node drag.</p>
<h2>0.1.14</h2>
<p>fix：There are problems with setting topics when activating nodes.</p>
<h2>0.1.13</h2>
<p>New：Shortcut key function; Support export as json。</p>
<p>optimization：Some details.</p>
<h2>0.1.12</h2>
<p>New：Local storage；Right-click menu function, etc.</p>
<h2>0.1.0</h2>
<p>Complete basic functions.</p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>