Send one child per call: `{agent, task}`.

Two profiles come with this repository:

- `entry-scout` finds the entry points that a change needs. It answers with candidate entry points
  as `file:line`, each with the mechanism family and with what it did not check. That answer is a
  candidate list, not a decision: read its first candidate yourself before you write.
- `mod-reviewer` checks the semantics that `validate_mod` cannot see. The first line of its answer
  is `PASS`, `WARN`, or `FAIL`. Then come the findings with `file:line`, the evidence, and the
  smallest fix, and a last line that begins `NEXT:`.

Call one child at a time, and wait for its answer before you continue. Both profiles are
read-only: they write no file, so you apply every change.

Write the task so that it stands alone. The child does not see this conversation, so name the mod,
the intent, and the planned change in the task.
