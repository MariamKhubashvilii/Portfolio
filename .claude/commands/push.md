---
description: Stage, commit, and push all changes with an auto-generated commit message
---

Look at the current git state with `git status` and `git diff` (both staged and unstaged) to see everything that's changed.

Write a commit message that matches this repo's existing convention (check `git log --oneline -15` for examples): a type prefix (feat/fix/ux/perf/chore/docs/revert), an imperative-mood subject line, and — if there's more than one distinct change — a bulleted body explaining what changed and why, not just what files moved.

If the user passed extra context as $ARGUMENTS, use it to inform the message (e.g. what the change was for), but still write the actual message yourself based on the diff, don't just paste $ARGUMENTS in as the message.

Then run:
1. git add -A
2. git commit -m "<message>"
3. git push origin <current branch>

Report back the commit hash, the message used, and confirm the push succeeded.
