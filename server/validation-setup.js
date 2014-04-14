Events.remove({});

if (Events.find().count() === 0) {
Events.insert({
  createDate: moment('2014-03-16T09:30:00.000'),
  date: moment('2014-04-15T09:00:00.000').format('DD/MM/YY'),
  time: moment('2014-04-15T09:00:00.000').format('HH:mm'),
  title: 'Doação de Leite',
  local: 'Hospital São Paulo',
  description: 'Mães que amamentam seus filhos exclusivamente com leite humano e ainda têm excesso de produção, podem colaborar com o Banco de Leite do Hospital São Paulo. O serviço é totalmente gratuito e a coleta é feita na residência da mãe, com dia e hora marcados.',
  ong: 'Banco de Leite do Hospital São Paulo',
  type: 'um evento',
  linkong: 'leite.jpg',
  subscribed: []
});

Events.insert({
  createDate: moment('2014-03-16T09:30:00.000'),
  date: moment('2014-04-16T09:30:00.000').format('DD/MM/YY'),
  time: moment('2014-04-16T09:30:00.000').format('HH:mm'),
  title: 'Festa Benificente',
  description: 'O Voluntariado é aqui entendido como “o conjunto de pessoas que, no quadro da Instituição, se compromete de forma livre e altruísta a colaborar no desenvolvimento de acções programadas para a melhoria da Qualidade de Vida das pessoas com deficiência e das suas famílias. É responsabilidade da Instituição proporcionar-lhes a formação adequada que garanta uma boa actuação."',
  local: 'Rua Santa Carolina, nº 737, Clemente, São Paulo',
  ong: 'Elo Social',
  type: 'um evento',
  linkong: 'festa.jpg',
  subscribed: []
});

Events.insert({
  createDate: moment('2014-03-16T09:30:00.000'),
  date: moment('2014-04-16T10:00:00.000').format('DD/MM/YY'),
  time: moment('2014-04-16T10:00:00.000').format('HH:mm'),
  title: 'Vem pintar uma cliclovia com a gente!!',
  description: 'O Greenpeace é uma organização global cuja missão é proteger o meio ambiente, promover a paz e inspirar mudanças de atitudes que garantam um futuro mais verde e limpo para esta e para as futuras gerações.',
  ong: 'Greenpeace',
  local:'Praça Ernâni Braga',
  type: 'um evento',
  linkong: 'bicicleta.jpg',
  subscribed: []
});




}

Meteor.users.remove({});
if (Meteor.users.find().count() === 0) {
 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });

 Accounts.createUser({
   email:   Random.id() +'@gmail.com' ,
   password: Random.id(),
   role:'ong',
   'profile.name': Random.id(),
   'profile.createDate': new Date(),
   events: [],
   people: []
 });





}


