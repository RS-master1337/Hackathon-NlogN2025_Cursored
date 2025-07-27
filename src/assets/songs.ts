// Song data for karaoke
// Each song has a title, artist, lyrics (with timing), and notes (MIDI or frequency)

export interface KaraokeNote {
  time: number; // seconds from start
  duration: number; // seconds
  frequency: number; // Hz
  lyric: string;
  word?: string; // NEW: the full word this syllable belongs to
}

export interface KaraokeSong {
  id: string;
  title: string;
  artist: string;
  notes: KaraokeNote[];
}

export const SONGS: KaraokeSong[] = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    artist: 'Traditional',
    notes: [
      { time: 0, duration: 0.5, frequency: 261.63, lyric: 'Twin' }, // C4
      { time: 0.5, duration: 0.5, frequency: 261.63, lyric: 'kle' },
      { time: 1, duration: 0.5, frequency: 392.00, lyric: 'Twin' }, // G4
      { time: 1.5, duration: 0.5, frequency: 392.00, lyric: 'kle' },
      { time: 2, duration: 0.5, frequency: 440.00, lyric: 'Lit' }, // A4
      { time: 2.5, duration: 0.5, frequency: 440.00, lyric: 'tle' },
      { time: 3, duration: 1, frequency: 392.00, lyric: 'Star' }, // G4
      // ... (add more for a full verse)
    ],
  },
  // Add more songs as needed
  {
    id: 'solntse',
    title: 'Звезда по имени Солнце',
    artist: 'Кино',
    notes: [
      // Куплет 1
      // Белый снег, серый лёд
      { time: 0, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Бе', word: 'Белый' },
      { time: 0.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'лый', word: 'Белый' },
      { time: 1, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'снег,', word: 'снег,' },
      { time: 1.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'се', word: 'серый' },
      { time: 2, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'рый', word: 'серый' },
      { time: 2.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'лёд', word: 'лёд' },
      // На растрескавшейся земле
      { time: 3, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'На', word: 'На' },
      { time: 3.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'рас', word: 'растрескавшейся' },
      { time: 4, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'трес', word: 'растрескавшейся' },
      { time: 4.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'кав', word: 'растрескавшейся' },
      { time: 5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'шей', word: 'растрескавшейся' },
      { time: 5.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ся', word: 'растрескавшейся' },
      { time: 6, duration: (1-0.35), frequency: (261.63-160), lyric: 'земле', word: 'земле' },
      // Одеялом лоскутным на ней
      { time: 7, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'О', word: 'Одеялом' },
      { time: 7.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'де', word: 'Одеялом' },
      { time: 8, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'я', word: 'Одеялом' },
      { time: 8.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'лом', word: 'Одеялом' },
      { time: 9, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'лос', word: 'лоскутным' },
      { time: 9.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'кут', word: 'лоскутным' },
      { time: 10, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'ным', word: 'лоскутным' },
      { time: 10.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'на', word: 'на' },
      { time: 11, duration: (1 -0.35),frequency: (329.63-160), lyric: 'ней', word: 'ней' },
      // Город в дорожной петле
      { time: 12, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'Го', word: 'Город' },
      { time: 12.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'род', word: 'Город' },
      { time: 13, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'в', word: 'в' },
      { time: 13.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'до', word: 'дорожной' },
      { time: 14, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'рож', word: 'дорожной' },
      { time: 14.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ной', word: 'дорожной' },
      { time: 15, duration: (1 -0.35),frequency: (349.23-160), lyric: 'петле', word: 'петле' },
      // А над городом плывут облака
      { time: 16, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'А', word: 'А' },
      { time: 16.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'над', word: 'над' },
      { time: 17, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'го', word: 'городом' },
      { time: 17.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ро', word: 'городом' },
      { time: 18, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'дом', word: 'городом' },
      { time: 18.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'плы', word: 'плывут' },
      { time: 19, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'вут', word: 'плывут' },
      { time: 19.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'об', word: 'облака' },
      { time: 20, duration: (1 -0.35),frequency: (329.63-160), lyric: 'лака', word: 'облака' },
      // Закрывая небесный свет
      { time: 21, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'За', word: 'Закрывая' },
      { time: 21.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'кры', word: 'Закрывая' },
      { time: 22, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ва', word: 'Закрывая' },
      { time: 22.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'я', word: 'Закрывая' },
      { time: 23, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'не', word: 'небесный' },
      { time: 23.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'бес', word: 'небесный' },
      { time: 24, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ный', word: 'небесный' },
      { time: 24.5, duration: (1-0.35),frequency: (329.63-160), lyric: 'свет', word: 'свет' },
      // А над городом жёлтый дым
      { time: 25.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'А', word: 'А' },
      { time: 26, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'над', word: 'над' },
      { time: 26.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'го', word: 'городом' },
      { time: 27, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ро', word: 'городом' },
      { time: 27.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'дом', word: 'городом' },
      { time: 28, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'жёл', word: 'жёлтый' },
      { time: 28.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'тый', word: 'жёлтый' },
      { time: 29, duration: (1-0.35),frequency: (293.66-160), lyric: 'дым', word: 'дым' },
      // Городу две тысячи лет
      { time: 30, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Го', word: 'Городу' },
      { time: 30.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ро', word: 'Городу' },
      { time: 31, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ду', word: 'Городу' },
      { time: 31.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'две', word: 'две' },
      { time: 32, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'ты', word: 'тысячи' },
      { time: 32.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ся', word: 'тысячи' },
      { time: 33, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'чи', word: 'тысячи' },
      { time: 33.5, duration: (1-0.35),frequency: (349.23-160), lyric: 'лет', word: 'лет' },
      // Прожитых под светом
      { time: 34.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Про', word: 'Прожитых' },
      { time: 35, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'жи', word: 'Прожитых' },
      { time: 35.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'тых', word: 'Прожитых' },
      { time: 36, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'под', word: 'под' },
      { time: 36.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'све', word: 'светом' },
      { time: 37, duration: (1-0.35),frequency: (349.23-160), lyric: 'том', word: 'светом' },
      // Звезды по имени Солнце
      { time: 38, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Звез', word: 'Звезды' },
      { time: 38.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ды', word: 'Звезды' },
      { time: 39, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'по', word: 'по' },
      { time: 39.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'име', word: 'имени' },
      { time: 40, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ни', word: 'имени' },
      { time: 40.5, duration: (1-0.35),frequency: (392.00-160), lyric: 'Солнце', word: 'Солнце' },
      // Куплет 2
      // И две тысячи лет война
      { time: 42, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'И', word: 'И' },
      { time: 42.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'две', word: 'две' },
      { time: 43, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ты', word: 'тысячи' },
      { time: 43.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ся', word: 'тысячи' },
      { time: 44, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'чи', word: 'тысячи' },
      { time: 44.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'лет', word: 'лет' },
      { time: 45, duration: (1-0.35),frequency: (261.63-160), lyric: 'война', word: 'война' },
      // Война без особых причин
      { time: 46, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Вой', word: 'Война' },
      { time: 46.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'на', word: 'Война' },
      { time: 47, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'без', word: 'без' },
      { time: 47.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'о', word: 'особых' },
      { time: 48, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'со', word: 'особых' },
      { time: 48.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'бых', word: 'особых' },
      { time: 49, duration: (1-0.35),frequency: (261.63-160), lyric: 'при', word: 'причин' },
      { time: 49.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'чин', word: 'причин' },
      // Война дело молодых
      { time: 50, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Вой', word: 'Война' },
      { time: 50.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'на', word: 'Война' },
      { time: 51, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'де', word: 'дело' },
      { time: 51.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ло', word: 'дело' },
      { time: 52, duration: (1-0.35),frequency: (261.63-160), lyric: 'молодых', word: 'молодых' },
      // Лекарство против морщин
      { time: 53, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Ле', word: 'Лекарство' },
      { time: 53.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'кар', word: 'Лекарство' },
      { time: 54, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ство', word: 'Лекарство' },
      { time: 54.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'про', word: 'против' },
      { time: 55, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'тив', word: 'против' },
      { time: 55.5, duration: (1-0.35),frequency: (261.63-160), lyric: 'морщин', word: 'морщин' },
      // Красная-красная кровь
      { time: 56.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Кра', word: 'Красная' },
      { time: 57, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'сная-', word: 'Красная' },
      { time: 57.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'кра', word: 'Красная' },
      { time: 58, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'сная', word: 'Красная' },
      { time: 58.5, duration: (1-0.35),frequency: (293.66-160), lyric: 'кровь', word: 'кровь' },
      // Через час уже просто земля
      { time: 59.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'Че', word: 'Через' },
      { time: 60, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'рез', word: 'Через' },
      { time: 60.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'час', word: 'час' },
      { time: 61, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'уже', word: 'уже' },
      { time: 61.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'просто', word: 'просто' },
      { time: 62, duration: (1-0.35),frequency: (293.66-160), lyric: 'земля', word: 'земля' },
      // Через два — на ней цветы и трава
      { time: 63, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'Че', word: 'Через' },
      { time: 63.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'рез', word: 'Через' },
      { time: 64, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'два', word: 'два' },
      { time: 64.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'на', word: 'на' },
      { time: 65, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ней', word: 'ней' },
      { time: 65.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'цветы', word: 'цветы' },
      { time: 66, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'и', word: 'и' },
      { time: 66.5, duration: (1-0.35),frequency: (293.66-160), lyric: 'трава', word: 'трава' },
      // Через три — она снова жива
      { time: 67.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Че', word: 'Через' },
      { time: 68, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'рез', word: 'Через' },
      { time: 68.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'три', word: 'три' },
      { time: 69, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'она', word: 'она' },
      { time: 69.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'снова', word: 'снова' },
      { time: 70, duration: (1-0.35),frequency: (293.66-160), lyric: 'жива', word: 'жива' },
      // И согрета лучами
      { time: 71, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'И', word: 'И' },
      { time: 71.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'согрета', word: 'согрета' },
      { time: 72, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'лучами', word: 'лучами' },
      // Звезды по имени Солнце
      { time: 73, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Звез', word: 'Звезды' },
      { time: 73.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'ды', word: 'Звезды' },
      { time: 74, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'по', word: 'по' },
      { time: 74.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'име', word: 'имени' },
      { time: 75, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ни', word: 'имени' },
      { time: 75.5, duration: (1-0.35),frequency: (392.00-160), lyric: 'Солнце', word: 'Солнце' },
      // Куплет 3
      // И мы знаем, что так было всегда
      { time: 77, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'И', word: 'И' },
      { time: 77.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'мы', word: 'мы' },
      { time: 78, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'знаем', word: 'знаем' },
      { time: 78.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'что', word: 'что' },
      { time: 79, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'так', word: 'так' },
      { time: 79.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'было', word: 'было' },
      { time: 80, duration: (1-0.35),frequency: (261.63-160), lyric: 'всегда', word: 'всегда' },
      // Что судьбою больше любим
      { time: 81, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Что', word: 'Что' },
      { time: 81.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'судьбою', word: 'судьбою' },
      { time: 82, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'больше', word: 'больше' },
      { time: 82.5, duration: (1-0.35),frequency: (329.63-160), lyric: 'любим', word: 'любим' },
      // Кто живёт по законам другим
      { time: 83.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'Кто', word: 'Кто' },
      { time: 84, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'живёт', word: 'живёт' },
      { time: 84.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'по', word: 'по' },
      { time: 85, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'законам', word: 'законам' },
      { time: 85.5, duration: (1-0.35),frequency: (329.63-160), lyric: 'другим', word: 'другим' },
      // И кому умирать молодым
      { time: 86.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'И', word: 'И' },
      { time: 87, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'кому', word: 'кому' },
      { time: 87.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'умирать', word: 'умирать' },
      { time: 88, duration: (1-0.35),frequency: (349.23-160), lyric: 'молодым', word: 'молодым' },
      // Он не помнит слово «да» и слово «нет»
      { time: 89, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Он', word: 'Он' },
      { time: 89.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'не', word: 'не' },
      { time: 90, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'помнит', word: 'помнит' },
      { time: 90.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'слово', word: 'слово' },
      { time: 91, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'да', word: 'да' },
      { time: 91.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'и', word: 'и' },
      { time: 92, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'слово', word: 'слово' },
      { time: 92.5, duration: (1-0.35),frequency: (293.66-160), lyric: 'нет', word: 'нет' },
      // Он не помнит ни чинов, ни имён
      { time: 93.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'Он', word: 'Он' },
      { time: 94, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'не', word: 'не' },
      { time: 94.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'помнит', word: 'помнит' },
      { time: 95, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'ни', word: 'ни' },
      { time: 95.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'чинов', word: 'чинов' },
      { time: 96, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'ни', word: 'ни' },
      { time: 96.5, duration: (1-0.35),frequency: (261.63-160), lyric: 'имён', word: 'имён' },
      // И способен дотянуться до звёзд
      { time: 97.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'И', word: 'И' },
      { time: 98, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'способен', word: 'способен' },
      { time: 98.5, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'дотянуться', word: 'дотянуться' },
      { time: 99, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'до', word: 'до' },
      { time: 99.5, duration: (1-0.35),frequency: (293.66-160), lyric: 'звёзд', word: 'звёзд' },
      // Не считая, что это сон
      { time: 100.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'Не', word: 'Не' },
      { time: 101, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'считая', word: 'считая' },
      { time: 101.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'что', word: 'что' },
      { time: 102, duration: (0.5-0.30), frequency: (349.23-160), lyric: 'это', word: 'это' },
      { time: 102.5, duration: (1-0.35),frequency: (329.63-160), lyric: 'сон', word: 'сон' },
      // И упасть опалённым
      { time: 103.5, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'И', word: 'И' },
      { time: 104, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'упасть', word: 'упасть' },
      { time: 104.5, duration: (1-0.35),frequency: (349.23-160), lyric: 'опалённым', word: 'опалённым' },
      // Звездой по имени Солнце
      { time: 105.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'Звез', word: 'Звездой' },
      { time: 106, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'дой', word: 'Звездой' },
      { time: 106.5, duration: (0.5-0.30), frequency: (261.63-160), lyric: 'по', word: 'по' },
      { time: 107, duration: (0.5-0.30), frequency: (293.66-160), lyric: 'име', word: 'имени' },
      { time: 107.5, duration: (0.5-0.30), frequency: (329.63-160), lyric: 'ни', word: 'имени' },
      { time: 108, duration: (1-0.35),frequency: (392.00-160), lyric: 'Солнце', word: 'Солнце' },
    ],
  },
]; 