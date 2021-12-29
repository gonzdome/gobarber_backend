module.exports = (request, response, nextFunction) => {
    response.set('access-control-allow-origin', '*');
    response.set('access-control-allow-methods', '*');
    response.set('access-control-allow-headers', '*');
    return nextFunction();
};

// O Access-Control-Allow-Origin cabeçalho de resposta indica se os recursos da resposta podem ser compartilhados com a origin dada.

// O cabeçalho de resposta Access-Control-Allow-Methods especifica o método ou métodos permitidos quando acessando o recurso em resposta a uma preflight request.
/* Access-Control-Allow-Methods: POST, GET, OPTIONS  */

// O cabeçalho de resposta Access-Control-Allow-Headers é usado na resposta à uma preflight request na qual incluí o cabeçalho  Access-Control-Request-Headers para indicar quais cabeçalhos HTTP podem ser utilizados durante a requisição efetiva.
