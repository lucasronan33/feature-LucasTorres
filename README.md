* IMPORTANTE: Não inicie este desafio sem autorização. O desafio só poderá ser iniciado no dia e horário agendado via Google Meet. Entre em contato via email ou whatsapp:
  - administrativo@infinixassessoria.com.br
  - (21) 99515-2411

# THE INVENTORY DASHBOARD

## Sobre
**Stack**: Python + Django + DRF + SQlite + React + TailwindCSS + Axios + TypeScript
**Escopo**: Site completo para criação e listagem de produtos.

## Requisitos Essenciais (Timebox 4h)

#### Backend

1. Configuração Inicial: Crie um app **products**, e defina o modelo Product com os campos:
    - name: CharField
    - price: Float (2 decimal fields)
    - in_stock (boolean)
2. Configure **CORS**. O backend deve aceitar requisições do localhost.
3. API (DRF):
    - Defina *serializers* para *Product*.
    - O serializador de *Product* deve exibir o nome da categoria, não apenas seu ID.
    - Use **ViewSets** para fornercer funcionalidade CRUD completa para *Product*.
    - Configure urls.

#### Frontend
1. Listagem: Ao carregar a página, buscar os pordutos e exibí-los em cards simples (Nome, Preço e um "badge" verde/vermelho para estoque).
2. Criação: Um formulário simples acima da lista com inputs para Nome, Preço e um Checkbox para Estoque.
3. Atualização (Tela de Criação): Ao salvar o produto com sucesso, a lista deve ser atualizada ( seja via novo fetch ou adicionando ao estado local).

#### Git
O desafio exige que *ambos* os servidores rodem simultaneamente. O README-CANDIDATO.md deve explicar como rodar o projeto. (Ex: "Abra dois terminais...").

#### Bônus (Desejáveis):
    - Docker Compose: Um arquivo docker-compose.yml que sobe o banco, o back e o front com um comando.
    - Validação de Erro: Se o backend recusar o produto (ex: preço negativo), o frontend deve mostrar um toast ou mensagem de erro vermelha, não apenas falhar silenciosamente.

## Instruções sobre "README-CANDIDATO" (Timebox 30min):
Preencha este arquivo com informações claras e concisas, separadas pelas seguintes seções:

#### Seção 1: Instruções para rodar
- Quais variáveis de ambiente são necessárias?
- Como instalar dependências?
- Como rodar o projeto?

#### Seção 2: Decisões de design
- Qual foi a maior dificuldade que você encontrou e como superou?
- O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?

#### Seção 3: Link para Deploy (Bônus)
- Cole aqui o link do projeto hospedado ou instrua como rodar via Docker.

#### Seção final: Recomendações
- Escreva aqui dicas, melhorias e recomendações sobre este desafio.

## Considerações finais:
Este desafio não foi pensado para encontrar quem o finaliza 100% ou quem o termina mais rápido. Estamos buscando um desenvolvedor sério, que saiba como desenvolver soluções mesmo que para apenas 50% do projeto. Não queremos nenhum dev que dependa 100% de IA ou de terceiros, mas sim aquele que sabe priorizar, desenvolver e pesquisar.
