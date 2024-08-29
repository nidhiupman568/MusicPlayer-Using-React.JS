# 🎵 Music Player Project Using React.JS🎵

🎉 Welcome to the **Music Player** project! 🎉 This dynamic web application 🎶 is built using **React** ⚛️, offering users 🎧 an interface 🖥️ to play 🎵, pause ⏸️, and manage 🗂️ their music collection 🎶. With its responsive design 📱, users 👥 can effortlessly enjoy 🎧 their songs 🎵. Plus, it has a separate data file 📂 allowing users 👥 to add ➕ their own songs 🎶 to the list 🗂️ and listen 🔊 to their personalized playlist 🎵.

## 📋 Description

The **Music Player** 🎶 is an engaging web application 🖥️ that provides a user-friendly interface 🧑‍💻 for music enjoyment 🎵. It features functionalities 🛠️ to play 🎵, pause ⏸️, and manage 🗂️ the music library 🎶. Users 👥 can track ⏳ song progress 📈 and adjust 🎛️ volume levels 🔊. The design 🎨 is responsive 📱, ensuring smooth operation 🖥️ on both desktop 💻 and mobile 📱 devices.

## 🛠️ Built With

- **Node.js** 🖥️: JavaScript runtime 🚀.
- **React** ⚛️: JavaScript library 📚 for building user interfaces 🖥️.
- **JavaScript** 💻: Programming language 🖥️.
- **HTML/CSS** 📝: For structuring 📋 and styling 🎨 the application.

## 🚀 Approach and Functionalities

The Music Player 🎶 incorporates the following functionalities 🛠️ and approaches 🧩:

- **User-Friendly Interface** 🧑‍💻: Features controls 🎛️ for playing 🎵, pausing ⏸️, adjusting volume 🔊, and tracking progress ⏳.
- **Music Library Management** 🗂️: Allows users 👥 to add ➕ or remove ❌ songs 🎶 and select 🖱️ tracks to play 🎵.
- **Audio Controls** 🎛️: Options to play 🎵, pause ⏸️, and control volume 🔊 levels.
- **Track Progress Display** 📈: Easily track ⏳ the progress of the playing song 🎵.

The design 🎨 of the project 🛠️ is responsive 📱, working effectively 🖥️ on both desktop 💻 and mobile 📱 devices.

## 📥 Clone the Repository

To clone the repository, follow these steps:

1. **Clone** 📥 the repository using the following command 🖥️:

   ```bash
   git clone https://github.com/nidhiupman568/MusicPlayer-Using-React.JS.git 📥
   ```

2. **Navigate** 🚶‍♂️ to the project directory 📂:

   ```bash
   cd music-player 📂
   ```

## 📝 Steps to Create Music Player in React

1. **Create** 🛠️ a new React JS project 🖥️ using the following command 🖥️:

   ```bash
   npx create-react-app <<Project_Name>> 🎉
   ```

2. **Change** 🚶‍♂️ to the project directory 📂:

   ```bash
   cd <<Project_Name>> 📂
   ```

3. **Install** 📥 some npm packages 📦 required for this project 🛠️ using the following command 🖥️:

   ```bash
   npm install --save @fortawesome/react-fontawesome 🎨
   npm install --save @fortawesome/free-solid-svg-icons 🎨
   npm install sass 🎨
   ```

4. **Project Structure** 🗂️:

   The updated dependencies 📦 in `package.json` will look like this:

   ```json
   "dependencies": {
     "@fortawesome/free-solid-svg-icons": "^6.4.2",
     "@fortawesome/react-fontawesome": "^0.2.0",
     "@testing-library/jest-dom": "^5.17.0",
     "@testing-library/react": "^13.4.0",
     "@testing-library/user-event": "^13.5.0",
     "react": "^18.2.0",
     "react-dom": "^18.2.0",
     "react-scripts": "5.0.1",
     "sass": "^1.68.0",
     "web-vitals": "^2.1.4"
   }
   ```

5. **Example Code** 🧩:

   - **`App.js`** 🖥️: This component 🧩 is responsible 🔧 for rendering 🖥️ the layout 📋 of the application.
   - **`data.js`** 📂: This file 📝 contains data used for the music library 🎶.
   - **`Library.js`** 📚: Manages the music library 🎶 and displays the list 📋 of songs 🎵.
   - **`LibrarySong.js`** 🎵: Displays each song 🎶 in the library 📚.
   - **`PlayerSong.js`** 🎶: Controls the playback 🎵, including play 🎵, pause ⏸️, and volume 🔊.
   - **`Navb.js`** 🖥️: Provides navigation 🧭 within the application 🖥️.
   - **`Song.js`** 🎵: Displays individual song 🎶 details.

   These five files 📄 (`library.scss`, `app.scss`, `nav.scss`, `player.scss`, and `song.scss`) will be in the `styles` 🎨 folder of the `src` directory 📂.

## 🚀 Steps to Run the Project

1. **Start** 🚀 the project by typing 🖥️ the following command 🖥️ in the terminal:

   ```bash
   npm start 🚀
   ```

2. **Open** 🔓 your web browser 🌐 and type 🖥️ the following URL 🌐:

   ```
   http://localhost:3000/ 🌐
   ```

## 📸 Screenshots (Output)

Here’s a sneak peek 🖼️ of the Music Player 🎶 in action ⏳:

![music player](https://github.com/user-attachments/assets/0d2b13b6-8553-47b1-b980-a09e12ba0284)

## 🎉 Enjoy using the Music Player! 🎉 Feel free to share 🗣️ your feedback 📝 or contribute 🤝 to the project by making a pull request 🚀. Happy listening! 🎵🎧

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
