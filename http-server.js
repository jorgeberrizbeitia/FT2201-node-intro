

const http = require("http") // paquete interno de node, ya viene instalado

const server = http.createServer( (request, response) => {

  console.log(request.url)

  
  if (request.url === "/") {
    
    response.write("Hola Servidor!")
    response.end()
  }


} )

server.listen(3000) // mantiene node activo


