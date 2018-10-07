---
title: 'Requirements Fatigue'
date: 2018-06-27T22:55:18+01:00
categories: []
tags: []
keywords: []
#thumbnailImage: //example.com/image.jpg
coverImage: https://www.alleycatscratch.com/lotr/Things/OneRing/Paper_8571_TornLon_med.jpg
draft: true
---

Recently a word has been popping up again and again and again and again at work. Requirements.
Its been so annoying that I have decided to coin a new phrase. Maybe a law even.
Felipe's First Law: _Your teams effectivity is inversly proportional to how often the word 'requirement' is used_.
Let me elaborate.

<!--more-->

I am pretty sure I heard the word "requirements" throught my (relatively short) career as an engineer.
It may be that over the last couple of days its usage has intensified.
It was enough to make really dislike the word entirly. I'd say I have requirements fatigue and this is why.

## Totallity of the word

The way the phrase "X is a requirement" is used always gives it an air of non-negotiable:

- "It is a requirement that we use <technology X>"
- "We need to display <X>, because it is a requirement"
- "The requirements from <Team X> dictate that proceed in a certain way"

All of those are super negotiable.
You can change technologies, what you display, and how you go about achieving certain goals.
Noone shoudl be asking to store data in `PostgreSQL`. What they are asking for is to be able to find that data later on or do something useful with it.
The phrase in this case is a way to block out the conversation.
Very likely, the person using it had a stern talking to by someone else and has decided to not put up a fight anymore.
What the person is really saying: "Sorry, your arguments might be compelling but I need you to do it this way _because I have been told so_."

## Loss of perspective

If you are an engineer or designer or somehow related to a software product, would you rather solve problems or "address requirments"?
Who really cares about requirements? Users certainly don't have them! They don't even _talk_ about requirements!
Users have wishes, ideas, fears, and anxieties.
For example, when the security team comes up with a list of 7 "security requirements" for your product, ask how this affects the user.
Ask what this is solving!  
Yes, users want to be reassured their data is safe. But using AES-512 and HTTPS is not enough.
Empathise with your users and work security into your design, your copy, and your product.
The requirement is not _"get sign-off from the security team"_, the requirement is _"maintain the trust of our customers and remove as much anxiety as possible"_.  
Only talking about a backlog of requirements kills this perspective and puts the emphasis way too far away from the users and customers.

## Complacency and apathy

At one meeting in the last couple of days we were discussing the size of the stories we were pulling into our sprints.
I noticed two clear camps:

1. Context camp: Give us enough context of an opportunity at hand and we will work with you to find a thin slice to address it and iterate.
2. Requirements camp: Give us all the requuirements. We will address them all and present you with what you asked for.

Group 1 was arguing for different content in our issue tracker and was trying to build on communication and iteration to arrive at a solution.
Group 2 on the other hand seemed to prefer to be left alone (less pairing on that side) and was also unhappy when the requirements were not clear enough.
They asked for more details over multiple weeks. Upon receiving those details, they were unhappy with the fact that they might contradict.
Even the tiniest decision _"had to be made by the business"_.

That seems like a terrible downward spiral to me. Requirements meant the engineers did not take any responsibility and only coded what was litteraly _required_ of them.
They did not see trade offs. They were "blocked" pending decisions. They did not actively seek out input and feedback, because they assumed all _requirements_ had been spelled out.
When the story author was not satisfied with the results, it was agreed that... more analysis and requirements gathering was the solution! And the cycle began anew...

I don't really see how to break people out of this vicious cycle. It's perfectly self-perpetuating.

## An Alternative

--> Talk about "constraints"

"Requirement to be written in Java", rather: we are constrained

Its probably impossible to fully rid our work environments from the word "requirement".
My hunch is that is a distant remnant from the time where software was written 100% by a third party and being lucrative maintenance contracts were the driving factor.
It is also true that not all software needs to be shiny and be sold through some app store or website.
There are "boring applications" that deal with the end-of-the-month cashup of some sort.
Still, you can discuss problems and opportunities with your team as such: problems and opportunities.
Or "outcomes" if someone uses the software to do a job.
The key thing is empathy.
For the customer - they want something solved or made.
For the business - they want to serve their customers best.
For the engineers - they want to solve problems, not tick boxes.
