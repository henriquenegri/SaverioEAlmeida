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

Confirmar o telefone de atendimento do Renato (mantido do site anterior), substituir os assets legados não utilizados por fotografias definitivas e informar o novo Instagram, caso exista. A refatoração local não publica o site automaticamente.

