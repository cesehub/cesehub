---
layout: post-no-cover
title: Site Updates
date: 2016-05-29 07:01:00 +0800
permalink: /updates
---

{% for post in site.posts %}
{% if post.show == true %}
* [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endif %}
{% endfor %}
