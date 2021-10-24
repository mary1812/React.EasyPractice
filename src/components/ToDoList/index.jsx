import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { TODO_SCHEMA } from "../../utils/validationSchemas";
import styles from "./todo.css";
var classNames = require('classnames')
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      body: text,
      status: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const submitForm = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);
    formikBag.resetForm();
  };
 
  return (
    <div>
      <h1>ToDo</h1>
      <Formik
        validationSchema={TODO_SCHEMA}
        initialValues={{ taskText: "" }}
        onSubmit={submitForm}
      >
        <Form>
          <Field name="taskText" placeholder="add your task" />
          <button type="submit"> ADD </button>
          <ErrorMessage name="taskText">
            {(message) => <div style={{ color: "red" }}>{message}</div>}
          </ErrorMessage>
          <ul className="ullist">
            {tasks.map((task) => {
              const styleList = classNames({"completed": task.status, "generalText": true})
              return (
                <label>
                  <li className={styleList}>
                    <Field name="taskText" type="checkbox" checked= {task.status} onChange={()=>{
                      task.status = !task.status
                      setTasks([...tasks])
                    }} />
                    {task.body}
                  </li>
                </label>
              );
            })}
          </ul>
        </Form>
      </Formik>
    </div>
  );
};
export default ToDoList;
