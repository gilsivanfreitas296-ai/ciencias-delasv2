# Ciências Delas

Site institucional para o projeto de valorização das mulheres artesãs de Carolina-MA.

## Arquivos
- index.html — site público
- admin.html — painel de edição
- style.css — identidade visual rosa pálido + cinza
- app.js — conteúdo do site
- admin.js — painel administrativo

## Como usar
Abra `index.html` em um navegador.
Para editar, clique em "Área admin" ou abra `admin.html`.

## Deploy no Vercel

Este é um site estático e não precisa de instalação de dependências nem de comando de build.

### Pelo painel do Vercel

1. Suba este projeto para um repositório no GitHub, GitLab ou Bitbucket.
2. No Vercel, clique em **Add New Project** e importe o repositório.
3. Deixe **Framework Preset** como `Other`.
4. Mantenha **Build Command** e **Output Directory** vazios.
5. Clique em **Deploy**.

O arquivo `vercel.json` já configura URLs limpas e os cabeçalhos básicos de segurança. Depois da publicação, o site estará disponível na raiz do domínio e o painel em `/admin`.

### Pela CLI

Com a CLI do Vercel instalada e autenticada, execute na pasta do projeto:

```text
vercel
```

Para publicar em produção:

```text
vercel --prod
```

Importante: este painel salva as alterações no `localStorage` do navegador. Isso é ótimo para um protótipo/local, mas não é um sistema administrativo online real. Para publicar com edição compartilhada entre celulares/computadores, conecte o painel a um backend (por exemplo, Supabase/Firebase) e implemente autenticação.

As fotos iniciais são imagens de demonstração. Substitua as URLs pelas fotos reais das artesãs, com autorização de uso.
