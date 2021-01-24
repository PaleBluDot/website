---
title: Projects
description: This is a home page that has all notes listed.
eleventyNavigation:
  key: Projects
---

<section class="content">
  <p>{{description}}</p>
  <ol>
  {%- for project in collections.projects -%}
    <li>
      <h4><a href="{{ project.url }}">{{ project.data.title }}</a></h4>
    </li>
  {%- endfor -%}
  </ol>
</section>
