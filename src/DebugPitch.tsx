import { usePitchDetection } from './usePitchDetection';
import { Paper, Typography, Button, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

const DebugPitch = () => {
  const { pitch, clarity } = usePitchDetection();
  const [copied, setCopied] = useState(false);
  const debugInfo = `Pitch: ${pitch ? pitch.toFixed(1) : '—'} Hz\nClarity: ${clarity.toFixed(2)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(debugInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Debug Pitch</Typography>
      <Typography variant="body2">{debugInfo}</Typography>
      <Box sx={{ mt: 1 }}>
        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
          size="small"
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>
      </Box>
    </Paper>
  );
};

export default DebugPitch; 