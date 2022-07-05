import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TodoItem } from "../TodoItem/TodoItem";
import { ITodoReducer } from "../types/types";

export const TodoList = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer);

  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => (
        <CSSTransition
          timeout={700}
          classNames={"post"}
          key={todo.id}
        >
            <TodoItem todo={todo}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
