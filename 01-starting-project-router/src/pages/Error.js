import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </main>
    </>
  );
}

export default ErrorPage;