import { useState, type CSSProperties } from 'react';

export interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  label?: string;
}

const starStyle = (filled: boolean, interactive: boolean): CSSProperties => ({
  background: 'none',
  border: 'none',
  padding: '0 2px',
  fontSize: '2rem',
  lineHeight: 1,
  cursor: interactive ? 'pointer' : 'default',
  color: filled ? '#f5b301' : '#c9c9c9',
});

export function Rating({
  value,
  max = 5,
  onChange,
  readOnly = false,
  label = 'Rating',
}: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;

  const select = (next: number) => {
    if (readOnly) return;
    onChange?.(next);
  };

  return (
    <div role="radiogroup" aria-label={label} style={{ display: 'inline-flex' }}>
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => {
        const filled = star <= display;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star === value}
            aria-label={`${star} ${star === 1 ? 'star' : 'stars'}`}
            disabled={readOnly}
            style={starStyle(filled, !readOnly)}
            onClick={() => select(star)}
            onMouseEnter={() => {
              if (!readOnly) setHovered(star);
            }}
            onMouseLeave={() => {
              if (!readOnly) setHovered(null);
            }}
          >
            {filled ? '★' : '☆'}
          </button>
        );
      })}
    </div>
  );
}
