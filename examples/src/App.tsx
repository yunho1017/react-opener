import { ReactOpener, ReactToastOpener } from "react-opner";
import "./App.css";
import { Modal } from "./Modal";

const ModalStore = ReactOpener.createStore();
const ToastStore = ReactToastOpener.createStore();

function App() {
  const [modal, opener] = ReactOpener.useOpener();

  return (
    <>
      <h1>React Opener</h1>
      <div className="card">
        <p>ReactOpener</p>
        <button
          onClick={() => {
            ModalStore.open(({ close }) => (
              <Modal onClose={close}>Open by basic</Modal>
            ));
          }}
        >
          open modal
        </button>
      </div>
      <div className="card">
        <p>useOpener</p>
        <button
          onClick={() => {
            modal.open(({ close }) => (
              <Modal onClose={close}>Open by useOpener</Modal>
            ));
          }}
        >
          open modal
        </button>
      </div>
      <ReactOpener store={ModalStore} />
      {opener}

      <div className="card">
        <p>ReactToastOpener</p>
        <button
          onClick={() => {
            ToastStore.open({ icon: "👏", message: "custom" });
          }}
        >
          custom
        </button>
        <button
          onClick={() => {
            ToastStore.success("success");
          }}
        >
          success
        </button>
        <button
          onClick={() => {
            ToastStore.error("error");
          }}
        >
          error
        </button>
        <button
          onClick={() => {
            ToastStore.warn("warning");
          }}
        >
          warn
        </button>
        <button
          onClick={() => {
            ToastStore.info("info");
          }}
        >
          info
        </button>
      </div>
      <ReactToastOpener store={ToastStore} />
    </>
  );
}

export default App;
