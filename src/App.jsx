import "./App.css";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <header>Logo</header>
      <main className="main-content">
        <section>
          <h1>Interested in our business pricing?</h1>
          <p>
            Fill out the form to view details and we’ll contact you as soon as
            possible.
          </p>
        </section>
        <ContactForm />
      </main>
    </>
  );
}

export default App;
