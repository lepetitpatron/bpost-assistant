# Current Feature

## Status

<!-- Not started | In progress | Completed-->>

## Goals

<!-- Goals and requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

- Dashboard UI Phase 1: `/dashboard` route (lazy-loaded, `/` redirects to it), light-mode global theme tokens in `src/styles.css`, and main layout (top bar with empty right side, greeting/date header, checklist and notebook panel shells, footer). Branch: `feature/dashboard-phase-1` (not committed or merged).
- Dashboard UI Phase v1.1: Today's Checklist now lists Task1, Task2 and Task3 (mandatory), and adding an optional task appends it to the list (`Task` model in `src/app/models/task.model.ts`, state held in signals). Checkboxes toggle `completed`. Same branch `feature/dashboard-phase-1` (not committed or merged).
- Dashboard UI Phase v1.2: `Task.completed` is now a boolean. Task rows follow the screenshot layout (checkbox + label, no badges), and a "Reset day" button in the checklist header unchecks all tasks. Same branch `feature/dashboard-phase-1` (not committed or merged).
