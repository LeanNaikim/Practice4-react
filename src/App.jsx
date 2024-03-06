import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import CardProductComponent from "./components/CardProductComponent";
import CardFeedbackComponent from "./components/CardFeedbackComponent";
function App() {
  return (
    <>
      <dev className="h-screen flex flex-col justify-between">
        <NavbarComponent/>
        <main className="m-10">
          <h1 className="m-5 text-4xl font-semibold text-center">Product</h1>
          <dev className="flex flex-row justify-between flex-wrap gap-y-4">
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
            <CardProductComponent/>
          </dev>

    

          <h1 className="m-5 text-4xl font-semibold text-center">Feedback</h1>
          <dev className="flex flex-row justify-between flex-wrap gap-y-4">
            <CardFeedbackComponent/>
            <CardFeedbackComponent/>
            <CardFeedbackComponent/>  
          </dev>
        </main>
        <FooterComponent/>
      </dev>
    </>
  );
}
export default App;