<template>
  <div>
    <h1>Start</h1>
<h2>Development</h2>
<h3>Local Development</h3>
<pre class="hljs"><code>git <span class="hljs-built_in">clone</span> https://github.com/wanglin2/mind-map.git
<span class="hljs-built_in">cd</span> simple-mind-map
npm i
npm link
<span class="hljs-built_in">cd</span> ..
<span class="hljs-built_in">cd</span> web
npm i
npm link simple-mind-map
npm run serve
</code></pre>
<h3>Packaging the Library</h3>
<p>Since version <code>0.2.0</code>, we have added support for packaging the core library
simple-mind-map. This uses the same packaging tool as the sample project web.</p>
<pre class="hljs"><code><span class="hljs-built_in">cd</span> web
npm run buildLibrary
</code></pre>
<p>The <code>package.json</code> file in the <code>simple-mind-map</code> library provides two export
fields:</p>
<pre class="hljs"><code>{
  <span class="hljs-attr">&quot;module&quot;</span>: <span class="hljs-string">&quot;index.js&quot;</span>,
  <span class="hljs-attr">&quot;main&quot;</span>: <span class="hljs-string">&quot;./dist/simpleMindMap.umd.min.js&quot;</span>
}
</code></pre>
<p>Environments that support the <code>module</code> field will use <code>index.js</code> as the entry
point, otherwise the packed <code>simpleMindMap.umd.min.js</code> will be used as the entry
point.</p>
<h3>Compile the doc</h3>
<pre class="hljs"><code><span class="hljs-built_in">cd</span> web 
npm run buildDoc
</code></pre>
<h3>Packaging the Demo</h3>
<pre class="hljs"><code><span class="hljs-built_in">cd</span> web
npm run build
</code></pre>
<p>The <code>index.html</code> file will be automatically moved to the root directory.</p>
<h2>Installation</h2>
<blockquote>
<p>Things to note before version 0.2.0:</p>
</blockquote>
<pre class="hljs"><code>npm i simple-mind-map
</code></pre>
<p><code>0.2.0</code> Notes for previous versions:</p>
<blockquote>
<p>Note: This project is directly published in source code form and has not been
packaged. If compilation fails, a Vue CLI-created project can add the
following configuration to the vue.config.js file to allow babel-loader to
compile this dependency:</p>
<pre class="hljs"><code><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">transpileDependencies</span>: [<span class="hljs-string">&quot;simple-mind-map&quot;</span>],
};
</code></pre>
<p>Other projects should modify the packaging configuration as needed.</p>
</blockquote>
<h2>Usage</h2>
<pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;mindMapContainer&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<pre class="hljs"><code><span class="hljs-keyword">import</span> MindMap <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;simple-mind-map&quot;</span>;

<span class="hljs-keyword">const</span> mindMap = <span class="hljs-keyword">new</span> MindMap({
  <span class="hljs-attr">el</span>: <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&#x27;mindMapContainer&#x27;</span>),
  <span class="hljs-attr">data</span>: {
    <span class="hljs-string">&quot;data&quot;</span>: {
        <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;Root Node&quot;</span>
    },
    <span class="hljs-string">&quot;children&quot;</span>: []
  }
});
</code></pre>
<p>The non-packaged 'ES' module is introduced by default, and only contains core functions, not unregistered plugin content, which can effectively reduce the size. However, you need to configure the <code>babel</code> compilation <code>simple mind-map</code> in your project to prevent some newer <code>js</code> syntax some browsers not supporting it.</p>
<p>If you need a file in the format of <code>umd</code> module, such as <code>CDN</code> in the browser, you can import it in the following way:</p>
<pre class="hljs"><code><span class="hljs-keyword">import</span> MindMap <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;simple-mind-map/dist/simpleMindMap.umd.min.js&quot;</span>;
</code></pre>
<p>The disadvantage of this method is that it will contain all the content, including the plugins you have not registered, so the overall volume will be relatively large.</p>
<h2>Problems</h2>
<h3>Error when using in Vite, indicating xml-js dependency error</h3>
<p>Solution: use the following import method:</p>
<pre class="hljs"><code><span class="hljs-keyword">import</span> MindMap <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;simple-mind-map/dist/simpleMindMap.umd.min&quot;</span>;
</code></pre>
<p>The <code>simple-mind-map</code> package provides the unpacked entry field <code>module</code>, and
the <code>xml-js</code> package dependency needs to import the package in the <code>node</code>
environment. Therefore, it cannot be obtained in <code>Vite</code> and an error will be
reported. Therefore, specify the import of the packed entry, and all relevant
packages are packed into the product, so there will be no error.</p>
<p>If you need to do further development, that is, you must use the unpacked code,
and if you do not need to parse the <code>xmind</code> file, you can remove the <code>xmind</code>
module. If you need it, you can try using other libraries to parse <code>xml</code> to
<code>json</code>.</p>
<h3>Error <code>Getting bbox of element &quot;text&quot; is not possible: TypeError: Cannot read properties of undefined (reading 'apply')</code></h3>
<p>The reason is that the installed version of <code>@svgdotjs/svg.js</code> is too high. You can manually reduce it to the version of <code>3.0.16</code>.</p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>