import React, { useEffect, useState } from "react";

function App() {
  const [lastJson, setLastJson] = useState("");
  const [parsed, setParsed] = useState(null);

  useEffect(() => {
    window.onOcrResult = (payload) => {
      // 안드로이드에서 객체로 넘어오거나, 문자열로 넘어올 수도 있으니 둘 다 처리
      const obj =
        typeof payload === "string" ? JSON.parse(payload) : payload;

      // 화면에 예쁘게 보이도록 문자열로 저장
      setLastJson(JSON.stringify(obj, null, 2));
      setParsed(obj);
    };

    return () => {
      delete window.onOcrResult;
    };
  }, []);

  const handleStartCamera = () => {
    if (window.Android && typeof window.Android.startCamera === "function") {
      window.Android.startCamera();
    } else {
      alert("Android 브리지(Android.startCamera)가 연결되지 않았습니다.");
    }
  };

  return (
    <div
      style={{
        padding: 16,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1>Web2App Demo</h1>

      <button
        onClick={handleStartCamera}
        style={{
          padding: "12px 16px",
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #1976d2",
          backgroundColor: "#1976d2",
          color: "#fff",
        }}
      >
        카메라 열기
      </button>

      <section style={{ marginTop: 24 }}>
        <h2>마지막 OCR 결과 (raw JSON)</h2>
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: 12,
            borderRadius: 8,
            fontSize: 12,
            whiteSpace: "pre-wrap",
          }}
        >
          {lastJson || "아직 결과가 없습니다."}
        </pre>
      </section>

<section style={{ marginTop: 24 }}>
  <h2>파싱된 OCR 결과</h2>
  {parsed ? (
    <>
      <ul>
        <li>ID: {parsed.id}</li>
        <li>생성 시각: {parsed.createdAt}</li>
      </ul>

      <h3>텍스트</h3>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: 12,
          borderRadius: 8,
          fontSize: 14,
          whiteSpace: "pre-wrap", // 여기서 개행 유지
        }}
      >
        {parsed.rawText}
      </pre>
    </>
  ) : (
    <p>파싱된 데이터가 없습니다.</p>
  )}
</section>
    </div>
  );
}

export default App;

