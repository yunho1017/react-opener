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
