echo "Mensagem do commit: "
read message
git add .
git commit -m "$message"
git push origin main
echo "Finalizado"
echo "Precione qualquer tecla para sair..."
read

