import { ScrollShadow } from '@nextui-org/scroll-shadow';
import React from 'react';

function App() {
  return (
    <main>
      <ScrollShadow size={100} className="w-[300px] h-[400px]">
        <p>hello</p>
      </ScrollShadow>
    </main>
  );
}

export default App;
