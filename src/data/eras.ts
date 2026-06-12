import { Era } from './types';

export const eras: Era[] = [
  {
    id: 'ancient-civilizations',
    name: 'Ancient Civilizations',
    nameZh: '古代文明',
    timeRange: 'c. 3500 BCE – 800 BCE',
    summary: 'Human beings settled down, built cities, and created the foundations of organized civilization.',
    summaryZh: '人类定居下来，建造城市，并奠定了有组织文明的基础。',
    keyIdeas: [
      'Agriculture supported larger, permanent populations.',
      'Cities, governments, and social hierarchies emerged.',
      'Writing systems enabled knowledge, administration, and memory.'
    ],
    keyIdeasZh: [
      '农业支持了更大规模的永久人口。',
      '城市、政府和社会等级制度出现。',
      '书写系统使知识、管理和记忆成为可能。'
    ],
    keywords: ['Agriculture', 'Cities', 'Cuneiform'],
    keywordsZh: ['农业', '城市', '楔形文字'],
    reflectionQuestion: 'What becomes possible when people stop wandering and begin living together permanently?',
    reflectionQuestionZh: '当人们停止流浪并开始永久共同生活时，什么成为可能？',
    historicalSnapshot: 'The earliest known written story—the Epic of Gilgamesh—emerged from Mesopotamia, telling of a king seeking immortality and discovering the limits of human ambition.',
    historicalSnapshotZh: '已知最早的书面故事——《吉尔伽美什史诗》——源自美索不达米亚，讲述了一位国王寻求永生并发现人类野心极限的故事。',
    connectionToModern: 'Every city today owes its basic infrastructure to ancient urban planning. Your legal system likely traces roots to Hammurabi\'s code. Even the way governments collect taxes echoes practices started millennia ago.',
    connectionToModernZh: '今天的每个城市都将其基础设施归功于古代城市规划。你的法律体系很可能追溯到汉谟拉比法典。甚至政府征税的方式也呼应了几千年前开始的做法。'
  },
  {
    id: 'axial-age',
    name: 'Axial Age',
    nameZh: '轴心时代',
    timeRange: 'c. 800 BCE – 200 BCE',
    summary: 'Across different regions, people began asking deeper questions about morality, meaning, and how society should be organized.',
    summaryZh: '在不同地区，人们开始对道德、意义以及社会应该如何组织提出更深层次的问题。',
    keyIdeas: [
      'Major philosophical and religious traditions emerged.',
      'Ethics became a central concern of public life.',
      'Ideas increasingly challenged inherited customs.'
    ],
    keyIdeasZh: [
      '主要的哲学和宗教传统出现。',
      '伦理成为公共生活的核心关注点。',
      '思想越来越挑战传统习俗。'
    ],
    keywords: ['Philosophy', 'Ethics', 'Dialectic'],
    keywordsZh: ['哲学', '伦理', '辩证法'],
    reflectionQuestion: 'What makes certain ideas endure across millennia while empires crumble?',
    reflectionQuestionZh: '是什么让某些思想在千年中经久不衰，而帝国却分崩离析？',
    historicalSnapshot: 'Siddhartha Gautama abandoned palace life to seek enlightenment, eventually teaching that suffering originates from desire—a insight that would shape the lives of millions across Asia for over two millennia.',
    historicalSnapshotZh: '释迦牟尼放弃宫殿生活寻求觉悟，最终教导痛苦源于欲望——这一洞见将在两千多年里影响亚洲数百万人的生活。',
    connectionToModern: 'Confucian values still influence social relationships in East Asia. Buddhist meditation apps now teach ancient techniques to millions worldwide. Socratic questioning remains the foundation of Western legal and academic reasoning.',
    connectionToModernZh: '儒家价值观仍然影响着东亚的社会关系。佛教冥想应用现在向全球数百万人传授古老技巧。苏格拉底式提问仍然是西方法律和学术推理的基础。'
  },
  {
    id: 'classical-empires',
    name: 'Classical Empires',
    nameZh: '古典帝国',
    timeRange: 'c. 200 BCE – 500 CE',
    summary: 'Large empires unified vast territories and demonstrated both the power and fragility of centralized rule.',
    summaryZh: '大型帝国统一了广阔的领土，展示了中央集权统治的力量和脆弱性。',
    keyIdeas: [
      'States expanded through military and administrative systems.',
      'Trade connected distant societies.',
      'Shared identities formed across large populations.'
    ],
    keyIdeasZh: [
      '国家通过军事和行政系统扩张。',
      '贸易连接了遥远的社会。',
      '共同身份在大量人口中形成。'
    ],
    keywords: ['Empire', 'Administration', 'Trade'],
    keywordsZh: ['帝国', '行政管理', '贸易'],
    reflectionQuestion: 'How can rulers govern people who speak different languages and follow different traditions?',
    reflectionQuestionZh: '统治者如何治理讲不同语言、遵循不同传统的人民？',
    historicalSnapshot: 'When Han Emperor Wu sent Zhang Qian westward in 138 BCE seeking allies against the Xiongnu, he unknowingly initiated the Silk Road—a network that would connect civilizations for over a millennium.',
    historicalSnapshotZh: '公元前138年，汉武帝派遣张骞西行寻找对抗匈奴的盟友时，他无意中开启了丝绸之路——一个将连接文明超过千年的网络。',
    connectionToModern: 'Modern diplomatic missions still follow practices pioneered by Roman law and Han bureaucracy. The concept of citizenship—granting rights to diverse peoples under one rule—remains the foundation of nation-states today.',
    connectionToModernZh: '现代外交使团仍然遵循罗马法和汉朝官僚机构开创的做法。公民身份的概念——在一个统治下赋予不同民族权利——仍然是今天民族国家的基础。'
  },
  {
    id: 'middle-ages',
    name: 'Middle Ages',
    nameZh: '中世纪',
    timeRange: 'c. 500 CE – 1500 CE',
    summary: 'After major empires declined, regional societies adapted, preserved knowledge, and built new institutions.',
    summaryZh: '在主要帝国衰落之后，区域社会适应、保存知识并建立新的制度。',
    keyIdeas: [
      'Political authority became more decentralized.',
      'Religious institutions gained social influence.',
      'Cultural exchange continued through trade networks.'
    ],
    keyIdeasZh: [
      '政治权力变得更加分散。',
      '宗教机构获得社会影响力。',
      '文化交流通过贸易网络继续。'
    ],
    keywords: ['Faith', 'Feudalism', 'Scholasticism'],
    keywordsZh: ['信仰', '封建主义', '经院哲学'],
    reflectionQuestion: 'What happens to knowledge when empires fall—who preserves it and why?',
    reflectionQuestionZh: '当帝国灭亡时，知识会发生什么——谁来保存它，为什么？',
    historicalSnapshot: 'In the 9th century, the House of Wisdom in Baghdad became the world\'s greatest center of learning, where scholars translated Greek philosophy, Persian astronomy, and Indian mathematics into Arabic—preserving knowledge that would later spark the European Renaissance.',
    historicalSnapshotZh: '9世纪，巴格达的智慧之家成为世界上最伟大的学习中心，学者们将希腊哲学、波斯天文学和印度数学翻译成阿拉伯语——保存了后来引发欧洲文艺复兴的知识。',
    connectionToModern: 'The post-classical era laid the groundwork for many modern institutions. Universities evolved from medieval Islamic madrasas and European cathedral schools. Banking systems developed from Islamic partnerships. The concept of international law has roots in medieval diplomatic practices.',
    connectionToModernZh: '后古典时代为许多现代机构奠定了基础。大学从中世纪伊斯兰经学院和欧洲大教堂学校演变而来。银行系统从伊斯兰伙伴关系发展而来。国际法的概念源于中世纪外交实践。'
  },
  {
    id: 'age-of-exploration',
    name: 'Age of Exploration',
    nameZh: '探索时代',
    timeRange: 'c. 1400 CE – 1700 CE',
    summary: 'Improved navigation connected continents, reshaping economies, cultures, and power on a global scale.',
    summaryZh: '改进的航海技术连接了各大洲，在全球范围内重塑了经济、文化和权力。',
    keyIdeas: [
      'Maritime exploration expanded dramatically.',
      'Global trade networks intensified.',
      'Colonization transformed societies worldwide.'
    ],
    keyIdeasZh: [
      '海上探险大幅扩展。',
      '全球贸易网络加强。',
      '殖民化改变了世界各地的社会。'
    ],
    keywords: ['Exploration', 'Navigation', 'Columbian Exchange'],
    keywordsZh: ['探险', '航海', '哥伦布交换'],
    reflectionQuestion: 'What unexpected consequences follow when two worlds that never knew each other suddenly collide?',
    reflectionQuestionZh: '当两个从未了解彼此的世界突然碰撞时，会产生什么意想不到的后果？',
    historicalSnapshot: 'When Columbus sailed west in 1492 seeking Asia, he stumbled upon the Caribbean—forever altering the fates of two hemispheres that had evolved separately for millennia.',
    historicalSnapshotZh: '1492年哥伦布向西航行寻找亚洲时，偶然发现了加勒比海——永远改变了两个半球的命运，它们已经独立发展了数千年。',
    connectionToModern: 'Globalization began with these voyages. The foods on your table—potatoes, tomatoes, chocolate—come from crops Native Americans developed. Migration patterns, trade routes, and even cultural tensions today trace back to this era.',
    connectionToModernZh: '全球化始于这些航行。你餐桌上的食物——土豆、西红柿、巧克力——来自美洲原住民开发的作物。今天的移民模式、贸易路线甚至文化紧张都可以追溯到这个时代。'
  },
  {
    id: 'enlightenment-revolutions',
    name: 'Enlightenment & Revolutions',
    nameZh: '启蒙与革命时代',
    timeRange: 'c. 1700 CE – 1800 CE',
    summary: 'People increasingly questioned traditional authority and argued that societies could be redesigned through reason and rights.',
    summaryZh: '人们越来越质疑传统权威，并认为社会可以通过理性和权利重新设计。',
    keyIdeas: [
      'New political philosophies emerged.',
      'Revolutions challenged existing power structures.',
      'Individual rights gained prominence.'
    ],
    keyIdeasZh: [
      '新的政治哲学出现。',
      '革命挑战了现有的权力结构。',
      '个人权利变得突出。'
    ],
    keywords: ['Reason', 'Rights', 'Revolution'],
    keywordsZh: ['理性', '权利', '革命'],
    reflectionQuestion: 'When is it justified to challenge established authority?',
    reflectionQuestionZh: '什么时候挑战既定权威是正当的？',
    historicalSnapshot: 'Voltaire spent years in the Bastille for criticizing the Church, yet his ideas eventually spread through pamphlets read in Parisian salons—proving that words could sometimes defeat swords.',
    historicalSnapshotZh: '伏尔泰因批评教会在巴士底狱度过多年，但他的思想最终通过巴黎沙龙中阅读的小册子传播开来——证明文字有时可以战胜刀剑。',
    connectionToModern: 'Your rights as a citizen—from free speech to the right to a fair trial—derive from Enlightenment arguments. Modern constitutions and human rights declarations trace their lineage to this era\'s revolutionary ideas.',
    connectionToModernZh: '你作为公民的权利——从言论自由到公平审判权——源于启蒙运动的论点。现代宪法和人权宣言的血统可以追溯到这个时代的革命思想。'
  },
  {
    id: 'industrial-revolution',
    name: 'Industrial Revolution',
    nameZh: '工业革命',
    timeRange: 'c. 1780 CE – 1914 CE',
    summary: 'Machines transformed production, work, and daily life faster than ever before.',
    summaryZh: '机器以前所未有的速度改变了生产、工作和日常生活。',
    keyIdeas: [
      'Mechanization increased productivity.',
      'Urbanization accelerated.',
      'Industrial economies reshaped social structures.'
    ],
    keyIdeasZh: [
      '机械化提高了生产力。',
      '城市化加速。',
      '工业经济重塑了社会结构。'
    ],
    keywords: ['Industry', 'Urbanization', 'Mechanization'],
    keywordsZh: ['工业', '城市化', '机械化'],
    reflectionQuestion: 'When machines do the work of hands, what happens to the hands themselves?',
    reflectionQuestionZh: '当机器代替手工作时，手本身会发生什么？',
    historicalSnapshot: 'In 1793, Eli Whitney\'s cotton gin could clean a year\'s worth of cotton in a single day—but it also intensified the demand for slave labor in the American South, showing how technology and human cost are never truly separate.',
    historicalSnapshotZh: '1793年，伊莱·惠特尼的轧棉机一天可以清理一年的棉花——但它也加剧了美国南方对奴隶劳工的需求，表明技术和人力成本永远无法真正分离。',
    connectionToModern: 'The industrial revolution created our urban world. Factory schedules, labor unions, pollution regulations, and the gap between rich and poor nations all trace back to decisions made during this era.',
    connectionToModernZh: '工业革命创造了我们的城市世界。工厂时间表、工会、污染法规以及贫富国家之间的差距都可以追溯到这个时代的决策。'
  },
  {
    id: 'world-wars',
    name: 'World Wars',
    nameZh: '世界大战',
    timeRange: '1914 CE – 1945 CE',
    summary: 'Industrialized warfare revealed humanity\'s capacity for both destruction and cooperation.',
    summaryZh: '工业化战争揭示了人类既具有破坏性又具有合作性的能力。',
    keyIdeas: [
      'Global conflicts reached unprecedented scale.',
      'Civilian populations became deeply affected.',
      'International institutions gained new importance.'
    ],
    keyIdeasZh: [
      '全球冲突达到前所未有的规模。',
      '平民人口深受影响。',
      '国际机构获得新的重要性。'
    ],
    keywords: ['Conflict', 'Nationalism', 'Reconstruction'],
    keywordsZh: ['冲突', '民族主义', '重建'],
    reflectionQuestion: 'Why can technological progress coexist with immense human suffering?',
    reflectionQuestionZh: '为什么技术进步可以与巨大的人类苦难共存？',
    historicalSnapshot: 'On December 7, 1941, Japan attacked Pearl Harbor, bringing the United States into World War II. Just four years later, the atomic bombings of Hiroshima and Nagasaki demonstrated the terrifying power of modern warfare—weapons capable of destroying entire cities in an instant.',
    historicalSnapshotZh: '1941年12月7日，日本袭击珍珠港，使美国卷入第二次世界大战。仅仅四年后，广岛和长崎的原子弹爆炸展示了现代战争的可怕力量——能够瞬间摧毁整个城市的武器。',
    connectionToModern: 'The World Wars reshaped global politics. The United Nations was founded to prevent future conflicts. Decolonization movements gained momentum as empires collapsed. Modern concepts of human rights emerged from the horrors of war, particularly the Universal Declaration of Human Rights adopted in 1948.',
    connectionToModernZh: '世界大战重塑了全球政治。联合国成立是为了防止未来的冲突。随着帝国崩溃，非殖民化运动获得动力。现代人权概念从战争的恐怖中出现，特别是1948年通过的《世界人权宣言》。'
  },
  {
    id: 'cold-war',
    name: 'Cold War',
    nameZh: '冷战',
    timeRange: '1945 CE – 1991 CE',
    summary: 'Rival ideologies competed for global influence without direct large-scale war between superpowers.',
    summaryZh: '对立意识形态争夺全球影响力，超级大国之间没有直接的大规模战争。',
    keyIdeas: [
      'Bipolar power structures dominated geopolitics.',
      'Proxy conflicts spread worldwide.',
      'Scientific competition accelerated innovation.'
    ],
    keyIdeasZh: [
      '两极权力结构主导地缘政治。',
      '代理冲突蔓延全球。',
      '科学竞争加速了创新。'
    ],
    keywords: ['Ideology', 'Competition', 'Deterrence'],
    keywordsZh: ['意识形态', '竞争', '威慑'],
    reflectionQuestion: 'How do superpowers avoid destroying each other without ever firing a direct shot?',
    reflectionQuestionZh: '超级大国如何在不开火的情况下避免相互毁灭？',
    historicalSnapshot: 'When Sputnik launched in 1957, the Space Race wasn\'t really about satellites—it was about proving whose system could deliver better dreams to its citizens.',
    historicalSnapshotZh: '1957年斯普特尼克号发射时，太空竞赛实际上不是关于卫星——而是关于证明谁的系统能够为其公民提供更好的梦想。',
    connectionToModern: 'The Cold War\'s legacy shapes today\'s geopolitics. The internet emerged from DARPA\'s military research. Nuclear deterrence still prevents direct warfare between great powers. Many developing nations still grapple with political and economic structures shaped by Cold War-era interventions.',
    connectionToModernZh: '冷战的遗产塑造了今天的地缘政治。互联网源自DARPA的军事研究。核威慑仍然阻止大国之间的直接战争。许多发展中国家仍然努力应对冷战时期干预形成的政治和经济结构。'
  },
  {
    id: 'globalization',
    name: 'Globalization',
    nameZh: '全球化',
    timeRange: 'c. 1990 CE – Present',
    summary: 'The end of the Cold War in 1991 marked the beginning of the Globalization era, as the world became increasingly interconnected through trade, communication, and shared challenges.',
    summaryZh: '1991年冷战结束标志着全球化时代的开始，世界通过贸易、通信和共同挑战变得越来越相互关联。',
    keyIdeas: [
      'Information moved rapidly across borders.',
      'Economies became deeply interdependent.',
      'Local events gained global consequences.'
    ],
    keyIdeasZh: [
      '信息快速跨越国界。',
      '经济变得深度相互依存。',
      '地方事件产生全球影响。'
    ],
    keywords: ['Connectivity', 'Interdependence', 'Networks'],
    keywordsZh: ['连通性', '相互依存', '网络'],
    reflectionQuestion: 'What do we gain—and what do we lose—when the world becomes more connected?',
    reflectionQuestionZh: '当世界变得更加互联时，我们获得什么——又失去什么？',
    historicalSnapshot: 'The fall of the Berlin Wall in 1989 took just nine days—yet it ended an era that had lasted forty years. Some transformations happen faster than anyone imagines possible.',
    historicalSnapshotZh: '1989年柏林墙倒塌只用了九天——却结束了一个持续四十年的时代。有些变革比任何人想象的都要快。',
    connectionToModern: 'Your morning coffee connects you to global supply chains. Social media spreads information instantly across continents. Climate change, pandemics, and economic crises cross borders automatically—this is the world the Cold War\'s end made possible.',
    connectionToModernZh: '你早上的咖啡将你与全球供应链连接起来。社交媒体瞬间跨洲传播信息。气候变化、流行病和经济危机自动跨越国界——这就是冷战结束后成为可能的世界。'
  },
  {
    id: 'ai-era',
    name: 'AI Era',
    nameZh: '人工智能时代',
    timeRange: 'c. 2020 CE – Present and Beyond',
    summary: 'Humanity is beginning to share cognitive tasks with machines, raising new questions about work, intelligence, and responsibility.',
    summaryZh: '人类开始与机器共享认知任务，引发了关于工作、智能和责任的新问题。',
    keyIdeas: [
      'Artificial intelligence entered everyday life.',
      'Human decision-making became increasingly augmented by algorithms.',
      'Ethical and social debates intensified.'
    ],
    keyIdeasZh: [
      '人工智能进入日常生活。',
      '人类决策越来越多地由算法增强。',
      '伦理和社会辩论加剧。'
    ],
    keywords: ['Intelligence', 'Automation', 'Machine Learning'],
    keywordsZh: ['智能', '自动化', '机器学习'],
    reflectionQuestion: 'If a machine can learn from its mistakes, what distinguishes human learning from artificial learning?',
    reflectionQuestionZh: '如果机器可以从错误中学习，那么人类学习与人工智能学习有什么区别？',
    historicalSnapshot: 'In 2016, AlphaGo defeated the world champion at Go—a game once considered too intuitive for computers. Yet the machine\'s victory came from moves no human had ever conceived, suggesting AI might not merely imitate human intelligence but surpass it.',
    historicalSnapshotZh: '2016年，AlphaGo在围棋比赛中击败世界冠军——围棋曾被认为对计算机来说太直观。然而，机器的胜利来自人类从未设想过的走法，表明人工智能可能不仅仅模仿人类智能，而是超越它。',
    connectionToModern: 'AI assists in medical diagnoses, drives autonomous vehicles, and generates creative content. Questions about machine consciousness, job displacement, and algorithmic bias will define the coming decades.',
    connectionToModernZh: '人工智能协助医疗诊断、驾驶自动驾驶汽车并生成创意内容。关于机器意识、工作替代和算法偏见的问题将定义未来几十年。'
  }
];

export const getEraById = (id: string): Era | undefined => {
  return eras.find(era => era.id === id);
};

export const getEraIndex = (id: string): number => {
  return eras.findIndex(era => era.id === id);
};

export const getNextEra = (currentId: string): Era | undefined => {
  const index = getEraIndex(currentId);
  if (index < 0 || index >= eras.length - 1) return undefined;
  return eras[index + 1];
};

export const getPreviousEra = (currentId: string): Era | undefined => {
  const index = getEraIndex(currentId);
  if (index <= 0) return undefined;
  return eras[index - 1];
};
