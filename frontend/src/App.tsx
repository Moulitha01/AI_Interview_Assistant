import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api/chat/test")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  const sendMessage = async () => {
    if (!message) return;

    const res = await fetch("http://localhost:5000/api/chat/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.message);
    setMessage("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Interview Assistant</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      {response && (
        <div style={{ marginTop: "20px" }}>
          <strong>Saved Message:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;