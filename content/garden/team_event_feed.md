+++
title = "Team Event Stream"
date = "2021-08-27 17:49:51"
tags = []
[extra]
growth = "seedling"
+++

There are loads of events happening during the lifetime of software engineering teams.
Some are captured in tools like issue trackers (e.g feature requested/being built/released)
or PM tools and calendars (e.g. new deadlines, or PTO of team members).
There is a vast array of remaining events that go uncaptured.

Its those events that I am interested in.
I would love to capture more events of "things going on in and around teams", like:
* New team member joins
* Team member leaves the team/company
* New campaign announced
* Switched to new tool Y
* Initiative Z is now deprecated

Or events with a bit more technical nature:
* Added a new repository for initiative X
* Deprecating repo X in favor of Y
* Splitting repository into A and B
* Created a new acccount C
* API D is now deprecated

The tool I have in mind to address this should be lightweight and be easily
runnable from the CLI or scripts or CI or anything else.
It should be effortless for anyone on the team to quickly add something of interest.
Think of it as a project/team-specific Twitter or Mastodon feed.

The two key operations should be `publish` a new entry and `grab all entries`.
The meaning of each message would be up to the team itself, but support both human consumption
and a way to extract data via tools and scripts.


## The format

I think the format can be kept quite simple and flexible, preferably in JSON.

```shell
# You'd be running the following in your CLI
tapa add -m "@felipe create a new account 12345 #aws"
```

and the following entry would be created:

```json
{
  "human_message": "@felipe create a new account 12345 #aws",
  "meta": {
    "timestamp": "2021-08-27T21:34:39.251365Z",
    "identities": [
      "@felipe"
    ],
    "tags": [
      "#aws"
    ]
  }
}
```

`human_message` would be the literal text the user typed.
`meta` would contain some extracted information such as `tags`, `identities` and the current `timestamp`.
This should make filtering on `tags` and `identities` easy without having to parse it again.
