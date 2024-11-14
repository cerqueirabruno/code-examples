# CONFIGURAÇÃO EMAIL;
$ git config --global user.email "bocerqueira@hotmail.com"

# CONFIGURAÇÃO NOME;
$ git config --global user.name "cerqueirabruno"

# GERAR CHAVE SSH;
$ ssh-keygen -t ed25519 -C "bocerqueira@hotmail.com"

# ENTER (CONFIRMAR REPOSITÓRIO DA CHAVE);

# CRIAR SENHA;

# DIGITE NOVAMENTE A SENHA;

# INICIAR SERVIÇO DE SSH-AGENT (POWER SHELL ADMINISTRADOR);
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent

# ADICIONA A CHAVE SSH AO SSH-AGENT;
ssh-add c:/Users/YOU/.ssh/id_ed25519

# COPIAR A CHAVE SSH;
$ nodepad ~/.ssh/id_ed25519.pub

# ACESSAR O GITHUB.COM > SETTINGS > SSH AND GPG KEYS > NEW SSH KEY > PASTE...


#################################################################################################

