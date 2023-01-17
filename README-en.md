
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/f7lipe/frontend-test-two?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/f7lipe/frontend-test-two">
  
  <a href="https://github.com/f7lipe/frontend-test-two/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/f7lipe/frontend-test-two">
  </a>
    
</p>
<h1 align="center">
    <img alt="Banner" title="#Banner" src="./dir-assets/banner.png" />
</h1>

<strong>English 🇺🇸</strong>
<br>
[Portguese 🇧🇷](./README.md) 

<h4 align="center"> 
	🚧 estimator - [ MVP ] 🚧
</h4>

<p align="center">
 <a href="#-about-projetct">About</a> •
 <a href="#-features">Features</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-how-to-run">Running</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#-author">Author</a> • 
 <a href="#-references">References</a>
</p>


## 💻 About

The aim behind this project is to provide users with a simple and easy-to-use tool to estimate the carbon footprint on their daily activities. Whether it's commuting to work, shopping, or even hanging out at the hotel, this app will calculate the estimated carbon emissions associated with those activities.

The app is currently under development and new features will be added in the future to further enhance the user experience and add more activities to the list.

By providing this information to users, they can make more informed decisions about their daily habits and potentially reduce their carbon footprint. Feel free to clone this project, modify and give feedbacks.

---

## ⚙️ Features

   Users have access to the web app (mobile and desktop responsiveness) where they can:
   - [x] estimate the carbon footprint of a given category for their country (location obtained via IP)
   - [x] change country in a country selector
   - [x] filter CO2 emissions by year and region
   - [x] switch between ligth/dark theme
 
---

## ▶️ Preview

This project has a demo version deployed at Vercel. Click [here](https://estimator-ouobmeo69-f7lipe.vercel.app/) and check it out.

## 🎨 Layout

The application layout is available in Figma:

<a href="https://www.figma.com/file/ybGM12I43VwEIB1ZAlLZo9/Estimator?node-id=0%3A1&t=0Fwzhkrt5hKdWqSR-1">
  <img alt="Made by Filipe Correia" src="https://img.shields.io/badge/Acess%20Layout%20-Figma-%2304D361">
</a>


### Mobile

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Estimator Welcoming Page on a mobile device" title="#Mobile" src="./dir-assets/splash-mobile.png" width="200px" style="margin: 2px">
  <img alt="Estimator Categories Page on a mobile device" title="#Mobile" src="./dir-assets/estimate-mobile.png" width="200px" style="margin: 2px">
  <img alt="Estimator Stats Page on a mobile device" title="#Mobile" src="./dir-assets/stats-mobile.png" width="200px" style="margin: 2px">
</p>


### Desktop

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Estimator Welcoming Page on a larger screen" title="#Large" src="./dir-assets/splash.png" width="400px">
</p>

---

## 🚀 Running the project

This project requires third-party dependencies to run, see below for steps to running locally. 

### Prerequisits

Before you start, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), and also a package manager like [npm](https://www. npmjs.com/package/npm) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/).
In addition it is good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/)

#### 🔑 Get the Climatiq API key 

In order to work properly, this project is powered by the Climatiq database. [Climatiq](https://www.climatiq.io) offers a REST API that brings data and information related to climate and environmental factors such as temperature, humidity, carbon emissions on a local and global scale.

To get a free API-key follow the official instructions [here](https://www.climatiq.io/docs/guides/getting-api-key)

#### 🧭 Runnnig the web app

```bash

# Clone this repo
$ git clone git@github.com:f7lipe/frontend-test-two

# Access the project folder in your terminal/cmd
$ cd f7lipe/frontend-test-two

# Install dependecies
$ npm install // yarn install

# Create a environment file
$ touch .env.local 

# In the .env.local file created add a variable API_BASE_URL and API_KEY as shown in the .env.example file located in the root folder of this directory
$ nano .env 

API_BASE_URL = "https://beta3.api.climatiq.io"
API_KEY = "PASTE HERE YOUR API KEY FROM CLIMATIQ.IO"

# Save

# Run the application in development mode
$ npm run dev // yarn run dev

# The application will open on port:3000 - go to http://localhost:3000

```

---

## 🛠 Technologies

The following tools were used in building the project:

#### **Website**  ([Next.JS](https://nextjs.org))  +  ([JavaScript](https://www.javascript.com))

-   **[Axios](https://github.com/axios/axios)**
-   **[React Hook Form](https://react-hook-form.com)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Styled-components](https://styled-components.com/)**

> See [package.json](https://github.com/f7lipe/frontend-test-two/package.json)


#### Tools

-   Prototype:  **[Figma](https://www.figma.com/)**  →  **[Prototype (Estimator)](https://www.figma.com/file/ybGM12I43VwEIB1ZAlLZo9/Estimator?node-id=0%3A1&t=0Fwzhkrt5hKdWqSR-1)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   API Tests:  **[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)**
-   Fonts: **[Roboto](https://fonts.google.com/specimen/Roboto)**
---

## 🦸 Author

<a href="https://github.com/f7lipe">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/16584058?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Filipe Correia</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Filipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/f7lipe/)](https://www.linkedin.com/in/f7lipe/) 
[![Gmail Badge](https://img.shields.io/badge/-email-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:filipe.rcs@icloud.com)](mailto:filipe.rcs@icloud.com)
[![Twitter Badge](https://img.shields.io/badge/-@f7lipe-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/f7lipe)](https://twitter.com/f7lipe) 

---
## 📚 References 

- [Climatiq API Reference](https://www.climatiq.io/docs)
- [Directory Structure Suggestion For Next.JS](https://medium.com/@pablo.delvalle.cr/an-opinionated-basic-next-js-files-and-directories-structure-88fefa2aa759)
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [Next.JS Docs](https://nextjs.org/docs/getting-started)
- [React Hook Forms Docs](https://react-hook-form.com/get-started)
- [React Infinite Scroll](https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a)
- [Theming in Next.JS With Styled-components](https://blog.logrocket.com/theming-in-next-js-with-styled-components-and-usedarkmode/)

## 📝 Project

This project is part of a technical challenge made for [Orma Carbon](https://github.com/ormacarbon).

Made with ❤️ by Filipe Correia 👋🏽 [Contact us!](https://www.linkedin.com/in/f7lipe/)

---
