# apagar os 10 últimos commits
git reset --soft HEAD~10

# adiciona no stage
git add .

# cria o commit
git commit -m "Consolidando commits anteriores"

# enviar para o repositório remoto
git push --force