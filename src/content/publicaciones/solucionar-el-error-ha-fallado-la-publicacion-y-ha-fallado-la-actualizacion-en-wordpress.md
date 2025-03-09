---
title: Solucionar el error ha fallado la publicación y ha fallado la actualización en WordPress
author: Edgar Cornejo
description: "Hace unos días intente modificar y crear contenido dentro de una web hecha en WordPress y me mostraba errores, intente desactivar plugins, cambiar el theme y buscar errores sin poder solucionar el problema. Busqué soluciones y en Google me encontré con una persona con un problema parecido."
image: ../../blog/solucionar-el-error-ha-fallado-la-publicacion-y-ha-fallado-la-actualizacion-en-wordpress.jpg
date: 2022-07-22
lastBuildDate: 2022-07-22
draft: false
category: Web
language: es-PE
tags:
  [
    "Web",
    "WordPress",
    "ha fallado la actualización",
    "ha fallado la publicación",
    "error",
  ]
---

# Solucionar el error ha fallado la publicación y ha fallado la actualización en WordPress

Si tienes problemas para modificar una entrada o crear una nueva en WordPress y te muestra los siguientes errores “Ha fallado la publicación” y “Ha fallado la actualización”, te mostraré cómo solucionarlo rápidamente.

<figure>
  <img src="../../blog/solucionar-el-error-ha-fallado-la-publicacion-y-ha-fallado-la-actualizacion-en-wordpress.jpg" alt="Solucionar el error ha fallado la publicación y ha fallado la actualización en WordPress"/>
  <figcaption>Solucionar el error ha fallado la publicación y ha fallado la actualización en WordPress</figcaption>
</figure>

Hace unos días intente **modificar y crear contenido** dentro de una web hecha en **WordPress** y me mostraba **errores**, intente desactivar plugins, cambiar el theme y buscar errores sin poder solucionar el problema. Busqué soluciones y en Google me encontré con una persona con un problema parecido.

<figure>
  <img src="../../blog/errores-en-wordpress.jpg" alt="Errores en WordPress"/>
  <figcaption>Errores en WordPress</figcaption>
</figure>

Hace unos días intente modificar y crear contenido dentro de una web hecha en WordPress y me mostraba errores, intente desactivar plugins, cambiar el theme y buscar errores sin poder solucionar el problema. Busqué soluciones y en Google me encontré con una persona con un problema parecido.

Debemos **comunicarnos con nuestros proveedores de hosting** ya que ahí se encuentra el error, el problema se encuentra en el plugin de ModSecurity.

## ModSecurity es

> ModSecurity es un firewall de aplicaciones web (WAF). Se implementa para establecer una mayor seguridad externa para detectar y prevenir ataques antes de que lleguen a sus aplicaciones web. ModSecurity permite el monitoreo del tráfico http y el análisis en tiempo real con muy pocos cambios en la infraestructura existente. ModSecurity se implementa como parte de su infraestructura de servidor existente en servidores Apache, IIS7 o Nginx. ─ https://help.liquidweb.com/s/article/Installing-Configserver-s-ModSecurity-Control-Plugin-on-Your-Server

Lo que sucede es que el **ModSecurity**, nos detectó como una amenaza y no nos permitirá modificar o crear nuevas entradas.

Para solucionarlo debemos comunicarnos con nuestro proveedor de hosting e indicarles el problema que tenemos, si puedes envía una captura de pantalla del problema. Puedes abrir un _ticket_ en el **área de cliente** para que solucionen el error.
