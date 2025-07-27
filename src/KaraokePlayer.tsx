import { useEffect, useRef, useState, useMemo } from 'react';
import { KaraokeSong } from './assets/songs';
import { usePitchDetection } from './usePitchDetection';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';

interface KaraokePlayerProps {
  song: KaraokeSong;
}

const PITCH_TOLERANCE = 60; // Hz
const SEMITONE_DOWN = Math.pow(2, -1 / 12);

const groupNotesByLines = (notes: KaraokeSong['notes']) => {
  // This helper groups notes into lines by reconstructing the original lines from the notes array.
  // It assumes that notes for a line are consecutive and that the first note of a line starts with a capital letter or punctuation.
  const lines: { notes: typeof notes; lyric: string }[] = [];
  let currentLine: typeof notes = [];
  let currentLyric = '';
  notes.forEach((note, idx) => {
    // Heuristic: new line if lyric starts with uppercase or punctuation, or if currentLine is empty
    const isNewLine =
      currentLine.length === 0 ||
      (note.lyric && note.lyric[0] === note.lyric[0].toUpperCase() && idx !== 0);
    if (isNewLine && currentLine.length > 0) {
      lines.push({ notes: currentLine, lyric: currentLyric.trim() });
      currentLine = [];
      currentLyric = '';
    }
    currentLine.push(note);
    currentLyric += note.lyric;
  });
  if (currentLine.length > 0) {
    lines.push({ notes: currentLine, lyric: currentLyric.trim() });
  }
  return lines;
};

// Helper to group notes into words for a line using the 'word' property
const groupSyllablesIntoWordsByWordProp = (notes: { lyric: string; word?: string }[]) => {
  const words: { word: string; syllables: typeof notes }[] = [];
  let currentWord = notes[0]?.word || '';
  let currentSyllables: typeof notes = [];
  notes.forEach((note, idx) => {
    if (note.word !== currentWord && currentSyllables.length > 0) {
      words.push({ word: currentWord || '', syllables: currentSyllables });
      currentSyllables = [];
      currentWord = note.word || '';
    }
    currentSyllables.push(note);
  });
  if (currentSyllables.length > 0) {
    words.push({ word: currentWord || '', syllables: currentSyllables });
  }
  return words;
};

const KaraokePlayer = ({ song }: KaraokePlayerProps) => {
  const { pitch, clarity } = usePitchDetection();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const lines = useMemo(() => groupNotesByLines(song.notes), [song.notes]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime((t) => t + 0.1);
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const currentNoteIdx = song.notes.findIndex(
    (note) =>
      currentTime >= note.time &&
      currentTime < note.time + note.duration
  );
  const currentNote = song.notes[currentNoteIdx];

  let hit = false;
  if (currentNote && pitch && clarity > 0.95) {
    const shiftedFrequency = currentNote.frequency * SEMITONE_DOWN;
    hit = Math.abs(pitch - shiftedFrequency) < PITCH_TOLERANCE;
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        {song.title} - {song.artist}
      </Typography>
      <Box sx={{ mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={
            (currentTime /
              (song.notes[song.notes.length - 1]?.time +
                song.notes[song.notes.length - 1]?.duration)) *
            100
          }
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {lines.map((line, lineIdx) => (
          <Typography
            key={lineIdx}
            variant="h6"
            sx={{
              display: 'flex',
              gap: 1,
              fontWeight: 'bold',
              mb: 1,
              color: line.notes.some((n, idx) => song.notes.findIndex((note) => note === n) === currentNoteIdx) ? (hit ? 'success.main' : 'error.main') : 'text.primary',
            }}
          >
            {groupSyllablesIntoWordsByWordProp(line.notes).map((word, wordIdx) => (
              <Box key={wordIdx} component="span" sx={{ display: 'inline-block' }}>
                {word.syllables.map((note, idx) => {
                  const isCurrent = song.notes.findIndex((n) => n === note) === currentNoteIdx;
                  return (
                    <Box
                      key={idx}
                      component="span"
                      sx={{
                        color: isCurrent ? (hit ? 'success.main' : 'error.main') : 'inherit',
                        textDecoration: isCurrent ? 'underline' : 'none',
                        fontSize: isCurrent ? '1.5em' : '1em',
                        fontWeight: isCurrent ? 'bold' : 'normal',
                        transition: 'color 0.2s, font-size 0.2s',
                        letterSpacing: 0,
                      }}
                    >
                      {note.lyric}
                    </Box>
                  );
                })}
              </Box>
            ))}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <button onClick={() => { setIsPlaying(true); setCurrentTime(0); }}>Start</button>
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Pitch: {pitch ? pitch.toFixed(1) + ' Hz' : '—'} | Clarity: {clarity.toFixed(2)}
      </Typography>
      {currentNote && (
        <Typography variant="body2">
          Target: {(currentNote.frequency * SEMITONE_DOWN).toFixed(1)} Hz
        </Typography>
      )}
      <Typography variant="body2" color={hit ? 'success.main' : 'error.main'}>
        {currentNote ? (hit ? 'Hit!' : 'Miss!') : ''}
      </Typography>
    </Paper>
  );
};

export default KaraokePlayer; 