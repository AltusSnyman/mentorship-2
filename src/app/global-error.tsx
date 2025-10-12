"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "linear-gradient(135deg, #F9F9FB 0%, #01F1EB 100%)"
        }}>
          <div style={{
            maxWidth: "28rem",
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
            <h1 style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#01355A",
              marginBottom: "1rem"
            }}>
              Critical Error
            </h1>
            <p style={{ color: "#267090", marginBottom: "2rem" }}>
              A critical error occurred. Please refresh the page or contact support.
            </p>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#01F1EB",
                color: "#01303E",
                fontWeight: "bold",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
