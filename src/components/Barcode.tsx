import React, { useMemo } from 'react';

interface BarcodeProps {
  value: string;
  height?: number;
  className?: string;
  showText?: boolean;
  withScanLine?: boolean;
  subText?: string;
}

/**
 * Deterministic pseudo Code-128 bar pattern generator from text.
 * Generates an authentic industrial barcode pattern with guard bars and checksum feel.
 */
export const Barcode: React.FC<BarcodeProps> = ({
  value,
  height = 54,
  className = '',
  showText = true,
  withScanLine = false,
  subText
}) => {
  // Generate a deterministic sequence of bar widths and gaps
  const bars = useMemo(() => {
    const pattern: { width: number; isBar: boolean }[] = [];
    
    // Left quiet zone & Start guard (narrow-wide-narrow-wide)
    pattern.push({ width: 3, isBar: true });
    pattern.push({ width: 2, isBar: false });
    pattern.push({ width: 1, isBar: true });
    pattern.push({ width: 2, isBar: false });

    // Encode characters into varying widths
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      const b1 = (code % 3) + 1;
      const g1 = ((code >> 1) % 3) + 1;
      const b2 = ((code >> 2) % 4) + 1;
      const g2 = ((code >> 3) % 2) + 1;
      const b3 = ((code >> 4) % 3) + 1;
      const g3 = ((code >> 5) % 2) + 1;

      pattern.push({ width: b1, isBar: true });
      pattern.push({ width: g1, isBar: false });
      pattern.push({ width: b2, isBar: true });
      pattern.push({ width: g2, isBar: false });
      pattern.push({ width: b3, isBar: true });
      pattern.push({ width: g3, isBar: false });
    }

    // Stop guard
    pattern.push({ width: 2, isBar: true });
    pattern.push({ width: 1, isBar: false });
    pattern.push({ width: 4, isBar: true });
    pattern.push({ width: 1, isBar: false });
    pattern.push({ width: 2, isBar: true });

    return pattern;
  }, [value]);

  const totalWidth = useMemo(() => {
    return bars.reduce((acc, bar) => acc + bar.width, 0);
  }, [bars]);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Industrial Tag Header if subtext provided */}
      {subText && (
        <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-[var(--muted)] mb-1.5 px-0.5">
          <span>SPEC-ID // AUTO-ID</span>
          <span>{subText}</span>
        </div>
      )}

      {/* Barcode Frame */}
      <div className="relative overflow-hidden bg-[var(--surface)] p-2.5 sm:p-3 border border-[var(--line)] rounded-[4px] shadow-sm">
        {/* SVG Bars */}
        <svg
          viewBox={`0 0 ${totalWidth} ${height}`}
          className="w-full h-10 sm:h-12 block"
          preserveAspectRatio="none"
          role="img"
          aria-label={`Barcode representing ${value}`}
        >
          {(() => {
            let currentX = 0;
            return bars.map((bar, idx) => {
              const x = currentX;
              currentX += bar.width;
              if (!bar.isBar) return null;
              return (
                <rect
                  key={idx}
                  x={x}
                  y={0}
                  width={bar.width}
                  height={height}
                  className="fill-[var(--ink)]"
                />
              );
            });
          })()}
        </svg>

        {/* Laser Scan-line (single sweep on load) */}
        {withScanLine && (
          <div
            className="barcode-laser absolute left-0 right-0 h-[2px] bg-[var(--scan-line)] shadow-[0_0_8px_#EF4444] pointer-events-none z-10"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Monospace Human Readable Text */}
      {showText && (
        <div className="text-center font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[var(--ink)] mt-1.5 uppercase font-medium">
          *{value}*
        </div>
      )}
    </div>
  );
};

/**
 * Quiet, thin barcode divider motif used between sections.
 */
export const BarcodeDivider: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="py-12 flex items-center gap-4 text-[var(--line)] opacity-80 select-none overflow-hidden" aria-hidden="true">
      <div className="flex-1 h-[1px] bg-[var(--line)]" />
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[2px] h-3">
          <span className="w-[1px] h-full bg-[var(--line)]" />
          <span className="w-[3px] h-full bg-[var(--line)]" />
          <span className="w-[1px] h-full bg-[var(--line)]" />
          <span className="w-[2px] h-full bg-[var(--line)]" />
          <span className="w-[1px] h-full bg-[var(--line)]" />
          <span className="w-[4px] h-full bg-[var(--line)]" />
          <span className="w-[2px] h-full bg-[var(--line)]" />
          <span className="w-[1px] h-full bg-[var(--line)]" />
          <span className="w-[3px] h-full bg-[var(--line)]" />
        </div>
        {label && (
          <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)]">
            {label}
          </span>
        )}
      </div>
      <div className="flex-1 h-[1px] bg-[var(--line)]" />
    </div>
  );
};
