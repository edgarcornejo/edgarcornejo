---
title: Text box trim CSS
author: Edgar Cornejo
description: "Quisiera compartir una de novedad de chrome for developers, para Chrome 133. Esta novedad nos permite ajustar el espaciado por encimay debajo de un texto."
image: https://res.cloudinary.com/devox/image/upload/v1739217537/publicaciones/text-box-trim-css-02_dldcuv.avif
date: 2025-02-10
lastBuildDate: 2025-02-10
draft: false
category: Web
language: es-PE
tags: ["diseño web", "desarrollo web", "chrome", "HTML5 y CSS3", "navegador"]
---

# Text box trim CSS

Quisiera compartir una de novedad de <strong>chrome for developers, para Chrome 133</strong>. Esta novedad nos permite recortar el espaciado por encima y debajo de un texto.

<figure>
  <img src="https://res.cloudinary.com/devox/image/upload/v1739217537/publicaciones/text-box-trim-css-01_uw8q5k.avif" alt="Text box trim CSS"/>
  <figcaption>Foto de <a href="https://unsplash.com/es/@jannerboy62?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" alt="Nick Fewings" target="_blank">Nick Fewings</a> en <a href="https://unsplash.com/es/fotos/texto-1SsUquHPNT8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" alt="Unsplash" target="_blank">Unsplash</a></figcaption>
</figure>

La propiedad que nos permite ajustar es: <strong>text-box-trim</strong>

## Soporte

Actualmente lo soporta: <strong>Chrome 133, Edge 133 y Safari 18.2.</strong>

<pre>
text-box-trim: trim-start | trim-end | trim-both | none;

text-box-edge: cap | ex | text | leading;

line-fit-edge: alphabetic | text;
</pre>

Se aplican a las etiquetas: <strong>&lt;h1&gt;, &lt;buton&gt; y &lt;p&gt;</strong>. Cada fuente tipografica tiene espaciodos diferentes.

Esto nos ayudara a hacer una alineacion de textos de forma mas uniforme.

<pre>
h1 {
/* trim both sides to the capital letters */
text-box: trim-both cap alphabetic;

/* trim both sides to the lowercase letter x */
text-box: trim-both ex alphabetic;
}
</pre>

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="RNbyoKE" data-pen-title="text-box-trim fit and spacing" data-user="web-dot-dev" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/web-dot-dev/pen/RNbyoKE">
  text-box-trim fit and spacing</a> by web.dev (<a href="https://codepen.io/web-dot-dev">@web-dot-dev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>.

Para mas informacion puedes revizar Google Chrome para desarrolladores: <a href="https://developer.chrome.com/docs/devtools/css/text-box-trim/" title="Text box trim" target="_blank">https://developer.chrome.com/docs/devtools/css/text-box-trim/</a>