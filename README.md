# Shopping Cart

![badge](https://img.shields.io/github/languages/top/nronzel/shopping-cart)
![vite](https://img.shields.io/badge/Build-Vite-ffc51d) ![chakra](https://img.shields.io/badge/UI-Chakra%20UI-3cc7bd) ![react](https://img.shields.io/badge/Framework-React-149eca)

[VIEW THE SITE](https://keebstore.netlify.app/)

## Description

This project was created for The Odin Project shopping cart project in the React section.
The intention of this project was to practice utilizing testing in a React application.

The site contains basic functionality. It utilizes React Router to handle the routes.
The website itself is simple. Only two pages (landing page & products) with a drawer component for the shopping cart.

I hit a wall pretty quickly with this project as the cirriculum calls to use Creat-React-App and I opted to use
Vite instead. This choice quickly backfired as I realized Vite doesn't play nicely with the Jest testing library out of the box.
This is apparently due to Vite's plugin system. So instead of dealing with the headache of trying to set up Jest with Vite, I opted for Vitest, which
integrates nicely with Vite and allows me to use all of the same selectors, etc, as Jest.

Overall this was a fairly simple project once I figured out how to get testing to work.

## Installation

Clone the repo, cd into the directory, and install the dependencies:

```bash
git clone https://github.com/nronzel/shopping-cart.git
cd shopping-cart
npm install
```

Launch the dev server:

```bash
npm run dev
# open localhost:5173 in your browser to view the site
```

Build the production version and launch the preview:

```bash
npm run build
npm run preview
# open localhost:4173 in your browser to view the production preview
```

## License

GPL-3.0

## Tests

to run the tests in this project:

```bash
npm run test
```
