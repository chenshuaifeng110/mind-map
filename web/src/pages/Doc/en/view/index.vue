<template>
  <div>
    <h1>View instance</h1>
<p>The <code>view</code> instance is responsible for view operations, and can be obtained
through <code>mindMap.view</code></p>
<h2>Methods</h2>
<h3>translateX(step)</h3>
<p>Translate in the <code>x</code> direction, <code>step</code>: number of pixels to translate</p>
<h3>translateY(step)</h3>
<p>Translate in the <code>y</code> direction, <code>step</code>: number of pixels to translate</p>
<h3>translateXTo(x)</h3>
<blockquote>
<p>v0.2.11+</p>
</blockquote>
<p>Translate the <code>x</code> direction to a specific position</p>
<h3>translateYTo(y)</h3>
<blockquote>
<p>v0.2.11+</p>
</blockquote>
<p>Translate the <code>y</code> direction to a specific position</p>
<h3>reset()</h3>
<p>Revert to the default transformation</p>
<h3>narrow()</h3>
<p>Zoom out</p>
<h3>enlarge()</h3>
<p>Zoom in</p>
<h3>getTransformData()</h3>
<blockquote>
<p>v0.1.1+</p>
</blockquote>
<p>Get the current transform data, can be used for display</p>
<h3>setTransformData(data)</h3>
<blockquote>
<p>v0.1.1+</p>
</blockquote>
<p>Dynamically set transform data, transform data can be obtained through the
getTransformData method&quot;</p>
<h3>setScale(scale)</h3>
<blockquote>
<p>v0.2.17+</p>
</blockquote>
<p>Setting Zoom</p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>