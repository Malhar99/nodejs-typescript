import { DB as db } from "../dbConnection";
import { RequestHandler } from "express";

const getTodos: RequestHandler = (req, res) => {
  let query = `
    SELECT id, description
    FROM public.todos;
    `;

  db.query(query, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

const getTodosById: RequestHandler = (req, res) => {
  const id = parseInt(req.params.id);
  let query = `
    SELECT id, description
    FROM public.todos
    where
    id=$1
    `;

  db.query(query, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addTodo: RequestHandler = async (req, res) => {
  const { description } = req.body;
  try {
    let query = `INSERT INTO public.todos
      (description)
      VALUES($1) RETURNING id`;

    let carResult = await db.query(query, [description]);
    res.json({
      success: "Todo added Successfully",
    });
  } catch (err) {
    console.error(err);
  }
};

const updateTodo: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id);
  let { description } = req.body;
  try {
    let query = `UPDATE public.todos
          SET description=$1
          WHERE id=$2
      `;
    let results = await db.query(query, [description, id]);

    return res.json({ "message ": " Update Success" });
  } catch (err) {
    console.error(err);
  }
};

const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;

  let query = `DELETE FROM public.todos
  WHERE id=$1;
  `;
  try {
    let { rowCount } = await db.query(query, [id]);

    return rowCount > 0
      ? res.json({ message: "Record Deleted " })
      : res.json({ message: "Record was not found or either not deleted" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
    console.error(err);
  }
};

export { getTodos, getTodosById, addTodo, updateTodo, deleteTodo };
