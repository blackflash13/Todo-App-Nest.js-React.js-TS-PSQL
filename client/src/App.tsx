import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container pt-2">
            <TodoForm />

            <div className="col-md-12 mt-4">
              <h3>My tasks</h3>
              <TodoList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
