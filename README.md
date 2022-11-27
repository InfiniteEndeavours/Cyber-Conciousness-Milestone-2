# Security Consciousness Online

This website is designed to act as a information outlet for users who are looking to be more security conscious online. It is an interactive site and is responsive on a number of devices. Using API's I will try to help users be more security conscious online.

The live website can be found [here](https://infiniteendeavours.github.io/Cyber-Conciousness-Milestone-2/).

[### Am I responsive picture here]()

# Contents

* [User Experience](#user-experience)
	* [Project Discussion](#project-discussion)
	* [User Stories](#user-stories)
* [Design & User Interface](#design-&-user-interface)
	* [Color Palette](#color-palette)
	* [Typography](#typography)
	* [Features](#features)
	* [Images](#images)
	* [Wireframes](#wireframes)
	* [Accessibility](#accessibility)
* Technologies
	* Languages Used
	* Frameworks, Programs, Libraries and APIs used.
* Deployment & Development
	* Local Development
	* Development
	* Deployment
* Testing
	* Feedback
	* Bugs
	* Validation
	* Testing User Stories
	* Lighthouse
	* Manual Testing
	* Automated Testing
* Credits

# User Experience

## Project Discussion

The aim of this website is to provide people with the knowledge and tools to defend them selves online. It will feature helpful tips, tools to check if they have been exposed in a data breach and a password generator.

Key goals of this project:

* To enable users to defend themselves in an ever changing digital landscape.
* To educate young people and the elderly on what they can do to remain safe online.


## User Stories

### Site Designer Goals

As the designer, I want to be able to;

- Make the site easy to read and informative.
- Make it responsive to accommodate a wide range of devices the different age groups use.
- Feature a password generator to allow for secure password generation.
- Allow users to see if their email has been involved in a data breach.
- Allow users to contact the designer should they have more questions.

### First-Time Visitor

As a first time visitor, I want to be able to;

- View information on how to stay safe online.
- Generate a new password.
- Download safety information.
- Navigate the site easily.

### Returning Visitor

As a returning visitor, I want to be able to;

- Quickly generate a new and secure password.
- Check if my information has been involved in a data breach.
- Share safety resources and tips with friends and family.

# Design & User Interface

## Color Palette
![Color-Palette](docs/color-palette.png)

The palette I have chosen is based off of [this palette](https://www.behance.net/gallery/133126993/Tekmain), though I have modified the second colour from #85A60F to #87A810, this was to allow the second colour to pass the WebAIM WCAG AAA standards on the #0D0D0D background.

The main reason for this colour scheme is that I feel, if used appropriately, can give off a futuristic feeling to the website, much like that of Cyberpunk. This kind of theme I feel is used throughout security and will be attractive to the end user.

## Typography

- 'IBM Plex Sans' from Google Fonts. This is a Sans font and will be used for main content, such as paragraphs, buttons and anchor tags.
- 'IBM Plex Mono' from Google Fonts. This is a monospace font and will be used for headings.

## Features

For this website, I have taken on a multi page design, where each page will feature dynamic content.

#### Home Page
The home page will include the following;
- Title of the Website.
- Blurb about increasing your Security Consciousness online.
- Section below the main section of the page to news articles/resources.

#### Passwords Page
The password page will include the following;
- A password generator, which will generate a 32 character password.
- Information and resources on how to create and use a secure password.
- Tips such as using a password manager.

#### Emails Page
The email page will include the following;
- A link to the HaveIBeenPwned API to check if a users email has been compromised in a data breach, with recommended actions if it has been found.
- Information and resources on how to keep their email account and other accounts secure.
- Tips such as using 2 Factor Authentication.

#### About Me Page
The about me page will include the following;
- Why the site was created and the goal I hope to achieve (Educating users on being safe online).
- Link to contact form.

#### Contact Me Page
The contact me page will include the following;
- A form that the user can fill out to contact myself. This will send an email using an email API.

#### All Pages
All pages will include the following;
- Navigation Bar to allow users to navigate to different parts of the website.
- Footer Bar to allow users to view the GitHub repository for the site along with social media links.

## Images
All images used were gathered from google under the Fair Use act.
The images used are as follows;
- The logo of the University Of Boston.
- The logo of the National Cyber Security Center.
- The logo of Tech Safety.
- The logo of Malwarebytes.
- The logo of Bitwarden.
- The logo of the Swiss Tech Institution.
- The logo of Authy.

## Wireframes
The wireframes for this site can be found [here](docs/wireframes/wireframes.pdf).

## Accessibility
I aim to keep the site accessible by following the below points;
- Making sure that all colors used pass the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- Use Semantic HTML on all pages of the site.
- Including the `sr-only` class to ensure that screen readers are accounted for.
- Including alternative text to photos, for people who rely on screen readers.

# Technologies

## Languages Used
Throughout this project, I used a variety of languages, these include;
- HTML
- CSS
- JavaScript

## Programs, Libraries, Frameworks and APIs used
During this project I used the following;
- Bootstrap 5.2 - This was mainly used to create a responsive layout for the site that accommodates all screen sizes used.
- Balsamiq - This was used to create wireframes of the site.
- Git - Version Control Software.
- GitHub - Online Git Repository.
- Gitpod - Online IDE.
- JetBrains WebStorm - Local Development IDE.
- Font Awesome - Social Media Icons.
- Developer Tools - A mixture of Firefox and Chrome Developer tools were used.
- CloudConvert - To convert images from PNGs to SVGs.
- HaveIBeenPwned - Their API was used to check if an email address has been involved in a breach.
- EmailJS - This API was used to allow users of the site to fill out a contact form which is then sent to my email.

# Development and Deployment
During this project, I used a mix of both local and online development.

## Local Development
For Local Development, I used the WebStorm IDE.

I performed the following actions to enable local development of this project;
1. Log into Github
2. Copy the Repository URL.
3. Establish a new terminal session on your local machine.
4. Enter `git clone https://github.com/InfiniteEndeavours/Cyber-Conciousness-Milestone-2`
5. Open WebStorm and open the repository.

Ensure you have Node.JS installed so that you can download the required dependencies (Jest and Jests DOM Environment).

## Online Development
For development in an online IDE, I performed the following;
1. Logged into GitPod.
2. Selected New Workspace.
3. Chose this repository.
4. Awaited the build process.
5. Started Development when loaded.

While I did use GitPod to host an online workspace, I connected to this session via the plugin provided by WebStorm, as this is my preferred IDE.

## Deployment
I used GitHub Pages to deploy the live site.

This was performed by following the below actions;
1. Log into GitHub.
2. Navigate to the repository for the project.
3. Click Settings.
4. Select Pages.
5. Select the Main branch and set the folder to `/root` (This is the default folder), then click save.
6. After the process is complete, (about 2-5 minutes), refresh the page and a URL will be displayed at the top of the screen.

I was required to use a Proxy to work around a CORS error that has been frequently documented about.

Without going too in depth, I used a VPS I own to create a CORS-Anywhere Proxy. I then forwarded my domain, InfiniteEndeavours.co.uk, to it and created an SSL using Lets Encrypt so that the proxy used HTTPS.

HTTPS was needed as you cannot make a call to an API which is using the HTTPS Protocol using a HTTP Proxy.

# Testing
During this project, I used both Google Chrome's and Firefox's development tools to help me with troubleshooting issues encountered in my HTML, CSS and JavaScript (Including API issues).

## Bugs

- Known Issues
  - It is possible when clicking the 'Check Email' button on the Emails page, that the request doesn't reach the Have I Been Pwned API. From my investigation all JavaScript works correctly, and it seems to be an issue between the Proxy server and the HIBP API.

- Resolved Bugs
  - CORS Error - When querying the Have I been Pwned API, a CORS error was received. The error listed that access to the API was blocked by the browser as there was no 'Access-Control-Allow-Origin' header on the requested resource.
    - The workaround to this was to either use or create a proxy server using CORS-Anywhere.

## Validation
To validate the HTML, CSS and JavaScript of the site. I used the following sites;
- [HTML Validator by W3C](https://validator.w3.org/).
- [CSS Validator by W3C](https://jigsaw.w3.org/css-validator/).
- [JSHint](https://jigsaw.w3.org/css-validator/) Installed locally.

### HTML Validation



