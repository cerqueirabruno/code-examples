# criar ambiente virtual
python3 -m venv .venv

# ativar ambiente virtual
source .venv/bin/activate

# criar arquivo de migração
python3 manage.py makemigrations

# gerar migrações
python3 manage.py migrate

# iniciar servidor
python3 manage.py runserver

# criar projeto
django-admin startproject nameProject .

# criar app
django-admin startapp nameApp

# criar super usuário
python3 manage.py createsuperuser

# testes
python3 -m pytest

# testes em arquivo
python3 -m pytest tests/test_scraper.py
