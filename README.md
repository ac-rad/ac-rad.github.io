# Frameworks and Dependencies used
This ReactJS project uses [TailwindCSS](https://tailwindcss.com) + [daisyUI](https://daisyui.com) for CSS frameworks.
It also uses [gh-pages](https://www.npmjs.com/package/gh-pages) for static ui deployment to [Github Pages](https://pages.github.com).

ReactJS Dependencies include [react-router-dom](https://www.npmjs.com/package/react-router-dom) and [react-scroll](https://www.npmjs.com/package/react-scroll). **Caution: clashing between these dependencies may occur, but should be manageable with careful and thoughtful import of components/hooks**

To install all dependencies from the `node_modules` folder, run `npm install`.

# Getting Started with ReactJS

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

### `npm run deploy`

Builds the app for production to the `build` folder, and automatically runs `npm run build`.\
Use this to deploy. 

**currently deploying to gh-pages branch for a static prototype and viewing using [Github Pages](https://pages.github.com)**

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


## Adding Papers

To add papers go to `src\components\pages\landing\papers\paperInfo.js` and insert your paper in the following format (The last three fields are optional, leave blank if N\A. Don't forget to `npm run deploy` after adding it):

```javascript
{
    image: ["clairify.jpg", "Robot Arm preparing food"],
    title:
      "Errors are Useful Prompts: Instruction Guided Task Programming with Verifier-Assisted Iterative Prompting",
    description:
      "Generating low-level robot task plans from high-level natural language instructions remains a challenging problem. Although large language models have shown promising results in generating plans, the accuracy of the output remains unverified. Furthermore, the lack of domain-specific language data poses a limitation on the applicability of these models. In this paper, we propose CLAIRIFY, a novel approach that combines automatic iterative prompting with program verification to ensure programs written in data-scarce domain-specific language are syntactically valid and incorporate environment constraints. Our approach provides effective guidance to the language model on generating structured-like task plans by incorporating any errors as feedback, while the verifier ensures the syntactic accuracy of the generated plans. We demonstrate the effectiveness of CLAIRIFY in planning chemistry experiments by achieving state-of-the-art results. We also show that the generated plans can be executed on a real robot by integrating them with a task and motion planner.",
    tags: ["Natural Language Processing", "Program Synthesis", "Robotics"],
    date: "24-03-2023",
    acceptedTo: ["Under Review"],
    paperPage: "https://ac-rad.github.io/clairify",
    arxiv: "https://arxiv.org/abs/2303.14100",
    github: "https://github.com/ac-rad/xdl-generation",
  }
  ```

  ## Modifying Content

  The content displayed on the page is organized into sections, each section is located in `src\components\pages\landing`. To add a section simply create a new directory under landing, then create an index.js as well as any additional files. Don't forget to include them in the DOM by importing them in `src\components\pages\landing\index.js`.