// try
// {
//     const result =some_function();
// }
// catch
// {
//     console.error('Error:',error.message);
// }

// if(err)throw err;

class MyError extends 
Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    } 
}

function someFunction()
{
    //fonksiyomum yaptığı işlerin kodu...
    throw new MyError('Birşeyler ters gitti',500);
}
try
{
    someFunction();
}
catch(error)
{
    if(error instanceof MyError){
        console.error('Hata oldu:',error.message, error.statusCode);
    }
    else
    {
        console.error(' Faklı hata oldu:',error.message);
    }
}