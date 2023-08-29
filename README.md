# AC-RAD.GITHUB.IO Static Website

## Frameworks and Dependencies used
This ReactJS project uses [TailwindCSS](https://tailwindcss.com) + [daisyUI](https://daisyui.com) for CSS frameworks.
It also uses [gh-pages](https://www.npmjs.com/package/gh-pages) for static ui deployment to [Github Pages](https://pages.github.com).

ReactJS Dependencies include [react-router-dom](https://www.npmjs.com/package/react-router-dom) and [react-scroll](https://www.npmjs.com/package/react-scroll). **Caution: clashing between these dependencies may occur, but should be manageable with careful and thoughtful import of components/hooks**

To install all dependencies from the `node_modules` folder, run `npm install`.

## Operation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Make sure to properly set up your package.json file
The following sections are required:
* "homepage": "http://ac-rad.github.io",
* "name": "ac-rad.github.io",

Make sure to change the branch that the static copy is pushed to here (default gh-pages):
- "deploy": "gh-pages -d build [--branch \<branch name>]",

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

Builds the app for production to the `build` folder, and automatically runs `npm run build`\
Use this to deploy to whatever branch you set. 

**Currently deploying to gh-pages branch for a static prototype and viewing using [Github Pages](https://pages.github.com)**

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