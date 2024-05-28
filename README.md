# react-opener

[![npm](https://img.shields.io/npm/v/react-opener)](https://www.npmjs.com/package/react-opener)
[![size](https://img.shields.io/bundlephobia/minzip/react-opener)](https://bundlephobia.com/result?p=react-opener)

use React Context with selector

## Introduction

When the value of React Context changes, all components that use useContext are re-rendered. This causes unnecessary re-rendering.

Using this library, can solve this issue.

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
