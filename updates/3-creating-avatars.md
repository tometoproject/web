---
tags: update
title: Creating Avatars and other lifestyle improvements
date: 2019-09-20
layout: update.njk
author: marisa
description: Here's what we've been working on over the past month!
---

In the [last update](https://tometo.org/updates/2-basic-avatars/), we mentioned
that we were still missing an interface to create Avatars. Since then, altough
with a bit a of a delay (because I was on vacation), we've finally finished a
first version of said interface. This is what it looks like right now:

<img
  class="w-100"
  alt="A screenshot of the Avatar creation interface"
  src="https://files.catbox.moe/e77ga6.png"
  />
  
While it doesn't currently look very visually appealing, it provides with all of
the available ways to customize your Avatar. Keep in mind that this is an MVP _(minimum viable product)_,
aka the simplest possible way you could represent an Avatar. As soon as we get a
minimal, but fully-featured version of Tometo completed, we'll start working on
making this system a more complex representation of what an Avatar could look
like (a bit more like Nintendo's actual Miis).

As a bonus, we have a way for you to preview what your Avatar's speech would
look like before you actually create it. When you upload the two images required
for Avatar creation, it looks like this:

<video class="w-100" controls src="https://files.catbox.moe/dlmi44.webm"></video>

<small class="gray i">Click [here](https://files.catbox.moe/dlmi44.webm) if the
video doesn't play</small>

We've also made a bunch of improvements to the developer workflow, so that it
should be much easier to locally set up Tometo. This includes:

- We documented our local configuration file where you would enter stuff like
  your database credentials
- We added a couple of convenience scripts that automate away a lot of the
  manual work required to set up Tometo (for example, now you can run
  `script/localsetup` and it'll do most of the setup work for you)
- Finally set up a working CI _(continous integration, basically an automated
  test runner)_ so that your commits can be tested in a
  reproducible environment

While these changes are helpful for people who have knowledge of how to set up
Rust and/or JavaScript projects on their own, the ultimate goal for setting up
locally should be to run one command and then have a complete local environment
set up for you, completely automatically. We're working on that, and we hope
that it should come to fruition fairly soon.

## What's next?

Now that we're mostly done with the Avatar creation story, we have some
bandwidth to dedicate towards ironing out some of the design imperfections, in
the frontend as well as in the backend. Another thing we want to implement is a
invite-based registration system, but that idea is still in its infancy.

As always, if you're interested in contributing to Tometo, feel free to come
talk to us on our [Discord server](https://discord.gg/xqTEcaw).

Happy Friday!
