PURPLE='\033[0;35m'
RED='\033[0;31m'
NC='\033[0m'
echo -e "${PURPLE}Mensagem do commit: ${NC}"
read message
git add .
git commit -m "$message"
git push origin main
echo -e "${PURPLE}Finalizado"
echo -e "${RED}Precione qualquer tecla para sair..."
read

