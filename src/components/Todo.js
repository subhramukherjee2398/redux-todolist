import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo, delTodo } from "../actions";

function Todo() {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const lists = useSelector((state) => state.todoReducer.list);
  console.log(typeof lists);

  return (
    <div className="container mt-5 col-4">
      <div className="text-center">
        <h4 style={{ color: "#F94892" }}>Redux Todo List</h4>
        <hr />
      </div>
      <div className="input-group mb-3 mt-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <img
              src="http://www.powerpac.org/wp-content/uploads/2017/07/checklist.png"
              alt="todoicon"
              width="25px"
              height="25px"
            />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Add your todos..."
          aria-label="Add your todos..."
          aria-describedby="basic-addon1"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
      </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(addTodo(input), setinput(""))}
        >
          Add
        </button>
      </div>

      <div>
        <div className="container mt-3">
          {lists.map((item) => (
            <div className="warp_data">
              <p
                id={item.id}
                className="text-center"
                style={{ color: "#9145B6", fontWeight: "bold", padding: "3%" }}
              >
                {item.data}
                <button
                  className="ml-4 btn btn-outline-danger btn-sm"
                  onClick={() => dispatch(delTodo(item.id))}
                >
                  x
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
      {(Object.keys(lists).length !== 0 ) &&  (
        <div>
          <button
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(clearTodo())}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default Todo;
