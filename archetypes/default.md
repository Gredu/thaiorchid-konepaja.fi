---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
categories: ["{{substr .File.Dir 0 -1 }}"]
---

