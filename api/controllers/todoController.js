const Todo = require('../models/todoModel');

const todoController = {

    getTodo: async(req, res)=>{
      try {
        const Todos = await Todo.get();
        
        if (Todos.length === 0) {
          return res.status(404).json({ message: 'No se encontraron datos.' });
        }
  
        return res.status(200).json(Todos);
      } catch (error) {
        console.error('Error al obtener todos los datos:', error);
        
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    
    },


    postTodo: async(req, res)=>{
        const { description } = req.body;
        if (!description) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
          }
          try {
            const result = await Todo.post(description);
            res.status(201).json({ message: 'dato insertado correctamente', id: result.insertId });
          } catch (error) {
            console.error('Error al insertar al dato:', error);
            res.status(500).json({ error: 'Error al insertar al dato' });
          }
    },

    putTodo: async(req, res)=>{
        const id = req.params.id;
        const { description } = req.body;
        try {
          await Todo.put(id,description);
          res.json({ message: 'dato actualizado correctamente' });
        } catch (error) {
          console.error('Error al actualizar el dato:', error);
          res.status(500).json({ error: 'Error al actualizar el dato' });
        }
      },
    
    deleteTodo: async(req, res)=>{
        const id = req.params.id;
        try {
          await Todo.delete(id);
          res.json({ message: 'dato eliminado correctamente' });
        } catch (error) {
          console.error('Error al eliminar el dato:', error);
          res.status(500).json({ error: 'Error al eliminar el dato' });
        }
    }  

};

module.exports= todoController;