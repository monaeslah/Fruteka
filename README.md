# Fruteka Tech Challenge

Una aplicación creada con Next.js, TypeScript y Styled Components para mostrar una lista de películas usando la API de The Movie Database (TMDB).

## Tecnologías

- ✅ Next.js con Turbopack
- ✅ TypeScript
- ✅ Styled Components (SSR)
- ✅ Axios client
- ✅ Server Side Rendering (`getServerSideProps`)
- ✅ Jest + React Testing Library

## Scripts

```bash
npm run dev     # Inicia la app en desarrollo
npm run build   # Compila el proyecto
npm start       # Ejecuta producción
npm test          # Corre los tests
npm run format    # Formatea todo el código con Prettier
```

## Variables de Entorno

Crea un archivo `.env.local` con el contenido:

```
TMDB_API_KEY=your_tmdb_api_key_here
```

## Estructura del Proyecto

```
├── pages/
│   ├── index.tsx
│   └── movie/[id].tsx
├── features/
│   ├── list/
│   │   ├── components/
│   │   │   ├── MovieCard/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   ├── __test__/
│   │   │   │   │   ├── MovieCard.test.tsx
│   │   ├── pages/
│   │   │   ├── MoviesListPage.tsx/
│   ├── detail/
│   │   ├── pages/
│   │   │   ├── MovieDetailPage.tsx/
├── lib/
│   └── apiClient.ts
├── styles/
│   └── global.ts
├── next.config.ts
├── jest.config.ts
├── tsconfig.json
└── ...
```

## Decisiones de Diseño

- Uso de `styled-components` para estilos aislados y SSR
- SSR con `getServerSideProps` para SEO y refresco de datos
- Cliente Axios centralizado (`lib/apiClient.ts`) con baseURL y API key
- Prettier y ESLint configurados para formateo automático al guardar (VSCode)
- Accesibilidad integrada con reglas para styled-components

## Formateo automático en VSCode

Para activar el formateo al guardar, asegúrate de tener en tu proyecto el archivo `.vscode/settings.json` con el siguiente contenido:

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

También asegúrate de tener instaladas las extensiones:

- ESLint
- Prettier – Code formatter

## Links de utilidad

- Next docs: https://nextjs.org/docs/pages/getting-started/installation
- TMDB API docs: https://www.themoviedb.org/login?to=read_me&redirect_uri=/docs

## TODOs

- Optimizar imágenes con `next/image`
- Incorporar diseño visual y adaptativo (mobile first y desktop) basado en los siguientes mockups:
    - Mobile:
      ![Mobile Mockup](https://github.com/Fruteka/tech-challenge/assets/mobile_mockup.png)
    - Desktop:
      ![Desktop Mockup](https://github.com/Fruteka/tech-challenge/assets/desktop_mockup.png)
- Actualizar los test de MovieCard.test.tsx

## TODOS opcionales

- Agregar paginación en listado
- Implementar búsqueda
- Añadir tests para el resto de componentes
