export default function Server() {
  console.log("Server page rendering");
  return (
    <div>
      <h1>Server Page</h1>
      <p>My secret {process.env.DEV_DB}</p>
    </div>
  );
}
