# Arquitetura do Projeto granio

## Estrutura de Pastas

```
granio_nextjs_ts/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── (auth)/            # Grupo de rotas de autenticação
│   │   ├── (dashboard)/       # Grupo de rotas do dashboard
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Componentes de interface básicos
│   │   ├── forms/             # Componentes de formulários
│   │   └── layout/            # Componentes de layout
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilitários e configurações
│   │   ├── utils/             # Funções utilitárias
│   │   └── validations/       # Schemas de validação
│   ├── services/              # Serviços e APIs
│   ├── store/                 # Gerenciamento de estado global
│   ├── types/                 # Definições TypeScript
│   ├── constants/             # Constantes da aplicação
│   └── styles/                # Estilos adicionais
├── public/                    # Arquivos estáticos
├── tests/                     # Testes
│   ├── unit/                  # Testes unitários
│   └── integration/           # Testes de integração
├── docs/                      # Documentação
└── ...configs                 # Arquivos de configuração
```

## Convenções

### Nomenclatura
- **Pastas**: kebab-case ou camelCase
- **Componentes**: PascalCase
- **Arquivos**: camelCase ou kebab-case
- **Constantes**: UPPER_SNAKE_CASE

### Estrutura de Componentes
```tsx
// components/ui/Button/index.tsx
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

### Imports
```tsx
// Ordem de imports:
// 1. React/Next.js
// 2. Bibliotecas externas
// 3. Componentes internos
// 4. Types/Interfaces
// 5. Utilitários
```

## Tecnologias Principais
- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **ESLint** - Linting