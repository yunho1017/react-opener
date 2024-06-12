import { ReactOpener } from "react-opner";
import "./App.css";
import { Modal } from "./Modal";

const ModalStore = ReactOpener.createStore();
function App() {
  const [modal, opener] = ReactOpener.useOpener();

  return (
    <>
      <h1>React Opener</h1>
      <div className="card">
        <p>Basic</p>
        <button
          onClick={() => {
            ModalStore.open({
              element: ({ close }) => (
                <Modal onClose={close}>Open by basic</Modal>
              ),
            });
          }}
        >
          open modal
        </button>
      </div>
      <div className="card">
        <p>useOpener</p>
        <button
          onClick={() => {
            modal.open({
              element: ({ close }) => (
                <Modal onClose={close}>Open by useOpener</Modal>
              ),
            });
          }}
        >
          open modal
        </button>
      </div>
      <ReactOpener store={ModalStore} />
      {opener}
    </>
  );
}

export default App;
