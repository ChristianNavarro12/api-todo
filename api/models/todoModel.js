const pool = require('../db/db');

const Todo = {

    get: async()=>{
       try {
        const [result] = await pool.query(`SELECT * FROM todo`);
        return result;
       } catch (error) {
        console.log("erro al obtener");
        throw error;
       }
    },

    post: async(description)=>{
        try {
            const [result] = await pool.execute(
              'INSERT INTO todo (description) VALUES (?)',
              [description]
            );
            return result;
          } catch (error) {
            console.error('Error al insertar el estudiante:', error);
            throw error;
          }
    },

    put: async(id, description)=>{
        try{
            const result = await pool.execute(
                'UPDATE todo SET description = ? WHERE id = ?',
                [description, id]
            );
            return result;
        } catch (error){
            console.error('Error al actualizar el estudiante:', error);
            throw error;
        }
    },

    delete: async(id)=>{
        try{
            const result = await pool.execute(
                'DELETE FROM todo WHERE id = ?',
                [id]
            );
            return result;
        } catch (error){
            console.error('Error al actualizar el estudiante:', error);
            throw error;
        }
    },


};

module.exports = Todo;