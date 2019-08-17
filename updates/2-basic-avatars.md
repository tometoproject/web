---
tags: update
title: Avatar support and more!
date: 2019-08-17
layout: update.njk
author: marisa
description: We've implemented basic avatar support, here's what's next.
---

It's been _exactly_ a month since the last update, and while we haven't really posted that
much on Twitter, that's because we've been hard at work on Tometo itself! We've
finally got the basic version of our Avatars system more or less down. This is
how it looks right now:

<video class="w-100" controls src="https://files.catbox.moe/6w0n26.mov"></video>

<small class="gray i">Click [here](https://files.catbox.moe/6w0n26.mov) if the
video doesn't play</small>

The base of it is that you can upload two image files for your Avatar, one of
which is used for when the mouth is closed during speech, and the other one for
when the mouth is open.

Granted, the mouth movement isn't exact, as the threshold still needs some
tweaking, but I think it's a good start. This has been in the works for about a
month, and by merging this, we've basically hit multiple points at once (avatar
backend creation, avatar + status combination).

Another big part of this that's completely invisible to the end user is that
we've implemented support for multiple storage backends for audio, image and
text files. Originally, we only supported storing them in a local folder, but
because that's frankly unscalable, we've implemented support for storing them
somewhere that uses the S3 protocol. This was fun because it introduced me to
this lovely return type:

<img
  class="w-100"
  alt="A screenshot of a Rust language program, showing the return type of Box<(dyn Storage + 'static)>"
  src="https://files.catbox.moe/th5r1v.jpg"
  />
  
Okay, what's next on the agenda? This was a big milestone to reach, but we're by
no ways over the bulk of it. Next up is polishing the frontend, among other
things, adding an interface to create an Avatar (because that only works via
direct backend access for now). That also means that hopefully we'll have more
cool stuff to show you soon!

That's about it for today!
