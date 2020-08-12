---
layout: post
title: "Enabling Jekyll Blog Comments with Utterances"
date: 2020-08-12 01:20:00
categories: [Development]
---

My last blog, also created in Jekyll, used Disqus for handling comments. This time, I wanted to explore new options, and I came across [Utterances](https://utteranc.es/), which stores blog comments on Github Issues. What a strange idea, but anything that boosts activity on my Github is probably a win.

It was incredibly easy to set it up in Jekyll, as you simply add a script tag to your post layout:

{% highlight html %}
<script src="https://utteranc.es/client.js"
        repo="your-github-username/your-github-repo" 
        issue-term="pathname"
        theme="github-dark"
        label="comment"
        crossorigin="anonymous"
        async>
</script>
{% endhighlight %}

You can customize the format of issues created on the Utterances homepage, and they will customize their own script for you to use. Quick and easy.