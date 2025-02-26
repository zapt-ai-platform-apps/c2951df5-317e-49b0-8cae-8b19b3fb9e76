import { NewsItem } from "./newsItem.model";

export const sampleNewsItems: NewsItem[] = [
  {
    id: '1',
    title: 'SpaceX Successfully Launches New Satellite Constellation',
    content: 'SpaceX has successfully launched its latest batch of Starlink satellites, expanding its global internet coverage. The Falcon 9 rocket lifted off from Kennedy Space Center carrying 60 satellites to join the growing constellation in orbit.',
    imageUrl: 'https://picsum.photos/seed/space1/800/600',
    source: 'Space News',
    publishedAt: new Date('2023-11-10'),
    category: 'Technology',
    url: 'https://example.com/spacex-launch'
  },
  {
    id: '2',
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    content: 'Researchers have found that following a Mediterranean diet can significantly reduce the risk of heart disease and stroke. The study followed participants for over 10 years and found a 25% lower risk among those following the diet rich in olive oil, nuts, and fish.',
    imageUrl: 'https://picsum.photos/seed/health1/800/600',
    source: 'Health Today',
    publishedAt: new Date('2023-11-09'),
    category: 'Health',
    url: 'https://example.com/diet-study'
  },
  {
    id: '3',
    title: 'Global Climate Summit Reaches New Agreement',
    content: 'World leaders have agreed to more ambitious climate targets at the latest global summit. The agreement includes pledges to reduce carbon emissions by 50% by 2030 and reach net-zero by 2050, with developed nations providing financial support to developing countries.',
    imageUrl: 'https://picsum.photos/seed/climate1/800/600',
    source: 'Environmental Report',
    publishedAt: new Date('2023-11-08'),
    category: 'Environment',
    url: 'https://example.com/climate-summit'
  },
  {
    id: '4',
    title: 'Tech Giant Announces Revolutionary AI Assistant',
    content: 'A leading tech company has unveiled a new AI assistant capable of understanding and responding to complex requests with human-like accuracy. The technology represents a significant leap forward in natural language processing capabilities.',
    imageUrl: 'https://picsum.photos/seed/tech1/800/600',
    source: 'Tech Insider',
    publishedAt: new Date('2023-11-07'),
    category: 'Technology',
    url: 'https://example.com/ai-assistant'
  },
  {
    id: '5',
    title: 'Major Sports Upset as Underdogs Win Championship',
    content: 'In a stunning turn of events, the underdog team has defeated the reigning champions to claim this year\'s title, ending a 10-year dynasty. The victory came after a nail-biting final match that went into overtime.',
    imageUrl: 'https://picsum.photos/seed/sports1/800/600',
    source: 'Sports Center',
    publishedAt: new Date('2023-11-06'),
    category: 'Sports',
    url: 'https://example.com/sports-upset'
  },
  {
    id: '6',
    title: 'Renowned Artist Unveils New Exhibition',
    content: 'A celebrated contemporary artist has opened a new exhibition featuring works that explore themes of identity and technology in the modern world. The gallery expects record attendance for this highly anticipated showcase.',
    imageUrl: 'https://picsum.photos/seed/art1/800/600',
    source: 'Arts Weekly',
    publishedAt: new Date('2023-11-05'),
    category: 'Arts',
    url: 'https://example.com/art-exhibition'
  },
  {
    id: '7',
    title: 'Economists Predict Strong Growth in Coming Quarter',
    content: 'Leading economists are forecasting robust economic growth in the next quarter, citing increased consumer spending and business investments. The positive outlook comes after months of uncertainty in global markets.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
    source: 'Financial Times',
    publishedAt: new Date('2023-11-04'),
    category: 'Business',
    url: 'https://example.com/economic-forecast'
  },
  {
    id: '8',
    title: 'New Archaeological Discovery Rewrites Ancient History',
    content: 'Archaeologists have uncovered artifacts that suggest advanced civilizations existed thousands of years earlier than previously thought. The findings challenge existing theories about human technological development.',
    imageUrl: 'https://picsum.photos/seed/history1/800/600',
    source: 'Historical Studies',
    publishedAt: new Date('2023-11-03'),
    category: 'Science',
    url: 'https://example.com/archaeological-discovery'
  }
];