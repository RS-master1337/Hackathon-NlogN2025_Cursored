import { useEffect, useRef, useState } from 'react';
import { PitchDetector } from 'pitchy';

interface PitchDetectionResult {
  pitch: number | null;
  clarity: number;
}

export const usePitchDetection = (): PitchDetectionResult => {
  const [pitch, setPitch] = useState<number | null>(null);
  const [clarity, setClarity] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const detectorRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    let stream: MediaStream;
    const buffer = new Float32Array(2048);

    const start = async () => {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;
      sourceRef.current.connect(analyserRef.current);
      detectorRef.current = PitchDetector.forFloat32Array(buffer.length);

      const detect = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getFloatTimeDomainData(buffer);
        const [detectedPitch, detectedClarity] = detectorRef.current.findPitch(buffer, audioContextRef.current!.sampleRate);
        if (isMounted) {
          setPitch(detectedClarity > 0.95 ? detectedPitch : null);
          setClarity(detectedClarity);
        }
        rafRef.current = requestAnimationFrame(detect);
      };
      detect();
    };
    start();

    return () => {
      isMounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return { pitch, clarity };
}; 