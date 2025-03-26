
//playground-1.mongodbjs



use('BD3-NoSQL-AtlasMongoDB');

// db.getCollection('bd3-nosql-atv2').insertMany (
// [
//         {
//           "cod_aluno": 1,
//           "cod_turma": 101,
//           "nome": "Ana Silva",
//           "rg": "12345678-9",
//           "telefone_aluno": "11987654321",
//           "telefone_responsavel": "11998765432",
//           "email": "ana.silva@gmail.com",
//           "data_nascimento": "2005-07-14T15:30:00"
//         },
//         {
//           "cod_aluno": 2,
//           "cod_turma": 102,
//           "nome": "João Pereira",
//           "rg": "23456789-1",
//           "telefone_aluno": "11976543210",
//           "telefone_responsavel": "11987654320",
//           "email": "joao.pereira@unifesp.com",
//           "data_nascimento": "2004-12-05T11:45:00"
//         },
//         {
//           "cod_aluno": 3,
//           "cod_turma": 103,
//           "nome": "Maria Oliveira",
//           "rg": "34567891-2",
//           "telefone_aluno": "11965432109",
//           "telefone_responsavel": "11976543219",
//           "email": "maria.oliveira@etec.sp.gov.br",
//           "data_nascimento": "2003-03-18T10:20:00"
//         },
//             {
//               "cod_aluno": 4,
//               "cod_turma": 104,
//               "nome": "Carlos Lima",
//               "rg": "45678912-8",
//               "telefone_aluno": "11945678912",
//               "telefone_responsavel": "11954321098",
//               "email": "carlos.lima@gmail.com",
//               "data_nascimento": "2003-02-10T09:25:00"
//             },
//             {
//               "cod_aluno": 5,
//               "cod_turma": 105,
//               "nome": "Fernanda Souza",
//               "rg": "56789123-9",
//               "telefone_aluno": "11956789123",
//               "telefone_responsavel": "11943210987",
//               "email": "fernanda.souza@unifesp.com",
//               "data_nascimento": "2006-06-20T14:40:00"
//             },
//             {
//               "cod_aluno": 6,
//               "cod_turma": 106,
//               "nome": "Pedro Alves",
//               "rg": "67891234-0",
//               "telefone_aluno": "11967891234",
//               "telefone_responsavel": "11932109876",
//               "email": "pedro.alves@etec.sp.gov.br",
//               "data_nascimento": "2005-12-01T16:10:00"
//             },
//             {
//               "cod_aluno": 7,
//               "cod_turma": 107,
//               "nome": "Clara Santos",
//               "rg": "78912345-1",
//               "telefone_aluno": "11978912345",
//               "telefone_responsavel": "11921098765",
//               "email": "clara.santos@gmail.com",
//               "data_nascimento": "2004-04-05T13:00:00"
//             },
//             {
//               "cod_aluno": 8,
//               "cod_turma": 108,
//               "nome": "Diego Costa",
//               "rg": "89123456-2",
//               "telefone_aluno": "11989123456",
//               "telefone_responsavel": "11910987654",
//               "email": "diego.costa@unifesp.com",
//               "data_nascimento": "2003-08-18T08:50:00"
//             },
//             {
//               "cod_aluno": 9,
//               "cod_turma": 109,
//               "nome": "Larissa Ribeiro",
//               "rg": "91234567-3",
//               "telefone_aluno": "11991234567",
//               "telefone_responsavel": "11909876543",
//               "email": "larissa.ribeiro@etec.sp.gov.br",
//               "data_nascimento": "2006-10-25T19:15:00"
//             },
//             {
//               "cod_aluno": 10,
//               "cod_turma": 110,
//               "nome": "Gabriel Martins",
//               "rg": "12345678-4",
//               "telefone_aluno": "11912345678",
//               "telefone_responsavel": "11998765432",
//               "email": "gabriel.martins@gmail.com",
//               "data_nascimento": "2005-05-12T15:00:00"
//             },
//             {
//               "cod_aluno": 11,
//               "cod_turma": 111,
//               "nome": "Juliana Barros",
//               "rg": "23456789-5",
//               "telefone_aluno": "11923456789",
//               "telefone_responsavel": "11987654321",
//               "email": "juliana.barros@unifesp.com",
//               "data_nascimento": "2004-11-18T10:35:00"
//             },
//             {
//               "cod_aluno": 12,
//               "cod_turma": 112,
//               "nome": "Rafael Fernandes",
//               "rg": "34567891-6",
//               "telefone_aluno": "11934567891",
//               "telefone_responsavel": "11965432109",
//               "email": "rafael.fernandes@etec.sp.gov.br",
//               "data_nascimento": "2003-03-20T08:00:00"
//             },
//             {
//               "cod_aluno": 13,
//               "cod_turma": 113,
//               "nome": "Beatriz Rocha",
//               "rg": "45678912-7",
//               "telefone_aluno": "11945678912",
//               "telefone_responsavel": "11954321098",
//               "email": "beatriz.rocha@gmail.com",
//               "data_nascimento": "2006-01-05T16:45:00"
//             },
//                 {
//                   "cod_aluno": 14,
//                   "cod_turma": 114,
//                   "nome": "Lucas Azevedo",
//                   "rg": "56789123-8",
//                   "telefone_aluno": "11956789123",
//                   "telefone_responsavel": "11943210987",
//                   "email": "lucas.azevedo@unifesp.com",
//                   "data_nascimento": "2005-07-16T11:20:00"
//                 },
//                 {
//                   "cod_aluno": 15,
//                   "cod_turma": 115,
//                   "nome": "Natália Mendes",
//                   "rg": "67891234-9",
//                   "telefone_aluno": "11967891234",
//                   "telefone_responsavel": "11932109876",
//                   "email": "natalia.mendes@etec.sp.gov.br",
//                   "data_nascimento": "2004-12-09T15:45:00"
//                 },
//                 {
//                   "cod_aluno": 16,
//                   "cod_turma": 116,
//                   "nome": "Matheus Nunes",
//                   "rg": "78912345-0",
//                   "telefone_aluno": "11978912345",
//                   "telefone_responsavel": "11921098765",
//                   "email": "matheus.nunes@gmail.com",
//                   "data_nascimento": "2003-09-04T09:30:00"
//                 },
//                 {
//                   "cod_aluno": 17,
//                   "cod_turma": 117,
//                   "nome": "Amanda Farias",
//                   "rg": "89123456-1",
//                   "telefone_aluno": "11989123456",
//                   "telefone_responsavel": "11910987654",
//                   "email": "amanda.farias@unifesp.com",
//                   "data_nascimento": "2006-05-21T10:15:00"
//                 },
//                 {
//                   "cod_aluno": 18,
//                   "cod_turma": 118,
//                   "nome": "Leonardo Moraes",
//                   "rg": "91234567-2",
//                   "telefone_aluno": "11991234567",
//                   "telefone_responsavel": "11909876543",
//                   "email": "leonardo.moraes@etec.sp.gov.br",
//                   "data_nascimento": "2005-08-30T08:50:00"
//                 },
//                 {
//                   "cod_aluno": 19,
//                   "cod_turma": 119,
//                   "nome": "Renata Batista",
//                   "rg": "12345678-3",
//                   "telefone_aluno": "11912345678",
//                   "telefone_responsavel": "11998765432",
//                   "email": "renata.batista@gmail.com",
//                   "data_nascimento": "2004-03-27T14:20:00"
//                 },
//                 {
//                   "cod_aluno": 20,
//                   "cod_turma": 120,
//                   "nome": "Victor Cardoso",
//                   "rg": "23456789-4",
//                   "telefone_aluno": "11923456789",
//                   "telefone_responsavel": "11987654321",
//                   "email": "victor.cardoso@unifesp.com",
//                   "data_nascimento": "2003-11-12T16:40:00"
//                 },
//                 {
//                   "cod_aluno": 21,
//                   "cod_turma": 121,
//                   "nome": "Sofia Vieira",
//                   "rg": "34567891-5",
//                   "telefone_aluno": "11934567891",
//                   "telefone_responsavel": "11965432109",
//                   "email": "sofia.vieira@etec.sp.gov.br",
//                   "data_nascimento": "2006-06-14T12:25:00"
//                 },
//                 {
//                   "cod_aluno": 22,
//                   "cod_turma": 122,
//                   "nome": "Bruno Santana",
//                   "rg": "45678912-6",
//                   "telefone_aluno": "11945678912",
//                   "telefone_responsavel": "11954321098",
//                   "email": "bruno.santana@gmail.com",
//                   "data_nascimento": "2005-01-22T11:15:00"
//                 },
//                 {
//                   "cod_aluno": 23,
//                   "cod_turma": 123,
//                   "nome": "Isabela Cunha",
//                   "rg": "56789123-7",
//                   "telefone_aluno": "11956789123",
//                   "telefone_responsavel": "11943210987",
//                   "email": "isabela.cunha@unifesp.com",
//                   "data_nascimento": "2004-08-19T10:00:00"
//                 },
//                     {
//                       "cod_aluno": 24,
//                       "cod_turma": 124,
//                       "nome": "Felipe Teixeira",
//                       "rg": "34567891-4",
//                       "telefone_aluno": "11934567891",
//                       "telefone_responsavel": "11965432109",
//                       "email": "felipe.teixeira@etec.sp.gov.br",
//                       "data_nascimento": "2005-02-28T13:50:00"
//                     },
//                     {
//                       "cod_aluno": 25,
//                       "cod_turma": 125,
//                       "nome": "Camila Almeida",
//                       "rg": "45678912-5",
//                       "telefone_aluno": "11945678912",
//                       "telefone_responsavel": "11954321098",
//                       "email": "camila.almeida@gmail.com",
//                       "data_nascimento": "2004-05-16T15:20:00"
//                     },
//                     {
//                       "cod_aluno": 26,
//                       "cod_turma": 126,
//                       "nome": "Rodrigo Freitas",
//                       "rg": "56789123-6",
//                       "telefone_aluno": "11956789123",
//                       "telefone_responsavel": "11943210987",
//                       "email": "rodrigo.freitas@unifesp.com",
//                       "data_nascimento": "2003-10-21T11:35:00"
//                     },
//                     {
//                       "cod_aluno": 27,
//                       "cod_turma": 127,
//                       "nome": "Patrícia Lima",
//                       "rg": "67891234-7",
//                       "telefone_aluno": "11967891234",
//                       "telefone_responsavel": "11932109876",
//                       "email": "patricia.lima@etec.sp.gov.br",
//                       "data_nascimento": "2006-09-02T09:10:00"
//                     },
//                     {
//                       "cod_aluno": 28,
//                       "cod_turma": 128,
//                       "nome": "Renan Araújo",
//                       "rg": "78912345-8",
//                       "telefone_aluno": "11978912345",
//                       "telefone_responsavel": "11921098765",
//                       "email": "renan.araujo@gmail.com",
//                       "data_nascimento": "2005-12-25T14:40:00"
//                     },
//                     {
//                       "cod_aluno": 29,
//                       "cod_turma": 129,
//                       "nome": "Gabriela Machado",
//                       "rg": "89123456-9",
//                       "telefone_aluno": "11989123456",
//                       "telefone_responsavel": "11910987654",
//                       "email": "gabriela.machado@unifesp.com",
//                       "data_nascimento": "2004-08-08T12:15:00"
//                     },
//                     {
//                       "cod_aluno": 30,
//                       "cod_turma": 130,
//                       "nome": "Vinícius Lopes",
//                       "rg": "91234567-0",
//                       "telefone_aluno": "11991234567",
//                       "telefone_responsavel": "11909876543",
//                       "email": "vinicius.lopes@etec.sp.gov.br",
//                       "data_nascimento": "2003-04-13T17:25:00"
//                     },
//                     {
//                       "cod_aluno": 31,
//                       "cod_turma": 131,
//                       "nome": "Eduarda Silva",
//                       "rg": "12345678-1",
//                       "telefone_aluno": "11912345678",
//                       "telefone_responsavel": "11998765432",
//                       "email": "eduarda.silva@gmail.com",
//                       "data_nascimento": "2005-03-09T10:00:00"
//                     },
//                     {
//                       "cod_aluno": 32,
//                       "cod_turma": 132,
//                       "nome": "Thiago Santos",
//                       "rg": "23456789-2",
//                       "telefone_aluno": "11923456789",
//                       "telefone_responsavel": "11987654321",
//                       "email": "thiago.santos@unifesp.com",
//                       "data_nascimento": "2004-06-21T08:35:00"
//                     },
//                     {
//                       "cod_aluno": 33,
//                       "cod_turma": 133,
//                       "nome": "Mariana Ferreira",
//                       "rg": "34567891-3",
//                       "telefone_aluno": "11934567891",
//                       "telefone_responsavel": "11965432109",
//                       "email": "mariana.ferreira@etec.sp.gov.br",
//                       "data_nascimento": "2003-11-17T19:50:00"
//                     },
//                         {
//                           "cod_aluno": 34,
//                           "cod_turma": 134,
//                           "nome": "Wesley Campos",
//                           "rg": "45678912-4",
//                           "telefone_aluno": "11945678912",
//                           "telefone_responsavel": "11954321098",
//                           "email": "wesley.campos@gmail.com",
//                           "data_nascimento": "2004-04-13T14:20:00"
//                         },
//                         {
//                           "cod_aluno": 35,
//                           "cod_turma": 135,
//                           "nome": "Débora Rodrigues",
//                           "rg": "56789123-5",
//                           "telefone_aluno": "11956789123",
//                           "telefone_responsavel": "11943210987",
//                           "email": "debora.rodrigues@unifesp.com",
//                           "data_nascimento": "2005-06-08T16:40:00"
//                         },
//                         {
//                           "cod_aluno": 36,
//                           "cod_turma": 136,
//                           "nome": "Ricardo Ramos",
//                           "rg": "67891234-6",
//                           "telefone_aluno": "11967891234",
//                           "telefone_responsavel": "11932109876",
//                           "email": "ricardo.ramos@etec.sp.gov.br",
//                           "data_nascimento": "2003-12-25T11:35:00"
//                         },
//                         {
//                           "cod_aluno": 37,
//                           "cod_turma": 137,
//                           "nome": "Tatiana Vieira",
//                           "rg": "78912345-7",
//                           "telefone_aluno": "11978912345",
//                           "telefone_responsavel": "11921098765",
//                           "email": "tatiana.vieira@gmail.com",
//                           "data_nascimento": "2006-02-19T10:00:00"
//                         },
//                         {
//                           "cod_aluno": 38,
//                           "cod_turma": 138,
//                           "nome": "Hugo Almeida",
//                           "rg": "89123456-8",
//                           "telefone_aluno": "11989123456",
//                           "telefone_responsavel": "11910987654",
//                           "email": "hugo.almeida@unifesp.com",
//                           "data_nascimento": "2005-07-11T13:15:00"
//                         },
//                         {
//                           "cod_aluno": 39,
//                           "cod_turma": 139,
//                           "nome": "Paula Reis",
//                           "rg": "91234567-9",
//                           "telefone_aluno": "11991234567",
//                           "telefone_responsavel": "11909876543",
//                           "email": "paula.reis@etec.sp.gov.br",
//                           "data_nascimento": "2004-03-30T18:50:00"
//                         },
//                         {
//                           "cod_aluno": 40,
//                           "cod_turma": 140,
//                           "nome": "Samuel Barros",
//                           "rg": "12345678-0",
//                           "telefone_aluno": "11912345678",
//                           "telefone_responsavel": "11998765432",
//                           "email": "samuel.barros@gmail.com",
//                           "data_nascimento": "2003-08-14T15:20:00"
//                         },
//                         {
//                           "cod_aluno": 41,
//                           "cod_turma": 141,
//                           "nome": "Lorena Costa",
//                           "rg": "23456789-1",
//                           "telefone_aluno": "11923456789",
//                           "telefone_responsavel": "11987654321",
//                           "email": "lorena.costa@unifesp.com",
//                           "data_nascimento": "2006-09-07T08:45:00"
//                         },
//                         {
//                           "cod_aluno": 42,
//                           "cod_turma": 142,
//                           "nome": "Arthur Andrade",
//                           "rg": "34567891-2",
//                           "telefone_aluno": "11934567891",
//                           "telefone_responsavel": "11965432109",
//                           "email": "arthur.andrade@etec.sp.gov.br",
//                           "data_nascimento": "2005-05-15T14:30:00"
//                         },
//                         {
//                           "cod_aluno": 43,
//                           "cod_turma": 143,
//                           "nome": "Helena Silva",
//                           "rg": "45678912-3",
//                           "telefone_aluno": "11945678912",
//                           "telefone_responsavel": "11954321098",
//                           "email": "helena.silva@gmail.com",
//                           "data_nascimento": "2004-11-10T16:10:00"
//                         },
//                             {
//                               "cod_aluno": 44,
//                               "cod_turma": 144,
//                               "nome": "André Pires",
//                               "rg": "56789123-4",
//                               "telefone_aluno": "11956789123",
//                               "telefone_responsavel": "11943210987",
//                               "email": "andre.pires@unifesp.com",
//                               "data_nascimento": "2005-07-20T15:30:00"
//                             },
//                             {
//                               "cod_aluno": 45,
//                               "cod_turma": 145,
//                               "nome": "Julia Alves",
//                               "rg": "67891234-5",
//                               "telefone_aluno": "11967891234",
//                               "telefone_responsavel": "11932109876",
//                               "email": "julia.alves@etec.sp.gov.br",
//                               "data_nascimento": "2004-10-11T09:10:00"
//                             },
//                             {
//                               "cod_aluno": 46,
//                               "cod_turma": 146,
//                               "nome": "Guilherme Fonseca",
//                               "rg": "78912345-6",
//                               "telefone_aluno": "11978912345",
//                               "telefone_responsavel": "11921098765",
//                               "email": "guilherme.fonseca@gmail.com",
//                               "data_nascimento": "2003-03-25T13:40:00"
//                             },
//                             {
//                               "cod_aluno": 47,
//                               "cod_turma": 147,
//                               "nome": "Sophia Borges",
//                               "rg": "89123456-7",
//                               "telefone_aluno": "11989123456",
//                               "telefone_responsavel": "11910987654",
//                               "email": "sophia.borges@unifesp.com",
//                               "data_nascimento": "2006-06-05T10:25:00"
//                             },
//                             {
//                               "cod_aluno": 48,
//                               "cod_turma": 148,
//                               "nome": "Danilo Monteiro",
//                               "rg": "91234567-8",
//                               "telefone_aluno": "11991234567",
//                               "telefone_responsavel": "11909876543",
//                               "email": "danilo.monteiro@etec.sp.gov.br",
//                               "data_nascimento": "2005-09-19T17:15:00"
//                             },
//                             {
//                               "cod_aluno": 49,
//                               "cod_turma": 149,
//                               "nome": "Milena Martins",
//                               "rg": "12345678-9",
//                               "telefone_aluno": "11912345678",
//                               "telefone_responsavel": "11998765432",
//                               "email": "milena.martins@gmail.com",
//                               "data_nascimento": "2004-03-07T08:50:00"
//                             },
//                             {
//                               "cod_aluno": 50,
//                               "cod_turma": 150,
//                               "nome": "Vitor Lima",
//                               "rg": "23456789-0",
//                               "telefone_aluno": "11923456789",
//                               "telefone_responsavel": "11987654321",
//                               "email": "vitor.lima@unifesp.com",
//                               "data_nascimento": "2003-12-12T16:00:00"
//                             },
//                         ]
// )

//exercicio update

// db.getCollection('bd3-nosql-atv2').updateOne(
//   {'cod_aluno':50},
//   {
//       $set: { "cod_aluno": 50,
//                               "cod_turma": 55,
//                               "nome": "Xikkaya",
//                               "rg": "23456543-0",
//                               "telefone_aluno": "11038563748",
//                               "telefone_responsavel": "11738274924",
//                               "email": "xikkaya@unifesp.com",
//                               "data_nascimento": "2008-12-12T16:00:00"}
//   }
//   );

//delete exercício

// db.getCollection('bd3-nosql-atv2').deleteOne(
//   {'cod_aluno':44});


// exercício encontrar

// db.getCollection('bd3-nosql-atv2').find(
//   {'email': /gmail/});




