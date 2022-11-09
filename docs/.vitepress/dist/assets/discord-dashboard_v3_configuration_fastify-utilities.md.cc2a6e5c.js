import{_ as o,c as l,a,b as s,d as e,e as p,o as t,r as c}from"./app.adc0d586.js";const m=JSON.parse('{"title":"Fastify Utilities","description":"","frontmatter":{},"headers":[],"relativePath":"discord-dashboard/v3/configuration/fastify-utilities.md"}'),r={name:"discord-dashboard/v3/configuration/fastify-utilities.md"},i={id:"fastify-utilities",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#fastify-utilities","aria-hidden":"true"},"#",-1),D=p(`<p>Do you want to hook up any modules to Fastify, which the Discord-Dashboard runs on? Add them here!</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Dashboard </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">discord-dashboard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> helmet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fastify/helmet</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dashboard</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;">/*ENGINE*/</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFastifyUtilities</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        [helmet</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">contentSecurityPolicy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">global</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div>`,2);function A(C,F,d,_,f,h){const n=c("Badge");return t(),l("div",null,[a("h1",i,[s("Fastify Utilities "),e(n,{type:"info",text:"OPTIONAL"}),s(),y]),D])}const b=o(r,[["render",A]]);export{m as __pageData,b as default};
