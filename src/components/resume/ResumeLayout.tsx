import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const ResumeLayout = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-7xl mx-auto shadow-2xl">
        <div className="grid lg:grid-cols-[340px_1fr]">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
