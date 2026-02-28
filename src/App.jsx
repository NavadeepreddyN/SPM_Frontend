import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
function App() {
  return  (
    <>
      <Header />
      <div style={{ marginTop: "70px" }}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;