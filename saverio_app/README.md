# Renato Saverio · Advocacia Criminal

Site institucional em Next.js 16 e React 19, com identidade carvão e dourado.

## Desenvolvimento

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Validação: `npm run lint` e `npm run build`.

## Organização

- `app/page.tsx`: composição das seções, renderizada no servidor.
- `app/globals.css`: cores, tipografia, layout responsivo e estados de interação.
- `components/header.tsx`: navegação React e menu para celular.
- `components/reveal.tsx`: entrada das seções com Motion.
- `components/react-bits/blur-text.tsx`: BlurText do React Bits, adaptado para movimento reduzido, acessibilidade e conteúdo visível antes do JavaScript.
- `lib/site-content.ts`: serviços, publicações e dados de contato.

O componente BlurText foi obtido do [código oficial do React Bits](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/TextAnimations/BlurText/BlurText.tsx). A licença original está preservada em `components/react-bits/LICENSE.md`.

Ícones: Lucide React. Imagens locais: Next Image. As imagens dos serviços foram substituídas por cartões com texto selecionável e ícones; a abertura usa `public/src/imagemComprida.jpeg` e o perfil usa a versão WebP de `public/src/imagemPessoal.jpeg`, sem a orientação EXIF incorreta. As publicações são uma seleção do site anterior, sem indicação de atualidade.

O nome e o perfil do antigo sócio foram removidos, assim como suas duas fotos públicas. O logo antigo e o link do Instagram da sociedade não são exibidos. A identidade atual usa um monograma RS.

## Próximos ajustes editoriais

Contato atualizado para (11) 99208-1799. Domínio oficial: https://saverioadvocacia.com.br. Informar cidade/UF e o novo Instagram, caso exista. A refatoração local não publica o site automaticamente.

## SEO e publicação

Consulte [PUBLICACAO.md](PUBLICACAO.md) para conectar o domínio, publicar e enviar o sitemap ao Search Console. `.env.production` configura o domínio oficial e a indexação dos builds de produção. Use `.env.example` para desenvolvimento, com `noindex`; em hospedagens de prévia, sobrescreva `SITE_INDEXABLE=false`.

Validação: `npm run test:seo` e `npm run check:publish` (este último exige domínio oficial e indexação liberada). As rotas `/robots.txt`, `/sitemap.xml` e `/opengraph-image` são geradas pelo Next.js. A marcação JSON-LD descreve o site e o advogado com os dados confirmados.

