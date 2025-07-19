import React from 'react';

const CANVA_EMBED_URL =
  'https://www.canva.com/design/DAGtPKamhIg/BZ1orkPRNQ5EVBVT-IkdYg/view?embed';

export default function CanvasPage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <iframe
        src={CANVA_EMBED_URL}
        title="Apresentação Portfólio de Social Media"
        loading="lazy"
        allow="fullscreen"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}
