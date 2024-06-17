# react-opener

[![npm](https://img.shields.io/npm/v/react-opener)](https://www.npmjs.com/package/react-opener)
[![size](https://img.shields.io/bundlephobia/minzip/react-opener)](https://bundlephobia.com/result?p=react-opener)

render React Component from anywhere!

[Demo](https://react-opener.vercel.app/)

## Introduction

Previously in order to show Dialog in React, we had to write the code below

```js
const Component = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        open dialog
      </button>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
```

The code above has Dialog-Related code throughout the Function Component.

If components become complicated, readability becomes poor and maintenance becomes difficult.

This library can show React Component from anywhere to solve this issues.

## Install

This package has peer dependencies, which you need to install by yourself.

```bash
// npm
npm install react-opener react

// yarn
yarn add react-opener react
```

## Usage

### Basic

```javascript
import { ReactOpener, ReactToastOpener } from "react-opener";

const ToastStore = ReactToastOpener.createStore();
const DialogStore = ReactOpener.createStore();

const Container = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          ToastStore.success("toast !");
        }}
      >
        toast
      </button>
      <button
        type="button"
        onClick={() => {
          DialogStore.open({
            element: ({ close }) => <YourDialog open={true} onClose={close} />,
          });
        }}
      >
        dialog
      </button>
      // Rendered here !
      <ReactToastOpener store={ToastStore} />
      <ReactOpener store={DialogStore} />
    </div>
  );
};
```

### useOpener

```javascript
import { ReactOpener } from "react-opener";

const Container = () => {
  const [dialog, opener] = ReactOpener.useOpener();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dialog.open({
            element: ({ close }) => <YourDialog open={true} onClose={close} />,
          });
        }}
      >
        dialog
      </button>
      {opener}
    </div>
  );
};
```
