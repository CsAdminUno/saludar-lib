pushd ..\src
:: Permitir abrir el navegador de default 
:: proporcionar las credenciales de la cuenta de npm
:: Al regresar a la consola ejecutar el comando npm publish
call npm adduser
pause
call npm publish
popd
