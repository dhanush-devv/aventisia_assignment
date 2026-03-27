import React, { useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KnowledgeBase from './components/KnowledgeBase';
import CreateDrawer from './components/CreateDrawer';

function App() {
  const drawerRef = useRef(null);

  const handleOpenDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.open();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-gray-900 overflow-hidden">
      {/* Top Navigation */}
      <Header />
      
      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden relative bg-white">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-10 py-6 relative bg-white">
          <KnowledgeBase onCreateNew={handleOpenDrawer} />
        </main>
      </div>

      {/* Slide-over Drawer (maintains its own state) */}
      <CreateDrawer ref={drawerRef} />
    </div>
  );
}

export default App;
