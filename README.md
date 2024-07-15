# HealthChallengeTracker

A simple Angular-based workout tracker application that allows users to log their workouts, filter by workout type, and see statistics. The application is hosted on GitHub Pages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- Add, edit, and delete workout entries
- Filter workouts by type
- Search workouts by name
- View workout statistics
- Responsive design

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Indu2011/health-challenge-tracker.git
   cd health-challenge-tracker
   
2. Install the dependencies:
   npm install

## Usage

Running Locally:
   Start the development server:
   ng serve

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployement

Deploying to GitHub Pages.
1. Build the project for production:
   ng build --prod --output-path docs --base-href /health-challenge-tracker/

2. Commit and push the docs folder:
   git add docs
   git commit -m "Deploy to GitHub Pages"
   git push

3. Go to your repository settings on GitHub.

4. Scroll down to the "GitHub Pages" section.

5. Set the source to the master branch and select /docs folder.

6. Save the settings and wait for a few minutes for GitHub Pages to deploy your site.

7. Verify Hosted Web App:
   Ensure your GitHub Pages is correctly set up and accessible at https://Indu2011.github.io/health-challenge-tracker/.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
