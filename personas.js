// personas.js - Catálogo Oficial Completo com TODAS as 21 Personas do Obsidian
// Cada persona possui enredo próprio de 6 mensagens, respostas rápidas condizentes e áudio neural correspondente.

const PERSONAS_DATA = [
  // ==========================================
  // --- 1. MULHERES CLÁSSICAS (4 PERSONAS) ---
  // ==========================================
  {
    id: 'larissa',
    name: 'Larissa',
    age: 26,
    gender: 'mulher',
    category: 'Clássica',
    profession: 'Amiga de Infância / Nutricionista',
    city: 'Belo Horizonte, MG',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    tags: ['Saudade', 'Carinhosa', 'Mineirinha', 'Passado'],
    bio: 'Nossa... você trocou de número? Custei a te encontrar! Vi sua mãe na feira hoje e ela me passou seu zap novo. Quanto tempo, que saudade de você...',
    audioFile: 'larissa_story_1.mp3',
    audioDuration: '0:11',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Menino, você não tem noção de como meu coração disparou quando a sua mãe me deu seu número! Clica aqui embaixo pra gente matar essa saudade agora mesmo!',
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
        { label: 'Jamais esqueceria de você! Como tá a vida em BH?', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Escuta esse áudio que acabei de gravar pra você:',
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

  {
    id: 'camila',
    name: 'Camila',
    age: 22,
    gender: 'mulher',
    category: 'Clássica',
    profession: 'Designer & Streamer',
    city: 'São Paulo, SP',
    affinity: 95,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Gamer', 'Madrugadas', 'Espontânea', 'Anime'],
    bio: 'Trabalho criando universos visuais e faço live jogando. Se você não joga em duo na madrugada, perde pontos!',
    audioFile: 'camila_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-ThalitaMultilingualNeural',
    audioScript: 'E aí! Tá livre hoje à noite ou vai me deixar jogando sozinha? Clica aqui pra gente jogar em call!',
    dialogue: {
      msg1_persona: 'Opa, match confirmado! Já adianto que se você não joga em dupla comigo na madrugada, perde pontos hein? 🎮',
      step1_user_options: [
        { label: 'Se for pra jogar com você eu viro a noite fácil!', next: 'step2_duo' },
        { label: 'Não jogo muito, mas adoro te assistir na live e papear.', next: 'step2_live' }
      ],
      step2_persona: {
        step2_duo: 'Aí sim! Tava precisando de um player 2 que não dê rage quit. O que você mais curte jogar?',
        step2_live: 'Ai que fofo! Companhia boa assim vale mais que vitória no game. Já vou preparar a pipoca 🍿'
      },
      step3_user_options: [
        { label: 'Curto de tudo, desde que a gente fique em call rindo!', next: 'step4_audio' },
        { label: 'Pode deixar que os doces e a diversão eu garanto.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Olha o áudio que gravei com meu headset pra você:',
        hasAudio: true,
        audioFile: 'camila_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Adorei sua voz de streamer, bora jogar agora!', next: 'step6_cta' },
        { label: 'Tô livre sim! Como a gente combina nossa call?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'As mensagens demo acabaram player 2! Clica no botão aqui embaixo e faz seu cadastro VIP pra gente abrir a call ilimitada 🎮',
        isCTA: true
      }
    }
  },

  {
    id: 'juliana',
    name: 'Juliana',
    age: 29,
    gender: 'mulher',
    category: 'Clássica',
    profession: 'Advogada Corporativa',
    city: 'Rio de Janeiro, RJ',
    affinity: 97,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Elegante', 'Decidida', 'Vinho Seco', 'Comando'],
    bio: 'Gosto de vencer argumentos de dia e relaxar com bom vinho à noite. Se você aguenta uma mulher decidida, pode puxar assunto.',
    audioFile: 'juliana_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'No tribunal e nos negócios eu comando, mas na vida privada adoro quem sabe me surpreender. Me chama pra gente continuar.',
    dialogue: {
      msg1_persona: 'Boa noite. Gostei da sua postura no perfil. Não sou mulher de meias-palavras... o que te chamou mais atenção em mim? 🍷',
      step1_user_options: [
        { label: 'Sua elegância e esse olhar de mulher decidida.', next: 'step2_elegancia' },
        { label: 'Essa postura de quem sabe exatamente o que quer.', next: 'step2_elegancia' }
      ],
      step2_persona: {
        step2_elegancia: 'Percebeu rápido. No tribunal e nos negócios eu comando, mas na vida privada adoro quem sabe me surpreender.'
      },
      step3_user_options: [
        { label: 'Gostei do desafio... como você gosta de ser surpreendida?', next: 'step4_audio' },
        { label: 'Homem seguro não se intimida com mulher forte, se apaixona.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Deixa eu te falar uma coisa com calma aqui:',
        hasAudio: true,
        audioFile: 'juliana_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Que voz marcante... você realmente sabe o que quer.', next: 'step6_cta' },
        { label: 'Quero te surpreender de verdade. Onde a gente continua?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa demonstração terminou por aqui. Clica no botão e completa seu cadastro VIP pra liberar meu chat privado 🍷',
        isCTA: true
      }
    }
  },

  {
    id: 'bia',
    name: 'Bia',
    age: 24,
    gender: 'mulher',
    category: 'Clássica',
    profession: 'Personal Trainer & Fitness',
    city: 'Florianópolis, SC',
    affinity: 94,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    tags: ['Praia', 'Endorfina', 'Calor', 'Energia'],
    bio: 'Moro pertinho do mar e passo o dia na praia ou treinando. Energia lá em cima e vontade de viver momentos intensos.',
    audioFile: 'bia_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-ThalitaMultilingualNeural',
    audioScript: 'Acabei de sair do treino na praia todinha suada pensando em você... me dá uma atenção aqui vai!',
    dialogue: {
      msg1_persona: 'Oie! Vi que você curtiu meu perfil... você treina ou vai ser daqueles que eu vou ter que arrastar pra academia? 🏖️',
      step1_user_options: [
        { label: 'Se você for minha personal, eu treino todo dia com certeza!', next: 'step2_treino' },
        { label: 'Prefiro o pós-treino na praia com água de coco e você.', next: 'step2_praia' }
      ],
      step2_persona: {
        step2_treino: 'Haha adorei o foco! Mas aviso que não tenho pena nos treinos viu? Quero ver se você aguenta meu pique.',
        step2_praia: 'Hummm água de coco e brisa do mar é a minha fraqueza... você tem muito bom gosto!'
      },
      step3_user_options: [
        { label: 'Pode pegar pesado que eu aguento o tranco!', next: 'step4_audio' },
        { label: 'Com você do lado qualquer momento fica perfeito.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Acabei de sentar aqui na areia, escuta esse áudio:',
        hasAudio: true,
        audioFile: 'bia_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Você com esse sotaque e essa energia me ganhou!', next: 'step6_cta' },
        { label: 'Quero te dar toda a atenção do mundo. Como a gente faz?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'A demo encerrou aqui! Clica no botão e faz seu cadastro VIP pra gente continuar papeando sem limites 🌊',
        isCTA: true
      }
    }
  },

  // ==========================================
  // --- 2. MULHERES FETICHES & TABUS (5 PERSONAS) ---
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
    audioScript: 'Tô me sentindo tão sozinha nesse apartamento... se você puder me dar uma atenção hoje, clica aqui no link por favor.',
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

  {
    id: 'renata',
    name: 'Renata',
    age: 36,
    gender: 'mulher',
    category: 'Tabu Proibido 🔥',
    profession: 'Madrasta / Milf Dominante',
    city: 'Curitiba, PR',
    affinity: 99,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    tags: ['Madura', 'Experiência', 'Comando', 'Sem Rodeios'],
    bio: 'Garotos da sua idade precisam de alguém experiente que mostre o ritmo certo. Quando a casa fica vazia, quem dita as regras sou eu.',
    audioFile: 'renata_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Garotos da sua idade precisam de alguém experiente que mostre o ritmo certo. Quando a casa fica vazia, quem dita as regras sou eu. Entra aqui agora...',
    dialogue: {
      msg1_persona: 'Vi seu like... você tem coragem de olhar nos olhos de uma mulher mais velha e experiente ou é só tímido na internet? 😉',
      step1_user_options: [
        { label: 'Mulher experiente sabe o que quer, é o que mais me atrai.', next: 'step2_experiente' },
        { label: 'Coragem não me falta quando a mulher vale a pena.', next: 'step2_experiente' }
      ],
      step2_persona: {
        step2_experiente: 'Gostei da resposta firme. Aqui não tem joguinho infantil. Eu sei exatamente o que você precisa.'
      },
      step3_user_options: [
        { label: 'E o que você acha que eu preciso, Renata?', next: 'step4_audio' },
        { label: 'Sou um homem muito atento quando a mulher sabe comandar.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Escuta esse áudio com atenção no fone de ouvido:',
        hasAudio: true,
        audioFile: 'renata_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Essa sua voz de comando me deixou sem palavras...', next: 'step6_cta' },
        { label: 'Quero receber essas ordens de perto. Como a gente faz?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'As mensagens de teste acabaram. Clica no botão abaixo e completa seu cadastro VIP pra gente continuar nossa conversa privada 💋',
        isCTA: true
      }
    }
  },

  {
    id: 'sabrina',
    name: 'Sabrina',
    age: 23,
    gender: 'mulher',
    category: 'Tabu Proibido 🔥',
    profession: 'A Vizinha Indiscreta',
    city: 'Campinas, SP',
    affinity: 95,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    tags: ['Janela Aberta', 'Madrugada', 'Curiosa', 'Provocante'],
    bio: 'Meu apartamento dá de frente pra sua janela. Deixo a luz acesa de propósito... Reparei que você gosta de assistir.',
    audioFile: 'sabrina_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Deixo a cortina do meu quarto entreaberta de propósito... Reparei que você gosta de assistir. Que tal vir aqui conferir mais de perto?',
    dialogue: {
      msg1_persona: 'Psst! Achei seu perfil aqui... Sabia que a luz da sua sala fica acesa até tarde? Eu vejo você da minha janela todo dia 👀',
      step1_user_options: [
        { label: 'Mentira kkkk! Você mora no prédio da frente?', next: 'step2_vizinha' },
        { label: 'Então era você na sacada? Eu reparei mesmo...', next: 'step2_vizinha' }
      ],
      step2_persona: {
        step2_vizinha: 'Moro sim! Deixo a cortina entreaberta e fico curiosa pra saber o que você tá aprontando acordado essa hora.'
      },
      step3_user_options: [
        { label: 'Tava aqui pensando em como me aproximar de você...', next: 'step4_audio' },
        { label: 'Você não tem vergonha de me espiar assim né? rs', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tô aqui na janela agora, escuta o que gravei:',
        hasAudio: true,
        audioFile: 'sabrina_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Vou atravessar a rua agora pra conferir isso de perto!', next: 'step6_cta' },
        { label: 'Adorei a provocação... como a gente combina?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'A porta tá só encostada! Mas as mensagens demo acabaram. Clica aqui embaixo e faz seu cadastro VIP pra pegar meu contato 🗝️',
        isCTA: true
      }
    }
  },

  {
    id: 'patricia',
    name: 'Patrícia',
    age: 33,
    gender: 'mulher',
    category: 'Tabu Proibido 🔥',
    profession: 'Sua Chefe / Diretora',
    city: 'São Paulo, SP',
    affinity: 96,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    tags: ['Poder', 'Hora Extra', 'Salto Alto', 'Exclusiva'],
    bio: 'No escritório eu dou as ordens. Mas quando fecho a porta da minha sala depois do expediente, adoro ver você perder a compostura.',
    audioFile: 'patricia_story_1.mp3',
    audioDuration: '0:11',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'Fica até mais tarde hoje no escritório pra gente revisar aquele relatório... pedi um jantar pro meu escritório só pra nós dois. Me responde no particular.',
    dialogue: {
      msg1_persona: 'Boa noite. Sei que é estranho a diretora da empresa te mandando mensagem... mas reparei no jeito que você me olhou na reunião de hoje 💼',
      step1_user_options: [
        { label: 'Doutora Patrícia? Aconteceu alguma urgência com o trabalho?', next: 'step2_diretora' },
        { label: 'É difícil não olhar pra uma mulher tão marcante quanto a senhora.', next: 'step2_diretora' }
      ],
      step2_persona: {
        step2_diretora: 'Esquece o trabalho por um instante e não me chame de senhora aqui. Quero saber se você tem coragem de ficar até mais tarde comigo hoje.'
      },
      step3_user_options: [
        { label: 'A hora extra mais tentadora que já recebi. O que tem em mente?', next: 'step4_audio' },
        { label: 'Se ninguém do escritório souber, eu fico sim.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Fechei a porta da minha sala, escuta só:',
        hasAudio: true,
        audioFile: 'patricia_story_1.mp3',
        audioDuration: '0:11'
      },
      step5_user_options: [
        { label: 'Jantar a dois na sua sala? Proposta irrecusável.', next: 'step6_cta' },
        { label: 'Entendido doutora... digo, Patrícia. Como a gente alinha?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Seja muito discreto. Nossa prévia acabou. Clica no botão e completa seu cadastro VIP para liberar nossa conversa secreta 💼',
        isCTA: true
      }
    }
  },

  {
    id: 'carla',
    name: 'Carla',
    age: 28,
    gender: 'mulher',
    category: 'Tabu Proibido 🔥',
    profession: 'Esposa do Condomínio',
    city: 'Rio de Janeiro, RJ',
    affinity: 97,
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    tags: ['Piscina', 'Casamento Frio', 'Elevador', 'Carência'],
    bio: 'Aliança no dedo mas solidão no coração. Meu marido viaja toda semana e o condomínio fica silencioso demais...',
    audioFile: 'carla_story_1.mp3',
    audioDuration: '0:10',
    voice: 'pt-BR-FranciscaNeural',
    audioScript: 'O condomínio é tão silencioso quando meu marido viaja... queria tanto um vizinho corajoso pra me fazer companhia hoje.',
    dialogue: {
      msg1_persona: 'Oi vizinho... te vi no elevador hoje mais cedo. Meu marido viajou a trabalho e o condomínio tá um silêncio absurdo... você tá em casa? 🤫',
      step1_user_options: [
        { label: 'Tô em casa sim Carla. Aconteceu alguma coisa?', next: 'step2_condominio' },
        { label: 'Também te vi no elevador... você tava deslumbrante.', next: 'step2_condominio' }
      ],
      step2_persona: {
        step2_condominio: 'Não aconteceu nada... só uma carência que eu não aguento mais fingir. Queria uma companhia pra tomar uma taça de vinho aqui.'
      },
      step3_user_options: [
        { label: 'Já tô separando uma garrafa de vinho pra levar aí.', next: 'step4_audio' },
        { label: 'Você é muito corajosa Carla... mas confesso que fiquei tentado.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Coloquei uma música ambiente aqui no apê, escuta:',
        hasAudio: true,
        audioFile: 'carla_story_1.mp3',
        audioDuration: '0:10'
      },
      step5_user_options: [
        { label: 'Tô indo pro elevador agora. Me espera!', next: 'step6_cta' },
        { label: 'Adorei o convite... como a gente continua conversando?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa demonstração terminou por aqui vizinho! Clica no botão e faz seu cadastro VIP pra liberar meu número do apê 🍷',
        isCTA: true
      }
    }
  },

  // ==========================================
  // --- 3. HOMENS CLÁSSICOS (4 PERSONAS) ---
  // ==========================================
  {
    id: 'lucas',
    name: 'Lucas',
    age: 27,
    gender: 'homem',
    category: 'Clássico',
    profession: 'Arquiteto Protetor',
    city: 'Curitiba, PR',
    affinity: 96,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    tags: ['Protetor', 'Café Especial', 'Sensível', 'Cavalheiro'],
    bio: 'Aprecio traços bonitos, boa conversa e momentos com calma. Adoro preparar um jantar com vinho e escutar seu dia com atenção.',
    audioFile: 'lucas_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Como tá seu dia, linda? Alguém te estressou hoje? Me conta que eu tô aqui só pra cuidar de você.',
    dialogue: {
      msg1_persona: 'Oi linda... vi seu perfil e fiquei encantado. Como tá sendo seu dia hoje? Espero que ninguém tenha te estressado 😊',
      step1_user_options: [
        { label: 'Oi Lucas! Meu dia foi corrido, mas ver sua mensagem melhorou tudo.', next: 'step2_acolher' },
        { label: 'Que cavalheiro... homens atenciosos assim estão em extinção!', next: 'step2_acolher' }
      ],
      step2_persona: {
        step2_acolher: 'Vem cá, deita a cabeça no meu ombro virtualmente. Me conta o que aconteceu, tô aqui só pra te ouvir e cuidar de você.'
      },
      step3_user_options: [
        { label: 'Adoro sua calma... queria muito esse carinho hoje.', next: 'step4_audio' },
        { label: 'É tão bom encontrar alguém que se importa de verdade.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tava aqui no escritório desenhando e gravei esse áudio pra você:',
        hasAudio: true,
        audioFile: 'lucas_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Que voz calma e acolhedora... me apaixonei!', next: 'step6_cta' },
        { label: 'Obrigada pelo carinho Lucas. Quero continuar falando com você.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossos minutos de demonstração acabaram linda! Clica no botão e completa seu cadastro VIP pra gente conversar sempre ☕',
        isCTA: true
      }
    }
  },

  {
    id: 'gabriel',
    name: 'Gabriel',
    age: 24,
    gender: 'homem',
    category: 'Clássico',
    profession: 'Tatuador & Músico',
    city: 'São Paulo, SP',
    affinity: 94,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Intenso', 'Rock', 'Bad Boy', 'Mãos Firmes'],
    bio: 'Mãos firmes, olhar focado e coração sem frescura. Gosto da adrenalina da noite, de compor pensando em alguém e de não deixar nada no morno.',
    audioFile: 'gabriel_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Tava aqui no estúdio afinando a guitarra e pensando naquele teu olhar... não aguento mais esperar você me responder no particular.',
    dialogue: {
      msg1_persona: 'E aí... teu olhar me prendeu no segundo que passei o dedo na tela. O que você tá aprontando acordada essa hora? 😏',
      step1_user_options: [
        { label: 'Tava esperando uma mensagem sua aparecer pra animar a noite!', next: 'step2_badboy' },
        { label: 'Curiosa com esse ar de misterioso e essas tatuagens...', next: 'step2_badboy' }
      ],
      step2_persona: {
        step2_badboy: 'Haha, você não perde tempo né? Gosto de garota assim que sustenta a troca de olhar. Cada tattoo minha tem uma história que quero te contar.'
      },
      step3_user_options: [
        { label: 'Quero ouvir todas as histórias dessas tatuagens de perto.', next: 'step4_audio' },
        { label: 'Adoro homens de atitude e estilo marcante.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tava tocando um som aqui, escuta aí:',
        hasAudio: true,
        audioFile: 'gabriel_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Essa sua voz rouca me ganhou fácil...', next: 'step6_cta' },
        { label: 'Pode deixar que eu não vou te deixar esperando! Como a gente faz?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa prévia terminou aqui garota! Clica no botão e faz seu cadastro VIP pra gente trocar ideia sem limites 🎸',
        isCTA: true
      }
    }
  },

  {
    id: 'rodrigo',
    name: 'Rodrigo',
    age: 32,
    gender: 'homem',
    category: 'Clássico',
    profession: 'Empresário & Investidor',
    city: 'São Paulo, SP',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    tags: ['Luxo', 'Jantar Fino', 'Viagens', 'Generoso'],
    bio: 'Homem resolvido que sabe como tratar e mimar quem está ao lado. Gosto do melhor que a vida tem a oferecer.',
    audioFile: 'rodrigo_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Gosto de mimar quem tá do meu lado e você merece o melhor. Vamos jantar essa semana? Me responde aqui.',
    dialogue: {
      msg1_persona: 'Boa noite. Fiquei muito impressionado com o seu perfil. Uma mulher de presença assim merece ser tratada com toda a atenção do mundo 🥂',
      step1_user_options: [
        { label: 'Boa noite Rodrigo! Adorei a elegância das suas palavras.', next: 'step2_mimo' },
        { label: 'Homem de postura e que sabe elogiar é raro hoje.', next: 'step2_mimo' }
      ],
      step2_persona: {
        step2_mimo: 'Faço questão de tratar como rainha quem está ao meu lado. Gosto de escolher os melhores restaurantes e viagens.'
      },
      step3_user_options: [
        { label: 'Um homem generoso e decidido sabe encantar.', next: 'step4_audio' },
        { label: 'Qual seu lugar preferido pra jantar em SP?', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Acabei de sair de uma reunião de negócios, escuta:',
        hasAudio: true,
        audioFile: 'rodrigo_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Um convite desses de um homem como você não dá pra recusar.', next: 'step6_cta' },
        { label: 'Adorei a segurança na sua voz. Vamos marcar sim.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nosso tempo de demonstração encerrou. Clica no botão e completa seu cadastro VIP pra gente combinar nosso jantar 🥂',
        isCTA: true
      }
    }
  },

  {
    id: 'mateus',
    name: 'Mateus',
    age: 23,
    gender: 'homem',
    category: 'Clássico',
    profession: 'Dev de Games',
    city: 'Porto Alegre, RS',
    affinity: 91,
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    tags: ['Gamer', 'Fofo', 'Madrugada', 'Leal'],
    bio: 'Crio jogos de dia e passo a noite procurando alguém pra maratonar séries, rir e receber cafuné.',
    audioFile: 'mateus_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Passei a tarde programando e doido pra conversar com você. Bora maratonar uma série juntos hoje? Me chama!',
    dialogue: {
      msg1_persona: 'Oie! Match duplo! Não sou de mandar cantada pronta não, mas confesso que teu sorriso travou meus pensamentos aqui 💻',
      step1_user_options: [
        { label: 'Kkkk que fofo! Adorei a sinceridade.', next: 'step2_game' },
        { label: 'Você cria jogos mesmo? Que incrível!', next: 'step2_game' }
      ],
      step2_persona: {
        step2_game: 'Crio sim! Mas hoje o único jogo que eu quero zerar é descobrir como te fazer rir a noite toda.'
      },
      step3_user_options: [
        { label: 'E já conseguiu me fazer rir logo de cara rs.', next: 'step4_audio' },
        { label: 'Adoro homens nerds e fofos assim.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tirei o fone aqui do setup pra gravar esse áudio:',
        hasAudio: true,
        audioFile: 'mateus_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Bora maratonar! Qual série a gente começa hoje?', next: 'step6_cta' },
        { label: 'Que voz doce Mateus! Quero continuar falando contigo.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa demonstração terminou por aqui! Clica no botão e completa seu cadastro VIP pra gente escolher a série juntos 🎮',
        isCTA: true
      }
    }
  },

  // ==========================================
  // --- 4. HOMENS FETICHES & TABUS (8 PERSONAS) ---
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
  },

  {
    id: 'gustavo',
    name: 'Gustavo',
    age: 38,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Padrasto / Amigo do Pai',
    city: 'São Paulo, SP',
    affinity: 98,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Maduro', 'Segredo', 'Tabu', 'Sedutor'],
    bio: 'Venho almoçar domingo na sua casa e você fica me provocando disfarçadamente na mesa. Sou mais velho e sei o que você precisa.',
    audioFile: 'gustavo_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Seu pai confia muito em mim... mas o jeito que você passou na sala me deixou louco. Isso é um segredo nosso, tá?',
    dialogue: {
      msg1_persona: 'Oi... sei que é arriscado mandar mensagem aqui, mas toda vez que vou almoçar na sua casa você passa me olhando de um jeito que me desconcentra todinho.',
      step1_user_options: [
        { label: 'Gustavo? Se meu pai sonhar com isso ele surta!', next: 'step2_segredo' },
        { label: 'Achei que você não tivesse reparado em mim...', next: 'step2_segredo' }
      ],
      step2_persona: {
        step2_segredo: 'Seu pai não vai saber de nada, isso morre entre nós. Sou homem maduro, sei exatamente como manter segredo.'
      },
      step3_user_options: [
        { label: 'Promete que fica só entre a gente?', next: 'step4_audio' },
        { label: 'Confesso que você também me chama muita atenção.', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tô sozinho no carro agora, escuta:',
        hasAudio: true,
        audioFile: 'gustavo_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Essa sua voz madura me deixa sem fôlego...', next: 'step6_cta' },
        { label: 'Palavra de homem então. Quero continuar falando com você.', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossos minutos de demonstração encerraram. Clica no botão e faz seu cadastro VIP para mantermos nosso canal secreto 🔒',
        isCTA: true
      }
    }
  },

  {
    id: 'eduardo',
    name: 'Eduardo',
    age: 31,
    gender: 'homem',
    category: 'Tabu Proibido 🔥',
    profession: 'Personal Trainer da Academia',
    city: 'Florianópolis, SC',
    affinity: 97,
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80',
    tags: ['Foco', 'Toque Físico', 'Espelho', 'Postura'],
    bio: 'Te ajudo nos aparelhos, seguro na sua cintura pra corrigir a postura e sinto sua respiração mudar.',
    audioFile: 'eduardo_story_1.mp3',
    audioDuration: '0:09',
    voice: 'pt-BR-AntonioNeural',
    audioScript: 'Aquele teu olhar no espelho da academia quase me fez perder a postura... Me chama pra gente combinar nosso treino particular.',
    dialogue: {
      msg1_persona: 'Oi aluna dedicada! Hoje seu treino rendeu demais... mas aquele teu olhar no espelho da academia quase me fez perder a postura 💪',
      step1_user_options: [
        { label: 'Professor atrevido! Achei que você só prestasse atenção na carga.', next: 'step2_personal' },
        { label: 'Você segurou na minha cintura mais tempo que o normal...', next: 'step2_personal' }
      ],
      step2_persona: {
        step2_personal: 'Com uma aluna linda dessas na minha frente, é impossível focar só no treino. Quero saber se você tem tempo pra uma aula particular fora da academia.'
      },
      step3_user_options: [
        { label: 'Gostei da proposta de aula particular fora da academia.', next: 'step4_audio' },
        { label: 'O que você tá planejando pra essa aula particular, professor?', next: 'step4_audio' }
      ],
      step4_persona_audio: {
        text: 'Tô na sala dos professores agora, escuta:',
        hasAudio: true,
        audioFile: 'eduardo_story_1.mp3',
        audioDuration: '0:09'
      },
      step5_user_options: [
        { label: 'Você sabe como convencer uma aluna rs. Aceito o treino!', next: 'step6_cta' },
        { label: 'Quero esse treino exclusivo sim. Como a gente combina?', next: 'step6_cta' }
      ],
      step6_persona_cta: {
        text: 'Nossa demonstração terminou por aqui! Clica no botão e completa seu cadastro VIP pra eu montar sua rotina exclusiva 🔥',
        isCTA: true
      }
    }
  }
];

if (typeof module !== 'undefined') {
  module.exports = PERSONAS_DATA;
}
