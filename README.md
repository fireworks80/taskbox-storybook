<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React template
</h1>

This template ships with the main React and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-template taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

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

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── .env
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md

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

프로젝트가 설치되어 있는 root에서 실행

```
# install
npx sb init

# 2021 11 30 현재
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
# 오류가 발생

# new
````
yarn add @storybook/cli --dev
yarn sb init
````

# run
yarn storybook
```

이 후 css -> scss로 변경시 bundle 오류가 생기면
로더들의 버전을 낮춰 준다.
````
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


### 사용법?

Task.js: app에서 사용될 Task 컴포넌트를 작성한다.
Task.stories.js: storybook에서 사용될 Task 컴포넌트를 설정? 작성? 한다.

```
import React from 'react';
import Task from './Task'; // storybook에서 Task 컴포넌트를 사용해야 하므로 import

export default {
  component: Task, // 사용할 컴포넌트
  title: 'Task', // 스토리북에서 LNB에 나타낼 이름
};

아래는 Task컴포넌트들의 랜더링 상태를 나타낸다.
args들은 Task에 대한 인수를 설명한다.(랜더링 되는 방법을 정의한 집합)
storybook의 인수들을 변경해서 컴포넌트를 동적으로 변경한다.
const Template = (args) => <Task {...args} />;

[표준 JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)함수의 복사본을 만드는 기술 이 기술을 사용해 내보낸 각 스토리가 고유한 속성을 설정 할 수 있지만 동일한 구현을 사용한다.

story를 만들때 마다 기본 task인수를 사용해 구성 요소가 기대하는 작업의 모양을 만든다.
실제 데이터의 모양에서 모델링이 된다.

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

### 구성

만든 storybook의 구성 파일을 실제로 보여주기

```
# .storybook/main.js

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
    // 이 곳에 내가 만든 storybook 구성파일의 위치를 넣는다.(위에 이미 선언이 되어 있어서 따로 안넣어도 됨)
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
};

# .storybook/preview.js

// 스타일 시트를 선언해 준다
+ import '../src/index.css';

// parameters는 애드온의 동작을 제어 하는데 사용한다.
// Task에서는 이것을 사용해 actions(모의 콜백) 처리 방법을 구성
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

### 컴포넌트의 데이터의 형태를 지정

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

### 모듈 만들기 (컴포넌트들을 합성하기)

- src/components/TaskList.js
- src/components/TaskList.stories.js

```
# TaskList.stories.js

import React from 'react';
import TaskList from './TaskList';

// Task.stories를 가져와 TaskList에서 사용
+ import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  // 현재 스토리(Tasks)를 래핑 한다.
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    // args 구성요소를 통해서 stories를 공유한다.
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

  // 로딩일 때 컴포넌트 정의
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

// 컴포넌트의 데이터 형태 설정
TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

// TaskList.stories.js에서 설정을 안한 이유는 모르겠음
TaskList.defaultProps = {
  loading: false,
};

```
