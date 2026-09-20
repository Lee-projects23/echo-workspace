# ECHO Admin Portal implementation plan

## Goal
Build the complete ECHO admin experience as a polished, responsive operating system using the project’s existing React/TanStack foundation. Use realistic mock data and functional client-side interactions now, while keeping future service integrations cleanly separated.

## Experience and visual system
- Create a premium Apple/Linear/Notion-inspired design system with light and deep-black themes, blue accents, glass surfaces, 20–28px radii, soft shadows, and SF Pro-style typography fallbacks.
- Persist theme choice and add subtle 200–300ms transitions, reduced-motion support, loading skeletons, page transitions, card lift, sidebar motion, modal blur, search expansion, and animated controls.
- Add the revised global footer: only “Powered by Xelevate” at low opacity. Keep full website, email, and phone details exclusively on Help.
- Ensure desktop, tablet, and mobile layouts remain usable without overlap or clipped text.

## Navigation and shared shell
- Build reusable navigation, collapsible/sliding sidebar, universal search, theme control, back button, notification menu, profile menu, footer, glass panels, dialogs, uploads, selectors, pickers, and empty/loading states.
- Universal search will search mock employees, clients, tasks, activities, advances, bills, and vault files, with grouped results and direct navigation.
- Add distinct routes and metadata for Welcome, Authentication, Dashboard, all six creation/data modules, Vault, Bill Book, Group Chats, Profile Settings, Help, and reusable Employee Profile.

## Entry and authentication flow
- Welcome: full-screen rotating premium backgrounds, centered ECHO identity, restrained floating motion, and one “Enter Workspace” action.
- Authentication: animated Sign In/Sign Up switch, validated fields, remember-me, forgot-password state, and continued rotating imagery.
- Use a mock authenticated session for this version so the complete experience is testable without a live account service.

## Dashboard and task workflow
- Build personalized greeting, browser-style Pending/Completed tabs, task creation dialog, numbered task rows, checkbox completion, and preserved in-session history.
- Build six premium quick-action cards linking to the requested modules.
- Include representative task and activity states, notifications, and dashboard loading treatment.

## Core modules
- **New Task:** employee/manual assignment, voice recorder UI, description, date and 12-hour schedule controls, requirement checkboxes, narrative, validation, and success state.
- **New Employee:** validated personal/bank/employment sections, account match indicator, up to 10 recurring tasks with frequency/day rules, worker permissions, and reusable employee preview.
- **New Client:** validated business fields, automatic group-chat preview, employee participant selection with 2–20 rule, and success state.
- **New Activity:** complaint/work assignment form, employee selection, before/after upload previews, validation, and success state.
- **Advances:** summary, searchable table, new-advance dialog, row navigation, and reusable detailed employee profile with advance history.
- **Overall Data:** executive metric cards, responsive charts built from lightweight UI primitives, performance summaries, and recent activity feed.

## Supporting modules
- **Personal Vault:** Finder-inspired mock file manager with folder creation/opening, breadcrumbs, rename, delete, drag/drop upload, and grid/list modes.
- **Bill Book:** quotation/invoice/bill tabs, paid/pending/draft metrics, searchable mock records, and future-API boundary.
- **Group Chats:** Slack-inspired group list, search, online states, mock conversations, attachment and voice controls.
- **Profile Settings:** editable profile details, avatar preview, password section, and animated appearance setting.
- **Help:** dedicated glass support cards for Xelevate website, email, and phone with copy-to-clipboard feedback.

## Architecture and validation
- Organize mock domain data and reusable UI by feature so future authentication, storage, chat, billing, notifications, OCR, GST, attendance, payroll, signatures, logs, and AI search can replace mocks without redesigning pages.
- Validate all forms and constrained inputs in the browser; encode external links safely and avoid rendering user-authored HTML.
- Do not add a live database or authentication service in this mock-data phase.

## Verification
- Check all routes, buttons, menus, dialogs, tabs, forms, theme persistence, copy actions, mock voice/upload interactions, and cross-page navigation.
- Verify desktop and mobile rendering with screenshots, check console/runtime errors, and confirm every content route has unique title, description, Open Graph, and Twitter metadata.
