export interface HistoricalEvent {
  id: string;
  title: string;
  titleZh: string;
  year: number;
  description: string;
  descriptionZh: string;
}

export interface SequenceChallenge {
  id: string;
  title: string;
  titleZh: string;
  events: HistoricalEvent[];
}

export const sequenceChallenges: SequenceChallenge[] = [
  {
    id: 'challenge-1',
    title: 'Early Civilizations',
    titleZh: '早期文明',
    events: [
      { id: 'e1', title: 'First Writing System', titleZh: '第一个书写系统', year: -3200, description: 'Sumerian cuneiform in Mesopotamia', descriptionZh: '美索不达米亚的苏美尔楔形文字' },
      { id: 'e2', title: 'Building of the Pyramids', titleZh: '金字塔建造', year: -2600, description: 'Great Pyramid of Giza constructed', descriptionZh: '吉萨大金字塔建造' },
      { id: 'e3', title: 'First City-States', titleZh: '第一批城邦', year: -3500, description: 'Uruk and other Mesopotamian cities', descriptionZh: '乌鲁克和其他美索不达米亚城市' },
      { id: 'e4', title: 'Invention of Wheel', titleZh: '轮子的发明', year: -3500, description: 'Wheels used for transportation', descriptionZh: '轮子用于运输' },
    ],
  },
  {
    id: 'challenge-2',
    title: 'Axial Age Thinkers',
    titleZh: '轴心时代思想家',
    events: [
      { id: 'e5', title: 'Confucius', titleZh: '孔子', year: -551, description: 'Chinese philosopher', descriptionZh: '中国哲学家' },
      { id: 'e6', title: 'Socrates', titleZh: '苏格拉底', year: -469, description: 'Greek philosopher', descriptionZh: '希腊哲学家' },
      { id: 'e7', title: 'Buddha', titleZh: '佛陀', year: -563, description: 'Founder of Buddhism', descriptionZh: '佛教创始人' },
      { id: 'e8', title: 'Zoroaster', titleZh: '琐罗亚斯德', year: -628, description: 'Persian prophet', descriptionZh: '波斯先知' },
    ],
  },
  {
    id: 'challenge-3',
    title: 'Classical Empires',
    titleZh: '古典帝国',
    events: [
      { id: 'e9', title: 'Roman Empire', titleZh: '罗马帝国', year: 27, description: 'Augustus becomes Emperor', descriptionZh: '奥古斯都成为皇帝' },
      { id: 'e10', title: 'Han Dynasty', titleZh: '汉朝', year: -206, description: 'Founding of Han China', descriptionZh: '汉朝建立' },
      { id: 'e11', title: 'Maurya Empire', titleZh: '孔雀帝国', year: -322, description: 'Chandragupta Maurya unifies India', descriptionZh: '旃陀罗笈多统一印度' },
      { id: 'e12', title: 'Persian Achaemenid', titleZh: '波斯阿契美尼德王朝', year: -550, description: 'Cyrus the Great founds Persian Empire', descriptionZh: '居鲁士大帝建立波斯帝国' },
    ],
  },
  {
    id: 'challenge-4',
    title: 'Modern Revolutions',
    titleZh: '现代革命',
    events: [
      { id: 'e13', title: 'American Revolution', titleZh: '美国独立战争', year: 1776, description: 'Declaration of Independence', descriptionZh: '独立宣言' },
      { id: 'e14', title: 'French Revolution', titleZh: '法国大革命', year: 1789, description: 'Storming of the Bastille', descriptionZh: '攻占巴士底狱' },
      { id: 'e15', title: 'Industrial Revolution', titleZh: '工业革命', year: 1760, description: 'Start in Britain', descriptionZh: '始于英国' },
      { id: 'e16', title: 'Russian Revolution', titleZh: '俄国革命', year: 1917, description: 'Bolshevik Revolution', descriptionZh: '布尔什维克革命' },
    ],
  },
  {
    id: 'challenge-5',
    title: 'World Wars',
    titleZh: '世界大战',
    events: [
      { id: 'e17', title: 'World War I', titleZh: '第一次世界大战', year: 1914, description: 'Start of WWI', descriptionZh: '一战开始' },
      { id: 'e18', title: 'World War II', titleZh: '第二次世界大战', year: 1939, description: 'Start of WWII', descriptionZh: '二战开始' },
      { id: 'e19', title: 'Treaty of Versailles', titleZh: '凡尔赛条约', year: 1919, description: 'End of WWI', descriptionZh: '一战结束' },
      { id: 'e20', title: 'Atomic Bomb', titleZh: '原子弹', year: 1945, description: 'Bombing of Hiroshima', descriptionZh: '广岛原子弹爆炸' },
    ],
  },
];

export function getRandomChallenge(isChinese?: boolean): SequenceChallenge {
  const randomIndex = Math.floor(Math.random() * sequenceChallenges.length);
  const challenge = sequenceChallenges[randomIndex];
  
  if (isChinese) {
    return {
      ...challenge,
      title: challenge.titleZh,
      events: challenge.events.map(event => ({
        ...event,
        title: event.titleZh,
        description: event.descriptionZh,
      })),
    };
  }
  
  return challenge;
}