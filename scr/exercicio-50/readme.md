# Exercício 50 - Sistema de Reservas de Hotéis (JavaScript + Node.js)

Este projeto é um sistema de reservas de hotéis interativo, desenvolvido em JavaScript com Node.js como parte do exercício 50 do curso FullStack do programa +Prati.

O sistema é executado via terminal e permite o gerenciamento de hotéis e reservas com funcionalidades completas de cadastro, busca, reserva, cancelamento e listagem.

---

## Estrutura do Projeto

```
scr/
└── exercicio-50/
    ├── main.js
    ├── hotel.js
    ├── reserva.js
    └── sistemaReservas.js
```

---

## Funcionalidades

- Adicionar novos hotéis com cidade e total de quartos
- Buscar hotéis disponíveis por cidade
- Fazer reservas (verificando disponibilidade)
- Cancelar reservas existentes
- Listar todas as reservas com detalhes do hotel e cliente

---

## Como executar

### 1. Instale o `prompt-sync` (se ainda não tiver instalado):

```bash
npm install prompt-sync
```

### 2. Execute o programa principal:

```bash
node scr/exercicio-50/main.js
```

---

## Lógica aplicada

- Uso de orientação a objetos com classes `Hotel`, `Reserva` e `SistemaReservas`
- Armazenamento de dados em memória (arrays)
- Interação com o usuário via terminal (console)
- Menu interativo com loop e tratamento de entrada

---

## Observações

- O sistema não utiliza banco de dados — os dados são mantidos em tempo de execução.
- Ideal para treinar conceitos de lógica, estruturas de dados, OOP e manipulação via terminal.

---

## Tecnologias

- JavaScript (ES6+)
- Node.js
- prompt-sync (entrada de dados via terminal)

Desenvolvido como parte dos exercícios opcionais do programa +Prati - FullStack Developer.
