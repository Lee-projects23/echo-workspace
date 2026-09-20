# ECHO Workspace

This is the kind of prompt you should use in Lovable, Bolt.new, v0, Cursor Composer, Claude Code, or any AI full-stack builder. I rewrote your requirements into a structured product specification so the AI generates a production-level app instead of a messy prototype.

# MASTER PROMPT — ECHO Admin Portal (Apple-Level UI/UX)

Build a premium SaaS-style Admin Portal for a company named ECHO.

Design Philosophy: Apple's website + Linear.app + Notion.

* Ultra-clean UI

* Smooth glassmorphism

* Rounded corners (20–28px)

* Premium typography (SF Pro Display/Inter)

* Micro animations (200–300ms)

* Beautiful shadows

* Fully responsive

* Dark Mode & Light Mode

* Persistent theme preference

* Premium loading transitions

Branding

* Company: ECHO

* Footer on every page:

  * Powered by Xelevate

  * xelevate.in

  * [linkesh@xelevate.in](mailto:linkesh@xelevate.in)

  * +91 9791062642

* Footer should be subtle and aesthetic.

# TECH REQUIREMENTS

* Next.js 15

* React

* TypeScript

* Tailwind CSS

* shadcn/ui

* Framer Motion

* Lucide Icons

* Supabase-ready architecture

* Component-based architecture

* Mock data for now

* Future-ready APIs

# COLOR SYSTEM

### Light Mode

* White backgrounds

* Soft gray surfaces

* Black typography

* Blue accent

### Dark Mode

* Deep black (#090909)

* Glass panels

* White typography

* Blue accent

Theme should transition smoothly.

# APPLICATION FLOW

![](data\:image/svg+xml;charset=utf-8,%3Csvg%20font-family%3D%22-apple-system-body%2C%20ui-sans-serif%2C%20-apple-system%2C%20system-ui%2C%20Segoe%20UI%2C%20Helvetica%2C%20Apple%20Color%20Emoji%2C%20Arial%2C%20sans-serif%2C%20Segoe%20UI%20Emoji%2C%20Segoe%20UI%20Symbol%22%20font-weight%3D%22400%22%20data-d-component%3D%22svg%22%20fill%3D%22currentColor%22%20height%3D%22140%22%20style%3D%22color%3Argb\(255%2C%20255%2C%20255\)%22%20viewBox%3D%220%200%20700%20140%22%20width%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%2220%22%20y%3D%2235%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2280%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%3EWelcome%3C%2Ftext%3E%3Cpath%20d%3D%22M140%2060%20L190%2060%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M190%2060%20L180%2054%20M190%2060%20L180%2066%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Crect%20x%3D%22190%22%20y%3D%2235%22%20width%3D%22140%22%20height%3D%2250%22%20rx%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22260%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%3ELogin%2FSignup%3C%2Ftext%3E%3Cpath%20d%3D%22M330%2060%20L390%2060%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M390%2060%20L380%2054%20M390%2060%20L380%2066%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Crect%20x%3D%22390%22%20y%3D%2235%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22450%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%3EDashboard%3C%2Ftext%3E%3Cpath%20d%3D%22M510%2060%20L570%2060%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M570%2060%20L560%2054%20M570%2060%20L560%2066%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Crect%20x%3D%22570%22%20y%3D%2235%22%20width%3D%22110%22%20height%3D%2250%22%20rx%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22625%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%3EModules%3C%2Ftext%3E%3C%2Fsvg%3E)

# 1. WELCOME PAGE

![Glassmorphism Login Form](https://images.openai.com/static-rsc-4/c1b_IFC82FuqHxycAhd1GwbAYy1MadU1uJYbRAA0YoMx2T183OQ_ekGRPF1Y9uA6BCI__Ap55OTUDAIgqF1YkxAL7wsA0fmcHC29FxFxhHPnU4k-FwgFzS1L-qre3diNiDYZcFcoHiCC0R7U3EGr_pGrkRBMQ1hgH-0Ces6pouI?purpose=inline)

![Futuristic UI login screen with glowing neon blue input fields and floating cyan-blue 3D spheres on a glass panel](https://images.openai.com/static-rsc-4/zLcet90U-BIvH5eW902dLfbpxCdQcoBQGfUBE0WwFfSHH2BViFBFsy1khxWhHw-6qJrizU7eFDNOylojVmVex1rvtLAUJQMho1C3i2XfWMsXPdCmYMxP622Esqpsj2IfJ5wsy2xaoi-7IRNxz0EgnU3z4nkoCyXaatWnKUMo9RQrmCEb0IUpdt9CubMaPssU?purpose=inline)

![iPhone 15 Pro (Concept Wallpaper) - Silk White - Wallpapers Central](https://images.openai.com/static-rsc-4/MriGkNMWPgOELgOwcK14-El_7lLqDljNZoleJnyoNjI2j3iHA2j-u2Sf5iZcgKrgpyc-pYqGeVtcruPduCMKaV9zLnqpIrw0Z_6u0YpBcCYTMuzdUY5FnmpkW3_fKWvGVKoBPsEwz-NjDKM_2GkcnjWLO_a5xVfz-H-TC-S6jzA?purpose=inline)

6

First screen should feel like Apple's product landing page.

### Features

* ECHO Logo centered

* Fullscreen animated background

* Background images shuffle automatically

* Soft floating animations

* One large button

> Enter Workspace

Clicking opens Authentication.

# 2. AUTHENTICATION

![Modern Dark Login Screen Design by jishad hussain on Dribbble](https://images.openai.com/static-rsc-4/prn_dADp7LWY9kw6nwkWf7CkJGUPTIDpb1E8T-szvqKHW9bSmA5c0d0EPcdK00_xNG-T39LsErsX9kg82rbdPJeIedc6avFVVv6vBYsLq8OIPIyop41t2IJ-h4RUHMp2CtD7JgMWm4xWKLBP0QNb2J7Gj-7LM-PV5gZZ9puTkck?purpose=inline)

![Sign up sing in login registration modal screen by Robin Holesinsky on Dribbble](https://images.openai.com/static-rsc-4/OFUwhway4nMgRuZ87YmV-3RimcbDrWUjMR6Mu3VzmaLGPjoowdVs2fwSdzc_DlJr97wp4U1abdsKR4xCmUQSjwsj7iUsfUaeyEAtcZA_lYQgTi0zmGC9Vy-MX46QIsB4svFNKVnX7cakXdgIjx_2YktJ_m1nGlWzKW1cej_PWsA?purpose=inline)

![Futuristic login interface with dark and curved matte glass panel and spheres.](https://images.openai.com/static-rsc-4/6Q20FugS2hcbYzqMT74TO5hD50ubku6pgiFf8Lybz-OadRtaURgzIwp0ti9zgH6jozXux25BBoS10i_BGf4OoIy5aobI5mx5tkkz380qn0AWBZiM_xPwQ-wg6_nqiT9daDmQPBh4WlMx4XDtppAbprXBFynAIECI7H4oK_dFGfYQo-toaelCxP3rgcHKdbuF?purpose=inline)

5

Background keeps changing while on login.

### Sign In

* Email

* Password

* Remember me

* Forgot Password

### Sign Up

* Full Name

* Email

* Mobile Number

* Password

Smooth page transitions.

# 3. DASHBOARD (HOME)

After login.

Top greeting:

> Good Morning, Linkesh.

Below:

> Your Tasks Today, Sir.

# TOP NAVBAR

![glass dashboard by Jamik on Dribbble](https://images.openai.com/static-rsc-4/jkxtAdoTI8B3Lhutd21RYzvZ0YfxX0wPkT50U73jDlpceRaNqF4Ft2fopoWM8u1ELsTlG4VQy7au2cxRiO4Yhz1LN2Vqh_bCR9-lnqyKhEhUwl3kdITD2R8UgZkj2Ld8DB7ZeGNfElowSdBHOAfrFPrTJ2eWk2JX3s3KLuLgHVY?purpose=inline)

![Glass Design designs, themes, templates and downloadable graphic elements on Dribbble](https://images.openai.com/static-rsc-4/NJJlZ7evuevHC6z8FN3ySB7ewOipLH6PAUEGsd8NDkfuAApxkdIveovgqwyNNi5ebe_Gdp5PBqbcymqPi0nOsx2f9Diqj0Xcn46jEfH7AcmDgAg3cD3fSi5BMzboVYXhg8fMAN-P83M0xzy1ElBs9tM5Y5TGOes3rTeBLoDNjo0?purpose=inline)

![Core 2.0 – Dashboard Builder by Tran Mau Tri Tam ✪ for UI8 on Dribbble](https://images.openai.com/static-rsc-4/xGYWwpRuZNsqgTCzchojq7ZThBuloU9udxW8QJZ2xBV5znyO6OsjTz8Lvq4izmtJeyBdt5-rE1OAM3EPGaATFAnWkLCa4hFcMXKeSDmZEGUlXxmGmRI56VN5XKtZJULGf7nxZmr7ZmbtVaT7OqLgh5aCkfQm2lATKvVDqYF_CdE?purpose=inline)

5

Contains:

Left:

* Back Button

* Home

Center:

- Universal Search

Right:

* Notification Bell

* Profile

* Three-line Menu

Search should be capable of searching:

* Employees

* Clients

* Tasks

* Activities

* Advances

* Bills

* Vault files

# SIDEBAR MENU

![Apple-Style Glassmorphism Sidebar](https://images.openai.com/static-rsc-4/70FiJ0t6A2TFm9LcDbWif0fQxONOfxWgc9dHGfKQxVZYQ6xxs1MzY_NAA6KlqkFUfzfqbmUn-ccGnNS-FT6FcA6QIcf07TpJdKudlE_Nn6QXlmkf5aq48PEfDdn3oJ5qYtW7-VsN0WL-4eiyPPA7ARg0xiwjR3J5zqV6wfxNgmk?purpose=inline)

Opens from the three-line icon.

Sections:

* Home

* Personal Vault

* Bill Book

* Group Chats

* Profile Settings

* Help

Bottom branding:

Powered by Xelevate

# HOME PAGE CONTENT

## Task Tabs

Browser-style tabs.

![Build a Web App with Manus and Deploy with DeployHQ](https://images.openai.com/static-rsc-4/lJ9RvQ1JV0hvHFe8PnpL-hwACVBqPwJ6LJ7r59WaFtfHtzXU4VONgIy6VZSsBJhEedBVlH6hnGhWqx-ewXSjxCcFun-aMPisTVNwgKmAo4K2C2YimA5QOSCayiitQIKiu7E3-jNmwmUrn7k778tXULYQiYlTzWXusdv2uyd6uyk?purpose=inline)

* Pending Tasks

* Completed Tasks

Default:

Pending.

### Add Pending Task

Simple popup.

Input:

- Task Name

Tasks display as:

* Checkbox

* Number

* Task

Example:

* 1. Visit Client

* 2. Prepare Invoice

Checking moves task into Completed.

Completed tab preserves history.

# QUICK ACTION GRID

![Mushroom Cards - Build a beautiful dashboard easily 🍄 (Part 1) - #1046 by rhysb - Share your Projects! - Home Assistant Community](https://images.openai.com/static-rsc-4/SX6JEVdD_gtM0NPaIR6cZlLEn0tadm05v9s2u32gABYIOsxRASsocnXeO784HLptAmINqNF_nqeTIF7ietManZhZmDVIQ4NzxxFqBQnP9FPW5DTsSYn2ziz_vFXb57B9VCW4LMNF56kq4GKTqPer2JWcwkEn1NsnkgHaEhyp0-U?purpose=inline)

Six premium shortcut cards.

1. Create New Task

2. Create New Employee

3. Create New Client

4. Create New Activity

5. Create New Advance

6. Overall Data

Each opens a full-screen page.

# MODULE 1 — CREATE NEW TASK

![Task Manager Mobile App UI/UX - Add New Task by Keitoto  on Dribbble](https://images.openai.com/static-rsc-4/gb5yuoHUhdBr2_FtZPX3bypF0swJzkHFk8eIUtahSWCvJmclzUo9T91ysQ1tmiYVxl2Bjt6H2a4Zf5sw1TRLuhdH9HRAW_3srkQVNMqvAM4X6hOR0ra80fUvHFpeZwp0CFNKnwJSfCV0QE1RpYhbKxCsBTrbqKcuJeIIiVoSfLU?purpose=inline)

![Create Event | Dark mode by Dmitry Sergushkin on Dribbble](https://images.openai.com/static-rsc-4/wtyJDPXEtZG8M9Kkrfo7RRyMLN9rNuRSyeYP_Eo3A297uTSrQ9mqR0s9zKMVEiFWFBv8wWDLax-TMNlFRWndKw8VEjlt77wUj7zgdNJRv1vFD_UpO9-RwIJVFGQZ_jGqFhkXaL8FaXfYAvLghHEZCgQdmyzkXAhoalb2vRLgEhE?purpose=inline)

![Upload files - Modal by Mateusz Nieckarz on Dribbble](https://images.openai.com/static-rsc-4/tQvGDRpqMyMSxP5AdyTT8FyR6794FwL-DJx_i6R6mVWSTwbK6SNM5FHXCVmZAIIpSNnUAkgme41JGBA2xs_-9YGAmNCGIPf_EPgKJ61Yw-A39W271tCLcCU4fqGIftAD2lFmtmhJEsip4t3MGrl49gDdHkxH1uXSvdSfNd9C-oY?purpose=inline)

6

Header:

# Create New Task

### Form

Assign To

* Employee dropdown

* Manual typing

Record Voice

Built-in voice recorder.

Task Description

Large textarea.

Schedule

* Calendar

* Date

* Month

* Year

Check In

12-hour clock.

Check Out

12-hour clock.

### Employee Requirements

Subheading.

Checkboxes.

* Upload Before & After

* Upload Voice Reply

* Upload 4 Photos & 1 Video

* Upload Signature

* Upload Mark

These determine what appears in Worker Portal.

### Narrative

Large note box.

# MODULE 2 — CREATE NEW EMPLOYEE

![Browse thousands of Add Employee images for design inspiration | Dribbble](https://images.openai.com/static-rsc-4/PXdtf13biZ_izOLhn7RF4GKKkD8epc-i56r0nGF8fy6NKpQhD-l1e5nmoJqBVqXQiM0GGAnRVT0oB33Ibl0VBdGtLBeXO9TgqmL41Ru78kIcrMdU1C5oAaIcOab5h8yHlvd_myaqalnuuKii_eXQ2t69wUpAPF2ycCYUccMuvyk?purpose=inline)

![Account Verification – LEDGERS India](https://images.openai.com/static-rsc-4/-S0Uszqiu_2dNaTelXViJJMvNcS7o7uuzn2momsV_NTYiRZZ3J6e0CIOQD_dnHiebCOKfyceG8Erh62Vv7pX-b1s7q2LCppe-DF2Z9yj3ukEtufW-sBvDSY9Wpqrp9_3IOoW1iMsTeKxuH35rliR5Y4RbJN7tgo9E_Oy8z6m0VQ?purpose=inline)

![Browse thousands of Employee Hr Dashboard images for design inspiration | Dribbble](https://images.openai.com/static-rsc-4/DxBCyIngMXqEcaBxUSy0vw_HEIy9H_ldJWnYcMJfNCDm1sVO9NDjEBL0sO8GQ996iF_lEB8oia6bQLR4bQywU6y5AO6HOVrX1cBT4JS4pLXiulvRLrK2cFjrTleIpFwoJy4_c-VagKLaqukjIOBD9cX4jDuBDffyeKtqll66Xz4?purpose=inline)

5

Header.

### Personal

* Name

* Aadhaar (12 digits validation)

* PAN

### Bank Details

* Account Number

* Confirm Account Number

* IFSC

* Account Name

Validation.

* Match → Green Tick

* Mismatch → Red Indicator

### Employment

* Employee Code

* Phone Number

* Designation

* Salary

* Agreement Start Date

* Agreement End Date

### Regular Daily Tasks

Allow up to 10 recurring tasks.

Each task supports:

* Task Name

* Frequency

  * Daily

  * Weekly

  * Monthly

* Weekly day selection

* Number of occurrences

Example:

> Cleaning Inspection — Every Tuesday & Friday

### Worker Portal Permissions

Admin toggles visibility.

* Personal Vault

* Photo Gallery

* Company Official Group

* Voucher Creation

# MODULE 3 — CREATE NEW CLIENT

![Onboarding Form, SaaS Platform by Octet Design Studio on Dribbble](https://images.openai.com/static-rsc-4/loMDO5xKbtsToU-wwEOMwnLwEROgcOB-_KyTE-lVqDaTvZL_c1-wrgMXV0ZmmthoejCEaZwUW8vqIXwoWBMH_J8TWTqadfrCEvAO1tFvZdAgw5bVvEm1x2TNRlwDu7haY5k6Ax2SwhD_ck0E-F-b-dXj5XndwbpsGFajbK5FWUo?purpose=inline)

![](https://images.openai.com/static-rsc-4/CJHfafIhD_NM1BMHl0_xluurHnk8uxGXJLNXKTE4bshXr-srcI_np9naVqmk7i2STMVCaDP7jWRN4JwKjF9e0DgxAZW4hEQH_vtZ-dl0tsM_89Mwh4hdMes32qh36qXjkYYo-11WckzzkgP3r6mkYaB9YKUU9EJWP_ctsWhK65s?purpose=inline)

![Browse thousands of Onboarding Form images for design inspiration | Dribbble](https://images.openai.com/static-rsc-4/O-zNRtSvdJhT2xunD9jUg0uMfvEaFEy4CbmIcPMfPuppq3VzODtozZUUqDDGugs4lENvcYynjvQGgumXoF8-i2mY3yOaL0SFUUzHCRsaECVSYF-RhMjqTs2Gea8YtZRcrgm0AjzpdbTTOzIOr8RQHl-qh3FDzddBqovA1GbR6YE?purpose=inline)

5

Header.

### Client Details

* Name

* Company

* Phone

* Email

* GSTIN

* GST Address

### Client Group Chat

Automatically create a dedicated chat.

Participants:

* Admin

* Client

Optional:

Add Employees.

Rules:

* Minimum 2

* Maximum 20

Employees can be added later.

# MODULE 4 — CREATE NEW ACTIVITY

![Customer Service Complaint Form Template | Jotform](https://images.openai.com/static-rsc-4/OK6ItiQxI-MxR4OjRpNW6O6dTv1QQ2Q23BTs7tLhEBz4mOJJCCvNINrj5vXMijZSKGGINZT6LgIi4PlIiNGFaICDEiH7slQjwSHNzE-vsdLpLpXwQewo4ndeWXfwURP0t8MrXweEHR_Kohxw5a-PXA3RUkqg1wNTtolY0tUv8X8?purpose=inline)

![imgsli - 創建出 Before 及 After 前後對比的照片，讓別人可以用拉動方式看對比 - 就是教不落 - 給你最豐富的 3C 資訊、教學網站](https://images.openai.com/static-rsc-4/hna4HQqcnsFZTsYifrU1A_P701U5L2GIYpjTGYZJO_GJzVyexR3BNN5z5D3sQt3iKcAe06lfxdXw8CvCEI9IArm7t2RHP0m6z09lfBKcTSNU3crgXQSFv9vZCXsKfGqhHIhh7cHuO0g3P99l_ZkagF6UNsLFtRBT4_tABvSEQW0?purpose=inline)

![Complaint Log Tracker Form Template | Jotform](https://images.openai.com/static-rsc-4/uvwmolsGHPXha7rGVHd9G2gl3_Y6XdSzMlH7WoszaRaDlKybQmZSIO9LOIm53C1M_juEqr3bdnvXvDI4JLqEIqAgKQ-c9gHQtQU6LSWXW-P7FIg5dyVp-Bnpk7h6QYNx0vuLW_Za-4jO4pOI-3h4kVJKLdncXij6NQX1B4kek_o?purpose=inline)

5

Header.

Purpose:

Admin receives complaints via phone.

Fields.

* Complaint

* Client Name

* Work Required

* Assigned Employee

Upload.

* Before Photo

* After Photo

# MODULE 5 — CREATE NEW ADVANCE

![Automate Employee Advance Payments with Accuracy and Compliance through Advances software | Digital HRMS Employee Advances Module](https://images.openai.com/static-rsc-4/6puKVW_Ueb2D5rdfTMswPfM-M6vRnChWFkhVdCK8GN_3BO1HCPl1EXwV7NtRL47fDdhWi_BHF14LSYET9iZcUwJ3_pKIR__v3HOSSwle6m9kX_J0BqWVCTIlqL4TtzMPFMsMxDQZPmYiWod2RorC7zWAMIz45_ozEXAdvsP26f4?purpose=inline)

![HR • PayRoll • Advance Salary System | Regal Fintech](https://images.openai.com/static-rsc-4/R67xfXMAbl7u9epjSSTFn5TAeJE5xhDpN8rsYVI-S8hKz8B5pxB_Smpx_sVBjzjFHs_Dag6uEjylp2UoXoJwMINAVueFx9i_Ko2b2q-gWvSDVaL0XjwDqmZby07p-EO1sW1IyUzJ9L7Iys810aDtUmtLMEiyRDgaFrNkZ6fQuXw?purpose=inline)

![Salary Advance Management Solutions](https://images.openai.com/static-rsc-4/JPlwPd88v9ig1DxrgYSSFz9f0ap3gBPlB4023j8ahmxfc059O3PSnnqIenDDr0eG7by0wfph8U9hcPNEi1lyl8itBn6vFhvrXC6V6wRnvpPUTRrEnMeT-vegDMuUt5eGu1mse3BDPWgwPd3uIIVlOb-lLCtX63eViBUhbCl1HPM?purpose=inline)

4

Header.

Top-right.

New Advance button.

### Existing Advances Table

Columns.

|
Employee

|

ID

|

Amount

|

Date

|

Time

|
| --- | --- | --- | --- | --- |

Clicking a row opens Employee Profile.

### Employee Profile

Show.

* Photo

* Name

* ID

* Department

* Years Worked

* Salary

* Rating

* Leave Used

* Advance History

This profile should be reusable across Admin Portal.

# MODULE 6 — OVERALL COMPANY DATA

![Sales Management Dashboard by Sujon Hossain on Dribbble](https://images.openai.com/static-rsc-4/TzRcj4MyP-26xLeAbOw51H-nvV6V5UflpAUmeUEiDULaa4m8cFMTFXaXG1NwesZTds7DLjuQk_wvrmxe7ovbwHpUNAjUvN9NOI3zlz_nPpyRaeSbcWw0M76ssay127fkQYyGvC6RZRS1P8TlZKYfdUu5rlDg-XMA0SrSBm9NtdY?purpose=inline)

![Best Data Visualization Techniques for 2026 | VisualizeMyData | VisualizeMyData](https://images.openai.com/static-rsc-4/3KIjmDTHzWQeXo2nSTGuspgcbcGQPUoiTjYeYCBNuWZ9xiBJiNsnrQm1WOosoE3GZ18bVjogyyz7I6NYLHusr3SxxKh31Yo4sYchDGJz9PeGXIpiep1CTMlMFjBd1sJDS-_AAtFnRFgErOeXNdj4UzAaKVK-vXwQ3mmmm-WqwMk?purpose=inline)

![Midjourney V8 Guide - Tutorials, Prompt Generator & Tips | midjourney-v8.com](https://images.openai.com/static-rsc-4/fW93cjgTpIhFrOjHCNbafFm0aS-vuTaPIg9WtnatxGJz57p8Tt5gtklHuL1Ii47E9Q_uXYk6m9zebnKabMXcR3xekfH1zUIYnVYt_QqIXxMJmGj_ylg2V7HECokbQLbc9u3dbT0tkXtoiwu8TtLoMHd-BcLXUBspgbHY3dZ_tpo?purpose=inline)

6

Executive dashboard.

Mock data.

Cards.

* Total Employees

* Active Employees

* Clients

* Open Tasks

* Completed Tasks

* Activities Today

* Total Advances

* Monthly Revenue

* Attendance Rate

* Leave Requests

Charts.

* Task Completion

* Monthly Activities

* Employee Performance

* Client Growth

Recent Activity Feed.

# PERSONAL VAULT

![The 12 exceptional macOS apps that will turn you into a Productivity Genius | by Nikhil Vemu | Mac O’Clock | Medium](https://images.openai.com/static-rsc-4/GobrbNfaZNB_4vEiAx7eXNLmm5BYjFG6GJxtgLuLbnyPjPYyXq49en1PhFYKirNGSVtnF7KtTO_rJ7KeisPAYwRNT4j9h7UkkcbOwnKG0DGUvmGZ39vKYM2T7RMy6TkwWakzX66lEfOAENCgYU1dx2ItNOKE_JH6PtvNRi7fz7k?purpose=inline)

![Colorful Admin Dashboard by Ahmad S. Afandi for Peterdraw Studio on Dribbble](https://images.openai.com/static-rsc-4/P7nLvUmzhP93LpVEAHJJSpC8wuROTu5W4E9h50MGbG9aDGlYFNMRVTP6ZUafU4j_WTOPEL--6GLAwR8PI1l8h9dKapMoa4SGmxJ8E3X6L5-DTyH23bwKyZ-dnY9vJxf9FwqI_6UqwgmmRBUpOqtGrvQBVwkyyi7jheaABTjs5OM?purpose=inline)

![File manager user interface design on desktop operating system mockup](https://images.openai.com/static-rsc-4/7kCvWP5ig45Wd_t30TL92aLMgGdFzqJszisMq9mxzHWhzGrx8-kgkhBGSZPx7YRd8V4Np0CoCwu3jeytL6ae6Q0WQVtVyFvf0mg_3I9gNvBEubB9of04Z-nKVlQ_pTIhXeMrf-Nr3RDzUYK46Xi27YNJDjmKfH-5EKoK_sr4CKNNmBbWHmFdEj-BH5LEARQq?purpose=inline)

6

Mac Finder inspired.

Features.

* Unlimited folders

* Rename

* Delete

* Upload anything

* Drag & Drop

* Grid/List View

* Folder breadcrumbs

# BILL BOOK

![Invoice Builder - AI SaaS Product Design by Musemind - SaaS Design Agency for Musemind on Dribbble](https://images.openai.com/static-rsc-4/w4CgGNx0Bndh1RCetwLuaEA0iNmoAuVfVQ24QN1hpsQwBaXqtB8c-Fw56ZSv_gGC_SDYnHoipNUxvkAGfZPupd0sSP7vcXm-wxGi_G-wGolwH2AkYLxo9wf-rr2i5W10Su8C6FoFf-nCeChl7ZOG_o1aHOgK6DBUGtmQnM679K0?purpose=inline)

![Billing & License Dashboard page by Avolix on Dribbble](https://images.openai.com/static-rsc-4/I3Nl0jh5mP-k8q65iWMNRN1No_UlhdcX0PfiXzO4TTm60yNj1S9cAoZaw8iSr0sBUBL8EqrD2hyQBio8OPnXxBZiq4Wj4EnY9icOUL3fPpv9fDv7wUOSUQGsVBuIX0EE4GjAHmjRI5SLYQ8eCQFcZ_D2EPysBHYA_cwEZn232qQ?purpose=inline)

![Metronome | Usage-Based Billing Platform](https://images.openai.com/static-rsc-4/4iD6x-S78M2fB0-FZanjquJ0LF1WhekVk7-udCYBVswv37bt3eDE2wuXkufpxwJhmgTnAol5wtJTP7KPPaSxuwUyv5GNhZ9IQOAQilohgvn0M6LSNrzqxp6F6beHwbXrTM7TSjuAERgR8wpNvRhm0RQ-JuUrPlnwHdowXAIgGfg?purpose=inline)

6

Mock module.

Future API ready.

Features.

* Quotations

* Invoices

* Bills

Dashboard cards.

* Paid

* Pending

* Draft

# GROUP CHATS

![AI Website - The Future Starts Here](https://images.openai.com/static-rsc-4/uer6ztcsa_G9T8QImBT0CAAqQSAPWsxLjHR_Njd8j1FAwnUAJh4N7ZKpSnKgFxjDy_3O0zOcRff3Zf5WGEVkARKpl-DS2RpRDbQEQKDTnEsMMb7lBCtkHXdSoivoaY0WcwHHH0hzwPANQ1vncEzDkgpnfC4B8GxPtMpZIBEWzD8?purpose=inline)

![ERP - Project Management Platform (Team Сhat) by Rustam Musaev for Brandux on Dribbble](https://images.openai.com/static-rsc-4/Q4PsYYsJ8GxPRMsp9-aiPf41uAbkxbUlyAqC29Q7oJpzRSCuciyuO6GrnyK_92Am2IG9QygaoY3U1DKZA9WN_JfTFQSlHB26qlFtJBcV91bxUpVHcwhxKpYbd1Jm9KstiY1_es5N66Jkx6Bku0kiUAJrcrAwLz2DaQku99wpUPs?purpose=inline)

![Messaging App - UI Design by Dang Ngoc Tri on Dribbble](https://images.openai.com/static-rsc-4/YCwcBvcY1JPrZgSLm0tgqYOUx52H_FDM7cDjCrQE7wCqpRxC3LHpuSzT2xkoQ11rEwV1PPOIiynL4Q9UVwldftFH5AlERN7VX3GWYNCcY5iVmE4jlOI2uxbGcdOfcOrMTtu05FHathPKhBX-uAL0Wm4aMOFt_-1DwXqAgkS05FQ?purpose=inline)

6

Slack-inspired.

Show all groups created from Clients.

Features.

* Recent chats

* Search

* Online indicators

* Attachments

* Voice messages

Mock for now.

# PROFILE SETTINGS

![Settings Modal - Appearance Settings Page UI by Mohammed Fazil for Stead on Dribbble](https://images.openai.com/static-rsc-4/Bq7cN3beu768fd6-_WS2VWh2rd9ZpTHBtcevLr_mSE7A8lFT6uTmvKsKW4M2ou6rhEQUErrtG6HEwtyEtZ-DCsGJhnwz9GfRmr9s6FFz1wluO99AvB47Rd-3kWQGIiXaqySsCFPN4tSZ1WlZOO7bbhcpd9FTAu2ADn5unJWhCJw?purpose=inline)

![OKX 个人主页设置教程：安全与个性化配置指南 - 懂币圈](https://images.openai.com/static-rsc-4/ebkUj3fEOtnuWzbL9MBVVvE5z_UFJ6o6YaOCSvNvq5reQ1-UMoGcMvV0ai-W9lDeqDaQ9eGI0Z76QjXg99rRWMKaQpUz5lJtmjeRTp8go6FhpVOUuPIc5lJx_J92GYtQhhXlQ-qDXhdM-cy-XtjZEfROUGWa2KFxk6I8VxjXCsk?purpose=inline)

![Appearance Settings Dialog by Dominik Eibensteiner on Dribbble](https://images.openai.com/static-rsc-4/-6-5PpuZ4Fwv0OMvEXBNLlfiREVRq5FWMBIZldQ1vYKHT5JIhIqe1jPh5cw0nqNlIHc-bvLwWlsJ55tWpLsoWlEMBvr_x4jgh7hUo6bzGVP2Obz7wWUOXRNc7Od7GLUII4d5C_Hcw7e10-IxBt_8VyI4mD3nDU1iI3M8Jq6-VeA?purpose=inline)

5

Apple Settings inspired.

Editable.

* Profile Picture

* Name

* Email

* Phone

* Password

Theme.

* Light

* Dark

Toggle should animate beautifully.

# HELP PAGE

Contains.

* xelevate.in

* [linkesh@xelevate.in](mailto:linkesh@xelevate.in)

* +91 9791062642

Elegant support cards.

# GLOBAL DESIGN RULES

Every page must include.

* Small Back Button

* Consistent spacing

* Glass cards

* Soft shadows

* Apple-style blur

* Rounded buttons

* Hover animations

* Loading skeletons

* Smooth page transitions

# MICRO ANIMATIONS

* Page fade + slide

* Button scale

* Checkbox morph

* Card lift

* Sidebar slide

* Theme transition

* Search expansion

* Folder opening animation

* Modal blur

All animations should remain subtle.

# COMPONENT ARCHITECTURE

Create reusable components.

* Navbar

* Sidebar

* Theme Toggle

* Search Bar

* Glass Card

* Employee Card

* Client Card

* Task Card

* Upload Component

* Voice Recorder

* Calendar Picker

* Time Picker

* Employee Selector

* Folder Component

* Analytics Card

# FUTURE INTEGRATIONS (Keep Architecture Ready)

Prepare database schemas and API placeholders for:

* Supabase Authentication

* Employee Portal

* Client Portal

* Real-time Chat

* Voice Messaging

* File Storage

* Attendance

* Payroll

* Bill Generation

* Digital Signatures

* Notifications

* Push Notifications

* Activity Logs

* AI Search

* OCR for Aadhaar/PAN

* GST Validation

# Expected Experience

The final product should feel like a premium enterprise operating system rather than a typical admin dashboard—combining Apple's elegance, Linear's minimalism, Notion's clarity, and modern SaaS UX with glassmorphism, fluid animations, and a polished dark/light experience suitable for executive use.
Replace only the branding section in the original prompt with this updated version.

## Updated Xelevate Branding

### Global Branding Rule

* Do not display `xelevate.in`, `linkesh@xelevate.in`, or `+91 9791062642` on every page.

* The footer on every page should contain only a subtle, aesthetic text:

  > Powered by Xelevate

* Keep it minimal with low opacity (40–50%), centered at the bottom, and consistent across both Light and Dark modes.

### Help Page

The Help page should contain the complete support information:

* Powered by Xelevate

* Website: `xelevate.in`

* Email: `linkesh@xelevate.in`

* Phone: `+91 9791062642`

Present these inside elegant glassmorphism support cards with copy-to-clipboard buttons and Apple-style spacing and animations.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f6517df-de31-49a4-ad6f-629b97cf9f62).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
