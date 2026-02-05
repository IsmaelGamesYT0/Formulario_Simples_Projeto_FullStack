<h1 align="center">Formulário Simples - Projeto Full Stack ☕</h1>

<p align="center">
  Formulário web simples com Front-end em HTML/CSS/JS e Back-end em Java (Spring Boot).<br>
  Feito para praticar integração Front ↔ API, validação e organização de projeto.
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/IsmaelGamesYT0/FormularioSimplesFullStack?style=for-the-badge" />
  <img src="https://img.shields.io/github/repo-size/IsmaelGamesYT0/FormularioSimplesFullStack?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/IsmaelGamesYT0/FormularioSimplesFullStack?style=for-the-badge" />
</p>

---

## ✅ Visão geral
Este projeto envia dados de um formulário no navegador para uma API em Java, que recebe, valida e processa os dados.

> Objetivo: aprender o fluxo completo de um sistema simples (Front → Back), sem firula.

---

## 🚀 Funcionalidades
- Envio de formulário via `fetch()`
- API REST para receber cadastro.
- Validações básicas.
- Resposta do servidor exibida no front.
- Estrutura limpa e fácil de evoluir.
---

## 🧰 Stack

<table align="center">
  <tr>
    <td align="center" width="33%">
      <h3>🌐 Frontend</h3>
      <img src="https://skillicons.dev/icons?i=html,css,js&perline=3" />
      <br><br>
      <sub><b>UI + estrutura + interatividade</b></sub>
    </td>
    <td align="center" width="33%">
      <h3>🖥️ Backend</h3>
      <img src="https://skillicons.dev/icons?i=java,spring&perline=2" />
      <br><br>
      <sub><b>API, serviços e regra de negócio</b></sub>
    </td>
  </tr>
</table>

---



📁 cadastro-fullstack/
├── Frontend/
│   └── formulario/
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── Backend/
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── apiplayground/
│                       └── api/
│                           ├── controller/
│                           │   └── Controller.java
│                           │
│                           ├── dto/
│                           │   ├── CadastroRequest.java
│                           │   └── StatusResponse.java
│                           │
│                           └── ApiApplication.java

---

## ▶️ Como rodar
### 1) Back-end (Spring Boot).
1. Abra a pasta do backend na IDE (IntelliJ).
2. Rode a aplicação (Run).
3. Confirme que está de pé em:
- `http://localhost:8080`

### 2) Front-end
- Abra o `index.html` no navegador **ou** use um servidor simples (recomendado):
  - VSCode Live Server / qualquer servidor local.

---

## 🔗 Endpoints
> Ajusta conforme teu controller.

- `POST /cadastro` → recebe os dados do formulário.

Exemplo de payload:
```json
{
  "nome": "Ismael",
  "email": "ismael@email.com",
  "telefone": "99999-9999",
  "idade": 18,
  "senha": "123456"
}
```
---

## 🎬 Demonstração

<p align="center">
  <img src="./assets/demo.gif" alt="Demonstração do formulário funcionando." />
</p>

---

## 🧭 Roadmap

- Validação melhor no back (ex: mensagens claras).

- Tratamento de erros no front (toast/alert).

- Persistência (banco de dados) se fizer sentido.

- Deploy (Render/Fly.io/etc)

---

## 🤝 Contribuição

Veja: [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 Licença

MIT — Veja: [LICENSE.md](LICENSE.md).
