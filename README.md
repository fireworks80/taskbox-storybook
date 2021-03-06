<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React template
</h1>

This template ships with the main React and Storybook configuration files you'll need to get up and running fast.

## π Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new siteβs directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`

## π What's inside?

A quick look at the top-level files and directories included with this template.

    .
    βββ .storybook
    βββ node_modules
    βββ public
    βββ src
    βββ .env
    βββ .gitignore
    βββ LICENSE
    βββ package.json
    βββ yarn.lock
    βββ README.md

1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.

2.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

3.  **`public`**: This directory will contain the development and production build of the site.

4.  **`src`**: This directory will contain all of the code related to what you will see on your application.

5.  **`.env`**: Simple text configuration file for controlling the application's environment constants.

6.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

7.  **`LICENSE`**: The template is licensed under the MIT licence.

8.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

9.  **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

10. **`README.md`**: A text file containing useful reference information about the project.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).








### install & run

νλ‘μ νΈκ° μ€μΉλμ΄ μλ rootμμ μ€ν

```
# install
npx sb init

# 2021 11 30 νμ¬
````
Need to install the following packages:
  sb@next
Ok to proceed? (y) 
npm ERR! code ETARGET
npm ERR! notarget No matching version found for jest-cli@^27.4.0.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/nhncommerce/.npm/_logs/2021-11-30T06_15_43_494Z-debug.log
````
# μ€λ₯κ° λ°μ

# new
````
yarn add @storybook/cli --dev
yarn sb init
````

# run
yarn storybook
```

μ΄ ν css -> scssλ‘ λ³κ²½μ bundle μ€λ₯κ° μκΈ°λ©΄
λ‘λλ€μ λ²μ μ λ?μΆ° μ€λ€.

yarn add -D @storybook/preset-scss css-loader@5.2.6 sass sass-loader@10.1.1 style-loader@2.0.0

# src/.storybook/main.js
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
+    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react"
}

````


### μ¬μ©λ²?

Task.js: appμμ μ¬μ©λ  Task μ»΄ν¬λνΈλ₯Ό μμ±νλ€.
Task.stories.js: storybookμμ μ¬μ©λ  Task μ»΄ν¬λνΈλ₯Ό μ€μ ? μμ±? νλ€.

```
import React from 'react';
import Task from './Task'; // storybookμμ Task μ»΄ν¬λνΈλ₯Ό μ¬μ©ν΄μΌ νλ―λ‘ import

export default {
  component: Task, // μ¬μ©ν  μ»΄ν¬λνΈ
  title: 'Task', // μ€ν λ¦¬λΆμμ LNBμ λνλΌ μ΄λ¦
};

μλλ Taskμ»΄ν¬λνΈλ€μ λλλ§ μνλ₯Ό λνλΈλ€.
argsλ€μ Taskμ λν μΈμλ₯Ό μ€λͺνλ€.(λλλ§ λλ λ°©λ²μ μ μν μ§ν©)
storybookμ μΈμλ€μ λ³κ²½ν΄μ μ»΄ν¬λνΈλ₯Ό λμ μΌλ‘ λ³κ²½νλ€.
const Template = (args) => <Task {...args} />;

[νμ€ JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)ν¨μμ λ³΅μ¬λ³Έμ λ§λλ κΈ°μ  μ΄ κΈ°μ μ μ¬μ©ν΄ λ΄λ³΄λΈ κ° μ€ν λ¦¬κ° κ³ μ ν μμ±μ μ€μ  ν  μ μμ§λ§ λμΌν κ΅¬νμ μ¬μ©νλ€.

storyλ₯Ό λ§λ€λ λ§λ€ κΈ°λ³Έ taskμΈμλ₯Ό μ¬μ©ν΄ κ΅¬μ± μμκ° κΈ°λνλ μμμ λͺ¨μμ λ§λ λ€.
μ€μ  λ°μ΄ν°μ λͺ¨μμμ λͺ¨λΈλ§μ΄ λλ€.

// story
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 13, 11, 9, 0),
  },
};

// story
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

// story
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

```

### κ΅¬μ±

λ§λ  storybookμ κ΅¬μ± νμΌμ μ€μ λ‘ λ³΄μ¬μ£ΌκΈ°

```
# .storybook/main.js

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
    // μ΄ κ³³μ λ΄κ° λ§λ  storybook κ΅¬μ±νμΌμ μμΉλ₯Ό λ£λλ€.(μμ μ΄λ―Έ μ μΈμ΄ λμ΄ μμ΄μ λ°λ‘ μλ£μ΄λ λ¨)
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
};

# .storybook/preview.js

// μ€νμΌ μνΈλ₯Ό μ μΈν΄ μ€λ€
+ import '../src/index.css';

// parametersλ μ λμ¨μ λμμ μ μ΄ νλλ° μ¬μ©νλ€.
// Taskμμλ μ΄κ²μ μ¬μ©ν΄ actions(λͺ¨μ μ½λ°±) μ²λ¦¬ λ°©λ²μ κ΅¬μ±
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

```

### μ»΄ν¬λνΈμ λ°μ΄ν°μ ννλ₯Ό μ§μ 

```
# src/components/Task.js

import React from 'react';
+ import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  // ...
}

+ Task.propTypes = {
+  /** Composition of the task */
+  task: PropTypes.shape({
+    /** Id of the task */
+    id: PropTypes.string.isRequired,
+    /** Title of the task */
+    title: PropTypes.string.isRequired,
+    /** Current state of the task */
+    state: PropTypes.string.isRequired,
+  }),
+  /** Event to change the task to archived */
+  onArchiveTask: PropTypes.func,
+  /** Event to change the task to pinned */
+  onPinTask: PropTypes.func,
+ };
```

### λͺ¨λ λ§λ€κΈ° (μ»΄ν¬λνΈλ€μ ν©μ±νκΈ°)

- src/components/TaskList.js
- src/components/TaskList.stories.js

```
# TaskList.stories.js

import React from 'react';
import TaskList from './TaskList';

// Task.storiesλ₯Ό κ°μ Έμ TaskListμμ μ¬μ©
+ import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  // νμ¬ μ€ν λ¦¬(Tasks)λ₯Ό λν νλ€.
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    // args κ΅¬μ±μμλ₯Ό ν΅ν΄μ storiesλ₯Ό κ³΅μ νλ€.
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};


# TaskList.js

import React from 'react';
import Task from './Task';
+ import PropTypes from 'prop-types';

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  // λ‘λ©μΌ λ μ»΄ν¬λνΈ μ μ
  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check'></span>
          <div className='title-message'>You Have no tasks</div>
          <div className='subtitle-message'>Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className='list-items'>
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;

// μ»΄ν¬λνΈμ λ°μ΄ν° νν μ€μ 
TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

// TaskList.stories.jsμμ μ€μ μ μν μ΄μ λ λͺ¨λ₯΄κ² μ
TaskList.defaultProps = {
  loading: false,
};

```
