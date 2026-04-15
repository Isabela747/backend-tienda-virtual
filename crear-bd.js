const mysql = require('mysql2/promise');
require('dotenv').config();

const crearBaseDatos = async () => {
    try {
        console.log('🔌 Conectando a MySQL...');
        
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        });

        console.log('✅ Conectado a MySQL');
        console.log(`📂 Creando base de datos "${process.env.DB_NAME}"...`);

        // Crear la base de datos
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`✅ Base de datos "${process.env.DB_NAME}" creada`);

        await connection.end();
        console.log('✅ Conexión cerrada');
        
        return true;
    } catch (error) {
        console.error('❌ Error:', error.message);
        return false;
    }
};

crearBaseDatos();
