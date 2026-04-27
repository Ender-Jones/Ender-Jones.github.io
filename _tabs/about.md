---
title: Work Archive
nav_label: Work Log
icon: fas fa-info-circle
order: 4
---

{% assign worklog_posts = site.worklogs | sort: 'date' | reverse %}

{% if worklog_posts.size > 0 %}
{% for worklog in worklog_posts %}
- [{{ worklog.title }}]({{ worklog.url | relative_url }})<br>
  <span class="text-muted">{{ worklog.date | date: "%Y-%m-%d" }}</span>{% if worklog.description %} — {{ worklog.description }}{% endif %}
{% endfor %}
{% else %}
No work logs yet.
{% endif %}
