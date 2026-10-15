# Publicação e descoberta no Google

## Preparado no projeto

- HTML pré-renderizado com conteúdo, títulos, links e imagens legíveis sem depender da execução das animações.
- Título, descrição, idioma pt-BR, endereço canônico, Open Graph, Twitter Card e imagem de compartilhamento.
- `/robots.txt` permite rastrear HTML, JavaScript, CSS e imagens. O bloqueio de indexação da prévia fica na meta tag `noindex`, para que o robô possa lê-la.
- `/sitemap.xml` lista somente a página inicial quando a indexação está habilitada. Âncoras da mesma página e notícias de terceiros não entram no sitemap. Não há datas de atualização artificiais.
- JSON-LD de WebSite e Person com nome, OAB, foto e telefone do advogado. Sem endereço físico confirmado, não é declarada elegibilidade para resultados enriquecidos de LocalBusiness.
- Verificação por meta tag do Google Search Console configurável; a opção DNS também pode ser usada.
- Prévia com `noindex` por padrão; indexação depende de domínio público HTTPS e liberação explícita.

## Domínio oficial e compilação definitiva

Domínio confirmado: **https://saverioadvocacia.com.br**. `.env.production` contém somente essa configuração pública e a liberação de indexação para builds de produção. Tokens e segredos devem ficar no painel da hospedagem, nunca nesse arquivo versionado. Desenvolvimento mantém `noindex`; prévias devem sobrescrever `SITE_INDEXABLE=false` no provedor (a prévia da Vercel também é detectada automaticamente).

Na hospedagem, configure:

```dotenv
SITE_URL=https://saverioadvocacia.com.br
SITE_INDEXABLE=true
# Opcional: somente o conteúdo da meta tag fornecida pelo Search Console.
GOOGLE_SITE_VERIFICATION=
```

`SITE_URL` é a origem do site, sem caminho, porta, query string ou fragmento. Não use o domínio de teste no lugar do oficial. As variáveis são lidas durante o build: mudar apenas as variáveis e reiniciar um build antigo não atualiza as páginas geradas.

Para testes locais, copie `.env.example` para `.env.local` e mantenha `SITE_INDEXABLE=false`. Em produção, salve os valores no painel da hospedagem; não versione credenciais nem arquivos `.env.local`.

Execute:

```sh
npm ci
npm run test:seo
npm run lint
npm run check:publish
npm run build
npm run check:seo-build
npm run start
```

`check:publish` deve falhar enquanto o domínio e a liberação de indexação não estiverem configurados. Esse comando verifica a configuração, não o DNS, o servidor público ou a aprovação do Google. Escolha uma hospedagem compatível com Next.js/Node; este projeto não é uma exportação HTML estática.

## Na hospedagem e no domínio

1. Conectar o domínio oficial e configurar o DNS conforme o provedor.
2. Ativar HTTPS com certificado válido. Redirecionar HTTP para HTTPS e a variante secundária (com/sem www) para a URL canônica com 301 ou 308, sem ciclos.
3. Publicar o novo build e retirar senha de prévia, login ou bloqueios de firewall para visitantes e Googlebot. Não liberar acesso a arquivos secretos.
4. Confirmar HTTP 200 para `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` e as fotos usadas na página. Uma rota inexistente deve retornar 404. O arquivo `.env.production` é configuração do servidor e não deve ser disponibilizado como arquivo público.
5. Conferir no HTML público: canonical com o domínio oficial, `index, follow`, JSON-LD com URLs oficiais e ausência de `noindex`/`X-Robots-Tag: noindex` imposto pela hospedagem.
6. Medir no PageSpeed Insights e em celular real. Corrigir falhas relevantes de carregamento, estabilidade visual, contraste, foco e navegação antes de divulgar. A validação local não substitui essas medições públicas.

Não bloquear `/_next/` ou `/src/` no robots.txt: os recursos ajudam o Google a renderizar a página.

## No Google Search Console

1. Adicionar a propriedade do domínio em https://search.google.com/search-console e verificar a titularidade por DNS. Se escolher propriedade por prefixo de URL e meta tag, preencher `GOOGLE_SITE_VERIFICATION` e gerar/publicar outro build.
2. Enviar `https://saverioadvocacia.com.br/sitemap.xml` em Sitemaps.
3. Usar Inspeção de URL na página inicial, executar o teste ao vivo e solicitar indexação quando a página estiver acessível e indexável.
4. Acompanhar os relatórios de indexação e Core Web Vitals. Corrigir problemas reportados; a descoberta e a indexação não são imediatas nem garantidas.

O site contém marcação descritiva de pessoa/site, sem promessa de resultado enriquecido. Para presença local, confirmar cidade, endereço e dados profissionais e, quando aplicável, configurar o Perfil da Empresa no Google com os mesmos dados públicos. Isso é separado da publicação do site.

## Pendências editoriais e de operação

- Definir hospedagem e conectar `saverioadvocacia.com.br`. Ainda não houve publicação, configuração de DNS ou envio ao Google.
- Informar cidade/UF e, caso se deseje divulgar atendimento presencial, endereço e horários confirmados.
- Revisar os textos, identificação profissional e conteúdo com o responsável pelo escritório antes da publicação. A preparação técnica não certifica conformidade jurídica/profissional.
- WhatsApp confirmado nesta conversa: +55 11 99208-1799.
- O projeto não adiciona analytics, formulários ou rastreadores nesta etapa. Ao incluir coleta de dados, revisar a necessidade de informações de privacidade e consentimento conforme a implementação.

## Referências oficiais

- https://developers.google.com/search/docs/essentials/technical
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
