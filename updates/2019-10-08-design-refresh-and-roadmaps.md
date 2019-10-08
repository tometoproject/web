---
tags: update
title: Design Refresh and Roadmaps
date: '2019-10-08'
layout: update.njk
number: 4
author: marisa
description: Take a look at our new design!
---
It's been a while, right? As always, we have some interesting stuff to show you today. First off, the old design that's been shown in the previous update posts turned out to be kind of a roadblock. This was mainly because we were using a CSS framework that turned out to be less than usable for our purposes. As is the case with CSS frameworks, it was also quite _large_.

So what do you do when your current framework is bothering you? Completely abolish it and write your own CSS, of course! That's exactly what we did. The [pull request](https://marie.marisa.cloud/t/tometo/pulls/3) for this was one of the largest ones so far, and here's what the finished product looks like:

![](/img/uploads/sc1.png)

![](/img/uploads/sc2.png)

![](/img/uploads/sc3.png)

Very simple styling, admittedly, but we don't see much value in having something complex and elaborate, since it's always a nightmare to maintain in the future. If you see any irregularities in these screenshots, please tell us on [Discord](https://discord.gg/xqTEcaw)!

## An Update on the Roadmap

In our first update post, we said that we couldn't guarantee any timeframe for when we would make a first/initial release. Well, as the time of this writing, I've pretty much locked down the final set of features that are going to make it into version **0.1.0**. This means I've had to deprioritize some other features, but the priority for us is that we make an initial release that's stable enough to be deployed into a staging environment.

_Note that this doesn't necessarily mean that we'll be putting up a live version of Tometo when this comes out, it's mostly for us to have stable ground to implement further features on._

You can check out the progress towards this initial release on our [bug tracker milestone page](https://bugs.marisa.cloud/versions/1). We'll absolutely write another update about this release when the time comes!

As for work beyond that, we've slowly started to form an idea about what Avatars should look like in their next evolutionary stage beyond the two-pictures system. Again, if you're interested in contributing ideas to this, you can talk to us on Discord!

That's all for today! Have a lovely beginning of autumn 🍂
