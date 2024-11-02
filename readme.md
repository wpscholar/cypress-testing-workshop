# Cypress Testing Workshop

## Agenda

* Introduction to Cypress
* Writing Your First Test
* Best Practices
* Testing a Real App
* Cypress Plugins
* Digging Deeper

## Prerequisites

* [Node](https://nodejs.org/en/download) >= 18
* [Chrome](https://www.google.com/chrome/)
* [VS Code](https://code.visualstudio.com/Download)
* [Git](https://git-scm.com/downloads)

## Set Up

* Create a folder
* Open terminal in folder
* Run `npm init`
* Run `npm install cypress --save-dev`
* Run `npx cypress open`

## Writing Your First Test

Our goals:

* Use the starter spec that visits [example.cypress.io](https://example.cypress.io)
* Find the word "type" on the page
* Click it to visit the `/commands/actions` page.
* Get the email input field
* Type `fake@email.com` in the field
* Validate that the value of the email field is `fake@email.com`

Resources:

* [View step-by-step changes](https://github.com/wpscholar/cypress-testing-workshop/compare/de1bece4a4f0c2e3109cbe93afb26410cbcaf578...2606f37fb67300f2020468ca06e43cec9b617214)
* [View Cypress walk-through](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test)

## Google Search Challenge

Goals:

* Visit [google.com](https://www.google.com)
* Type `wpscholar` in the search box
* Submit search
* Validate that a result containing `wpscholar.com` exists
* Click the result
* Validate that the URL is [wpscholar.com](https://wpscholar.com)

Resources:

* [View step-by-step changes](https://github.com/wpscholar/cypress-testing-workshop/compare/5230e1c587ff7d0a7520214416fdcb5c7c6cf925...37d14efc7c9d56b184b46aadb3465e0a88f65544)


## Resources

* [Todo App](https://todomvc-app-for-testing.surge.sh/) - This is what we'll be testing