# wasm-image-resizer

![demo](/docs/image/demo.gif)

This is a simple `WebAssembly` and `PWA` experiment to resize and format convert images.

## About the Demo

Currently the author does not intend to host this repository on the web.  
You can instead clone this repository and try it on Docker.

```bash
docker compose up -d
```

## Usage

- Drag and drop image files.
- Enter the format format and the size you want to resize. You can also convert only the format format.
- When you are ready, press the Convert button.
- The upper right menu allows you to return the form to the initial state of the image.

## Available Formats

- png
- jpeg
- webp
- avif
- ico

## Great application for similar purposes

This repository is experimental and very simple. Advanced objectives can be achieved by using the following applications or libraries.

- [Squoosh](https://squoosh.app/)
- [Image Magick](https://imagemagick.org/index.php)
- [OpenCV](https://opencv.org/)

## Why did you create this?

I think it's great to be able to run on many platforms, independent of OS and architecture, and in the case of the Web, it's roughly OK if it's done in pure javascript, but many libraries, especially in areas such as multimedia processing, are C/C++ libraries. and may not work in some special environments. I wondered how I could achieve this with fewer steps.

`WebAssembly` and `PWAs` seemed like attractive technologies. Everyone can easily install and uninstall them on a variety of platforms. Also, wasm allows users to do what they want to do while maintaining privacy on the client side. I decided to learn a little about this technology and to work on this experiment.

## Technology used

- wasm-pack
- wasm-bindgen
- Vite
- Vite PWA
- React

## Special Thanks

- Testing Data by [いらすとや](https://www.irasutoya.com/)
