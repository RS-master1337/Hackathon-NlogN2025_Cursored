import { useState } from 'react';
import styled from 'styled-components';
import KaraokeSelector from './KaraokeSelector';
import KaraokePlayer from './KaraokePlayer';
import DebugPitch from './DebugPitch';
import { KaraokeSong } from './assets/songs';
import { Paper, Typography, Box } from '@mui/material';

const AppContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const App = () => {
  const [selectedSong, setSelectedSong] = useState<KaraokeSong | null>(null);

  return (
    <AppContainer>
      <Typography variant="h3" component="h1" gutterBottom>
        Karaoke App
      </Typography>
      <KaraokeSelector
        selectedSongId={selectedSong?.id || null}
        onSelect={setSelectedSong}
      />
      {selectedSong ? (
        <>
          <KaraokePlayer song={selectedSong} />
          <DebugPitch />
        </>
      ) : (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="body1">Select a song to start singing!</Typography>
        </Paper>
      )}
    </AppContainer>
  );
};

export default App;
