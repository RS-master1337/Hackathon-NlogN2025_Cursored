import { SONGS, KaraokeSong } from './assets/songs';
import { List, ListItem, ListItemText, Typography, Paper, ListItemButton } from '@mui/material';

interface KaraokeSelectorProps {
  selectedSongId: string | null;
  onSelect: (song: KaraokeSong) => void;
}

const KaraokeSelector = ({ selectedSongId, onSelect }: KaraokeSelectorProps) => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Typography variant="h6" gutterBottom>
      Select a Song
    </Typography>
    <List>
      {SONGS.map((song) => (
        <ListItem key={song.id} disablePadding>
          <ListItemButton
            selected={selectedSongId === song.id}
            onClick={() => onSelect(song)}
          >
            <ListItemText primary={song.title} secondary={song.artist} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default KaraokeSelector; 