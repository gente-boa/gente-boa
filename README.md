gente-boa
=========

>Ferramenta desenvolvida durante o hackaton do 99jobs com intúito de unir a iniciativa privada, instituições filantrópicas e colaboradores.

## Rodando localmente
Para dar build no projeto você vai precisar ter o node e o npm instalado.

###Primeiro instale o Meteor
```sh
$ curl https://install.meteor.com | /bin/sh
```

###E então o Meteorite
Instale o gerenciador de pacotes do meteor.
``` sh
$ npm install -g meteorite
```

####Nota:
Se você precisa de acesso root para instalar pacotes globais use:
``` sh
$ sudo -H npm install -g meteorite
```

###Instale as dependências e rode o projeto
``` sh
$ mrt
```

E após isso o Gente Boa poderá ser acessado em `http://localhost:3000`