import { Framework, FrameworkCategory } from './types';

export const frameworks: Framework[] = [
  {
    category: 'technology',
    title: 'Technology',
    titleZh: '技术',
    developments: ['Stone', 'Agriculture', 'Iron', 'Printing', 'Steam', 'Electricity', 'Internet', 'AI'],
    developmentsZh: ['石器', '农业', '铁器', '印刷', '蒸汽', '电力', '互联网', '人工智能'],
    explanation: 'Technology has been the most consistent driver of historical change. From the first stone tools to artificial intelligence, each technological breakthrough has reshaped how humans live, work, and relate to one another. Technological change often happens incrementally, but occasionally a breakthrough transforms civilization fundamentally.',
    explanationZh: '技术一直是历史变革最稳定的驱动力。从第一件石器工具到人工智能，每一次技术突破都重塑了人类的生活、工作和相互关系方式。技术变革通常是渐进的，但偶尔的突破会从根本上改变文明。'
  },
  {
    category: 'power',
    title: 'Power',
    titleZh: '权力',
    developments: ['Tribes', 'City States', 'Empires', 'Nation States', 'International Systems'],
    developmentsZh: ['部落', '城邦', '帝国', '民族国家', '国际体系'],
    explanation: 'The organization of power has evolved dramatically throughout history. From small tribal groups to vast empires to modern nation-states, how societies organize authority determines who makes decisions, how resources are distributed, and what values are prioritized.',
    explanationZh: '权力的组织形式在历史上发生了巨大演变。从小部落群体到庞大帝国再到现代民族国家，社会如何组织权威决定了谁做决策、资源如何分配以及哪些价值观被优先考虑。'
  },
  {
    category: 'economy',
    title: 'Economy',
    titleZh: '经济',
    developments: ['Hunting', 'Agriculture', 'Commerce', 'Industry', 'Finance', 'Digital Economy'],
    developmentsZh: ['狩猎', '农业', '商业', '工业', '金融', '数字经济'],
    explanation: 'Economic systems have evolved from subsistence hunting and gathering to complex global networks. Each economic transformation has changed how goods are produced, distributed, and consumed, creating new opportunities and challenges.',
    explanationZh: '经济体系从自给自足的狩猎采集演变为复杂的全球网络。每次经济转型都改变了商品的生产、分配和消费方式，创造了新的机遇和挑战。'
  },
  {
    category: 'ideas',
    title: 'Ideas',
    titleZh: '思想',
    developments: ['Myth', 'Philosophy', 'Religion', 'Enlightenment', 'Nationalism', 'Modern Ideologies'],
    developmentsZh: ['神话', '哲学', '宗教', '启蒙运动', '民族主义', '现代意识形态'],
    explanation: 'Ideas shape how societies understand themselves and their place in the world. From ancient myths to modern ideologies, the beliefs people hold drive political movements, social change, and cultural development.',
    explanationZh: '思想塑造了社会如何理解自身及其在世界中的位置。从古代神话到现代意识形态，人们持有的信仰推动着政治运动、社会变革和文化发展。'
  }
];

export const frameworkConcepts = [
  {
    id: 'tech-stone',
    category: 'technology',
    concept: 'Stone Tools',
    conceptZh: '石器工具',
    explanation: 'The first tools made from stone marked humanity\'s ability to shape the natural world to meet its needs.',
    explanationZh: '最早的石器工具标志着人类塑造自然世界以满足自身需求的能力。',
    historicalExample: 'Early humans used flint tools for hunting, cutting, and preparing food, enabling more efficient resource extraction.',
    historicalExampleZh: '早期人类使用燧石工具进行狩猎、切割和食物准备，实现更高效的资源获取。',
    insight: 'Technology begins with understanding and manipulating natural materials.',
    insightZh: '技术始于对天然材料的理解和操控。'
  },
  {
    id: 'tech-agriculture',
    category: 'technology',
    concept: 'Agricultural Revolution',
    conceptZh: '农业革命',
    explanation: 'Farming replaced hunting and gathering, allowing permanent settlements and larger populations.',
    explanationZh: '农业取代了狩猎采集，使永久定居和更大规模的人口成为可能。',
    historicalExample: 'The transition from nomadic life to settled agriculture in the Fertile Crescent around 10,000 BCE.',
    historicalExampleZh: '大约公元前10000年，新月沃地从游牧生活向定居农业的转变。',
    insight: 'Surplus food creates the foundation for civilization.',
    insightZh: '剩余粮食为文明奠定了基础。'
  },
  {
    id: 'tech-iron',
    category: 'technology',
    concept: 'Iron Working',
    conceptZh: '铁器制造',
    explanation: 'The ability to smelt and forge iron created stronger tools and weapons, transforming warfare and agriculture.',
    explanationZh: '冶炼和锻造铁的能力创造了更坚固的工具和武器，改变了战争和农业。',
    historicalExample: 'The Iron Age began around 1200 BCE, spreading from the Middle East across Europe and Asia.',
    historicalExampleZh: '铁器时代大约始于公元前1200年，从中东传播到欧洲和亚洲。',
    insight: 'Material technology determines what societies can build and conquer.',
    insightZh: '材料技术决定了社会能够建造什么和征服什么。'
  },
  {
    id: 'tech-printing',
    category: 'technology',
    concept: 'Printing Press',
    conceptZh: '印刷机',
    explanation: 'Gutenberg\'s printing press made books affordable, democratizing knowledge and spreading ideas.',
    explanationZh: '古腾堡印刷机使书籍变得普及，实现了知识的民主化并传播了思想。',
    historicalExample: 'The printing press (1440) enabled the Reformation and the spread of scientific ideas across Europe.',
    historicalExampleZh: '印刷机（1440年）促成了宗教改革和科学思想在欧洲的传播。',
    insight: 'Access to information drives social and intellectual change.',
    insightZh: '信息获取推动社会和知识变革。'
  },
  {
    id: 'tech-steam',
    category: 'technology',
    concept: 'Steam Engine',
    conceptZh: '蒸汽机',
    explanation: 'James Watt\'s steam engine replaced human and animal power, kickstarting the Industrial Revolution.',
    explanationZh: '詹姆斯·瓦特的蒸汽机取代了人力和畜力，开启了工业革命。',
    historicalExample: 'The steam engine (1775) powered factories, trains, and steamships, transforming production and transportation.',
    historicalExampleZh: '蒸汽机（1775年）为工厂、火车和轮船提供动力，改变了生产和运输方式。',
    insight: 'Energy technology unlocks new scales of human activity.',
    insightZh: '能源技术释放了人类活动的新规模。'
  },
  {
    id: 'tech-electricity',
    category: 'technology',
    concept: 'Electricity',
    conceptZh: '电力',
    explanation: 'Harnessing electricity revolutionized communication, lighting, and manufacturing.',
    explanationZh: '电力的利用彻底改变了通信、照明和制造业。',
    historicalExample: 'Edison\'s incandescent bulb (1879) and Tesla\'s AC system transformed cities and industries.',
    historicalExampleZh: '爱迪生的白炽灯泡（1879年）和特斯拉的交流电系统改变了城市和工业。',
    insight: 'Invisible forces can reshape the visible world.',
    insightZh: '无形的力量可以重塑有形的世界。'
  },
  {
    id: 'tech-internet',
    category: 'technology',
    concept: 'Internet',
    conceptZh: '互联网',
    explanation: 'The internet connected the world, enabling instant communication and information sharing.',
    explanationZh: '互联网连接了世界，实现了即时通信和信息共享。',
    historicalExample: 'Originally developed as ARPANET in the 1960s, it became publicly accessible in the 1990s.',
    historicalExampleZh: '最初作为ARPANET于20世纪60年代开发，90年代开始向公众开放。',
    insight: 'Connectivity changes how societies organize and interact.',
    insightZh: '连接性改变了社会的组织和互动方式。'
  },
  {
    id: 'tech-ai',
    category: 'technology',
    concept: 'Artificial Intelligence',
    conceptZh: '人工智能',
    explanation: 'AI automates cognitive tasks, raising questions about work, intelligence, and human identity.',
    explanationZh: '人工智能自动化认知任务，引发了关于工作、智能和人类身份的问题。',
    historicalExample: 'AlphaGo\'s victory over Lee Sedol (2016) demonstrated AI\'s ability to surpass human expertise.',
    historicalExampleZh: 'AlphaGo战胜李世石（2016年）展示了人工智能超越人类专业知识的能力。',
    insight: 'Machines are now learning from humans, creating a new kind of intelligence.',
    insightZh: '机器现在正在向人类学习，创造一种新型智能。'
  },
  {
    id: 'power-tribes',
    category: 'power',
    concept: 'Tribal Organization',
    conceptZh: '部落组织',
    explanation: 'Small kinship-based groups where power is decentralized and based on community consensus.',
    explanationZh: '基于亲属关系的小群体，权力分散且基于社区共识。',
    historicalExample: 'Hunter-gatherer societies where decisions are made collectively by elders and community members.',
    historicalExampleZh: '狩猎采集社会，由长老和社区成员共同做出决策。',
    insight: 'Power begins as a shared responsibility within small groups.',
    insightZh: '权力最初是小群体内的共同责任。'
  },
  {
    id: 'power-citystates',
    category: 'power',
    concept: 'City-States',
    conceptZh: '城邦',
    explanation: 'Independent urban centers with their own governments, laws, and territories.',
    explanationZh: '拥有自己政府、法律和领土的独立城市中心。',
    historicalExample: 'Ancient Greek city-states like Athens and Sparta, each with distinct political systems.',
    historicalExampleZh: '古希腊城邦如雅典和斯巴达，各自拥有独特的政治制度。',
    insight: 'Urbanization creates the need for formal governance structures.',
    insightZh: '城市化创造了对正式治理结构的需求。'
  },
  {
    id: 'power-empires',
    category: 'power',
    concept: 'Empires',
    conceptZh: '帝国',
    explanation: 'Large multi-ethnic states that extend control over vast territories through military and administrative power.',
    explanationZh: '通过军事和行政权力控制广阔领土的大型多民族国家。',
    historicalExample: 'The Roman Empire, which governed diverse peoples across three continents.',
    historicalExampleZh: '罗马帝国，统治着三大洲的不同民族。',
    insight: 'Empires demonstrate both the power and fragility of centralized rule.',
    insightZh: '帝国展示了中央集权统治的力量和脆弱性。'
  },
  {
    id: 'power-nationstates',
    category: 'power',
    concept: 'Nation-States',
    conceptZh: '民族国家',
    explanation: 'Sovereign states defined by shared language, culture, and territory, with centralized governments.',
    explanationZh: '以共同语言、文化和领土为特征的主权国家，拥有中央政府。',
    historicalExample: 'The modern nation-state system emerged after the Peace of Westphalia (1648).',
    historicalExampleZh: '现代民族国家体系在威斯特伐利亚和约（1648年）后出现。',
    insight: 'National identity becomes a powerful organizing principle.',
    insightZh: '民族认同成为强大的组织原则。'
  },
  {
    id: 'power-international',
    category: 'power',
    concept: 'International Systems',
    conceptZh: '国际体系',
    explanation: 'Global networks of states, international organizations, and non-state actors that shape global governance.',
    explanationZh: '由国家、国际组织和非国家行为体组成的全球网络，塑造全球治理。',
    historicalExample: 'The United Nations and international law framework established after World War II.',
    historicalExampleZh: '二战后建立的联合国和国际法框架。',
    insight: 'Power now operates at multiple levels—local, national, and global.',
    insightZh: '权力现在在多个层面运作——地方、国家和全球。'
  },
  {
    id: 'econ-hunting',
    category: 'economy',
    concept: 'Hunter-Gatherer Economy',
    conceptZh: '狩猎采集经济',
    explanation: 'Subsistence economy based on foraging wild plants and hunting animals.',
    explanationZh: '基于采集野生植物和狩猎动物的自给自足经济。',
    historicalExample: 'Paleolithic societies that moved with seasons to find food.',
    historicalExampleZh: '旧石器时代社会，随季节迁移寻找食物。',
    insight: 'Economies begin with meeting basic survival needs.',
    insightZh: '经济始于满足基本生存需求。'
  },
  {
    id: 'econ-agriculture',
    category: 'economy',
    concept: 'Agricultural Economy',
    conceptZh: '农业经济',
    explanation: 'Economy based on farming and animal husbandry, creating surplus and enabling trade.',
    explanationZh: '基于农业和畜牧业的经济，创造剩余并促进贸易。',
    historicalExample: 'Feudal Europe where land ownership determined wealth and social status.',
    historicalExampleZh: '封建欧洲，土地所有权决定财富和社会地位。',
    insight: 'Surplus creates the possibility for specialization and trade.',
    insightZh: '剩余创造了专业化和贸易的可能性。'
  },
  {
    id: 'econ-commerce',
    category: 'economy',
    concept: 'Commercial Economy',
    conceptZh: '商业经济',
    explanation: 'Economy driven by trade, markets, and the exchange of goods and services.',
    explanationZh: '由贸易、市场和商品服务交换驱动的经济。',
    historicalExample: 'Medieval trade routes like the Silk Road connecting Europe, Asia, and Africa.',
    historicalExampleZh: '中世纪贸易路线如连接欧洲、亚洲和非洲的丝绸之路。',
    insight: 'Trade connects societies and spreads ideas as well as goods.',
    insightZh: '贸易连接社会，传播思想和商品。'
  },
  {
    id: 'econ-industry',
    category: 'economy',
    concept: 'Industrial Economy',
    conceptZh: '工业经济',
    explanation: 'Economy based on manufacturing, mass production, and factory systems.',
    explanationZh: '基于制造业、大规模生产和工厂系统的经济。',
    historicalExample: '19th-century Britain with its textile mills and coal mines.',
    historicalExampleZh: '19世纪的英国，拥有纺织厂和煤矿。',
    insight: 'Machines transform how goods are produced and distributed.',
    insightZh: '机器改变了商品的生产和分配方式。'
  },
  {
    id: 'econ-finance',
    category: 'economy',
    concept: 'Financial Economy',
    conceptZh: '金融经济',
    explanation: 'Economy where financial markets, credit, and investment drive economic activity.',
    explanationZh: '金融市场、信贷和投资驱动经济活动的经济。',
    historicalExample: 'The rise of stock markets and banking systems in the 20th century.',
    historicalExampleZh: '20世纪股票市场和银行系统的兴起。',
    insight: 'Money itself becomes a tool for creating wealth.',
    insightZh: '货币本身成为创造财富的工具。'
  },
  {
    id: 'econ-digital',
    category: 'economy',
    concept: 'Digital Economy',
    conceptZh: '数字经济',
    explanation: 'Economy based on digital technologies, data, and online platforms.',
    explanationZh: '基于数字技术、数据和在线平台的经济。',
    historicalExample: 'Modern gig economy and e-commerce platforms like Amazon and Uber.',
    historicalExampleZh: '现代零工经济和电子商务平台如亚马逊和优步。',
    insight: 'Digital networks create new forms of value and work.',
    insightZh: '数字网络创造了新的价值形式和工作方式。'
  },
  {
    id: 'ideas-myth',
    category: 'ideas',
    concept: 'Myth and Storytelling',
    conceptZh: '神话与故事',
    explanation: 'Oral traditions and myths that explain origins, natural phenomena, and social norms.',
    explanationZh: '解释起源、自然现象和社会规范的口头传统和神话。',
    historicalExample: 'Creation myths from cultures around the world that give meaning to existence.',
    historicalExampleZh: '世界各地文化中的创世神话，赋予存在以意义。',
    insight: 'Stories shape how societies understand their place in the world.',
    insightZh: '故事塑造了社会如何理解自己在世界中的位置。'
  },
  {
    id: 'ideas-philosophy',
    category: 'ideas',
    concept: 'Philosophy',
    conceptZh: '哲学',
    explanation: 'Rational inquiry into fundamental questions about existence, knowledge, and ethics.',
    explanationZh: '对存在、知识和伦理基本问题的理性探究。',
    historicalExample: 'Greek philosophy from Socrates to Aristotle that laid the groundwork for Western thought.',
    historicalExampleZh: '从苏格拉底到亚里士多德的希腊哲学，奠定了西方思想的基础。',
    insight: 'Critical thinking emerges as a tool for understanding reality.',
    insightZh: '批判性思维成为理解现实的工具。'
  },
  {
    id: 'ideas-religion',
    category: 'ideas',
    concept: 'Religion',
    conceptZh: '宗教',
    explanation: 'Systems of belief that provide meaning, moral guidance, and community identity.',
    explanationZh: '提供意义、道德指导和社区认同的信仰体系。',
    historicalExample: 'The spread of Buddhism, Christianity, and Islam across continents.',
    historicalExampleZh: '佛教、基督教和伊斯兰教在各大洲的传播。',
    insight: 'Religious ideas can unify or divide societies.',
    insightZh: '宗教思想可以统一或分裂社会。'
  },
  {
    id: 'ideas-enlightenment',
    category: 'ideas',
    concept: 'Enlightenment',
    conceptZh: '启蒙运动',
    explanation: 'Intellectual movement emphasizing reason, science, and individual rights.',
    explanationZh: '强调理性、科学和个人权利的思想运动。',
    historicalExample: '18th-century thinkers like Locke, Voltaire, and Rousseau challenging traditional authority.',
    historicalExampleZh: '18世纪思想家如洛克、伏尔泰和卢梭挑战传统权威。',
    insight: 'Reason becomes a tool for transforming society.',
    insightZh: '理性成为改造社会的工具。'
  },
  {
    id: 'ideas-nationalism',
    category: 'ideas',
    concept: 'Nationalism',
    conceptZh: '民族主义',
    explanation: 'Ideology that emphasizes national unity and identity as the basis of political organization.',
    explanationZh: '强调民族统一和认同作为政治组织基础的意识形态。',
    historicalExample: 'The unification of Germany and Italy in the 19th century.',
    historicalExampleZh: '19世纪德国和意大利的统一。',
    insight: 'National identity can be a powerful force for both unity and conflict.',
    insightZh: '民族认同可以成为统一和冲突的强大力量。'
  },
  {
    id: 'ideas-modern',
    category: 'ideas',
    concept: 'Modern Ideologies',
    conceptZh: '现代意识形态',
    explanation: '20th-century political and social ideologies like liberalism, socialism, and fascism.',
    explanationZh: '20世纪的政治和社会意识形态，如自由主义、社会主义和法西斯主义。',
    historicalExample: 'The clash between capitalism and communism during the Cold War.',
    historicalExampleZh: '冷战期间资本主义和共产主义的冲突。',
    insight: 'Ideologies can reshape entire societies and global politics.',
    insightZh: '意识形态可以重塑整个社会和全球政治。'
  }
];

export const getFrameworkByCategory = (category: FrameworkCategory): Framework | undefined => {
  return frameworks.find(f => f.category === category);
};

export const getConceptsByCategory = (category: FrameworkCategory) => {
  return frameworkConcepts.filter(c => c.category === category);
};