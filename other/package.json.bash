"name": "vite-project", # nome do projeto
"private": true, # projeto privado
"version": "0.0.0", # versão do projeto (major, minor, patch)
"type": "module", # tipo de módulo

"scripts": { # scripts (atalho: comando)
  "dev": "vite", # npm run dev
  "build": "tsc && vite build", # npm run build
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0", # npm run lint
  "preview": "vite preview" # npm run preview

"dependencies": { # dependências;
  "react": "^18.2.0",
  "react-dom": "^18.2.0"

"devDependencies": { # dependências de desenvolvimento;
  "@types/react": "^18.2.43", # ^ recebe atualização automática da minor e patch / ~ recebe atualização automática do patch
  "@types/react-dom": "^18.2.17",
  "@typescript-eslint/eslint-plugin": "^6.14.0",
  "@typescript-eslint/parser": "^6.14.0",
  "@vitejs/plugin-react": "^4.2.1",
  "eslint": "^8.55.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5",
  "typescript": "^5.2.2",
  "vite": "^5.0.8"