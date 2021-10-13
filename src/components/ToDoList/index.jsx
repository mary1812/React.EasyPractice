import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {TODO_SCHEMA} from "../../utils/validationSchemas"
import styles from "./todo.css"
const testData = [
  {
    id: 1,
    body: "",
    status: false,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(testData);

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
      <Formik validationSchema={TODO_SCHEMA} initialValues={{ taskText: "" }} onSubmit={submitForm}>
        <Form>
          <Field name="taskText" placeholder="add your task" />
          <ErrorMessage name="taskText">
            {(message) => <div style={{color:'red'}}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
      <ul className="ullist">
      
          {tasks.map((task) => {
          return   <li> {task.body}</li> ;
        })}
      
      </ul>
    </div>
  );
};
export default ToDoList;
