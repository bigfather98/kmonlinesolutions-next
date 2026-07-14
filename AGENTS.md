<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:git-branch-pr -->
# Git Branch & PR Workflow

After completing any group of tasks (fixes, features, changes), you MUST proactively ask the user:

> "Shall I create a new branch and open a PR against `master` with these changes?"

Wait for the user's response before proceeding. If they say yes:
1. If there is already an open PR from this session, commit and push to that same branch to update the existing PR.
2. Otherwise, create a new branch with a short descriptive name (e.g., `fix/seo-issues`, `feat/add-contact-form`)
3. Stage all changes (`git add -A`)
4. Commit with a descriptive message summarizing the changes
5. Push the branch to origin (`git push -u origin <branch-name>`)
6. Create a PR against `master` using `gh pr create` with a clear title and body detailing what was done

Use `git branch -r` to check the default remote branch name before creating the PR (it may be `master` or `main`). Pass the correct name as `--base`.
<!-- END:git-branch-pr -->
