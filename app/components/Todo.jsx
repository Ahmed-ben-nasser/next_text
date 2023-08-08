"use client";

import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 60,
      },
    });
    const result = await res.json();

    setTodo(result);
  }, []);

  return (
    <div>
      <h2>Result From Client Component : {todo.title}</h2>
    </div>
  );
};

export default Todo;
