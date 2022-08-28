# TextureSlice

---

## About

### What is it?

Texture Slice is an open-source web app for extracting rectangular textures from images.

### When should I reach for Texture Slice?

This tool is especially useful when you want to extract a rectangular texture from images of buildings or rotated objects that may need a perspective transformation to appear straightened. This app applies a technique called homography that uses 4 points to create an area from which to calculate the matrix transforms needed for correcting the perspective.

To learn more about *homography*, please see [this helpful article](https://towardsdatascience.com/understanding-homography-a-k-a-perspective-transformation-cacaed5ca17) by Socret Lee that breaks down this dense concept in a palatable format.

### How do I use it?

Import an image to add it to the stage. Click and drag the 4 vertices of the slicer around to adjust the bounds to the area you wish to extract and transform.

After you've sliced a texture out, select "File > Export" to download the file.

Great! Anything else I should know?
You can find more contact and project information under the "More" section.

In an effort to encourage open-source collaboration, this project is made fully open and welcomes developers from all areas to consider contributing. While this app is just a small side project of mine, I will make an effort to participate in conversations that come up in Pull Requests and Issues within GitHub. At some point it may take on a life of its own but until then, I'll shepherd it through!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Resources

- [Windows 98 Icon Viewer](https://win98icons.alexmeub.com/)
- [98.css](https://jdan.github.io/98.css/#window)
- [Knife Icon by kotnaszynce - CC0](https://opengameart.org/node/92956)

[![Build Status](https://travis-ci.com/meetdave3/angular-node-typescript-boiler.svg?branch=main)](https://travis-ci.com/meetdave3/angular-node-typescript-boiler)

This project has Node at the backend (fully written in TypeScript) and Angular on the client side. 

---

## Setup

After cloning, run `npm install`

## Development server

Run `npm run start` to spin front end code,

Run `npm run post-dev` to start the Node server in development mode

Navigate to `http://localhost:4200/`. 

You can now seamlessly watch your changes reflect in realtime everytime you hit save (Client + Server code).

## Production Build

Run `npm run build:prerender`

Then `npm run serve:ssr` to start the server

This spins up a SSRed Node server on http://localhost:3015

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contribution

Pull Requests are welcome. 
