# Academia PHR Software — ToDoList (referências)

Repositório de **referência didática** da [Academia PHR Software](https://phrsoft.com/aprenda/mobile-com-ia/). Aqui ficam versões estáveis do aplicativo **ToDoList** alinhadas a cada aula do curso **Mobile com IA**, para consulta, comparação e apoio ao estudo.

## Finalidade

Cada pasta `aula-XX` contém o projeto Expo **exatamente como entregue naquela etapa** do curso: código versionado, Cursor Rules e configuração, **sem** `node_modules`, builds ou artefatos locais. Use como espelho do que você deve ter no seu repositório pessoal após concluir a aula correspondente.

Curso completo: [https://phrsoft.com/aprenda/mobile-com-ia/](https://phrsoft.com/aprenda/mobile-com-ia/)

## Aula 03 — Primeiro aplicativo

Pasta: [`aula-03/`](./aula-03/)

Conteúdo de referência (commit de origem `66f74a0` na branch `main` do projeto aluno): projeto inicial com **Expo SDK 57**, TypeScript, tela de boas-vindas **Olá, mundo!** e Project Rules em `.cursor/rules/` (`01-diretrizes-gerais.mdc`, `02-arquitetura.mdc`).

### Como executar

Requisitos: Node.js compatível com Expo SDK 57 (consulte a [Aula 01](https://phrsoft.com/aprenda/mobile-com-ia/) do curso).

```powershell
cd aula-03
npm ci
npx expo start
```

Abra o app no **Expo Go** (Android/iOS) ou use `npx expo start --web` para Web.

### Validação desta referência

- **Web:** validação visual realizada.
- **Android nativo (Expo Go em dispositivo):** teste pendente de homologação.

---

© Academia PHR Software — material de referência para alunos. Não substitui o repositório pessoal de cada participante.
