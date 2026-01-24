import { Download } from "lucide-react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const ResumeLayout = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted print:bg-white print:min-h-0">
      {/* Download Button - Hidden when printing */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      <div className="max-w-7xl mx-auto shadow-2xl print:shadow-none print:max-w-none">
        <div className="grid lg:grid-cols-[340px_1fr] print:grid-cols-[280px_1fr]">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
