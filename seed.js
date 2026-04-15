require('dotenv').config();
const db = require('./models');

const seedDatabase = async () => {
    try {
        // Sincronizar BD
        await db.sequelize.sync({ alter: true });
        console.log('✅ Base de datos sincronizada\n');

        // 1️⃣ CREAR CATEGORÍAS
        console.log('📂 Creando categorías...');
        const categorias = await db.Categoria.bulkCreate([
            { nombreCategoria: 'Electrónica' },
            { nombreCategoria: 'Ropa' },
            { nombreCategoria: 'Libros' },
            { nombreCategoria: 'Deportes' }
        ], { ignoreDuplicates: true });
        console.log(`✅ ${categorias.length} categorías creadas\n`);

        // 2️⃣ CREAR PRODUCTOS
        console.log('🛍️ Creando productos...');
        const productos = await db.producto.bulkCreate([
            {
                nombre: 'Laptop Dell',
                descripcion: 'Laptop de alto rendimiento',
                precio: 899.99,
                stock: 10,
                id_categoria: categorias[0].id
            },
            {
                nombre: 'Mouse Logitech',
                descripcion: 'Mouse inalámbrico',
                precio: 29.99,
                stock: 50,
                id_categoria: categorias[0].id
            },
            {
                nombre: 'Camiseta Nike',
                descripcion: 'Camiseta deportiva',
                precio: 49.99,
                stock: 100,
                id_categoria: categorias[1].id
            },
            {
                nombre: 'Pantalón Adidas',
                descripcion: 'Pantalón deportivo',
                precio: 79.99,
                stock: 75,
                id_categoria: categorias[1].id
            },
            {
                nombre: 'Harry Potter',
                descripcion: 'Novela fantástica',
                precio: 19.99,
                stock: 200,
                id_categoria: categorias[2].id
            },
            {
                nombre: 'Balón de Fútbol',
                descripcion: 'Balón profesional',
                precio: 39.99,
                stock: 60,
                id_categoria: categorias[3].id
            }
        ], { ignoreDuplicates: true });
        console.log(`✅ ${productos.length} productos creados\n`);

        // 3️⃣ CREAR USUARIOS
        console.log('👤 Creando usuarios...');
        const usuarios = await db.usuario.bulkCreate([
            {
                nombre: 'Juan Pérez',
                direccion: 'Calle Principal 123',
                password: '123456',
                email: 'juan@example.com',
                telefono: '5551234567',
                rol: 'cliente',
                fecha_registro: new Date()
            },
            {
                nombre: 'María García',
                direccion: 'Avenida Central 456',
                password: '123456',
                email: 'maria@example.com',
                telefono: '5559876543',
                rol: 'cliente',
                fecha_registro: new Date()
            },
            {
                nombre: 'Carlos López',
                direccion: 'Calle Secundaria 789',
                password: '123456',
                email: 'carlos@example.com',
                telefono: '5551112233',
                rol: 'admin',
                fecha_registro: new Date()
            }
        ], { ignoreDuplicates: true });
        console.log(`✅ ${usuarios.length} usuarios creados\n`);

        // 4️⃣ CREAR CARRITOS
        console.log('🛒 Creando carritos...');
        const carritos = await db.carrito.bulkCreate([
            {
                id_usuario: usuarios[0].id,
                estado: 'activo',
                fecha_creacion: new Date(),
                total: 0
            },
            {
                id_usuario: usuarios[1].id,
                estado: 'activo',
                fecha_creacion: new Date(),
                total: 0
            },
            {
                id_usuario: usuarios[2].id,
                estado: 'completado',
                fecha_creacion: new Date('2026-04-10'),
                total: 129.98
            }
        ], { ignoreDuplicates: true });
        console.log(`✅ ${carritos.length} carritos creados\n`);

        // 5️⃣ CREAR CARRITOS DETALLE
        console.log('📦 Creando detalle de carritos...');
        const carritoDetalle = await db.carritos_detalle.bulkCreate([
            {
                id_carrito: carritos[0].id,
                id_producto: productos[0].id,
                cantidad: 1,
                precio_unitario: 899.99
            },
            {
                id_carrito: carritos[0].id,
                id_producto: productos[1].id,
                cantidad: 2,
                precio_unitario: 29.99
            },
            {
                id_carrito: carritos[1].id,
                id_producto: productos[2].id,
                cantidad: 3,
                precio_unitario: 49.99
            },
            {
                id_carrito: carritos[2].id,
                id_producto: productos[3].id,
                cantidad: 1,
                precio_unitario: 79.99
            },
            {
                id_carrito: carritos[2].id,
                id_producto: productos[4].id,
                cantidad: 1,
                precio_unitario: 49.99
            }
        ], { ignoreDuplicates: true });
        console.log(`✅ ${carritoDetalle.length} items de carrito creados\n`);

        console.log('🎉 ¡SEED COMPLETADO EXITOSAMENTE!');
        console.log('\n📊 Resumen:');
        console.log(`   • Categorías: ${categorias.length}`);
        console.log(`   • Productos: ${productos.length}`);
        console.log(`   • Usuarios: ${usuarios.length}`);
        console.log(`   • Carritos: ${carritos.length}`);
        console.log(`   • Items de carrito: ${carritoDetalle.length}`);
        console.log('\n✅ Ahora puedes hacer peticiones GET a localhost:8000/api/{endpoint}');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error al ejecutar seed:', error);
        process.exit(1);
    }
};

seedDatabase();
