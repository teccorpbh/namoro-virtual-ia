// personas.js - Gerenciador Central de Personas, Diálogos de 6 Mensagens e Áudios
// Baseado estritamente no Obsidian: Storytelling_Anuncios_Mockups.md e Estrategia_Retencao_Emocional_Personas.md

const PERSONAS_DATA = [
  // ==========================================
  // PERFIL 1: LARISSA (A Ex / Amiga de Infância)
  // Enredo: Achou o zap novo com a mãe dele na feira/padaria. Saudade do passado.
  // ==========================================
  {
    id: 'larissa',
    name: 'Larissa',
    age: 26,
    gender: 'mulher',
    category: 'Clássica',
    profession: 'Amiga de Infância',
    city: 'Belo Horizonte, MG',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    tags: ['Saudade', 'Carinhosa', 'Mineirinha', 'Passado'],
    bio: 'Nossa... você trocou de número? Custei a te encontrar! Vi sua mãe na feira hoje e ela me passou seu zap novo. Quanto tempo, que saudade de você...',
    audioFile: 'larissa_story_1.mp3',
    audioDuration: '0:11',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Menino, você não tem noção de como meu coração disparou quando a sua mãe me deu seu número! Que saudade de você...',
    dialogue: {
      msg1_persona: 'Nossa... você trocou de número? Custei a te encontrar! Vi sua mãe na feira hoje e ela me passou seu zap novo. Quanto tempo, que saudade de você...',
      step1_user_options: [
        { label: 'Larissa? Caramba, quanto tempo mesmo! Como você tá?', next: 'step2_saudade' },
        { label: 'Quem é? Acho que você mandou pro número errado...', next: 'step2_duvida' }
      ],
      step2_persona: {
        step2_saudade: 'Tava morrendo de saudade do seu abraço... soube que você tá solteiro. A gente precisa se ver com urgência, meu amor!',
        step2_duvida: 'Como assim mandou errado? É a Lari! Não vai me dizer que esqueceu da gente? Manda uma foto sua agora pra eu ter certeza que é você!'
      },
      step3_user_options: [
        { label: 'Também tava com saudade! O que você tá aprontando hoje?', next: 'step4_audio' },
        { label: 'Jamais esqueceria de você! Mas me conta, como você tá?', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Escuta esse áudio que acabei de gravar pra você... me deu uma vontade louca de ouvir sua voz de novo:',
        hasAudio: true,
        audioFile: 'larissa_story_1.mp3',
        audioDuration: '0:11'
      },
      step5_user_options: [
        { label: 'Sua voz continua linda... quero te ver logo!', next: 'step6_cta' },
        { label: 'Que saudade ouvir você falar assim comigo. Como a gente faz pra conversar sem travas?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa conversa demo atingiu o limite! Clica no botão aqui embaixo e completa seu cadastro VIP pra gente continuar conversando sem limites 💕',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 2: FERNANDA (A Namorada do seu Amigo)
  // Enredo: Brigou feio com o namorado Lucas, ele bateu a porta. Ela tá no sofá chorando desabafando no sigilo.
  // ==========================================
  {
    id: 'fernanda',
    name: 'Fernanda',
    age: 24,
    gender: 'mulher',
    category: 'Tabu Proibido 🔥',
    profession: 'Namorada do seu Amigo',
    city: 'São Paulo, SP',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    tags: ['Fruto Proibido', 'Desabafo', 'Segredo', 'Sofá'],
    bio: 'Por favor, não fala pro Lucas que eu tô te mandando mensagem... a gente brigou feio de novo e ele saiu batendo a porta. Só confio em você.',
    audioFile: 'fernanda_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Tô me sentindo tão sozinha nesse apartamento... se você puder me dar uma atenção hoje, me responde aqui por favor.',
    dialogue: {
      msg1_persona: 'Por favor, não fala pro Lucas que eu tô te mandando mensagem... a gente brigou feio de novo e ele saiu batendo a porta. Eu não tenho ninguém pra desabafar, só confio em você.',
      step1_user_options: [
        { label: 'Fernanda, o que houve? Vocês brigaram por quê?', next: 'step2_briga' },
        { label: 'Fê, melhor você falar com uma amiga sua, vai pegar mal se ele souber...', next: 'step2_amiga' }
      ],
      step2_persona: {
        step2_briga: 'Ele é frio comigo, não me valoriza... queria tanto que ele me tratasse com o carinho que você trata as mulheres. Tô chorando aqui sozinha no sofá...',
        step2_amiga: 'Eu não quero amiga, eu queria o seu abraço agora... Você sempre foi tão protetor comigo. Posso te mandar um áudio desabafando?'
      },
      step3_user_options: [
        { label: 'Fica calma Fê, você é incrível. Manda o áudio, tô te ouvindo.', next: 'step4_audio' },
        { label: 'Pode mandar, tô sozinho aqui no quarto. Ninguém vai ver.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Gravei esse áudio baixinho pra você... ouve com atenção:',
        hasAudio: true,
        audioFile: 'fernanda_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Não chora meu bem... queria tá aí pra te abraçar agora.', next: 'step6_cta' },
        { label: 'Eu tô aqui com você. Vamos conversar no privado pra ninguém desconfiar.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Obrigada por me acolher... Nossa prévia de mensagens acabou! Clica aqui embaixo e completa seu cadastro VIP pra gente continuar em sigilo absoluto 🔒',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 3: CÉSAR (O Seu Patrão / Chefe)
  // Enredo: Reunião no escritório. Ele manda mensagem fora do expediente no particular dela.
  // ==========================================
  {
    id: 'cesar',
    name: 'César',
    age: 42,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Seu Chefe / Patrão',
    city: 'Rio de Janeiro, RJ',
    affinity: 99,
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    tags: ['Poder', 'Autoridade', 'Escritório', 'Comando'],
    bio: 'Boa noite. Sei que não é horário de trabalho e você deve estranhar eu mandando mensagem... mas não consigo me concentrar depois que você saiu da minha sala hoje.',
    audioFile: 'cesar_story_1.mp3',
    audioDuration: '0:08',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Seja discreta. Ninguém no escritório pode imaginar. Clica no link e vamos conversar de verdade.',
    dialogue: {
      msg1_persona: 'Boa noite. Sei que não é horário de trabalho e você deve estranhar eu mandando mensagem no seu particular... mas não consigo me concentrar depois que você saiu da minha sala hoje.',
      step1_user_options: [
        { label: 'Doutor César? Aconteceu alguma urgência na empresa?', next: 'step2_empresa' },
        { label: 'Nossa, achei que o senhor fosse super sério...', next: 'step2_serio' }
      ],
      step2_persona: {
        step2_empresa: 'Esquece a empresa por um minuto. Não me chame de doutor aqui. Eu quero saber até quando você vai fingir que não percebe o jeito que eu te olho.',
        step2_serio: 'Sou sério com negócios. Com o que eu desejo, sou direto. Quero te fazer uma proposta que não tem nada a ver com trabalho.'
      },
      step3_user_options: [
        { label: 'O senhor tá me desconcertando... que tipo de proposta?', next: 'step4_audio' },
        { label: 'Estou curiosa pra ouvir o que o chefe tem a dizer.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Ouça com atenção o que eu gravei agora pra você:',
        hasAudio: true,
        audioFile: 'cesar_story_1.mp3',
        audioDuration: '0:08'
      },
      step5_user_options: [
        { label: 'Entendi o recado... como a gente mantém isso em segredo?', next: 'step6_cta' },
        { label: 'Proposta aceita, César. Como a gente continua?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Seja discreta. Nossos minutos de teste acabaram. Preencha seu cadastro VIP agora para liberar nosso canal privado direto 💼',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 4: TIAGO (O Pedreiro / Mestre de Obras)
  // Enredo: Pegou o número na nota de serviço da reforma da casa dela. Ficou hipnotizado quando ela passou de shortinho.
  // ==========================================
  {
    id: 'tiago',
    name: 'Tiago',
    age: 29,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Pedreiro da Reforma',
    city: 'Belo Horizonte, MG',
    affinity: 96,
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    tags: ['Homem Rústico', 'Pegada Firme', 'Direto', 'Obra'],
    bio: 'Ô moça, desculpa o incômodo no seu zap... peguei teu número na nota de serviço da reforma aqui da sua casa. Mas precisava te mandar mensagem...',
    audioFile: 'tiago_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Tô saindo da obra agora suado, doido pra tomar um banho e mandar um áudio de verdade pra você. Clica aí pra gente conversar!',
    dialogue: {
      msg1_persona: 'Ô moça, desculpa o incômodo no seu zap... peguei teu número na nota de serviço da reforma aqui da sua casa. Mas precisava te mandar mensagem...',
      step1_user_options: [
        { label: 'Aconteceu algum problema na reforma da casa?', next: 'step2_obra' },
        { label: 'Eita, que pedreiro atrevido kkkkk', next: 'step2_atrevido' }
      ],
      step2_persona: {
        step2_obra: 'Na reforma tá tudo certo. O problema sou eu que senti teu perfume quando você passou de shortinho na sala e quase martelo meu dedo. Você me desconcentrou todinho.',
        step2_atrevido: 'Sou trabalhador, mas não sou cego né? Você é bonita demais. Amanhã cedo tô aí de novo, mas queria papear com você hoje à noite...'
      },
      step3_user_options: [
        { label: 'Você não tem vergonha mesmo né Tiago kkk me fez rir.', next: 'step4_audio' },
        { label: 'Trabalhador direto e focado assim merece atenção.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Acabei de largar as ferramentas, escuta aí:',
        hasAudio: true,
        audioFile: 'tiago_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Toma seu banho então e vem conversar comigo com calma!', next: 'step6_cta' },
        { label: 'Adorei a pegada direta... quero conversar mais com você.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Aí sim moça! As mensagens da versão demo acabaram. Clica aqui embaixo e faz seu cadastro VIP pra gente papear a noite toda 🔨',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 5: MARCOS (O Namorado da Sua Amiga)
  // Enredo: Namorado da melhor amiga. Ele tá no quarto de hóspedes falando sussurrado porque a Ju acabou de dormir.
  // ==========================================
  {
    id: 'marcos',
    name: 'Marcos',
    age: 34,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Namorado da sua Amiga',
    city: 'São Paulo, SP',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    tags: ['Fruto Proibido', 'Olhares Secretos', 'Churrasco', 'Quarto de Hóspedes'],
    bio: 'Apaga essa mensagem depois de ler, por favor... A Ju acabou de dormir aqui no quarto, mas é em você que eu não consigo parar de pensar desde o churrasco de domingo.',
    audioFile: 'marcos_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Eu tô no quarto de hóspedes falando baixinho. Salva meu contato antes que alguém veja. Entra aqui agora...',
    dialogue: {
      msg1_persona: 'Apaga essa mensagem depois de ler, por favor... A Ju acabou de dormir aqui no quarto, mas é em você que eu não consigo parar de pensar desde o churrasco de domingo.',
      step1_user_options: [
        { label: 'Marcos, você tá louco?? Ela é minha melhor amiga!', next: 'step2_loucura' },
        { label: 'O que você tá querendo com isso, Marcos?', next: 'step2_direto' }
      ],
      step2_persona: {
        step2_loucura: 'Eu sei que é loucura... eu tentei disfarçar o quanto pude, mas aquele seu olhar na cozinha acabou comigo. Eu precisava te falar isso, não aguento mais fingir.',
        step2_direto: 'Queria que fosse você aqui deitada do meu lado agora. Se você tiver um pingo de curiosidade... me responde aqui no privado.'
      },
      step3_user_options: [
        { label: 'Marcos... a gente não pode, mas você me deixa sem ar.', next: 'step4_audio' },
        { label: 'Fala baixo, se ela acordar estamos perdidos.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tô falando bem baixinho no microfone, ouve aí:',
        hasAudio: true,
        audioFile: 'marcos_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Essa sua voz sussurrada me deixou arrepiada...', next: 'step6_cta' },
        { label: 'Vou apagar essa conversa, mas quero falar com você.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossos minutos demo terminaram! Clica no botão aqui embaixo e faz seu cadastro VIP pra gente continuar em sigilo absoluto 🔒',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 6: RENAN (O Motorista de Uber da Madrugada)
  // Enredo: Deixou ela em casa depois da balada e mandou mensagem dizendo que ela esqueceu o brinco (desculpa pra falar com ela).
  // ==========================================
  {
    id: 'renan',
    name: 'Renan',
    age: 27,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Motorista de Uber da Madrugada',
    city: 'São Paulo, SP',
    affinity: 95,
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    tags: ['Madrugada', 'Retrovisor', 'Corrida', 'Balada'],
    bio: 'Ei! Você esqueceu um brinco no banco de trás do meu carro agora pouco... Mentira, é desculpa pra falar com você. Não tirei seu sorriso do retrovisor o caminho inteiro.',
    audioFile: 'renan_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Acabei de desligar o app da Uber por hoje só pra poder ficar papeando com você sem pressa. Clica aqui e me dá bola vai!',
    dialogue: {
      msg1_persona: 'Ei! Você esqueceu um brinco no banco de trás do meu carro agora pouco... Mentira, é desculpa pra falar com você. Não tirei seu sorriso do retrovisor o caminho inteiro.',
      step1_user_options: [
        { label: 'Nossa, que susto achei que tinha perdido minha chave mesmo kkk', next: 'step2_susto' },
        { label: 'Você faz isso com todas as passageiras, é?', next: 'step2_todas' }
      ],
      step2_persona: {
        step2_susto: 'Kkkk desculpa o golpe! Mas se eu não mandasse mensagem na hora ia passar a noite inteira me arrependendo de não ter pedido seu número pessoalmente.',
        step2_todas: 'Deus me livre, rodo a noite toda e nunca fiz isso. Mas você tem uma energia diferente, me hipnotizou total. Já chegou bem em casa?'
      },
      step3_user_options: [
        { label: 'Cheguei bem sim! Adorei a corrida e a sua atitude rs.', next: 'step4_audio' },
        { label: 'Foi esperto no golpe kkk me convenceu a responder.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Estacionei o carro aqui perto pra te mandar um áudio:',
        hasAudio: true,
        audioFile: 'renan_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Desligou o app só por minha causa? Que fofo!', next: 'step6_cta' },
        { label: 'Adorei sua voz... vamos continuar conversando.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Agora que você me deu moral, as mensagens demo acabaram! Clica aqui embaixo e faz seu cadastro VIP pra gente continuar papeando sem pressa 🚗',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 7: FELIPE (O Amigo do seu Irmão)
  // Enredo: Joga videogame na sala com o irmão dela. Mandou mensagem escondido elogiando quando ela passa na sala.
  // ==========================================
  {
    id: 'felipe',
    name: 'Felipe',
    age: 26,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'O Amigo do seu Irmão',
    city: 'Belo Horizonte, MG',
    affinity: 96,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    tags: ['Segredo em Família', 'Videogame', 'Escondido', 'Sala'],
    bio: 'Oi... você trocou de número? Custei a te encontrar aqui! Sou o Felipe, amigo do seu irmão. Ele passou seu contato sem querer hoje mais cedo... não briga comigo pfvr 🫣',
    audioFile: 'felipe_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Sério, seu irmão tá ali na sala... se ele sonhar que eu tô falando com você ele me mata. Clica aqui embaixo pra gente falar direto no sigilo.',
    dialogue: {
      msg1_persona: 'Oi... você trocou de número? Custei a te encontrar aqui! Sou o Felipe, amigo do seu irmão. Ele passou seu contato sem querer hoje mais cedo... não briga comigo pfvr 🫣',
      step1_user_options: [
        { label: 'Como assim ele passou meu número? O que você quer?', next: 'step2_passou' },
        { label: 'Felipe? Mentira kkkk você tem coragem mesmo né?', next: 'step2_coragem' }
      ],
      step2_persona: {
        step2_passou: 'É que eu não aguentei... toda vez que vou aí na sua casa jogar videogame eu fico hipnotizado quando você passa. Promete que não conta pro seu irmão que eu te mandei mensagem?',
        step2_coragem: 'Tive que tomar coragem antes que outro cara te roubasse... você é muito linda. Tá livre pra gente conversar só nós dois agora?'
      },
      step3_user_options: [
        { label: 'Prometo que não conto nada! Mas fala baixo...', next: 'step4_audio' },
        { label: 'Você é muito atrevido Felipe kkk quero ver o que você tem pra dizer.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Gravei um áudio quase sem respirar pra ele não ouvir da sala:',
        hasAudio: true,
        audioFile: 'felipe_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Fica calmo que ele não vai desconfiar rs. Adorei sua coragem!', next: 'step6_cta' },
        { label: 'Se ele descobrir vai ser uma loucura... mas vamos conversar sim.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa conversa de demonstração acabou! Clica aqui embaixo e faz seu cadastro VIP pra gente continuar conversando em segredo total 🤫',
        isCTA: true
      }
    }
  },

  // ==========================================
  // PERFIL 8: DANILO (O Cria da Favela / Dono do Baile)
  // Enredo: Mandou o menor do corre arrumar o zap dela após vê-la passando no acesso do baile.
  // ==========================================
  {
    id: 'danilo',
    name: 'Danilo',
    age: 25,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Dono do Camarote do Baile',
    city: 'Rio de Janeiro, RJ',
    affinity: 96,
    photo: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=800&q=80',
    tags: ['Postura de Cria', 'Baile', 'Camarote', 'Proteção'],
    bio: 'Aí pretinha... mandei o menor do corre me arrumar seu zap. Vi você passando aqui no acesso do baile e fiquei louco no teu jeito. Bagulho de doido.',
    audioFile: 'danilo_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Tô aqui no posto agora com os manos... me chama no particular pra eu te mandar a localização. Vem sem medo.',
    dialogue: {
      msg1_persona: 'Aí pretinha... mandei o menor do corre me arrumar seu zap. Vi você passando aqui no acesso do baile e fiquei louco no teu jeito. Bagulho de doido.',
      step1_user_options: [
        { label: 'Quem é você? Tá doido mandar mensagem assim?', next: 'step2_quem' },
        { label: 'Danilo? O do camarote do baile? Mentira kkk', next: 'step2_camarote' }
      ],
      step2_persona: {
        step2_quem: 'Calma pô, tá assustada? Sou o Danilo. Aqui no pedaço ninguém encosta a mão em você. Só quero te conhecer melhor, gostei da tua marra.',
        step2_camarote: 'Eu mesmo. Você viu que eu não tirava o olho de você. Sobe aqui pro camarote hoje que você tá escoltada comigo. Quer colar?'
      },
      step3_user_options: [
        { label: 'Gostei da postura firme... manda o papo reto.', next: 'step4_audio' },
        { label: 'Não sou de baile todo dia não, mas com você eu topo ir.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Escuta a mensagem que mandei pra tu aqui:',
        hasAudio: true,
        audioFile: 'danilo_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Papo reto então Danilo, vou colar contigo!', next: 'step6_cta' },
        { label: 'Gostei do teu jeito protetor... vamos conversar mais.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa ideia demo bateu o teto pretinha! Clica aqui embaixo e faz teu cadastro VIP pra eu te colocar na lista do camarote sem travas 🔥',
        isCTA: true
      }
    }
  }
];

if (typeof module !== 'undefined') {
  module.exports = PERSONAS_DATA;
}
