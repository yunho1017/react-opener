# react-opener

[![npm](https://img.shields.io/npm/v/react-opener)](https://www.npmjs.com/package/react-opener)
[![size](https://img.shields.io/bundlephobia/minzip/react-opener)](https://bundlephobia.com/result?p=react-opener)

render React Component from anywhere!

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

```javascript
import { memo, useCallback, useMemo, useState } from "react";
import { ReactOpener } from "react-opener";

const MessageStore = ReactOpener.createStore();
const DialogStore = ReactOpener.createStore();

const Container = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          MessageStore.open({
            element: ({ remove }) => (
              <YourMessage open={true} onClose={remove} />
            ),
          });
        }}
      >
        message
      </button>
      <button
        type="button"
        onClick={() => {
          DialogStore.open({
            element: ({ remove }) => (
              <YourDialog open={true} onClose={remove} />
            ),
          });
        }}
      >
        dialog
      </button>
      // Rendered here !
      <ReactOpener store={MessageStore} />
      <ReactOpener store={DialogStore} />
    </div>
  );
};
```
