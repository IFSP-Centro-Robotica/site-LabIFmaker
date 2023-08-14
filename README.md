<div align="center">
    <img src="https://cdn.discordapp.com/attachments/863861085471244288/1140661789940535378/LabIfLogo.png" alt="teste" width="500" height="200">
</div>

<h1 align="center">Laboratório IF Maker <br/><br/></h1>

<h1 align="center"><br/>

Tecnologias

![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)&nbsp;
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;
<img src="https://cdn.discordapp.com/attachments/863861085471244288/1140665797312774385/image.png" alt="teste" width="80" height="30">

<br/></h1>



<h1 align="center"><br/>Instalação<br/><br/></h1>

!! Este projeto utiliza o npm !!

1. Instale as depedencias

```bash
    $ npm i
```

2. Rode o projeto

```bash
    $ npm run dev
```

<h1 align="center"><br/>Manutenção<br/><br/></h1>

1. Acesse a pasta **MOCKS** dentro da pasta **SRC** para adicionar novas informações ao site

Vamos supor que você queira adicionar um novo curso:

O arquivo **courses.tsx** terá duas partes:

## 1. Interface

```typescript
export interface InterfaceCoursesMock {
  name: string;
  description: string;
  link: string;
  moodleLink: string;
}
```

Essa interface contém as opções que você pode adicionar ao mock. Em caso de alteração da interface, será necessário fazer a manutenção na página.

## 2. Mockup

```typescript
export const CourseMock: InterfaceCoursesMock[] = [
  {
    name: "Curso de informatica presencial",
    description:
      "Este curso aborda um dos principais temas sobre a tecnologia no mercado atualmente...",
    link: "https://www.youtube.com/watch?v=Dj9qJsJTsjQ",
    moodleLink: "https://moodle.itp.ifsp.edu.br/login/index.php",
  },
];
```

O Mockup funciona como um banco de dados onde você pode adicionar todas as suas informações dentro de um array que contém vários objetos referentes à interface.

[Mocks](https://github.com/Martins-pedro23/Front-LabIFMaker-user/tree/development/src/mocks)

<br />
<br />
<br />
<br />
<hr />
<br />

<img src="https://cdn.discordapp.com/attachments/863861085471244288/1140661790280261732/IfLogo.png" alt="teste" width="250" height="70">