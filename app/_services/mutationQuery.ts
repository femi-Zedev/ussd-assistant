const mutationQuery = `
mutation {
  createService1: createService(data: {
    title: "MTN Momo / MTN Money",
    description: "Accéder aux services MTN Mobile Money.",
    code: "*880#",
    operators: mtn
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService2: createService(data: {
    title: "Moov Money",
    description: "Accéder aux services Moov Money.",
    code: "*199*4#",
    operators: moov
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService3: createService(data: {
    title: "MTN Momo Payer un",
    description: "Payer un marchand via MTN Mobile Money.",
    code: "*880*41*-Numéro Marchand-*Montant-#",
    operators: mtn
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService4: createService(data: {
    title: "Achat de crédit pour une tierce",
    description: "Acheter du crédit pour une autre personne via MTN Mobile Money.",
    code: "*880*42*-Numéro de la personne-*Montant-#",
    operators: mtn
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService5: createService(data: {
    title: "Transfert d'argent (MTN)",
    description: "Transférer de l'argent à un autre utilisateur MTN.",
    code: "*880*46*-Numéro de la personne-*Montant du transfert-#",
    operators: mtn
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService6: createService(data: {
    title: "Transfert d'argent (Moov)",
    description: "Transférer de l'argent à un autre utilisateur Moov.",
    code: "*855*1*1*1*1*-Numéro de la personne-*Montant du transfert-#",
    operators: moov
    category: mobileMoney
    countryCode: BJ
  }) {
    id
  }
  
  createService7: createService(data: {
    title: "Code unique Ensemble des",
    description: "Obtenir le code unique de tous les services Moov.",
    code: "*199#",
    operators: moov
    category: communication
    countryCode: BJ
  }) {
    id
  }
  
  createService8: createService(data: {
    title: "MTN PLUS",
    description: "Accéder au service MTN PLUS.",
    code: "*153#",
    operators: mtn
    category: communication
    countryCode: BJ
  }) {
    id
  }
  
  createService9: createService(data: {
    title: "MTN FRESH",
    description: "Accéder au service MTN FRESH.",
    code: "*154#",
    operators: mtn
    category: communication
    countryCode: BJ
  }) {
    id
  }
}
`;