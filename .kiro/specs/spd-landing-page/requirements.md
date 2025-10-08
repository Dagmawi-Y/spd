# Requirements Document

## Introduction

The SPD (Side Project with Daggy) landing page is a modern, minimal, monochrome website built with Next.js to promote and manage applications for a 3-month mentorship program. The site serves as the primary touchpoint for potential applicants to learn about the program, view previous cohort work, and submit applications. The design emphasizes clean, professional aesthetics with strong typography and generous spacing, using only black, white, and subtle gray tones.

## Requirements

### Requirement 1

**User Story:** As a potential applicant, I want to immediately understand what SPD is and its value proposition, so that I can quickly decide if this program is right for me.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the system SHALL display a hero section with the title "Side Project with Daggy (SPD)"
2. WHEN the hero section loads THEN the system SHALL show the tagline "A 3-month mentorship helping aspiring engineers build real projects and grow into world-class developers"
3. WHEN the hero section is displayed THEN the system SHALL include two prominent call-to-action buttons: "Apply for Cohort 2" and "See Previous Cohorts"
4. WHEN the page loads THEN the system SHALL use only monochrome colors (black, white, and subtle grays)
5. WHEN the hero section is viewed THEN the system SHALL display strong typography with generous spacing

### Requirement 2

**User Story:** As a potential applicant, I want to learn about the program structure and process, so that I understand what to expect and how it works.

#### Acceptance Criteria

1. WHEN a user scrolls to the About section THEN the system SHALL display a brief description of the program's purpose including mentorship, discipline, and building impactful projects
2. WHEN a user views the "How It Works" section THEN the system SHALL show a 3-step timeline with the steps: "Apply & get selected", "Build a project with mentorship", and "Present your final project"
3. WHEN the timeline is displayed THEN the system SHALL present the steps in a clear, sequential visual format

### Requirement 3

**User Story:** As a potential applicant, I want to see examples of previous work, so that I can understand the quality and type of projects expected.

#### Acceptance Criteria

1. WHEN a user views the Previous Cohorts section THEN the system SHALL display two projects from Cohort 1
2. WHEN each project is shown THEN the system SHALL include the project name, short description, and demo link placeholder
3. WHEN the showcase section loads THEN the system SHALL present projects in a clean, organized layout

### Requirement 4

**User Story:** As a potential applicant, I want to submit my application through the website, so that I can apply for the mentorship program.

#### Acceptance Criteria

1. WHEN a user accesses the Apply section THEN the system SHALL display a form with the following required fields: First Name, Last Name, Email, Telegram Username
2. WHEN the application form loads THEN the system SHALL include optional fields: Phone
3. WHEN the form is displayed THEN the system SHALL include a "Do you already have a team?" field with Yes/No options
4. WHEN the application form is shown THEN the system SHALL include a text area for "Tell me about a project you built" with an optional link field
5. WHEN the form loads THEN the system SHALL display checkboxes for "Your previous experience" with options: Front-end, Back-end, Full-stack, Mobile, ML/AI
6. WHEN the application form is presented THEN the system SHALL include a text area for "What should I know about you?"
7. WHEN the form is displayed THEN the system SHALL include "Are you able to commit to 3 months?" with Yes/No options
8. WHEN the application form loads THEN the system SHALL include a select field for "Hours per week available"
9. WHEN the form is shown THEN the system SHALL display checkboxes for "Courses taken" with an "Other" text field option
10. WHEN a user completes the form THEN the system SHALL validate all required fields before submission

### Requirement 5

**User Story:** As a potential applicant, I want to find answers to common questions, so that I can make an informed decision about applying.

#### Acceptance Criteria

1. WHEN a user views the FAQ section THEN the system SHALL display collapsible Q&A items
2. WHEN FAQ items are shown THEN the system SHALL include topics such as "Who can apply", "Is it free", and "Time commitment"
3. WHEN a user clicks on an FAQ item THEN the system SHALL expand to show the answer
4. WHEN FAQ items are collapsed THEN the system SHALL show only the question titles

### Requirement 6

**User Story:** As a user, I want to access the site on any device, so that I can view and interact with the content regardless of screen size.

#### Acceptance Criteria

1. WHEN a user accesses the site on mobile devices THEN the system SHALL display a responsive layout that adapts to smaller screens
2. WHEN the site is viewed on tablet devices THEN the system SHALL maintain readability and usability
3. WHEN accessed on desktop THEN the system SHALL utilize the full screen width appropriately
4. WHEN the layout adapts THEN the system SHALL maintain the monochrome design and typography hierarchy

### Requirement 7

**User Story:** As a user, I want to contact the program organizer, so that I can get additional information or support.

#### Acceptance Criteria

1. WHEN a user views the footer THEN the system SHALL display "SPD © 2025 | Made by Daggy"
2. WHEN the footer is shown THEN the system SHALL include clickable Telegram and email links
3. WHEN contact links are clicked THEN the system SHALL open the appropriate communication method

### Requirement 8

**User Story:** As a site visitor, I want smooth navigation between sections, so that I can easily explore all content.

#### Acceptance Criteria

1. WHEN "Apply for Cohort 2" button is clicked THEN the system SHALL scroll to the Apply section
2. WHEN "See Previous Cohorts" button is clicked THEN the system SHALL scroll to the Previous Cohorts section
3. WHEN navigation occurs THEN the system SHALL provide smooth scrolling transitions
4. WHEN sections are accessed THEN the system SHALL maintain consistent spacing and typography throughout