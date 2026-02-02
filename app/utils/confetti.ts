import confetti from 'canvas-confetti';

export const dropConfetti = () => {
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 90,
    origin: { x: 0.25, y: 1 },
  });
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 90,
    origin: { x: 0.75, y: 1 },
  });
};

export const dropConfettiheavy = () => {
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 45,
    origin: { x: 0, y: 0.5 },
  });
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 135,
    origin: { x: 1, y: 0.5 },
  });
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 90,
    origin: { x: 0.25, y: 1 },
  });
  confetti({
    zIndex: 999,
    particleCount: 150,
    colors: ['#fff', '#70b8d6'],
    spread: 100,
    angle: 90,
    origin: { x: 0.75, y: 1 },
  });
};

export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  // Meses en JavaScript son 0-indexados (Enero = 0), así que se añade 1 para obtener el mes correcto.
  const month = date.getMonth() + 1;
  // Asegurar que el día y el mes siempre tengan dos dígitos.
  const day = date.getDate();
  return `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
};
