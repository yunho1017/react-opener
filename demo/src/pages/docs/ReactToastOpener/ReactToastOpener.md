# ReactToastOpener

## Usage

```jsx
import { ReactToastOpener } from "react-opener";

const ToastStore = ReactToastOpener.createStore();

export default function App() {
  return <>
    <Button onClick={() => {ToastStore.success("Success!")}}>open</Button>
    <ReactToastOpener store={ToastStore}>
  </>;
}
```

## API

### createStore

#### Options

| Field    | Description                           | Type              | Default      |
| -------- | ------------------------------------- | ----------------- | ------------ |
| delay    | When does the toast message disappear | number            | 1000         |
| position | Where does the toast message          | ToastPositionType | "top-center" |

#### ToastStore

| Field    | Description                         |
| -------- | ----------------------------------- |
| getState | get current state                   |
| setState | set current state                   |
| success  | open success toast message          |
| error    | open error toast message            |
| info     | open info toast message             |
| warn     | open warning toast message          |
| custom   | open toast message with custom icon |

### ReactToastOpener

#### Props

| Field     | Description                    | Required |
| --------- | ------------------------------ | -------- |
| store     | store want to open             | true     |
| options   | same as options in createStore | false    |
| className | root element className         | false    |
| style     | root element style             | false    |
