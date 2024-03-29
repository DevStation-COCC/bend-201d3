# Assignment Overview: Lab 15

Read the document, in it's entirety, before beginning your lab. To view this lab assignment in it's own tab, click [HERE](https://codefellows.github.io/code-201-guide/curriculum/class-15/lab/){:target="_blank"}

## Problem Domain

Merge conflicts occur when files get out of sync between GitHub and a user's local code base, and Git becomes unsure of where `HEAD` really is.

Let's describe and experience how a pretend team would get into that situation and then extricate themselves from it.

## Instructions

One team member should create a repository within GitHub called `mc-exercise` and add all other teammates as collaborators (in the 'Settings' tab, look for 'Collaborators' in the nav on the left of the screen.)

Assign a member of your team to each character, and then do what they do. And do ONLY what they do.

Our sample team has four members: Bob, Carol, Ted, and Alice. Add a file called `FUBAR.md` to the `master` branch of the repo. When we start, everyone is totally in sync and freshly pulled from `master` on their individual laptops, and has `FUBAR.md`. Bob and Carol are pair-programming one feature in `FUBAR.md` on Carol's laptop in a new feature branch, and Ted and Alice are working on another feature in a different non-master feature branch on Ted's laptop, also in `FUBAR.md`.

*** Do this exercise four times, following the steps below: once with each team member in each role. ***

For the purposes of this exercise, the work you're doing on a feature, always in `FUBAR.md`, consists of adding a sentence or two of "This is what Bob & Carol did on Bob's computer when working on the first feature" and maybe a joke or something to keep your teammates amused.

1. Bob and Carol get their feature finished and do a A-C-P of their branch from Carol's laptop and make a PR. 
2. Ted & Alice review the feature, approve that it is good and subsequently merge it. 
3. Ted & Alice then do a `git pull origin master` into their feature branch on Ted's laptop ONLY and continue working on that feature.

**In the meantime...**
 
4. Bob & Carol have switched to Bob's laptop, started a new feature branch in `FUBAR.md`, and started working on it. They did not do a `git pull origin master` and will live to regret it. 
5. They finish that feature at the same time that Ted & Alice finish their feature. 
6. Each team does an A-C-P and makes a PR. 
7. They review each other's PRs and attempt to merge them.

**Merge Conflicts...**
 
8. To sort out a merge conflict, check all of your project files for the markers that indicate merge conflicts, the `>>>>>>>>>` and `HEAD` lines of code. Edit the code to remove the redundancies causing the merge conflict, and ***eliminate the markers***.
9. Get everyone's individual laptop back in sync by doing a `git pull origin master` into `master` until Git stops no longer sees any conflicts.
10. Then they switch partners, of course. Bob & Alice start a quick new feature on her laptop in the `master` branch and Ted & Carol start another new feature of their own, also in `master`. 
11. They finish these quick features, and attempt to A-C-P and create/merge PRs.

Resolve any merge conflicts in the same manner as above if there are any pending.

---

How could these problems have been prevented?

Review the workflow on Bob & Carol & Ted & Alice and try to identify all of the individual things that they did wrong **AND** all of the things that they should have done but failed to do. Write up descriptions of those things and put those into the README of the repo.


## Resources
No additional resources are required for today's exercise.

## Submission Instructions

For today's lab assignment in Canvas, submit your individual thoughts on this exercise and what you learned from it. 2-3 sentences is minimally adequate.

## Merge Conflict Exercise

