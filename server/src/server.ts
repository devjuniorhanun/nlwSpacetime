import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

// Iniciando a aplicação usando Fastify
const app = fastify()
// Chamando o cliente do Prisma
const prisma = new PrismaClient()

// Criando uma requisição Get
app.get('/hello', () => {
  return 'Hello World'
})

// Criando uma requisição Get
app.get('/usuarios', async () => {
  // Listando todos os Usuários
  const usuarios = await prisma.user.findMany()
  return usuarios
})
// Instanciando o servidor web.
// Na porta 3000
app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Servidor rodando na porta 3000')
  })
