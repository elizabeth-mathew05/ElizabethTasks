# React Fake Store Cart App

This project is a simple, responsive shopping cart application built with React. It fetches products from the Fake Store API and allows users to add products to a cart, view the cart in a modal, and remove items from the cart.

## Features

- Fetches and displays products from the [Fake Store API](https://fakestoreapi.com/)
- Responsive product grid layout for desktop and mobile
- Each product shows image, title, price, and an add to cart button
- Prevents duplicate items in the cart and shows an alert if already added
- Shows a success message when a product is added
- Cart item count is displayed in the Navbar (Header)
- Clicking the cart button opens a modal with all cart items
- Each cart item can be removed from the cart
- All state and data are passed via props for clean component structure
- Clean, readable, and well-documented code

## Getting Started

1. Clone the repository and navigate to the project folder:
	```bash
	git clone <your-repo-url>
	cd reactTasks/task-five
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	npm start
	```
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- src/components/Header.jsx - Navbar with cart count and cart button
- src/components/ProductCard.jsx - Displays product info and add to cart button
- src/components/ProductModal.jsx - Modal for viewing and adding products to cart
- src/components/CartModal.jsx - Modal for viewing and removing cart items
- src/App.jsx - Main app logic and state management
- src/App.css, src/components/CartModal.css - Styles for layout and responsiveness

## API Reference
- [Fake Store API](https://fakestoreapi.com/)

## License
This project is for educational/demo purposes.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
