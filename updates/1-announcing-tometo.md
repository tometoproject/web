---
tags: update
title: Announcing Tometo!
date: 2019-07-17
layout: update.njk
author: marisa
description: Our plans for the first release of Tometo, amid our public launch.
---

Welcome, and thanks for the interest in our project! We're pretty excited to finally show this to the public. Before I go on, I just want to outline the motivation behind creating this project. Many of us (and many of you) actively used Nintendo's [Miitomo](https://en.wikipedia.org/wiki/Miitomo) app. In its essence, it was a social network which allowed you to communicate by using Nintendo's own Mii characters, using a question-and-answer format. There was something unique about the game that set it apart from other social networks — personally, I think it was mixing the non-human-like text-to-speech voices with the Mii avatars, but maybe it was just due to the Mii's general design that made them seem uncanny.

Since Miitomo shut down in mid-2018, the only real alternative has been reverse engineering the server code and setting up third-party servers for the app. I originally started this project because I wanted to see whether it was possible to capture the unique experience that Miitomo offered in the format of a website, and on the way, got others to tag along.

That being said, Tometo is by no means done, nor is it even in a state where we can put it online in some sort of beta phase, but we have a fairly straightforward plan on what needs to happen for us to get there.

I got the initial proof of concept working back in April. Proof of concept here basically means that I wanted to see whether it was possible to automatically generate text-to-speech content, and align the text at the same time (this basically means that the words light up as the text is being spoken). I finally got this working through an extremely obscure combination of various technologies that I would rather not repeat here. Here's a video of when that first really worked:

<video class="w-100" height="1000" controls src="https://files.catbox.moe/cewoy8.mp4"></video>

<small class="gray">Click [here](https://files.catbox.moe/cewoy8.mp4) if the video doesn't play</small>

Since then, I've been working on making the core process of generating and aligning the speech more scalable and, most importantly, faster. We've switched forced aligners (the program that aligns speech with its transcript) twice and finally managed to push it under one second, which means that from clicking the button to seeing your status, it'll roughly take a second or two.

I also presented the proof of concept at a local [Rust](https://rust-lang.org) meetup:

<img
  class="w-100"
  alt="A computer screen displaying 'I CAN MAKE FUNNY VOICES WITH RUST AND ACTIX', the title of my presentation"
  src="https://files.catbox.moe/98posk.jpg"
  />

## What's the plan?

We have a milestone for what we want to be in our __initial release__ (basically the first time we version the software) that can be tracked [here](https://bugs.marisa.cloud/versions/1). Chief among this is implementing an Avatar system, sort of like what you would have as Miis in Miitomo. The rudimentary system for this is to let the user upload two images, one for when the mouth is closed and one for when it's opened, but we'll expand on this after the first release (we'll also probably write more updates on this). Specifically, we would like more input on how to design this feature and what people would like to get out of it, so if you have any ideas, suggest them!

Ideally, the first release is when we'll also have a live version for you all to try, but no guarantees on that yet. We'll update you when we get closer to that point!

Here's some other things that we've identified as necessary to have in our first release:

- Creating a blacklist and preventing statuses that match it from being created
- _Basic_ moderation tools
- Allow users to change pitch and speed per-avatar
- Implementing more secure authentication (moving from JWT to session cookies, this actually got done already!)

If you have any ideas for what should _definitely_ be in the first release, feel free to open a new issue on the tracker and suggest it to us, or even better, throw it at us on our [Discord] server.

## What can I do to help?

If you're interested in contributing on a technical level, feel free to join the [Discord] server and we'll give you pointers on where to go from there. If you're proficient in JavaScript, Vue, Rust (specifically with Actix) and want to do a bunch of unpaid labor, don't say we didn't warn you! We _have_ written a contributing document, to be found [in our repository](https://marisa.cloud/tometo/tometo/blob/master/CONTRIBUTING.md), so you can use that as a start, but don't be afraid to ask questions if anything is unclear.

Other than that, if something specific comes up, we'll tweet about it on [Twitter] and talk about it on Discord, so those are the places to be.

## What about [feature x]?

Again, we're focusing on the things on our immediate roadmap right now. Features beyond that are subject to discussion, which is where you can contribute and voice your opinion! The best place for this is, again, on Discord.

## Can you give any concrete times?

No. This is a volunteer project, and we're not getting paid for this in the first place, so concrete times are out of the question.

With that, one last reminder that if you want infrequent updates about the state of the project, [Twitter] is the place to follow us on. We'll write more updates, too.

Cheers!

[Discord]: https://discord.gg/xqTEcaw
[Twitter]: https://twitter.com/tometo_official
