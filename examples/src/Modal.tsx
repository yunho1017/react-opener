export const Modal: React.FC<{
  onClose: () => void;
  children: React.ReactNode;
}> = ({ onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "80%",
        margin: "auto",
        top: "10%",
        left: 0,
        right: 0,
        background: "#fff",
        borderRadius: 4,
        padding: 16,
      }}
    >
      <h1 style={{ color: "#242424" }}>{children}</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
